import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap - GetDressed',
  description: 'XML sitemap for GetDressed.ae website',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="flex items-center mb-6">
            <img src="/favicon/favicon-96x96.png" alt="GetDressed" className="w-8 h-8 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            XML sitemap for GetDressed.ae - your AI personal stylist for the UAE
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Available Pages:</h2>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  🏠 Homepage - getdressed.ae
                </a>
              </li>
              <li>
                <a href="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
                  📝 Blog - getdressed.ae/blog
                </a>
              </li>
              <li className="ml-6">
                <a href="/blog/getdressed-vs-competitors-ai-wardrobe-management-uae" className="text-blue-600 hover:text-blue-800">
                  GetDressed vs Competitors: AI Wardrobe Management in UAE
                </a>
              </li>
              <li className="ml-6">
                <a href="/blog/ac-dressing-dubai-abu-dhabi" className="text-blue-600 hover:text-blue-800">
                  AC Dressing in Dubai and Abu Dhabi
                </a>
              </li>
              <li className="ml-6">
                <a href="/blog/office-dress-codes-uae" className="text-blue-600 hover:text-blue-800">
                  Office Dress Codes in UAE
                </a>
              </li>
              <li className="ml-6">
                <a href="/blog/sustainable-wardrobe-middle-east" className="text-blue-600 hover:text-blue-800">
                  Sustainable Wardrobe in Middle East
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">XML Sitemap</h3>
            <p className="text-blue-800 text-sm">
              The machine-readable XML sitemap is available at: 
              <a href="/sitemap.xml" className="font-mono underline ml-1">
                /sitemap.xml
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}