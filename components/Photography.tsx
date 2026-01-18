"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { photography, getAllPhotoCategories, getPhotosByCategory } from "@/lib/data";
import type { Photo } from "@/types";

export function Photography() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState<Photo["category"] | "All">("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories: (Photo["category"] | "All")[] = [
    "All",
    ...getAllPhotoCategories(),
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? photography
      : getPhotosByCategory(selectedCategory);

  // Placeholder images for photography
  const getPhotoImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518173946687-a4c036bc4e5f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop",
    ];
    return images[index % images.length];
  };

  const lightboxSlides = filteredPhotos.map((photo, index) => ({
    src: getPhotoImage(index),
    alt: photo.title,
    description: photo.description,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="photography" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--surface)]" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            <Camera className="h-3 w-3" />
            Photography
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="font-serif italic text-[var(--muted)]">Through the</span>
                <br />
                <span className="gradient-text">Lens</span>
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)] max-w-xl">
                Capturing moments and stories through photography — a creative outlet beyond the code.
              </p>
              <Link
                href="/photography"
                className="group inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:gap-3 transition-all mt-4"
              >
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-[var(--accent)] text-[var(--background)]"
                      : "border border-[var(--border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  style={{ aspectRatio: index % 3 === 0 ? "3/4" : index % 2 === 0 ? "1/1" : "4/3" }}
                >
                  <Image
                    src={getPhotoImage(index)}
                    alt={photo.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold mb-1">{photo.title}</h3>
                      {photo.location && (
                        <div className="flex items-center gap-1 text-white/70 text-sm">
                          <MapPin className="h-3 w-3" />
                          {photo.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 backdrop-blur-sm text-white">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </section>
  );
}
