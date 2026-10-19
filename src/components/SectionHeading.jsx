import styles from './SectionHeading.module.css';

/**
 * Cabeçalho de seção reutilizável.
 * `align` controla o alinhamento (usado em seções assimétricas ou centralizadas).
 */
export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
  as: Tag = 'h2',
  id,
  className = '',
  children,
}) {
  return (
    <div className={`${styles.wrapper} ${styles[align]} ${className}`.trim()}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Tag className={styles.title} id={id}>
        {title}
      </Tag>
      {text ? <p className={`lede ${styles.text}`}>{text}</p> : null}
      {children}
    </div>
  );
}
