import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://getdressed.ae',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://getdressed.ae/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://getdressed.ae/blog/getdressed-vs-competitors-ai-wardrobe-management-uae',
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://getdressed.ae/blog/ac-dressing-dubai-abu-dhabi',
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://getdressed.ae/blog/office-dress-codes-uae',
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://getdressed.ae/blog/sustainable-wardrobe-middle-east',
      lastModified: new Date('2025-09-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
