import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Github, MessageSquare, Users, Lightbulb, ExternalLink, BookOpen } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4">Community & Support</h1>
          <p className="text-xl text-muted-foreground">Join the BioBuntu community and get help when you need it</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Github,
              title: "GitHub Repository",
              description: "Browse the source code, report issues, and contribute",
              link: "https://github.com/GenomeHouse/biobuntu",
              linkText: "Visit GitHub",
            },
            {
              icon: MessageSquare,
              title: "Issue Tracking",
              description: "Report bugs, request features, and discuss improvements",
              link: "https://github.com/GenomeHouse/biobuntu/issues",
              linkText: "View Issues",
            },
            {
              icon: Users,
              title: "Discussions",
              description: "Join conversations with other researchers and developers",
              link: "https://github.com/GenomeHouse/biobuntu/discussions",
              linkText: "Start Discussing",
            },
            {
              icon: BookOpen,
              title: "Full Documentation",
              description: "Comprehensive guides, tutorials, and API reference",
              link: "/docs",
              linkText: "Read Docs",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-foreground mb-2">{item.title}</h2>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                {item.linkText}
                <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 p-12 mb-16">
          <div className="flex gap-4">
            <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Contributing</h2>
              <p className="text-muted-foreground mb-4">
                We welcome contributions from the community! Whether you want to report bugs, suggest features, or
                submit code, your participation helps make BioBuntu better.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Fork the repository</p>
                <p>• Create a feature branch</p>
                <p>• Make your changes and add tests</p>
                <p>• Submit a pull request</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-2">Getting Help</h3>
            <p className="text-sm text-muted-foreground">
              Can't find what you need? Check our documentation, search existing issues, or start a new discussion.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-2">Development Setup</h3>
            <p className="text-sm text-muted-foreground">
              Want to contribute code? See our development guide for setup instructions, testing procedures, and code
              style guidelines.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-lg text-foreground mb-2">Report Security Issues</h3>
            <p className="text-sm text-muted-foreground">
              Found a security vulnerability? Please email{" "}
              <a href="mailto:info@genomehouse.com" className="text-primary hover:underline">
                info@genomehouse.com
              </a>{" "}
              instead of using the issue tracker.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-card rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-4">Support & Contact</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="font-semibold text-foreground min-w-[100px]">Email:</div>
              <a href="mailto:info@genomehouse.com" className="text-primary hover:underline">
                info@genomehouse.com
              </a>
            </div>
            <div className="flex gap-4">
              <div className="font-semibold text-foreground min-w-[100px]">GitHub:</div>
              <a
                href="https://github.com/GenomeHouse/biobuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/GenomeHouse/biobuntu
              </a>
            </div>
            <div className="flex gap-4">
              <div className="font-semibold text-foreground min-w-[100px]">License:</div>
              <p className="text-muted-foreground">MIT License - Open source and free for all</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
