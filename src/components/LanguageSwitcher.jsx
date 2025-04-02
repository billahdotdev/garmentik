"use client"

import { useLanguage } from "../context/LanguageContext"
import { getText } from "../data/translations"
import "./LanguageSwitcher.css"

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={getText("languageSwitcher", language)}
      title={getText("languageSwitcher", language)}
    >
      {getText("languageSwitcher", language)}
    </button>
  )
}

export default LanguageSwitcher

