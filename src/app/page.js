import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import ServiceSection from './components/ServiceSection/ServiceSection'
import TutorialSection from './components/TutorialSection/TutorialSection'
import Testimonials from './components/Testimonials/Testimonials'
import Map from './components/Map/Map'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import UpBtn from './components/UpBtn/UpBtn'
export default function Page() {
  return (
    <main >
      <Navbar />
      <Hero />
      <About />
      <ServiceSection />
      <TutorialSection />
      <Testimonials />
      <Map />
      <Contact />
      <Footer />
      <UpBtn />
    </main>
  )
}
