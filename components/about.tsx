"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const { t } = useLanguage()

  const skills = [
    {
      icon: "📋",
      name: t("skills.planning"),
    },
    {
      icon: "✍️",
      name: t("skills.proposal"),
    },
    {
      icon: "🔍",
      name: t("skills.research"),
    },
    {
      icon: "📊",
      name: t("skills.reports"),
    },
    {
      icon: "🤝",
      name: t("skills.conflict"),
    },
    {
      icon: "🎯",
      name: t("skills.coordination"),
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <span className="text-3xl">👨‍💼</span>
            {t("about.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="max-w-2xl text-muted-foreground">{t("about.description")}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-xl">💼</span>
              {t("about.experience")}
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 space-y-2 relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
                <div className="font-medium flex items-center gap-2">
                  <span className="text-lg">🏢</span>
                  {t("about.job1.title")}
                </div>
                <div className="text-sm text-muted-foreground">{t("about.job1.company")}</div>
                <p className="text-sm text-muted-foreground">{t("about.job1.description")}</p>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-2 relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
                <div className="font-medium flex items-center gap-2">
                  <span className="text-lg">🤲</span>
                  {t("about.job2.title")}
                </div>
                <div className="text-sm text-muted-foreground">{t("about.job2.company")}</div>
                <p className="text-sm text-muted-foreground">{t("about.job2.description")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-xl">🎓</span>
              {t("about.education")}
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 space-y-2 relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
                <div className="font-medium flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  {t("about.edu1.title")}
                </div>
                <div className="text-sm text-muted-foreground">{t("about.edu1.school")}</div>
                <p className="text-sm text-muted-foreground">{t("about.edu1.description")}</p>
              </div>
              <div className="border-l-2 border-primary pl-4 space-y-2 relative">
                <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full"></div>
                <div className="font-medium flex items-center gap-2">
                  <span className="text-lg">📈</span>
                  {t("about.edu2.title")}
                </div>
                <div className="text-sm text-muted-foreground">{t("about.edu2.school")}</div>
                <p className="text-sm text-muted-foreground">{t("about.edu2.description")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-xl">⚡</span>
              {t("about.skills")}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="hover:shadow-md transition-all duration-300 hover:border-primary">
                    <CardContent className="flex items-center p-4 gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h4 className="font-medium text-sm">{skill.name}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="space-y-4 md:col-span-2 lg:col-span-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-md transition-all duration-300 border-l-2 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-xl">🔮</span>
                  {t("vision.title")}
                </h3>
                <p className="text-muted-foreground">{t("vision.description")}</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-all duration-300 border-l-2 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  {t("mission.title")}
                </h3>
                <p className="text-muted-foreground">{t("mission.description")}</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
