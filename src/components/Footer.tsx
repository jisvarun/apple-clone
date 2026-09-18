import { Apple, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Apple size={25} fill="currentColor" strokeWidth={1.8} />
          <p>Designed for the curious.<br />Made for the everyday.</p>
        </div>
        <div className="footer-links">
          <div><span>Explore</span><Link to="/store">Store</Link><Link to="/store?category=Mac">Mac</Link><Link to="/store?category=iPhone">iPhone</Link><Link to="/support">Support</Link></div>
          <div><span>About</span><a href="#accessibility">Accessibility</a><a href="#environment">Environment</a><a href="#privacy">Privacy</a><a href="#careers">Careers <ArrowUpRight size={13} /></a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>Copyright © 2025 Apple Clone</span><span>Made with intention in Cupertino, CA</span></div>
    </footer>
  )
}
