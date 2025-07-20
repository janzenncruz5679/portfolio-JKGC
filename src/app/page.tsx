import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'JKGC Portfolio',
  description: 'Created and Designed by JKGC',
}
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </main>
  )
}


