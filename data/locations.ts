// data/locations.ts — Harlow neighbourhoods + adjacent CM-postcode towns
// Sub-areas listed per neighbourhood for content signals (no separate pages).

export interface AreaHub {
  name: string;
  slug: string;
  postcode: string;
  area: 'Central Harlow' | 'East Harlow' | 'West Harlow' | 'North Harlow' | 'Adjacent';
  subAreas: SubArea[];
}

export interface SubArea {
  name: string;
  postcode?: string;
  note?: string;
}

export const AREA_HUBS: AreaHub[] = [
  {
    name: 'Old Harlow',
    slug: 'old-harlow',
    postcode: 'CM17',
    area: 'East Harlow',
    subAreas: [
      { name: 'Mulberry Green', postcode: 'CM17', note: 'Conservation area centred on the Norman church' },
      { name: 'High Street', postcode: 'CM17', note: 'Independent shops and historic coaching-inn buildings' },
      { name: 'Hobbs Cross', postcode: 'CM17', note: 'Edge of town towards the M11' },
      { name: 'Sheering Lower Road', postcode: 'CM17', note: 'Country lane connecting to Sheering' },
    ],
  },
  {
    name: 'Church Langley',
    slug: 'church-langley',
    postcode: 'CM17',
    area: 'East Harlow',
    subAreas: [
      { name: 'Church Langley Way', postcode: 'CM17', note: 'Spine road through the modern village' },
      { name: 'Tesco Extra', postcode: 'CM17', note: 'Major retail anchor for east Harlow' },
      { name: 'Doulton Close', postcode: 'CM17', note: 'Family residential cluster' },
      { name: 'Henry Moore School area', postcode: 'CM17', note: 'School-catchment family housing' },
    ],
  },
  {
    name: 'Newhall',
    slug: 'newhall',
    postcode: 'CM17',
    area: 'East Harlow',
    subAreas: [
      { name: 'Newhall Square', postcode: 'CM17', note: 'Centre of the new-build development' },
      { name: 'The Chase', postcode: 'CM17', note: 'Higher-density apartment cluster' },
      { name: 'Centenary Park', postcode: 'CM17', note: 'Recent residential expansion' },
    ],
  },
  {
    name: 'Sumners',
    slug: 'sumners',
    postcode: 'CM19',
    area: 'West Harlow',
    subAreas: [
      { name: 'Sumners Farm', postcode: 'CM19', note: 'Edge of town towards Roydon' },
      { name: 'Joyners Field', postcode: 'CM19', note: 'Mid-density family housing' },
      { name: 'Westfield', postcode: 'CM19', note: 'Established residential area' },
    ],
  },
  {
    name: 'Staple Tye',
    slug: 'staple-tye',
    postcode: 'CM18',
    area: 'West Harlow',
    subAreas: [
      { name: 'Staple Tye Shopping Centre', postcode: 'CM18', note: 'Local retail hub' },
      { name: 'Latton Bush', postcode: 'CM18', note: 'Adjacent residential area' },
      { name: 'Brays Grove', postcode: 'CM18', note: 'Family housing close to schools' },
    ],
  },
  {
    name: 'The Stow',
    slug: 'the-stow',
    postcode: 'CM20',
    area: 'Central Harlow',
    subAreas: [
      { name: 'The Stow shopping precinct', postcode: 'CM20', note: 'Original 1950s neighbourhood centre' },
      { name: 'Mark Hall North', postcode: 'CM20', note: 'Adjacent residential area' },
      { name: 'Pittmans Field', postcode: 'CM20', note: 'Family housing close to the precinct' },
    ],
  },
  {
    name: 'Mark Hall',
    slug: 'mark-hall',
    postcode: 'CM20',
    area: 'Central Harlow',
    subAreas: [
      { name: 'First Avenue', postcode: 'CM20', note: 'Spine road through Mark Hall' },
      { name: 'Mark Hall South', postcode: 'CM20', note: 'Established 1950s residential' },
      { name: 'Park Lane', postcode: 'CM20', note: 'Connecting road to town centre' },
    ],
  },
  {
    name: 'Netteswell',
    slug: 'netteswell',
    postcode: 'CM20',
    area: 'Central Harlow',
    subAreas: [
      { name: 'Town Park', postcode: 'CM20', note: 'Adjacent to the central park and Pets\' Corner' },
      { name: 'Bush Fair', postcode: 'CM18', note: 'Local shopping centre' },
      { name: 'Tendring Road', postcode: 'CM20', note: 'Mid-density residential' },
    ],
  },
  {
    name: 'Sawbridgeworth',
    slug: 'sawbridgeworth',
    postcode: 'CM21',
    area: 'Adjacent',
    subAreas: [
      { name: 'Sawbridgeworth High Street', postcode: 'CM21', note: 'Historic Hertfordshire market town' },
      { name: 'Spellbrook', postcode: 'CM21', note: 'Village just north towards Bishops Stortford' },
      { name: 'Bell Street', postcode: 'CM21', note: 'Town-centre residential' },
      { name: 'Pishiobury Drive', postcode: 'CM21', note: 'Higher-value residential close to the park' },
    ],
  },
  {
    name: 'Roydon',
    slug: 'roydon',
    postcode: 'CM19',
    area: 'Adjacent',
    subAreas: [
      { name: 'Roydon village', postcode: 'CM19', note: 'Lee Valley village west of Harlow' },
      { name: 'Roydon Marina', postcode: 'CM19', note: 'Riverside community on the Lee Navigation' },
      { name: 'Epping Road', postcode: 'CM19', note: 'Connecting road towards Epping' },
    ],
  },
];

// Helpers
export function getAreaHubBySlug(slug: string): AreaHub | undefined {
  return AREA_HUBS.find(a => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREA_HUBS.map(a => a.slug);
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
