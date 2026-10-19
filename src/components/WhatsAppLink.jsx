import { buildWhatsAppLink } from '../utils/whatsapp';
import styles from './WhatsAppLink.module.css';

/**
 * Link de WhatsApp reutilizável.
 * Abre em nova aba (desktop e mobile), com `rel="noopener noreferrer"`.
 */
export default function WhatsAppLink({
  number,
  message,
  className = '',
  children,
  label,
  ...rest
}) {
  const href = buildWhatsAppLink(number, message);

  if (!href) {
    return null;
  }

  return (
    <a
      className={`${styles.link} ${className}`.trim()}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      {...rest}
    >
      {children}
    </a>
  );
}
