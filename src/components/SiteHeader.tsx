import { Apple, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Store', to: '/store' },
  { label: 'Mac', to: '/store?category=Mac' },
  { label: 'iPhone', to: '/store?category=iPhone' },
  { label: 'iPad', to: '/store?category=iPad' },
  { label: 'Watch', to: '/store?category=Watch' },
  { label: 'Support', to: '/support' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand-mark" to="/" aria-label="Apple home" onClick={() => setMenuOpen(false)}>
          <Apple size={20} fill="currentColor" strokeWidth={1.8} />
        </Link>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-button" type="button" aria-label="Search">
            <Search size={18} strokeWidth={1.8} />
          </button>
          <Link className="icon-button" to="/bag" aria-label="Shopping bag">
            <ShoppingBag size={18} strokeWidth={1.8} />
          </Link>
          <button className="icon-button mobile-menu-button" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
