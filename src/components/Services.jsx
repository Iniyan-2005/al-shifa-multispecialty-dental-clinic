import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle, Shield, Sparkles, ChevronRight, ChevronDown } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Services({ onSelectService }) {
  const [activeTab, setActiveTab] = useState(null);

  // Group services: Specialist focus (RCT & Laser) vs General/Aesthetic treatments
  const otherServices = clinicData.services.filter(
    (s) => s.id !== 'rct' && s.id !== 'laser'
  );

  return (
    <section id="services" className="section-pad bg-white border-b border-slate-200/60 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-kicker">
            Clinical Departments & Specialties
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Specialized Dental Treatments
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            அல்-ஷிஃபா பல் சிகிச்சையகம் — Advanced endodontic therapy, sutureless laser dentistry, cosmetic smile restorations, and preventive care in Pudupet, Egmore.
          </p>
        </div>

        {/* Asymmetrical Editorial Directory */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: Featured Specialist Anchor (Endodontics & Laser) */}
          <div className="lg:col-span-5 bg-royal-950 text-white rounded-3xl p-8 sm:p-10 border border-royal-900 shadow-xl relative overflow-hidden">
            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 border border-gold-400/30 px-3 py-1 rounded-full">
                  Primary Specialization
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-3 leading-snug">
                  Microscopic Endodontics & Laser Care
                </h3>
                <p className="text-xs text-royal-200 mt-1">
                  Direct Specialist Care by Dr. Afreen Jannath.A (Govt Dental College, VNR)
                </p>
              </div>

              {/* Service 1: RCT */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-base">
                    Single-Sitting Rotary RCT
                  </h4>
                  <span className="text-xs text-gold-400 font-semibold">വേர் கால் சிகிச்சை</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Advanced rotary nickel-titanium instruments and digital apex locators eliminate deep nerve infections painlessly while saving your natural tooth.
                </p>
                <div className="space-y-1 pt-1 text-[11px] text-royal-200">
                  <p>✓ Virtually 100% pain-free modern anesthesia</p>
                  <p>✓ Completed with high-grade Zirconia/Ceramic crowns</p>
                </div>
              </div>

              {/* Service 2: Laser */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-base">
                    Precision Diode Laser Dentistry
                  </h4>
                  <span className="text-xs text-gold-400 font-semibold">லேசர் மருத்துவம்</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Scalpel-free soft-tissue reshaping, painless gum depigmentation, and pocket sterilization with zero to minimal bleeding.
                </p>
                <div className="space-y-1 pt-1 text-[11px] text-royal-200">
                  <p>✓ Scalpel-free and sutureless procedures</p>
                  <p>✓ Faster tissue recovery within 24 to 48 hours</p>
                </div>
              </div>

              <button
                onClick={() => onSelectService('Root Canal Therapy (RCT)')}
                className="w-full btn-gold text-sm py-3.5 justify-center shadow-lg"
              >
                <span>Consult Specialist for RCT / Laser</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT: Editorial Treatment Ledger */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-slate-900 text-base">
                  General, Restorative & Cosmetic Treatments
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Select any procedure to review clinical protocol or reserve a slot.
                </p>
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {otherServices.length} Treatments
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {otherServices.map((service, index) => {
                const isOpen = activeTab === service.id;
                return (
                  <div
                    key={service.id}
                    className="transition-colors hover:bg-slate-50/70"
                  >
                    <div
                      className="p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer select-none group"
                      onClick={() => setActiveTab(isOpen ? null : service.id)}
                      role="button"
                      aria-expanded={isOpen}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveTab(isOpen ? null : service.id);
                        }
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-xs font-bold text-slate-400 mt-1 sm:mt-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-display font-bold text-slate-950 text-base group-hover:text-royal-900 transition-colors">
                              {service.title}
                            </h4>
                            <span className="text-xs text-slate-400">
                              · {service.titleTamil}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 font-medium">
                            {service.highlight}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500">
                          <Clock size={13} className="text-slate-400" />
                          <span>{service.duration}</span>
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(service.title);
                          }}
                          className="btn-outline text-xs px-3 py-1.5 whitespace-nowrap"
                        >
                          Book Slot
                        </button>
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? 'bg-royal-100 text-royal-900 rotate-180'
                              : 'bg-slate-100 text-slate-500 group-hover:bg-royal-50 group-hover:text-royal-800'
                          }`}
                          aria-hidden="true"
                        >
                          <ChevronDown size={15} />
                        </div>
                      </div>
                    </div>

                    {/* Expandable Clinical Details */}
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-sm text-slate-600 bg-slate-50/90 border-t border-slate-100 space-y-3">
                        <p className="leading-relaxed text-xs sm:text-sm">
                          {service.description}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2 text-xs pt-1">
                          {service.benefits.map((b, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-700">
                              <CheckCircle size={13} className="text-royal-800 flex-shrink-0" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
