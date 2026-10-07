import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation, Compass } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LocationAndHours() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="section-pad bg-[#FAFCFD] border-b border-slate-200/60 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="section-kicker">
            Practice Location & Consultation Hours
          </span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            How to Reach Al-Shifa Dental Clinic
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Centrally situated on Labbai Street, Pudupet (Egmore, Chennai) with dedicated evening hours open daily till 9:00 PM.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left: Google Map Embed & Directions */}
          <div ref={leftRef} className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 relative group">
              <iframe
                title="Al-Shifa Multispecialty Dental Clinic Map"
                src="https://maps.google.com/maps?q=Al-Shifa+Multispecialty+Dental+clinic,+23%2F11,+Labbai+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none sm:pointer-events-auto"
              />

              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md text-xs font-bold text-royal-950 flex items-center gap-1.5 border border-royal-100">
                <Navigation size={13} className="text-royal-700" />
                <span>Pudupet, Egmore</span>
              </div>

              {/* Direct Open in Maps Pill */}
              <a
                href={clinicData.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 bg-royal-950/90 hover:bg-royal-900 text-white backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-1.5 border border-royal-700 transition-all hover:scale-105"
              >
                <Compass size={13} className="text-gold-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Address Details Card */}
            <div className="card p-6 space-y-4 border border-royal-100">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-royal-100 text-royal-800 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    Clinic Address
                  </h4>
                  <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                    {clinicData.contact.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Landmark: {clinicData.contact.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-2 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-800 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500">Appointments & Inquiries</p>
                  <a
                    href={`tel:${clinicData.contact.phone1}`}
                    className="font-bold text-royal-900 hover:text-royal-700 text-sm sm:text-base transition-colors"
                  >
                    {clinicData.contact.displayPhone1}
                  </a>
                </div>
                <a
                  href={clinicData.contact.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold text-xs px-3.5 py-2 flex items-center gap-1 shadow-sm whitespace-nowrap"
                >
                  <Compass size={13} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Detailed Timings & Schedule */}
          <div ref={rightRef} className="space-y-6">
            <div className="card p-6 sm:p-8 space-y-6 border border-royal-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-royal-100 text-royal-800 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-royal-950">
                      Consultation Hours
                    </h3>
                    <p className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Open Mon–Sat till 9:00 PM
                    </p>
                  </div>
                </div>
                <span className="badge bg-gold-100 text-gold-900 font-bold text-xs border border-gold-300">
                  Open Daily
                </span>
              </div>

              {/* Schedule list */}
              <div className="space-y-4">
                {clinicData.timings.schedule.map((slot) => (
                  <div
                    key={slot.days}
                    className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <p className="font-bold text-sm text-slate-900">{slot.days}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-1">
                        <span>☀️ Morning: <strong>{slot.morning}</strong></span>
                        <span>🌙 Evening: <strong>{slot.evening}</strong></span>
                      </div>
                    </div>
                    <span
                      className={`badge text-xs self-start sm:self-center font-bold px-3 py-1 ${
                        slot.status === 'Open'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note on emergencies */}
              <div className="bg-royal-900 text-white rounded-2xl p-4 text-xs space-y-1">
                <p className="font-bold text-gold-400">🚨 Dental Emergency Care</p>
                <p className="text-royal-100 leading-relaxed">
                  Experiencing severe toothache, broken tooth, or dental trauma? Call us immediately at {clinicData.contact.displayPhone1} for prioritized emergency slots.
                </p>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Confirm Slot on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
