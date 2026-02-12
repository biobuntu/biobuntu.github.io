import React from "react"
import SEO from "../../../components/seo"

export default function HelloWorldPost() {
  const siteUrl = "https://biobuntu.github.io"
  const url = `${siteUrl}/blogs/hello-world`
  const published = "2026-02-12T08:00:00Z"

  return (
    <article className="max-w-4xl mx-auto py-12">
      <SEO
        title="Hello World — BioBuntu launch notes"
        description="Announcing the BioBuntu project and goals for accessible bioinformatics tooling."
        url={url}
        isArticle
        datePublished={published}
        image="/biobuntu.png"
        authorName="BioBuntu Team"
        section="Announcements"
        tags={["announcement","launch","bioinformatics"]}
      />

      <h1 className="text-3xl font-bold mb-4">Hello World — BioBuntu launch notes</h1>
      <p className="text-sm text-muted-foreground mb-6">Published {new Date(published).toDateString()}</p>

      <section className="prose">
        <p>
          Welcome to BioBuntu. This is a sample blog post to demonstrate structured data and article
          markup for discoverability (Google News, Knowledge Graph signals, and social platforms).
        </p>
      </section>
    </article>
  )
}
