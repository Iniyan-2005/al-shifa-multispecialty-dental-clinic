import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { clinicData } from '../data/clinicData';

export default function Navbar({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Doctor', href: '#about' },
    { label: 'Treatments', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top emergency & timing bar */}
      <div
        className={`bg-royal-950 text-royal-100 text-xs px-4 border-b border-royal-900/60 hidden md:block transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0 border-b-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-gold-400" />
              <span>{clinicData.contact.shortAddress}</span>
            </span>
            <span className="text-royal-300/60">|</span>
            <span className="text-royal-200">
              🕒 Open Mon–Sat: 10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${clinicData.contact.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
            >
              <MessageCircle size={13} /> WhatsApp: {clinicData.contact.displayPhone1}
            </a>
            <span className="text-royal-300/60">|</span>
            <span className="text-gold-400 font-medium">5.0 ★ Verified on Google</span>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white py-4 shadow-sm'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-md group-hover:scale-105 transition-transform border border-gold-500/30 flex-shrink-0 bg-royal-950">
              <img
                src="/logo.svg"
                alt="Al-Shifa Multispecialty Dental Clinic Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-royal-900 tracking-tight text-lg sm:text-xl">
                  AL-SHIFA
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-gold-100 text-gold-800 border border-gold-300">
                  5.0 ★
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-royal-700 font-semibold tracking-wider uppercase">
                Multispecialty Dental Clinic
              </p>
              <p className="text-[9px] text-slate-500 hidden sm:block">
                அல்-ஷிஃபா பல் சிகிச்சையகம்
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-royal-800 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-gold-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${clinicData.contact.phone1}`}
              className="flex items-center gap-2 text-royal-800 hover:text-royal-900 px-3 py-2 rounded-full hover:bg-royal-50 transition-colors text-sm font-semibold"
            >
              <div className="w-8 h-8 rounded-full bg-royal-100 flex items-center justify-center">
                <Phone size={14} className="text-royal-800" />
              </div>
              <span>{clinicData.contact.displayPhone1}</span>
            </a>

            <button
              onClick={onBookClick}
              className="btn-gold text-xs sm:text-sm px-4 sm:px-5 py-2.5 shadow-sm"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${clinicData.contact.phone1}`}
              className="p-2 rounded-lg bg-royal-50 text-royal-800"
              aria-label="Call clinic"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-4 pb-6 shadow-xl animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-royal-800 py-1.5 border-b border-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="btn-gold w-full justify-center text-sm py-3"
                >
                  <Calendar size={16} /> Book Appointment
                </button>
                <a
                  href={`https://wa.me/${clinicData.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-semibold text-sm"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
