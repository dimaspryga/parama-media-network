"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/hero-section";
import HeroSkeleton from "@/components/sections/hero-skeleton";
import BrandMarquee from "@/components/sections/brand-marquee";
import ServicesSection from "@/components/sections/services-section";
import ServicesSkeleton from "@/components/sections/services-skeleton";
import AboutSection from "@/components/sections/about-section";
import FeaturedProjectsSection from "@/components/sections/featured-projects-section";
import GallerySection from "@/components/sections/gallery-section";
import GallerySkeleton from "@/components/sections/gallery-skeleton";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Files, User, Users } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/ui/count-up";

const servicePackages = [
  {
    name: "Event Management",
    description:
      "Strategic planning and execution of events that align with your brand's message and objectives. From brand launches to IPOs and AGMs, we deliver comprehensive solutions with full documentation and media distribution. Well-executed events generate 87% higher brand recall and extend reach by 300% through digital channels.",
    features: [
      "ROI-focused development strategy",
      "Business process optimization",
      "Performance tracking and analytics",
      "Scalable architecture for growth",
      "Cost-benefit analysis for every feature",
    ],
    popular: false,
  },
  {
    name: "Media Relations",
    description:
      "Transform company announcements into powerful brand-building opportunities. Our strategic press releases leverage established national media networks to build real authority, achieving 3x higher pickup rates and reaching 2.5 million readers on average. Every release is professionally structured and precisely targeted to your brand character.",
    features: [
      "ROI-focused development strategy",
      "Business process optimization",
      "Performance tracking and analytics",
      "Scalable architecture for growth",
      "Cost-benefit analysis for every feature",
    ],
    popular: false,
  },
  {
    name: "Communication Training",
    description:
      "Comprehensive programs that equip individuals and teams with skills for effective, persuasive, and professional communication. Participants show 65% improvement in presentation confidence and teams report 48% better internal communication effectiveness.",
    features: [
      "ROI-focused development strategy",
      "Business process optimization",
      "Performance tracking and analytics",
      "Scalable architecture for growth",
      "Cost-benefit analysis for every feature",
    ],
    popular: false,
  },
  {
    name: "Website & Software Development",
    description:
      "Custom websites and software that drive real business results. Our responsive, high-performance solutions boost user engagement by 74% and reduce system failures by 32%. From concept to launch, we build digital platforms that your customers love and your business relies on.",
    features: [
      "ROI-focused development strategy",
      "Business process optimization",
      "Performance tracking and analytics",
      "Scalable architecture for growth",
      "Cost-benefit analysis for every feature",
    ],
    popular: false,
  },
  {
    name: "Digital Content Creation",
    description:
      "Creative content production including articles, videos, infographics, and SEO-optimized materials that enhance online visibility. Video content generates 1200% more shares while SEO-optimized articles increase organic search visibility by 434%.",
    features: [
      "ROI-focused development strategy",
      "Business process optimization",
      "Performance tracking and analytics",
      "Scalable architecture for growth",
      "Cost-benefit analysis for every feature",
    ],
    popular: false,
  },
  {
    name: "Social Media Strategy",
    description:
      "Structured social media activation covering content planning, visual production, account management, and targeted advertising. Strategic management increases brand awareness by 88% and delivers 5.2x higher ROI than traditional advertising.",
    features: [
      "ROI-focused development strategy",
      "Business process optimization",
      "Performance tracking and analytics",
      "Scalable architecture for growth",
      "Cost-benefit analysis for every feature",
    ],
    popular: false,
  },
];

const stats = [
  { icon: Files, value: 200, label: "Projects Executed" },
  { icon: Users, value: 50, label: "Clients" },
  { icon: User, value: 98, label: "Client Retention" },
];

const values = [
  "Strategic Innovation",
  "Creative Excellence",
  "Client Partnership",
  "Precision Execution",
  "Cultural Authenticity",
  "Sustainable Practices",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, Tech Innovations",
    content:
      "eojogja.id transformed our annual conference into an unforgettable experience. Their strategic approach and flawless execution exceeded our expectations.",
    rating: 5,
    image: "/api/placeholder?height=80&width=80&text=SJ",
  },
  {
    name: "Michael Chen",
    position: "Wedding Couple",
    content:
      "Our wedding was absolutely perfect thanks to the amazing team at eojogja.id. They understood our vision and brought it to life beautifully.",
    rating: 5,
    image: "/api/placeholder?height=80&width=80&text=MC",
  },
  {
    name: "Amanda Rodriguez",
    position: "Marketing Director",
    content:
      "Professional, innovative, and reliable. eojogja.id has been our trusted event partner for multiple successful campaigns.",
    rating: 5,
    image: "/api/placeholder?height=80&width=80&text=AR",
  },
];

const whyChooseUs = [
  {
    title: "Reputation-First Approach",
    description:
      "Every strategy is designed with your long-term reputation in mind, ensuring brand protection while pursuing growth opportunities.",
  },
  {
    title: "Measurable ROI Framework",
    description:
      "Proprietary measurement tools and KPIs that track communication impact on brand awareness, engagement, and business results.",
  },
  {
    title: "360-Degree Integration",
    description:
      "Seamless coordination across PR, digital, creative, and media to amplify your message across all relevant touchpoints.",
  },
  {
    title: "Crisis-Ready Team",
    description:
      "24/7 crisis communication response team with proven track record in reputation recovery and damage control.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Advanced analytics and social listening tools that inform strategy and optimize campaign performance in real-time.",
  },
  {
    title: "Industry Expertise",
    description:
      "Specialized knowledge across multiple sectors with dedicated teams for different industry requirements.",
  },
];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="">
        {isLoading ? <HeroSkeleton /> : <HeroSection />}

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
            {/* Left Section: Title and Description */}
            <div className="md:w-1/3 md:sticky md:top-8 md:self-start h-fit">
              <motion.div
                className="text-center md:text-left mb-8 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-6xl text-blue-900 md:text-7xl font-bold text-foreground mb-4">
                  Our Services
                </h2>
                <p className="text-2xl text-muted-foreground max-w-3xl md:max-w-none mx-auto md:mx-0 font-inter">
                  Built on 10+ years of proven experience, we deliver services
                  that strengthen reputations and drive measurable business
                  outcomes.
                </p>
              </motion.div>
            </div>

            {/* Right Section: Service Cards - REVISED FOR 2 COLUMNS */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`h-full relative ${
                      pkg.popular ? "border-secondary border-2" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-3xl font-bold">
                        {pkg.name}
                      </CardTitle>
                      <p className="text-muted-foreground text-left font-inter">
                        {pkg.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {/* <Button
                        className="w-full"
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        Choose {pkg.name}
                      </Button> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* {isLoading ? <ServicesSkeleton /> : <ServicesSection />} */}
        {/* <AboutSection /> */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main About Content - Zigzag Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
                    src="./assets/value-bg-1.webp"
                    alt="Our Team"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Additional Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {stats.slice(0).map((stat, index) => (
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
                        <CountUp
                          end={stat.value}
                          duration={2000}
                          suffix={stat.value === 98 ? "%" : "+"}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Beyond Communication,
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {" "}
                    Towards Impact.
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground mb-6">
                  When 73% of corporate events miss their mark, the real cost is
                  lost trust and reputation. Parama is the solution, bringing
                  clarity and impact through strategic communication.
                </p>

                <p className="text-lg text-muted-foreground mb-8">
                  From intimate corporate gatherings to grand celebrations, we
                  orchestrate every detail with precision and artistry. Our deep
                  understanding of local culture, combined with international
                  best practices, makes us the trusted partner for organizations
                  and individuals seeking exceptional event experiences.
                </p>

                {/* Values */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Our Core Values
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm py-1 px-3"
                        >
                          {value}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Discover Our Story
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We Are Your Valuable Partner for exceptional event experiences
                through strategic planning, creative innovation, and meticulous
                execution that drives meaningful results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <BrandMarquee />

        {/* Testimonials Section */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped organizations and individuals create
                memorable experiences that exceed expectations and deliver
                lasting impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-blue-600 mb-4" />
                      <p className="text-muted-foreground mb-6 italic">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center space-x-4">
                        <Image
                          src={
                            testimonial.image ||
                            "/api/placeholder?height=80&width=80&text=User"
                          }
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex mt-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {isLoading ? <GallerySkeleton /> : <GallerySection />}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Let's collaborate to transform your vision into a remarkable
                event experience. Contact us today to begin your journey toward
                an unforgettable celebration.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
