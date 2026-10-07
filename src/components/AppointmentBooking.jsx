import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, User, Phone, ChevronRight, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';
import { clinicData } from '../data/clinicData';
import { gsap } from 'gsap';

const timeSlots = {
  morning: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM'],
  evening: ['05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'],
};

const services = clinicData.services.map((s) => s.title);

export default function AppointmentBooking({ isModal = false, onClose, preselectedService = '' }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: preselectedService || services[0],
    date: '',
    session: 'morning',
    time: timeSlots.morning[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isModal && modalRef.current) {
      gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        contentRef.current,
        { y: 50, scale: 0.95, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out', delay: 0.05 }
      );
    }
    if (preselectedService) {
      setForm((f) => ({ ...f, service: preselectedService }));
    }
  }, [isModal, preselectedService]);

  const handleClose = () => {
    if (isModal && modalRef.current) {
      gsap.to(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: onClose,
      });
    }
  };

  const update = (key, val) => {
    if (key === 'session') {
      setForm((f) => ({
        ...f,
        session: val,
        time: timeSlots[val][0],
      }));
    } else {
      setForm((f) => ({ ...f, [key]: val }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Al-Shifa Multispecialty Dental Clinic! 🦷\n\n` +
      `I would like to book an appointment with Dr. Afreen Jannath.A:\n\n` +
      `👤 Patient Name: ${form.name}\n` +
      `📞 Contact Phone: ${form.phone}\n` +
      `🦷 Requested Service: ${form.service}\n` +
      `📅 Preferred Date: ${form.date || 'Earliest Available'}\n` +
      `⏰ Session/Time: ${form.time} (${form.session === 'morning' ? 'Morning 10 AM-1:30 PM' : 'Evening 5 PM-9 PM'})\n` +
      `💬 Symptoms/Notes: ${form.message || 'No additional notes'}\n\n` +
      `Please confirm my appointment slot. Thank you!`
    );

    window.open(`https://wa.me/${clinicData.contact.whatsappNumber}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const FormContent = () => (
    <div>
      {submitted ? (
        <div className="text-center py-10 px-4 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
            ✓
          </div>
          <h3 className="font-display font-bold text-2xl text-royal-950">
            Appointment Request Sent!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Your booking request has been forwarded to our clinic desk on WhatsApp. We will confirm your preferred timing shortly.
          </p>

          <div className="bg-royal-50 rounded-2xl p-4 max-w-sm mx-auto text-left text-xs space-y-1.5 border border-royal-100">
            <p><strong className="text-royal-950">Patient:</strong> {form.name}</p>
            <p><strong className="text-royal-950">Treatment:</strong> {form.service}</p>
            <p><strong className="text-royal-950">Date & Slot:</strong> {form.date || 'Today'} · {form.time}</p>
            <p><strong className="text-royal-950">Clinic Contact:</strong> {clinicData.contact.displayPhone1}</p>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <a
              href={`tel:${clinicData.contact.phone1}`}
              className="btn-primary text-sm py-2.5 px-5"
            >
              <Phone size={15} /> Call Clinic Directly
            </a>
            {isModal && (
              <button
                onClick={handleClose}
                className="btn-outline text-sm py-2.5 px-5"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Patient Name *
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Iniyan S"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-600 text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 94986 58545"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-600 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Treatment Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Select Dental Treatment *
            </label>
            <select
              value={form.service}
              onChange={(e) => update('service', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-600 text-sm bg-white"
            >
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Date & Session */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-600 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Clinic Session
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => update('session', 'morning')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    form.session === 'morning'
                      ? 'bg-royal-800 text-white border-royal-800'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  ☀️ Morning (10–1:30)
                </button>
                <button
                  type="button"
                  onClick={() => update('session', 'evening')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-colors ${
                    form.session === 'evening'
                      ? 'bg-royal-800 text-white border-royal-800'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  🌙 Evening (5–9 PM)
                </button>
              </div>
            </div>
          </div>

          {/* Time Slot Picker */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Available Time Slots ({form.session === 'morning' ? 'Morning Shift' : 'Evening Shift'})
            </label>
            <div className="flex flex-wrap gap-2">
              {timeSlots[form.session].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => update('time', slot)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    form.time === slot
                      ? 'bg-gold-500 text-slate-950 font-bold ring-2 ring-gold-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
              Symptoms / Questions (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Toothache on lower molar, tooth gap enquiry, bleeding gums..."
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-royal-600 text-sm resize-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full btn-gold text-base py-3.5 justify-center shadow-lg"
            >
              <MessageCircle size={18} />
              <span>Confirm & Book on WhatsApp</span>
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Instant appointment confirmation directly with our clinic desk.
            </p>
          </div>
        </form>
      )}
    </div>
  );

  // If used as modal
  if (isModal) {
    return (
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
      >
        <div
          ref={contentRef}
          className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-slate-100 relative"
        >
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="mb-6">
            <span className="badge bg-gold-100 text-gold-900 border border-gold-300 text-xs mb-2">
              Quick Appointment
            </span>
            <h2 className="font-display font-bold text-2xl text-royal-950">
              Book a Dental Consultation
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Al-Shifa Multispecialty Dental Clinic · Pudupet, Egmore
            </p>
          </div>

          <FormContent />
        </div>
      </div>
    );
  }

  // Inline Section Mode
  return (
    <section id="book" className="section-pad bg-white border-b border-slate-200/60 relative scroll-mt-20 sm:scroll-mt-24">
      <div className="container-custom">
        <div className="bg-royal-950 text-white rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12 border border-royal-900">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left promo */}
            <div className="lg:col-span-5 text-white space-y-6">
              <div>
                <span className="section-kicker text-gold-400 mb-2">
                  Direct Appointment Desk
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight">
                  Schedule Your Consultation With Dr. Afreen Jannath
                </h2>
              </div>
              <p className="text-royal-200 text-sm sm:text-base leading-relaxed">
                Prioritize your dental health with Chennai's trusted Endodontist and Laser Specialist. Painless protocols, hospital-grade sterilization, and personalized treatment plans.
              </p>

              <div className="space-y-3 pt-1 text-sm text-royal-100 border-t border-royal-900/80">
                <div className="flex items-center gap-2.5">
                  <span className="text-gold-400 font-bold">✓</span>
                  <span>Zero Waiting Time with confirmed appointment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-gold-400 font-bold">✓</span>
                  <span>Digital Radiography & Precise Diagnosis</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-gold-400 font-bold">✓</span>
                  <span>Direct WhatsApp confirmation in minutes</span>
                </div>
              </div>

              {/* Emergency Call Box */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gold-300 font-semibold">Immediate Assistance?</p>
                  <p className="text-sm font-bold text-white">Call Dr. Desk Directly</p>
                </div>
                <a
                  href={`tel:${clinicData.contact.phone1}`}
                  className="btn-gold text-xs px-4 py-2"
                >
                  <Phone size={13} /> {clinicData.contact.displayPhone1}
                </a>
              </div>
            </div>

            {/* Right form card */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <FormContent />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
