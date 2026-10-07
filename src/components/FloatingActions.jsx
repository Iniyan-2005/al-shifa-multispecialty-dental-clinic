import React, { useState, useEffect, useRef } from 'react';
import { Phone, MessageCircle, Calendar, ArrowUp } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function FloatingActions({ onBookClick }) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const containerRef = useRef(null);
  const scrollTopRef = useRef(null);

  // Entrance animation for container on mount
  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: 0.8, ease: 'back.out(1.7)' }
    );
  }, []);

  // Track scroll position for scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate scroll-to-top button in/out smoothly
  useEffect(() => {
    if (!scrollTopRef.current) return;
    if (showScrollTop) {
      gsap.fromTo(
        scrollTopRef.current,
        { scale: 0, autoAlpha: 0, y: 10 },
        { scale: 1, autoAlpha: 1, y: 0, duration: 0.35, ease: 'back.out(1.7)' }
      );
    } else {
      gsap.to(scrollTopRef.current, {
        scale: 0.6,
        autoAlpha: 0,
        y: 10,
        duration: 0.25,
        ease: 'power2.in',
      });
    }
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Al-Shifa%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3"
    >
      {/* 1. Upward Arrow (Scroll-to-Top Button) — Directly on top of the WhatsApp button */}
      <button
        ref={scrollTopRef}
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Back to top"
        style={{ opacity: 0, pointerEvents: showScrollTop ? 'auto' : 'none' }}
        className="w-11 h-11 sm:w-12 sm:h-12 bg-white hover:bg-royal-50 text-royal-900 border-2 border-royal-200 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 active:scale-95 cursor-pointer group"
      >
        <ArrowUp size={20} className="stroke-[2.5] text-royal-800 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>

      {/* 2. Main WhatsApp Floating Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp with Dr. Afreen Jannath"
          title="Chat on WhatsApp with Dr. Afreen Jannath (+91 94986 58545)"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 whatsapp-pulse"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
}
