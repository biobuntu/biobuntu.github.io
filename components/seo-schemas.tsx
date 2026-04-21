/**
 * SEO JSON-LD Schemas Component
 * Provides comprehensive structured data for BioBuntu and Mubashir Ali entity linking
 */

export function SEOSchemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://biobuntu.github.io/#organization",
    "name": "BioBuntu",
    "alternateName": "Bio Data Hub",
    "url": "https://biobuntu.github.io",
    "logo": "https://biobuntu.github.io/biobuntu.png",
    "image": {
      "@type": "ImageObject",
      "url": "https://biobuntu.github.io/biobuntu.png",
      "width": 512,
      "height": 512
    },
    "description": "Comprehensive open-source bioinformatics platform for genomic analysis",
    "sameAs": [
      "https://github.com/biobuntu/biobuntu",
      "https://pypi.org/project/biobuntu/",
      "https://www.linkedin.com/company/biobuntu",
      "https://www.producthunt.com/products/biobuntu",
      "https://www.saashub.com/BioBuntu",
      "https://libraries.io/pypi/biobuntu"
    ],
    "founder": {
      "@type": "Person",
      "@id": "https://mubashirali.vercel.app/#person",
      "name": "Mubashir Ali",
      "url": "https://mubashirali.vercel.app",
      "jobTitle": "Bioinformatician",
      "image": "https://mubashirali.vercel.app/avatar.jpg",
      "sameAs": [
        "https://linkedin.com/in/mubashirali3/",
        "https://github.com/mubashir1837",
        "https://x.com/mubashir1837",
        "https://orcid.org/0009-0006-0222-7585"
      ]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Technical Support",
      "email": "mubashirali1837@gmail.com",
      "url": "https://github.com/biobuntu/biobuntu/issues"
    },
    "knowsAbout": [
      "Bioinformatics",
      "Genomic Analysis",
      "Data Science",
      "Open Source Software",
      "Python",
      "Machine Learning"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Code with Bismillah",
      "url": "https://codewithbismillah.online"
    }
  };

  const creatorPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mubashirali.vercel.app/#person",
    "name": "Mubashir Ali",
    "url": "https://mubashirali.vercel.app",
    "jobTitle": "Bioinformatician & Full-Stack Software Developer",
    "email": "mubashirali1837@gmail.com",
    "image": "https://mubashirali.vercel.app/avatar.jpg",
    "description": "Creator of BioBuntu - an open-source bioinformatics platform for genomic analysis",
    "affiliation": {
      "@type": "Organization",
      "name": "Code with Bismillah",
      "url": "https://codewithbismillah.online"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Code with Bismillah"
    },
    "knowsAbout": [
      "Bioinformatics",
      "Genomic Data Analysis",
      "Python Development",
      "Data Science",
      "Machine Learning",
      "Full-Stack Development",
      "Next.js",
      "Open Source Software"
    ],
    "sameAs": [
      "https://linkedin.com/in/mubashirali3/",
      "https://github.com/mubashir1837",
      "https://x.com/mubashir1837",
      "https://dev.to/mubashir1837",
      "https://scholar.google.com/citations?user=cSRYdWAAAAAJ",
      "https://orcid.org/0009-0006-0222-7585",
      "https://www.producthunt.com/@mubashir1837/",
      "https://www.researchgate.net/profile/Mubashir-Ali-31"
    ]
  };

  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "0",
    "offerCount": "1",
    "offers": [
      {
        "@type": "Offer",
        "name": "BioBuntu - Free & Open Source",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://pypi.org/project/biobuntu/",
        "seller": {
          "@type": "Organization",
          "name": "BioBuntu"
        }
      }
    ]
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      
      {/* Creator Person Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creatorPersonSchema)
        }}
      />

      {/* Aggregate Offer Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateOfferSchema)
        }}
      />

      {/* Creator Link with rel="me" */}
      <link rel="me" href="https://mubashirali.vercel.app" />
      <link rel="me" href="https://github.com/mubashir1837" />
      <link rel="me" href="https://x.com/mubashir1837" />
      <link rel="me" href="https://linkedin.com/in/mubashirali3/" />
    </>
  );
}
