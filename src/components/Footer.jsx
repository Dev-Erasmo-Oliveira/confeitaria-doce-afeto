import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react';
import brandMark from '../assets/brand-mark.svg';
import { business } from '../config/business';
import { buildWhatsAppLink } from '../utils/whatsapp';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const { address, whatsapp, instagram, openingHours, demoMode, demoNotice } = business;
  const whatsappLink = buildWhatsAppLink(whatsapp.number, whatsapp.defaultMessage);

  return (
    <footer className={styles.footer}>
      {demoMode ? (
        <div className={styles.demo}>
          <div className={`container ${styles.demoInner}`}>
            <p className={styles.demoText}>
              <strong>Site de demonstração.</strong> {demoNotice}
            </p>
          </div>
        </div>
      ) : null}

      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <a className={styles.brandLink} href="#inicio" aria-label={`${business.fullName} — início`}>
            <span className={styles.mark} aria-hidden="true">
              <img src={brandMark} alt="" width={18} height={18} />
            </span>
            <span className={styles.brandName}>{business.name}</span>
          </a>
          <p className={styles.tagline}>{business.categoryLine}</p>
          <p className={styles.slogan}>{business.slogan}</p>
        </div>

        <nav className={styles.column} aria-label="Navegação do rodapé">
          <h2 className={styles.columnTitle}>Navegação</h2>
          <ul>
            {business.navLinks.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Onde estamos</h2>
          <address className={styles.address}>
            <span className={styles.addressLine}>
              <MapPin size={15} aria-hidden="true" />
              {address.street}
            </span>
            <span className={styles.addressLine}>
              {address.neighborhood} · {address.city}
            </span>
            <span className={styles.addressLine}>{address.reference}</span>
          </address>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Horários</h2>
          <ul className={styles.hours}>
            {openingHours.map((item) => (
              <li key={item.day}>
                <span className={styles.hoursLine}>
                  <Clock size={13} aria-hidden="true" />
                  <span className={styles.hoursDay}>{item.day}</span>
                </span>
                <span className={styles.hoursValue}>{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h2 className={styles.columnTitle}>Fale com a gente</h2>
          <ul className={styles.social}>
            <li>
              {whatsappLink ? (
                <a
                  className={styles.link}
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  {whatsapp.display}
                </a>
              ) : (
                <span className={styles.link}>
                  <MessageCircle size={15} aria-hidden="true" />
                  {whatsapp.display}
                </span>
              )}
            </li>
            <li>
              {instagram.url ? (
                <a
                  className={styles.link}
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={15} aria-hidden="true" />
                  {instagram.handle}
                </a>
              ) : (
                <span className={styles.link}>
                  <Instagram size={15} aria-hidden="true" />
                  {instagram.handle}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            © {year} {business.fullName}. Todos os direitos reservados.
          </p>
          <a className={styles.topLink} href="#inicio">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
