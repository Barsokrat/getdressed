'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useWaitlistCounter } from '../context/WaitlistContext'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface WaitlistFormProps {
  onSuccess?: () => void
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const { decreaseSpots } = useWaitlistCounter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }])
      
      if (error) {
        if (error.message.includes('duplicate')) {
          alert('You are already on the waitlist! 🎉')
        } else {
          alert('Something went wrong. Try again!')
        }
        setStatus('idle')
      } else {
        decreaseSpots()
        setStatus('success')
        onSuccess?.()
      }
    } catch {
      alert('Error connecting. Check your connection!')
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-black text-white p-6">
        <p className="text-xl font-bold text-center">
          ✓ SUCCESS! You&apos;re on the list.
        </p>
        <p className="text-sm text-center mt-2 opacity-90">
          Check your email for exclusive updates
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-6 py-4 border-2 border-gray-300 flex-1 text-lg font-medium text-black placeholder-gray-400 focus:outline-none focus:border-black transition"
        disabled={status === 'loading'}
      />
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-800 disabled:opacity-50 transition-colors duration-200 uppercase tracking-wide"
      >
        {status === 'loading' ? 'JOINING...' : 'GET ACCESS'}
      </button>
    </form>
  )
}