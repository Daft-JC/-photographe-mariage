'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc?: string;
  bgVideoSrc?: string;
  bgColor?: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  bgVideoSrc,
  bgColor = 'linear-gradient(135deg, #F5EDE0 0%, #EDD8BB 40%, #E2C9A8 70%, #D9BFA0 100%)',
  title,
  subtitle,
  scrollToExpand = 'Défiler pour découvrir',
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfMobile = (): void => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const newProgress = Math.min(Math.max(scrollProgress + e.deltaY * 0.0009, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
      }
    };

    const handleTouchStart = (e: TouchEvent) => setTouchStartY(e.touches[0].clientY);

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const deltaY = touchStartY - e.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const newProgress = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(newProgress);
        if (newProgress >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
        else if (newProgress < 0.75) { setShowContent(false); }
        setTouchStartY(e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaWidth  = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textShift   = scrollProgress * (isMobile ? 180 : 150);

  const firstWord   = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div ref={sectionRef} className='overflow-x-hidden'>
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>

          {/* Background — fades out as media expands */}
          <motion.div
            className='absolute inset-0 z-0 h-full overflow-hidden'
            style={!bgVideoSrc ? {
              backgroundImage: bgImageSrc ? `url("${bgImageSrc}")` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              background: bgImageSrc ? undefined : bgColor,
            } : {}}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            {bgVideoSrc && (
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src={bgVideoSrc} type='video/mp4' />
              </video>
            )}
            <div className='absolute inset-0 bg-black/40' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>

              {/* Expanding image */}
              <div
                className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 60px rgba(0,0,0,0.25)',
                }}
              >
                <Image
                  src={mediaSrc}
                  alt={title || 'Hero'}
                  fill
                  className='object-cover'
                  priority
                />
                <motion.div
                  className='absolute inset-0 bg-black/40'
                  animate={{ opacity: 0.6 - scrollProgress * 0.4 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Labels inside the image */}
                <div className='absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 z-10'>
                  {subtitle && (
                    <p
                      className='text-sm tracking-[0.28em] uppercase font-light'
                      style={{
                        color: '#F8F5F2',
                        transform: `translateX(-${textShift}vw)`,
                        opacity: 1 - scrollProgress * 2,
                      }}
                    >
                      {subtitle}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-xs tracking-[0.22em] uppercase font-light'
                      style={{
                        color: '#be2828',
                        transform: `translateX(${textShift}vw)`,
                        opacity: 1 - scrollProgress * 2,
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              {/* Title — splits and slides apart */}
              <div className='flex flex-col items-center justify-center gap-2 w-full relative z-10 pointer-events-none'>
                <motion.h1
                  className='text-5xl md:text-6xl lg:text-7xl font-light'
                  style={{
                    fontFamily: 'Peristiwa, serif',
                    color: '#be2828',
                    transform: `translateX(-${textShift}vw)`,
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                    textTransform: 'none',
                  }}
                >
                  {firstWord}
                </motion.h1>
                <motion.h1
                  className='text-5xl md:text-6xl lg:text-7xl font-light'
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: '#F8F5F2',
                    transform: `translateX(${textShift}vw)`,
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                    textTransform: 'none',
                  }}
                >
                  {restOfTitle}
                </motion.h1>
              </div>

            </div>

            {/* Page content revealed after expansion */}
            <motion.div
              className='w-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
