import { HandHeart, CalendarHeart, Sparkles } from 'lucide-react';
import { business } from '../config/business';
import styles from './Benefits.module.css';

const ICONS = {
  'hand-heart': HandHeart,
  'calendar-heart': CalendarHeart,
  sparkles: Sparkles,
};

export default function Benefits() {
  return (
    <section className={`section section--dark ${styles.band}`} aria-label="Diferenciais da confeitaria">
      <div className={`container ${styles.inner}`}>
        {business.benefits.map((benefit) => {
          const Icon = ICONS[benefit.icon] ?? Sparkles;
          return (
            <article className={styles.item} key={benefit.title}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className={styles.title}>{benefit.title}</h3>
                <p className={styles.text}>{benefit.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
