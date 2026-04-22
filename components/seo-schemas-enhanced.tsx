/**
 * Enhanced SEO JSON-LD Schemas Component
 * Provides additional structured data for BioBuntu features, tools, and content
 */

export function EnhancedSEOSchemas() {
  // WebSite Schema - enables search integration
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://biobuntu.github.io/#website",
    "name": "BioBuntu",
    "url": "https://biobuntu.github.io",
    "description": "Comprehensive open-source bioinformatics platform for genomic analysis",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://biobuntu.github.io/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "isPartOf": {
      "@type": "Organization",
      "@id": "https://codewithbismillah.online/#organization"
    }
  };

  // Tool Schema - Enhanced description of BioBuntu as a tool
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "Tool",
    "@id": "https://biobuntu.github.io/#tool",
    "name": "BioBuntu",
    "alternateName": ["Bio Data Hub", "biobuntu"],
    "description": "Open-source bioinformatics tool for genomic data analysis with CLI, GUI, and Web interfaces",
    "url": "https://biobuntu.github.io",
    "inLanguage": ["en"],
    "applicationCategory": ["Utilities", "Science", "Bioinformatics"],
    "operatingSystem": ["Windows", "macOS", "Linux"],
    "softwareVersion": "1.2.4",
    "releaseDate": "2025-01-01",
    "author": {
      "@type": "Person",
      "name": "Mubashir Ali",
      "url": "https://mubashirali.vercel.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Code with Bismillah",
      "url": "https://codewithbismillah.online"
    },
    "downloadUrl": "https://pypi.org/project/biobuntu/",
    "fileSize": "5MB",
    "encodingFormat": ["application/x-python", "application/zip"],
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  // DefinedTerm Schema for Features
  const featuresTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": "https://biobuntu.github.io/#features",
    "name": "BioBuntu Features",
    "url": "https://biobuntu.github.io",
    "hasDefinedTerm": [
      {
        "@type": "DefinedTerm",
        "name": "Multiple Interfaces",
        "description": "CLI, BioBuntu Studio GUI, and Web Dashboard for flexible workflow management",
        "termCode": "feature-interfaces"
      },
      {
        "@type": "DefinedTerm",
        "name": "RNA-seq Analysis",
        "description": "Complete RNA sequencing pipeline with quality control and visualization",
        "termCode": "feature-rnaseq"
      },
      {
        "@type": "DefinedTerm",
        "name": "Variant Calling",
        "description": "Advanced variant detection and annotation for genomic variants",
        "termCode": "feature-variants"
      },
      {
        "@type": "DefinedTerm",
        "name": "Metagenomics",
        "description": "Metagenomic analysis for community composition and functional profiling",
        "termCode": "feature-metagenomics"
      },
      {
        "@type": "DefinedTerm",
        "name": "Project Management",
        "description": "Organized project structures with built-in data management utilities",
        "termCode": "feature-projects"
      },
      {
        "@type": "DefinedTerm",
        "name": "Parallel Execution",
        "description": "Multi-threaded workflow execution for improved performance",
        "termCode": "feature-parallel"
      },
      {
        "@type": "DefinedTerm",
        "name": "Tool Integration",
        "description": "Seamless integration with FastQC, BWA, GATK, HISAT2, Samtools and more",
        "termCode": "feature-tools"
      },
      {
        "@type": "DefinedTerm",
        "name": "Remote Lab Support",
        "description": "API endpoints for remote execution and job tracking",
        "termCode": "feature-remote"
      }
    ]
  };

  // DataCatalog Schema - For data analysis capabilities
  const dataCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "DataCatalog",
    "@id": "https://biobuntu.github.io/#datacatalog",
    "name": "BioBuntu Data Analysis",
    "description": "Comprehensive genomic data analysis and management system",
    "url": "https://biobuntu.github.io",
    "publisher": {
      "@type": "Organization",
      "name": "Code with Bismillah",
      "url": "https://codewithbismillah.online"
    },
    "dataset": [
      {
        "@type": "Dataset",
        "name": "Genomic Analysis Dataset",
        "description": "Support for RNA-seq, variant calling, and metagenomics datasets",
        "url": "https://biobuntu.github.io/docs"
      }
    ],
    "measurementTechnique": [
      "RNA-seq quantification",
      "Variant detection",
      "Metagenomic profiling",
      "Quality control metrics"
    ]
  };

  // ImageObject Schema - Enhanced image metadata
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": "https://biobuntu.github.io/#logo",
    "url": "https://biobuntu.github.io/biobuntu.png",
    "name": "BioBuntu Logo",
    "description": "Official logo for BioBuntu bioinformatics platform",
    "width": 512,
    "height": 512,
    "encodingFormat": "image/png",
    "author": {
      "@type": "Organization",
      "name": "Code with Bismillah"
    },
    "uploadDate": "2025-01-01",
    "isPartOf": {
      "@type": "SoftwareApplication",
      "@id": "https://biobuntu.github.io/#software"
    }
  };

  // Code/SoftwareSourceCode Schema
  const sourceCodeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": "https://github.com/biobuntu/biobuntu#repository",
    "name": "BioBuntu",
    "url": "https://github.com/biobuntu/biobuntu",
    "description": "Open-source bioinformatics platform source code",
    "codeRepository": "https://github.com/biobuntu/biobuntu",
    "programmingLanguage": "Python",
    "license": "https://opensource.org/licenses/MIT",
    "author": {
      "@type": "Person",
      "name": "Mubashir Ali",
      "url": "https://mubashirali.vercel.app"
    },
    "downloadUrl": "https://github.com/biobuntu/biobuntu/archive/refs/heads/main.zip",
    "isPartOf": {
      "@type": "SoftwareApplication",
      "@id": "https://biobuntu.github.io/#software"
    }
  };

  return (
    <>
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      {/* Tool Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolSchema)
        }}
      />

      {/* Features DefinedTermSet */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(featuresTermSet)
        }}
      />

      {/* DataCatalog Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(dataCatalogSchema)
        }}
      />

      {/* ImageObject Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imageSchema)
        }}
      />

      {/* SoftwareSourceCode Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sourceCodeSchema)
        }}
      />
    </>
  );
}
