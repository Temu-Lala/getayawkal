"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, Globe } from "lucide-react"

export function Header() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      // Set scrolled state for shadow effect
      setIsScrolled(window.scrollY > 50)

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

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercentage = (scrollTop / scrollHeight) * 100

      const progressBar = document.querySelector(".scroll-progress") as HTMLElement
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`
      }
    }

    window.addEventListener("scroll", handleScrollProgress)
    return () => window.removeEventListener("scroll", handleScrollProgress)
  }, [])

  if (!isMounted) {
    return null
  }

  // Default navbar color
  const defaultColor = "bg-primary" // Orange from your theme

  // Get section-specific color
  const getSectionColor = () => {
    if (!isScrolled) return defaultColor

    switch (activeSection) {
      case "home":
        return defaultColor
      case "about":
        return "bg-secondary" // Teal from your theme
      case "services":
        return "bg-accent" // Dark blue from your theme
      case "projects":
        return "bg-primary" // Orange from your theme
      case "testimonials":
        return "bg-secondary" // Teal from your theme
      case "certificates":
        return "bg-accent" // Dark blue from your theme
      case "blog":
        return "bg-primary" // Orange from your theme
      case "contact":
        return "bg-secondary" // Teal from your theme
      default:
        return defaultColor
    }
  }

  const navItems = [
    { href: "#home", label: t("nav.home"), id: "home" },
    { href: "#about", label: t("nav.about"), id: "about" },
    { href: "#services", label: t("nav.services"), id: "services" },
    { href: "#projects", label: t("nav.projects"), id: "projects" },
    { href: "#testimonials", label: t("nav.testimonials"), id: "testimonials" },
    { href: "#certificates", label: t("nav.certificates"), id: "certificates" },
    { href: "#blog", label: t("nav.blog"), id: "blog" },
    { href: "#contact", label: t("nav.contact"), id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${getSectionColor()} ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{ opacity: 1 }}
    >
      <div className="relative w-full h-1">
        <div className="scroll-progress absolute top-0 left-0 h-1 bg-white/80" style={{ width: "0%" }} />
      </div>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-white hover:opacity-80 transition-opacity">
          Portfolio
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium text-white transition-colors relative group ${
                activeSection === item.id ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 ${
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                🇺🇸 English {language === "en" && "✓"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("am")}>🇪🇹 አማርኛ {language === "am" && "✓"}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-white hover:bg-white/10"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className={`${getSectionColor()} text-white`} style={{ opacity: 1 }}>
              <div className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-opacity relative ${
                      activeSection === item.id
                        ? "text-white border-b border-white pb-1"
                        : "text-white/80 hover:opacity-80"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
