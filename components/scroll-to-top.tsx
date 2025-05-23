"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Check which section is currently in view
      const sections = ["home", "about", "services", "projects", "testimonials", "certificates", "blog", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Get button color based on active section
  const getButtonColor = () => {
    switch (activeSection) {
      case "home":
      case "projects":
      case "blog":
        return "bg-primary hover:bg-primary/90"
      case "about":
      case "testimonials":
      case "contact":
        return "bg-secondary hover:bg-secondary/90"
      case "services":
      case "certificates":
        return "bg-accent hover:bg-accent/90"
      default:
        return "bg-primary hover:bg-primary/90"
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-20 right-4 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToTop}
            className={`rounded-full w-12 h-12 flex items-center justify-center shadow-lg ${getButtonColor()} text-white`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
