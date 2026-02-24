"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Vishal Patil",
    location: "Thane",
    text: "RJ Graphics transformed my old banjo into a masterpiece! The drum head design was exactly what I envisioned. Highly recommended for any musician.",
    rating: 5,
  },
  {
    name: "Ramesh Shinde",
    location: "Dombivli",
    text: "Amazing quality work! They did custom graphics for our entire troupe's banjos. Everyone was impressed with the designs during the festival season.",
    rating: 5,
  },
  {
    name: "Akash Mhatre",
    location: "Mumbai",
    text: "Professional service and outstanding designs. Raj bhai understood my requirements perfectly and delivered before the deadline. 5 stars!",
    rating: 5,
  },
  {
    name: "Suresh Kamble",
    location: "Kalyan",
    text: "Best graphics for banjo instruments in the region. The colors are vibrant and the design lasted through the entire monsoon season without fading.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 right-0 w-[600px] h-[400px] bg-[#e84393]/5 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 px-4 py-2 text-sm text-[#ffd700] mb-6">
            <Sparkles className="h-4 w-4" />
            Client Love
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className={`relative group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-700 hover:border-[#e84393]/30 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-[#e84393]/20 mb-4" />

              <p className="text-foreground leading-relaxed mb-6 text-balance">
                {`"${t.text}"`}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#ffd700] text-[#ffd700]" />
                  ))}
                </div>
              </div>

              {/* Subtle shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
