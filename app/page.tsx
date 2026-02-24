import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import MarqueeBanner from "@/components/marquee-banner"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Services />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
