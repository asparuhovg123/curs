import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>☁️</span>
          <span className={styles.logoText}>CloudCommerce</span>
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('features')}
          >
            Features
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonials
          </button>
          <button
            className={styles.navLink}
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </button>

          <div className={styles.navCta}>
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </nav>

        <button
          className={styles.mobileMenuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
