"use client"

import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"
import { getText } from "../data/translations"
import "./ImageWithLoader.css"

function ImageWithLoader({ src, alt, className, loading = "eager", ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)
  const { language } = useLanguage()

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setIsError(true)
  }

  return (
    <div className={`image-container ${className || ""}`}>
      {!isLoaded && !isError && (
        <div className="image-loader" aria-hidden="true">
          <div className="loader-spinner"></div>
        </div>
      )}

      {isError && (
        <div className="image-error" role="alert">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{getText("imageLoader.error", language)}</span>
        </div>
      )}

      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`image ${isLoaded ? "loaded" : ""}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        {...props}
      />
    </div>
  )
}

export default ImageWithLoader

