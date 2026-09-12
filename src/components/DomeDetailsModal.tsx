import React from 'react';
import { X, Check, Compass, Telescope, Maximize2, Users, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { DomeHabitat } from '../types';

interface DomeDetailsModalProps {
  dome: DomeHabitat | null;
  onClose: () => void;
  onReserve: (domeId: string) => void;
}

export const DomeDetailsModal: React.FC<DomeDetailsModalProps> = ({ dome, onClose, onReserve }) => {
  if (!dome) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#181b25] border border-white/10 rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 text-[#dfe2ef]">
        {/* Visual Hero Header */}
        <div className="relative w-full h-72 md:h-96">
          <img
            src={dome.image}
            alt={dome.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181b25] via-transparent to-black/50" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono-data text-xs text-[#5dd9d9] uppercase tracking-widest font-bold">
                {dome.code} • {dome.podName}
              </span>
              <h2 className="font-serif-display text-3xl md:text-4xl text-white font-normal mt-1">
                {dome.name}
              </h2>
            </div>
            <div className="px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10">
              <span className="font-serif-display text-2xl text-[#ffeecb]">
                ${dome.pricePerNight.toLocaleString()}
              </span>
              <span className="font-mono-data text-xs text-[#d0c5b2] ml-1">/ Night</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <h4 className="font-mono-data text-xs text-[#5dd9d9] uppercase tracking-wider font-bold mb-2">
              Habitat Narrative
            </h4>
            <p className="font-sans-body text-base text-[#d0c5b2] leading-relaxed font-light">
              {dome.description}
            </p>
          </div>

          {/* Architectural & Optical Specifications */}
          <div>
            <h4 className="font-mono-data text-xs text-[#ffeecb] uppercase tracking-wider font-bold mb-3">
              Architectural & Astronomical Specifications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0a0e17] border border-white/5 space-y-1">
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase">Total Footprint</span>
                <p className="font-sans-body text-sm text-white">{dome.specs.area}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0e17] border border-white/5 space-y-1">
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase">Maximum Capacity</span>
                <p className="font-sans-body text-sm text-white">{dome.specs.capacity}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0e17] border border-white/5 space-y-1">
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase">Integrated Robotic Telescope</span>
                <p className="font-sans-body text-sm text-[#5dd9d9]">{dome.specs.telescope}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0e17] border border-white/5 space-y-1">
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase">Glazing & Light Transmission</span>
                <p className="font-sans-body text-sm text-white">{dome.specs.optics}</p>
              </div>

              <div className="md:col-span-2 p-4 rounded-xl bg-[#0a0e17] border border-white/5 space-y-1">
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase">Environmental Control</span>
                <p className="font-sans-body text-sm text-white">{dome.specs.thermal}</p>
              </div>
            </div>
          </div>

          {/* Key Amenities */}
          <div>
            <h4 className="font-mono-data text-xs text-[#ffeecb] uppercase tracking-wider font-bold mb-3">
              Included Suite Amenities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {dome.features.map((feat) => (
                <div key={feat} className="p-3 rounded-lg bg-[#1c2029] border border-white/5 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#5dd9d9] shrink-0" />
                  <span className="font-mono-data text-xs text-[#dfe2ef]">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 md:px-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0f131c]">
          <div className="flex items-center gap-2 text-xs font-mono-data text-[#99907e]">
            <Shield className="w-4 h-4 text-[#5dd9d9]" />
            <span>Strict zero-light pollution protocol enforced.</span>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onReserve(dome.id);
                onClose();
              }}
              className="flex-1 sm:flex-initial px-8 py-3 rounded bg-[#f4d06f] hover:bg-[#ffeecb] text-[#3d2e00] font-mono-data text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Reserve This Habitat</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded bg-[#262a34] text-[#dfe2ef] hover:text-white font-mono-data text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
