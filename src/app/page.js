import Hero from './components/hero/Hero'
import About from './components/About/About'
import ServiceSection from './components/ServiceSection/ServiceSection'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
export default function Page() {
  return (
    <main >
      <Hero />
      <About />
      <ServiceSection />
      
      <Contact />
      <Footer />
    </main>
  )
}
