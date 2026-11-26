const projects = [
  {
    image: '/cffca1244b96da11b2bcb39c3fb1ebe28806b1d8.jpg',
    imageAlt: 'Responsive e-commerce website interface design',
    title: 'E-commerce website',
    client: 'Uniderma',
    category: 'Responsive web design',
  },
  {
    image: '/eb04af81e2cdc8d9cf14dfc95fbd616480218e4f.jpg',
    imageAlt: 'Mobile application interface design',
    title: 'Mobile application',
    client: 'Coffee',
    category: 'Mobile experience',
  },
]

export default function WorkSection() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="work-heading">
          <div>
            <p className="section-kicker section-kicker-light">Selected projects</p>
            <h2 className="section-title" id="work-title">Our work</h2>
          </div>
          <p className="work-intro">
            A look at the experiences and interfaces shaped by our team.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.client}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-details">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-client">{project.client}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
