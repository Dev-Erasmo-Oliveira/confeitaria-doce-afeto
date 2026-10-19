/**
 * Configuração central da confeitaria.
 *
 * Todos os dados comerciais (nome, contatos, endereço, horários, produtos,
 * categorias, imagens e mensagens de encomenda) ficam neste arquivo.
 * Para reutilizar o projeto em outra confeitaria, altere apenas este arquivo
 * (e as imagens em `public/assets`).
 */

/** Número do WhatsApp em formato internacional, apenas dígitos. Ex.: 5511999999999 */
const WHATSAPP_NUMBER = '5511999999999';

export const business = {
  /* ------------------------------------------------------------------ */
  /* Identidade                                                          */
  /* ------------------------------------------------------------------ */
  name: 'Doce Afeto',
  fullName: 'Doce Afeto Confeitaria',
  categoryLine: 'Confeitaria artesanal',
  slogan: 'Feito com carinho. Lembrado a cada pedaço.',
  description:
    'Bolos artesanais e doces preparados com cuidado para transformar momentos especiais em memórias deliciosas.',
  supportLine: 'Bolos artesanais • Doces • Momentos especiais',
  foundedYear: null, // preencher apenas se o negócio realmente tiver data de início

  /* ------------------------------------------------------------------ */
  /* Modo demonstração                                                  */
  /* ------------------------------------------------------------------ */
  demoMode: true,
  demoNotice:
    'Produtos, preços, endereço, horários e contatos são ilustrativos e devem ser substituídos pela confeitaria antes da publicação comercial.',

  /* ------------------------------------------------------------------ */
  /* Contatos                                                            */
  /* ------------------------------------------------------------------ */
  whatsapp: {
    number: WHATSAPP_NUMBER,
    display: '(11) 99999-9999',
    defaultMessage:
      'Olá! Gostaria de conhecer o cardápio da Doce Afeto Confeitaria e de informações sobre encomendas.',
  },
  instagram: {
    handle: '@doceafeto',
    url: 'https://www.instagram.com/doceafeto',
  },
  email: null, // preencher caso exista (ex.: 'contato@doceafeto.com.br')

  /* ------------------------------------------------------------------ */
  /* Endereço                                                            */
  /* ------------------------------------------------------------------ */
  address: {
    street: 'Rua das Palmeiras, 125',
    neighborhood: 'Centro',
    // Enquanto a cidade real não for informada, mantenha o aviso abaixo.
    city: 'Cidade a definir',
    cityPlaceholder: true,
    reference: 'Próximo à praça central',
    /**
     * Link do Google Maps (endereço completo ou coordenadas).
     * Enquanto estiver vazio, o botão "Como chegar" fica oculto e o bloco
     * exibe um aviso de que a localização ainda não foi configurada.
     */
    mapsUrl: '',
  },

  /* ------------------------------------------------------------------ */
  /* Horários de funcionamento                                           */
  /* ------------------------------------------------------------------ */
  openingHours: [
    { day: 'Segunda-feira', hours: 'Fechado' },
    { day: 'Terça a sexta-feira', hours: '09h às 18h' },
    { day: 'Sábado', hours: '09h às 16h' },
    { day: 'Domingo', hours: 'Fechado' },
  ],
  /** Atender presencialmente? Se a confeitaria trabalhar só com encomendas, use false. */
  showsOnSiteService: true,

  /* ------------------------------------------------------------------ */
  /* Navegação                                                           */
  /* ------------------------------------------------------------------ */
  navLinks: [
    { label: 'Início', href: '#inicio' },
    { label: 'Nosso Cardápio', href: '#cardapio' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ],

  /* ------------------------------------------------------------------ */
  /* Cardápio                                                            */
  /* ------------------------------------------------------------------ */
  categories: [
    { id: 'bolos-tradicionais', label: 'Bolos tradicionais', shortLabel: 'Tradicionais' },
    { id: 'bolos-especiais', label: 'Bolos especiais', shortLabel: 'Especiais' },
    { id: 'doces-e-sobremesas', label: 'Doces e sobremesas', shortLabel: 'Doces e sobremesas' },
  ],

  /**
   * Preços e unidades são apenas demonstrativos.
   * `unit` é livre: "unidade", "caixa com 6", "por cento", "a partir de", etc.
   */
  products: [
    {
      id: 'bolo-cenoura-chocolate',
      name: 'Bolo de cenoura com chocolate',
      description:
        'Massa fofinha de cenoura com generosa cobertura de brigadeiro de chocolate.',
      category: 'bolos-tradicionais',
      price: 45,
      priceLabel: 'R$ 45,00',
      unit: 'unidade',
      image: '/assets/produtos/bolo-de-cenoura-com-chocolate.jpg',
      alt: 'Fatia de bolo de cenoura com cobertura de chocolate sobre prato branco',
      featured: false,
    },
    {
      id: 'bolo-fuba-goiabada',
      name: 'Bolo de fubá com goiabada',
      description:
        'Fubá cremoso com pedaços de goiabada que se desfazem na massa a cada mordida.',
      category: 'bolos-tradicionais',
      price: 40,
      priceLabel: 'R$ 40,00',
      unit: 'unidade',
      image: '/assets/produtos/bolo-de-fuba-com-goiabada.jpg',
      alt: 'Fatia de bolo de fubá com cobertura crocante sobre prato de cerâmica',
      featured: false,
    },
    {
      id: 'bolo-chocolate-artesanal',
      name: 'Bolo de chocolate artesanal',
      description:
        'Chocolate intenso, massa úmida e acabamento shiny feito sob encomenda.',
      category: 'bolos-tradicionais',
      price: 55,
      priceLabel: 'R$ 55,00',
      unit: 'unidade',
      image: '/assets/produtos/bolo-de-chocolate-artesanal.jpg',
      alt: 'Bolo de chocolate artesanal com calda escorrida sobre suporte de cerâmica',
      featured: false,
    },
    {
      id: 'bolo-brigadeiro',
      name: 'Bolo de brigadeiro',
      description:
        'Camadas de bolo de chocolate com recheio e cobertura de brigadeiro cremoso.',
      category: 'bolos-especiais',
      price: 75,
      priceLabel: 'R$ 75,00',
      unit: 'unidade',
      image: '/assets/produtos/bolo-de-brigadeiro.jpg',
      alt: 'Bolo de chocolate com cobertura escura e recheio cremoso',
      featured: true,
    },
    {
      id: 'bolo-ninho-morango',
      name: 'Bolo de ninho com morango',
      description:
        'Massa de ninho com chantilly e morangos frescos, finalizado na hora da entrega.',
      category: 'bolos-especiais',
      price: 85,
      priceLabel: 'R$ 85,00',
      unit: 'unidade',
      image: '/assets/produtos/bolo-de-ninho-com-morango.jpg',
      alt: 'Fatia de bolo de ninho com morango sobre prato de vidro',
      featured: false,
    },
    {
      id: 'bolo-aniversario-personalizado',
      name: 'Bolo de aniversário personalizado',
      description:
        'Base, recheio e decoração combinados com você. Valores a confirmar.',
      category: 'bolos-especiais',
      price: 120,
      priceLabel: 'a partir de R$ 120,00',
      unit: 'a partir de',
      image: '/assets/produtos/bolo-de-aniversario-personalizado.jpg',
      alt: 'Bolo de aniversário personalizado de duas camadas com flores·e velas acesas',
      featured: true,
    },
    {
      id: 'brownie-artesanal',
      name: 'Brownie artesanal',
      description: 'Brownie úmido com casca crocante e nozes tostadas.',
      category: 'doces-e-sobremesas',
      price: 8,
      priceLabel: 'R$ 8,00',
      unit: 'por unidade',
      image: '/assets/produtos/brownie-artesanal.jpg',
      alt: 'Brownies artesanais cortados sobre papel manteiga, com nozes e cerejas',
      featured: false,
    },
    {
      id: 'caixa-brigadeiros',
      name: 'Caixa com 6 brigadeiros',
      description: 'Seis brigadeiros enrolados à mão, com granulado e recheio cremoso.',
      category: 'doces-e-sobremesas',
      price: 18,
      priceLabel: 'R$ 18,00',
      unit: 'caixa com 6 unidades',
      image: '/assets/produtos/caixa-com-6-brigadeiros.jpg',
      alt: 'Brigadeiros artesanais em forminhas escuras com raspas de chocolate',
      featured: false,
    },
    {
      id: 'torta-limao',
      name: 'Torta de limão',
      description: 'Base crocante, creme de limão e merengue maçaricado.',
      category: 'doces-e-sobremesas',
      price: 65,
      priceLabel: 'R$ 65,00',
      unit: 'unidade',
      image: '/assets/produtos/torta-de-limao.jpg',
      alt: 'Torta de limão com creme amarelo e raspas de casca sobre bandeja escura',
      featured: false,
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Galeria                                                             */
  /* ------------------------------------------------------------------ */
  gallery: [
    {
      src: '/assets/galeria/bolo-de-aniversario-decorado.jpg',
      alt: 'Dois bolos brancos decorados com flores sobre suportes de madeira',
      size: 'wide',
    },
    {
      src: '/assets/galeria/fatia-de-bolo-em-camadas.jpg',
      alt: 'Fatia de bolo em camadas com recheio de frutas sobre prato branco',
      size: 'tall',
    },
    {
      src: '/assets/galeria/brigadeiros-arraigados.jpg',
      alt: 'Brigadeiros de chocolate escuro com granulado sobre bandeja branca',
      size: 'standard',
    },
    {
      src: '/assets/galeria/bolo-de-morango-com-creme.jpg',
      alt: 'Torta de morango com morangos frescos sobre massa crocante',
      size: 'tall',
    },
    {
      src: '/assets/galeria/massagem-da-massa.jpg',
      alt: 'Mãos massageando massa de bolo sobre bancada enfarinhada',
      size: 'standard',
    },
    {
      src: '/assets/galeria/cobertura-de-chocolate.jpg',
      alt: 'Cobertura de chocolate sendo spreadida com espátula sobre um bolo',
      size: 'standard',
    },
    {
      src: '/assets/galeria/fatias-de-bolo-variadas.jpg',
      alt: 'Três fatias de bolo de sabores diferentes alinhadas em um prato',
      size: 'wide',
    },
    {
      src: '/assets/galeria/vitrine-de-fatias.jpg',
      alt: 'Vitrine refrigerada com fatias de bolo e sobremesas expostas',
      size: 'standard',
    },
    {
      src: '/assets/galeria/doces-de-amendoas.jpg',
      alt: 'Doces de chocolate com amêndoas sobre tábua de madeira',
      size: 'standard',
    },
    {
      src: '/assets/galeria/fatias-com-flores.jpg',
      alt: 'Fatias de bolo servidas em pratos de porcelana com flores ao lado',
      size: 'tall',
    },
    {
      src: '/assets/galeria/brigadeiros-na-tigela.jpg',
      alt: 'Tigela branca com brigadeiros decorados e flores ao fundo',
      size: 'standard',
    },
    {
      src: '/assets/galeria/caixa-de-bolos-de-chocolate.jpg',
      alt: 'Caixa de papel com bolos de chocolate e confeitos',
      size: 'standard',
    },
    {
      src: '/assets/galeria/confeiteira-no-ateliere.jpg',
      alt: 'Confeiteira durante o preparo no ateliê da confeitaria',
      size: 'standard',
    },
  ],

  /* ------------------------------------------------------------------ */
  /* Seções editoriais                                                   */
  /* ------------------------------------------------------------------ */
  benefits: [
    {
      icon: 'hand-heart',
      title: 'Produção artesanal',
      text: 'Cada bolo é preparado à mão, em pequenas quantidades, para sair do forno no ponto certo.',
    },
    {
      icon: 'calendar-heart',
      title: 'Preparado sob encomenda',
      text: 'Trabalhamos com pedidos agendados: a sua data, o seu sabor e a decoração que você imaginou.',
    },
    {
      icon: 'sparkles',
      title: 'Atenção aos detalhes',
      text: 'Acabamento manual, ingredientes bem escolhidos e cuidado em cada etapa da produção.',
    },
  ],

  about: {
    title: 'Pequenos detalhes. Grandes momentos.',
    paragraphs: [
      'A Doce Afeto nasceu da ideia de que um bolo pode carregar mais do que receita: ele reúne pessoas, marca datas e vira memória. Por isso trabalhamos com produção artesanal e atenção a cada detalhe, do primeiro passo da receita até a entrega na sua casa.',
      'Cada encomenda é conversada antes de entrar na bancada. Combinamos sabor, tamanho, decoração e o momento que você quer celebrar, para que o resultado final tenha a sua cara — sem perder o cuidado de uma produção feita à mão.',
    ],
    image: '/assets/sobre/sobre-confeiteira-finalizando-bolo.jpg',
    imageAlt: 'Confeiteira finalizando um bolo sobre um suporte, com bancada clara e luz natural',
    highlights: [
      { label: 'Receitas developidas em casa', icon: 'book-open' },
      { label: 'Decoração combinada com você', icon: 'palette' },
      { label: 'Entrega acordada com a confeitaria', icon: 'truck' },
    ],
  },

  customOrders: {
    title: 'Uma ocasião especial merece um bolo único.',
    text: 'Conte para nós a sua ideia e vamos conversar sobre as possibilidades para a sua comemoração.',
    buttonLabel: 'Solicitar orçamento pelo WhatsApp',
    image: '/assets/encomendas/bolo-personalizado-decorado.jpg',
    imageAlt: 'Bolo personalizado em caixa, pronto para presente, sobre mesa decorada',
    note: 'Valores, prazos de produção e detalhes da decoração são combinados diretamente com a confeitaria, de acordo com a data e o tamanho escolhidos.',
    message:
      'Olá! Gostaria de solicitar um orçamento de um bolo personalizado para uma ocasião especial. Podemos conversar sobre tamanho, sabor, decoração e disponibilidade?',
  },

  contact: {
    title: 'Seu próximo momento doce começa aqui.',
    text: 'Chame no WhatsApp para conhecer o cardápio, tirar dúvidas sobre encomendas e encontrar o bolo certo para a sua comemoração.',
    buttonLabel: 'Fazer pedido pelo WhatsApp',
    message:
      'Olá! Gostaria de fazer um pedido na Doce Afeto Confeitaria. Podem me passar informações sobre os bolos disponíveis e a disponibilidade para encomendar?',
    note: 'Os pedidos, valores e a disponibilidade são confirmados diretamente com a confeitaria.',
  },
};

/* -------------------------------------------------------------------- */
/* Mensagens de encomenda por produto                                    */
/* -------------------------------------------------------------------- */

/**
 * Monta a mensagem de encomenda de um produto.
 * Usa o campo `orderMessage` do produto quando existir; caso contrário,
 * gera a mensagem padrão a partir do nome.
 */
export function buildProductMessage(product) {
  if (product.orderMessage) return product.orderMessage;
  return `Olá! Gostaria de informações e disponibilidade para encomendar o ${product.name}.`;
}

export default business;
