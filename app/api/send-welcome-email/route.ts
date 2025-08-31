import { NextRequest, NextResponse } from 'next/server'

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const MAILGUN_DOMAIN = 'getdressed.ae'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Отправка welcome письма через Mailgun
    const formData = new FormData()
    formData.append('from', 'GetDressed Team <info@getdressed.ae>')
    formData.append('to', email)
    formData.append('subject', 'Welcome to GetDressed Waitlist! 🎉')
    formData.append('html', getWelcomeEmailHTML())

    const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
        'Accept': 'application/json'
      },
      body: formData
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Mailgun API error:')
      console.error('Status:', response.status)
      console.error('StatusText:', response.statusText)
      console.error('Response:', errorText)
      return NextResponse.json({ 
        error: 'Failed to send email', 
        details: errorText,
        status: response.status 
      }, { status: 500 })
    }

    const result = await response.json()
    return NextResponse.json({ success: true, messageId: result.id })

  } catch (error) {
    console.error('Error sending welcome email:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


function getWelcomeEmailHTML() {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to GetDressed!</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px; 
            background: #f9fafb;
        }
        .container { 
            background: white; 
            border-radius: 8px; 
            padding: 40px 30px; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .logo { 
            text-align: center; 
            margin-bottom: 30px; 
        }
        .logo h1 { 
            font-size: 5.5rem; 
            font-weight: 900; 
            color: #111827; 
            margin: 0;
        }
        .logo-icon {
            width: 120px;
            height: 120px;
            margin-bottom: 0;
        }
        .logo span { 
            font-weight: 300; 
            font-style: italic; 
        }
        .badge { 
            display: inline-block; 
            background: #000; 
            color: white; 
            padding: 6px 12px; 
            border-radius: 20px; 
            font-size: 0.75rem; 
            font-weight: 600; 
            text-transform: uppercase; 
            letter-spacing: 1px; 
            margin-bottom: 20px;
        }
        .benefits { 
            background: #fef3c7; 
            border: 1px solid #f59e0b; 
            border-radius: 8px; 
            padding: 20px; 
            margin: 20px 0;
        }
        .benefits h3 { 
            margin: 0 0 10px 0; 
            color: #92400e; 
        }
        .benefits ul { 
            margin: 0; 
            padding-left: 20px; 
            color: #78350f; 
        }
        .cta-button { 
            display: inline-block; 
            background: #000; 
            color: white; 
            padding: 12px 24px; 
            text-decoration: none; 
            border-radius: 6px; 
            font-weight: 600; 
            margin: 20px 0;
        }
        .footer { 
            text-align: center; 
            margin-top: 30px; 
            padding-top: 20px; 
            border-top: 1px solid #e5e7eb; 
            color: #6b7280; 
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://i.imgur.com/ginK1JM.png" alt="GetDressed Logo" class="logo-icon">
            <h1>get<span>dressed</span></h1>
            <div class="badge">Beta Testing September 2025</div>
        </div>
        
        <h2>🎉 Welcome to the GetDressed Waitlist!</h2>
        
        <p>Thank you for joining the exclusive waitlist for GetDressed - the AI personal stylist designed specifically for UAE lifestyle and climate!</p>
        
        <div class="benefits">
            <h3>🎯 Your Early Access Benefits:</h3>
            <ul>
                <li><strong>50% OFF lifetime pricing</strong> - Save on your subscription forever</li>
                <li><strong>Priority AI processing</strong> - Faster outfit generation</li>
                <li><strong>Exclusive beta features</strong> - First access to new updates</li>
                <li><strong>UAE-specific styling</strong> - Perfect for our unique climate challenges</li>
            </ul>
        </div>
        
        <h3>What happens next?</h3>
        <p>We're taking extra time to perfect GetDressed for UAE's unique fashion challenges. Here's our careful rollout timeline:</p>
        <ul>
            <li>🧪 <strong>Beta testing applications open</strong> (September 2025)</li>
            <li>🚀 <strong>Closed beta testing begins</strong> (October 2025)</li>
            <li>🎉 <strong>Full public launch</strong> (November 2025)</li>
            <li>💰 <strong>Special early-bird promotions</strong> are available</li>
        </ul>
        
        <p>In the meantime, follow our journey on social media for styling tips and behind-the-scenes updates!</p>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://www.instagram.com/getdressed_ae/" style="display: inline-block; background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D); color: white; padding: 12px 20px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px 10px 10px; box-shadow: 0 4px 15px rgba(131, 58, 180, 0.4);">
                📸 Follow on Instagram
            </a>
            <a href="https://www.facebook.com/getdressed.ae" style="display: inline-block; background: #1877F2; color: white; padding: 12px 20px; text-decoration: none; border-radius: 25px; font-weight: 600; margin: 0 10px 10px 10px; box-shadow: 0 4px 15px rgba(24, 119, 242, 0.4);">
                👍 Like on Facebook
            </a>
        </div>
        
        <div class="footer">
            <p>Built with ❤️ in Abu Dhabi</p>
            <p>
                <a href="https://getdressed.ae" style="color: #6b7280;">getdressed.ae</a> • 
                <a href="mailto:info@getdressed.ae" style="color: #6b7280;">info@getdressed.ae</a>
            </p>
        </div>
    </div>
</body>
</html>
  `
}