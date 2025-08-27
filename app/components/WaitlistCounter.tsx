'use client'

import { useWaitlistCounter } from '../context/WaitlistContext'

export default function WaitlistCounter() {
  const { spotsLeft, totalSpots } = useWaitlistCounter()

  return (
    <p className="text-center text-sm text-gray-600 mb-6">
      <span className="font-bold text-black">{spotsLeft} spots left</span> out of {totalSpots} early access
    </p>
  )
}