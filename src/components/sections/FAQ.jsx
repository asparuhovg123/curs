import { useState } from 'react';
import { faqs } from '../../data/faq';
import styles from './FAQ.module.css';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.description}>
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`${styles.item} ${activeId === faq.id ? styles.active : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span>{faq.question}</span>
                <FaChevronDown className={styles.icon} />
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
