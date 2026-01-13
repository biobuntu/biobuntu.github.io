"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/#features", label: "Features" },
    { href: "/docs", label: "Documentation" },
    { href: "/community", label: "Community" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/biobuntu.png" alt="BioBuntu" width={90} height={90} className="rounded-lg" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <a
              href="https://github.com/biobuntu/biobuntu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://pypi.org/project/biobuntu/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Install
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-secondary">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <a
                href="https://github.com/biobuntu/biobuntu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 text-center text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://pypi.org/project/biobuntu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 text-center bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Install
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
