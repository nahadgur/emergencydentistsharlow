// data/pricing.ts
// Typical Harlow emergency dental fee bands as of 2026. NHS rates are
// the published 2026 NHS England bands; private rates are typical
// market ranges from Harlow practices in our matching network.

export interface FeeBand {
  service: string;
  slug: string;
  nhsBand: string;
  nhsCost: string;
  privateRange: string;
  notes: string;
}

export const feeBands: FeeBand[] = [
  {
    service: 'Emergency consultation',
    slug: 'emergency-consultation',
    nhsBand: 'Band 1',
    nhsCost: '£27.40',
    privateRange: '£80–£150',
    notes: 'Examination, X-rays if needed, and immediate pain relief or temporary dressing. Definitive treatment costed separately.',
  },
  {
    service: 'Out-of-hours private consultation',
    slug: 'ooh-consultation',
    nhsBand: 'N/A',
    nhsCost: 'NHS 111 routes to free out-of-hours rota',
    privateRange: '£150–£250',
    notes: 'Saturday, Sunday, evening, or bank-holiday appointments. NHS out-of-hours emergency dental access is via NHS 111 (free).',
  },
  {
    service: 'Tooth extraction (simple)',
    slug: 'extraction-simple',
    nhsBand: 'Band 2',
    nhsCost: '£75.30',
    privateRange: '£150–£300',
    notes: 'Single straightforward tooth, local anaesthetic, post-op review included.',
  },
  {
    service: 'Root canal treatment (front tooth)',
    slug: 'root-canal-front',
    nhsBand: 'Band 2',
    nhsCost: '£75.30',
    privateRange: '£400–£700',
    notes: 'Single front tooth (incisor or canine). Crown usually needed afterwards — separate cost.',
  },
  {
    service: 'Root canal treatment (molar)',
    slug: 'root-canal-molar',
    nhsBand: 'Band 2',
    nhsCost: '£75.30',
    privateRange: '£800–£1,200',
    notes: 'Multi-canal back tooth. Crown needed afterwards (£500–£1,200 separately).',
  },
  {
    service: 'Crown re-cementation',
    slug: 'crown-recement',
    nhsBand: 'Band 1',
    nhsCost: '£27.40',
    privateRange: '£80–£200',
    notes: 'Re-cementing an existing crown that has come off. Bring the crown — re-cement is much cheaper than a new crown.',
  },
  {
    service: 'Tooth re-implantation (avulsion)',
    slug: 'reimplantation',
    nhsBand: 'Band 2',
    nhsCost: '£75.30',
    privateRange: '£200–£500',
    notes: 'Re-inserting a knocked-out adult tooth and splinting to neighbours. Time-critical — within an hour for best prognosis.',
  },
  {
    service: 'Filling (single, composite)',
    slug: 'filling',
    nhsBand: 'Band 2',
    nhsCost: '£75.30',
    privateRange: '£100–£300',
    notes: 'Including replacing a lost filling. Larger restorations or premium materials cost more.',
  },
];

// Quick reference for the homepage and service hub.
export const headlineFee = {
  emergencyConsultationFrom: '£27.40 NHS / £80 private',
  oohConsultationFrom: 'NHS 111 free / £150 private',
  freeMatching: 'Matching service free to all patients',
};
