import Link from 'next/link'
import ScrollToTop from '../../components/ScrollToTop'

export default function OfficeDressCodesUAEPage() {
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
              Professional Style
            </span>
            <span className="text-gray-500 text-sm">January 15, 2025</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-500 text-sm">5 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Office Dress Codes in UAE: A Complete Guide for 2025
          </h1>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Navigate the professional landscape with confidence. From government offices to international corporations, understand what to wear where.
          </p>
        </div>

        {/* Article content */}
        <article className="bg-white/90 backdrop-blur rounded-lg p-8 shadow-lg prose prose-lg max-w-none">
          <h2>Understanding UAE's Professional Environment</h2>
          <p>
            The UAE's business environment is uniquely cosmopolitan, blending traditional values with international standards. Whether you're working in Abu Dhabi's government sector, Dubai's financial district, or Sharjah's industrial zones, understanding the nuances of professional dress codes is crucial for career success.
          </p>

          <h2>Government Sector Guidelines</h2>
          <p>
            <strong>Abu Dhabi Government Offices:</strong> Conservative business attire is essential. For women, this means:
          </p>
          <ul>
            <li>Long-sleeved blouses or blazers</li>
            <li>Trousers or knee-length skirts (minimum)</li>
            <li>Closed-toe shoes</li>
            <li>Minimal jewelry and makeup</li>
          </ul>
          
          <p>
            <strong>Federal Institutions:</strong> Similar conservative approach with emphasis on modesty and professionalism.
          </p>

          <h2>International Corporations</h2>
          <p>
            <strong>DIFC & ADGM:</strong> More relaxed business casual is acceptable, but err on the side of formality:
          </p>
          <ul>
            <li>Smart blazers with tailored trousers</li>
            <li>Quality fabrics that breathe in the heat</li>
            <li>Professional footwear suitable for marble floors</li>
          </ul>

          <h2>Industry-Specific Considerations</h2>
          
          <h3>Banking & Finance</h3>
          <p>
            Emirates NBD, ADCB, and international banks maintain strict formal dress codes. Think sharp blazers, crisp shirts, and quality leather accessories.
          </p>

          <h3>Oil & Gas</h3>
          <p>
            ADNOC, Shell, and other energy companies often require business formal for office settings, with safety-compliant attire for site visits.
          </p>

          <h3>Tech & Startups</h3>
          <p>
            Dubai Internet City and Abu Dhabi's tech hubs are more flexible, but client-facing roles still require polished business casual.
          </p>

          <h2>Seasonal Adjustments</h2>
          <p>
            <strong>Summer (May-September):</strong> Light fabrics, breathable materials, but always professional. Consider:
          </p>
          <ul>
            <li>Linen-cotton blends</li>
            <li>Light wool tropical weights</li>
            <li>Moisture-wicking undergarments</li>
          </ul>

          <p>
            <strong>Winter (December-February):</strong> Opportunity for richer fabrics and layering while maintaining cultural sensitivity.
          </p>

          <h2>Key Takeaways</h2>
          <ul>
            <li>When in doubt, dress more conservatively</li>
            <li>Quality over quantity - invest in versatile pieces</li>
            <li>Consider the extreme temperature changes between outdoors and AC</li>
            <li>Respect local customs while maintaining professional standards</li>
            <li>Build relationships with local tailors for perfect fits</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
            <p className="font-semibold mb-2">💡 Pro Tip</p>
            <p className="text-sm">
              Keep a lightweight blazer or cardigan at your desk for unexpected meetings or overly air-conditioned conference rooms.
            </p>
          </div>
        </article>

        {/* CTA */}
        <div className="mt-16 text-center bg-black text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Never Guess Your Outfit Again</h3>
          <p className="mb-6">GetDressed AI understands UAE's unique professional requirements and climate challenges.</p>
          <Link 
            href="/"
            className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-gray-100 transition-colors"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}