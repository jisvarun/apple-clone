import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'

export default function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  return (
    <article className={`product-card ${featured ? 'is-featured' : ''}`}>
      <div className="product-card-image">
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-copy">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className="product-card-bottom">
          <span>{product.price}</span>
          <Link className="round-arrow" to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  )
}
