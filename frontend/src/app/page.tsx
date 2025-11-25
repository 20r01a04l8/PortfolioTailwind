import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <div className="container">
        <Projects />
        <About />
      </div>
    </div>
  )
}
