"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Camera, Aperture, Timer, Maximize } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { photography } from "@/lib/data";
import { notFound } from "next/navigation";

export default function PhotoDetailPage() {
  const params = useParams();
  const photoId = params.id as string;

  const photo = photography.find((p) => p.id === photoId);
  const photoIndex = photography.findIndex((p) => p.id === photoId);

  if (!photo) {
    notFound();
  }

  const getPhotoImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1518173946687-a4c036bc4e5f?w=1600&h=1200&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=1200&fit=crop",
    ];
    return images[index % images.length];
  };

  // Get next/prev photos
  const prevPhoto = photoIndex > 0 ? photography[photoIndex - 1] : null;
  const nextPhoto = photoIndex < photography.length - 1 ? photography[photoIndex + 1] : null;

  return (
    <main className="min-h-screen py-24 px-6">
      {/* Background */}
      <div className="fixed inset-0 bg-[var(--background)]" />
      <div className="fixed inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/photography"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Photos
          </Link>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={getPhotoImage(photoIndex)}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </motion.div>

        {/* Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--accent)]/20 text-[var(--accent)]">
                {photo.category}
              </span>
              {photo.featured && (
                <span className="px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {photo.title}
            </h1>

            {photo.description && (
              <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
                {photo.description}
              </p>
            )}

            {/* Location & Date */}
            <div className="flex flex-wrap gap-6 mb-8">
              {photo.location && (
                <div className="flex items-center gap-2 text-[var(--muted)]">
                  <MapPin className="h-5 w-5 text-[var(--accent)]" />
                  <span>{photo.location}</span>
                </div>
              )}
              {photo.date && (
                <div className="flex items-center gap-2 text-[var(--muted)]">
                  <Calendar className="h-5 w-5 text-[var(--accent)]" />
                  <span>{new Date(photo.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {photo.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-lg border border-[var(--border)] text-[var(--muted)]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Technical details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-6">
                Technical Details
              </h2>

              <div className="space-y-4">
                {photo.camera && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <Camera className="h-4 w-4" />
                      <span className="text-sm">Camera</span>
                    </div>
                    <span className="font-medium">{photo.camera}</span>
                  </div>
                )}

                {photo.settings?.aperture && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <Aperture className="h-4 w-4" />
                      <span className="text-sm">Aperture</span>
                    </div>
                    <span className="font-medium">{photo.settings.aperture}</span>
                  </div>
                )}

                {photo.settings?.shutterSpeed && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <Timer className="h-4 w-4" />
                      <span className="text-sm">Shutter</span>
                    </div>
                    <span className="font-medium">{photo.settings.shutterSpeed}</span>
                  </div>
                )}

                {photo.settings?.iso && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--muted)]">ISO</span>
                    <span className="font-medium">{photo.settings.iso}</span>
                  </div>
                )}

                {photo.settings?.focalLength && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[var(--muted)]">
                      <Maximize className="h-4 w-4" />
                      <span className="text-sm">Focal Length</span>
                    </div>
                    <span className="font-medium">{photo.settings.focalLength}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-[var(--border)]"
        >
          {prevPhoto ? (
            <Link
              href={`/photography/${prevPhoto.id}`}
              className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={getPhotoImage(photoIndex - 1)}
                  alt={prevPhoto.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <span className="text-sm text-[var(--muted)]">← Previous</span>
                <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  {prevPhoto.title}
                </h3>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextPhoto && (
            <Link
              href={`/photography/${nextPhoto.id}`}
              className="group flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors justify-end text-right"
            >
              <div>
                <span className="text-sm text-[var(--muted)]">Next →</span>
                <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                  {nextPhoto.title}
                </h3>
              </div>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={getPhotoImage(photoIndex + 1)}
                  alt={nextPhoto.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            </Link>
          )}
        </motion.div>
      </div>
    </main>
  );
}
