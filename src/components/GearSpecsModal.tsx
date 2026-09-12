import React, { useState } from 'react';
import { X, Camera, Download, Check, Sparkles, Sliders, Shield } from 'lucide-react';
import { GEAR_SPECS } from '../data/sanctuaryData';

interface GearSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GearSpecsModal: React.FC<GearSpecsModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Simulate generating a celestial gear manifest text download
    const gearText = `NOCTURNE SANCTUARY MOAB - ASTROPHOTOGRAPHY GEAR SPECIFICATION DOSSIER
Bortle Class 1 Sanctuary • 38.5733° N, 109.5498° W

${GEAR_SPECS.map(
  (cat) => `
[${cat.category.toUpperCase()}]
${cat.items
  .map((i) => `• ${i.name}\n  Specifications: ${i.specs}\n  Purpose: ${i.purpose}`)
  .join('\n\n')}`
).join('\n')}

Complimentary to all reserved guests. Pre-calibrated by Resident Astrophysicists.`;

    const blob = new Blob([gearText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Nocturne-Sanctuary-Gear-Specs.txt';
    a.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#181b25] border border-[#5dd9d9]/40 rounded-2xl p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-200 text-[#dfe2ef]">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#262a34] border border-[#5dd9d9]/30 flex items-center justify-center text-[#5dd9d9]">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono-data text-[10px] text-[#5dd9d9] uppercase tracking-[0.2em] font-bold">
                Instrument Roster
              </span>
              <h3 className="font-serif-display text-2xl md:text-3xl text-[#ffeecb]">
                Astrophotography Concierge Equipment
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#99907e] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Categories */}
        <div className="py-6 space-y-8">
          {GEAR_SPECS.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="font-mono-data text-xs text-[#ffeecb] uppercase tracking-wider font-bold border-l-2 border-[#5dd9d9] pl-3">
                {cat.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#0a0e17] border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="font-serif-display text-base text-white mb-1.5 font-medium">
                        {item.name}
                      </div>
                      <p className="font-mono-data text-[11px] text-[#5dd9d9] leading-relaxed mb-2">
                        {item.specs}
                      </p>
                    </div>
                    <p className="font-sans-body text-xs text-[#99907e] leading-snug">
                      {item.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Concierge Guarantee */}
          <div className="p-4 rounded-xl bg-[#1c2029] border border-[#f4d06f]/20 flex items-center gap-4">
            <Shield className="w-6 h-6 text-[#ffeecb] shrink-0" />
            <p className="font-sans-body text-xs text-[#d0c5b2] leading-relaxed">
              All sensors are cleaned under certified ISO 5 cleanroom conditions prior to guest arrival.
              Our telescope engineers perform daily collimation, sensor dark-frame generation, and
              polar axis calibrations.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono-data text-xs text-[#99907e]">
            Included with all Kepler, Andromeda, & Zenith suites.
          </span>
          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial px-6 py-2.5 rounded bg-[#f4d06f] hover:bg-[#ffeecb] text-[#3d2e00] font-mono-data text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Dossier Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Gear Manifest (TXT)</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded bg-[#262a34] text-[#dfe2ef] hover:text-white font-mono-data text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
