import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Github, Linkedin, Mail, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About BioBuntu - Founded by Mubashir Ali | Open-Source Bioinformatics",
  description: "Learn about BioBuntu's mission and Mubashir Ali, founder of BioBuntu and TynexAI. Expert in bioinformatics, Entity SEO, DevOps, MLOps, and genomic data analysis.",
  keywords: [
    "Mubashir Ali",
    "BioBuntu founder",
    "bioinformatics platform",
    "entity SEO",
    "knowledge graph",
    "DevOps expert",
    "MLOps",
    "Schema.org",
    "Code with Bismillah"
  ],
  openGraph: {
    title: "About BioBuntu - Entity-Driven Open-Source Bioinformatics",
    description: "BioBuntu is a comprehensive bioinformatics platform founded by Mubashir Ali, combining expertise in genomics, data science, and enterprise software development.",
    url: "https://biobuntu.github.io/about",
    type: "website",
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About BioBuntu
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An open-source bioinformatics platform built on principles of entity clarity, semantic data, and making advanced genomic analysis accessible to researchers worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To democratize advanced genomic analysis by providing researchers, labs, and bioinformatics professionals with a comprehensive, enterprise-ready platform that combines:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Computational Excellence:</strong> RNA-seq, variant calling, metagenomics, and QC pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Multiple Interfaces:</strong> CLI, GUI, and Web Dashboard for Every Workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground"><strong>Open-Source Philosophy:</strong> Community-driven, transparent, and freely available</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
              <div className="space-y-4">
                {[
                  { title: "Research Labs", desc: "Genomics and bioinformatics research teams needing scalable pipelines" },
                  { title: "Educational Institutions", desc: "Universities teaching bioinformatics and computational biology" },
                  { title: "Bioinformaticians", desc: "Professionals requiring advanced analysis and automation tools" },
                  { title: "Biotech Companies", desc: "Organizations building on open-source bioinformatics infrastructure" },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section with Entity-First Language */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Founder & Vision</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Entity Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto bg-background rounded-full border-2 border-primary flex items-center justify-center mb-4">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Mubashir Ali</h3>
                  <p className="text-sm text-muted-foreground mt-2">Bioinformatician & Data Science Professional</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase">Expertise</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {["Entity SEO", "Schema.org", "Bioinformatics", "DevOps", "MLOps", "Genomics", "ML/AI"].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs bg-primary/20 text-primary rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <a 
                    href="https://linkedin.com/in/mubashirali3/" 
                    target="_blank" 
                    rel="me noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium w-full justify-center"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a 
                    href="https://github.com/mubashir1837" 
                    target="_blank" 
                    rel="me noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium w-full justify-center"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a 
                    href="https://mubashirali.vercel.app" 
                    target="_blank" 
                    rel="me noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors text-sm font-medium w-full justify-center"
                  >
                    <Award size={16} /> Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Entity Profile</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Mubashir Ali</strong> is a <strong>Bioinformatics & Data Science Professional</strong> who bridges the gap between complex biological data and actionable insights. As the <strong>founder of BioBuntu and TynexAI</strong>, he represents the convergence of three critical domains: computational biology, enterprise software architecture, and semantic web technologies.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Professional Foundation</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    With deep expertise in genomics, machine learning, and AI, Mubashir combines theoretical research knowledge with practical DevOps and MLOps engineering. His work focuses on turning complex biological datasets into structured, queryable insights—both in the lab and in Google's Knowledge Graph.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Why BioBuntu Exists</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BioBuntu was born from a simple observation: researchers spend more time managing data infrastructure than doing science. The platform abstracts away complexity while maintaining the power and flexibility that serious bioinformatics work demands.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with the same principles that power Knowledge Graph entity building—clarity, consistency, and structured identity—BioBuntu ensures that biological data is not just analyzed but understood at every level of the stack.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">Key Contributions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Published Research:</strong> Papers on bioinformatics platforms and entity SEO principles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Open-Source Leadership:</strong> Maintainer of BioBuntu and contributor to multiple projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Community Education:</strong> Content creator and thought leader on Entity SEO and Knowledge Graphs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>DevOps/MLOps Architecture:</strong> Expert in production bioinformatics infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Built on Semantic & Entity Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Entity-First Design",
                desc: "Every component is designed with clear, structured identity—both for data and people. Schema.org structured data is baked into the core."
              },
              {
                title: "Knowledge Graph Ready",
                desc: "BioBuntu's architecture treats entities (genes, samples, analyses) with the same care systems use for Knowledge Panel entities."
              },
              {
                title: "DevOps/MLOps Native",
                desc: "Built for production environments with CI/CD, containerization, and scalable infrastructure from day one."
              },
              {
                title: "Open & Transparent",
                desc: "MIT licensed, community-driven, and fully auditable. No hidden infrastructure or proprietary black boxes."
              },
              {
                title: "Research-Backed",
                desc: "Developed alongside academic research institutions and validated through published papers."
              },
              {
                title: "Developer Experience",
                desc: "Intuitive APIs, excellent documentation, and multiple interfaces (CLI, GUI, Web) for different user needs."
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Join the BioBuntu Community</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're a researcher, bioinformatician, or institution, BioBuntu is designed for those who demand both power and clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://pypi.org/project/biobuntu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Install BioBuntu <ArrowRight size={18} />
            </a>
            <a
              href="/docs"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Read Documentation
            </a>
            <a
              href="https://github.com/biobuntu/biobuntu"
              target="_blank"
              rel="me noopener noreferrer"
              className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
            >
              <Github size={18} /> Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data for About Page */}
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About BioBuntu",
          "description": "Learn about BioBuntu's mission and Mubashir Ali, founder of BioBuntu and TynexAI",
          "url": "https://biobuntu.github.io/about",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "@id": "https://biobuntu.github.io/#software",
            "name": "BioBuntu",
            "url": "https://biobuntu.github.io",
            "description": "Comprehensive open-source bioinformatics platform for genomic analysis",
            "author": {
              "@type": "Person",
              "@id": "https://mubashirali.vercel.app/#person",
              "name": "Mubashir Ali"
            }
          }
        })}
      </script>

      <Footer />
    </div>
  )
}
