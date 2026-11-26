import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WorkSection from './components/WorkSection'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
