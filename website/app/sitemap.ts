import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3001'
const API_URL  = process.env.NEXT_PUBLIC_API_URL  || 'http://localhost:5000/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  // ── STATIC PAGES ─────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`,                  priority: 1.0, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/about-us`,         priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/blog`,             priority: 0.9, changeFrequency: 'daily'   },
    { url: `${BASE_URL}/products`,         priority: 0.8, changeFrequency: 'weekly'  },
    { url: `${BASE_URL}/tools`,            priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/cookie-policy`,    priority: 0.3, changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/disclaimer`,       priority: 0.3, changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/privacy-policy`,   priority: 0.3, changeFrequency: 'yearly'  },
    { url: `${BASE_URL}/terms-conditions`, priority: 0.3, changeFrequency: 'yearly'  },
  ]

  // ── STATIC TOOLS ─────────────────────────────────────────────
  const toolSlugs = [
    'car-loan-emi-calculator',
    'compound-interest-calculator',
    'fd-calculator',
    'gratuity-calculator',
    'home-loan-emi-calculator',
    'hra-calculator',
    'income-tax-calculator',
    'lumpsum-calculator',
    'monthly-saving-calculator',
    'nps-calculator',
    'personal-loan-emi-calculator',
  ]

  const toolPages: MetadataRoute.Sitemap = toolSlugs.map(slug => ({
    url: `${BASE_URL}/tools/${slug}`,
    priority: 0.6 as const,
    changeFrequency: 'monthly' as const,
  }))

  // ── DYNAMIC: Categories + SubCategories + Blogs ───────────────
  type CategoryItem = { slug: string; subCategories: { slug: string }[] }
  type BlogItem     = { slug: string }
  type ProductItem  = { slug: string }

  let categoryPages:    MetadataRoute.Sitemap = []
  let subCategoryPages: MetadataRoute.Sitemap = []
  let blogPages:        MetadataRoute.Sitemap = []
  let productPages:     MetadataRoute.Sitemap = []

  try {
    const res  = await fetch(`${API_URL}/web/header-data`)
    const json = await res.json()

    const categories: CategoryItem[] = json?.data?.categories ?? []
    const blogs:      BlogItem[]     = json?.data?.blogs      ?? []

    // /[categorySlug]
    categoryPages = categories.map(cat => ({
      url: `${BASE_URL}/${cat.slug}`,
      priority: 0.8 as const,
      changeFrequency: 'weekly' as const,
    }))

    // /[categorySlug]/[subCategorySlug]
    subCategoryPages = categories.flatMap(cat =>
      cat.subCategories.map(sub => ({
        url: `${BASE_URL}/${cat.slug}/${sub.slug}`,
        priority: 0.7 as const,
        changeFrequency: 'weekly' as const,
      }))
    )

    // /blog/[slug]
    blogPages = blogs.map(blog => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      priority: 0.6 as const,
      changeFrequency: 'monthly' as const,
    }))

  } catch (e) {
    console.error('Header data fetch failed:', e)
  }

  // ── DYNAMIC: Products ─────────────────────────────────────────
  try {
    const res  = await fetch(`${API_URL}/public/products`)
    const json = await res.json()

    const products: ProductItem[] = json?.data ?? []

    productPages = products.map(p => ({
      url: `${BASE_URL}/products/${p.slug}`,
      priority: 0.6 as const,
      changeFrequency: 'weekly' as const,
    }))

  } catch (e) {
    console.error('Products fetch failed:', e)
  }

  // ── MERGE ALL ─────────────────────────────────────────────────
  return [
    ...staticPages,
    ...toolPages,
    ...categoryPages,
    ...subCategoryPages,
    ...blogPages,
    ...productPages,
  ]
}