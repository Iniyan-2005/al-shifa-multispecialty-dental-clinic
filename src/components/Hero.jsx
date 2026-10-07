import React, { useEffect, useRef } from 'react';
import { Phone, MessageCircle, Star, ChevronDown, ArrowRight, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

export default function Hero({ onBookClick }) {
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
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
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, '-=0.2'
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.3'
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }, '-=0.2'
    )
    .fromTo(imageRef.current,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6'
    );
  }, []);

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Al-Shifa%20Dental%20Clinic%2C%20I%20would%20like%20to%20consult%20Dr.%20Afreen%20Jannath%20and%20book%20an%20appointment.`;

  return (
    <section id="home" className="relative bg-[#FAFCFD] border-b border-slate-200/60 overflow-hidden min-h-[88vh] flex items-center scroll-mt-20">
      {/* Subtle architectural hairline border grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c4a6008_1px,transparent_1px),linear-gradient(to_bottom,#0c4a6008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container-custom relative z-10 pt-28 sm:pt-32 md:pt-36 pb-14 md:pb-18">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT: Text Content - The 4 Above-The-Fold Pillars */}
          <div className="space-y-6 lg:pr-4">

            {/* Pillar 1: Practice Context & Authority (What & Who Leads) */}
            <div ref={badgeRef} className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-800 bg-gold-100/90 border border-gold-300/80 px-3.5 py-1.5 rounded-full shadow-xs">
                Dr. Afreen Jannath.A · Endodontist & Laser Specialist (Govt Dental College, VNR)
              </span>
            </div>

            {/* Pillar 2: Headline - What It Is & The Core Treatment Specialty */}
            <div ref={headlineRef}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-display font-extrabold text-royal-950 leading-[1.14] tracking-tight">
                Painless Root Canals & Precision Laser Dentistry in Pudupet
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-royal-700 mt-2 tracking-wide">
                அல்-ஷிஃபா பல் சிகிச்சையகம் · Al-Shifa Multispecialty Dental Clinic · Reg No: 33541
              </p>
            </div>

            {/* Pillar 3: Who It Is For & Why It Matters (Value & Differentiator) */}
            <div ref={subRef} className="space-y-3">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                <strong>Who it’s for:</strong> Patients facing toothache, deep decay, or dental anxiety who want to save their natural teeth safely without pain, bleeding, or multiple traumatic visits.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                <strong>Why it matters:</strong> As an Endodontic & Laser specialist, Dr. Afreen performs single-sitting microscopic root canals and sutureless laser therapies with hospital-grade autoclave sterilization, ensuring 100% painless care and rapid 24-hr recovery.
              </p>
            </div>

            {/* Quick Indications / Specialty Focus List */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-slate-700">
              <span className="bg-slate-100 px-3 py-1 rounded-full font-medium border border-slate-200">
                ⚡ Single-Visit RCT
              </span>
              <span className="bg-slate-100 px-3 py-1 rounded-full font-medium border border-slate-200">
                🔬 Bloodless Laser Dentistry
              </span>
              <span className="bg-slate-100 px-3 py-1 rounded-full font-medium border border-slate-200">
                ✨ Cosmetic Gap Closures
              </span>
              <span className="bg-slate-100 px-3 py-1 rounded-full font-medium border border-slate-200">
                🧸 Gentle Child Dentistry
              </span>
            </div>

            {/* Pillar 4: What To Do Next (Clear Action Steps & Reassurance) */}
            <div ref={ctaRef} className="space-y-3 pt-1">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onBookClick}
                  className="btn-primary text-base px-8 py-4 shadow-xl shadow-royal-950/15"
                >
                  <span>Book Consultation Online</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-base px-6 py-4"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <span>WhatsApp: {clinicData.contact.displayPhone1}</span>
                </a>
              </div>

              {/* Direct Next-Step Reassurance */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                <span>✓ Direct confirmation in minutes</span>
                <span>·</span>
                <span>✓ Zero waiting time</span>
                <span>·</span>
                <span>✓ Evening slots till 9:00 PM</span>
              </div>
            </div>

            {/* Consolidated Social Proof Bar */}
            <div
              ref={statsRef}
              className="pt-5 border-t border-slate-200/90 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600"
            >
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-amber-500">★★★★★</span>
                <span>5.0 Google Verified</span>
                <span className="text-slate-400 font-normal text-xs">(18 Reviews)</span>
              </div>
              <span className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-royal-800" />
                <span>Open Mon–Sat till 9:00 PM</span>
              </div>
              <span className="hidden sm:inline text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-royal-800" />
                <span>23/11, Labbai St, Pudupet, Egmore</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Authentic Operatory Photo with Single Focused Framing */}
          <div ref={imageRef} className="relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900">
              <img
                src="/clinic-chair.jpg"
                alt="Al-Shifa Multispecialty Dental Clinic - Advanced Operatory Room"
                className="w-full h-80 sm:h-96 md:h-[500px] object-cover"
              />

              {/* Clean Bottom Metadata Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-royal-950/95 via-royal-950/60 to-transparent p-4 sm:p-6 pt-8 sm:pt-10 text-white">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gold-400">
                      Operatory Suite 01 · Pudupet Clinic
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 line-clamp-1 sm:line-clamp-none">
                      Rotary Endodontics & Hospital-Grade Autoclaving
                    </p>
                    <p className="text-[11px] sm:text-xs text-royal-200 mt-0.5">
                      Direct appointments with Dr. Afreen Jannath.A
                    </p>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border border-white/20 whitespace-nowrap">
                    100% Sterile
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-royal-800 transition-colors animate-bounce"
          >
            <span className="text-xs font-semibold tracking-wider uppercase">Explore Practice</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
