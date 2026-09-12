import React, { useState } from 'react';
import { Compass, ShieldCheck, Mail, Check, X, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="w-full bg-[#0a0e17] text-[#dfe2ef] relative mt-20 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-serif-display text-3xl text-[#ffeecb] font-normal">
                Nocturne Sanctuary
              </span>
            </div>

            <p className="font-sans-body text-sm text-[#d0c5b2] max-w-md leading-relaxed font-light">
              An ultra-luxury contemplative haven carved into the primordial red canyon basins of Moab.
              Dedicated to the sanctity of absolute dark skies, astronomical observation, and silent desert
              stillness.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181b25] border border-[#5dd9d9]/20">
                <span className="inline-block w-2 h-2 rounded-full bg-[#5dd9d9] animate-pulse" />
                <span className="font-mono-data text-[11px] text-[#5dd9d9] font-bold tracking-wider">
                  BORTLE CLASS 1 CERTIFIED
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181b25] text-[#d0c5b2] font-mono-data text-[11px] border border-white/5">
                <Compass className="w-3.5 h-3.5 text-[#ffeecb]" />
                <span>38.5733° N, 109.5498° W • 5,120 FT</span>
              </div>
            </div>
          </div>

          {/* Cosmic Quarters Links Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-mono-data text-xs text-[#ffeecb] uppercase tracking-[0.2em] font-bold">
              Cosmic Quarters
            </span>
            <div className="flex flex-col space-y-2.5 font-sans-body text-sm text-[#d0c5b2]">
              <a href="#domes-collection" className="hover:text-[#ffeecb] transition-colors">
                Zenith Observatory Pods
              </a>
              <a href="#domes-collection" className="hover:text-[#ffeecb] transition-colors">
                Glass Eclipse Domes
              </a>
              <a href="#astronomy-experience" className="hover:text-[#ffeecb] transition-colors">
                Deep-Sky Reticle Deck
              </a>
              <a href="#astronomy-experience" className="hover:text-[#ffeecb] transition-colors">
                Umbra Gastronomy & Wine Cave
              </a>
              <a href="#astronomy-experience" className="hover:text-[#ffeecb] transition-colors">
                Night Sky Curators & Astrophotography
              </a>
            </div>
          </div>

          {/* Celestial Ephemeris Dispatch Subscription */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="font-mono-data text-xs text-[#ffeecb] uppercase tracking-[0.2em] font-bold">
              Celestial Ephemeris Dispatch
            </span>
            <p className="font-sans-body text-sm text-[#d0c5b2] leading-relaxed font-light">
              Receive seasonal meteor shower bulletins, solar eclipse advisories, and private planetary
              telescope availability.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="astronomy@sanctuary.void"
                required
                className="flex-1 bg-[#181b25] px-4 py-3 font-mono-data text-xs text-[#dfe2ef] placeholder:text-[#99907e] border border-white/10 rounded-lg focus:outline-none focus:border-[#5dd9d9] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#f4d06f] hover:bg-[#ffeecb] text-[#715800] font-mono-data text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_18px_rgba(244,208,111,0.25)] flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>

            <span className="font-mono-data text-[11px] text-[#99907e]">
              Transmitted strictly in sync with new moon cycles. Zero terrestrial clutter.
            </span>
          </div>
        </div>

        {/* Bottom Legal / Protocol Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-data text-[#99907e]">
          <div>
            <span>© 2025 Nocturne Sanctuary Moab. Dark Sky Reserve.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => setModalType('protocol')}
              className="uppercase hover:text-[#ffeecb] transition-colors cursor-pointer"
            >
              Dark-Sky Preservation Protocol
            </button>
            <button
              onClick={() => setModalType('charter')}
              className="uppercase hover:text-[#ffeecb] transition-colors cursor-pointer"
            >
              Sanctuary Charter
            </button>
            <button
              onClick={() => setModalType('registry')}
              className="uppercase hover:text-[#ffeecb] transition-colors cursor-pointer"
            >
              Astronomical Data Registry
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Protocol Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-[#181b25] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl animate-in zoom-in-95 text-[#dfe2ef]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-serif-display text-2xl text-[#ffeecb]">
                {modalType === 'protocol' && 'Dark-Sky Preservation Protocol'}
                {modalType === 'charter' && 'Nocturne Sanctuary Charter'}
                {modalType === 'registry' && 'Astronomical Data Registry'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="text-[#99907e] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm font-sans-body text-[#d0c5b2] leading-relaxed">
              {modalType === 'protocol' && (
                <>
                  <p>
                    All outdoor and indoor illumination throughout the 3,500-acre reserve is strictly
                    restricted to narrowband red spectrum (&gt; 620nm) after astronomical dusk.
                  </p>
                  <p>
                    Vehicles must switch off high-beams upon crossing the exterior canyon gate.
                    Automated blinds in all glass domes lock in polarization mode to prevent interior
                    screen spillover into the night sky.
                  </p>
                </>
              )}

              {modalType === 'charter' && (
                <>
                  <p>
                    Nocturne Sanctuary was chartered in 2021 as a joint research retreat and luxury
                    haven dedicated to human contemplation in direct conversation with deep time and
                    cosmic geometry.
                  </p>
                  <p>
                    A portion of each guest reservation is directly endowed to the DarkSky
                    International Colorado Plateau preservation fund.
                  </p>
                </>
              )}

              {modalType === 'registry' && (
                <>
                  <p>
                    All deep-sky photometric data gathered by the Planewave CDK700 observatories is
                    contributed into the Minor Planet Center and AAVSO variable star photometric
                    database under sanctuary observatory code NS-MOAB.
                  </p>
                  <p>
                    Guests receive raw FITS image sets and calibrated stacks of all objects observed
                    during their residency.
                  </p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              className="w-full mt-2 py-2.5 rounded bg-[#262a34] hover:bg-[#31353f] text-[#ffeecb] font-mono-data text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
