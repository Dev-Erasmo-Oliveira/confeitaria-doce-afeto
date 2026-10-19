import { useCallback, useEffect, useState } from 'react';
import { Menu as MenuIcon, MessageCircle } from 'lucide-react';
import Menu from './Menu';
import WhatsAppLink from './WhatsAppLink';
import brandMark from '../assets/brand-mark.svg';
import { business } from '../config/business';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu mobile ao voltar para o tamanho de desktop.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className={styles.header} data-scrolled={scrolled}>
        <div className={`container ${styles.inner}`}>
          <a className={styles.brand} href="#inicio" aria-label={`${business.fullName} — início`}>
            <span className={styles.mark} aria-hidden="true">
              <img src={brandMark} alt="" width={22} height={22} />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>{business.name}</span>
              <span className={styles.brandSub}>{business.categoryLine}</span>
            </span>
          </a>

          <nav className={styles.nav} aria-label="Navegação principal">
            <ul>
              {business.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <span className={styles.ctaWrap}>
              <WhatsAppLink
                number={business.whatsapp.number}
                message={business.whatsapp.defaultMessage}
                className="btn btn--primary"
                label="Fazer encomenda pelo WhatsApp"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Fazer encomenda
              </WhatsAppLink>
            </span>

            <button
              type="button"
              className={styles.burger}
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label="Abrir menu de navegação"
            >
              <MenuIcon size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <Menu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
