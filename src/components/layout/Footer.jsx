import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>☁️</span>
              <span className={styles.logoText}>CloudCommerce</span>
            </div>
            <p className={styles.tagline}>
              The all-in-one e-commerce platform that helps businesses grow faster.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Features</a></li>
              <li><a href="#" className={styles.link}>Pricing</a></li>
              <li><a href="#" className={styles.link}>Integrations</a></li>
              <li><a href="#" className={styles.link}>Changelog</a></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>About Us</a></li>
              <li><a href="#" className={styles.link}>Careers</a></li>
              <li><a href="#" className={styles.link}>Blog</a></li>
              <li><a href="#" className={styles.link}>Press Kit</a></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Support</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Help Center</a></li>
              <li><a href="#" className={styles.link}>Documentation</a></li>
              <li><a href="#" className={styles.link}>Contact Us</a></li>
              <li><a href="#" className={styles.link}>Status</a></li>
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Privacy Policy</a></li>
              <li><a href="#" className={styles.link}>Terms of Service</a></li>
              <li><a href="#" className={styles.link}>Cookie Policy</a></li>
              <li><a href="#" className={styles.link}>GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.trust}>
            <span className={styles.trustBadge}>🔒 SSL Secure</span>
            <span className={styles.trustBadge}>💳 PCI Compliant</span>
            <span className={styles.trustBadge}>✓ GDPR Ready</span>
          </div>
          <p className={styles.copyright}>
            © {currentYear} CloudCommerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
