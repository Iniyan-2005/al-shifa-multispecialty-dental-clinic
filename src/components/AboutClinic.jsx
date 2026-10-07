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
    <section id="about" ref={sectionRef} className="section-pad bg-white relative">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="badge bg-royal-100 text-royal-800 text-sm mb-3 border border-royal-200">
            About Our Practice
          </span>
          <h2 className="section-title text-3xl md:text-4xl">
            Welcome to Al-Shifa Multispecialty Dental Clinic
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-base">
            அல்-ஷிஃபா பல் சிகிச்சையகம் — Combining specialized clinical expertise with warm, patient-first dental care in Pudupet, Egmore.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text side */}
          <div ref={textRef} className="space-y-6">

            {/* Doctor Highlight Box */}
            <div className="bg-royal-50/70 border-l-4 border-royal-800 rounded-r-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="badge bg-gold-500 text-slate-950 font-bold text-[11px]">
                  CHIEF DENTAL SPECIALIST
                </span>
                <span className="text-xs text-royal-800 font-semibold">Reg: 33541</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-black text-royal-950">
                {clinicData.doctor.name}
              </h3>
              <p className="text-sm font-bold text-gold-700 mt-0.5">
                {clinicData.doctor.degree} · {clinicData.doctor.specialty}
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Alumna of the Government Dental College, VNR. Specialized in painless single-sitting microscopic root canal therapy and advanced laser applications.
              </p>
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
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
              <img
                src="/clinic-front.jpg"
                alt="Al-Shifa Multispecialty Dental Clinic Exterior Signboard - Dr. Afreen Jannath"
                className="w-full h-80 sm:h-96 md:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Bottom glass card displaying official street details */}
              <div className="absolute bottom-4 left-4 right-4 bg-royal-950/90 backdrop-blur-md rounded-2xl p-4 border border-royal-700/50 text-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">
                      Al-Shifa Multispecialty Dental Clinic
                    </p>
                    <p className="text-xs text-royal-200 mt-0.5">
                      {clinicData.contact.shortAddress}
                    </p>
                    <p className="text-[11px] text-gold-300 mt-1 font-semibold">
                      📞 Appointment Contact: {clinicData.contact.displayPhone1}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Specialist Badge */}
            <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-5 bg-white rounded-2xl p-3.5 shadow-xl border border-royal-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-royal-800 text-white flex items-center justify-center font-bold">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-xs font-bold text-royal-950">Govt Dental College Alumna</p>
                  <p className="text-[11px] text-gold-700 font-semibold">Endodontist & Laser Specialist</p>
                </div>
              </div>
            </div>

            {/* Floating Hours Badge */}
            <div className="absolute -bottom-4 -right-3 sm:-bottom-5 sm:-right-5 bg-white rounded-2xl px-4 py-2.5 shadow-xl border border-royal-100 text-center">
              <p className="text-[11px] text-slate-500 font-medium">Evening Clinic</p>
              <p className="text-xs font-bold text-royal-900">Open till 9:00 PM</p>
            </div>

          </div>

        </div>

        {/* 4 Feature Cards */}
        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20">
          {clinicData.features.map((feature) => {
            const Icon = iconMap[feature.icon] || CheckCircle;
            return (
              <div
                key={feature.title}
                className="card p-6 hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 hover:border-royal-200 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-royal-100 rounded-2xl flex items-center justify-center mb-4 text-royal-800">
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
