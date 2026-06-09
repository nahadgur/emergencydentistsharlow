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
    id: 'nuffield-dental-harlow',
    name: 'Nuffield Dental Practice',
    area: 'The Stow',
    areaSlug: 'the-stow',
    description:
      'Established practice at The Stow in central Harlow, with parking in the precinct and bus routes from the town centre. Takes NHS and private patients, and is routed for emergency presentations across central and western Harlow.',
    postcode: 'CM20',
  },
  {
    id: 'church-langley-dental',
    name: 'Church Langley Dental',
    area: 'Church Langley',
    areaSlug: 'church-langley',
    description:
      'Family practice on the first floor of the Florence Nightingale Health Centre in Church Langley, with parking on site and Saturday appointments. Takes NHS and private patients, and is routed for family and paediatric emergency presentations across east Harlow.',
    postcode: 'CM17',
  },
];

export const getPartnerById = (id: string): Partner | undefined =>
  PARTNERS.find(p => p.id === id);

export const getPartnersByAreaSlug = (slug: string): Partner[] =>
  PARTNERS.filter(p => p.areaSlug === slug);
