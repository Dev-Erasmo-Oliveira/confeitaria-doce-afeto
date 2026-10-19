/**
 * Utilitários de link do WhatsApp.
 *
 * O número deve estar no formato internacional, apenas dígitos
 * (ex.: 5511999999999). A mensagem é codificada com `encodeURIComponent`
 * para que possa ser usada com segurança em uma URL.
 */

/** Remove tudo que não for dígito do número informado. */
export function sanitizeNumber(number) {
  return String(number ?? '').replace(/\D/g, '');
}

/**
 * Monta o link `https://wa.me/<numero>?text=<mensagem codificada>`.
 * Retorna uma string vazia quando o número não é válido.
 */
export function buildWhatsAppLink(number, message = '') {
  const digits = sanitizeNumber(number);
  if (!digits) return '';
  const base = `https://wa.me/${digits}`;
  const text = String(message ?? '').trim();
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/** Link de telefone (tel:) a partir do número, já com máscara simples. */
export function buildPhoneLink(number) {
  const digits = sanitizeNumber(number);
  if (!digits) return '';
  return `tel:+${digits}`;
}
