import React, { useState, useEffect } from 'react';
import { Menu, X, User, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenReservation: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Domes & Suites', href: '#domes-collection', id: 'domes' },
    { label: 'Sky Observatories', href: '#astronomy-experience', id: 'observatories' },
    { label: 'Stargazing Calendar', href: '#celestial-calendar', id: 'calendar' },
    { label: 'Celestial Dining', href: '#astronomy-experience', id: 'dining' },
    { label: 'The Experience', href: '#astronomy-experience', id: 'experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f131c]/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.7)] border-b border-[#31353f]/50'
            : 'bg-[#0f131c]/70 backdrop-blur-xl border-b border-white/5'
        }`}
      >
        <div className="h-20 max-w-[1440px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between gap-6">
          {/* Brand Logo & Wordmark */}
          <a href="#" className="flex items-center gap-3.5 group">
            <img
              alt="Nocturne Sanctuary Celestial Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UESyHJ0iMycYNqYoKqXx0j1PWmW2XzgFKczTfXojZgX4wi0482B2a-DKBBDD6pgT4VuwF6ErSxPIHMuqK8cUVS2SLyzYlnTupLrYGlxJvEOyuAzeMPXzOALlwo7uUZNtgaot877eIKdI6ktaPYUa64aOGWlhv0uRXFlZGmRa0HdkYXCyzWrIQfxnvbpgdcLcrtqc9xl8JlI0XInVQrOVbEjwGElIeRtnCjEiqBh6zkn3-iV9GR_tEdz_U"
            />
            <div className="flex flex-col">
              <span className="font-serif-display text-2xl tracking-tight text-[#ffeecb] leading-none">
                Nocturne
              </span>
              <span className="font-mono-data text-[10px] text-[#5dd9d9] tracking-[0.2em] leading-none mt-1 uppercase font-semibold">
                Sanctuary • Moab
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = item.id === activeSection;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-mono-data text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive
                      ? 'text-[#ffeecb] font-bold border-b border-[#ffeecb]/60 pb-0.5'
                      : 'text-[#d0c5b2]/80 hover:text-[#ffeecb]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={onOpenReservation}
              className="relative inline-flex items-center justify-center px-4 py-2.5 rounded bg-[#262a34] hover:bg-[#31353f] text-[#ffeecb] font-mono-data text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border border-[#f4d06f]/20 hover:border-[#f4d06f]/40 shadow-[0_0_24px_rgba(244,208,111,0.18)] hover:shadow-[0_0_32px_rgba(244,208,111,0.35)]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#f4d06f]" />
                Inquire & Reserve
              </span>
            </button>

            {/* Profile Avatar Trigger */}
            <button
              onClick={() => setProfileModalOpen(!profileModalOpen)}
              title="Guest Concierge Portal"
              className="w-9 h-9 rounded-full bg-[#ffeecb] hover:bg-[#ffe08f] flex items-center justify-center transition-all shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#5dd9d9]"
            >
              <User className="w-4 h-4 text-[#3d2e00]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded text-[#dfe2ef] hover:text-white bg-[#181b25] border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a0e17] border-b border-[#31353f] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono-data text-xs uppercase tracking-widest text-[#dfe2ef] hover:text-[#ffeecb] py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded bg-[#f4d06f] text-[#3d2e00] font-mono-data text-xs font-bold uppercase tracking-wider text-center"
              >
                Inquire & Reserve Your Sky Window
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Guest Portal Popover / Modal */}
      {profileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end p-4 md:p-8 bg-black/40 backdrop-blur-xs">
          <div className="w-full max-w-sm mt-16 bg-[#181b25] border border-[#f4d06f]/30 rounded-xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 text-[#dfe2ef]">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#5dd9d9]" />
                <span className="font-mono-data text-xs uppercase tracking-wider text-[#ffeecb] font-bold">
                  Astrophile Member Portal
                </span>
              </div>
              <button
                onClick={() => setProfileModalOpen(false)}
                className="text-[#99907e] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <div className="p-3 rounded bg-[#0a0e17] border border-white/5">
                <div className="flex justify-between items-center text-xs font-mono-data text-[#99907e]">
                  <span>RESERVATION STATUS</span>
                  <span className="text-[#5dd9d9] font-bold">ACTIVE PROTOCOL</span>
                </div>
                <div className="mt-1 font-serif-display text-lg text-white">
                  Dr. Elena Vance
                </div>
                <div className="text-xs text-[#d0c5b2]">Cambridge Astrophysics Institute</div>
              </div>

              <div className="text-xs font-mono-data space-y-1.5 text-[#d0c5b2]">
                <div className="flex justify-between">
                  <span>Reserved Window:</span>
                  <span className="text-[#ffeecb]">Oct 02 — Oct 05, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Assigned Habitat:</span>
                  <span className="text-[#5dd9d9]">Kepler Geodesic (Pod 01)</span>
                </div>
                <div className="flex justify-between">
                  <span>Private Reticle:</span>
                  <span>Planewave CDK12.5 Slewed</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-[#0f131c] flex items-center gap-2 text-[11px] text-[#d0c5b2] border border-[#5dd9d9]/20">
                <ShieldCheck className="w-4 h-4 text-[#5dd9d9] shrink-0" />
                <span>Bortle 1 darkness bylaws enforced during your stay. Red-spectrum torches provided.</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setProfileModalOpen(false);
                  onOpenReservation();
                }}
                className="flex-1 py-2 rounded bg-[#262a34] hover:bg-[#31353f] text-[#ffeecb] font-mono-data text-[11px] font-bold uppercase tracking-wider text-center"
              >
                Modify Window
              </button>
              <button
                onClick={() => setProfileModalOpen(false)}
                className="px-3 py-2 rounded bg-[#0a0e17] text-[#99907e] hover:text-white font-mono-data text-[11px] uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
