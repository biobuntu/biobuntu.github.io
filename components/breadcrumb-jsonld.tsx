import React from "react"

type Item = { position: number; name: string; item: string }

export default function BreadcrumbJsonLd({ items }: { items: Item[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(i => ({
      "@type": "ListItem",
      position: i.position,
      name: i.name,
      item: i.item,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      key="breadcrumb-jsonld"
    />
  )
}
