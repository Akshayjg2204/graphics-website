"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MapPin, Youtube, Instagram, MessageCircle, Send, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Contact() {
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
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#e84393]/5 rounded-full blur-[200px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e84393]/30 bg-[#e84393]/10 px-4 py-2 text-sm text-[#e84393] mb-6">
            <Sparkles className="h-4 w-4" />
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Ready to <span className="text-gradient">Transform</span> Your Banjo?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Contact us today and let us create something amazing for your instrument.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Profile Card */}
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8">
              <div className="flex items-center gap-5 mb-8">
                <div className="relative h-20 w-20 rounded-full overflow-hidden ring-2 ring-[#e84393]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Raj Navnath Mhatre"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Raj Navnath Mhatre</h3>
                  <p className="text-sm text-[#e84393]">Founder, RJ Graphics</p>
                  <p className="text-xs text-muted-foreground mt-1">Business Service</p>
                </div>
              </div>

              {/* Contact Items */}
              <div className="space-y-5">
                <a
                  href="tel:+918433627621"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e84393]/10 border border-[#e84393]/20 transition-all duration-300 group-hover:bg-[#e84393]/20 group-hover:scale-105">
                    <Phone className="h-5 w-5 text-[#e84393]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call / WhatsApp</p>
                    <p className="font-semibold text-foreground group-hover:text-[#e84393] transition-colors">+91 8433627621</p>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=Dombivli,Thane,Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f39c12]/10 border border-[#f39c12]/20 transition-all duration-300 group-hover:bg-[#f39c12]/20 group-hover:scale-105">
                    <MapPin className="h-5 w-5 text-[#f39c12]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground group-hover:text-[#f39c12] transition-colors">Dombivli, Thane, Mumbai</p>
                  </div>
                </a>

                <a
                  href="https://www.youtube.com/@Rjgraphicsdombivli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff0000]/10 border border-[#ff0000]/20 transition-all duration-300 group-hover:bg-[#ff0000]/20 group-hover:scale-105">
                    <Youtube className="h-5 w-5 text-[#ff4444]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">YouTube</p>
                    <p className="font-semibold text-foreground group-hover:text-[#ff4444] transition-colors">@Rjgraphicsdombivli</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/rj_graphics_dombivli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e84393]/10 border border-[#e84393]/20 transition-all duration-300 group-hover:bg-[#e84393]/20 group-hover:scale-105">
                    <Instagram className="h-5 w-5 text-[#e84393]" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <p className="font-semibold text-foreground group-hover:text-[#e84393] transition-colors">@rj_graphics_dombivli</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form / WhatsApp CTA */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h3>
                <p className="text-muted-foreground mb-8">Fill in the details and we will get back to you within 24 hours.</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-[#e84393] focus:ring-1 focus:ring-[#e84393] transition-all duration-300 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-[#e84393] focus:ring-1 focus:ring-[#e84393] transition-all duration-300 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Describe Your Design</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about the design you want for your banjo..."
                      className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-[#e84393] focus:ring-1 focus:ring-[#e84393] transition-all duration-300 outline-none resize-none"
                    />
                  </div>
                </form>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="https://wa.me/918433627621?text=Hi%20I%20want%20to%20inquire%20about%20custom%20banjo%20graphics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-[#ffffff] transition-all duration-300 hover:bg-[#20bd5a] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#25D366]/25"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#e84393] px-8 py-4 text-base font-semibold text-[#ffffff] transition-all duration-300 hover:bg-[#d63384] hover:scale-[1.02] hover:shadow-lg hover:shadow-[#e84393]/25"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
