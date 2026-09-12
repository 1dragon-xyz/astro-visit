import React from 'react';
import { QrCode, Moon, Utensils, Camera, Download, Sparkles, Orbit, ShieldCheck } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenGearSpecs: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenGearSpecs }) => {
  return (
    <section className="w-full bg-[#0a0e17] py-20 border-y border-white/5" id="astronomy-experience">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181b25] border border-[#5dd9d9]/20 mb-3">
            <Orbit className="w-3.5 h-3.5 text-[#5dd9d9]" />
            <span className="font-mono-data text-[11px] text-[#5dd9d9] uppercase tracking-[0.2em] font-bold">
              Unfiltered Planetary Sanctuary
            </span>
          </div>
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#ffeecb] font-normal">
            The Nocturne Astronomy Experience
          </h2>
          <p className="font-sans-body text-base text-[#d0c5b2] mt-4 leading-relaxed max-w-2xl font-light">
            A scientific haven engineered in synergy with NASA astrophysics alumni to reconnect human
            perception with deep cosmological history.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Research-Grade Optics */}
          <div className="flex flex-col p-7 rounded-xl bg-[#181b25] border border-white/5 shadow-md relative overflow-hidden group hover:border-[#5dd9d9]/30 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#262a34] flex items-center justify-center text-[#5dd9d9] mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <QrCode className="w-7 h-7" />
            </div>
            <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-[0.18em] mb-2 font-bold">
              Research-Grade Optics
            </span>
            <h3 className="font-serif-display text-2xl text-[#dfe2ef] mb-3 group-hover:text-[#5dd9d9] transition-colors">
              Planewave CDK700 Observatories
            </h3>
            <p className="font-sans-body text-sm text-[#d0c5b2] leading-relaxed mb-6 font-light">
              Access twin 0.7-meter Ritchey-Chrétien telescopes housed in automated carbon-fiber domes.
              Inspect spiral arms in the Whirlpool Galaxy and the pillars of stellar nurseries with
              resident astrophysicists.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[#ffeecb] font-mono-data text-xs">
              <span className="text-[#99907e]">Resolving power:</span>
              <span className="font-bold text-[#5dd9d9]">0.17 arcsec</span>
            </div>
          </div>

          {/* Pillar 2: Protected Wilderness */}
          <div className="flex flex-col p-7 rounded-xl bg-[#181b25] border border-white/5 shadow-md relative overflow-hidden group hover:border-[#ffeecb]/30 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#262a34] flex items-center justify-center text-[#ffeecb] mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <Moon className="w-7 h-7" />
            </div>
            <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-[0.18em] mb-2 font-bold">
              Protected Wilderness
            </span>
            <h3 className="font-serif-display text-2xl text-[#dfe2ef] mb-3 group-hover:text-[#ffeecb] transition-colors">
              Bortle 1 Pristine Voids
            </h3>
            <p className="font-sans-body text-sm text-[#d0c5b2] leading-relaxed mb-6 font-light">
              Encompassing 3,500 private acres directly flanking Canyonlands National Park.
              Guaranteed zero artificial photometric light spills within a 45-mile radius, preserving
              naked-eye airglow and zodiacal light.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[#5dd9d9] font-mono-data text-xs">
              <span className="text-[#99907e]">Naked Eye Limit:</span>
              <span className="font-bold text-[#ffeecb]">Mag +7.8</span>
            </div>
          </div>

          {/* Pillar 3: Nocturnal Gastronomy */}
          <div className="flex flex-col p-7 rounded-xl bg-[#181b25] border border-white/5 shadow-md relative overflow-hidden group hover:border-[#daccff]/30 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-[#262a34] flex items-center justify-center text-[#daccff] mb-6 group-hover:scale-110 transition-transform shadow-inner">
              <Utensils className="w-7 h-7" />
            </div>
            <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-[0.18em] mb-2 font-bold">
              Nocturnal Gastronomy
            </span>
            <h3 className="font-serif-display text-2xl text-[#dfe2ef] mb-3 group-hover:text-[#daccff] transition-colors">
              Sensory Celestial Dining
            </h3>
            <p className="font-sans-body text-sm text-[#d0c5b2] leading-relaxed mb-6 font-light">
              Multi-course nocturnal tasting feasts prepared by Michelin-recognized chefs over piñon
              wood coals. Dine by starlight with red-spectrum illuminators, complemented by rare
              low-intervention biodynamic vintages.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-[#daccff] font-mono-data text-xs">
              <span className="text-[#99907e]">Nocturnal Format:</span>
              <span className="font-bold text-[#daccff]">7-Course Sensory Journey</span>
            </div>
          </div>
        </div>

        {/* Astrophotography Metric HUD Bar */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-[#1c2029] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#0a0e17] border border-[#5dd9d9]/30 flex items-center justify-center text-[#5dd9d9] shrink-0">
              <Camera className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif-display text-xl md:text-2xl text-[#dfe2ef]">
                Astrophotography Equipment Concierge Included
              </h4>
              <p className="font-sans-body text-sm text-[#d0c5b2] mt-1 font-light">
                Sony α7R V bodies, cooled CMOS sensors, tracking equatorial mounts, and ZWO ASI
                cameras provided complimentary to all dome guests.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenGearSpecs}
            className="px-6 py-3 rounded bg-[#31353f] hover:bg-[#ffeecb] text-[#5dd9d9] hover:text-[#3d2e00] font-mono-data text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 flex items-center gap-2 border border-white/10 hover:border-transparent shrink-0 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Gear Specs</span>
          </button>
        </div>
      </div>
    </section>
  );
};
