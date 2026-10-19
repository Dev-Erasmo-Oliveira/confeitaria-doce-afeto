import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import SectionHeading from './SectionHeading';
import { business } from '../config/business';
import styles from './ProductCategories.module.css';

const ALL = 'todos';
const COLUMNS = 3;

/**
 * Calcula quantas colunas cada cartão ocupa na grade de 3 colunas.
 *
 * Cartões em destaque ocupam 2 colunas. O último cartão é expandingido
 * quando sobra espaço vazio na última linha, evitando buracos na grade.
 */
function withSpans(products) {
  const items = products.map((product) => ({
    ...product,
    span: product.featured ? 2 : 1,
  }));

  if (items.length === 0) return items;

  const total = items.reduce((sum, item) => sum + item.span, 0);
  const lastRowUnits = total % COLUMNS === 0 ? COLUMNS : total % COLUMNS;
  const missing = COLUMNS - lastRowUnits;

  if (missing > 0) {
    const last = items[items.length - 1];
    last.span = Math.min(last.span + missing, COLUMNS);
  }

  return items;
}

export default function ProductCategories() {
  const [active, setActive] = useState(ALL);

  const filters = useMemo(
    () => [{ id: ALL, label: 'Todos os produtos' }, ...business.categories],
    []
  );

  const products = useMemo(() => {
    const source =
      active === ALL
        ? business.products
        : business.products.filter((product) => product.category === active);
    return withSpans(source);
  }, [active]);

  return (
    <section className="section" id="cardapio">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Nosso cardápio"
            title="Um sabor para cada momento"
            text="Bolos e doces preparados sob encomenda. Escolha o seu favorito e chame a gente no WhatsApp para saber a disponibilidade da data."
          />

          <div className={styles.filters}>
            <h2 className="visually-hidden">Filtrar produtos por categoria</h2>
            <div className={styles.filterList} role="group" aria-label="Categorias do cardápio">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  className={styles.filter}
                  data-active={active === filter.id ? 'true' : 'false'}
                  aria-pressed={active === filter.id}
                  onClick={() => setActive(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <p className={styles.count} aria-live="polite">
              {products.length} {products.length === 1 ? 'item' : 'itens'}
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard product={product} span={product.span} key={product.id} />
          ))}
        </div>

        <p className={styles.footnote}>
          Preços e disponibilidade demonstrativos, sujeitos a confirmação direta com a
          confeitaria.
        </p>
      </div>
    </section>
  );
}
