import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Code2, Zap, GitBranch, BarChart3, Cpu, BookOpen, ChevronDown } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BioBuntu - Open-Source Bioinformatics Platform | Genomic Analysis Made Simple",
  description: "Discover BioBuntu: comprehensive bioinformatics platform for genomic analysis with CLI, GUI, and web interfaces. Run advanced pipelines for RNA-seq, variant calling, and metagenomics.",
  keywords: ["bioinformatics", "genomic analysis", "bioinformatics platform", "data visualization", "open source", "PyPI"],
  openGraph: {
    title: "BioBuntu - Genomic Analysis Platform",
    description: "Open-source bioinformatics platform for genomic analysis with multiple interfaces",
    url: "https://biobuntu.github.io",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
              v1.2.4 - Open Source
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight text-foreground mb-6">
              Bioinformatics Made Simple
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              A comprehensive platform for running genomic analysis pipelines with CLI, GUI, and web interfaces. Perfect
              for researchers, labs, and bioinformatics teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://pypi.org/project/biobuntu/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </a>
              <Link
                href="/about"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
              >
                Learn Our Story
              </Link>
              <a
                href="https://github.com/biobuntu/biobuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors hidden sm:inline-flex items-center justify-center gap-2"
              >
                View on GitHub
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border">
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border border-border font-mono text-sm">
                  <p className="text-muted-foreground">$ biobuntu create-project myproject</p>
                  <p className="text-accent mt-2">Project created successfully</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border font-mono text-sm">
                  <p className="text-muted-foreground">$ biobuntu run workflows/rnaseq.yaml</p>
                  <p className="text-accent mt-2">Pipeline started...</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border font-mono text-sm">
                  <p className="text-muted-foreground">$ biobuntu web</p>
                  <p className="text-accent mt-2">Server running at http://localhost:5000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for modern bioinformatics research and analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Multiple Interfaces",
                description: "CLI, Desktop GUI (BioBuntu Studio), and Web Dashboard for every workflow",
              },
              {
                icon: Zap,
                title: "Advanced Pipelines",
                description: "Support for complex workflows with dependencies and parallel execution",
              },
              {
                icon: GitBranch,
                title: "Project Management",
                description: "Create and manage bioinformatics projects with organized structures",
              },
              {
                icon: BarChart3,
                title: "Comprehensive Workflows",
                description: "RNA-seq, variant calling, metagenomics, and quality control pipelines",
              },
              {
                icon: Cpu,
                title: "Tool Integration",
                description: "Wrappers for FastQC, BWA, GATK, HISAT2, Samtools, and more",
              },
              {
                icon: BookOpen,
                title: "Remote Lab Support",
                description: "API endpoints for remote pipeline execution with job tracking",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Installation Methods</h2>
            <p className="text-xl text-muted-foreground">Choose the installation method that works best for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "From PyPI",
                command: "pip install biobuntu",
                description: "Install from Python Package Index",
              },
              {
                title: "From Source",
                command: "git clone https://github.com/biobuntu/biobuntu.git\ncd biobuntu\npip install -e .",
                description: "Build and install from source code",
              },
              {
                title: "Debian/Ubuntu",
                command: "sudo dpkg -i biobuntu_0.1.0_all.deb\nsudo apt-get install -f",
                description: "Install from .deb package",
              },
              {
                title: "Conda",
                command: "conda install -c biobuntu biobuntu",
                description: "Install via conda package manager",
              },
            ].map((method, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-lg text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                <div className="bg-background p-3 rounded font-mono text-sm text-accent overflow-x-auto">
                  {method.command}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Quick Start</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Create a Project",
                code: 'biobuntu create-project myproject \\\n  --description "RNA-seq analysis"',
                description: "Initialize a new bioinformatics project",
              },
              {
                step: "2",
                title: "Run a Pipeline",
                code: "biobuntu run workflows/rnaseq.yaml \\\n  --project myproject \\\n  --input sample.fastq",
                description: "Execute your bioinformatics workflow",
              },
              {
                step: "3",
                title: "Access Results",
                code: "biobuntu web\n# Open http://localhost:5000",
                description: "View results in web dashboard",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                <div className="bg-background p-4 rounded-lg border border-border font-mono text-sm mb-4 overflow-x-auto">
                  <span className="text-accent">{item.code}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Install BioBuntu today and streamline your bioinformatics workflows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pypi.org/project/biobuntu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Install Now <ArrowRight size={18} />
            </a>
            <Link
              href="/docs"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Read Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is BioBuntu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BioBuntu is a comprehensive open-source bioinformatics platform that provides CLI, GUI, and web interfaces for running advanced genomic analysis pipelines. It's designed for researchers, labs, and bioinformatics teams to easily perform RNA-seq, variant calling, metagenomics, and other genomic analyses."
              }
            },
            {
              "@type": "Question",
              "name": "How do I install BioBuntu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can install BioBuntu in multiple ways: (1) From PyPI using 'pip install biobuntu', (2) From source by cloning the GitHub repository, (3) Using Debian/Ubuntu packages, or (4) Via Conda package manager. Choose the method that works best for your environment."
              }
            },
            {
              "@type": "Question",
              "name": "Is BioBuntu free?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, BioBuntu is completely free and open-source software. It's released under the MIT License, which means you can use, modify, and distribute it freely."
              }
            },
            {
              "@type": "Question",
              "name": "What features does BioBuntu offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BioBuntu offers project management, advanced pipelines with parallel execution, multiple interfaces (CLI, GUI, Web), RNA-seq analysis, variant calling, metagenomics support, quality control pipelines, tool integration (FastQC, BWA, GATK, HISAT2, Samtools), remote lab support with API endpoints, and workflow automation."
              }
            },
            {
              "@type": "Question",
              "name": "What are the system requirements for BioBuntu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BioBuntu is platform-independent and supports Windows, macOS, and Linux. We recommend at least 4GB RAM and a modern processor for optimal performance. Specific requirements may vary depending on the analysis pipelines you use."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use BioBuntu for production environments?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, BioBuntu is designed to be production-ready. It supports remote lab execution, API endpoints for integration with other systems, and can handle complex workflows with dependencies and parallel execution. Many research institutions use BioBuntu for their genomic analysis pipelines."
              }
            },
            {
              "@type": "Question",
              "name": "How do I report bugs or request features?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can report bugs or request features through the GitHub Issues page at https://github.com/biobuntu/biobuntu/issues. Please include detailed information about the issue and steps to reproduce it."
              }
            },
            {
              "@type": "Question",
              "name": "Who created BioBuntu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "BioBuntu was founded and is maintained by Mubashir Ali, a bioinformatician and software developer. It's developed under Code with Bismillah organization with the goal of making advanced bioinformatics accessible to researchers worldwide."
              }
            }
          ]
        })}
      </script>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Find answers to common questions about BioBuntu</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What is BioBuntu?",
                answer: "BioBuntu is a comprehensive open-source bioinformatics platform that provides CLI, GUI, and web interfaces for running advanced genomic analysis pipelines. It's designed for researchers, labs, and bioinformatics teams to easily perform RNA-seq, variant calling, metagenomics, and other genomic analyses."
              },
              {
                question: "How do I install BioBuntu?",
                answer: "You can install BioBuntu from PyPI using 'pip install biobuntu', from source by cloning the GitHub repository, using Debian/Ubuntu packages, or via Conda. Choose the installation method that works best for your environment."
              },
              {
                question: "Is BioBuntu free?",
                answer: "Yes, BioBuntu is completely free and open-source software released under the MIT License. You can use, modify, and distribute it freely."
              },
              {
                question: "What features does BioBuntu offer?",
                answer: "BioBuntu offers project management, advanced pipelines with parallel execution, multiple interfaces (CLI, GUI, Web), RNA-seq analysis, variant calling, metagenomics support, quality control pipelines, tool integration, remote lab support, and workflow automation."
              },
              {
                question: "What are the system requirements?",
                answer: "BioBuntu supports Windows, macOS, and Linux. We recommend at least 4GB RAM and a modern processor. Specific requirements may vary depending on the analysis pipelines you use."
              },
              {
                question: "Can I use BioBuntu for production environments?",
                answer: "Yes, BioBuntu is production-ready with support for remote lab execution, API endpoints for integration, and the ability to handle complex workflows with dependencies and parallel execution."
              },
              {
                question: "How do I get support?",
                answer: "You can get support by visiting the GitHub Issues page (https://github.com/biobuntu/biobuntu/issues) for bug reports and feature requests, or contact the maintainers directly."
              },
              {
                question: "Who created BioBuntu?",
                answer: "BioBuntu was founded and is maintained by Mubashir Ali, a bioinformatician and software developer. It's developed under Code with Bismillah organization."
              }
            ].map((faq, index) => (
              <details key={index} className="group border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                <summary className="p-6 cursor-pointer flex justify-between items-center">
                  <h3 className="font-semibold text-foreground text-lg">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-muted-foreground border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a 
              href="https://github.com/biobuntu/biobuntu/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Open an Issue on GitHub
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
