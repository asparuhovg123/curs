import FeatureCard from '../ui/FeatureCard';
import { features } from '../../data/features';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Everything You Need to Succeed</h2>
          <p className={styles.description}>
            Powerful features designed to help you build, grow, and scale your e-commerce business with confidence.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
