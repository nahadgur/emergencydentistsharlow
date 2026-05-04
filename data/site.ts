// data/site.ts
export const siteConfig = {
  name: 'Emergency Dentists Harlow',
  tagline: 'Same-day matching with vetted Harlow emergency dentists',
  url: 'https://www.emergencydentistsharlow.co.uk',
  description:
    'Free matching service for urgent dental care in Harlow. Severe toothache, knocked-out tooth, broken tooth, abscess, lost filling — matched within an hour during opening hours, next-morning otherwise. GDC-registered dentists across CM17, CM18, CM19, CM20.',
  // Geographic service area (used in schema). Centralised so organisation/
  // service schemas don't depend on string-parsing the site name.
  serviceArea: 'Harlow, Essex',
  // Google Analytics tracking ID — placeholder until set up. ConsentBanner
  // only loads GA when this is non-empty AND consent has been granted.
  gaId: '',
  // Phone disclaimer — we are NOT inbound-phone. The matched dentist
  // calls back. NHS 111 is for genuine medical emergencies (uncontrolled
  // bleeding, facial swelling spreading to eye/throat/neck, breathing
  // difficulty). 999 for life-threatening trauma.
};

// Real client testimonials only. Empty until verifiable reviews are
// collected; fabricated reviews are an E-E-A-T risk especially in a
// YMYL (Your Money Your Life) health niche where Google scrutinises
// trust signals more strictly.
export const TESTIMONIALS: {
  id: string; name: string; location: string; service: string; rating: number; text: string;
}[] = [];

export const TRUST_BADGES = [
  {
    icon: 'ShieldCheck',
    title: 'GDC-registered dentists only',
    description:
      'Every emergency dentist in our matching network is currently registered with the General Dental Council and carries professional indemnity insurance. We verify status annually.',
  },
  {
    icon: 'Clock',
    title: 'Matched within the hour',
    description:
      'Submit the form during opening hours and we aim to introduce you to a matched dentist within 60 minutes. Out-of-hours enquiries are matched first thing the next working morning.',
  },
  {
    icon: 'MapPin',
    title: 'Harlow and CM postcodes',
    description:
      'Coverage across all Harlow neighbourhoods plus the CM postcode towns (Sawbridgeworth, Roydon, Old Harlow). Many dentists offer Saturday and Sunday slots.',
  },
  {
    icon: 'Heart',
    title: 'Free to all patients',
    description:
      'You pay only the dentist for the treatment you receive. The matching service is funded by our network — never by patients.',
  },
];

export const FAQS_HOME = [
  {
    question: 'How quickly can you match me with an emergency dentist in Harlow?',
    answer:
      'During clinic opening hours (typically 8am–6pm Monday to Friday and limited Saturday hours) we aim to make an introduction within 60 minutes of receiving your enquiry. For out-of-hours enquiries (evenings, Sundays, bank holidays) we match first thing the next working morning. If your situation is genuinely life-threatening — uncontrolled bleeding, facial swelling spreading to your eye, throat or neck, or any breathing difficulty — call 999 or NHS 111 rather than waiting for our match.',
  },
  {
    question: 'What does an emergency dental appointment in Harlow typically cost?',
    answer:
      'Private emergency consultations in Harlow typically run £80–£150 for the appointment itself, with treatment costed on top depending on what is needed. NHS emergency appointments cost £27.40 (Band 1) for examination and any necessary urgent treatment to relieve pain. The matched dentist provides a clear quote before any treatment begins so you know what you are agreeing to.',
  },
  {
    question: 'Is the matching service really free?',
    answer:
      'Yes — completely free for patients. Dentists in our network pay us a small referral fee when an introduction leads to a booked appointment. We are never paid by the patient at any stage and we add no markup to the dentist\'s quoted fee.',
  },
  {
    question: 'Can you help with NHS emergency dental access in Harlow?',
    answer:
      'Many dentists in our network see both NHS and private patients. Where NHS emergency access is your preference, we will prioritise dentists with NHS availability. If no NHS slot is available within a clinically appropriate window for your situation, the dentist will tell you and discuss private options. NHS 111 (free) can also book NHS emergency appointments directly.',
  },
];

export const FAQS_SERVICES = [
  {
    question: 'Do Harlow emergency dentists handle out-of-hours appointments?',
    answer:
      'Several dentists in our network offer Saturday morning emergency slots, and a smaller subset cover Sundays and bank holidays. For genuine out-of-hours emergencies that cannot wait until morning (severe uncontrolled pain, facial swelling), NHS 111 maintains a directory of dentists with formal out-of-hours rotas — call free on 111 for immediate guidance.',
  },
  {
    question: 'What payment methods do emergency dentists in Harlow accept?',
    answer:
      'Most accept card payment at the time of appointment (debit and credit), with a few offering payment plans for treatment over £500. Patients with private dental insurance should bring their policy details — many emergency consultations are covered, though check your policy excess. NHS emergency treatment is paid at the standard NHS Band 1 rate (£27.40 in 2026).',
  },
  {
    question: 'Will the same dentist provide follow-up treatment?',
    answer:
      'In most cases yes — emergency consultations naturally lead to follow-up appointments for permanent fixes (crowns after root canals, implants for avulsion cases, etc.). The matched dentist will discuss the full treatment plan at the emergency visit and confirm whether they can take you on as a regular patient if you wish.',
  },
];

export const FAQS_LOCATION = [
  {
    question: 'Which Harlow areas does the matching service cover?',
    answer:
      'All Harlow neighbourhoods including Old Harlow, Church Langley, Newhall, Sumners, Staple Tye, The Stow, Mark Hall, and Netteswell. We also cover the surrounding CM-postcode towns most often served by Harlow dentists — Sawbridgeworth and Roydon principally. If you are unsure whether your area is covered, submit the form anyway and we will tell you.',
  },
  {
    question: 'How do you choose which dentist to match me with?',
    answer:
      'We read your enquiry, identify the closest GDC-registered dentists in our network with the right experience for your situation (some specialise in trauma, some in endodontic emergencies, etc.), and check who has availability that fits your urgency. We aim to match you with a dentist within a reasonable travel distance from your stated location.',
  },
  {
    question: 'What if I am not in central Harlow but in a surrounding village?',
    answer:
      'Many dentists in central Harlow regularly see patients from Sawbridgeworth, Roydon, Old Harlow, and the wider CM postcode area. The matching covers your situation regardless of which side of town you are on, though for genuinely rural Essex postcodes we may not have the closest possible dentist in our network — the matched dentist will still see you, just with potentially a longer drive.',
  },
];

export const testimonials = TESTIMONIALS;
export const trustBadges = TRUST_BADGES;
