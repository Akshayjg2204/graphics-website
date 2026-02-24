"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, Palette, Printer, Truck, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Vision",
    description: "Contact us via call or WhatsApp. Tell us about your banjo, the design you envision, and any specific motifs or themes you want.",
    color: "#e84393",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Approve",
    description: "Our skilled artists create a custom digital mockup of your drum head design. We iterate until you are 100% satisfied.",
    color: "#f39c12",
  },
  {
    number: "03",
    icon: Printer,
    title: "Premium Printing",
    description: "Your approved design is printed using high-quality, durable materials that are weatherproof and stage-ready.",
    color: "#00d2ff",
  },
  {
    number: "04",
    icon: Truck,
    title: "Delivery & Setup",
    description: "We deliver across Dombivli, Thane, and Mumbai. We can even help with installation to ensure a perfect finish.",
    color: "#ffd700",
  },
]

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00d2ff]/5 rounded-full blur-[200px] -translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#00d2ff]/30 bg-[#00d2ff]/10 px-4 py-2 text-sm text-[#00d2ff] mb-6">
            <Sparkles className="h-4 w-4" />
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Getting your custom banjo graphics is simple. Follow these easy steps to transform your instrument.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e84393] via-[#f39c12] to-[#00d2ff] hidden sm:block" />

          <div className="space-y-16 sm:space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => { stepsRef.current[index] = el }}
                data-index={index}
                className={`relative flex flex-col sm:flex-row items-start gap-8 transition-all duration-700 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${
                  visibleSteps.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="h-16 w-16 rounded-full flex items-center justify-center transition-all duration-500"
                    style={{
                      backgroundColor: `${step.color}20`,
                      border: `2px solid ${step.color}`,
                      boxShadow: visibleSteps.has(index) ? `0 0 30px ${step.color}40` : "none",
                    }}
                  >
                    <step.icon className="h-7 w-7" style={{ color: step.color }} />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 sm:pl-28 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-32 lg:text-right" : "lg:pl-32 lg:text-left"
                  }`}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-500 hover:border-transparent hover:shadow-lg group"
                    style={{
                      "--hover-color": step.color,
                    } as React.CSSProperties}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <span
                        className="text-5xl font-bold opacity-20"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
