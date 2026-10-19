import { MessageCircle, Info } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import WhatsAppLink from './WhatsAppLink';
import { business } from '../config/business';
import styles from './CustomOrders.module.css';

export default function CustomOrders() {
  const { customOrders } = business;

  return (
    <section className={`section ${styles.section}`} id="encomendas">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <p className="eyebrow">Encomendas personalizadas</p>
          <h2 className={styles.title}>{customOrders.title}</h2>
          <p className={`lede ${styles.text}`}>{customOrders.text}</p>

          <WhatsAppLink
            number={business.whatsapp.number}
            message={customOrders.message}
            className={`btn btn--dark ${styles.button}`}
            label="Solicitar orçamento de bolo personalizado pelo WhatsApp"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {customOrders.buttonLabel}
          </WhatsAppLink>

          <p className={styles.note}>
            <Info size={16} aria-hidden="true" />
            <span>{customOrders.note}</span>
          </p>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <ImageWithFallback
              src={customOrders.image}
              alt={customOrders.imageAlt}
              width={1200}
              height={1500}
              sizes="(min-width: 900px) 40vw, 92vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
