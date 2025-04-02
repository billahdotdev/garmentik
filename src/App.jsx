"use client"

import { useState, useEffect, lazy, Suspense } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { LanguageProvider } from "./context/LanguageContext"
import Header from "./components/Header"
import HorizontalShowcase from "./components/HorizontalShowcase"
import ProductGrid from "./components/ProductGrid"
import CustomProduction from "./components/CustomProduction"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import LanguageSwitcher from "./components/LanguageSwitcher"
import "./App.css"

// Lazy load the ProductDetail component
const ProductDetail = lazy(() => import("./components/ProductDetail"))

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isDetailVisible, setIsDetailVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    if (isDetailVisible) {
      document.body.style.overflow = "hidden"
      setScrollPosition(window.pageYOffset)
    } else {
      document.body.style.overflow = "unset"
      window.scrollTo(0, scrollPosition)
    }
  }, [isDetailVisible, scrollPosition])

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setIsDetailVisible(true)
  }

  const closeProductDetail = () => {
    setIsDetailVisible(false)
  }

  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <LanguageSwitcher />
          <main className="main-content">
            <HorizontalShowcase onProductSelect={handleProductSelect} />
            <ProductGrid onProductSelect={handleProductSelect} />
            <CustomProduction />
            <AboutUs />
            <Footer />
          </main>

          {isDetailVisible && selectedProduct && (
            <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
              <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
            </Suspense>
          )}

          <BackToTop />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App

