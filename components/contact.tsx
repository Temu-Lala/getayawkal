"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: "📧",
      title: t("contact.email.label"),
      value: "gechjone36@gmail.com",
      link: "mailto:gechjone36@gmail.com",
    },
    {
      icon: "📱",
      title: t("contact.phone.label"),
      value: "+251-9 12827261",
      link: "tel:+251912827261",
    },
    {
      icon: "📍",
      title: t("contact.location.label"),
      value: "Summit condominium / Addis Ababa, Ethiopia",
      link: "https://maps.google.com/?q=Summit+condominium,Addis+Ababa,Ethiopia",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <span className="text-3xl">💬</span>
            {t("contact.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("contact.description")}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <motion.div
            className="grid gap-4 md:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:border-primary transition-all duration-300 hover:shadow-md group">
                <CardContent className="flex items-center p-6">
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </span>
                  <div>
                    <h3 className="font-medium">{info.title}</h3>
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            className="md:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="hover:border-primary transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                        <span className="text-lg">👤</span>
                        {t("contact.name")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <span className="text-lg">📧</span>
                        {t("contact.email")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      <span className="text-lg">💭</span>
                      {t("contact.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="focus-visible:ring-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform duration-200">🚀</span>
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
