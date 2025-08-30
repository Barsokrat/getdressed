'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function QuickPoll() {
  const [selected, setSelected] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const options = [
    'Office dress codes',
    'Weekend casual', 
    'Special events',
    'AC transitions'
  ]

  const handleSelect = async (option: string) => {
    if (isSubmitting) return
    
    setIsSubmitting(true)
    setSelected(option)
    
    try {
      const { error } = await supabase
        .from('poll_responses')
        .insert([{ 
          challenge: option,
          created_at: new Date().toISOString()
        }])
      
      if (error) {
        console.error('Error saving poll response:', error)
      } else {
        console.log('Poll response saved:', option)
      }
    } catch (err) {
      console.error('Error connecting to database:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-lg mb-12 text-center text-black">
      <p className="font-bold text-black mb-4 text-xl">
        {selected 
          ? "Thanks! We'll focus on this in your experience 👍" 
          : "Quick question: What's your biggest outfit challenge?"
        }
      </p>
      {!selected && (
        <div className="flex flex-wrap gap-2 justify-center">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              disabled={isSubmitting}
              className="px-4 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {option}
            </button>
          ))}
        </div>
      )}
      {selected && (
        <p className="text-sm text-gray-600 mt-2">
          You selected: <span className="font-bold">{selected}</span>
        </p>
      )}
    </div>
  )
}