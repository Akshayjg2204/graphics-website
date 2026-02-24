"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Sparkles, Eye } from "lucide-react"

const galleryItems = [
  {
    src: "/images/drumhead-1.jpg",
    alt: "Custom traditional banjo drum head design",
    title: "Traditional Motif",
    category: "Drum Head",
  },
  {
    src: "/images/drumhead-2.jpg",
    alt: "Cartoon character custom drum head",
    title: "Character Design",
    category: "Custom Art",
  },
  {
    src: "/images/drumhead-3.jpg",
    alt: "Floral banjo drum head graphics",
    title: "Floral Pattern",
    category: "Drum Head",
  },
  {
    src: "/images/drumhead-4.jpg",
    alt: "Religious artwork drum head",
    title: "Sacred Art",
    category: "Traditional",
  },
  {
    src: "/images/drumhead-5.jpg",
    alt: "Modern abstract drum head",
    title: "Modern Abstract",
    category: "Custom Art",
  },
  {
    src: "/images/drumhead-6.jpg",
    alt: "Patriotic theme drum head",
    title: "Patriotic Theme",
    category: "Special Edition",
  },
]

export default function Gallery() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#f39c12]/5 rounded-full blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f39c12]/30 bg-[#f39c12]/10 px-4 py-2 text-sm text-[#f39c12] mb-6">
            <Sparkles className="h-4 w-4" />
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Featured <span className="text-gradient">Designs</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Browse our collection of custom banjo drum head graphics and instrument artwork that showcase our craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => { cardsRef.current[index] = el }}
              data-index={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className={`object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110 brightness-75" : "scale-100 brightness-90"
                }`}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-60"
                }`}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span
                  className={`text-xs font-medium text-[#e84393] uppercase tracking-wider mb-2 transition-all duration-500 ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  {item.category}
                </span>
                <h3
                  className={`text-xl font-bold text-[#f0ece4] transition-all duration-500 delay-75 ${
                    hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Eye icon on hover */}
              <div
                className={`absolute top-4 right-4 h-10 w-10 rounded-full bg-[#e84393]/80 flex items-center justify-center transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <Eye className="h-5 w-5 text-[#ffffff]" />
              </div>

              {/* Border glow on hover */}
              <div
                className={`absolute inset-0 rounded-2xl ring-2 transition-all duration-500 ${
                  hoveredIndex === index ? "ring-[#e84393]/60" : "ring-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
