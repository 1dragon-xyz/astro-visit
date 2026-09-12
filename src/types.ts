export interface DomeHabitat {
  id: string;
  code: string;
  podName: string;
  name: string;
  pricePerNight: number;
  description: string;
  image: string;
  features: string[];
  specs: {
    area: string;
    capacity: string;
    telescope: string;
    optics: string;
    thermal: string;
  };
  accentColor: string;
}

export interface CelestialExpedition {
  id: string;
  dateRange: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  moonStatus: string;
  highlight: string;
  startDate: string;
  endDate: string;
}

export interface SkyTelemetry {
  skyStatus: string;
  moonPhase: string;
  moonPercent: number;
  sqmDarkness: string;
  cloudDensity: string;
  bortleScale: string;
  siderealTime: string;
  zenithObject: string;
}

export interface BookingFormData {
  arrivalDate: string;
  departureDate: string;
  domeId: string;
  partySize: number;
  guestName: string;
  guestEmail: string;
  guestPhone?: string;
  notes?: string;
  curations: {
    deepSkyGuide: boolean;
    winePairing: boolean;
    heliportTransfer: boolean;
    spectrometryRig: boolean;
  };
}

export interface AstrophotographyGear {
  category: string;
  items: {
    name: string;
    specs: string;
    purpose: string;
  }[];
}
