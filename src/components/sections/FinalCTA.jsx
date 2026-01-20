import Button from '../ui/Button';
import styles from './FinalCTA.module.css';
import { FaArrowRight } from 'react-icons/fa';

export default function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.headline}>
            Ready to Transform Your E-Commerce Business?
          </h2>
          <p className={styles.subtext}>
            Join 50,000+ businesses already growing with our platform
          </p>
          <div className={styles.cta}>
            <Button variant="primary" size="lg" icon={<FaArrowRight />} iconPosition="right">
              Start Your Free Trial
            </Button>
            <p className={styles.microcopy}>
              No credit card required • 14-day trial • Cancel anytime
            </p>
          </div>
          <div className={styles.urgency}>
            🎁 Limited offer: Get 20% off your first 3 months
          </div>
        </div>
      </div>
    </section>
  );
}
