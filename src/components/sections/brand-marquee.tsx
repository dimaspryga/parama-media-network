"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Kemenkopukm", logo: "./assets/kemenkopukm-logo.png" },
  {
    name: "Pos Indonesia",
    logo: "./assets/pos-indonesia-logo.png",
  },
  {
    name: "Panca Budi Group",
    logo: "./assets/panca-budi-logo.png",
  },
  {
    name: "PTTEP",
    logo: "./assets/pttep-logo.png",
  },
  {
    name: "Agrinesia",
    logo: "./assets/agrinesia-logo.png",
  },
  {
    name: "Bibit",
    logo: "./assets/bibit-logo.png",
  },
  {
    name: "Pointstar",
    logo: "./assets/pointstar-logo.png",
  },
  {
    name: "Fitbit",
    logo: "./assets/fitbit-logo.png",
  },
  {
    name: "ShariaCoin",
    logo: "./assets/sharia-coin-logo.png",
  },
  {
    name: "ITS Tekno Sains Academy",
    logo: "./assets/its-tekno-sains-academy-logo.png",
  },
  {
    name: "IDX Incubator",
    logo: "./assets/idx-incubator-logo.png",
  },
  {
    name: "Pens Sky",
    logo: "./assets/pens-sky-logo.png",
  },
  {
    name: "Universitas Veteran Jawa Timur",
    logo: "./assets/univ-veteran-jatim-logo.png",
  },
  {
    name: "MEBISO",
    logo: "./assets/mebiso-logo.webp",
  },
  {
    name: "Riliv",
    logo: "./assets/riliv-logo.png",
  },
  {
    name: "ixoora",
    logo: "./assets/ixoora-logo.png",
  },
  {
    name: "TDA",
    logo: "./assets/tda-logo.png",
  },
];

export default function BrandMarquee() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-blue-950 dark:via-background dark:to-blue-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/20 via-transparent to-blue-100/20 dark:from-blue-950 dark:to-blue-950/20" />
      </div>

      {/* Container untuk h2 dan p */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        {" "}
        {/* Menambah mb-12 untuk jarak ke marquee */}
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-6xl md:text-3xl font-bold text-foreground mb-4 md:mb-0 md:w-1/2">
            Trusted by Brands Since Our Early Days
          </h2>
          <p className="text-muted-foreground text-xl lg:text-2xl max-w-2xl mx-auto md:mx-0 md:w-1/2">
            PT Parama Media Network is built on the strong foundation of CV
            Mebiso Media Perubahan. Now, we continue our journey forward with
            more integrated, relevant, and impactful services.
          </p>
        </motion.div>
      </div>

      {/* Marquee dipisahkan dan ditempatkan di luar container utama agar bisa full-width */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full relative" /* Pastikan ini relatif untuk overlay, dan full width */
      >
        {/* Enhanced gradient overlays - sekarang bekerja relatif terhadap motion.div ini */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent dark:from-blue-950 dark:via-blue-950/80 z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent dark:from-blue-950 dark:via-blue-950/80 z-10 pointer-events-none" />

        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={false}
          className="py-4"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="mx-8 flex items-center justify-center h-24 w-36 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={
                  brand.logo ||
                  "/api/placeholder?height=60&width=120&text=Brand"
                }
                alt={`${brand.name} logo`}
                width={160}
                height={60}
                className="object-contain max-w-full max-h-full"
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
