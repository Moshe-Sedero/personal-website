import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/Footer"
import { ChatFloatingLink } from "@/components/chat/ChatFloatingLink"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection delay={0.05}><Skills /></AnimatedSection>
      <AnimatedSection delay={0.05}><Experience /></AnimatedSection>
      <AnimatedSection delay={0.05}><Projects /></AnimatedSection>
      <AnimatedSection delay={0.05}><Contact /></AnimatedSection>
      <Footer />
      <ChatFloatingLink />
    </main>
  )
}
