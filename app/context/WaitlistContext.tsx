'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

const TOTAL_SPOTS = 100
const DEFAULT_SPOTS = 37

interface WaitlistContextType {
  spotsLeft: number
  totalSpots: number
  decreaseSpots: () => void
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined)

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [spotsLeft, setSpotsLeft] = useState(DEFAULT_SPOTS)

  useEffect(() => {
    // Проверяем sessionStorage при загрузке
    const submitted = sessionStorage.getItem('getdressed_submitted')
    if (submitted === 'true') {
      setSpotsLeft(DEFAULT_SPOTS - 1) // Показываем 36
    }
  }, [])

  const decreaseSpots = () => {
    setSpotsLeft(DEFAULT_SPOTS - 1) // Показываем 36 после отправки
    sessionStorage.setItem('getdressed_submitted', 'true')
  }

  return (
    <WaitlistContext.Provider value={{
      spotsLeft,
      totalSpots: TOTAL_SPOTS,
      decreaseSpots
    }}>
      {children}
    </WaitlistContext.Provider>
  )
}

export function useWaitlistCounter() {
  const context = useContext(WaitlistContext)
  if (context === undefined) {
    throw new Error('useWaitlistCounter must be used within a WaitlistProvider')
  }
  return context
}