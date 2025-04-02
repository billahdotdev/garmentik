"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../context/LanguageContext"
import { getText } from "../data/translations"
import "./Header.css"
import logoSvg from "../assets/g-logo.svg"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "unset" : "hidden"
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <img
            src={logoSvg || "/placeholder.svg"}
            alt={`${getText("header.logo", language)} ${getText("header.logo", language)}`}
            className="logo-image"
          />
          <span className="logo-text">{getText("header.logo", language)}</span>
          <span className="logo-separator">|</span>
          <span className="logo-wholesale">{getText("header.wholesale", language)}</span>
          <a href="tel:+8801711992558" className="header-phone">
            {getText("header.phone", language)}
          </a>
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={getText("header.menu", language)}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>

      <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-content">
          <ul className="nav-links">
            <li>
              <a href="#products" onClick={toggleMenu}>
                {getText("header.nav.products", language)}
              </a>
            </li>
            <li>
              <a href="#custom" onClick={toggleMenu}>
                {getText("header.nav.custom", language)}
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                {getText("header.nav.about", language)}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                {getText("header.nav.contact", language)}
              </a>
            </li>
          </ul>

          <div className="contact-info">
            <a href="tel:+8801711992558" className="phone-link">
              {getText("header.phone", language)}
            </a>
            <a
              href={`https://wa.me/+8801711992558?text=${encodeURIComponent(
                language === "bn"
                  ? "হ্যালো গার্মেন্টিক পাইকারি, আমি আপনার পণ্য সম্পর্কে আগ্রহী।"
                  : "Hello Garmentik Wholesale, I'm interested in your products.",
              )}`}
              className="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getText("header.whatsappInquiry", language)}
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

