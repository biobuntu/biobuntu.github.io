import React from "react"
import SEO from "../../../components/seo"

export default function ReleaseOne() {
  const siteUrl = "https://biobuntu.github.io"
  const url = `${siteUrl}/news/release-1`
  const published = "2026-02-12T10:00:00Z"

  return (
    <article className="max-w-4xl mx-auto py-12">
      <SEO
        title="BioBuntu v0.1 Released"
        description="We released v0.1 with core features for reproducible bioinformatics workflows."
        url={url}
        isArticle
        datePublished={published}
        image="/biobuntu.png"
        authorName="BioBuntu Team"
        section="Releases"
        tags={["release","bioinformatics","reproducibility"]}
      />

      <h1 className="text-3xl font-bold mb-4">BioBuntu v0.1 Released</h1>
      <p className="text-sm text-muted-foreground mb-6">Published {new Date(published).toDateString()}</p>

      <section className="prose">
        <p>
          BioBuntu v0.1 is available. This news post demonstrates NewsArticle structured data to
          improve inclusion in news surfaces and signaling to Knowledge Graph.
        </p>
      </section>
    </article>
  )
}
