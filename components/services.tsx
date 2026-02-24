"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Brush, Music, Sparkles, Drum, Star } from "lucide-react"

const services = [
  {
    icon: Drum,
    title: "Drum Head Graphics",
    description: "Custom-designed artwork for all types of banjo drum heads. Vibrant colors that stand out on stage and last through countless performances.",
    color: "#e84393",
  },
  {
    icon: Palette,
    title: "Custom Instrument Art",
    description: "Personalized graphic designs tailored to your style. From traditional Indian motifs to modern abstract art for your banjo.",
    color: "#f39c12",
  },
  {
    icon: Brush,
    title: "Professional Finishing",
    description: "High-quality printing and finishing that ensures your graphics are durable, waterproof, and maintain their brilliance.",
    color: "#00d2ff",
  },
  {
    icon: Music,
    title: "Full Instrument Wraps",
    description: "Complete graphic wraps for your banjo that transform its entire appearance while preserving its sound quality.",
    color: "#e84393",
  },
  {
    icon: Sparkles,
    title: "Restoration & Refresh",
    description: "Breathe new life into old instruments. We restore and refresh graphics on existing banjos to make them look brand new.",
    color: "#f39c12",
  },
  {
    icon: Star,
    title: "Bulk & Event Orders",
    description: "Special packages for bands, groups, and events. Uniform designs for troupes with consistent, professional branding.",
    color: "#00d2ff",
  },
]

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e84393]/5 rounded-full blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e84393]/30 bg-[#e84393]/10 px-4 py-2 text-sm text-[#e84393] mb-6">
            <Sparkles className="h-4 w-4" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            What We <span className="text-gradient">Create</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            We specialize in custom graphics for all banjo instruments, bringing your musical vision to life with stunning artwork.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el }}
              data-index={index}
              className={`group relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-700 hover:border-transparent hover:bg-card ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: `inset 0 0 40px ${service.color}10, 0 0 40px ${service.color}08`,
                }}
              />

              <div
                className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon className="h-7 w-7" style={{ color: service.color }} />
              </div>

              <h3 className="relative z-10 text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>

              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-tr-2xl"
                style={{
                  background: `radial-gradient(circle at top right, ${service.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
