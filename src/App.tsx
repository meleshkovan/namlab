import { I18nProvider } from "@/lib/i18n"
import { BookingProvider } from "@/lib/booking"
import { Header } from "@/components/Header"
import { BookCallModal } from "@/components/BookCallModal"
import { Hero } from "@/components/sections/Hero"
import { Marquee } from "@/components/sections/Marquee"
import { ForWhom } from "@/components/sections/ForWhom"
import { Services } from "@/components/sections/Services"
import { ProBono } from "@/components/sections/ProBono"
import { Philosophy } from "@/components/sections/Philosophy"
import { Team } from "@/components/sections/Team"
import { Office } from "@/components/sections/Office"
import { Courses } from "@/components/sections/Courses"
import { Podcast } from "@/components/sections/Podcast"
import { BookCall } from "@/components/sections/BookCall"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <I18nProvider>
      <BookingProvider>
        <Header />
        <main>
          <Hero />
          <Marquee />
          <ForWhom />
          <Services />
          <ProBono />
          <Philosophy />
          <Team />
          <Office />
          <Courses />
          <Podcast />
          <BookCall />
        </main>
        <Footer />
        <BookCallModal />
      </BookingProvider>
    </I18nProvider>
  )
}

export default App
