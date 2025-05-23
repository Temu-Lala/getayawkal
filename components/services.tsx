"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      title: t("service1.title"),
      description: t("service1.description"),
      icon: "📅",
    },
    {
      title: t("service2.title"),
      description: t("service2.description"),
      icon: "✍️",
    },
    {
      title: t("service3.title"),
      description: t("service3.description"),
      icon: "🔬",
    },
    {
      title: t("service4.title"),
      description: t("service4.description"),
      icon: "📈",
    },
    {
      title: t("service5.title"),
      description: t("service5.description"),
      icon: "🤝",
    },
    {
      title: t("service6.title"),
      description: t("service6.description"),
      icon: "⚙️",
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
    <section id="services" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <span className="text-3xl">🛠️</span>
            {t("services.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("services.description")}</p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-md group">
                <CardContent className="p-6 flex flex-col h-full items-center text-center">
                  <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
