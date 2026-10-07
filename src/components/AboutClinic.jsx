import React, { useEffect, useRef } from 'react';
import { CheckCircle, Award, Heart, Zap, Sparkles, MapPin, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'shield-check': CheckCircle,
  'award': Award,
  'cpu': Zap,
  'heart': Heart,
};

export default function AboutClinic({ onBookClick }) {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      );
      gsap.fromTo(
        featuresRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: featuresRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-pad bg-white relative scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-kicker">
            Practice Leadership & Clinical Integrity
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Specialist Care Rooted in Conservative Dentistry
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            அல்-ஷிஃபா பல் சிகிச்சையகம் — Combining advanced Endodontic & Laser training with a warm, patient-first philosophy in Pudupet, Egmore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text side */}
          <div ref={textRef} className="space-y-6">

            {/* Doctor Credential Architecture */}
            <div className="bg-royal-50/80 border border-royal-200/80 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="badge bg-gold-500 text-slate-950 font-bold text-[11px] tracking-wide">
                  PRACTICE DIRECTOR & SPECIALIST
                </span>
                <span className="text-xs text-royal-900 font-mono font-bold bg-white px-2.5 py-1 rounded-md border border-royal-200">
                  TNDC Reg: 33541
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-display font-black text-royal-950">
                  {clinicData.doctor.name}
                </h3>
                <p className="text-sm font-semibold text-gold-700 mt-0.5">
                  {clinicData.doctor.degree} · {clinicData.doctor.specialty}
                </p>
              </div>

              {/* 4-Item Credential Matrix */}
              <div className="grid grid-cols-2 gap-2.5 pt-1 text-xs">
                <div className="bg-white p-3 rounded-xl border border-royal-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Institution</p>
                  <p className="font-semibold text-slate-900 mt-0.5">Govt Dental College, VNR</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-royal-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Clinical Discipline</p>
                  <p className="font-semibold text-slate-900 mt-0.5">Microscopic Endodontics</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-royal-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Laser Surgery</p>
                  <p className="font-semibold text-slate-900 mt-0.5">Soft-Tissue Diode Laser</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-royal-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Patient Standard</p>
                  <p className="font-semibold text-slate-900 mt-0.5">100% Pain-Free Protocols</p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              At <strong className="text-royal-900">Al-Shifa Multispecialty Dental Clinic</strong>, our philosophy is anchored in gentle, conservative, and patient-centric dentistry. Located conveniently on <strong>Labbai Street, Pudupet (Egmore, Chennai)</strong>, we offer personalized treatment solutions ranging from routine oral hygiene to complex endodontic and laser procedures.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              We understand that many patients experience anxiety when visiting a dentist. Our clinic is specifically designed with a calming atmosphere, sterile protocols, and painless anesthesia techniques so you and your family can enjoy stress-free dental visits.
            </p>

            {/* Specialties Pill List */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-royal-800 mb-2">
                Specialized Treatments Provided:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Single-Visit RCT',
                  'Laser Dentistry',
                  'Smile Makeovers',
                  'Dental Implants',
                  'Teeth Whitening',
                  'Paediatric Care',
                  'Zirconia Crowns',
                  'Ultrasonic Scaling',
                ].map((s) => (
                  <span
                    key={s}
                    className="bg-royal-50 border border-royal-200 text-royal-900 rounded-full px-3.5 py-1 text-xs font-semibold"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={onBookClick} className="btn-primary text-sm sm:text-base">
                Book a Consultation
              </button>
              <a
                href={`tel:${clinicData.contact.phone1}`}
                className="btn-outline text-sm sm:text-base"
              >
                <Phone size={16} />
                <span>Call {clinicData.contact.displayPhone1}</span>
              </a>
            </div>

          </div>

          {/* Right: Clinic Exterior / Signboard Photo */}
          <div ref={imageRef} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900">
              <img
                src="/clinic-front.jpg"
                alt="Al-Shifa Multispecialty Dental Clinic Exterior Signboard - Dr. Afreen Jannath"
                className="w-full h-80 sm:h-96 md:h-[460px] object-cover"
              />

              {/* Clean Bottom Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-royal-950/90 via-royal-950/60 to-transparent p-5 sm:p-6 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">
                      Physical Practice Location
                    </p>
                    <p className="text-xs text-royal-200 mt-0.5">
                      {clinicData.contact.shortAddress} · Call {clinicData.contact.displayPhone1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Clinical Standards Pillars */}
        <div ref={featuresRef} className="mt-20 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between mb-8">
            <span className="section-kicker mb-0">Clinical Operating Standards</span>
            <span className="text-xs font-mono font-bold text-slate-400">STANDARDS 01–04</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicData.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="space-y-3 relative border-l border-slate-200 pl-5 sm:pl-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold-700 tracking-wider">
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-royal-50 text-royal-800 flex items-center justify-center">
                    {idx === 0 && <CheckCircle size={16} />}
                    {idx === 1 && <Award size={16} />}
                    {idx === 2 && <Zap size={16} />}
                    {idx === 3 && <Heart size={16} />}
                  </div>
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base leading-snug">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
