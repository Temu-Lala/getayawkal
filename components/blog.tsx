"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export function Blog() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      title: t("blog1.title"),
      excerpt: t("blog1.excerpt"),
      image: "/images/blog1.png",
      date: t("blog1.date"),
      readTime: t("blog1.readTime"),
      url: "#",
    },
    {
      title: t("blog2.title"),
      excerpt: t("blog2.excerpt"),
      image: "/images/blog2.png",
      date: t("blog2.date"),
      readTime: t("blog2.readTime"),
      url: "#",
    },
    {
      title: t("blog3.title"),
      excerpt: t("blog3.excerpt"),
      image: "/images/blog3.png",
      date: t("blog3.date"),
      readTime: t("blog3.readTime"),
      url: "#",
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
    <section id="blog" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">{t("blog.title")}</h2>
          <div className="w-20 h-1 bg-secondary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("blog.description")}</p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden hover:border-secondary transition-colors">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-accent" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-accent" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="px-0 text-secondary hover:text-secondary/80" asChild>
                    <Link href={post.url}>{t("blog.readMore")} →</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
            {t("blog.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  )
}
