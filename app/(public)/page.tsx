import Hero from '@/components/public/hero'
import Navbar from '@/components/public/navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default Home