import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import styles from './ImageWithFallback.module.css';

/**
 * Imagem com carregamento adiado, dimensões reservadas e tratamento de erro.
 *
 * - `loading="lazy"` em imagens fora da primeira dobra (use `eager` no hero).
 * - `width`/`height` evitam saltos de layout (CLS).
 * - Se o arquivo não carregar, exibe um placeholder acessível em vez de
 *   deixar o ícone quebrado na página.
 */
export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority,
  sizes,
  ...rest
}) {
  const [status, setStatus] = useState('loading');

  return (
    <span className={`${styles.wrapper} ${className}`.trim()} data-status={status}>
      {status === 'error' ? (
        <span className={styles.fallback} role="img" aria-label={alt}>
          <ImageOff size={22} aria-hidden="true" />
          <span className={styles.fallbackText}>Imagem indisponível</span>
        </span>
      ) : (
        <img
          className={`${styles.image} ${imgClassName}`.trim()}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          fetchpriority={fetchPriority}
          sizes={sizes}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          {...rest}
        />
      )}
    </span>
  );
}
