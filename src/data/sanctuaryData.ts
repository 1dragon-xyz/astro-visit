import { DomeHabitat, CelestialExpedition, AstrophotographyGear } from '../types';

export const DOME_HABITATS: DomeHabitat[] = [
  {
    id: 'kepler',
    code: 'POD 01',
    podName: 'North Reticle',
    name: 'The Kepler Geodesic Suite',
    pricePerNight: 1450,
    description:
      '1,200 sq.ft private glass dome featuring a retractable acoustic-thermal glass roof, private infinity stargazing hot tub carved into sandstone, and a dedicated Planewave robotic refractor.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8m-FWMVwTn1djFSu1krjTbB0MaT0TpfdzDljt7EFyBRGOrjRYeG9cDwTZjeQCsFLBy8LEPIHt4H787ecDdm61mxALZKSBxUv0LonYWGHn0HIKinfnn0E2kCLKu_mrvPTIGA3GIytu2CHK-37eAMBn0v6RArJ0eF6Xq3hm0MWVlqv61Ls992aBMiZHoFlxSOCK-TKXI_WFY9fMIiGMEqhKf7dsN4IxZ2LS727jgfyFSxpwVTfY1Me1_A',
    features: [
      'Planewave CDK',
      'Infinity Mineral Tub',
      'Astro-Concierge',
      'Cellar Access',
    ],
    specs: {
      area: '1,200 sq.ft interior + 800 sq.ft terrace',
      capacity: 'Up to 2 Guests',
      telescope: 'Planewave CDK12.5 with L-350 Direct Drive Mount',
      optics: 'Dual-pane Heated Borosilicate Glass (99.4% light transmission)',
      thermal: 'Radiant Sandstone Geothermal Climate Control',
    },
    accentColor: '#ffeecb',
  },
  {
    id: 'andromeda',
    code: 'POD 02',
    podName: 'Cliff Edge',
    name: 'The Andromeda Cantilever Villa',
    pricePerNight: 1890,
    description:
      'Seamlessly embedded into towering Navajo sandstone rim rocks. Offers zero-emission heated stargazing floor decks, German anti-reflective optical glass, and bespoke in-residence sommelier pairings.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDNIAV-vLi-zPyYX8DKTze-vFONlDb1L95-0pj6k_LJ2iJJZr7ijxP1XTk7lm2dskCKpxkGr5v3lhhUa-gusGmubsvx9_f41xJHyJ5Om4bx4Yt6EpAUhjwU2bvgd1hTy_NGjXsQAX9nkkfSQSFmEnZ6a7wAhX3kXHqu_lS-r9z2folA3eHFeDu_RTHndSRko5gXGAbnMPdfZ-TLGROwXyI8HE3T4ioN105I-EPgsFAMjw4DLz-VMITprA',
    features: [
      '270° Canyon View',
      'Fire-Pit Hearth',
      'Anti-Glare Coating',
      'In-Villa Dining',
    ],
    specs: {
      area: '1,650 sq.ft cantilevered villa + 1,100 sq.ft deck',
      capacity: 'Up to 2 Guests',
      telescope: 'Takahashi FSQ-106EDX4 Astrograph with FLI CCD',
      optics: 'Schott Conturan anti-reflective optical canyon glazing',
      thermal: 'Direct-solar thermal storage & wood-burning piñon hearth',
    },
    accentColor: '#5dd9d9',
  },
  {
    id: 'zenith',
    code: 'POD 03',
    podName: 'Twin Observatory',
    name: 'The Zenith Pavilion',
    pricePerNight: 2400,
    description:
      'Twin-dome private compound equipped with an automated rotating dome observatory, full-time private astrophysicist guidance, infrared-heated outdoor circular daybed, and steam spa.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYyCqUSZLFD_ggSmbBwXzB2e3p4aYLdrJkQqNKxFm-L-KFWl8DYGWbMYNSkcsc124jqSgP8JVBeOj8z5Jy1wkyp--h76GOIVIWOkN_NHErB5I2w37pmnkEXmsS0xnDp6jnhV6Uc-qIJI_nLiPc2CBKFU1RRCiXW0sYF_Osap6CAz4LRZbzV2cLJn4_bWP-aTy8jAGQzzbMYGWqUmrfTF7CdFeSzh2cMSMB7CabXiQVNQS0VVI3HyUdHg',
    features: [
      'Dedicated Dome',
      'Red-Rock Steam Spa',
      'Private Astronomer',
      'Total Seclusion',
    ],
    specs: {
      area: '2,800 sq.ft dual-compound + private observatory silo',
      capacity: 'Up to 4 Guests (2 Master Suites)',
      telescope: 'Planewave CDK17 with QHY600M Cooled CMOS Rig',
      optics: 'Motorized 360° Ash-Dome with synced robotic slewing',
      thermal: 'Subterranean wine cellar & infrared red-light cedar spa',
    },
    accentColor: '#daccff',
  },
];

export const CELESTIAL_EXPEDITIONS: CelestialExpedition[] = [
  {
    id: 'perseids',
    dateRange: 'Aug 11 — 13',
    badge: 'Peak: 120/hr',
    badgeColor: 'text-[#5dd9d9] bg-[#181b25]',
    title: 'Perseid Meteor Shower Retreat',
    description:
      'Open-sky midnight terrace observation with thermal recliners, warm spiced agave elixirs, and binaural soundscapes under 100+ shooting stars hourly.',
    moonStatus: 'Moon: 8% (Dark)',
    highlight: 'Select Window →',
    startDate: '2025-08-11',
    endDate: '2025-08-13',
  },
  {
    id: 'new-moon',
    dateRange: 'Oct 02 — 05',
    badge: 'Absolute Void',
    badgeColor: 'text-[#ffeecb] bg-[#181b25]',
    title: 'Super New Moon Dark Sky Immersion',
    description:
      'The darkest nights of the autumn calendar. Prime viewing for deep space galaxies M31, M33, and diffuse dust lanes across the galactic core.',
    moonStatus: 'Moon: 0% Illumination',
    highlight: 'Select Window →',
    startDate: '2025-10-02',
    endDate: '2025-10-05',
  },
  {
    id: 'orionids',
    dateRange: 'Nov 18 — 21',
    badge: 'Masterclass',
    badgeColor: 'text-[#e8ddff] bg-[#181b25]',
    title: 'Orionid Masterclass with NatGeo Fellows',
    description:
      'Intensive four-night astrophotography clinic. Field captures at Dead Horse Point and proprietary night-stacking workflow instruction.',
    moonStatus: 'Limited to 12 Guests',
    highlight: 'Select Window →',
    startDate: '2025-11-18',
    endDate: '2025-11-21',
  },
  {
    id: 'geminids',
    dateRange: 'Dec 12 — 15',
    badge: 'Solstice Event',
    badgeColor: 'text-[#e6c363] bg-[#181b25]',
    title: 'Geminids Winter Solstice Gathering',
    description:
      'Multi-hued, slow-moving fireballs crossing the crystal-cold winter sky. Cedar-plank culinary feast and bespoke desert hot springs stargazing.',
    moonStatus: 'Peak: 150 meteors/hr',
    highlight: 'Select Window →',
    startDate: '2025-12-12',
    endDate: '2025-12-15',
  },
];

export const GEAR_SPECS: AstrophotographyGear[] = [
  {
    category: 'Optical Bodies & Precision Sensors',
    items: [
      {
        name: 'Sony α7R V Astromod (Full-Frame 61MP)',
        specs: 'Hydrogen-Alpha modded sensor, ISO 50-102,400, 15-stop dynamic range',
        purpose: 'Deep nebula emissions & extreme low-light landscape astrophotography',
      },
      {
        name: 'ZWO ASI6200MM Pro Cooled Monochromatic Camera',
        specs: 'Full-frame Sony IMX455 CMOS, Peltier cooled to -35°C below ambient',
        purpose: 'Zero dark-current scientific exposure stacking for deep-sky objects',
      },
      {
        name: 'Canon EOS Ra Dedicated Celestial Body',
        specs: 'Modified IR cut-filter (4x H-alpha transmission @ 656nm), Dual Pixel CMOS AF',
        purpose: 'Wide-angle Milky Way and stellar cloud panorama rendering',
      },
    ],
  },
  {
    category: 'Optics & Prime Astro Lenses',
    items: [
      {
        name: 'Sony FE 14mm f/1.8 GM',
        specs: 'Extreme aspherical elements, zero sagittal flare or coma',
        purpose: 'Full-arch Milky Way horizons over Moab sandstone spires',
      },
      {
        name: 'Sigma 28mm f/1.4 DG HSM Art',
        specs: 'Ultra-flat field sharpness across 35mm full frame',
        purpose: 'Zodiacal light and Rho Ophiuchi dark dust cloud mosaics',
      },
      {
        name: 'Takahashi FSQ-106EDX4 Modified Petzval',
        specs: 'Quadruplet fluorite apochromat, f/3.6 to f/5 focal reducer included',
        purpose: 'Edge-to-edge pin-point pinpoint stellar star clusters & galaxies',
      },
    ],
  },
  {
    category: 'Robotic Tracking Mounts & Filtration',
    items: [
      {
        name: 'Rainbow Astro RST-135E Strain Wave Mount',
        specs: 'Renishaw high-resolution absolute encoders, weightless periodic error < 2.5 arcsec',
        purpose: 'Unguided 5-minute pinpoint exposures without counterweights',
      },
      {
        name: 'Chroma 50mm Unmounted 3nm Narrowband Filters',
        specs: 'H-alpha (656.3nm), OIII (500.7nm), SII (672.4nm) optical precision',
        purpose: 'High-contrast emission nebula imaging even during faint twilight',
      },
      {
        name: 'ZWO ASIAIR Plus Wireless Astro Control Hub',
        specs: 'Dual-band Wi-Fi, motorized EAF focuser link, automated polar alignment',
        purpose: 'Control the entire observatory rig from your in-suite iPad bedside',
      },
    ],
  },
];
