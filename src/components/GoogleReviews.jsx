import React, { useEffect, useRef } from 'react';
import { Star, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={15}
          className={i <= rating ? 'star-filled' : 'text-slate-200 fill-slate-200'}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }) {
  const avatarColors = [
    'bg-royal-800',
    'bg-gold-600',
    'bg-cyan-700',
    'bg-royal-700',
    'bg-amber-600',
    'bg-blue-700',
  ];
  const color = avatarColors[index % avatarColors.length];

  return (
    <div
      className={`card p-6 flex flex-col justify-between border-2 transition-all duration-300 hover:shadow-xl ${
        review.highlight
          ? 'border-gold-300 bg-gradient-to-b from-gold-50/40 to-white'
          : 'border-slate-100 hover:border-royal-200'
      }`}
    >
      <div>
        {/* Top User Info */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className={`w-11 h-11 ${color} text-white rounded-full flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm`}
          >
            {review.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-bold text-slate-900 text-sm">{review.name}</p>
              {review.verified && (
                <span className="badge bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.2">
                  ✓ Google Verified
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">{review.date}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="mb-3">
          <StarRating rating={review.rating} />
        </div>

        {/* Review Content */}
        <p className="text-slate-600 text-sm leading-relaxed italic">
          "{review.text}"
        </p>
      </div>

      {/* Helpful tag */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-4 mt-4 border-t border-slate-100">
        <div className="flex items-center gap-1.5">
          <ThumbsUp size={12} className="text-royal-600" />
          <span>Verified Patient Experience</span>
        </div>
        <span className="text-[11px] font-semibold text-gold-700">5.0 ★★★★★</span>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

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
        Array.from(gridRef.current.children),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="section-pad bg-white relative">
      <div className="container-custom">

        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <span className="badge bg-gold-100 text-gold-900 border border-gold-300 text-sm mb-3">
            ⭐ 5.0 Star Reputation
          </span>
          <h2 className="section-title text-3xl md:text-4xl">
            What Our Patients Say
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
            Verified patient reviews highlighting painless treatments, genuine care, and exceptional results with Dr. Afreen Jannath.
          </p>

          {/* Aggregate Badge */}
          <div className="inline-flex items-center gap-4 bg-royal-50 border border-royal-200/80 rounded-2xl px-6 py-3 mt-6 shadow-sm">
            <div className="text-3xl font-display font-black text-royal-950">
              5.0
            </div>
            <div className="text-left">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Based on 18 Verified Google Reviews
              </p>
            </div>
            <a
              href={clinicData.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="ml-2 btn-gold text-xs px-3.5 py-1.5 flex items-center gap-1 shadow-sm"
            >
              <span>View Profile</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {/* Bottom Google Profile CTA */}
        <div className="text-center mt-12">
          <a
            href={clinicData.googleProfile}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-royal-800 hover:text-royal-950 font-bold text-sm bg-slate-50 hover:bg-slate-100 px-6 py-3 rounded-full transition-colors border border-slate-200 shadow-sm"
          >
            <span>Read all reviews on Google Maps</span>
            <ExternalLink size={15} />
          </a>
        </div>

      </div>
    </section>
  );
}
