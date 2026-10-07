import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section-pad bg-white relative">
      <div className="container-custom max-w-4xl">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="badge bg-royal-100 text-royal-800 border border-royal-200 text-sm mb-3">
            Got Questions?
          </span>
          <h2 className="section-title text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 mt-3 text-base">
            Everything you need to know about our treatments, doctor credentials, and clinic visits.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {clinicData.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-royal-300 shadow-md bg-royal-50/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left font-display font-semibold text-slate-800 hover:text-royal-900 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-royal-800 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/70">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Strip */}
        <div className="mt-12 text-center bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <p className="text-sm text-slate-600">
            Have a question not listed here? Talk to our friendly team directly.
          </p>
          <div className="mt-3 flex justify-center gap-4">
            <a
              href={`tel:${clinicData.contact.phone1}`}
              className="btn-primary text-xs sm:text-sm py-2 px-5"
            >
              <Phone size={14} /> Call {clinicData.contact.displayPhone1}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
