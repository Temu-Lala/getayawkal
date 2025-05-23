"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t("project1.title"),
      description: t("project1.description"),
      image: "/images/project1.jpg",
      tags: [
        { name: t("project1.tag1"), icon: "🎯" },
        { name: t("project1.tag2"), icon: "♿" },
        { name: t("project1.tag3"), icon: "📊" },
      ],
    },
    {
      title: t("project2.title"),
      description: t("project2.description"),
      image: "/images/project2.jpg",
      tags: [
        { name: t("project2.tag1"), icon: "✍️" },
        { name: t("project2.tag2"), icon: "🔓" },
        { name: t("project2.tag3"), icon: "🤝" },
      ],
    },
    {
      title: t("project3.title"),
      description: t("project3.description"),
      image: "/images/project3.jpg",
      tags: [
        { name: t("project3.tag1"), icon: "📋" },
        { name: t("project3.tag2"), icon: "🎓" },
        { name: t("project3.tag3"), icon: "🌱" },
      ],
    },
    {
      title: t("project4.title"),
      description: t("project4.description"),
      image: "/images/project4.jpg",
      tags: [
        { name: t("project4.tag1"), icon: "🔬" },
        { name: t("project4.tag2"), icon: "🎓" },
        { name: t("project4.tag3"), icon: "🏗️" },
      ],
    },
    {
      title: t("project5.title"),
      description: t("project5.description"),
      image: "/images/project5.jpg",
      tags: [
        { name: t("project5.tag1"), icon: "📝" },
        { name: t("project5.tag2"), icon: "📈" },
        { name: t("project5.tag3"), icon: "🎯" },
      ],
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
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <span className="text-3xl">🚀</span>
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("projects.description")}</p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full flex flex-col hover:border-primary transition-all duration-300 hover:shadow-md group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-primary">
                        <span className="mr-1">{tag.icon}</span>
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
            <span className="mr-2 group-hover:scale-110 transition-transform duration-200">📂</span>
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
