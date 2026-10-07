import React from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BeforeAfterShowcase({ onBookClick }) {
  return (
    <section id="results" className="section-pad bg-royal-50/60 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="badge bg-gold-100 text-gold-900 border border-gold-300 text-sm mb-3 font-bold">
            ✨ Clinical Case Showcase
          </span>
          <h2 className="section-title text-3xl md:text-4xl">
            Real Transformations, Confident Smiles
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-base">
            Witness the artistic precision of cosmetic restorative dentistry delivered right here at Al-Shifa Dental Clinic.
          </p>
        </div>

        {/* Case Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-royal-100 p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: The Before & After Clinical Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 bg-slate-950">
                <img
                  src="/before-after-smile.jpg"
                  alt="Before and After Tooth Gap Closure and Aesthetic Restoration at Al-Shifa Dental Clinic"
                  className="w-full h-auto object-cover max-h-[500px]"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  BEFORE: Midline Diastema (Gap)
                </div>

                <div className="absolute bottom-3 left-3 bg-emerald-600/95 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                  <Check size={14} /> AFTER: Seamless Composite Aesthetic Restoration
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 mt-3">
                * Actual clinical treatment case documented at Al-Shifa Multispecialty Dental Clinic
              </p>
            </div>

            {/* Right: Treatment Details & Explanation */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="badge bg-royal-100 text-royal-800 text-xs font-bold mb-2">
                  CASE STUDY: COSMETIC BONDING
                </span>
                <h3 className="text-2xl font-display font-bold text-royal-950">
                  Anterior Midline Gap Closure
                </h3>
                <p className="text-sm font-semibold text-gold-700 mt-1">
                  Single-Sitting Smile Transformation by Dr. Afreen Jannath.A
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                This patient arrived with a noticeable aesthetic gap between the upper central incisors. Without needing lengthy orthodontic braces, Dr. Afreen Jannath performed a non-invasive direct composite resin restoration.
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-1">
                {[
                  'Single-sitting same day procedure (under 60 minutes)',
                  'Zero enamel cutting or drilling needed',
                  'Precise natural shade matching with lifelike translucency',
                  'Completely painless with immediate cosmetic improvement',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onBookClick}
                  className="btn-gold text-sm justify-center py-3"
                >
                  <span>Book Your Smile Assessment</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Dr.%20Afreen%2C%20I%20saw%20your%20smile%20transformation%20case%20and%20would%20like%20a%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline text-sm justify-center py-3"
                >
                  Ask on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
