"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { useState, useEffect } from "react"
import { MessageCircle, Send, Linkedin } from "lucide-react"

export function FloatingSocials() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const socialLinks = [
    {
      href: "https://wa.me/+251912827261",
      icon: MessageCircle,
      label: "WhatsApp",
    },
    {
      href: "https://t.me/Yodahe7777",
      icon: Send,
      label: "Telegram",
    },
    {
      href: "http://linkedin.com/in/getayawkal-yohannes-409a612b2",
      icon: Linkedin,
      label: "LinkedIn",
    },
  ]

  return (
    <motion.div
      className="fixed right-4 bottom-4 z-50 flex flex-col gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {socialLinks.map((social, index) => (
        <motion.div
          key={social.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 ${getButtonColor()}`}
          >
            <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="sr-only">{social.label}</span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
