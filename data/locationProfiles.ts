// data/locationProfiles.ts
// Compact rich profile per area — used in sidebars and header bands
// alongside the longer-form areaContent. Maps slugs to a one-liner
// character + dominant patient mix + key clinical challenge.

export interface LocationProfile {
  name: string;
  slug: string;
  postcode: string;
  character: string;
  dominantPatientType: string;
  keyClinicalChallenge: string;
  patientMix: string[];
}

export const locationProfiles: Record<string, LocationProfile> = {

  'old-harlow': {
    name: 'Old Harlow',
    slug: 'old-harlow',
    postcode: 'CM17',
    character: 'Historic conservation core of Harlow with longer-tenured families and substantial restorative dental history',
    dominantPatientType: 'Established residents with decades of dental restoration history',
    keyClinicalChallenge: 'Crown and bridge maintenance on heavily restored teeth, often dating back to the 1980s',
    patientMix: [
      'long-established residents',
      'older homeowners with crown-and-bridge maintenance needs',
      'families with school-age children',
      'high-street workers needing convenient slots',
    ],
  },

  'church-langley': {
    name: 'Church Langley',
    slug: 'church-langley',
    postcode: 'CM17',
    character: 'Modern village built around the Henry Moore School and Tesco Extra, family-heavy demographic',
    dominantPatientType: 'School-catchment families with children in the rugby and football age range',
    keyClinicalChallenge: 'Paediatric and teenage sport trauma — knocked-out teeth, fractured incisors',
    patientMix: [
      'school-aged children',
      'teenagers in rugby and football clubs',
      'working parents needing Saturday slots',
      'wisdom-tooth pain in late teens',
    ],
  },

  'newhall': {
    name: 'Newhall',
    slug: 'newhall',
    postcode: 'CM17',
    character: 'Award-winning modern development with a young, transient, design-conscious resident base',
    dominantPatientType: 'Young couples and first-time buyers, many not yet registered with a regular dentist',
    keyClinicalChallenge: 'First-time emergency presentations from new arrivals without dental records in Harlow',
    patientMix: [
      'first-time buyers',
      'young couples',
      'renters new to the area',
      'London commuters needing Saturday slots',
      'wisdom-tooth pain in twenty-somethings',
    ],
  },

  'sumners': {
    name: 'Sumners',
    slug: 'sumners',
    postcode: 'CM19',
    character: 'Established western residential neighbourhood with mid-density family housing',
    dominantPatientType: 'Long-tenured Harlow families with mixed ages and standard restorative history',
    keyClinicalChallenge: 'Mixed presentations — paediatric trauma, working-age toothache, older-resident crown failures',
    patientMix: [
      'established families',
      'school-age children',
      'older residents with crown maintenance',
      'working-age adults employed in Harlow',
    ],
  },

  'staple-tye': {
    name: 'Staple Tye',
    slug: 'staple-tye',
    postcode: 'CM18',
    character: 'South-western Harlow neighbourhood anchored by the Staple Tye shopping centre and adjacent to Latton Bush',
    dominantPatientType: 'Family-residential demographic with school-age children and working parents',
    keyClinicalChallenge: 'School-age trauma from local primary schools and weekend out-of-hours pressure',
    patientMix: [
      'school-age children',
      'working parents',
      'older residents with restorative history',
      'families with NHS preference',
    ],
  },

  'the-stow': {
    name: 'The Stow',
    slug: 'the-stow',
    postcode: 'CM20',
    character: 'Original 1950s neighbourhood centre — one of the four founding Harlow precincts',
    dominantPatientType: 'Mixed long-tenured residents and newer apartment-development arrivals',
    keyClinicalChallenge: 'Broad case mix from one of the highest-density dental-practice catchments in the borough',
    patientMix: [
      'long-tenured 1950s housing residents',
      'newer apartment residents',
      'working-age adults employed locally',
      'older residents with crown maintenance needs',
    ],
  },

  'mark-hall': {
    name: 'Mark Hall',
    slug: 'mark-hall',
    postcode: 'CM20',
    character: 'Original Harlow neighbourhood from the 1947 New Town designation, multi-generational residents',
    dominantPatientType: 'Long-tenured Harlow families, often with three generations using the same local dentists',
    keyClinicalChallenge: 'Heavily restored mouths in older residents with restoration history dating to the 1980s',
    patientMix: [
      'long-tenured Harlow families',
      'older patients with extensive restorative history',
      'working-age adults in central Harlow',
      'school-age children at surrounding primary schools',
    ],
  },

  'netteswell': {
    name: 'Netteswell',
    slug: 'netteswell',
    postcode: 'CM20',
    character: 'Central Harlow neighbourhood adjacent to Town Park — recreational injury hub',
    dominantPatientType: 'Mixed central residents with high sport- and recreation-related trauma rate',
    keyClinicalChallenge: 'Avulsion and fracture trauma from Town Park sports and surrounding playing fields',
    patientMix: [
      'sports and park-recreation injury cases',
      'established families',
      'working-age adults employed centrally',
      'older residents with maintenance needs',
    ],
  },

  'sawbridgeworth': {
    name: 'Sawbridgeworth',
    slug: 'sawbridgeworth',
    postcode: 'CM21',
    character: 'Historic Hertfordshire market town just north of Harlow with established family demographic',
    dominantPatientType: 'Long-tenured residents with established dental relationships and London commuters',
    keyClinicalChallenge: 'Crown-and-bridge maintenance on long-restored teeth, NHS access through Harlow practices',
    patientMix: [
      'long-established residents',
      'older homeowners',
      'families with local-school children',
      'newer Pishiobury Drive arrivals',
      'London commuters via Liverpool Street',
    ],
  },

  'roydon': {
    name: 'Roydon',
    slug: 'roydon',
    postcode: 'CM19',
    character: 'Lee Valley village with marina, country lanes, and rural surrounding parishes',
    dominantPatientType: 'Settled village residents and recreational-area visitors',
    keyClinicalChallenge: 'Outdoor and rural trauma (cycling, horse riding) plus established-resident maintenance',
    patientMix: [
      'long-established village residents',
      'families with local children',
      'Marina development arrivals',
      'rural residents from surrounding lanes',
    ],
  },
};

export const getLocationProfile = (slug: string): LocationProfile | undefined =>
  locationProfiles[slug];
