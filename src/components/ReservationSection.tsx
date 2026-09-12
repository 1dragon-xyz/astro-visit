import React, { useState, useEffect } from 'react';
import { Moon, ShieldCheck, Check, Calendar, Users, Home, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { DOME_HABITATS } from '../data/sanctuaryData';
import { BookingFormData } from '../types';

interface ReservationSectionProps {
  initialDomeId?: string;
  initialStartDate?: string;
  initialEndDate?: string;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  initialDomeId = 'kepler',
  initialStartDate = '2025-10-02',
  initialEndDate = '2025-10-05',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    arrivalDate: initialStartDate,
    departureDate: initialEndDate,
    domeId: initialDomeId,
    partySize: 2,
    guestName: 'Dr. Elena Vance',
    guestEmail: 'vance@cambridge-astro.org',
    curations: {
      deepSkyGuide: true,
      winePairing: true,
      heliportTransfer: false,
      spectrometryRig: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  // Update if parent props change
  useEffect(() => {
    if (initialDomeId) {
      setFormData((prev) => ({ ...prev, domeId: initialDomeId }));
    }
  }, [initialDomeId]);

  useEffect(() => {
    if (initialStartDate && initialEndDate) {
      setFormData((prev) => ({
        ...prev,
        arrivalDate: initialStartDate,
        departureDate: initialEndDate,
      }));
    }
  }, [initialStartDate, initialEndDate]);

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(formData.arrivalDate);
    const end = new Date(formData.departureDate);
    const diffTime = Math.max(0, end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 3;
  };

  const nights = calculateNights();
  const selectedDome = DOME_HABITATS.find((d) => d.id === formData.domeId) || DOME_HABITATS[0];
  const domeTotal = selectedDome.pricePerNight * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `NS-MOAB-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceCode(code);
    setSubmitted(true);
  };

  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 w-full" id="booking-console">
      <div className="w-full bg-[#181b25] border border-white/5 rounded-2xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Subtle glow accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#f4d06f]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#5dd9d9]/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12">
          {/* Left Explanatory Column */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#262a34] border border-[#f4d06f]/30 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#f4d06f]" />
                <span className="font-mono-data text-[10px] text-[#ffeecb] uppercase tracking-[0.2em] font-bold">
                  Bespoke Astronomical Sanctuary
                </span>
              </div>

              <h2 className="font-serif-display text-3xl md:text-5xl text-[#ffeecb] mb-4 font-normal">
                Reserve Your Sky Window
              </h2>

              <p className="font-sans-body text-sm md:text-base text-[#d0c5b2] leading-relaxed mb-8 font-light">
                Due to strict dark-sky preservation bylaws, Nocturne Sanctuary admits a maximum of 16
                guests concurrently across 3,500 desert acres. Reserve in coordination with moon phases
                for optimal viewing clarity.
              </p>
            </div>

            {/* Dynamic Moon Phase Recommendation Box */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#0a0e17]/90 border border-[#5dd9d9]/20 backdrop-blur-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#262a34] flex items-center justify-center text-[#ffeecb] shrink-0">
                  <Moon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono-data text-[10px] text-[#5dd9d9] uppercase tracking-wider font-bold">
                    Recommended Cycle
                  </span>
                  <span className="font-mono-data text-xs text-[#dfe2ef] font-semibold mt-0.5">
                    New Moon Window: Oct 01 — Oct 06
                  </span>
                  <span className="font-mono-data text-[11px] text-[#99907e] mt-0.5">
                    Sky Luminosity &lt; 2% • Unfiltered Milky Way
                  </span>
                </div>
              </div>

              {/* Investment Summary Pill */}
              <div className="p-4 rounded-xl bg-[#0f131c] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-wider block">
                    Curated Itinerary Estimate
                  </span>
                  <span className="font-serif-display text-xl text-[#ffeecb]">
                    ${domeTotal.toLocaleString()}{' '}
                    <span className="text-xs font-mono-data text-[#d0c5b2]">
                      ({nights} nights @ ${selectedDome.pricePerNight}/nt)
                    </span>
                  </span>
                </div>
                <span className="font-mono-data text-[10px] text-[#5dd9d9] bg-[#5dd9d9]/10 px-2.5 py-1 rounded border border-[#5dd9d9]/20">
                  All Optics Included
                </span>
              </div>
            </div>
          </div>

          {/* Right Interactive Booking Console Form */}
          <div className="lg:w-7/12">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Date Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="arrival-date"
                      className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#5dd9d9]" />
                      Arrival Cycle (Check-In)
                    </label>
                    <input
                      id="arrival-date"
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) =>
                        setFormData({ ...formData, arrivalDate: e.target.value })
                      }
                      className="w-full bg-[#0a0e17] px-4 py-3 rounded-lg font-mono-data text-xs text-[#ffeecb] border border-white/10 focus:outline-none focus:border-[#5dd9d9] transition-colors"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="departure-date"
                      className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#5dd9d9]" />
                      Departure Cycle (Check-Out)
                    </label>
                    <input
                      id="departure-date"
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) =>
                        setFormData({ ...formData, departureDate: e.target.value })
                      }
                      className="w-full bg-[#0a0e17] px-4 py-3 rounded-lg font-mono-data text-xs text-[#ffeecb] border border-white/10 focus:outline-none focus:border-[#5dd9d9] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Habitat Preference & Party Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="habitat-select"
                      className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold flex items-center gap-1.5"
                    >
                      <Home className="w-3.5 h-3.5 text-[#5dd9d9]" />
                      Habitat Preference
                    </label>
                    <select
                      id="habitat-select"
                      value={formData.domeId}
                      onChange={(e) => setFormData({ ...formData, domeId: e.target.value })}
                      className="w-full bg-[#0a0e17] px-4 py-3 rounded-lg font-mono-data text-xs text-[#dfe2ef] border border-white/10 focus:outline-none focus:border-[#5dd9d9] transition-colors"
                    >
                      {DOME_HABITATS.map((dome) => (
                        <option key={dome.id} value={dome.id} className="bg-[#181b25] text-white">
                          {dome.name} (${dome.pricePerNight.toLocaleString()}/night)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="party-size-select"
                      className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold flex items-center gap-1.5"
                    >
                      <Users className="w-3.5 h-3.5 text-[#5dd9d9]" />
                      Party Size
                    </label>
                    <select
                      id="party-size-select"
                      value={formData.partySize}
                      onChange={(e) =>
                        setFormData({ ...formData, partySize: parseInt(e.target.value) })
                      }
                      className="w-full bg-[#0a0e17] px-4 py-3 rounded-lg font-mono-data text-xs text-[#dfe2ef] border border-white/10 focus:outline-none focus:border-[#5dd9d9] transition-colors"
                    >
                      <option value="1" className="bg-[#181b25]">
                        1 Solitary Retreater
                      </option>
                      <option value="2" className="bg-[#181b25]">
                        2 Astrophiles (Double Occupancy)
                      </option>
                      <option value="4" className="bg-[#181b25]">
                        3–4 Guests (Zenith Pavilion Exclusive)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Guest Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="guest-name"
                      className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold"
                    >
                      Primary Guest Full Name
                    </label>
                    <input
                      id="guest-name"
                      type="text"
                      value={formData.guestName}
                      onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                      placeholder="Dr. Elena Vance"
                      className="w-full bg-[#0a0e17] px-4 py-3 rounded-lg font-sans-body text-sm text-[#dfe2ef] border border-white/10 focus:outline-none focus:border-[#5dd9d9] placeholder:text-[#99907e] transition-colors"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="guest-email"
                      className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold"
                    >
                      Private Dispatch Email
                    </label>
                    <input
                      id="guest-email"
                      type="email"
                      value={formData.guestEmail}
                      onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                      placeholder="vance@cambridge-astro.org"
                      className="w-full bg-[#0a0e17] px-4 py-3 rounded-lg font-sans-body text-sm text-[#dfe2ef] border border-white/10 focus:outline-none focus:border-[#5dd9d9] placeholder:text-[#99907e] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Bespoke Curations Checkboxes */}
                <div className="flex flex-col gap-2 mt-2">
                  <span className="font-mono-data text-[10px] text-[#d0c5b2] uppercase tracking-wider font-bold">
                    Bespoke Curations
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Checkbox 1 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17]/70 hover:bg-[#0a0e17] border border-white/5 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.curations.deepSkyGuide}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            curations: { ...formData.curations, deepSkyGuide: e.target.checked },
                          })
                        }
                        className="w-4 h-4 rounded accent-[#f4d06f]"
                      />
                      <span className="font-mono-data text-[11px] text-[#dfe2ef]">
                        Deep-Sky Nebula Astrophotography Guide
                      </span>
                    </label>

                    {/* Checkbox 2 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17]/70 hover:bg-[#0a0e17] border border-white/5 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.curations.winePairing}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            curations: { ...formData.curations, winePairing: e.target.checked },
                          })
                        }
                        className="w-4 h-4 rounded accent-[#f4d06f]"
                      />
                      <span className="font-mono-data text-[11px] text-[#dfe2ef]">
                        Nocturnal Wine Pairing Menu
                      </span>
                    </label>

                    {/* Checkbox 3 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17]/70 hover:bg-[#0a0e17] border border-white/5 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.curations.heliportTransfer}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            curations: {
                              ...formData.curations,
                              heliportTransfer: e.target.checked,
                            },
                          })
                        }
                        className="w-4 h-4 rounded accent-[#f4d06f]"
                      />
                      <span className="font-mono-data text-[11px] text-[#dfe2ef]">
                        Private Heliport Transfer (Moab / SLC)
                      </span>
                    </label>

                    {/* Checkbox 4 */}
                    <label className="flex items-center gap-3 p-3 rounded-lg bg-[#0a0e17]/70 hover:bg-[#0a0e17] border border-white/5 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.curations.spectrometryRig}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            curations: {
                              ...formData.curations,
                              spectrometryRig: e.target.checked,
                            },
                          })
                        }
                        className="w-4 h-4 rounded accent-[#f4d06f]"
                      />
                      <span className="font-mono-data text-[11px] text-[#dfe2ef]">
                        Personal Spectrometry & Planetary Rig
                      </span>
                    </label>
                  </div>
                </div>

                {/* Submit Action Strip */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[#99907e]">
                    <ShieldCheck className="w-5 h-5 text-[#5dd9d9]" />
                    <span className="font-mono-data text-[11px]">
                      Discretion Guaranteed. Full Sky Guarantee.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#ffeecb] hover:bg-[#f4d06f] text-[#3d2e00] font-mono-data text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(244,208,111,0.35)] hover:shadow-[0_0_36px_rgba(244,208,111,0.6)] cursor-pointer"
                  >
                    Inquire for Availability
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Box */
              <div className="p-8 rounded-xl bg-[#0a0e17] border border-[#f4d06f]/40 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#ffeecb] flex items-center justify-center text-[#3d2e00] mb-4 shadow-[0_0_25px_rgba(244,208,111,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="font-mono-data text-[10px] text-[#5dd9d9] uppercase tracking-[0.2em] font-bold">
                  Sky Window Transmission Confirmed
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl text-[#ffeecb] mt-2 mb-3">
                  Celestial Reservation Dossier Dispatched
                </h3>
                <p className="font-sans-body text-sm text-[#dfe2ef]/80 max-w-lg mb-6 leading-relaxed font-light">
                  Thank you, <span className="text-[#ffeecb] font-medium">{formData.guestName}</span>.
                  Your retreat inquiry for <span className="text-[#5dd9d9] font-medium">{selectedDome.name}</span>{' '}
                  from <span className="text-[#ffeecb]">{formData.arrivalDate}</span> to{' '}
                  <span className="text-[#ffeecb]">{formData.departureDate}</span> has been logged with
                  reference <strong className="font-mono-data text-[#ffeecb]">{referenceCode}</strong>.
                </p>

                <div className="w-full max-w-md p-4 rounded bg-[#181b25] border border-white/10 font-mono-data text-xs text-left space-y-2 mb-6 text-[#d0c5b2]">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span>Assigned Dome:</span>
                    <span className="text-[#ffeecb] font-bold">{selectedDome.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span>Astronomical Window:</span>
                    <span>{nights} Nights ({formData.arrivalDate})</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span>Contact Channel:</span>
                    <span className="text-[#5dd9d9]">{formData.guestEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Head Astronomer Contact:</span>
                    <span className="text-white">Within 4 Hours</span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded bg-[#262a34] hover:bg-[#31353f] text-[#ffeecb] font-mono-data text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
