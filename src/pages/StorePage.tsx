import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function StorePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'All products'
  const visibleProducts = selectedCategory === 'All products' ? products : products.filter((product) => product.category === selectedCategory)

  return <main className="store-page content-section"><div className="store-heading"><div><p className="eyebrow">Apple Store</p><h1>Find your<br /><em>favorite.</em></h1></div><p className="store-intro">The best of Apple, all in one place. Explore the lineup and find the device that fits your life.</p></div><div className="category-tabs" role="tablist">{categories.map((category) => <button key={category} className={selectedCategory === category ? 'active' : ''} onClick={() => category === 'All products' ? setSearchParams({}) : setSearchParams({ category })}>{category}</button>)}</div><div className="store-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></main>
}
