"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown, Sparkles, MapPin, Music } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e84393]/10 rounded-full blur-[128px] transition-transform duration-700"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f39c12]/10 rounded-full blur-[128px] transition-transform duration-700"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d2ff]/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#e84393 1px, transparent 1px), linear-gradient(90deg, #e84393 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-[#e84393]/30 bg-[#e84393]/10 px-4 py-2 text-sm text-[#e84393] mb-8 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Premium Banjo Instrument Graphics</span>
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance transition-all duration-700 delay-100 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="text-foreground">Custom Graphics</span>
              <br />
              <span className="text-foreground">for All </span>
              <span className="text-gradient">Banjo</span>
              <br />
              <span className="text-gradient">Instruments</span>
            </h1>

            {/* Description */}
            <p
              className={`mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-200 mx-auto lg:mx-0 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Transform your banjo with stunning custom artwork. From traditional motifs to modern designs, we bring your musical instruments to life with vibrant, hand-crafted graphics.
            </p>

            {/* Location */}
            <div
              className={`mt-4 flex items-center gap-2 text-muted-foreground justify-center lg:justify-start transition-all duration-700 delay-250 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <MapPin className="h-4 w-4 text-[#e84393]" />
              <span className="text-sm">Dombivli, Thane, Mumbai, India</span>
            </div>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 delay-300 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#gallery"
                className="group relative inline-flex items-center gap-2 rounded-full bg-[#e84393] px-8 py-4 text-base font-semibold text-[#ffffff] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#e84393]/25"
              >
                <Music className="h-5 w-5" />
                View Our Work
                <span className="absolute inset-0 rounded-full bg-[#ffffff]/0 transition-all duration-300 group-hover:bg-[#ffffff]/10" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#f39c12]/40 px-8 py-4 text-base font-semibold text-[#f39c12] transition-all duration-300 hover:bg-[#f39c12]/10 hover:border-[#f39c12] hover:scale-105"
              >
                Get a Quote
              </a>
            </div>

            {/* Stats */}
            <div
              className={`mt-12 flex gap-8 justify-center lg:justify-start transition-all duration-700 delay-500 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {[
                { value: "100+", label: "Designs Made" },
                { value: "3.4K+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`relative flex-shrink-0 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95"
            }`}
          >
            {/* Glowing ring behind profile */}
            <div className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#e84393] via-[#f39c12] to-[#ffd700] opacity-20 blur-2xl animate-pulse" />
            
            <div className="relative">
              {/* Rotating outer ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#e84393] via-[#f39c12] to-[#ffd700] animate-[spin_8s_linear_infinite] opacity-60" />
              <div className="absolute -inset-2 rounded-full bg-[#0a0a0f]" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-[#e84393]/50 animate-float">
                <Image
                  src="/images/profile.jpg"
                  alt="RJ Graphics - Raj Navnath Mhatre"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 sm:top-4 sm:-right-4 bg-[#12121a] border border-[#e84393]/30 rounded-xl px-3 py-2 animate-float shadow-lg shadow-[#e84393]/10">
              <div className="flex items-center gap-2">
                <Music className="h-4 w-4 text-[#e84393]" />
                <span className="text-xs font-medium text-foreground">Music & Instruments</span>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-4 bg-[#12121a] border border-[#f39c12]/30 rounded-xl px-3 py-2 animate-float shadow-lg shadow-[#f39c12]/10" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#f39c12]" />
                <span className="text-xs font-medium text-foreground">Custom Designs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-muted-foreground hover:text-[#e84393] transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
