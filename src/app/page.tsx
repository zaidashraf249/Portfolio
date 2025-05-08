import { MoveDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />

      <div className="fixed bottom-8 right-8 z-20">
        <a
          href="#about"
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce"
          aria-label="Scroll down"
        >
          <MoveDown size={24} />
        </a>
      </div>
    </div>
  )
}
