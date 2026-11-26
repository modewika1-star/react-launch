export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Thoughtful digital design
          </p>

          <h1 id="hero-title">
            A UI/UX design agency, <span className="hero-accent">evolving</span> the way people interact with the digital world.
          </h1>

          <p className="hero-description">
            We turn ideas into clear, intuitive experiences through research,
            thoughtful design, and a deep understanding of people.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#work">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-note">
            Research-led thinking. Human-focused experiences.
          </p>
        </div>

        <div className="hero-visual">
          <img
            src="/UI-UX%20differences-pana%201.png"
            alt="Illustration representing user interface and user experience design"
            fetchPriority="high"
            decoding="async"
          />
          <span className="visual-caption">Design with purpose</span>
        </div>
      </div>
      <div className="hero-divider" aria-hidden="true" />
    </section>
  )
}
