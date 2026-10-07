import React from 'react';
import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Share2, Globe, Heart } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Footer({ onBookClick }) {
  const services = clinicData.services.map((s) => s.title);

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Main Footer Container */}
      <div className="container-custom py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand & Doctor Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-gold-500/40 flex-shrink-0 bg-royal-950">
                <img
                  src="/logo.svg"
                  alt="Al-Shifa Multispecialty Dental Clinic Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-black text-white text-lg tracking-tight leading-none">
                  AL-SHIFA
                </p>
                <p className="text-gold-400 text-[10px] font-bold tracking-widest uppercase mt-1">
                  Multispecialty Dental Clinic
                </p>
                <p className="text-slate-400 text-[10px]">
                  அல்-ஷிஃபா பல் சிகிச்சையகம்
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Gentle Care, Painless Healing & Confident Smiles. Led by Endodontist & Laser Specialist Dr. Afreen Jannath.A in Pudupet, Egmore, Chennai.
            </p>

            {/* Google Rating strip */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-gold-400 text-sm">★</span>
                ))}
              </div>
              <span className="text-slate-300 text-xs font-semibold">
                5.0 / 5.0 (18 Google Reviews)
              </span>
            </div>

            {/* Doctor Reg Badge */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs text-slate-300">
              <p className="font-bold text-white">Dr. Afreen Jannath.A, B.D.S.</p>
              <p className="text-[11px] text-gold-400">Govt Dental College, VNR · Reg: 33541</p>
            </div>

            {/* Social / WhatsApp icons */}
            <div className="flex gap-2 pt-1">
              <a
                href={clinicData.googleProfile}
                target="_blank"
                rel="noreferrer"
                title="Google Profile"
                className="w-9 h-9 bg-slate-900 hover:bg-royal-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-800"
              >
                <Globe size={15} />
              </a>
              <a
                href={`https://wa.me/${clinicData.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                title="WhatsApp Clinic"
                className="w-9 h-9 bg-slate-900 hover:bg-[#25D366] rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-800"
              >
                <MessageCircle size={15} />
              </a>
              <a
                href={`tel:${clinicData.contact.phone1}`}
                title="Call Clinic"
                className="w-9 h-9 bg-slate-900 hover:bg-gold-600 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-slate-800"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Col 2: Services / Treatments */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-xs uppercase tracking-widest text-gold-400">
              Treatments & Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-gold-300 text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold-500 text-xs">›</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Timings */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-xs uppercase tracking-widest text-gold-400">
              Clinic Working Hours
            </h4>
            <div className="space-y-3">
              {clinicData.timings.schedule.map((item) => (
                <div key={item.days} className="border-b border-slate-800/80 pb-3 last:border-0">
                  <p className="text-white font-semibold text-xs">{item.days}</p>
                  <p className="text-slate-400 text-xs mt-1">☀️ {item.morning}</p>
                  <p className="text-slate-400 text-xs">🌙 {item.evening}</p>
                  <span
                    className={`badge text-[10px] mt-1.5 ${
                      item.status === 'Open'
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                        : 'bg-amber-950/80 text-amber-400 border border-amber-800/60'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-royal-950/80 rounded-xl p-3 border border-royal-800/60">
              <p className="text-gold-400 text-xs font-semibold">
                🕒 Daily Open Till 9:00 PM
              </p>
              <p className="text-slate-400 text-[11px] mt-0.5">
                Convenient evening appointments for working professionals & families.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Action */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-xs uppercase tracking-widest text-gold-400">
              Contact & Reach Us
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 leading-relaxed">
                  {clinicData.contact.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold-400 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${clinicData.contact.phone1}`}
                    className="text-white hover:text-gold-300 font-semibold block transition-colors"
                  >
                    {clinicData.contact.displayPhone1}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={16} className="text-gold-400 flex-shrink-0" />
                <p className="text-slate-300">
                  Mon–Sat: 10 AM–1:30 PM & 5–9 PM
                </p>
              </div>

              <a
                href={clinicData.contact.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-medium transition-colors text-xs pt-1"
              >
                <ExternalLink size={13} />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <button
              onClick={onBookClick}
              className="btn-gold text-xs py-2.5 mt-6 w-full justify-center shadow-lg"
            >
              Book an Appointment
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Developer Strip */}
      <div className="border-t border-slate-900 bg-black/70">
        <div className="container-custom py-5 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs text-slate-400">
          {/* Left: Copyright */}
          <p className="text-center md:text-left order-2 md:order-1">
            © {new Date().getFullYear()} Al-Shifa Multispecialty Dental Clinic, Pudupet, Chennai. All rights reserved.
          </p>

          {/* Middle: Developed by freelancer-Iniyan S (Centered) */}
          <div className="order-1 md:order-2 flex items-center justify-center text-center">
            <a
              href="https://www.iniyan-s.me/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 hover:text-gold-400 transition-colors font-medium inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 hover:border-gold-500/50 shadow-sm group"
            >
              <span>Developed by freelancer-Iniyan S</span>
              <ExternalLink size={12} className="text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: Google Profile */}
          <div className="order-3 flex items-center justify-center md:justify-end gap-2 pr-0 md:pr-16 lg:pr-20">
            <a
              href={clinicData.googleProfile}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold-300 flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink size={12} />
              <span>Google Profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
