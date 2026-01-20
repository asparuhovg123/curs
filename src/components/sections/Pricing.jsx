import PricingCard from '../ui/PricingCard';
import { pricingTiers } from '../../data/pricing';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.description}>
            Choose the plan that's right for your business. All plans include a 14-day free trial with full access.
          </p>
        </div>

        <div className={styles.grid}>
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              name={tier.name}
              price={tier.price}
              period={tier.period}
              description={tier.description}
              features={tier.features}
              cta={tier.cta}
              popular={tier.popular}
              badge={tier.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
