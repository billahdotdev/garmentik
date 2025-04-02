"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useLanguage } from "../context/LanguageContext"
import { getText } from "../data/translations"
import { products } from "../data/products"
import ImageWithLoader from "./ImageWithLoader"
import "./ProductGrid.css"

function ProductGrid({ onProductSelect }) {
  const [visibleProducts, setVisibleProducts] = useState([])
  const [currentCategory, setCurrentCategory] = useState("all")
  const [isAnimating, setIsAnimating] = useState(false)
  const gridRef = useRef(null)
  const { language } = useLanguage()

  const categories = ["all", ...new Set(products.map((p) => p.category))]

  // Memoize the filtering function
  const filterProducts = useCallback((category) => {
    return category === "all" ? products : products.filter((p) => p.category === category)
  }, [])

  useEffect(() => {
    setIsAnimating(true)

    // Filter products based on category
    const filtered = filterProducts(currentCategory)

    // Delay setting new products to allow for animation
    const timer = setTimeout(() => {
      setVisibleProducts(filtered)
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentCategory, filterProducts])

  const handleCategoryChange = (category) => {
    if (category === currentCategory) return
    setCurrentCategory(category)

    // Scroll to the grid when changing categories on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
      }, 600)
    }
  }

  return (
    <section className="product-section" id="products">
      <h2 className="section-title">{getText("products.title", language)}</h2>

      <div className="category-filter" role="tablist" aria-label={getText(`products.categories.all`, language)}>
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${currentCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
            type="button"
            role="tab"
            aria-selected={currentCategory === category}
            aria-controls={`category-${category}`}
            id={`tab-${category}`}
          >
            {getText(`products.categories.${category}`, language)}
          </button>
        ))}
      </div>

      <div
        className={`product-grid ${isAnimating ? "animating" : ""}`}
        ref={gridRef}
        role="tabpanel"
        id={`category-${currentCategory}`}
        aria-labelledby={`tab-${currentCategory}`}
      >
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => onProductSelect(product)}
              tabIndex="0"
              role="button"
              aria-label={language === "bn" ? product.name : product.nameEn || product.name}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onProductSelect(product)
                }
              }}
            >
              <div className="product-image-container">
                <ImageWithLoader
                  src={product.images[0] || "/placeholder.svg"}
                  alt={language === "bn" ? product.name : product.nameEn || product.name}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{language === "bn" ? product.name : product.nameEn || product.name}</h3>
                <p className="product-category">{getText(`products.categories.${product.category}`, language)}</p>
                <div className="product-price">
                  <span className="wholesale-label">{getText("products.wholesalePrice", language)}</span>
                  <span className="price-value">
                    {language === "bn" ? product.wholesalePrices[0].priceBn : product.wholesalePrices[0].price}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <p>{language === "bn" ? "কোন পণ্য পাওয়া যায়নি" : "No products found"}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductGrid

