import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import BagPage from './pages/BagPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import StorePage from './pages/StorePage'
import SupportPage from './pages/SupportPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/bag" element={<BagPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
