"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold">{t("hero.name")}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link
                href="http://linkedin.com/in/getayawkal-yohannes-409a612b2"
                className="text-muted-foreground hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://t.me/Yodahe7777"
                className="text-muted-foreground hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 8L5 12.5 9.5 14M18 8l-4 10-4.5-3.5M18 8L9.5 14" />
                </svg>
                <span className="sr-only">Telegram</span>
              </Link>
              <Link
                href="https://wa.me/+251912827261"
                className="text-muted-foreground hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold">{t("footer.links")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("service1.title")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("service2.title")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("service3.title")}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  {t("service4.title")}
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold">{t("footer.newsletter")}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.subscribe")}</p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                {t("footer.subscribeButton")}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t("hero.name")}. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
