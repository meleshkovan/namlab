import { Nav } from "@/components/sections/Nav"
import { Hero } from "@/components/sections/Hero"
import { Marquee } from "@/components/sections/Marquee"
import { About } from "@/components/sections/About"
import { Services } from "@/components/sections/Services"
import { Method } from "@/components/sections/Method"
import { Team } from "@/components/sections/Team"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Method />
        <Team />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
