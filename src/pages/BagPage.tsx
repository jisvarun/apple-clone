import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BagPage() { return <main className="bag-page content-section"><div className="bag-empty"><div className="bag-icon"><ShoppingBag size={28} /></div><p className="eyebrow">Your bag</p><h1>Good things<br /><em>await.</em></h1><p>Your bag is ready when you are. Explore the latest products and find something that fits your world.</p><Link className="button button-dark" to="/store">Continue shopping <ArrowRight size={16} /></Link></div></main> }
