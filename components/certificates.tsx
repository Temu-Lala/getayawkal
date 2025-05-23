"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { PDFViewer } from "@/components/pdf-viewer"
import { FileText } from "lucide-react"

export function Certificates() {
  const { t } = useLanguage()
  const [selectedCertificate, setSelectedCertificate] = useState<{
    title: string
    issuer: string
    date: string
    pdf: string
  } | null>(null)

  const certificates = [
    {
      title: t("cert1.title"),
      issuer: t("cert1.issuer"),
      date: t("cert1.date"),
      image: "/images/cart1.jpg",
      pdf: "/certificates/Certificate.pdf",
    },
    {
      title: t("cert2.title"),
      issuer: t("cert2.issuer"),
      date: t("cert2.date"),
      image: "/images/cart2.jpg",
      pdf: "/certificates/Certificate2.pdf",
    },
    {
      title: t("cert3.title"),
      issuer: t("cert3.issuer"),
      date: t("cert3.date"),
      image: "/images/cert3.jpg",
      pdf: "/certificates/Certificate3.pdf",
    },
    {
      title: t("cert4.title"),
      issuer: t("cert4.issuer"),
      date: t("cert4.date"),
      image: "/images/cert4.jpg",
      pdf: "/certificates/Certificate4.pdf",
    },
    {
      title: t("cert5.title"),
      issuer: t("cert5.issuer"),
      date: t("cert5.date"),
      image: "/images/cert5.jpg",
      pdf: "/certificates/Certificate5.pdf",
    },
    {
      title: t("cert6.title"),
      issuer: t("cert6.issuer"),
      date: t("cert6.date"),
      image: "/images/cert5.jpg",
      pdf: "/certificates/Certificate6.pdf",
    },
    {
      title: t("cert7.title"),
      issuer: t("cert7.issuer"),
      date: t("cert7.date"),
      image: "/images/cert4.jpg",
      pdf: "/certificates/Certificate7.pdf",
    },
    {
      title: t("cert8.title"),
      issuer: t("cert8.issuer"),
      date: t("cert8.date"),
      image: "/images/project5.jpg",
      pdf: "/certificates/Certificate8.pdf",
    },
    {
      title: t("cert9.title"),
      issuer: t("cert9.issuer"),
      date: t("cert9.date"),
      image: "/images/project1.jpg",
      pdf: "/certificates/Certificate9.pdf",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  }

  const handleOpenPDF = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate({
      title: certificate.title,
      issuer: certificate.issuer,
      date: certificate.date,
      pdf: certificate.pdf,
    })
  }

  const handleClosePDF = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t("certificates.title")}</h2>
          <div className="w-20 h-1 bg-secondary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("certificates.description")}</p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              variants={item}
              className="cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleOpenPDF(certificate)}
            >
              <Card className="overflow-hidden hover:border-secondary transition-colors h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 dark:bg-black/90 p-2 rounded-full">
                      <FileText className="h-8 w-8 text-secondary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium">{certificate.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {certificate.issuer} • {certificate.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {selectedCertificate && (
          <PDFViewer
            pdfUrl={selectedCertificate.pdf}
            title={selectedCertificate.title}
            issuer={selectedCertificate.issuer}
            date={selectedCertificate.date}
            onClose={handleClosePDF}
          />
        )}
      </div>
    </section>
  )
}
