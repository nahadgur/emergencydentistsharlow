// data/partners.ts
//
// Named partner surgeries that the matching service routes enquiries to.
// These are the visible/verifiable network anchors — patients can recognise
// the names and verify they are real GDC-registered practices in the borough.
//
// Adding a partner here is a real claim — only list practices we have an
// actual referral agreement with. The whole credibility of the matching
// service rests on this list being accurate.

export interface Partner {
  /** Short identifier used as React key. */
  id: string;
  /** Practice display name. */
  name: string;
  /** Harlow neighbourhood / area where the practice sits. */
  area: string;
  /** Slug of the location hub the practice maps to (for cross-linking). */
  areaSlug: string;
  /** One-line description of what the practice covers within our network. */
  description: string;
  /** Optional postcode — only the outward part (e.g. "CM17") so we don't
   *  mislead users into thinking we are publishing the practice address. */
  postcode?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'nuffield-health-harlow',
    name: 'Nuffield Health Hospital Harlow',
    area: 'Old Harlow',
    areaSlug: 'old-harlow',
    description:
      'Private hospital site on Rectory Lane in Old Harlow. Routed for emergency presentations needing imaging or specialist input alongside dental treatment, and for patients who specifically prefer a hospital-environment private appointment.',
    postcode: 'CM17',
  },
  {
    id: 'church-langley-dental',
    name: 'Church Langley Dental Practice',
    area: 'Church Langley',
    areaSlug: 'church-langley',
    description:
      'Modern family-focused practice serving the Church Langley village and the wider east-Harlow catchment. Routed for paediatric and family emergency presentations, and for residents who prefer the local Church Langley access point over central Harlow.',
    postcode: 'CM17',
  },
];

export const getPartnerById = (id: string): Partner | undefined =>
  PARTNERS.find(p => p.id === id);

export const getPartnersByAreaSlug = (slug: string): Partner[] =>
  PARTNERS.filter(p => p.areaSlug === slug);
