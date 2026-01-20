import styles from './TestimonialCard.module.css';
import { FaStar } from 'react-icons/fa';

export default function TestimonialCard({ quote, author, rating }) {
  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className={styles.star} />
        ))}
      </div>

      <blockquote className={styles.quote}>
        "{quote}"
      </blockquote>

      <div className={styles.author}>
        <img
          src={author.avatar}
          alt={author.name}
          className={styles.avatar}
        />
        <div className={styles.info}>
          <div className={styles.name}>{author.name}</div>
          <div className={styles.role}>
            {author.title} at {author.company}
          </div>
        </div>
      </div>
    </div>
  );
}
