"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"
import { featuredProducts } from "../data/products"
import ImageWithLoader from "./ImageWithLoader"
import "./HorizontalShowcase.css"

function HorizontalShowcase({ onProductSelect }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const showcaseRef = useRef(null)
  const { language } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prevIndex) => (prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isDragging])

  useEffect(() => {
    if (showcaseRef.current) {
      const itemWidth = showcaseRef.current.offsetWidth
      showcaseRef.current.scrollTo({
        left: activeIndex * itemWidth,
        behavior: "smooth",
      })
    }
  }, [activeIndex])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - showcaseRef.current.offsetLeft)
    setScrollLeft(showcaseRef.current.scrollLeft)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - showcaseRef.current.offsetLeft)
    setScrollLeft(showcaseRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - showcaseRef.current.offsetLeft
    const walk = (x - startX) * 2
    showcaseRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - showcaseRef.current.offsetLeft
    const walk = (x - startX) * 2
    showcaseRef.current.scrollLeft = scrollLeft - walk
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    if (showcaseRef.current) {
      const itemWidth = showcaseRef.current.offsetWidth
      const newIndex = Math.round(showcaseRef.current.scrollLeft / itemWidth)
      setActiveIndex(newIndex)
    }
  }

  const handleIndicatorClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <section className="horizontal-showcase-container">
      <div
        className="horizontal-showcase"
        ref={showcaseRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {featuredProducts.map((product, index) => (
          <div key={product.id} className="showcase-item" onClick={() => onProductSelect(product)}>
            <div className="showcase-image-container">
              <ImageWithLoader
                src={product.images[0] || "/placeholder.svg"}
                alt={language === "bn" ? product.name : product.nameEn || product.name}
                className="showcase-image"
              />
            </div>
            <div className="showcase-info">
              <h3 className="showcase-title">{language === "bn" ? product.name : product.nameEn || product.name}</h3>
              <p className="showcase-description">
                {language === "bn" ? product.shortDescription : product.shortDescriptionEn || product.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="showcase-indicators">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            className={`indicator ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`${language === "bn" ? "পণ্য দেখুন" : "View product"} ${index + 1}`}
          />
        ))}
      </div>

      <div className="showcase-controls">
        <button
          className="control-button prev"
          onClick={() => setActiveIndex((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1))}
          aria-label={language === "bn" ? "আগের পণ্য" : "Previous product"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="control-button next"
          onClick={() => setActiveIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1))}
          aria-label={language === "bn" ? "পরবর্তী পণ্য" : "Next product"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 6L15 12L9 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default HorizontalShowcase

