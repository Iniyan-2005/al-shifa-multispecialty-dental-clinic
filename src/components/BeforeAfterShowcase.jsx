import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function BeforeAfterShowcase({ onBookClick }) {
  return (
    <section id="results" className="section-pad bg-white border-b border-slate-200/60 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-kicker">
            Clinical Case Documentation
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            Real Aesthetic Smile Transformations
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Conservative cosmetic restorations designed to preserve maximum natural enamel while delivering immediate cosmetic harmony.
          </p>
        </div>

        {/* Clinical Case Study Presentation */}
        <div className="bg-[#FAFCFD] rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: The Clinical Transformation Image */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 bg-slate-950 shadow-md group">
                <img
                  src="/before-after-smile.jpg"
                  alt="Clinical Case Study: Anterior Diastema Closure and Aesthetic Bonding at Al-Shifa Dental Clinic"
                  className="w-full h-auto object-cover max-h-[480px]"
                />

                {/* High-Contrast Anatomical State Badges */}
                <div className="absolute top-3.5 left-3.5 bg-slate-950/90 backdrop-blur-md text-amber-300 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-amber-400/30 shadow-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>BEFORE: Midline Diastema (Gap)</span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 bg-slate-950/90 backdrop-blur-md text-emerald-300 px-3.5 py-1.5 rounded-lg text-xs font-bold border border-emerald-400/40 shadow-md flex items-center gap-1.5">
                  <Check size={14} className="text-emerald-400 stroke-[3]" />
                  <span>AFTER: Direct Composite Layering</span>
                </div>

                <div className="absolute top-3.5 right-3.5 bg-royal-950/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[11px] font-semibold border border-royal-700/60 hidden sm:block">
                  Single-Visit Result
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mt-3 px-1">
                <span>Case #DS-108 · Midline Diastema Closure</span>
                <span>Dr. Afreen Jannath.A, B.D.S.</span>
              </div>
            </div>

            {/* Right: Clinical Analysis & Outcomes */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-royal-800 uppercase tracking-wider block mb-1">
                  PROCEDURE: DIRECT COMPOSITE BONDING
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-royal-950 leading-tight">
                  Single-Visit Diastema Closure
                </h3>
                <p className="text-xs font-semibold text-gold-700 mt-1">
                  Completed in 45 Minutes · Zero Orthodontic Braces Needed
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                The patient presented with a wide midline diastema between the central incisors. Rather than undergoing multi-month orthodontic alignment, Dr. Afreen Jannath performed a minimally invasive direct composite restoration with multi-layered translucency matching the patient's natural tooth shade.
              </p>

              {/* Clinical Verification Checklist */}
              <div className="space-y-2.5 border-y border-slate-200/80 py-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>100% Painless:</strong> Performed with zero anesthesia required in a single sitting.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Zero Tooth Prep:</strong> Healthy natural enamel preserved with zero aggressive drilling.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Lifelike Luster:</strong> Hand-polished nano-hybrid resin resisting stain and wear.</span>
                </div>
              </div>

              {/* Action Duo */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  onClick={onBookClick}
                  className="btn-primary text-sm justify-center py-3.5"
                >
                  <span>Book Smile Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappNumber}?text=Hello%20Dr.%20Afreen%2C%20I%20am%20interested%20in%20a%20diastema%20smile%20makeover%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm justify-center py-3.5"
                >
                  Ask Doctor on WhatsApp
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
