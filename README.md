# Doce Afeto Confeitaria

Landing page comercial para confeitaria, construída em **React + Vite**.
Encomendas são feitas pelo **WhatsApp** — sem back-end, carrinho ou pagamento.

> Projeto de demonstração: produtos, preços, endereço, horários e contatos são
> fictícios. Substitua tudo em `src/config/business.js` antes de publicar.

## Rodar

```bash
npm install
npm run dev       # http://localhost:5173
```

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Gera `dist/` (HTML + JS + CSS + imagens + fontes) |
| `npm run preview` | Serve o `dist/` localmente em `http://localhost:4173` |

## Publicar

A pasta `dist/` é 100% estática.

- **Cloudflare Pages** — preset `Vite`, build `npm run build`, output `dist`.
- **Netlify / Vercel** — build `npm run build`, publish `dist`.
- **GitHub Pages** — rode `npm run build` e publique `dist/`. Em subpasta,
  defina `base: './'` em `vite.config.js` e troque `/assets/...` e
  `/fonts/...` por caminhos relativos.

## Onde mudar o conteúdo

Tudo em **`src/config/business.js`**:

- `whatsapp` — número (internacional, só dígitos) e mensagens
- `instagram`, `address` (inclui `mapsUrl` do Google Maps), `openingHours`
- `categories` e `products` — cardápio, preços, unidades, imagens e `featured`
- `gallery` — fotos da galeria (`size: standard | wide | tall`)
- `benefits`, `about`, `customOrders`, `contact` — textos das seções
- `demoMode` — `false` remove a faixa de aviso do rodapé

Fotos ficam em `public/assets/`. Fontes em `public/fonts/`.

## Estrutura

```
src/
├── components/    um componente React + um CSS Module por seção
├── config/        business.js (todos os dados comerciais)
├── styles/        global.css (tokens de design e utilitários)
├── utils/         whatsapp.js (montagem dos links wa.me)
└── assets/        brand-mark.svg
```

## Stack

React 18 · Vite 5 · lucide-react · CSS Modules · Fraunces + Manrope (locais)
