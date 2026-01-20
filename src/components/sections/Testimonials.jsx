import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Loved by Businesses Everywhere</h2>
          <p className={styles.description}>
            Join thousands of satisfied customers who have transformed their e-commerce operations with CloudCommerce.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
