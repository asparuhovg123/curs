import Button from '../ui/Button';
import styles from './Hero.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Ship Better Products <span className={styles.highlight}>10x Faster</span>
          </h1>
          <p className={styles.subheadline}>
            The all-in-one e-commerce platform that eliminates complexity so you can focus on growth, not configuration.
          </p>
          <div className={styles.cta}>
            <Button variant="primary" size="lg" icon={<FaArrowRight />} iconPosition="right">
              Start Free Trial
            </Button>
            <p className={styles.microcopy}>
              No credit card required • 14-day trial • Cancel anytime
            </p>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.heroImage}>
            <div className={styles.placeholder}>
              <span className={styles.placeholderIcon}>🚀</span>
              <span className={styles.placeholderText}>Your Product Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
