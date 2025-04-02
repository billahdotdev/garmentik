"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"
import { getText } from "../data/translations"
import ImageWithLoader from "./ImageWithLoader"
import "./ProductDetail.css"

function ProductDetail({ product, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)
  const detailRef = useRef(null)
  const containerRef = useRef(null)
  const { language } = useLanguage()

  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      if (detailRef.current) {
        detailRef.current.classList.add("visible")
      }
    }, 10)

    // Handle escape key to close
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    // Prevent body scroll
    document.body.style.overflow = "hidden"

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [])

  // Add a smooth scroll to top when opening product details
  useEffect(() => {
    // Scroll to top of modal when opened
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }, [product])

  const handleClose = () => {
    if (detailRef.current) {
      detailRef.current.classList.remove("visible")
      setTimeout(onClose, 300)
    } else {
      onClose()
    }
  }

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const handleMouseMove = (e) => {
    if (!isZoomed || !imageRef.current) return

    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100

    setZoomPosition({ x, y })
  }

  const handleMouseLeave = () => {
    if (isZoomed) {
      setIsZoomed(false)
    }
  }

  const handleWhatsAppClick = () => {
    const productName = language === "bn" ? product.name : product.nameEn || product.name

    const message =
      language === "bn"
        ? `হ্যালো গার্মেন্টিক পাইকারি, আমি ${productName} সম্পর্কে আগ্রহী।`
        : `Hello Garmentik Wholesale, I'm interested in the ${productName}.`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank")
  }

  const handleThumbnailKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setActiveImageIndex(index)
    }
  }

  const getColorName = (colorObj) => {
    return language === "bn" ? colorObj.nameBn : colorObj.nameEn
  }

  return (
    <div
      className="product-detail-overlay"
      ref={detailRef}
      onClick={(e) => {
        if (e.target === detailRef.current) handleClose()
      }}
    >
      <div className="product-detail-container" ref={containerRef}>
        <button
          className="close-button"
          onClick={handleClose}
          aria-label={getText("productDetail.closeButton", language)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="product-detail-content">
          <div className="product-images-section">
            <div
              className={`main-image-container ${isZoomed ? "zoomed" : ""}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={handleImageClick}
              role="button"
              tabIndex="0"
              aria-label={language === "bn" ? "ছবি বড় করে দেখুন" : "Click to zoom image"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleImageClick()
                }
              }}
            >
              <div className="image-wrapper" ref={imageRef}>
                <ImageWithLoader
                  src={product.images[activeImageIndex] || "/placeholder.svg"}
                  alt={language === "bn" ? product.name : product.nameEn || product.name}
                  className="main-image"
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : {}
                  }
                />
              </div>
              {!isZoomed && (
                <div className="zoom-hint">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{getText("productDetail.zoomHint", language)}</span>
                </div>
              )}
            </div>

            <div className="thumbnail-container">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${activeImageIndex === index ? "active" : ""}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`${language === "bn" ? "ছবি" : "Image"} ${index + 1}`}
                  aria-pressed={activeImageIndex === index}
                  onKeyDown={(e) => handleThumbnailKeyDown(e, index)}
                >
                  <ImageWithLoader
                    src={image || "/placeholder.svg"}
                    alt={`${language === "bn" ? product.name : product.nameEn || product.name} ${
                      language === "bn" ? "ভিউ" : "view"
                    } ${index + 1}`}
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info-section">
            <h2 className="product-detail-name">{language === "bn" ? product.name : product.nameEn || product.name}</h2>
            <p className="product-detail-category">{getText(`products.categories.${product.category}`, language)}</p>

            <div className="product-description">
              <p>{language === "bn" ? product.description : product.descriptionEn || product.description}</p>
            </div>

            <div className="product-specs">
              <h3>{getText("productDetail.features", language)}</h3>
              <ul>
                {(language === "bn" ? product.specifications : product.specificationsEn || product.specifications).map(
                  (spec, index) => (
                    <li key={index}>{spec}</li>
                  ),
                )}
              </ul>
            </div>

            {/* Size Display - Non-interactive */}
            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="size-options">
                <h3>{getText("productDetail.availableSizes", language)}</h3>
                <div className="size-display">
                  {product.availableSizes.map((size) => (
                    <div key={size} className="size-badge">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Color Display - Non-interactive */}
            {product.availableColors && product.availableColors.length > 0 && (
              <div className="color-options">
                <h3>{getText("productDetail.availableColors", language)}</h3>
                <div className="color-display">
                  {product.availableColors.map((color) => (
                    <div key={color.name} className="color-item">
                      <div
                        className="color-badge"
                        style={{ backgroundColor: color.hex }}
                        title={getColorName(color)}
                      ></div>
                      <span className="color-name">{getColorName(color)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="wholesale-pricing">
              <h3>{getText("productDetail.wholesalePricing", language)}</h3>
              <div className="pricing-tiers">
                {product.wholesalePrices.map((tier, index) => (
                  <div key={index} className="pricing-tier">
                    <div className="tier-range">{language === "bn" ? tier.range : tier.rangeEn || tier.range}</div>
                    <div className="tier-price">{language === "bn" ? tier.priceBn : tier.price}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-actions">
              <a href={`tel:+1234567890`} className="call-button">
                {getText("productDetail.callButton", language)}
              </a>
              <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                {getText("productDetail.whatsappButton", language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

