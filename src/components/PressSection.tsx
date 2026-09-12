import React from 'react';
import { Quote, Award, Sparkles } from 'lucide-react';

export const PressSection: React.FC = () => {
  return (
    <section className="w-full bg-[#181b25] py-20 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Callout */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#0a0e17] border border-[#5dd9d9]/20">
              <Award className="w-3.5 h-3.5 text-[#5dd9d9]" />
              <span className="font-mono-data text-[10px] text-[#5dd9d9] uppercase tracking-[0.2em] font-bold">
                Critical Acclaim
              </span>
            </div>

            <blockquote className="font-serif-display text-2xl md:text-3xl lg:text-[34px] text-[#ffeecb] leading-snug font-normal">
              “The most transcendental nocturnal retreat in North America. Nocturne dissolves the threshold
              between luxury lodging and the infinite universe.”
            </blockquote>

            <div className="flex items-center gap-3 pt-2">
              <span className="font-mono-data text-xs text-[#dfe2ef] font-bold uppercase tracking-wider">
                Condé Nast Traveler
              </span>
              <span className="text-[#99907e]">•</span>
              <span className="font-mono-data text-xs text-[#d0c5b2] tracking-wider">
                Gold List 2025
              </span>
            </div>
          </div>

          {/* Right Dual Review Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: AD */}
            <div className="p-7 rounded-xl bg-[#1c2029] border border-white/5 shadow-md flex flex-col justify-between hover:border-[#ffeecb]/30 transition-all duration-300">
              <p className="font-sans-body text-sm text-[#dfe2ef] leading-relaxed font-light">
                “Lying inside the Kepler dome with the roof retracted in total silence, watching Saturn’s
                rings through the in-suite telescope... It reconfigures one's sense of scale entirely.”
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col">
                <span className="font-mono-data text-xs text-[#ffeecb] font-bold">
                  Architectural Digest
                </span>
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-wider mt-0.5">
                  Issue No. 892 • High Desert Design
                </span>
              </div>
            </div>

            {/* Card 2: FT */}
            <div className="p-7 rounded-xl bg-[#1c2029] border border-white/5 shadow-md flex flex-col justify-between hover:border-[#5dd9d9]/30 transition-all duration-300">
              <p className="font-sans-body text-sm text-[#dfe2ef] leading-relaxed font-light">
                “The dining alone warrants the flight. Red-light ambient cellar tasting, followed by private
                time at the CDK700 with their resident astrophysicist. Pure contemplative reverence.”
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col">
                <span className="font-mono-data text-xs text-[#5dd9d9] font-bold">
                  The Financial Times
                </span>
                <span className="font-mono-data text-[10px] text-[#99907e] uppercase tracking-wider mt-0.5">
                  How To Spend It
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
