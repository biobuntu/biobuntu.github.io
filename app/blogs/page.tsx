import React from "react"
import Link from "next/link"
import SEO from "../../components/seo"
import BreadcrumbJsonLd from "../../components/breadcrumb-jsonld"

export default function BlogsPage() {
  const siteUrl = "https://biobuntu.github.io"
  return (
    <div className="max-w-4xl mx-auto py-12">
      <SEO
        title="BioBuntu — Blogs"
        description="Read the latest blog posts from BioBuntu about bioinformatics tooling and best practices."
        url={`${siteUrl}/blogs`}
      />
      <BreadcrumbJsonLd
        items={[
          { position: 1, name: "Home", item: "https://biobuntu.github.io" },
          { position: 2, name: "Blogs", item: "https://biobuntu.github.io/blogs" },
        ]}
      />

      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      <ul className="space-y-4">
        <li>
          <Link href="/blogs/hello-world" className="text-primary font-medium">
            Hello World — BioBuntu launch notes
          </Link>
          <p className="text-sm text-muted-foreground">Published: 2026-02-12</p>
        </li>
      </ul>
    </div>
  )
}
