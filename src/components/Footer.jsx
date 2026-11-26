import facebookSvg from '../assets/facebook.svg'
import twitterSvg from '../assets/twitter.svg'
import linkedinSvg from '../assets/linkedin.svg'
import worldSvg from '../assets/world.svg'

const socialIcons = [
  { name: 'Facebook', image: facebookSvg },
  { name: 'Website', image: worldSvg },
  { name: 'Twitter', image: twitterSvg },
  { name: 'LinkedIn', image: linkedinSvg },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand footer-brand" href="#top">
              wonde<span className="brand-mark" aria-hidden="true">.</span>
            </a>
            <p>
              Thoughtful design for better digital experiences.
            </p>
            <div className="footer-socials" aria-label="Social media platforms">
              {socialIcons.map((item) => (
                <span className="footer-social-icon" key={item.name} title={item.name}>
                  <img src={item.image} alt="" />
                </span>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#about">About us</a>
            <a href="#services">Services</a>
            <a href="#work">Our work</a>
            <a href="#team">Our team</a>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <a href="mailto:Mostafa@gamil.com">Mostafa@gamil.com</a>
            <a href="tel:+201212282246">+20 01212282246</a>
            <a href="tel:+201556965665">+20 01556965665</a>
            <span>Dakahlia - Mansoura, Egypt</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright Wonde. All Rights Reserved © {new Date().getFullYear()}</p>
          <p>Designed by Developer Career Team.</p>
        </div>
      </div>
    </footer>
  )
}
