import { Github, Mail, ExternalLink, Linkedin, Facebook, Instagram, Award } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Press & Recognition Section */}
        <div className="mb-12 pb-8 border-b border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Award size={24} className="text-primary" />
            Press & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://www.saashub.com/BioBuntu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="font-semibold text-foreground mb-2">SaaSHub</div>
              <p className="text-muted-foreground text-sm mb-3">Featured as a leading bioinformatics platform</p>
              <p className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full inline-block">View Review</p>
            </a>
            <a 
              href="https://www.producthunt.com/products/biobuntu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="font-semibold text-foreground mb-2">Product Hunt</div>
              <p className="text-muted-foreground text-sm mb-3">Launched and rated by the tech community</p>
              <p className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full inline-block">View Launch</p>
            </a>
            <a 
              href="https://www.researchsquare.com/article/rs-7861003/v1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors text-center"
            >
              <div className="font-semibold text-foreground mb-2">Research Square</div>
              <p className="text-muted-foreground text-sm mb-3">Scientific publication on BioBuntu architecture</p>
              <p className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full inline-block">Read Paper</p>
            </a>
          </div>
        </div>

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
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/about#entity" className="text-muted-foreground hover:text-primary transition-colors">
                  Founder
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/biobuntu/biobuntu/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  Issues <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/biobuntu/biobuntu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@biobuntu.com"
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

        <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground flex-col md:flex-row gap-4">
          <p>&copy; 2026 BioBuntu. MIT Licensed. Created by <a href="https://mubashirali.vercel.app" rel="me" target="_blank" className="font-semibold hover:text-primary transition-colors">Mubashir Ali</a></p>
          <div className="flex gap-4">
            <a
              href="https://github.com/biobuntu/biobuntu"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="GitHub"
              title="BioBuntu on GitHub"
              className="hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://pypi.org/project/biobuntu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="PyPI"
              title="BioBuntu on PyPI"
              className="hover:text-primary transition-colors font-bold"
            >
              PyPI
            </a>
            <a
              href="https://www.linkedin.com/company/biobuntu"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="LinkedIn"
              title="BioBuntu on LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://www.facebook.com/biobuntu"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Facebook"
              title="BioBuntu on Facebook"
              className="hover:text-primary transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/biobuntu"
              target="_blank"
              rel="me noopener noreferrer"
              aria-label="Instagram"
              title="BioBuntu on Instagram"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a href="mailto:info@biobuntu.com" className="hover:text-primary transition-colors" aria-label="Email" title="Contact BioBuntu">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
