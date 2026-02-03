import Hero from '@/components/public/hero'
import Navbar from '@/components/public/navbar'
import Services from '@/components/public/services'
import Skills from '@/components/public/skills'

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Services />
      </main>
    </div>
  )
}

export default Home