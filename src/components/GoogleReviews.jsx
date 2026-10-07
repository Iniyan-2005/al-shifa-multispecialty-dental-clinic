import React, { useEffect, useRef } from 'react';
import { Star, ExternalLink, Check, Quote } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GoogleReviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo(
        Array.from(gridRef.current.children),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="section-pad bg-[#FAFCFD] border-b border-slate-200/60 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="section-kicker">
              Verified Patient Experience
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
              Real Stories of Painless Care
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Patients across Pudupet, Egmore, and Chennai share their experience with Dr. Afreen Jannath’s endodontic and laser procedures.
            </p>
          </div>

          {/* High-Trust Google Anchor */}
          <div className="flex-shrink-0 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs flex items-center gap-4">
            <div className="text-3xl font-display font-black text-slate-950">
              5.0
            </div>
            <div>
              <div className="flex gap-0.5 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                18 Google Reviews
              </p>
            </div>
            <a
              href={clinicData.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-xs px-3 py-1.5 whitespace-nowrap ml-2"
            >
              <span>Verify on Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Testimonials Grid with Editorial Typographic Focus */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.reviews.map((review, i) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-royal-300 transition-colors"
            >
              <div>
                {/* Header with name and rating */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-royal-900 text-white flex items-center justify-center font-bold text-xs">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Verified Attribution Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px]">
                  <Check size={13} className="stroke-[3]" /> Google Verified Patient
                </span>
                <span className="text-[11px] text-slate-400">Pudupet Clinic</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
