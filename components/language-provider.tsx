"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { en } from "@/translations/en"
import { am } from "@/translations/am"

type Language = "en" | "am"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Create translations object with imported translations
const translations = { en, am }

const defaultLanguage: Language = "en"

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)
  const [isClient, setIsClient] = useState(false)

  // Only run on client side
  useEffect(() => {
    setIsClient(true)
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "am")) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  const t = (key: string): string => {
    try {
      // If we're on the server or haven't initialized yet, return the key or English translation
      if (!isClient) {
        return translations.en[key as keyof typeof translations.en] || key
      }

      // Get the translation from the current language
      return translations[language][key as keyof (typeof translations)[typeof language]] || key
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error)
      return key
    }
  }

  const handleSetLanguage = (newLanguage: Language) => {
    try {
      setLanguage(newLanguage)
      if (isClient) {
        localStorage.setItem("language", newLanguage)
      }
    } catch (error) {
      console.error("Error setting language:", error)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
