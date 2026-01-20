import styles from './SocialProof.module.css';
import { FaUsers, FaStar, FaCheckCircle, FaHeadset } from 'react-icons/fa';

export default function SocialProof() {
  const stats = [
    { icon: <FaUsers />, number: "50,000+", label: "Active Users" },
    { icon: <FaStar />, number: "5.0/5", label: "Average Rating" },
    { icon: <FaCheckCircle />, number: "99.9%", label: "Uptime Guarantee" },
    { icon: <FaHeadset />, number: "24/7", label: "Support Available" }
  ];

  return (
    <section className={styles.socialProof}>
      <div className={`container ${styles.container}`}>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
