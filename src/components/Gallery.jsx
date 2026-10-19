import { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import SectionHeading from './SectionHeading';
import { business } from '../config/business';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const items = business.gallery;
  const isOpen = activeIndex >= 0;

  const close = useCallback(() => {
    setActiveIndex(-1);
    if (lastTriggerRef.current instanceof HTMLElement) lastTriggerRef.current.focus();
  }, []);

  const step = useCallback(
    (direction) => {
      setActiveIndex((current) => {
        if (current < 0) return current;
        const next = (current + direction + items.length) % items.length;
        return next;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    document.body.classList.add('is-locked');
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        step(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        step(-1);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('is-locked');
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isOpen, close, step]);

  const activeItem = isOpen ? items[activeIndex] : null;

  return (
    <section className="section" id="galeria">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Galeria"
            title="Um olhar para o nosso dia a dia"
            text="Bolos decorados, fatias, doces e sobremesas: um recorte do que sai da nossa bancada."
          />
        </div>

        <ul className={styles.grid}>
          {items.map((item, index) => (
            <li key={item.src} className={styles.cell} data-size={item.size}>
              <button
                type="button"
                className={styles.trigger}
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setActiveIndex(index);
                }}
                aria-label={`Ampliar imagem: ${item.alt}`}
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.alt}
                  width={1000}
                  height={1250}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  className={styles.image}
                />
                <span className={styles.zoom} aria-hidden="true">
                  <Expand size={16} />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isOpen ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da imagem"
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className={styles.lightboxInner}>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              ref={closeButtonRef}
              aria-label="Fechar visualização"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <button
              type="button"
              className={`${styles.nav} ${styles.prev}`}
              onClick={() => step(-1)}
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={26} aria-hidden="true" />
            </button>

            <figure className={styles.figure}>
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className={styles.largeImage}
                width={1200}
                height={1500}
              />
              <figcaption className={styles.caption}>
                {activeItem.alt}
                <span className={styles.counter}>
                  {activeIndex + 1} / {items.length}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              className={`${styles.nav} ${styles.next}`}
              onClick={() => step(1)}
              aria-label="Próxima imagem"
            >
              <ChevronRight size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
