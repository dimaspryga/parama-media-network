"use client"

import { motion } from "framer-motion"
import { Calendar, Users, Sparkles, Camera, Music, Utensils } from "lucide-react"

const services = [
  {
    icon: Calendar,
    title: "Corporate Event Management",
    description:
      "Strategic corporate events that drive business objectives, from conferences and product launches to team building and executive retreats.",
    features: ["Strategic Planning", "Stakeholder Management", "Brand Integration", "ROI Measurement"],
  },
  {
    icon: Users,
    title: "Wedding & Celebration Planning",
    description:
      "Comprehensive wedding and celebration services that honor traditions while creating contemporary, personalized experiences.",
    features: ["Cultural Integration", "Vendor Curation", "Timeline Coordination", "Guest Experience"],
  },
  {
    icon: Sparkles,
    title: "Experiential Marketing Events",
    description:
      "Immersive brand experiences and marketing activations that engage audiences and create meaningful connections.",
    features: ["Brand Storytelling", "Interactive Experiences", "Audience Engagement", "Impact Analytics"],
  },
  {
    icon: Camera,
    title: "Content & Documentation",
    description:
      "Professional event documentation and content creation services that capture and amplify your event's impact.",
    features: ["Professional Photography", "Video Production", "Live Streaming", "Social Media Content"],
  },
  {
    icon: Music,
    title: "Technical Production",
    description:
      "Complete technical production services including sound, lighting, staging, and multimedia integration.",
    features: ["Audio Visual Systems", "Stage Design", "Lighting Production", "Technical Direction"],
  },
  {
    icon: Utensils,
    title: "Hospitality & Catering",
    description:
      "Curated culinary experiences and hospitality services that reflect your event's character and guest preferences.",
    features: ["Menu Curation", "Dietary Accommodations", "Service Excellence", "Cultural Authenticity"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Event Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From strategic planning to flawless execution, we provide end-to-end event management services that
            transform your vision into extraordinary experiences.
          </p>
        </motion.div>

        {/* Zigzag Layout for Services */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-blue-900 dark:via-blue-800 dark:to-gray-800 rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-24 h-24 text-blue-600/30 dark:text-blue-400/30" />
                    </div>

                    {/* Floating elements for visual interest */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-30"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
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
