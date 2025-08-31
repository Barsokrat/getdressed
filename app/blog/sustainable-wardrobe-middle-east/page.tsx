'use client'

import Link from 'next/link'
import ScrollToTop from '../../components/ScrollToTop'
import NewsletterPopup from '../../components/NewsletterPopup'
import { useNewsletterPopup } from '../../hooks/useNewsletterPopup'

export default function SustainableWardrobePage() {
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
              Sustainable Fashion
            </span>
            <span className="text-gray-500 text-sm">January 10, 2025</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">6 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Building a Sustainable Wardrobe in the Middle East
          </h1>
          
          <p className="text-xl text-gray-900 leading-relaxed">
            Quality over quantity: Creating a capsule wardrobe that works in Dubai&apos;s climate while respecting local culture and environmental impact.
          </p>
        </div>

        {/* Article content */}
        <article className="bg-white/90 backdrop-blur rounded-lg p-8 shadow-lg prose prose-lg max-w-none">
          <h2>Why Sustainability Matters in the UAE</h2>
          <p>
            The UAE&apos;s fashion consumption is among the world&apos;s highest per capita, driven by tax-free shopping, international brands, and social expectations. But the extreme climate means clothes wear out faster, creating even more waste. Building a sustainable wardrobe here isn&apos;t just good for the planet—it&apos;s economically smart and socially responsible.
          </p>

          <h2>The Middle East Climate Reality</h2>
          <p>
            <strong>The Challenge:</strong> UV exposure, humidity, sand, and extreme temperatures destroy fabrics faster than moderate climates. Fast fashion simply can&apos;t survive, making quality investment pieces the only logical choice.
          </p>
          
          <p>
            <strong>The Opportunity:</strong> This harsh environment naturally pushes you toward durable, well-made pieces—which happens to be exactly what sustainable fashion advocates.
          </p>

          <h2>The UAE-Specific Capsule Wardrobe</h2>
          
          <h3>Core Philosophy: 30 Pieces, 100+ Outfits</h3>
          <p>
            Instead of 100+ pieces creating 30 outfits, reverse the formula. Every piece must work with at least 70% of your other items.
          </p>

          <h3>Essential Foundation (10 pieces)</h3>
          <ol>
            <li><strong>White cotton shirt:</strong> Egyptian or Pima cotton, perfect tailoring</li>
            <li><strong>Black blazer:</strong> Tropical wool, unlined for year-round use</li>
            <li><strong>Navy trousers:</strong> Wide-leg for air circulation, professional cut</li>
            <li><strong>Camel trousers:</strong> Versatile neutral for both office and casual</li>
            <li><strong>Black dress:</strong> Midi length, long sleeves for cultural appropriateness</li>
            <li><strong>Silk blouse:</strong> Cream or white, naturally temperature-regulating</li>
            <li><strong>Quality jeans:</strong> Dark wash, no distressing (preserves fabric longer)</li>
            <li><strong>Linen shirt:</strong> Oversized fit for air circulation</li>
            <li><strong>Modest cardigan:</strong> Long-line, lightweight for AC protection</li>
            <li><strong>Perfect white sneakers:</strong> Leather, not canvas (lasts longer in heat)</li>
          </ol>

          <h2>Investment Shopping Strategy</h2>
          
          <h3>The 30-Wear Rule</h3>
          <p>
            Before buying anything, ask: &quot;Will I wear this 30 times in the next year?&quot; If not, don&apos;t buy it. In UAE&apos;s climate, this rule becomes even more critical.
          </p>

          <h3>Cost-Per-Wear Calculation</h3>
          <p>
            <strong>Example:</strong> AED 2,000 blazer worn twice weekly for a year = AED 19 per wear. AED 200 blazer that lasts 6 months = AED 25 per wear. The expensive one is actually cheaper.
          </p>

          <h2>UAE-Friendly Sustainable Brands</h2>
          
          <h3>Local & Regional Options</h3>
          <ul>
            <li><strong>Hind Al Oud:</strong> Traditional meets modern, culturally appropriate</li>
            <li><strong>Fam Atelier:</strong> UAE-based sustainable fashion</li>
            <li><strong>Rosa Clara:</strong> Available in Dubai, focus on quality over trends</li>
          </ul>

          <h3>International Brands in UAE Malls</h3>
          <ul>
            <li><strong>COS:</strong> Minimalist, quality basics available at City Centre</li>
            <li><strong>Uniqlo:</strong> Heat-tech and cooling fabrics perfect for climate</li>
            <li><strong>Massimo Dutti:</strong> Quality construction, timeless designs</li>
          </ul>

          <h2>Climate-Specific Sustainable Practices</h2>
          
          <h3>Fabric Care in Extreme Heat</h3>
          <ul>
            <li><strong>Air dry in shade:</strong> UAE sun will fade and damage fabrics</li>
            <li><strong>Rotate frequently:</strong> Don&apos;t wear same piece two days running</li>
            <li><strong>Professional cleaning:</strong> Invest in quality dry cleaning to extend life</li>
            <li><strong>Storage:</strong> Cedar blocks and proper hangers prevent damage</li>
          </ul>

          <h3>Seasonal Rotation</h3>
          <p>
            Unlike four-season climates, UAE has two main seasons. Store off-season items properly:
          </p>
          <ul>
            <li><strong>Summer storage:</strong> Vacuum-sealed bags with lavender</li>
            <li><strong>Winter storage:</strong> Cedar chests or breathable garment bags</li>
          </ul>

          <h2>The Economic Case</h2>
          
          <h3>Initial Investment vs. Long-term Savings</h3>
          <p>
            <strong>Fast Fashion Approach:</strong> AED 500/month × 12 months = AED 6,000/year
            <br />
            <strong>Capsule Wardrobe:</strong> AED 8,000 initial investment, AED 1,000/year maintenance
            <br />
            <strong>Break-even:</strong> 2 years, then pure savings
          </p>

          <h2>Cultural Considerations</h2>
          
          <h3>Modest Fashion Advantage</h3>
          <p>
            UAE&apos;s modest fashion requirements actually support sustainability:
          </p>
          <ul>
            <li>Longer hemlines and sleeves use more fabric, creating substantial pieces</li>
            <li>Layering is built-in, making pieces more versatile</li>
            <li>Cultural emphasis on quality over flash aligns with sustainable values</li>
          </ul>

          <h3>Social Acceptance</h3>
          <p>
            Wearing the same high-quality pieces regularly is increasingly seen as sophisticated rather than limited, especially among environmentally conscious professionals.
          </p>

          <h2>Practical Shopping Calendar</h2>
          
          <h3>Best Times to Buy in UAE</h3>
          <ul>
            <li><strong>Dubai Shopping Festival (January-February):</strong> Best deals on quality pieces</li>
            <li><strong>Ramadan (varies):</strong> Many stores offer significant discounts</li>
            <li><strong>End of summer (September):</strong> International brands clear summer inventory</li>
            <li><strong>Avoid:</strong> Peak summer when selection is limited</li>
          </ul>

          <h2>Building Your First Capsule</h2>
          
          <h3>Month 1: Foundation Pieces</h3>
          <p>Start with the most versatile items: perfect blazer, white shirt, navy trousers, black dress.</p>
          
          <h3>Month 2-3: Color Coordination</h3>
          <p>Add pieces that work with your foundation: camel trousers, silk blouse, cardigan.</p>
          
          <h3>Month 4-6: Seasonal Adaptations</h3>
          <p>Add pieces for UAE&apos;s two seasons: linen for extreme heat, light layers for winter.</p>

          <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 my-8">
            <p className="font-semibold mb-2">🌱 Sustainability Tip</p>
            <p className="text-sm">
              Calculate water usage: A single cotton t-shirt uses 2,700 liters of water to produce. Every piece you don&apos;t buy saves significant resources.
            </p>
          </div>

          <h2>Measuring Success</h2>
          <p>Track these metrics:</p>
          <ul>
            <li><strong>Cost per wear</strong> of each piece</li>
            <li><strong>Outfit creation</strong> from existing pieces vs. new purchases</li>
            <li><strong>Seasonal versatility</strong> of each item</li>
            <li><strong>Longevity</strong> in UAE&apos;s harsh climate</li>
          </ul>
        </article>

        {/* CTA */}
        <div className="mt-16 text-center bg-black text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Maximize Your Wardrobe Investment</h3>
          <p className="mb-6">GetDressed AI helps you create more outfits from fewer pieces, supporting both sustainability and style goals.</p>
          <button 
            onClick={openPopup}
            className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Build Smart Wardrobes
          </button>
        </div>
      </div>
      <ScrollToTop />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  )
}