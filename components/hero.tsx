"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-medium text-secondary">{t("hero.greeting")}</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t("hero.name")}</h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">{t("hero.title")}</h2>
            <p className="text-muted-foreground max-w-md">{t("hero.description")}</p>
            <div className="flex gap-4 mt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                <a href="#contact">{t("hero.cta")}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10"
                asChild
              >
                <a href="#projects">{t("hero.viewProjects")}</a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-secondary">
              <Image src="/images/profile.png" alt="Profile" fill className="object-cover" priority />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  )
}
