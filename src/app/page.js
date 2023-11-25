import Hero from './components/Hero/Hero'
import About from './components/About/About'
import ServiceSection from './components/ServiceSection/ServiceSection'
import TutorialSection from './components/TutorialSection/TutorialSection'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
export default function Page() {
  return (
    <main >
      <Hero />
      <About />
      <ServiceSection />
      <TutorialSection />
      <Contact />
      <Footer />
    </main>
  )
}
