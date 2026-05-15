import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Kits', href: '#kits' },
  { label: 'Contato', href: '#contato' },
];

const baseUrl = import.meta.env.BASE_URL;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <a className="header__logo" href="#inicio" onClick={() => handleNavClick('#inicio')}>
          <img src={`${baseUrl}logo-icon.svg`} alt="Casa Botânica" className="header__logo-icon" />
          <div className="header__logo-text">
            <span className="header__logo-name">CASA BOTÂNICA</span>
            <span className="header__logo-tagline">Plantas & Bem-Estar Natural</span>
          </div>
        </a>

        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
              {link.label}
            </a>
          ))}
          <a href="#kits" className="header__btn"
            onClick={(e) => { e.preventDefault(); handleNavClick('#kits'); }}>
            Explorar Catálogo
          </a>
        </nav>

        <button className="header__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <button className="header__mobile-close" onClick={() => setMenuOpen(false)}><X size={20} /></button>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__mobile-link"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && <div className="header__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
