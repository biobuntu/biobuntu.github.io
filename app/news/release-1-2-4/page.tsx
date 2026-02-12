import SEO from "../../../components/seo";

export default function Page() {
  const url = "https://biobuntu.github.io/news/release-1-2-4";
  return (
    <article className="max-w-4xl mx-auto py-12">
      <SEO
        title="BioBuntu v1.2.4 Released"
        description="Release 1.2.4 — improvements, packaging and workflow enhancements for BioBuntu."
        url={url}
        isArticle={true}
        datePublished="2026-01-13T00:00:00Z"
        dateModified="2026-01-13T00:00:00Z"
        image="https://biobuntu.github.io/biobuntu.png"
        authorName="BioBuntu Team"
        section="Releases"
        tags={["release","biobuntu","pip","workflow"]}
      />

      <h1 className="text-3xl font-bold mb-4">BioBuntu v1.2.4 Released</h1>
      <p className="text-sm text-muted-foreground mb-6">Published Tue Jan 13 2026</p>

      <section className="prose">
        <p>
          BioBuntu v1.2.4 is a comprehensive platform release for running genomic analysis
          pipelines with CLI, GUI, and web interfaces. This release focuses on stability,
          packaging, and improved workflow support.
        </p>

        <h2>Highlights</h2>
        <ul>
          <li>Project Management improvements for organized project layouts</li>
          <li>Advanced pipelines: better dependency handling and parallel execution</li>
          <li>Multiple interfaces: CLI, BioBuntu Studio (GUI), and Web Dashboard</li>
          <li>Remote lab support with API endpoints and job tracking</li>
          <li>Packaging: .deb, PPA and Conda packaging updates</li>
          <li>Workflow support for RNA-seq, variant calling, metagenomics, and QC</li>
          <li>Tool integration: wrappers for FastQC, BWA, GATK, HISAT2, Samtools</li>
        </ul>

        <h2>Installation</h2>
        <p>Install the released package from PyPI:</p>
        <pre className="bg-muted p-3 rounded">pip install biobuntu==1.2.4</pre>

        <h2>Quick Start</h2>
        <pre className="bg-muted p-3 rounded">
biobuntu create-project myproject --description "RNA-seq analysis"
biobuntu run workflows/rnaseq.yaml --project myproject --input sample.fastq
        </pre>

        <p>
          For full documentation and development instructions, visit the
          <a href="https://github.com/biobuntu/biobuntu"> repository</a> or the
          project homepage.
        </p>
      </section>
    </article>
  );
}
