import Link from 'next/link'
import ScrollToTop from '../components/ScrollToTop'

export default function BlogPage() {
  const posts = [
    {
      slug: 'getdressed-vs-competitors-ai-wardrobe-management-uae',
      title: 'GetDressed vs. Competitors: The Ultimate AI Wardrobe Management Comparison',
      excerpt: 'How GetDressed stacks up against Whering, Stylebook, and other AI styling apps in the competitive UAE fashion tech market.',
      date: 'August 30, 2025',
      readTime: '8 min read',
      category: 'Tech Comparison'
    },
    {
      slug: 'office-dress-codes-uae',
      title: 'Office Dress Codes in UAE: A Complete Guide for 2025',
      excerpt: 'Navigate the professional landscape with confidence. From government offices to international corporations, understand what to wear where.',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'Professional Style'
    },
    {
      slug: 'ac-dressing-dubai-abu-dhabi',
      title: 'Mastering AC Dressing: From 45°C Streets to 18°C Malls',
      excerpt: 'The ultimate guide to layering in the UAE. How to stay comfortable transitioning between extreme outdoor heat and freezing indoor AC.',
      date: 'January 12, 2025',
      readTime: '4 min read',
      category: 'Climate Fashion'
    },
    {
      slug: 'sustainable-wardrobe-middle-east',
      title: 'Building a Sustainable Wardrobe in the Middle East',
      excerpt: 'Quality over quantity: Creating a capsule wardrobe that works in Dubai\'s climate while respecting local culture and environmental impact.',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Sustainable Fashion'
    }
  ]

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
      
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-4">
            <img src="/gd-logo.png" alt="GetDressed Logo" className="w-26 h-26 object-contain mx-auto" />
          </Link>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Style Blog
          </h1>
          <p className="text-xl text-gray-900">
            Fashion insights for the modern UAE professional
          </p>
        </div>

        {/* Blog posts */}
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white/90 backdrop-blur rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-black text-white px-3 py-1 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">•</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-black transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-gray-900 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-black font-medium hover:underline"
              >
                Read full article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Back to home */}
        <div className="text-center mt-16">
          <Link 
            href="/"
            className="inline-flex items-center bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to GetDressed
          </Link>
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}