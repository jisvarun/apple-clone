import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-copy reveal-up">
          <span className="hero-kicker"><Sparkles size={14} /> The new collection</span>
          <h1>Think<br /><em>different.</em><br />Beautifully.</h1>
          <p>Powerful tools, thoughtfully designed. Meet the lineup that turns everyday moments into something more.</p>
          <div className="hero-actions"><Link className="button button-dark" to="/store">Shop the collection <ArrowRight size={16} /></Link><button className="play-link" type="button"><span><Play size={13} fill="currentColor" /></span> Watch the film</button></div>
        </div>
        <div className="hero-visual reveal-in"><div className="hero-sun"></div><div className="hero-device"><img src={products[0].image} alt="iPhone 16 Pro" /></div><span className="hero-orbit orbit-one"></span><span className="hero-orbit orbit-two"></span><span className="hero-note">Pro camera system <b>01</b></span></div>
        <div className="hero-scroll">Scroll to explore <span></span></div>
      </section>

      <section className="intro-band"><div className="section-label">01 / The lineup</div><div className="intro-content"><h2>There’s more<br /><span>to love.</span></h2><p>From your pocket to your desk, every product is made to work beautifully together. Start with what inspires you.</p></div></section>

      <section className="featured-section content-section"><div className="section-heading"><div><p className="eyebrow">Made for more</p><h2>What’s new</h2></div><Link className="text-link" to="/store">View all products <ArrowRight size={16} /></Link></div><div className="product-grid">{products.slice(0, 3).map((product, index) => <ProductCard key={product.id} product={product} featured={index === 0} />)}</div></section>

      <section className="statement-section"><div className="statement-number">02</div><h2>Small details.<br /><em>Big difference.</em></h2><p>Thoughtful from the inside out.</p><div className="statement-line"></div></section>

      <section className="ecosystem-section content-section"><div className="section-label">03 / The ecosystem</div><div className="ecosystem-copy"><h2>It all<br /><span>just works.</span></h2><p>One seamless experience across all your favorite devices. Pick up where you left off, wherever you are.</p><Link className="text-link" to="/support">Explore the ecosystem <ArrowRight size={16} /></Link></div><div className="ecosystem-orbit"><div className="orbit-device device-phone"><span>iPhone</span></div><div className="orbit-device device-watch"><span>Watch</span></div><div className="orbit-device device-mac"><span>Mac</span></div><div className="orbit-core"><Sparkles size={20} /></div></div></section>
    </main>
  )
}
