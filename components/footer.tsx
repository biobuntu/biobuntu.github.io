import { Github, Mail, ExternalLink, Linkedin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/biobuntu.png" alt="BioBuntu" width={90} height={90} className="rounded-lg" />
            </div>
            <p className="text-muted-foreground text-sm">
              Making bioinformatics accessible through modern interfaces and powerful automation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/GenomeHouse/biobuntu/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  Issues <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GenomeHouse/biobuntu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@genomehouse.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  Contact <Mail size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Install</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://pypi.org/project/biobuntu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  PyPI <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Debian/Ubuntu
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Conda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 GenomeHouse. MIT Licensed.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/GenomeHouse/biobuntu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/genomehouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/genomehouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/genomehouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a href="mailto:info@genomehouse.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
