import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Code with Bismillah",
      "url": "https://codewithbismillah.online",
      "logo": "https://biobuntu.github.io/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "mubashirali1837@gmail.com",
        "contactType": "technical support",
      },
      "keywords": ["BioBuntu", "bioinformatics", "software development", "education", "programming"],
      "knowsAbout": ["bioinformatics", "data science", "machine learning", "computational biology", "software development", "education"],
      "sameAs": [
        "https://codewithbismillah.online",
        "https://mubashirali.vercel.app",
        "https://www.producthunt.com/products/bio-data-hub-vsce",
        "https://www.linkedin.com/company/code-with-bismiallah/",
        "https://github.com/Code-with-Bismillah",
        "https://www.youtube.com/@CodeWithBismillah",
        "https://www.facebook.com/codewithbismillah.online",
        "https://x.com/CWB_Online",
        "https://www.instagram.com/codewithbismillah.online",
        "https://www.tiktok.com/@codewithbismillah.online",
        "https://dev.to/code-with-bismillah",
        "https://forem.com/code-with-bismillah",
        "https://www.f6s.com/codewithbismillah.online",
        "https://www.g2.com/products/code-with-bismillah",
        "https://www.provenexpert.com/code-with-bismillah/",
        "https://www.trustpilot.com/review/codewithbismillah.online",
        "https://opencollective.com/bismillahcss",
        "https://github.com/BismillahCSS",
        "https://www.npmjs.com/package/bismillahcss",
        "https://marketplace.visualstudio.com/publishers/Mubashir-Ali",
        "https://www.linkedin.com/showcase/bio-data-hub-vsce/"
      ],
      "founder": {
        "@type": "Person",
        "name": "Mubashir Ali",
        "url": "https://mubashirali.vercel.app",
        "sameAs": [
          "https://linkedin.com/in/mubashirali3/",
          "https://mubashirali.vercel.app/",
          "https://github.com/mubashir1837",
          "https://www.facebook.com/mubashir1837",
          "https://www.facebook.com/mubashir18377/",
          "https://www.producthunt.com/@mubashir1837/",
          "https://www.producthunt.com/@mubashir1837/forums",
          "https://www.youtube.com/@BioWithMubashirAli",
          "https://www.instagram.com/mubashir18377/",
          "https://medium.com/@mubashir1837",
          "https://www.wikidata.org/wiki/Q135921355",
          "https://www.ted.com/profiles/50451970",
          "https://openreview.net/profile?id=%7EMubashir_Ali3",
          "https://www.credly.com/users/mubashir1837",
          "https://www.upwork.com/freelancers/~0155a27ec55b615628",
          "https://whatsapp.com/channel/0029Vag7XYc6LwHkv1yfVo3A",
          "https://www.researchgate.net/profile/Mubashir-Ali-31",
          "https://qau.academia.edu/MubashirAli",
          "https://x.com/mubashir1837/status/1966580198066790645",
          "https://www.biorxiv.org/content/10.1101/2025.05.04.652132v1",
          "https://scholar.google.com/citations?user=cSRYdWAAAAAJ",
          "https://huggingface.co/mubashir1837",
          "https://huggingface.co/codewithbismillah",
          "https://www.f6s.com/mubashir1837",
          "https://marketplace.visualstudio.com/publishers/Mubashir-Ali",
          "https://mubashir-a.vercel.app/",
          "https://forem.com/mubashir1837",
          "https://forem.com/code-with-bismillah",
          "https://peoplepill.com/i/mubashir-ali",
          "https://www.flickr.com/people/mubashir1837/",
          "https://www.flickr.com/photos/mubashir1837/",
          "https://www.youtube.com/@CodeWithBismillah",
          "https://www.codewithbismillah.online/",
          "https://sciprofiles.com/profile/mubashir1837",
          "https://www.linkedin.com/company/code-with-bismiallah/",
          "https://www.f6s.com/codewithbismillah.online",
          "https://www.npmjs.com/package/bismillahcss",
          "https://learn.microsoft.com/users/mubashir1837/",
          "https://g.dev/mubashir1837",
          "https://www.hackerrank.com/profile/mubashir1837",
          "https://stackoverflow.com/users/26145758/mubashir-ali",
          "https://linktr.ee/mubashir1837",
          "https://people.bayt.com/mubashir1837/",
          "https://orcid.org/0009-0006-0222-7585",
          "https://marketplace.visualstudio.com/items?itemName=Mubashir-Ali.bio-data-hub",
          "https://www.coursera.org/learner/mubashir1837",
          "https://x.com/mubashir1837",
          "https://giphy.com/channel/mubashir1837",
          "https://www.upwork.com/agencies/1918288291912185024/",
          "https://www.fiverr.com/s/99ojqB0",
          "https://www.fiverr.com/mubashir183",
          "https://github.com/BismillahCSS",
          "https://www.npmjs.com/~mubashir1837",
          "https://x.com/CWB_Online",
          "https://github.com/Code-with-Bismillah",
          "https://github.com/sponsors/mubashir1837",
          "https://www.kaggle.com/mubashir1837",
          "https://www.datacamp.com/portfolio/mubashir1837",
          "https://leetcode.com/u/mubashir1837/",
          "https://ar.pinterest.com/mubashir1837",
          "https://commons.wikimedia.org/wiki/File:Mubashir_Ali_-_Pakistani_Bioinformatician.jpg_01.jpg",
          "https://commons.wikimedia.org/wiki/File:Mubashir_Ali_-_Pakistani_Bioinformatician.jpg_05.png",
          "https://loop.frontiersin.org/people/3198868",
          "https://www.quora.com/profile/Mubashir-Ali-959",
          "https://devpost.com/mubashir1837",
          "https://www.tiktok.com/@codewithbismillah.online",
          "https://opencollective.com/mubashir1837",
          "https://www.facebook.com/codewithbismillah.online",
          "https://hashnode.com/@mubashir1837",
          "https://mastodon.social/@mubashir1837",
          "https://www.patreon.com/c/mubashir1837",
          "https://dev.to/mubashir1837",
          "https://about.me/mubashir1837/",
          "https://dev.to/code-with-bismillah",
          "https://www.trustpilot.com/review/codewithbismillah.online",
          "https://sessionize.com/mubashir1837",
          "https://www.gulftalent.com/people/Mubashir-Ali-12390218",
          "https://sciety-discovery.elifesciences.org/articles/by?article_doi=10.1101/2025.05.04.652132",
          "https://www.semanticscholar.org/author/Mubashir-Ali/2361732131",
          "https://www.bohrium.com/user/mubashir1837",
          "https://europepmc.org/authors/0009-0006-0222-7585",
          "https://mubashir1837.substack.com/",
          "https://mubashir1837.substack.com/p/coding-curiosity-and-the-quest-to",
          "https://mubashir1837.substack.com/p/why-your-genes-are-secretly-running",
          "https://www.webofscience.com/wos/author/record/OEN-7503-2025",
          "https://mubashir1837.carrd.co/",
          "https://www.tiktok.com/@mubashir.1837/",
          "https://www.g2.com/products/code-with-bismillah",
          "https://www.g2.com/users/mubashir1837",
          "https://www.provenexpert.com/code-with-bismillah/",
          "https://x.com/mubashir1837/status/1966437934942364017",
          "https://x.com/mubashir1837/status/1964998945714864180",
          "https://x.com/mubashir1837/status/1962931459322523868",
          "https://x.com/mubashir1837/status/1962612208514310161",
          "https://x.com/mubashir1837/status/1962398703383183675",
          "https://x.com/mubashir1837/status/1962012690399764726",
          "https://x.com/mubashir1837/status/1961736158708166668",
          "https://x.com/mubashir1837/status/1959742798862680092",
          "https://x.com/mubashir1837/status/1958465886571917363",
          "https://x.com/mubashir1837/status/1955122583495385311",
          "https://x.com/mubashir1837/status/1948702048326656449",
          "https://x.com/mubashir1837/status/1934635613380358655",
          "https://x.com/mubashir1837/status/1931320824729944379",
          "https://x.com/mubashir1837/status/1974196232882213171",
          "https://x.com/mubashir1837/status/1973881793154785399",
          "https://x.com/mubashir1837/status/1974781310272184482",
          "https://www.amazon.com/author/mubashiali",
          "https://www.linkedin.com/posts/mubashirali3_datascience-python-machinelearning-activity-7392497411283214336-DocU",
          "https://www.linkedin.com/feed/update/urn:li:groupPost:926817-7390462225473409024",
          "https://www.linkedin.com/posts/mubashirali3_biodatahub-bioinformatics-datascience-activity-7391551376864116737-cZ-w",
          "https://www.linkedin.com/posts/mubashirali3_bioinformatics-genomics-bigdata-activity-7390654575751557120-rseJ",
          "https://www.linkedin.com/posts/mubashirali3_bioinformatics-genomics-bigdata-activity-7390431518134927360-uzAQ",
          "https://lnkd.in/dBwXPTDF",
          "https://i1.rgstatic.net/ii/profile.image/11431281673033538-1760268203876_Q128/Mubashir-Ali-31.jpg1",
          "http://youtube.com/post/UgkxquWHzfTTfAsXLLX7dzBJU4n6tPpa-Yww?si=8OP9_5753A8VgZ_o",
          "https://vt.tiktok.com/ZSURRNAaV/",
          "https://www.tiktok.com/@mubashir.1837/video/7562889434484460808",
          "https://lablab.ai/u/@mubashir1837"
        ],
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "BioDataHub",
      alternateName: ["Biobuntu", "biobuntu", "biobuntu"],
      url: "https://biobuntu.github.io",
      description: "VS Code extension for bioinformatics data analysis and visualization",
      operatingSystem: "Windows, macOS, Linux",
      applicationCategory: ["DeveloperApplication", "Bioinformatics", "Data Science", "Machine Learning", "Visualization"],
      softwareVersion: "1.5.0",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Mubashir Ali",
      },
      downloadUrl: "https://marketplace.visualstudio.com/items?itemName=Mubashir-Ali.bio-data-hub",
      applicationSubCategory: "Bioinformatics",
      keywords: [
        "big data",
        "bioinformatics",
        "bioinformatics tools",
        "biological data",
        "biostatistics",
        "biotechnology",
        "clinical data",
        "computational biology",
        "csv",
        "csv viewer",
        "data analysis",
        "data analytics",
        "data cleaning",
        "data exploration",
        "data management",
        "data mining",
        "data processing",
        "data science",
        "data transformation",
        "data visualization",
        "dna analysis",
        "genetic analysis",
        "genetics",
        "genome sequencing",
        "genomics",
        "health informatics",
        "keybindings",
        "life sciences",
        "machine learning",
        "metadata",
        "metagenomics",
        "NGS analysis",
        "omics",
        "PCA & Clustering",
        "previewCSV",
        "proteomics",
        "research tool",
        "rna sequencing",
        "scientific computing",
        "vsce"
      ],
      applicationSuite: "BioDataHub Suite",
      availableOnDevice: "desktop",
      countriesNotSupported: "North Korea, Iran",
      countriesSupported: "Worldwide",
      featureList: "Data discovery, Dataset management, Data analysis, Visualization, PCA, Clustering, Metadata generation",
      fileSize: "50MB",
      installUrl: "https://marketplace.visualstudio.com/items?itemName=Mubashir-Ali.bio-data-hub",
      memoryRequirements: "4GB RAM",
      permissions: "Read and write access to files",
      processorRequirements: "Intel i5 or equivalent",
      releaseNotes: "https://biobuntu.github.io/release-notes",
      runtimePlatform: "Node.js",
      screenshot: "https://biobuntu.github.io/screenshot.png",
      softwareAddOn: {
        "@type": "SoftwareApplication",
        name: "BioDataHub Pro",
        description: "Premium features for BioDataHub.",
        url: "https://biobuntu.github.io/pro",
        softwareVersion: "1.5.0",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "100",
        bestRating: "5",
        worstRating: "1",
      },
      sameAs: [
        "https://github.com/biobuntu/biobuntu",
        "https://pypi.org/project/biobuntu/",
        "https://libraries.io/pypi/biobuntu",
        "https://www.piwheels.org/project/biobuntu/",
        "https://data.safetycli.com/packages/pypi/biobuntu/",
        "https://www.producthunt.com/products/biobuntu",
        "https://www.linkedin.com/company/biobuntu",
        "https://data.safetycli.com/packages/pypi/biobuntu/changelog"
      ],
    },
    {
      "@type": "WebSite",
      name: "BioDataHub",
      alternateName: ["Bio-Data-Hub", "BioDataHub", "Bio Data Hub", "Bio Data Hub VSCE"],
      url: "https://biobuntu.github.io",
      description: "VS Code extension for bioinformatics data analysis and visualization",
      keywords: ["BioDataHub", "bioinformatics", "VS Code extension", "data analysis", "data visualization", "PCA", "clustering", "genomics", "proteomics"],
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://biobuntu.github.io/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Person",
      "name": "Mubashir Ali",
      "url": "https://mubashirali.vercel.app",
      "sameAs": [
        "https://orcid.org/0009-0006-0222-7585",
        "https://linkedin.com/in/mubashirali3/",
        "https://github.com/mubashir1837",
        "https://x.com/mubashir1837"
      ],
      "jobTitle": "Bioinformatician",
      "worksFor": {
        "@type": "Organization",
        "name": "Code with Bismillah"
      },
      "knowsAbout": ["bioinformatics", "data science", "machine learning", "genomics", "proteomics", "software development"]
    },
    {
      "@type": "ScholarlyArticle",
      "name": "BioDataHub: An Integrated VS Code Extension for Streamlined Bioinformatics Dataset Analysis and Visualization",
      "url": "https://www.researchsquare.com/article/rs-7861003/v1",
      "sameAs": "https://doi.org/10.21203/rs.3.rs-7861003/v1",
      "author": {
        "@type": "Person",
        "name": "Mubashir Ali",
        "sameAs": "https://orcid.org/0009-0006-0222-7585"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Code with Bismillah"
      },
      "datePublished": "2025-01-01",
      "description": "BioDataHub is a powerful VS Code extension designed for bioinformatics professionals and data scientists. It simplifies the exploration, visualization, and management of CSV datasets, enabling users to analyze biological data efficiently.",
      "keywords": ["BioDataHub", "bioinformatics", "VS Code extension", "data analysis", "PCA", "clustering"]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is BioDataHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BioDataHub is a powerful VS Code extension designed for bioinformatics professionals to explore, visualize, and manage CSV datasets efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "How do I install BioDataHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can install BioDataHub from the Visual Studio Marketplace by searching for 'Bio-Data-Hub' or using the command 'ext install Mubashir-Ali.bio-data-hub' in VS Code.",
          },
        },
        {
          "@type": "Question",
          name: "What features does BioDataHub offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BioDataHub offers dataset search, CSV preview, metadata generation, data visualization, PCA analysis, K-means clustering, and data export functionalities.",
          },
        },
        {
          "@type": "Question",
          name: "What are the system requirements for BioDataHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BioDataHub requires VS Code 1.70.0 or higher, Node.js 14.x or higher, 4GB RAM, and 200MB available storage. It supports Windows, macOS, and Linux.",
          },
        },
        {
          "@type": "Question",
          name: "How do I update BioDataHub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BioDataHub updates automatically through VS Code. You can also manually update by going to Extensions → Bio-Data-Hub → Update. Check the changelog for new features.",
          },
        },
        {
          "@type": "Question",
          name: "Can BioDataHub handle large datasets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, BioDataHub is designed to handle large bioinformatics datasets efficiently. It includes performance optimizations for data processing and visualization.",
          },
        },
        {
          "@type": "Question",
          name: "Is BioDataHub compatible with other bioinformatics tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "BioDataHub integrates well with popular bioinformatics tools and can export data in various formats compatible with other analysis software.",
          },
        },
        {
          "@type": "Question",
          name: "How do I report bugs or request features?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Report bugs or request features through GitHub Issues at https://github.com/mubashir1837/BioDataHub/issues. Include detailed steps to reproduce any issues.",
          },
        },
      ],
    },
    {
      "@type": "VideoObject",
      name: "BioDataHub - Bioinformatics Data Analysis in VS Code",
      description: "Learn how to use BioDataHub for efficient bioinformatics data analysis and visualization in Visual Studio Code.",
      thumbnailUrl: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
      uploadDate: "2025-03-22",
      duration: "PT10M",
      contentUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
      embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
      interactionStatistic: {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/WatchAction",
        userInteractionCount: 1000,
      },
      author: {
        "@type": "Person",
        name: "Mubashir Ali",
      },
      publisher: {
        "@type": "Organization",
        name: "Code with Bismillah",
      },
    },
  ],
}

export const metadata: Metadata = {
  title: "BioBuntu - Bioinformatics Platform",
  description:
    "A comprehensive bioinformatics platform with CLI, GUI, and web interfaces for running advanced genomic pipelines",
  keywords: [
    "Bio-Data-Hub",
    "Bio Data Hub",
    "Bio Data Hub VSCE",
    "BioDataHub",
    "VS Code extension",
    "bioinformatics",
    "data analysis",
    "data visualization",
    "CSV datasets",
    "PCA",
    "clustering",
    "genomics",
    "proteomics",
    "biological data",
    "research tool",
    "scientific computing",
    "machine learning",
    "data mining",
    "life sciences",
    "computational biology",
    "NGS analysis",
    "RNA sequencing",
    "DNA analysis",
    "metagenomics",
    "biostatistics",
    "biotechnology",
    "clinical data",
    "health informatics",
    "open source",
    "free extension",
    "updates",
    "new releases",
    "software updates",
    "bioinformatics tools",
    "data science",
    "AI in bioinformatics",
    "genetic data analysis",
    "protein structure analysis",
    "drug discovery",
    "medical research",
    "academic research",
    "laboratory tools",
    "big data",
    "csv viewer",
    "data analytics",
    "data cleaning",
    "data exploration",
    "data management",
    "data processing",
    "data transformation",
    "genetic analysis",
    "genetics",
    "genome sequencing",
    "keybindings",
    "metadata",
    "omics",
    "PCA & Clustering",
    "previewCSV",
    "research tool",
    "scientific computing",
    "vsce"
  ],
  authors: [{ name: "Mubashir Ali" }],
  creator: "Mubashir Ali",
  publisher: "Code with Bismillah",
  alternates: {
    canonical: "https://biobuntu.github.io",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "BioDataHub - Streamlined Bioinformatics Analysis in VS Code",
    description: "Discover, visualize, and analyze bioinformatics datasets directly in VS Code. Features PCA, clustering, metadata generation, and more for researchers.",
    url: "https://biobuntu.github.io",
    siteName: "BioDataHub",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "BioDataHub Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BioDataHub - Bioinformatics Data Analysis Extension",
    description: "Ultimate VS Code extension for bioinformatics: dataset discovery, visualization, PCA, clustering, and metadata generation.",
    images: ["/images/logo.png"],
    creator: "@mubashir1837",
    site: "@mubashir1837",
    creatorId: "@mubashir1837",
    siteId: "@mubashir1837",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="news_keywords" content="BioDataHub, bioinformatics, VS Code extension, data analysis, visualization, PCA, clustering, genomics, proteomics, updates, new releases, machine learning, life sciences, computational biology, NGS analysis, RNA sequencing, DNA analysis, metagenomics, biostatistics, biotechnology" />
        <meta name="category" content="Programming Languages, Data Science, Machine Learning, Visualization, Bioinformatics, Education, Research Tools" />
        <link rel="canonical" href="https://biobuntu.github.io" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="author" href="https://mubashirali.vercel.app" />
        <link rel="me" href="https://linkedin.com/in/mubashirali3/" />
        <link rel="me" href="https://github.com/mubashir1837" />
        <link rel="me" href="https://x.com/mubashir1837" />
        <link rel="me" href="https://orcid.org/0009-0006-0222-7585" />
        <link rel="privacy" href="/privacy.md" />
        <link rel="terms" href="/terms.md" />
        <link rel="help" href="/FAQ.md" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="GhJ96yf5IMVcGgy8dgYiIHlTQJxeE6UnaTe4xusCl1k" />
        {/* Bing Webmaster Tools Verification */}
        <meta name="msvalidate.01" content="8AB258D32A8DBA9AE06B36DB23B4D338" />
        {/* Yandex Verification */}
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE_HERE" />
        {/* Facebook App ID (if applicable) */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID_HERE" />
        {/* Additional Meta Tags */}
        <meta name="author" content="Mubashir Ali" />
        <meta name="publisher" content="Code with Bismillah" />
        <meta name="copyright" content="© 2026 Mubashir Ali" />
        <meta name="language" content="en-US" />
        <meta name="geo.region" content="PK" />
        
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "uv8n8imvon");
            `,
          }}
        />
        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="BioDataHub - VS Code Extension for Bioinformatics" />
        <meta name="DC.creator" content="Mubashir Ali" />
        <meta name="DC.subject" content="Bioinformatics, Data Analysis, VS Code Extension" />
        <meta name="DC.description" content="Ultimate VS Code extension for bioinformatics data analysis and visualization" />
        <meta name="DC.publisher" content="Code with Bismillah" />
        <meta name="DC.language" content="en" />
        <meta name="DC.rights" content="© 2026 Mubashir Ali" />
        {/* Google Analytics (if needed, in addition to Vercel Analytics) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BHP7FTR79Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BHP7FTR79Y');
            `,
          }}
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//marketplace.visualstudio.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//www.researchsquare.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}