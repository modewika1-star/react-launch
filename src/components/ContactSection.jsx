import { useState } from 'react'

const contactEmail = 'Mostafa@gamil.com'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent('Website enquiry from ' + formData.name)
    const body = encodeURIComponent(
      'Name: ' + formData.name + '\n' +
      'Email: ' + formData.email + '\n\n' +
      formData.message
    )

    setStatus('Your email app should open with your message ready to send.')
    window.location.href = 'mailto:' + contactEmail + '?subject=' + subject + '&body=' + body
  }

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Let us hear from you</p>
          <h2 className="section-title" id="contact-title">Drop your message</h2>
        </div>

        <div className="contact-layout">
          <aside className="contact-panel" aria-label="Contact information">
            <p className="contact-panel-kicker">Start a conversation</p>
            <h3>Contact us</h3>
            <p className="contact-panel-copy">
              Have a project in mind? Tell us a little about it and we will take it from there.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span aria-hidden="true">⌖</span>
                <p>Dakahlia - Mansoura, Egypt</p>
              </div>
              <div className="contact-detail">
                <span aria-hidden="true">✉</span>
                <a href={'mailto:' + contactEmail}>{contactEmail}</a>
              </div>
              <div className="contact-detail">
                <span aria-hidden="true">☎</span>
                <a href="tel:+201212282246">+20 01212282246</a>
              </div>
              <div className="contact-detail">
                <span aria-hidden="true">☎</span>
                <a href="tel:+201556965665">+20 01556965665</a>
              </div>
            </div>
          </aside>

          <div className="contact-form-card">
            <h3>Get in touch</h3>
            <p className="form-intro">Feel free to drop us a line below.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">Your email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button className="button-primary form-submit" type="submit">
                Send message <span aria-hidden="true">↗</span>
              </button>
              <p className="form-status" role="status" aria-live="polite">{status}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
