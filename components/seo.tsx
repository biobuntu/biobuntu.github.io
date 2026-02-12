import React from "react"
import Head from "next/head"

type SEOProps = {
  title: string
  description: string
  url: string
  isArticle?: boolean
  datePublished?: string
  dateModified?: string
  image?: string
  authorName?: string
  section?: string
  tags?: string[]
}

export function SEO({
  title,
  description,
  url,
  isArticle = false,
  datePublished,
  dateModified,
  image = "/biobuntu.png",
  authorName = "BioBuntu",
  section,
  tags = []
}: SEOProps) {
  // Only emit article-specific schema here. Site-wide Organization/WebSite JSON-LD
  // is injected once from `app/layout.tsx` to avoid duplicates.
  const article: any = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url
        },
        headline: title,
        image: [
          `https://biobuntu.github.io${image}`
        ],
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
          "@type": "Person",
          name: authorName
        },
        publisher: {
          "@type": "Organization",
          name: "BioBuntu",
          logo: {
            "@type": "ImageObject",
            url: `https://biobuntu.github.io${image}`
          }
        },
        articleSection: section,
        keywords: tags && tags.length ? tags.join(", ") : undefined,
        description
      }
    : null

  // BreadcrumbList for articles helps search engines show richer results
  const breadcrumb = isArticle
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://biobuntu.github.io"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: url
          }
        ]
      }
    : null

  const ld: any[] = []
  if (article) ld.push(article)
  if (breadcrumb) ld.push(breadcrumb)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`https://biobuntu.github.io${image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        {isArticle && (
          <>
            <meta property="article:published_time" content={datePublished} />
            {dateModified && <meta property="article:modified_time" content={dateModified} />}
            <meta property="article:author" content={authorName} />
            {section && <meta property="article:section" content={section} />}
            {tags && tags.length > 0 && (
              <meta name="keywords" content={tags.join(", ")} />
            )}
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          key="ld-json"
        />
      </Head>

      {/* Render JSON-LD server-side as a fallback so it's present in static HTML
          (some metadata helpers may inject client-side). Search engines accept
          JSON-LD in the body as well. */}
      {ld && ld.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      )}
    </>
  )
}

export default SEO
