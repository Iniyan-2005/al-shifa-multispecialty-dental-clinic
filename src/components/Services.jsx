import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Clock, CheckCircle, Sparkles, Zap, Shield, Heart, Scissors, Layers, Smile } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  zap: '⚡',
  laser: '🔬',
  sparkles: '✨',
  smile: '💎',
  shield: '🛡️',
  heart: '🧸',
  scissors: '⚕️',
  layers: '👑',
};

export default function Services({ onSelectService }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        Array.from(cardsRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-pad bg-slate-50/70 relative">
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <span className="badge bg-royal-100 text-royal-800 border border-royal-200 text-sm mb-3">
            Multi-Specialty Dental Care
          </span>
          <h2 className="section-title text-3xl md:text-4xl">
            Comprehensive Treatments & Procedures
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-base">
            From specialist single-sitting root canals and laser dentistry to smile transformations and child care — delivered with gentle precision.
          </p>
        </div>

        {/* Doctor Specialty Spotlight Banner */}
        <div className="mb-10 bg-gradient-to-r from-royal-900 via-royal-800 to-royal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-royal-700/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-3xl flex-shrink-0">
                ⚡
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Doctor's Core Expertise
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                  Microscopic Root Canal & Laser Dental Care
                </h3>
                <p className="text-sm text-royal-200 mt-1 max-w-xl">
                  Dr. Afreen Jannath.A brings specialized Endodontic and Laser credentials, ensuring zero-pain treatment and maximal tooth preservation.
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectService('Root Canal Therapy (RCT)')}
              className="btn-gold text-sm whitespace-nowrap px-6 py-3 shadow-lg"
            >
              Consult Specialist <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.services.map((service) => {
            const isSelected = activeCard === service.id;
            return (
              <div
                key={service.id}
                className={`card p-6 border-2 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-royal-600 shadow-xl bg-white ring-2 ring-royal-200'
                    : 'border-transparent hover:border-royal-200'
                }`}
                onClick={() => setActiveCard(isSelected ? null : service.id)}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 bg-royal-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border border-royal-100">
                      {iconMap[service.icon] || '🦷'}
                    </div>
                    <span className={`badge text-xs px-2.5 py-1 ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-royal-950 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5 mb-2">
                    {service.titleTamil}
                  </p>

                  <p className="text-xs font-semibold text-gold-700 bg-gold-50/80 px-2.5 py-1 rounded-md inline-block mb-3">
                    ✨ {service.highlight}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-4">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle size={13} className="text-royal-600 mt-0.5 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock size={13} className="text-slate-400" />
                    <span>{service.duration}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service.title);
                    }}
                    className="text-xs font-bold text-royal-800 hover:text-royal-950 flex items-center gap-1 group"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
