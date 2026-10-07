import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutClinic from './components/AboutClinic';
import BeforeAfterShowcase from './components/BeforeAfterShowcase';
import Services from './components/Services';
import GoogleReviews from './components/GoogleReviews';
import AppointmentBooking from './components/AppointmentBooking';
import LocationAndHours from './components/LocationAndHours';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-800 antialiased overflow-x-hidden w-full max-w-full bg-dental-cream selection:bg-gold-500 selection:text-slate-950">
      <Navbar onBookClick={() => handleOpenBooking()} />

      <main className="flex-1">
        <Hero onBookClick={() => handleOpenBooking()} />
        <AboutClinic onBookClick={() => handleOpenBooking()} />
        <BeforeAfterShowcase onBookClick={() => handleOpenBooking('Smile Makeover & Diastema Closure')} />
        <Services onSelectService={(service) => handleOpenBooking(service)} />
        <GoogleReviews />
        <AppointmentBooking isModal={false} />
        <LocationAndHours />
        <FaqSection />
      </main>

      <Footer onBookClick={() => handleOpenBooking()} />

      <FloatingActions onBookClick={() => handleOpenBooking()} />

      {isModalOpen && (
        <AppointmentBooking
          isModal={true}
          preselectedService={selectedService}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  );
}
