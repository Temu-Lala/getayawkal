"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Motto() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16 bg-accent/5">
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-none bg-transparent shadow-none">
            <CardContent className="p-0 flex flex-col items-center text-center">
              <Quote className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("motto.title")}</h2>
              <p className="text-xl md:text-2xl italic text-muted-foreground mb-6">"{t("motto.content")}"</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
