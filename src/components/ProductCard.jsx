import { MessageCircle } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import WhatsAppLink from './WhatsAppLink';
import { business, buildProductMessage } from '../config/business';
import styles from './ProductCard.module.css';

/**
 * Card de produto.
 *
 * Todos os dados vêm de `business.products`. O layout muda apenas quando o
 * produto está marcado como `featured` (destaque), alternando a composição
 * para evitar uma sequência de cartões idênticos.
 */
export default function ProductCard({ product, span = 1 }) {
  const message = buildProductMessage(product);

  return (
    <article
      className={styles.card}
      data-featured={product.featured ? 'true' : 'false'}
      data-span={span}
      style={{ '--span': span }}
    >
      <div className={styles.media}>
        <ImageWithFallback
          src={product.image}
          alt={product.alt}
          width={900}
          height={1125}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className={styles.image}
        />
        {product.featured ? <span className={styles.tag}>Destaque</span> : null}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <p className={styles.price}>
            <span className={styles.priceValue}>{product.priceLabel}</span>
            <span className={styles.priceUnit}>{product.unit}</span>
          </p>

          <WhatsAppLink
            number={business.whatsapp.number}
            message={message}
            className={styles.order}
            label={`Encomendar ${product.name} pelo WhatsApp`}
          >
            <MessageCircle size={16} aria-hidden="true" />
            Encomendar
          </WhatsAppLink>
        </div>
      </div>
    </article>
  );
}
