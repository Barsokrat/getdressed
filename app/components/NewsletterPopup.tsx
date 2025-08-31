'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { supabase } from '../lib/supabase'

interface NewsletterPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function NewsletterPopup({ isOpen, onClose }: NewsletterPopupProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }])
      
      if (error) {
        if (error.code === '23505') {
          setError('This email is already on the waitlist!')
        } else {
          setError('Something went wrong. Please try again.')
        }
        setIsLoading(false)
        return
      }
      
      // Отправляем welcome письмо
      try {
        await fetch('/api/send-welcome-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email })
        })
        // Не показываем ошибку, если письмо не отправилось - главное что пользователь добавлен в БД
      } catch (emailError) {
        console.warn('Failed to send welcome email:', emailError)
      }
      
      setIsSubmitted(true)
      
      // Закрыть поп-ап через 2 секунды
      setTimeout(() => {
        handleClose()
      }, 2000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setIsLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleClose = () => {
    onClose()
    setEmail('')
    setError('')
    setIsSubmitted(false)
    setIsLoading(false)
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Join the GetDressed Waitlist
                </h2>
                <p className="text-gray-600">
                  Be first to experience AI styling designed for UAE lifestyle
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Early Access Benefits:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 50% OFF lifetime pricing</li>
                  <li>• Priority AI processing</li>
                  <li>• Exclusive beta features</li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                  />
                </div>
                
                {error && (
                  <div className="text-red-600 text-sm text-center">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-3 px-6 font-bold hover:bg-gray-800 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Adding to waitlist...' : 'Get Early Access'}
                </button>
              </form>

              {/* Privacy note */}
              <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Your data is secure. We never share your information.
              </p>
            </>
          ) : (
            // Success message
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Welcome to the Waitlist!
              </h3>
              <p className="text-gray-600">
                You'll be notified when GetDressed launches in November 2025.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}