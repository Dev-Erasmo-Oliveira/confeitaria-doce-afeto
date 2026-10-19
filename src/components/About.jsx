import { BookOpen, Palette, Truck } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import SectionHeading from './SectionHeading';
import { business } from '../config/business';
import styles from './About.module.css';

const ICONS = {
  'book-open': BookOpen,
  palette: Palette,
  truck: Truck,
};

export default function About() {
  const { about } = business;

  return (
    <section className="section section--tinted" id="sobre">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={styles.frame}>
            <ImageWithFallback
              src={about.image}
              alt={about.imageAlt}
              width={1200}
              height={1500}
              sizes="(min-width: 900px) 45vw, 92vw"
              className={styles.image}
            />
          </div>
          <span className={styles.stamp} aria-hidden="true">
            Feito à mão
          </span>
        </div>

        <div className={styles.content}>
          <SectionHeading eyebrow="Sobre nós" title={about.title} />

          <div className={styles.paragraphs}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <ul className={styles.highlights}>
            {about.highlights.map((highlight) => {
              const Icon = ICONS[highlight.icon] ?? BookOpen;
              return (
                <li key={highlight.label}>
                  <span className={styles.highlightIcon} aria-hidden="true">
                    <Icon size={17} strokeWidth={1.7} />
                  </span>
                  {highlight.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
