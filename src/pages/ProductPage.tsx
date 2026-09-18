import { Check, ChevronRight, Minus, Plus, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

export default function ProductPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  return <main className="product-page"><div className="breadcrumbs"><Link to="/store">Store</Link><ChevronRight size={13} />{product.category}<ChevronRight size={13} />{product.name}</div><section className="product-detail"><div className="detail-visual"><span className="detail-badge">{product.tag || 'Popular'}</span><img src={product.image} alt={product.name} /></div><div className="detail-copy"><p className="eyebrow">{product.category} / {product.eyebrow}</p><h1>{product.name}</h1><p className="detail-description">{product.description} Built with industry-leading performance and an experience that feels instantly familiar.</p><div className="detail-rule"></div><div className="price-row"><div><span className="price-label">Starting at</span><strong>{product.price}</strong></div><div className="quantity"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button><span>{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button></div></div><button className={`button button-dark add-button ${added ? 'added' : ''}`} type="button" onClick={() => setAdded(true)}>{added ? <><Check size={16} /> Added to bag</> : 'Add to bag'}</button><div className="detail-perks"><div><ShieldCheck size={19} /><span><b>Free delivery</b><small>Get free delivery or pickup.</small></span></div><div><Check size={19} /><span><b>Apple quality</b><small>Every product is covered by AppleCare.</small></span></div></div></div></section></main>
}
