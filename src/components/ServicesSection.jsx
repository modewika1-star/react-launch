import ServiceCard from './ServiceCard'
import mobileUiImg from '../assets/mobile ui.svg'
import uxResearchImg from '../assets/ux researches.svg'
import preDesignImg from '../assets/pre design.png'
import websiteUiImg from '../assets/Website ui.svg'

const services = [
  {
    imageSrc: mobileUiImg,
    imageAlt: 'Mobile interface illustration',
    title: 'Mobile UI',
    description: 'Intuitive, polished interfaces designed for smaller screens.',
  },
  {
    imageSrc: uxResearchImg,
    imageAlt: 'UX research illustration',
    title: 'UX Research',
    description: 'Research that turns user needs into clear design decisions.',
  },
  {
    imageSrc: preDesignImg,
    imageAlt: 'Wireframe and pre-design illustration',
    title: 'Pre-design',
    description: 'Thoughtful wireframes and prototypes before development.',
  },
  {
    imageSrc: websiteUiImg,
    imageAlt: 'Website interface illustration',
    title: 'Website UI',
    description: 'Modern website experiences for every screen size.',
  },
]

export default function ServicesSection() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading section-heading-centered">
          <p className="section-kicker">How we can help</p>
          <h2 className="section-title" id="services-title">Our services</h2>
          <p className="section-intro">
            We bring clarity and craft to every step of the design process.
          </p>
        </div>

        <div className="services-band">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
