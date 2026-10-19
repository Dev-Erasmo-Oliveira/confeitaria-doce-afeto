import { Clock } from 'lucide-react';
import { business } from '../config/business';
import styles from './OpeningHours.module.css';

/**
 * Programação semanal.
 * Os dados vêm de `business.openingHours`. Quando a confeitaria trabalha
 * apenas com encomendas, o bloco é substituído por um aviso.
 */
export default function OpeningHours() {
  const { openingHours, showsOnSiteService } = business;

  return (
    <div className={styles.hours}>
      <div className={styles.head}>
        <span className={styles.icon} aria-hidden="true">
          <Clock size={18} strokeWidth={1.6} />
        </span>
        <h3 className={styles.title} id="horarios-titulo">
          Quando estamos por aqui
        </h3>
      </div>

      {showsOnSiteService ? (
        <ul className={styles.list} aria-labelledby="horarios-titulo">
          {openingHours.map((item) => {
            const closed = item.hours.toLowerCase().includes('fechado');
            return (
              <li className={styles.item} key={item.day} data-closed={closed ? 'true' : 'false'}>
                <span className={styles.day}>{item.day}</span>
                <span className={styles.value}>{item.hours}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={styles.note}>
          Trabalhamos exclusivamente com encomendas. Os pedidos são combinados
          diretamente com a confeitaria pelo WhatsApp.
        </p>
      )}
    </div>
  );
}
