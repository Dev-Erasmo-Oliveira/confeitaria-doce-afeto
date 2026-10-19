import { MapPin, Navigation, Info } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import SectionHeading from './SectionHeading';
import OpeningHours from './OpeningHours';
import { business } from '../config/business';
import styles from './Location.module.css';

export default function Location() {
  const { address } = business;
  const hasMap = Boolean(address.mapsUrl);

  return (
    <section className="section" id="localizacao">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Onde estamos"
            title="Venha conhecer nosso cantinho"
            text="Um espaço pequeno e aconchegante para conversar sobre o seu próximo bolo."
          />

          <address className={styles.card}>
            <span className={styles.cardIcon} aria-hidden="true">
              <MapPin size={20} strokeWidth={1.6} />
            </span>
            <div className={styles.cardBody}>
              <p className={styles.street}>{address.street}</p>
              <p className={styles.line}>
                {address.neighborhood} · {address.city}
              </p>
              <p className={styles.reference}>{address.reference}</p>
              {address.cityPlaceholder ? (
                <p className={styles.placeholder}>
                  <Info size={14} aria-hidden="true" />
                  Endereço demonstrativo: a cidade será definida pela confeitaria.
                </p>
              ) : null}
            </div>
          </address>

          {hasMap ? (
            <a
              className={`btn btn--ghost ${styles.mapButton}`}
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation size={17} aria-hidden="true" />
              Como chegar
            </a>
          ) : (
            <p className={styles.noMap}>
              <Info size={15} aria-hidden="true" />
              O link de localização ainda não foi configurado nesta demonstração.
            </p>
          )}
        </div>

        <div className={styles.aside}>
          <OpeningHours />

          <div className={styles.visual}>
            <ImageWithFallback
              src="/assets/localizacao/vitrIne-da-loja.jpg"
              alt="Vitrine de confeitaria com bolos e sobremesas expostos sob luz quente"
              width={1200}
              height={800}
              sizes="(min-width: 900px) 40vw, 92vw"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
