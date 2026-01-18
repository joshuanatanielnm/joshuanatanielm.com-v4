"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Camera, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { photography, getAllPhotoCategories, getPhotosByCategory } from "@/lib/data";
import type { Photo } from "@/types";

export default function PhotographyPage() {
  const [selectedCategory, setSelectedCategory] = useState<Photo["category"] | "All">("All");

  const categories: (Photo["category"] | "All")[] = ["All", ...getAllPhotoCategories()];

  const filteredPhotos =
    selectedCategory === "All" ? photography : getPhotosByCategory(selectedCategory);

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

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 bg-[var(--surface)]" />
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/#photography"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[var(--accent)] border border-[var(--accent)]/30 rounded-full mb-4">
            <Camera className="h-3 w-3" />
            Photography
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                <span className="font-serif italic text-[var(--muted)]">Photo</span>{" "}
                <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-lg text-[var(--muted)] max-w-xl">
                A curated collection of moments captured through my lens.
                Each image tells a story of places, people, and perspectives.
              </p>
            </div>

            {/* Category filter */}
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

        {/* Photo grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link href={`/photography/${photo.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl aspect-square">
                    <Image
                      src={getPhotoImage(index)}
                      alt={photo.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                        {photo.location && (
                          <div className="flex items-center gap-1 text-white/70 text-sm">
                            <MapPin className="h-3 w-3" />
                            {photo.location}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--background)]/80 backdrop-blur-sm">
                        {photo.category}
                      </span>
                    </div>

                    {photo.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--accent)]/90 text-[var(--background)]">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
