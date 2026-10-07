import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Star, ChevronDown, ArrowRight, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function Hero({ onBookClick }) {
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const doctorBadgeRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(badgeRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    )
    .fromTo(headlineRef.current,
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }, '-=0.2'
    )
    .fromTo(doctorBadgeRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, '-=0.3'
    )
    .fromTo(subRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, '-=0.3'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.3'
    )
    .fromTo(statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(imageRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }, '-=0.7'
    );
  }, []);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Al-Shifa%20Dental%20Clinic%2C%20I%20would%20like%20to%20consult%20Dr.%20Afreen%20Jannath%20and%20book%20an%20appointment.`;

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#f8fafc] via-[#f0f7fa] to-[#e8f3f8] overflow-hidden min-h-[90vh] flex items-center">
      {/* Background patterns and glowing orbs */}
      <div className="absolute inset-0 hero-pattern pointer-events-none opacity-60" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-royal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-5 sm:space-y-6">

            {/* Google Rating Badge */}
            <div ref={badgeRef} className="inline-flex items-center gap-2.5 bg-white rounded-full px-4 py-2 shadow-md border border-royal-100">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="star-filled" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-royal-950">
                {clinicData.ratings.score} Google Verified Rating
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                ({clinicData.ratings.totalReviews} Reviews)
              </span>
            </div>

            {/* Headline */}
            <div ref={headlineRef}>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gold-600 mb-2">
                Specialist Endodontics & Laser Dental Care
              </p>
              <h1 className="section-title text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-[1.15]">
                <span className="text-royal-950">Gentle Care,</span>
                <br />
                <span className="text-royal-800">Painless Healing</span>
                <br />
                <span className="bg-gradient-to-r from-royal-700 via-royal-600 to-gold-600 bg-clip-text text-transparent">
                  & Confident Smiles
                </span>
              </h1>
            </div>

            {/* Doctor Credential Highlight Box */}
            <div
              ref={doctorBadgeRef}
              className="bg-white/90 backdrop-blur-sm border-l-4 border-gold-500 rounded-r-2xl p-4 shadow-sm border border-slate-100"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-royal-100 flex items-center justify-center text-royal-800 font-bold flex-shrink-0 mt-0.5">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                    {clinicData.doctor.name}
                  </h3>
                  <p className="text-xs font-semibold text-royal-700">
                    {clinicData.doctor.degree} · <span className="text-gold-700">{clinicData.doctor.specialty}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {clinicData.doctor.regNo} · Pudupet, Egmore, Chennai
                  </p>
                </div>
              </div>
            </div>

            {/* Sub text & timings */}
            <div ref={subRef} className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Specialized in <strong className="text-royal-900">Painless Single-Visit Root Canals (RCT)</strong>,
                advanced <strong className="text-royal-900">Laser Dentistry</strong>, cosmetic smile design, and complete multi-specialty care in an ultra-sterile, hospital-grade setup.
              </p>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 pt-1">
                <MapPin size={16} className="text-royal-800 mt-0.5 flex-shrink-0" />
                <span>{clinicData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <Clock size={15} className="text-royal-800 flex-shrink-0" />
                <span>Mon–Sat: <strong>10:00 AM – 1:30 PM</strong> & <strong>5:00 PM – 9:00 PM</strong> (Open till 9 PM)</span>
              </div>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onBookClick}
                className="btn-primary text-sm sm:text-base px-7 py-3.5 justify-center shadow-lg hover:shadow-royal-900/20"
              >
                <span>Book Appointment</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base justify-center"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick call strip */}
            <div className="flex items-center justify-center sm:justify-start gap-3 pt-1 text-xs sm:text-sm">
              <a
                href={`tel:${clinicData.contact.phone1}`}
                className="flex items-center gap-2 text-royal-900 hover:text-royal-700 font-semibold transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-royal-100 flex items-center justify-center">
                  <Phone size={14} className="text-royal-800" />
                </div>
                <span>Call Directly: {clinicData.contact.displayPhone1}</span>
              </a>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-3">
              {clinicData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white/95 rounded-xl p-3 shadow-sm border border-royal-100/70"
                >
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-royal-800">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Real Clinic Visuals */}
          <div ref={imageRef} className="relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              {/* Real clinic dental chair image */}
              <img
                src="/clinic-chair.jpg"
                alt="Al-Shifa Multispecialty Dental Clinic - Advanced Operatory Chair and Equipment"
                className="w-full h-80 sm:h-96 md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for bottom text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Top Doctor Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="bg-royal-900/95 backdrop-blur-md text-white rounded-xl px-3.5 py-2 shadow-xl border border-royal-700/60 flex items-center gap-2">
                  <Sparkles size={14} className="text-gold-400" />
                  <span className="text-xs font-bold tracking-wide">
                    AL-SHIFA DENTAL CLINIC
                  </span>
                </div>

                <div className="bg-gold-500 text-slate-950 rounded-xl px-3 py-1.5 shadow-xl text-xs font-black">
                  5.0 ★ Google Rated
                </div>
              </div>

              {/* Bottom Equipment Spec Pill */}
              <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-royal-950">
                      Modern Operatory & Ergonomic Dental Chair
                    </p>
                    <p className="text-[11px] text-slate-600">
                      Digital Radiography · Rotary Endodontics · Hospital Sterilization
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Specialist Card */}
            <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-royal-100 max-w-[210px] sm:max-w-[230px] animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 bg-royal-950 shadow-sm border border-gold-400/40">
                  <img src="/logo.svg" alt="Al-Shifa Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-royal-950 leading-tight">
                    Dr. Afreen Jannath.A
                  </p>
                  <p className="text-[10px] text-gold-700 font-semibold">
                    Endodontist & Laser Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Floating rating badge */}
            <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-royal-100 text-center">
              <div className="flex gap-0.5 justify-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} className="star-filled" />
                ))}
              </div>
              <p className="font-extrabold text-royal-950 text-sm mt-0.5">5.0 / 5.0</p>
              <p className="text-[10px] text-slate-500 font-medium">18 Google Reviews</p>
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-royal-800 transition-colors animate-bounce"
          >
            <span className="text-xs font-semibold tracking-wider uppercase">Discover More</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
