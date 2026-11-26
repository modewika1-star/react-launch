import aboutGif from '../assets/ad8bfcdab0f7490450606b60643b9885fbb94a53.gif'

export default function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">A little about us</p>
          <h2 className="section-title" id="about-title">Grow your business with our agency</h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lead">
              Great digital experiences begin with understanding people.
            </p>
            <p>
              Our team lives and breathes UI/UX, taking on design challenges with
              curiosity and care. Our mission is to improve lives and businesses
              through thoughtful design decisions.
            </p>
            <p>
              With experience across different kinds of projects, we bring
              research, creativity, and collaboration together to shape useful,
              memorable digital experiences.
            </p>
            <a className="text-link" href="#services">
              Discover what we do <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-visual">
            <img
              src={aboutGif}
              alt="Animated illustration representing a collaborative design process"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
