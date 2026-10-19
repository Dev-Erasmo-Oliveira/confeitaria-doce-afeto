import { MessageCircle, ArrowDownRight, Sparkles } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import WhatsAppLink from './WhatsAppLink';
import { business } from '../config/business';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className={`eyebrow ${styles.heroEyebrow}`}>{business.fullName}</p>

          <h1 className={styles.title}>
            Feito com carinho.{' '}
            <em className={styles.accent}>Lembrado</em> a cada pedaço.
          </h1>

          <p className={`lede ${styles.lede}`}>{business.description}</p>

          <div className={styles.actions}>
            <WhatsAppLink
              number={business.whatsapp.number}
              message={business.whatsapp.defaultMessage}
              className="btn btn--primary"
              label="Encomendar pelo WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Encomendar pelo WhatsApp
            </WhatsAppLink>

            <a className="btn btn--ghost" href="#cardapio">
              Conhecer nosso cardápio
              <ArrowDownRight size={18} aria-hidden="true" />
            </a>
          </div>

          <p className={styles.support}>{business.supportLine}</p>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <ImageWithFallback
              src="/assets/hero/hero-bolo-marmore.jpg"
              alt="Bolo artesanal de duas camadas com cobertura clara e flores secas sobre pedestal de mármore"
              width={1300}
              height={1950}
              loading="eager"
              fetchPriority="high"
              className={styles.heroImage}
            />
          </div>

          <span className={styles.ring} aria-hidden="true" />

          <div className={styles.note}>
            <span className={styles.noteIcon} aria-hidden="true">
              <Sparkles size={16} />
            </span>
            <span className={styles.noteText}>
              <strong>Encomendas sob medida</strong>
              <span>Converse com a gente pelo WhatsApp</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
