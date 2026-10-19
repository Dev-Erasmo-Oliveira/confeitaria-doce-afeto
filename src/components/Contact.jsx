import { MessageCircle, Instagram, MapPin, Clock, Phone } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import { business } from '../config/business';
import { buildPhoneLink } from '../utils/whatsapp';
import styles from './Contact.module.css';

export default function Contact() {
  const { contact, whatsapp, instagram, address } = business;
  const phoneLink = buildPhoneLink(whatsapp.number);

  const items = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: whatsapp.display,
      href: null,
      external: true,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: instagram.handle,
      href: instagram.url,
      external: true,
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: `${address.street} — ${address.neighborhood}, ${address.city}`,
      href: address.mapsUrl || null,
      external: true,
    },
    {
      icon: Clock,
      label: 'Atendimento',
      value: business.showsOnSiteService
        ? 'Ter a sex 09h–18h · Sáb 09h–16h'
        : 'Somente por encomenda',
      href: null,
    },
  ];

  return (
    <section className="section section--dark" id="contato">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <p className="eyebrow">Contato</p>
          <h2 className={styles.title}>{contact.title}</h2>
          <p className={`lede ${styles.text}`}>{contact.text}</p>

          <div className={styles.actions}>
            <WhatsAppLink
              number={whatsapp.number}
              message={contact.message}
              className="btn btn--primary"
              label="Fazer pedido pelo WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {contact.buttonLabel}
            </WhatsAppLink>

            {phoneLink ? (
              <a className="btn btn--light" href={phoneLink}>
                <Phone size={17} aria-hidden="true" />
                Ligar
              </a>
            ) : null}
          </div>

          <p className={styles.note}>{contact.note}</p>
        </div>

        <ul className={styles.list}>
          {items.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className={styles.itemIcon} aria-hidden="true">
                  <Icon size={17} strokeWidth={1.7} />
                </span>
                <span className={styles.itemText}>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <span className={styles.itemValue}>{item.value}</span>
                </span>
              </>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    className={styles.item}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <span className={styles.item}>{content}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
