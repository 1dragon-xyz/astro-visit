/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DomesSection } from './components/DomesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EphemerisSection } from './components/EphemerisSection';
import { PressSection } from './components/PressSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { GearSpecsModal } from './components/GearSpecsModal';
import { DomeDetailsModal } from './components/DomeDetailsModal';
import { DomeHabitat, CelestialExpedition } from './types';

export default function App() {
  const [selectedDomeForModal, setSelectedDomeForModal] = useState<DomeHabitat | null>(null);
  const [isGearModalOpen, setIsGearModalOpen] = useState(false);
  const [reservationDomeId, setReservationDomeId] = useState('kepler');
  const [reservationStartDate, setReservationStartDate] = useState('2025-10-02');
  const [reservationEndDate, setReservationEndDate] = useState('2025-10-05');
  const [activeSection, setActiveSection] = useState('experience');

  // Scroll to booking console helper
  const scrollToReservation = () => {
    const el = document.getElementById('booking-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDomes = () => {
    const el = document.getElementById('domes-collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCalendar = () => {
    const el = document.getElementById('celestial-calendar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectDome = (domeId: string) => {
    setReservationDomeId(domeId);
    scrollToReservation();
  };

  const handleSelectExpedition = (expedition: CelestialExpedition) => {
    setReservationStartDate(expedition.startDate);
    setReservationEndDate(expedition.endDate);
    scrollToReservation();
  };

  // Section observer to update active nav state
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const domesEl = document.getElementById('domes-collection');
      const calendarEl = document.getElementById('celestial-calendar');
      const experienceEl = document.getElementById('astronomy-experience');

      if (domesEl && scrollY >= domesEl.offsetTop - 150 && scrollY < (calendarEl?.offsetTop ?? 9999) - 150) {
        setActiveSection('domes');
      } else if (calendarEl && scrollY >= calendarEl.offsetTop - 150 && scrollY < (experienceEl?.offsetTop ?? 9999) - 150) {
        setActiveSection('calendar');
      } else if (experienceEl && scrollY >= experienceEl.offsetTop - 150) {
        setActiveSection('experience');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ef] selection:bg-[#f4d06f] selection:text-[#715800]">
      {/* Sticky Atmospheric Header */}
      <Header
        onOpenReservation={scrollToReservation}
        activeSection={activeSection}
      />

      {/* Main Sanctuary Content Flow */}
      <main className="w-full">
        {/* Hero Section with Milky Way Bleed & Live Telemetry HUD */}
        <Hero
          onExploreDomes={scrollToDomes}
          onViewCalendar={scrollToCalendar}
        />

        {/* Architectural Domes & Sanctuaries Grid */}
        <DomesSection
          onSelectDome={handleSelectDome}
          onOpenSpecs={(dome) => setSelectedDomeForModal(dome)}
        />

        {/* The Nocturne Astronomy Experience (3 Pillars & Gear Bar) */}
        <ExperienceSection
          onOpenGearSpecs={() => setIsGearModalOpen(true)}
        />

        {/* Live Celestial Calendar & Ephemeris Expeditions */}
        <EphemerisSection
          onSelectExpedition={handleSelectExpedition}
        />

        {/* Guest Accolades & Editorial Press */}
        <PressSection />

        {/* Interactive Sky Window Reservation & Consultation Console */}
        <ReservationSection
          initialDomeId={reservationDomeId}
          initialStartDate={reservationStartDate}
          initialEndDate={reservationEndDate}
        />
      </main>

      {/* Sanctuary Footer */}
      <Footer />

      {/* Modals */}
      <GearSpecsModal
        isOpen={isGearModalOpen}
        onClose={() => setIsGearModalOpen(false)}
      />

      <DomeDetailsModal
        dome={selectedDomeForModal}
        onClose={() => setSelectedDomeForModal(null)}
        onReserve={(domeId) => {
          setReservationDomeId(domeId);
          scrollToReservation();
        }}
      />
    </div>
  );
}
