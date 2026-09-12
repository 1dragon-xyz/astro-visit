import React from 'react';
import { ArrowRight, Sparkles, Moon, Star, Compass } from 'lucide-react';
import { CELESTIAL_EXPEDITIONS } from '../data/sanctuaryData';
import { CelestialExpedition } from '../types';

interface EphemerisSectionProps {
  onSelectExpedition: (expedition: CelestialExpedition) => void;
}

export const EphemerisSection: React.FC<EphemerisSectionProps> = ({ onSelectExpedition }) => {
  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 w-full" id="celestial-calendar">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono-data text-[11px] text-[#5dd9d9] uppercase tracking-[0.2em] font-bold flex items-center gap-2">
            <Star className="w-3.5 h-3.5 text-[#5dd9d9]" />
            Astronomical Ephemeris 2025
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#ffeecb] font-normal">
            Curated Celestial Expeditions
          </h2>
        </div>
        <span className="font-mono-data text-xs text-[#d0c5b2] tracking-wider uppercase">
          Synchronized to Solar & Lunar Matrix
        </span>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CELESTIAL_EXPEDITIONS.map((exp) => {
          const isPerseids = exp.id === 'perseids';
          const isNewMoon = exp.id === 'new-moon';
          const isOrionids = exp.id === 'orionids';
          const isGeminids = exp.id === 'geminids';

          return (
            <div
              key={exp.id}
              className={`p-6 rounded-xl bg-[#181b25] border border-white/5 flex flex-col justify-between shadow-lg group hover:bg-[#1c2029] transition-all duration-300 hover:-translate-y-1 ${
                isNewMoon
                  ? 'border-[#ffeecb]/30 shadow-[0_0_30px_rgba(244,208,111,0.12)]'
                  : 'hover:border-white/20'
              }`}
            >
              <div>
                {/* Top Badge & Date Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono-data text-xs font-bold uppercase tracking-wider ${
                      isPerseids
                        ? 'text-[#ffeecb]'
                        : isNewMoon
                        ? 'text-[#5dd9d9]'
                        : isOrionids
                        ? 'text-[#daccff]'
                        : 'text-[#ffeecb]'
                    }`}
                  >
                    {exp.dateRange}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#262a34] text-[#5dd9d9] font-mono-data text-[10px] font-bold uppercase tracking-wider border border-white/5">
                    {exp.badge}
                  </span>
                </div>

                <h3 className="font-serif-display text-xl text-[#dfe2ef] group-hover:text-[#ffeecb] transition-colors leading-snug font-medium mb-3">
                  {exp.title}
                </h3>

                <p className="font-sans-body text-xs md:text-sm text-[#d0c5b2] leading-relaxed font-light">
                  {exp.description}
                </p>
              </div>

              {/* Bottom Details & Selection CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-mono-data text-[11px] text-[#99907e] flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-[#5dd9d9]" />
                  {exp.moonStatus}
                </span>

                <button
                  onClick={() => onSelectExpedition(exp)}
                  className={`font-mono-data text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer group-hover:underline ${
                    isNewMoon
                      ? 'text-[#5dd9d9] hover:text-[#7cf5f5]'
                      : isOrionids
                      ? 'text-[#daccff] hover:text-white'
                      : 'text-[#ffeecb] hover:text-white'
                  }`}
                >
                  <span>Select Window</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
