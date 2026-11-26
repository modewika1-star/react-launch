export default function ServiceCard({ imageSrc, imageAlt, title, description }) {
  return (
    <article className="service-card">
      <div className="service-icon">
        <img src={imageSrc} alt={imageAlt} loading="lazy" decoding="async" />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <a className="service-link" href="#contact" aria-label={'Discuss ' + title}>
        Discuss this service <span aria-hidden="true">↗</span>
      </a>
    </article>
  )
}
