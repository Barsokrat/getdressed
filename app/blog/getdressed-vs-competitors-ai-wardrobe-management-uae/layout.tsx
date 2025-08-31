import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GetDressed vs Competitors: AI Wardrobe Management in UAE | GetDressed Blog',
  description: 'Compare GetDressed with Whering, Stylebook, and other AI styling apps. Learn why UAE-specific features make all the difference in wardrobe management.',
  keywords: 'GetDressed vs Whering, Stylebook comparison, AI wardrobe apps UAE, best styling app Dubai, wardrobe management comparison, AI fashion UAE',
  openGraph: {
    title: 'GetDressed vs Competitors: The Ultimate AI Wardrobe Management Comparison',
    description: 'How GetDressed stacks up against Whering, Stylebook, and other AI styling apps in the competitive UAE fashion tech market.',
    type: 'article',
    publishedTime: '2025-08-30',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetDressed vs Competitors: AI Wardrobe Management in UAE',
    description: 'Compare GetDressed with Whering, Stylebook, and other AI styling apps. UAE-specific features analysis.',
  }
}

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}