"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      image: "/images/testimonial1.png",
      content: t("testimonial1.content"),
    },
    {
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      image: "/images/testimonial2.png",
      content: t("testimonial2.content"),
    },
    {
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      image: "/images/testimonial3.png",
      content: t("testimonial3.content"),
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t("testimonials.title")}</h2>
          <div className="w-20 h-1 bg-secondary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("testimonials.description")}</p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:border-secondary transition-colors">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-secondary mb-4" />
                  <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-accent">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
