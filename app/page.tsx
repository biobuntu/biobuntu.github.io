import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Code2, Zap, GitBranch, BarChart3, Cpu, BookOpen } from "lucide-react"
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
              <a
                href="https://github.com/biobuntu/biobuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
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

      <Footer />
    </div>
  )
}
