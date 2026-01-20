import Button from './Button';
import styles from './PricingCard.module.css';
import { FaCheck } from 'react-icons/fa';

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  popular,
  badge
}) {
  return (
    <div className={`${styles.card} ${popular ? styles.popular : ''}`}>
      {badge && <div className={styles.badge}>{badge}</div>}

      <div className={styles.header}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.pricing}>
        <span className={styles.currency}>$</span>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>/{period}</span>
      </div>

      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <FaCheck className={styles.checkIcon} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        variant={popular ? 'primary' : 'outline'}
        size="lg"
        fullWidth
      >
        {cta}
      </Button>
    </div>
  );
}
