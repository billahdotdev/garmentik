"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create the language context
export const LanguageContext = createContext()

// Language provider component
export function LanguageProvider({ children }) {
  // Initialize language from localStorage or default to Bangla
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("language")
    return savedLanguage || "bn" // 'bn' for Bangla, 'en' for English
  })

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
    // Update the html lang attribute
    document.documentElement.lang = language
  }, [language])

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(language === "bn" ? "en" : "bn")
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

