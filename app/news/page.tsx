import React from "react"
import Link from "next/link"
import SEO from "../../components/seo"

export default function NewsPage() {
  const siteUrl = "https://biobuntu.github.io"
  return (
    <div className="max-w-4xl mx-auto py-12">
      <SEO
        title="BioBuntu — News"
        description="Latest news and press about BioBuntu."
        url={`${siteUrl}/news`}
      />

      <h1 className="text-3xl font-bold mb-6">News</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/news/release-1" className="text-primary font-medium">
            BioBuntu v0.1 Released
          </Link>
          <p className="text-sm text-muted-foreground">Published: 2026-02-12</p>
        </li>
      </ul>
    </div>
  )
}
