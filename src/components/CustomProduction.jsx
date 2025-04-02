"use client"

import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { getText } from "../data/translations"
import "./CustomProduction.css"

function CustomProduction() {
  const [activeTab, setActiveTab] = useState(0)
  const { language } = useLanguage()

  const tabs = [
    {
      id: "customDesign",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 19L19 12L22 15L15 22L12 19Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 13L16.5 5.5L2 2L5.5 16.5L13 18L18 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 2L9.586 9.586"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "privateLabeling",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 17V17.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 14V14.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "bulkProduction",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 16V8H8V16H16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 16V8H16V16H21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16V8H3V16H8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3 16V21H21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 8V3H21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className="custom-production-section" id="custom">
      <div className="custom-production-container">
        <div className="section-header">
          <h2 className="section-title">{getText("customProduction.title", language)}</h2>
          <p className="section-subtitle">{getText("customProduction.subtitle", language)}</p>
        </div>

        <div className="custom-tabs">
          <div className="tab-headers">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`tab-header ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-title">{getText(`customProduction.tabs.${tab.id}.title`, language)}</span>
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="tab-content-inner">
              <h3>{getText(`customProduction.tabs.${tabs[activeTab].id}.title`, language)}</h3>
              <p>{getText(`customProduction.tabs.${tabs[activeTab].id}.content`, language)}</p>
            </div>
          </div>
        </div>

        <div className="custom-production-cta">
          <h3>{getText("customProduction.cta.title", language)}</h3>
          <p>{getText("customProduction.cta.description", language)}</p>
          <div className="cta-buttons">
            <a href="tel:+1234567890" className="call-button">
              {getText("customProduction.cta.callButton", language)}
            </a>
            <a
              href={`https://wa.me/1234567890?text=${encodeURIComponent(
                language === "bn"
                  ? "হ্যালো গার্মেন্টিক পাইকারি, আমি কাস্টম উৎপাদনে আগ্রহী।"
                  : "Hello Garmentik Wholesale, I'm interested in custom production.",
              )}`}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {getText("customProduction.cta.whatsappButton", language)}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomProduction

