"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=400&width=600&text=Corporate Conference",
    title: "Tech Innovation Summit",
    category: "Corporate Event",
    date: "March 2024",
    location: "Yogyakarta Convention Center",
    description:
      "International technology conference bringing together industry leaders and innovators",
    height: 300,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=500&width=600&text=Wedding Ceremony",
    title: "Royal Javanese Wedding",
    category: "Wedding",
    date: "February 2024",
    location: "Taman Sari Heritage",
    description: "Traditional Javanese wedding ceremony with modern elegance",
    height: 400,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=350&width=600&text=Product Launch",
    title: "Product Launch Spectacular",
    category: "Corporate Event",
    date: "January 2024",
    location: "Jogja Expo Center",
    description: "Innovative product launch with interactive demonstrations",
    height: 350,
  },
  {
    id: 4,
    image: "/placeholder.svg?height=450&width=600&text=Gala Dinner",
    title: "Annual Excellence Gala",
    category: "Corporate Event",
    date: "December 2023",
    location: "The Phoenix Hotel",
    description: "Sophisticated annual gala celebrating corporate achievements",
    height: 450,
  },
  {
    id: 5,
    image: "/placeholder.svg?height=320&width=600&text=Music Festival",
    title: "Yogya Music Festival",
    category: "Entertainment",
    date: "November 2023",
    location: "Alun-Alun Kidul",
    description:
      "Vibrant music festival featuring local and international artists",
    height: 320,
  },
  {
    id: 6,
    image: "/placeholder.svg?height=380&width=600&text=Charity Event",
    title: "Hope Foundation Fundraiser",
    category: "Social Event",
    date: "October 2023",
    location: "Hyatt Regency",
    description: "Heartwarming charity event supporting education initiatives",
    height: 380,
  },
  {
    id: 7,
    image: "/placeholder.svg?height=420&width=600&text=Team Building",
    title: "Corporate Leadership Retreat",
    category: "Corporate Event",
    date: "September 2023",
    location: "Borobudur Resort",
    description:
      "Transformative team building and leadership development program",
    height: 420,
  },
  {
    id: 8,
    image: "/placeholder.svg?height=360&width=600&text=Birthday Party",
    title: "Milestone Birthday Celebration",
    category: "Private Party",
    date: "August 2023",
    location: "Private Villa",
    description:
      "Elegant milestone birthday celebration with personalized touches",
    height: 360,
  },
];

const categories = [
  "All",
  // "Corporate Event",
  // "Wedding",
  // "Entertainment",
  // "Social Event",
  // "Private Party",
];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        (selectedImage - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container untuk Title dan Description dengan Background Image */}
        <motion.div
          className="relative text-center mb-16 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Image dan Overlay */}
          <div className="absolute inset-0 bg-[url('https://parama.co.id/wp-content/uploads/2025/02/bg-journey-3.webp')] bg-cover bg-center">
            {/* Opsional: Tambahkan overlay gelap untuk membuat teks lebih mudah dibaca */}
            <div className="absolute inset-0 bg-blue-900/50" />
          </div>
          <div className="relative px-8 py-12 text-white">
            {" "}
            {/* Tambahkan text-white agar teks terlihat jelas di atas background gelap */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-4">
              Welcome to the work that defines us!
            </h2>
            {/* <p className="text-xl max-w-3xl mx-auto">
              Discover the artistry and precision behind our most memorable
              events. Each project represents our commitment to excellence and
              our passion for creating extraordinary experiences.
            </p> */}
          </div>
        </motion.div>

        {/* Category Filter (Tetap sama) */}
        {/* <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div> */}

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{
                  opacity: 0,
                  y: -50,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                  filter: "blur(10px)",
                  scale: 0.9,
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94], // power3.out equivalent
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="break-inside-avoid mb-6"
              >
                <Card className="overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500">
                  <div
                    className="relative overflow-hidden"
                    style={{ height: `${item.height}px` }}
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onClick={() => openLightbox(index)} // Ini akan memicu lightbox
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white shadow-lg">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-black hover:bg-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                      >
                        View Details
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-2">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Component (Sudah ada, hanya pastikan state dan fungsi terhubung) */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <Image
                    src={
                      filteredItems[selectedImage].image || "/placeholder.svg"
                    }
                    alt={filteredItems[selectedImage].title}
                    width={800}
                    height={600}
                    className="object-contain max-h-[80vh] rounded-lg"
                  />

                  {/* Close Button */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white"
                    onClick={closeLightbox}
                  >
                    <X className="w-4 h-4" />
                  </Button>

                  {/* Navigation Buttons */}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Image Info */}
                <motion.div
                  className="mt-4 text-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-white/80 mb-2">
                    {filteredItems[selectedImage].description}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-white/60">
                    <span>{filteredItems[selectedImage].date}</span>
                    <span>•</span>
                    <span>{filteredItems[selectedImage].location}</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
