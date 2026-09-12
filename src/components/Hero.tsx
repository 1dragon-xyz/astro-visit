import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Moon, Sparkles, Compass, Eye, ShieldAlert } from 'lucide-react';

interface HeroProps {
  onExploreDomes: () => void;
  onViewCalendar: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreDomes, onViewCalendar }) => {
  const [siderealTime, setSiderealTime] = useState('21:44:18 LST');
  const [hudInfoModal, setHudInfoModal] = useState<string | null>(null);

  // Compute live local sidereal time for Moab (approx 109.55° W longitude)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Moab is UTC-6 or UTC-7, local sidereal calculation:
      const utcHours = now.getUTCHours();
      const utcMinutes = now.getUTCMinutes();
      const utcSeconds = now.getUTCSeconds();

      // Calculation of local sidereal offset:
      const siderealHour = (utcHours + 2) % 24;
      const siderealMin = String(utcMinutes).padStart(2, '0');
      const siderealSec = String(utcSeconds).padStart(2, '0');
      setSiderealTime(`${String(siderealHour).padStart(2, '0')}:${siderealMin}:${siderealSec} LST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0f131c]">
      {/* Background Astrophotography Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="Nocturne Sanctuary Moab Geodesic Domes under the glowing arch of the Milky Way galaxy"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000 ease-out brightness-95"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeU7_VhOyQ32X4FMCnMPUBDFd3YnW3VwUUZu754c9kNqGrPrG9A0knpwtE3qqgq5vMR4CqxVoocr31-TuxA5ji58rxOS--1wAPV006y2XY4wfFUARuMpksmLYMYLePLCgWhIyrgaeaUafNCQ5cn-fNqi-B56y6_RMqlrb6rC5rbd4bRRne_0sxkaIRdao7xyejkz0aL0HmdrmWSpjiDsTHyT2wSiq7eNsog6uGwZtqCPmXu_DmaluP_g"
        />

        {/* Cosmic Vignette and Depth Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-[#0f131c]/50 to-[#0a0e17]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(15,19,28,0.4)_50%,rgba(15,19,28,0.92)_100%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 pt-32 md:pt-40 pb-12 flex flex-col justify-end min-h-[96vh]">
        {/* Micro-Badge Header */}
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#181b25]/85 backdrop-blur-xl border border-[#5dd9d9]/30 shadow-[0_0_20px_rgba(93,217,217,0.18)] mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-[#5dd9d9] animate-ping" />
          <span className="font-mono-data text-[11px] text-[#5dd9d9] tracking-[0.2em] uppercase font-bold">
            ✦ International Dark Sky Certified • Bortle Class 1 Sanctuary
          </span>
        </div>

        {/* Evocative Headline & Subtitle */}
        <div className="max-w-4xl flex flex-col gap-4 mb-8">
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-[#ffeecb] tracking-tight leading-[1.08] drop-shadow-2xl font-normal">
            Where the Red Earth Meets the Infinite Cosmos.
          </h1>
          <p className="font-sans-body text-lg md:text-xl text-[#dfe2ef]/90 max-w-2xl leading-relaxed font-light">
            An ultra-exclusive desert sanctuary nestled deep within Utah’s ancient canyonlands.
            Experience unfiltered cosmos through research-grade observatories, private heated
            geodesic glass villas, and bespoke celestial culinary journeys.
          </p>
        </div>

        {/* Dual Call to Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <button
            onClick={onExploreDomes}
            className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded bg-[#f4d06f] hover:bg-[#ffeecb] text-[#715800] font-mono-data text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(244,208,111,0.35)] hover:shadow-[0_0_45px_rgba(244,208,111,0.6)] cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span>Explore Private Domes</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          <button
            onClick={onViewCalendar}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded bg-[#181b25]/75 hover:bg-[#262a34] text-[#5dd9d9] font-mono-data text-xs font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-md border border-[#5dd9d9]/30 shadow-[0_0_25px_rgba(93,217,217,0.15)] cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#5dd9d9]" />
              <span>View Celestial Calendar</span>
            </span>
          </button>
        </div>

        {/* Interactive Live Sky Telemetry HUD Strip */}
        <div className="w-full bg-[#0a0e17]/85 backdrop-blur-2xl rounded-xl p-5 border border-white/10 shadow-[0_8px_36px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 items-center">
            {/* Live Sky Status */}
            <div
              onClick={() => setHudInfoModal('sky-status')}
              className="flex flex-col cursor-pointer group hover:bg-white/5 p-1.5 rounded transition-colors"
            >
              <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-widest flex items-center gap-1">
                Live Sky Status
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#5dd9d9] animate-pulse" />
                <span className="font-mono-data text-xs text-[#dfe2ef] font-bold group-hover:text-[#5dd9d9] transition-colors">
                  OPTIMAL ZENITH
                </span>
              </div>
            </div>

            {/* Moon Phase */}
            <div
              onClick={() => setHudInfoModal('moon-phase')}
              className="flex flex-col cursor-pointer group hover:bg-white/5 p-1.5 rounded transition-colors"
            >
              <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-widest">
                Moon Phase
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <Moon className="w-3.5 h-3.5 text-[#ffeecb]" />
                <span className="font-mono-data text-xs text-[#dfe2ef] group-hover:text-[#ffeecb] transition-colors">
                  3% Waxing Crescent
                </span>
              </div>
            </div>

            {/* SQM Darkness */}
            <div
              onClick={() => setHudInfoModal('sqm')}
              className="flex flex-col cursor-pointer group hover:bg-white/5 p-1.5 rounded transition-colors"
            >
              <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-widest">
                SQM Darkness
              </span>
              <span className="font-mono-data text-xs text-[#e6c363] mt-1 font-semibold">
                21.98 mag/arcsec²
              </span>
            </div>

            {/* Cloud Density */}
            <div
              onClick={() => setHudInfoModal('cloud')}
              className="flex flex-col cursor-pointer group hover:bg-white/5 p-1.5 rounded transition-colors"
            >
              <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-widest">
                Cloud Density
              </span>
              <span className="font-mono-data text-xs text-[#5dd9d9] mt-1 font-semibold">
                0.0% Cloudless
              </span>
            </div>

            {/* Bortle Scale */}
            <div
              onClick={() => setHudInfoModal('bortle')}
              className="flex flex-col cursor-pointer group hover:bg-white/5 p-1.5 rounded transition-colors"
            >
              <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-widest">
                Bortle Scale
              </span>
              <span className="font-mono-data text-xs text-[#ffeecb] mt-1 font-semibold">
                Class 1 (Pristine Void)
              </span>
            </div>

            {/* Sidereal Time */}
            <div className="flex flex-col p-1.5 rounded bg-black/30 border border-white/5">
              <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-widest flex items-center justify-between">
                <span>Sidereal Time</span>
                <span className="text-[9px] text-[#5dd9d9]">LIVE</span>
              </span>
              <span className="font-mono-data text-xs text-[#dfe2ef] mt-1 tracking-wider font-bold">
                {siderealTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Detail Modal */}
      {hudInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#181b25] border border-[#5dd9d9]/40 rounded-xl p-6 shadow-2xl animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#5dd9d9]" />
                <h3 className="font-mono-data text-xs uppercase tracking-wider text-[#ffeecb] font-bold">
                  Telemetry Instrument Detail
                </h3>
              </div>
              <button
                onClick={() => setHudInfoModal(null)}
                className="text-[#99907e] hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-sm">
              {hudInfoModal === 'sky-status' && (
                <>
                  <div className="font-serif-display text-lg text-[#ffeecb]">
                    Optimal Zenith Atmospheric Window
                  </div>
                  <p className="text-[#dfe2ef]/80 leading-relaxed">
                    Atmospheric scintillation is measured at &lt; 0.6 arcseconds. The tropospheric
                    boundary layer over our 5,120-ft desert plateau is laminar, yielding Hubble-adjacent
                    resolution on planetary and deep-sky observation targets.
                  </p>
                </>
              )}

              {hudInfoModal === 'sqm' && (
                <>
                  <div className="font-serif-display text-lg text-[#ffeecb]">
                    Sky Quality Meter (SQM-LU-DL)
                  </div>
                  <p className="text-[#dfe2ef]/80 leading-relaxed">
                    Reading: <span className="text-[#e6c363] font-bold">21.98 mag/arcsec²</span>.
                    The theoretical limit for natural night sky brightness from airglow is 22.0.
                    Zero light domes from Grand Junction or Salt Lake City infiltrate the canyon basin.
                  </p>
                </>
              )}

              {hudInfoModal === 'bortle' && (
                <>
                  <div className="font-serif-display text-lg text-[#ffeecb]">
                    Bortle Class 1: Excellent Dark-Sky Site
                  </div>
                  <p className="text-[#dfe2ef]/80 leading-relaxed">
                    The zodiacal light is visible, airglow is evident, M33 is a direct naked-eye
                    object with clear spatial structure, and the Milky Way casts discernible shadows
                    on the red desert sands.
                  </p>
                </>
              )}

              {hudInfoModal === 'moon-phase' && (
                <>
                  <div className="font-serif-display text-lg text-[#ffeecb]">
                    Lunar Matrix: 3% Waxing Crescent
                  </div>
                  <p className="text-[#dfe2ef]/80 leading-relaxed">
                    Moon sets at 19:42 local time, leaving 9.5 continuous hours of pitch-black astronomical
                    darkness. Optimal for emission nebula imaging (M42, NGC 7000) and galactic core vistas.
                  </p>
                </>
              )}

              {hudInfoModal === 'cloud' && (
                <>
                  <div className="font-serif-display text-lg text-[#ffeecb]">
                    Doppler & Infrared Thermal Satellite
                  </div>
                  <p className="text-[#dfe2ef]/80 leading-relaxed">
                    Relative humidity is 11%, dew point -4°C, precipitable water vapor column &lt; 2mm.
                    Zero cloud coverage forecast across the entire canyon corridor for the next 72 hours.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setHudInfoModal(null)}
              className="w-full mt-2 py-2.5 rounded bg-[#262a34] hover:bg-[#31353f] text-[#ffeecb] font-mono-data text-xs font-bold uppercase tracking-wider"
            >
              Acknowledge Instrument Data
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
