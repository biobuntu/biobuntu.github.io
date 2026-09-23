import React from "react"
import Link from "next/link"
import SEO from "../../components/seo"
import BreadcrumbJsonLd from "../../components/breadcrumb-jsonld"

export default function BlogsPage() {
  const siteUrl = "https://biobuntu.github.io"
  
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://biobuntu.github.io/blogs#collection",
    "name": "BioBuntu Blogs",
    "description": "Blog posts about bioinformatics tooling, genomic analysis, and best practices",
    "url": "https://biobuntu.github.io/blogs",
    "publisher": {
      "@type": "Organization",
      "name": "Code with Bismillah",
      "url": "https://codewithbismillah.online"
    },
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://biobuntu.github.io/#website"
    },
    "hasPart": [
      {
        "@type": "BlogPosting",
        "headline": "Hello World — BioBuntu launch notes",
        "url": "https://biobuntu.github.io/blogs/hello-world",
        "datePublished": "2026-02-12",
        "author": {"@type": "Person", "name": "Mubashir Ali"},
        "publisher": {"@type": "Organization", "name": "Code with Bismillah"}
      },
      {
        "@type": "BlogPosting",
        "headline": "Building Reproducible Genomic Workflows with BioBuntu",
        "url": "https://biobuntu.github.io/blogs/building-reproducible-genomic-workflows",
        "datePublished": "2026-02-21",
        "author": {"@type": "Person", "name": "Mubashir Ali"},
        "publisher": {"@type": "Organization", "name": "Code with Bismillah"}
      },
      {
        "@type": "BlogPosting",
        "headline": "AI-Powered Genomics: Where Machine Learning Meets Biological Insight",
        "url": "https://biobuntu.github.io/blogs/ai-powered-genomics",
        "datePublished": "2026-02-28",
        "author": {"@type": "Person", "name": "Mubashir Ali"},
        "publisher": {"@type": "Organization", "name": "Code with Bismillah"}
      },
      {
        "@type": "BlogPosting",
        "headline": "Why BioBuntu Matters for Modern Lab Operations",
        "url": "https://biobuntu.github.io/blogs/biobuntu-for-lab-operations",
        "datePublished": "2026-03-07",
        "author": {"@type": "Person", "name": "Mubashir Ali"},
        "publisher": {"@type": "Organization", "name": "Code with Bismillah"}
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionPageSchema)
        }}
      />
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

      <ul className="space-y-6">
        <li className="border-b border-border pb-4">
          <Link href="/blogs/hello-world" className="text-primary font-medium text-lg">
            Hello World — BioBuntu launch notes
          </Link>
          <p className="text-sm text-muted-foreground mt-1">Published: 2026-02-12</p>
        </li>
        <li className="border-b border-border pb-4">
          <Link href="/blogs/building-reproducible-genomic-workflows" className="text-primary font-medium text-lg">
            Building Reproducible Genomic Workflows with BioBuntu
          </Link>
          <p className="text-sm text-muted-foreground mt-1">Published: 2026-02-21</p>
        </li>
        <li className="border-b border-border pb-4">
          <Link href="/blogs/ai-powered-genomics" className="text-primary font-medium text-lg">
            AI-Powered Genomics: Where Machine Learning Meets Biological Insight
          </Link>
          <p className="text-sm text-muted-foreground mt-1">Published: 2026-02-28</p>
        </li>
        <li className="pb-2">
          <Link href="/blogs/biobuntu-for-lab-operations" className="text-primary font-medium text-lg">
            Why BioBuntu Matters for Modern Lab Operations
          </Link>
          <p className="text-sm text-muted-foreground mt-1">Published: 2026-03-07</p>
        </li>
      </ul>
    </div>
    </>
  )
}
