"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CountUp } from "@/components/ui/count-up"
import { Award, Clock, Heart, Star, Target, Users2, Lightbulb } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Award, value: 500, label: "Events Delivered" },
  { icon: Clock, value: 5, label: "Years Excellence" },
  { icon: Heart, value: 98, label: "Client Satisfaction" },
  { icon: Star, value: 4.9, label: "Average Rating" },
]

const values = [
  "Strategic Innovation",
  "Creative Excellence",
  "Client Partnership",
  "Precision Execution",
  "Cultural Authenticity",
  "Sustainable Practices",
]

const companyHighlights = [
  {
    icon: Target,
    title: "Mission-Driven Excellence",
    description:
      "We create transformative event experiences that connect people, inspire action, and leave lasting impressions through strategic planning and creative innovation.",
  },
  {
    icon: Users2,
    title: "Expert Team Collaboration",
    description:
      "Our multidisciplinary team combines years of industry expertise with fresh creative perspectives to deliver exceptional results for every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Leadership",
    description:
      "We continuously evolve our methodologies, embracing cutting-edge technologies and sustainable practices to set new standards in event excellence.",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content - Zigzag Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Crafting Exceptional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {" "}
                Event Experiences
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Based in the cultural heart of Yogyakarta, we are a premier event management company dedicated to
              transforming visions into extraordinary realities. Our approach combines strategic thinking with creative
              innovation to deliver events that not only meet objectives but exceed expectations.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              From intimate corporate gatherings to grand celebrations, we orchestrate every detail with precision and
              artistry. Our deep understanding of local culture, combined with international best practices, makes us
              the trusted partner for organizations and individuals seeking exceptional event experiences.
            </p>

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <div className="flex flex-wrap gap-2">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="text-sm py-1 px-3">
                      {value}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Discover Our Story
            </Button>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/api/placeholder?height=500&width=600&text=Our Team"
                alt="Our Team"
                fill
                className="object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating stats card */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-1" />
                      <div className="text-xl font-bold text-foreground">
                        <CountUp end={stat.value} duration={2000} suffix={stat.value === 500 ? "+" : ""} />
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Additional Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.slice(2).map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">
                    <CountUp end={stat.value} duration={2000} suffix={stat.value === 98 ? "%" : ""} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Company Highlights - Reverse Zigzag */}
        <div className="space-y-16">
          {companyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{highlight.title}</h3>
                  <p className="text-lg text-muted-foreground">{highlight.description}</p>
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 dark:from-primary/20 dark:via-primary/10 dark:to-secondary/20 rounded-2xl flex items-center justify-center shadow-lg">
                      <highlight.icon className="w-24 h-24 text-primary/20" />
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                      className="absolute -top-3 -right-3 w-6 h-6 bg-primary rounded-full opacity-30"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    />
                    <motion.div
                      className="absolute -bottom-3 -left-3 w-4 h-4 bg-secondary rounded-full opacity-40"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
