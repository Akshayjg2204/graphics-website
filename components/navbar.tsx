"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Music } from "lucide-react"
import Image from "next/image"
import ThemeToggle from "./theme-toggle"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 dark:bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-border shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary transition-all duration-300 group-hover:ring-accent group-hover:scale-105">
              <Image
                src="/images/profile.jpg"
                alt="RJ Graphics Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-gradient text-lg font-bold tracking-wide">RJ Graphics</span>
              <span className="text-xs text-muted-foreground">Dombivli</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="tel:+918433627621"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-foreground hover:text-primary transition-colors duration-300 py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <a
              href="tel:+918433627621"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
