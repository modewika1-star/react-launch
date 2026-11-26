import { useState } from 'react'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#work' },
  { label: 'Our team', href: '#team' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Wonde home">
          wonde<span className="brand-mark" aria-hidden="true">.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={isMenuOpen ? 'nav-links is-open' : 'nav-links'}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
