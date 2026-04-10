"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  pauseOnHover?: boolean;
  marqueeRepeat?: number;
}

export function PortfolioGallery({
  title = "Chaque mariage, une histoire unique",
  archiveButton = {
    text: "Voir le portfolio",
    href: "/portfolio"
  },
  images: customImages,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-72 md:-space-x-80",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const defaultImages = [
    { src: "/portfolio/ispirazione/DSC00793.jpg", alt: "Portrait de mariée" },
    { src: "/portfolio/amore/DSC01882.jpg",        alt: "Complicité sous le voile" },
    { src: "/portfolio/ispirazione/DSC00797.jpg",  alt: "Mariée à la lumière" },
    { src: "/portfolio/amore/DSC05323.jpg",        alt: "Regard amoureux" },
    { src: "/portfolio/dettagli/DSC00142.jpg",     alt: "Détails du jour" },
    { src: "/portfolio/ispirazione/DSC01927.jpg",  alt: "Monument & élégance" },
    { src: "/portfolio/amore/DSC01855.jpg",        alt: "Mains vers le ciel" },
    { src: "/portfolio/il-giorno/DSC01327.jpg",    alt: "Échange des alliances" },
    { src: "/portfolio/ispirazione/DSC02096.jpg",  alt: "Portrait sous l'arche" },
    { src: "/portfolio/amore/DSC01973.jpg",        alt: "Soirée de réception" },
  ]

  const images = customImages || defaultImages

  return (
    <section
      aria-label={title}
      className={`relative py-12 px-4 ${className}`}
      id="archives"
      style={{ background: '#F8F5F2' }}
    >
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden" style={{ background: 'rgba(248,245,242,0.5)', border: '1px solid rgba(26,26,26,0.12)' }}>
        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-8 px-8">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem,4vw,3.5rem)',
              color: '#1A1A1A',
              marginBottom: '2rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Chaque mariage,<br />
            une histoire <span style={{ color: '#cc0000' }}>unique</span>
          </h2>

          <Link
            href={archiveButton.href}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium group mb-20 transition-colors"
            style={{
              fontFamily: 'var(--font-body)',
              background: '#cc0000',
              color: '#ffffff',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#aa0000' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#cc0000' }}
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop 3D overlapping layout */}
        <div className="hidden md:block relative overflow-hidden h-[400px] -mb-[200px]">
          <div className={`flex ${spacing} pb-8 pt-40 items-end justify-center`}>
            {images.map((image, index) => {
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 20
              const zIndex = totalImages - index
              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index
              const yOffset = isHovered ? -120 : isOtherHovered ? 0 : -staggerOffset

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ zIndex }}
                  initial={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(200px)`,
                    opacity: 0,
                  }}
                  animate={{
                    transform: `perspective(5000px) rotateY(-45deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0,0,0,0.01) 0.796192px 0px 0.796192px 0px,
                        rgba(0,0,0,0.03) 2.41451px 0px 2.41451px 0px,
                        rgba(0,0,0,0.08) 6.38265px 0px 6.38265px 0px,
                        rgba(0,0,0,0.25) 20px 0px 20px 0px
                      `,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile marquee layout */}
        <div className="block md:hidden relative pb-8">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "animate-marquee flex-row",
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    }
                  )}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-64 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{
                          boxShadow: `
                            rgba(0,0,0,0.01) 0.796192px 0px 0.796192px 0px,
                            rgba(0,0,0,0.03) 2.41451px 0px 2.41451px 0px,
                            rgba(0,0,0,0.08) 6.38265px 0px 6.38265px 0px,
                            rgba(0,0,0,0.25) 20px 0px 20px 0px
                          `,
                        }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover object-center"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
