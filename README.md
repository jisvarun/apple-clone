# Apple Storefront Clone

A responsive Apple-inspired storefront built with React, TypeScript, Vite, Tailwind CSS, and custom CSS styling.

The project focuses on a product-first shopping experience with multiple pages, reusable components, responsive layouts, product filtering, and interactive product details.

## Features

- Apple-inspired responsive storefront design
- React Router navigation
- Home page with hero section, product highlights, and ecosystem section
- Store page with category filtering
- Product detail pages with quantity controls and add-to-bag interaction
- Support page with help categories
- Empty shopping bag page
- Responsive mobile navigation menu
- Reusable product cards, header, and footer components
- Lucide icons
- Remote product imagery with responsive image sizing
- Production-ready TypeScript and ESLint setup

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage and featured products |
| `/store` | Product catalog |
| `/store?category=Mac` | Filtered product catalog |
| `/product/:productId` | Product detail page |
| `/support` | Support and help options |
| `/bag` | Shopping bag page |

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Project Structure

```text
src/
├── components/
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   └── SiteHeader.tsx
├── data/
│   └── products.ts
├── pages/
│   ├── BagPage.tsx
│   ├── HomePage.tsx
│   ├── ProductPage.tsx
│   ├── StorePage.tsx
│   └── SupportPage.tsx
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## Product Data

Product content is centralized in `src/data/products.ts`. Each product includes its name, category, description, price, tag, and image URL. Store filters and product detail routes use this shared data source.

The current product images are served from Unsplash with image transformation parameters. An internet connection may be required for the remote images to load during development and deployment.

## Design Notes

The visual system uses:

- Space Grotesk for display typography
- DM Sans for body text
- Graphite, blue, pale green, and cool neutral colors
- Large editorial headings and generous spacing
- Responsive product grids and mobile navigation
- Subtle entrance and hover animations

## License

This is an educational Apple-inspired clone. It is not affiliated with or endorsed by Apple Inc.
