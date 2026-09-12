import React from 'react';
import { Sparkles, Bath, Telescope, Flame, Eye, Wine, Users, Shield, Compass, ChevronRight } from 'lucide-react';
import { DOME_HABITATS } from '../data/sanctuaryData';
import { DomeHabitat } from '../types';

interface DomesSectionProps {
  onSelectDome: (domeId: string) => void;
  onOpenSpecs: (dome: DomeHabitat) => void;
}

export const DomesSection: React.FC<DomesSectionProps> = ({ onSelectDome, onOpenSpecs }) => {
  const getFeatureIcon = (feature: string) => {
    if (feature.includes('CDK') || feature.includes('Dome')) return <Telescope className="w-4 h-4 text-[#5dd9d9]" />;
    if (feature.includes('Tub') || feature.includes('Spa')) return <Bath className="w-4 h-4 text-[#5dd9d9]" />;
    if (feature.includes('View') || feature.includes('Coating')) return <Eye className="w-4 h-4 text-[#5dd9d9]" />;
    if (feature.includes('Hearth') || feature.includes('Fire')) return <Flame className="w-4 h-4 text-[#5dd9d9]" />;
    if (feature.includes('Cellar') || feature.includes('Dining')) return <Wine className="w-4 h-4 text-[#5dd9d9]" />;
    if (feature.includes('Concierge') || feature.includes('Astronomer')) return <Users className="w-4 h-4 text-[#5dd9d9]" />;
    if (feature.includes('Seclusion')) return <Shield className="w-4 h-4 text-[#5dd9d9]" />;
    return <Sparkles className="w-4 h-4 text-[#5dd9d9]" />;
  };

  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 py-20 w-full" id="domes-collection">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="flex flex-col gap-1.5">
          <span className="font-mono-data text-[11px] text-[#5dd9d9] uppercase tracking-[0.2em] font-bold">
            Cosmic Habitat Units
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl text-[#ffeecb] font-normal">
            Architectural Domes & Sanctuaries
          </h2>
        </div>
        <p className="font-sans-body text-sm md:text-base text-[#d0c5b2] max-w-md leading-relaxed">
          Constructed from ultra-pure borosilicate glass and insulated obsidian panels. Geometrically aligned to true celestial north.
        </p>
      </div>

      {/* 3 Habitat Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {DOME_HABITATS.map((dome) => {
          const isKepler = dome.id === 'kepler';
          const isAndromeda = dome.id === 'andromeda';
          const isZenith = dome.id === 'zenith';

          return (
            <article
              key={dome.id}
              className={`group flex flex-col rounded-xl overflow-hidden bg-[#181b25] border border-white/5 shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isKepler
                  ? 'hover:border-[#ffeecb]/40 hover:shadow-[0_0_35px_rgba(244,208,111,0.2)]'
                  : isAndromeda
                  ? 'hover:border-[#5dd9d9]/40 hover:shadow-[0_0_35px_rgba(93,217,217,0.2)]'
                  : 'hover:border-[#daccff]/40 hover:shadow-[0_0_35px_rgba(218,204,255,0.2)]'
              }`}
            >
              {/* Card Media Header */}
              <div className="relative w-full h-72 md:h-80 overflow-hidden cursor-pointer" onClick={() => onOpenSpecs(dome)}>
                <img
                  src={dome.image}
                  alt={dome.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181b25] via-transparent to-black/40" />

                {/* Pod Code Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-[#0a0e17]/85 backdrop-blur-md border border-white/10">
                  <span
                    className={`font-mono-data text-[11px] font-bold uppercase tracking-wider ${
                      isKepler
                        ? 'text-[#ffeecb]'
                        : isAndromeda
                        ? 'text-[#5dd9d9]'
                        : 'text-[#daccff]'
                    }`}
                  >
                    {dome.code} • {dome.podName}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded bg-[#0f131c]/90 backdrop-blur-md border border-white/10">
                  <span className="font-serif-display text-xl md:text-2xl text-[#ffeecb] font-medium">
                    ${dome.pricePerNight.toLocaleString()}
                  </span>
                  <span className="font-mono-data text-[10px] text-[#d0c5b2] ml-1">/ Night</span>
                </div>

                {/* Expand inspect prompt on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                  <span className="px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-xs font-mono-data text-white flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#5dd9d9]" /> View Full Architectural Specs
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-2">
                  <h3
                    onClick={() => onOpenSpecs(dome)}
                    className="font-serif-display text-2xl text-[#dfe2ef] group-hover:text-[#ffeecb] transition-colors cursor-pointer font-medium"
                  >
                    {dome.name}
                  </h3>
                  <p className="font-sans-body text-sm text-[#d0c5b2] leading-relaxed">
                    {dome.description}
                  </p>
                </div>

                {/* Features Grid & Booking Action */}
                <div className="flex flex-col gap-4 pt-4 bg-[#1c2029]/50 -mx-6 -mb-6 p-6 border-t border-white/5">
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-3">
                    {dome.features.map((feature) => (
                      <span
                        key={feature}
                        className="font-mono-data text-xs text-[#d0c5b2] flex items-center gap-2"
                      >
                        {getFeatureIcon(feature)}
                        <span className="truncate">{feature}</span>
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectDome(dome.id)}
                    type="button"
                    className={`w-full py-3 rounded font-mono-data text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                      isKepler
                        ? 'bg-[#262a34] hover:bg-[#ffeecb] hover:text-[#3d2e00] text-[#ffeecb]'
                        : isAndromeda
                        ? 'bg-[#262a34] hover:bg-[#5dd9d9] hover:text-[#003737] text-[#5dd9d9]'
                        : 'bg-[#262a34] hover:bg-[#daccff] hover:text-[#381385] text-[#daccff]'
                    }`}
                  >
                    <span>Reserve {dome.name.replace('The ', '')}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
