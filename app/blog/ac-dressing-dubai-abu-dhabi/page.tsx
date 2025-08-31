'use client'

import Link from 'next/link'
import ScrollToTop from '../../components/ScrollToTop'
import NewsletterPopup from '../../components/NewsletterPopup'
import { useNewsletterPopup } from '../../hooks/useNewsletterPopup'

export default function ACDressingPage() {
  const { isOpen, openPopup, closePopup } = useNewsletterPopup()
  return (
    <div className="min-h-screen relative">
      {/* Background pattern */}
      <div 
        className="fixed inset-0 opacity-60 dark:opacity-0"
        style={{
          backgroundImage: 'linear-gradient(45deg, #ddc4c9 25%, transparent 25%, transparent 75%, #ddc4c9 75%, #ddc4c9), linear-gradient(45deg, #ddc4c9 25%, transparent 25%, transparent 75%, #ddc4c9 75%, #ddc4c9)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
      <div 
        className="fixed inset-0 opacity-0 dark:opacity-10"
        style={{
          backgroundImage: 'linear-gradient(45deg, #f3e7e9 25%, transparent 25%, transparent 75%, #f3e7e9 75%, #f3e7e9), linear-gradient(45deg, #f3e7e9 25%, transparent 25%, transparent 75%, #f3e7e9 75%, #f3e7e9)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-white to-blue-100 opacity-90" />
      
      <div className="relative max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-black mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-black text-white px-3 py-1 text-sm font-medium rounded-full">
              Climate Fashion
            </span>
            <span className="text-gray-500 text-sm">January 12, 2025</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">4 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Mastering AC Dressing: From 45°C Streets to 18°C Malls
          </h1>
          
          <p className="text-xl text-gray-900 leading-relaxed">
            The ultimate guide to layering in the UAE. How to stay comfortable transitioning between extreme outdoor heat and freezing indoor AC.
          </p>
        </div>

        {/* Article content */}
        <article className="bg-white/90 backdrop-blur rounded-lg p-8 shadow-lg prose prose-lg max-w-none">
          <h2>The UAE Temperature Challenge</h2>
          <p>
            Living in the UAE means navigating one of the world&apos;s most extreme temperature differentials. Step outside: 45°C+ humidity. Walk into Dubai Mall: 18°C arctic blast. This daily thermal shock requires a strategic approach to dressing that most fashion advice completely ignores.
          </p>

          <h2>The Science of Layering</h2>
          <p>
            <strong>Base Layer Strategy:</strong> Your foundation should handle both extremes:
          </p>
          <ul>
            <li><strong>Moisture-wicking fabrics:</strong> Technical cotton blends, merino wool, or bamboo fibers</li>
            <li><strong>Breathable weaves:</strong> Avoid synthetic materials that trap heat and humidity</li>
            <li><strong>Proper fit:</strong> Not too tight (restricts airflow) or too loose (looks unprofessional)</li>
          </ul>

          <h2>The Essential Pieces</h2>
          
          <h3>The Transition Blazer</h3>
          <p>
            This is your secret weapon. A lightweight, unlined blazer in tropical wool or cotton-silk blend that you can:
          </p>
          <ul>
            <li>Remove quickly in the heat</li>
            <li>Put on instantly when entering AC</li>
            <li>Maintain professional appearance throughout</li>
          </ul>

          <h3>The Strategic Cardigan</h3>
          <p>
            For women, a fine-gauge cardigan serves multiple purposes:
          </p>
          <ul>
            <li>Provides coverage in conservative settings</li>
            <li>Instant warmth in over-conditioned spaces</li>
            <li>Professional polish for unexpected meetings</li>
          </ul>

          <h2>Fabric Selection Mastery</h2>
          
          <h3>Summer Fabrics That Work</h3>
          <ul>
            <li><strong>Tropical Wool:</strong> Surprisingly cool, wrinkle-resistant, professional</li>
            <li><strong>Linen-Cotton Blends:</strong> Breathable but less wrinkled than pure linen</li>
            <li><strong>Technical Cotton:</strong> Moisture-wicking with professional appearance</li>
            <li><strong>Silk Crepe:</strong> Naturally temperature-regulating, elegant</li>
          </ul>

          <h3>Fabrics to Avoid</h3>
          <ul>
            <li>Polyester blends (trap heat and odor)</li>
            <li>Heavy cotton (too hot outside, takes forever to cool)</li>
            <li>Thick knits (overheating nightmare)</li>
          </ul>

          <h2>Daily Scenarios & Solutions</h2>
          
          <h3>Office to Dubai Mall</h3>
          <p><strong>The Challenge:</strong> Business meeting at 2 PM, family dinner at Mall of the Emirates at 7 PM.</p>
          <p><strong>The Solution:</strong></p>
          <ul>
            <li>Start with silk shell + lightweight blazer</li>
            <li>Keep a cashmere wrap in the car</li>
            <li>Comfortable flats that work for both settings</li>
          </ul>

          <h3>Government Office to Beach Walk</h3>
          <p><strong>The Challenge:</strong> Formal morning meeting in Abu Dhabi, evening at Corniche.</p>
          <p><strong>The Solution:</strong></p>
          <ul>
            <li>Modular dressing: blazer comes off, sleeves roll up</li>
            <li>Comfortable sandals in the car</li>
            <li>Lightweight scarf for instant style change</li>
          </ul>

          <h2>The AC Survival Kit</h2>
          <p>Every UAE resident needs an &quot;indoor survival kit&quot;:</p>
          <ul>
            <li><strong>Desk drawer:</strong> Lightweight cardigan or pashmina</li>
            <li><strong>Car:</strong> Blazer or jacket for unexpected stops</li>
            <li><strong>Handbag:</strong> Silk scarf for restaurant AC attacks</li>
            <li><strong>Office:</strong> Cozy socks for under-desk warmth</li>
          </ul>

          <h2>Maintenance in Extreme Conditions</h2>
          
          <h3>Sweat Management</h3>
          <ul>
            <li>Invest in quality antiperspirant (applied the night before)</li>
            <li>Bring blotting papers for face touch-ups</li>
            <li>Keep a spare shirt in your car for emergencies</li>
          </ul>

          <h3>Fabric Care</h3>
          <ul>
            <li>Hang clothes immediately to prevent odor setting</li>
            <li>Use a dehumidifier in your closet</li>
            <li>Professional cleaning for important pieces</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-8">
            <p className="font-semibold mb-2">🌡️ Temperature Hack</p>
            <p className="text-sm">
              Keep your transition pieces at office temperature (around 22°C) so they feel neutral when you put them on, whether coming from heat or AC.
            </p>
          </div>

          <h2>Building Your AC-Ready Wardrobe</h2>
          <p><strong>Investment Priorities:</strong></p>
          <ol>
            <li>One perfect blazer that works with everything</li>
            <li>Quality moisture-wicking undergarments</li>
            <li>Lightweight cardigans in neutral colors</li>
            <li>Comfortable shoes for temperature transitions</li>
            <li>Versatile scarves and wraps</li>
          </ol>
        </article>

        {/* CTA */}
        <div className="mt-16 text-center bg-black text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">AI That Understands UAE Weather</h3>
          <p className="mb-6">GetDressed considers temperature transitions, humidity levels, and your daily schedule to recommend the perfect layers.</p>
          <button 
            onClick={openPopup}
            className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Early Access
          </button>
        </div>
      </div>
      <ScrollToTop />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  )
}