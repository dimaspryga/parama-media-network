"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    slug: "tech-summit-2024",
    title: "Tech Innovation Summit 2024",
    category: "Corporate Event",
    description:
      "A transformative technology conference that brought together industry leaders, innovators, and visionaries to explore the future of digital transformation.",
    image: "/placeholder.svg?height=300&width=400",
    attendees: "500+",
    date: "March 2024",
    location: "Yogyakarta Convention Center",
    tags: ["Technology", "Innovation", "Networking"],
  },
  {
    id: 2,
    slug: "royal-wedding-2024",
    title: "Royal Javanese Wedding Ceremony",
    category: "Wedding",
    description:
      "An exquisite traditional Javanese wedding celebration that seamlessly blended cultural heritage with contemporary elegance.",
    image: "/placeholder.svg?height=300&width=400",
    attendees: "300",
    date: "February 2024",
    location: "Taman Sari Royal Heritage",
    tags: ["Traditional", "Cultural", "Elegant"],
  },
  {
    id: 3,
    slug: "corporate-annual-gala",
    title: "Excellence Awards Gala",
    category: "Corporate Event",
    description:
      "A sophisticated annual awards ceremony celebrating corporate achievements and recognizing outstanding performance.",
    image: "/placeholder.svg?height=300&width=400",
    attendees: "200",
    date: "January 2024",
    location: "The Phoenix Hotel",
    tags: ["Awards", "Corporate", "Celebration"],
  },
  {
    id: 4,
    slug: "music-festival-yogya",
    title: "Yogya Cultural Music Festival",
    category: "Entertainment",
    description:
      "A vibrant celebration of music and culture featuring local and international artists in the heart of Yogyakarta.",
    image: "/placeholder.svg?height=300&width=400",
    attendees: "2000+",
    date: "December 2023",
    location: "Alun-Alun Kidul",
    tags: ["Music", "Culture", "Festival"],
  },
  {
    id: 5,
    slug: "product-launch-event",
    title: "Innovation Product Launch",
    category: "Corporate Event",
    description: "A dynamic product launch event featuring interactive demonstrations and immersive brand experiences.",
    image: "/placeholder.svg?height=300&width=400",
    attendees: "150",
    date: "November 2023",
    location: "Jogja Expo Center",
    tags: ["Product Launch", "Innovation", "Interactive"],
  },
  {
    id: 6,
    slug: "charity-fundraising-dinner",
    title: "Hope Foundation Fundraiser",
    category: "Social Event",
    description:
      "A meaningful charity fundraising dinner supporting educational initiatives and community development programs.",
    image: "/placeholder.svg?height=300&width=400",
    attendees: "250",
    date: "October 2023",
    location: "Hyatt Regency Yogyakarta",
    tags: ["Charity", "Community", "Impact"],
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Project Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our most impactful events that demonstrate our commitment to excellence, innovation, and creating
            extraordinary experiences that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {project.attendees} attendees
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Explore All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
