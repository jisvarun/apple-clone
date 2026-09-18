export type Product = {
  id: string
  name: string
  eyebrow: string
  description: string
  price: string
  image: string
  color: string
  category: string
  tag?: string
}

export const products: Product[] = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    eyebrow: 'Titanium. So strong. So light. So Pro.',
    description: 'The ultimate iPhone experience with a stunning camera system.',
    price: 'From $999',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85',
    color: 'graphite',
    category: 'iPhone',
    tag: 'New',
  },
  {
    id: 'macbook-air',
    name: 'MacBook Air',
    eyebrow: 'Lean. Mean. M3 machine.',
    description: 'Supercharged by M3. Three colors. One beautifully portable Mac.',
    price: 'From $999',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1200&q=85',
    color: 'starlight',
    category: 'Mac',
    tag: 'Bestseller',
  },
  {
    id: 'ipad-air',
    name: 'iPad Air',
    eyebrow: 'Fresh air.',
    description: 'Powerful, colorful, and ready for whatever you do next.',
    price: 'From $599',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=85',
    color: 'blue',
    category: 'iPad',
  },
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    eyebrow: 'Thinstant classic.',
    description: 'The thinnest Apple Watch ever, with more health insights.',
    price: 'From $399',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=1200&q=85',
    color: 'jet-black',
    category: 'Watch',
    tag: 'New',
  },
]

export const categories = ['All products', 'Mac', 'iPhone', 'iPad', 'Watch', 'AirPods']
