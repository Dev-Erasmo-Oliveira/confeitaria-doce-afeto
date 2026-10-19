import { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import WhatsAppLink from './WhatsAppLink';
import { business } from '../config/business';
import styles from './Menu.module.css';

/**
 * Menu mobile (painel em tela cheia).
 * - Abre e fecha por botão, clique no link, tecla Escape ou clique no fundo.
 * - Mantém o foco dentro do painel enquanto estiver aberto.
 * - Bloqueia a rolagem do corpo enquanto estiver aberto.
 */
export default function Menu({ open, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previouslyFocused = document.activeElement;
    document.body.classList.add('is-locked');
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('is-locked');
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={styles.overlay}
      data-open={open}
      aria-hidden={!open}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={styles.panel}
        id="menu-mobile"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className={styles.head}>
          <span className={styles.brandSmall}>{business.name}</span>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Fechar menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className={styles.nav} aria-label="Menu mobile">
          <ul>
            {business.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={onClose} className={styles.navLink}>
                  <span>{link.label}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <WhatsAppLink
            number={business.whatsapp.number}
            message={business.whatsapp.defaultMessage}
            className="btn btn--primary"
            label="Fazer encomenda pelo WhatsApp"
          >
            Fazer encomenda
          </WhatsAppLink>
          <p className={styles.hint}>
            {business.whatsapp.display} · {business.instagram.handle}
          </p>
        </div>
      </div>
    </div>
  );
}
