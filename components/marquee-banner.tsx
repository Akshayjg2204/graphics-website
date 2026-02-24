"use client"

import { Music, Star, Sparkles, Drum } from "lucide-react"

const items = [
  { icon: Music, text: "Banjo Graphics" },
  { icon: Star, text: "Custom Drum Heads" },
  { icon: Sparkles, text: "Premium Designs" },
  { icon: Drum, text: "Instrument Art" },
  { icon: Music, text: "Traditional Motifs" },
  { icon: Star, text: "Modern Artwork" },
  { icon: Sparkles, text: "Hand-Crafted" },
  { icon: Drum, text: "Dombivli, Mumbai" },
]

export default function MarqueeBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#e84393] via-[#f39c12] to-[#e84393] py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3 mx-8">
            <item.icon className="h-4 w-4 text-[#0a0a0f]" />
            <span className="text-sm font-bold text-[#0a0a0f] uppercase tracking-wider">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
