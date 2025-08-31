import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const MAILGUN_DOMAIN = 'getdressed.ae'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { subject, htmlContent, textContent } = await request.json()

    if (!subject || (!htmlContent && !textContent)) {
      return NextResponse.json({ error: 'Subject and content are required' }, { status: 400 })
    }

    // Получаем всех пользователей из waitlist
    const { data: waitlistUsers, error } = await supabase
      .from('waitlist')
      .select('email')

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Failed to fetch waitlist' }, { status: 500 })
    }

    if (!waitlistUsers || waitlistUsers.length === 0) {
      return NextResponse.json({ message: 'No users in waitlist' }, { status: 200 })
    }

    const results = []

    // Отправляем письма по 10 штук одновременно (чтобы не превысить лимиты)
    for (let i = 0; i < waitlistUsers.length; i += 10) {
      const batch = waitlistUsers.slice(i, i + 10)
      
      const batchPromises = batch.map(async (user) => {
        try {
          const formData = new FormData()
          formData.append('from', 'GetDressed Team <info@getdressed.ae>')
          formData.append('to', user.email)
          formData.append('subject', subject)
          
          if (htmlContent) {
            formData.append('html', htmlContent)
          }
          if (textContent) {
            formData.append('text', textContent)
          }

          const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`
            },
            body: formData
          })

          if (response.ok) {
            return { email: user.email, status: 'sent' }
          } else {
            const errorText = await response.text()
            console.error(`Failed to send to ${user.email}:`, errorText)
            return { email: user.email, status: 'failed', error: errorText }
          }
        } catch (error) {
          console.error(`Error sending to ${user.email}:`, error)
          return { email: user.email, status: 'failed', error: String(error) }
        }
      })

      const batchResults = await Promise.all(batchPromises)
      results.push(...batchResults)

      // Небольшая пауза между батчами
      if (i + 10 < waitlistUsers.length) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    const successCount = results.filter(r => r.status === 'sent').length
    const failedCount = results.filter(r => r.status === 'failed').length

    return NextResponse.json({
      success: true,
      totalUsers: waitlistUsers.length,
      sent: successCount,
      failed: failedCount,
      results: results
    })

  } catch (error) {
    console.error('Error sending bulk email:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}