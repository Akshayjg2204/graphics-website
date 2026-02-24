"use client"

import { Instagram, Youtube, Phone, MapPin, Heart } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#080810]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#e84393]">
                <Image src="/images/profile.jpg" alt="RJ Graphics" fill className="object-cover" />
              </div>
              <div>
                <span className="text-gradient text-xl font-bold">RJ Graphics</span>
                <p className="text-xs text-muted-foreground">Dombivli</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              We create custom graphics for all Banjo instruments. Premium drum head designs, instrument wraps, and custom artwork based in Dombivli, Thane, Mumbai.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/rj_graphics_dombivli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary border border-border text-muted-foreground transition-all duration-300 hover:bg-[#e84393]/20 hover:text-[#e84393] hover:border-[#e84393]/30 hover:scale-110"
                aria-label="Visit our Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@Rjgraphicsdombivli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary border border-border text-muted-foreground transition-all duration-300 hover:bg-[#ff4444]/20 hover:text-[#ff4444] hover:border-[#ff4444]/30 hover:scale-110"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="tel:+918433627621"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary border border-border text-muted-foreground transition-all duration-300 hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/30 hover:scale-110"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "How It Works", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-muted-foreground hover:text-[#e84393] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#e84393] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">+91 8433627621</p>
                  <p className="text-xs text-muted-foreground">Call / WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#f39c12] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">Dombivli, Thane</p>
                  <p className="text-xs text-muted-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              {'© 2026 RJ Graphics Dombivli. All rights reserved.'}
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="h-3 w-3 text-[#e84393] fill-[#e84393]" /> by Raj Navnath Mhatre
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
