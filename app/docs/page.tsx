import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Code2, Terminal, Globe, Zap } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-foreground mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground mb-12">Comprehensive guides for using BioBuntu</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Terminal,
              title: "CLI Reference",
              description: "Complete command-line interface documentation",
              items: [
                "biobuntu --help",
                "biobuntu create-project",
                "biobuntu run",
                "biobuntu validate",
                "biobuntu list-projects",
              ],
            },
            {
              icon: Globe,
              title: "Web Dashboard",
              description: "Web interface features and usage",
              items: [
                "Project management",
                "Pipeline execution",
                "Real-time monitoring",
                "File download",
                "Results visualization",
              ],
            },
            {
              icon: Code2,
              title: "API Reference",
              description: "REST API endpoints and integration",
              items: [
                "POST /api/remote/run",
                "GET /api/remote/status",
                "GET /api/remote/jobs",
                "Webhook callbacks",
                "Job tracking",
              ],
            },
            {
              icon: Zap,
              title: "Advanced Pipelines",
              description: "Creating and customizing workflows",
              items: [
                "Workflow YAML syntax",
                "Pipeline dependencies",
                "Parallel execution",
                "Tool integration",
                "Parameter configuration",
              ],
            },
          ].map((section, index) => (
            <div key={index} className="p-8 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{section.description}</p>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Example Workflow</h2>
          <div className="bg-background p-6 rounded-lg border border-border font-mono text-sm overflow-x-auto">
            <pre className="text-accent text-pretty">
              {`name: RNA-seq Pipeline
description: Complete RNA-seq analysis
steps:
  - name: qc
    tool: fastqc
    args:
      input_file: raw_data/sample.fastq
      output_dir: qc/
  
  - name: align
    tool: hisat2
    depends_on: [qc]
    args:
      index: genome_index
      input_fastq1: raw_data/sample.fastq
      output_sam: processed/sample.sam
  
  - name: convert
    tool: samtools
    depends_on: [align]
    args:
      input_sam: processed/sample.sam
      output_bam: processed/sample.bam`}
            </pre>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary/20 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">Project Structure</h3>
            <p className="text-sm text-muted-foreground">
              Your projects automatically get organized with separate directories for raw data, QC results, processing
              files, results, reports, logs, and configs.
            </p>
          </div>
          <div className="p-6 bg-secondary/20 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">Parallel Execution</h3>
            <p className="text-sm text-muted-foreground">
              BioBuntu automatically identifies independent pipeline steps and executes them in parallel for faster
              analysis.
            </p>
          </div>
          <div className="p-6 bg-secondary/20 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">Tool Wrappers</h3>
            <p className="text-sm text-muted-foreground">
              Built-in wrappers for popular bioinformatics tools make integration seamless and configuration simple.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
