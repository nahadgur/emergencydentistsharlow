// data/services.ts
export interface FAQ { question: string; answer: string; }
export interface Service {
  id: string;
  title: string;
  slug: string;
  shortLabel: string; // form select label
  description: string;
  urgencyTier: 'critical' | 'urgent' | 'priority';
  icon: string;
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: 'severe-toothache',
    title: 'Severe toothache',
    slug: 'severe-toothache',
    shortLabel: 'Severe toothache or sensitivity',
    description:
      'Sharp, throbbing, or constant tooth pain that has not responded to over-the-counter painkillers. Usually caused by deep decay, pulpitis, or an early abscess. Matched dentists provide same-day pain relief and identify the underlying cause.',
    urgencyTier: 'urgent',
    icon: 'Zap',
    faqs: [
      {
        question: 'How quickly should I see a dentist for severe toothache?',
        answer:
          'Same day if pain is severe and unrelieved by ibuprofen or paracetamol. Pain that wakes you from sleep, prevents eating, or is accompanied by facial swelling needs urgent assessment — not because the pain itself is dangerous, but because the underlying cause (often pulpitis or early infection) progresses without treatment and becomes harder to resolve.',
      },
      {
        question: 'What can I do for severe toothache before I am seen?',
        answer:
          'Take ibuprofen and paracetamol together at recommended doses (they work on different pain pathways and have additive effect). Avoid hot or very cold food and drink. Do not place aspirin against the gum (it burns soft tissue). Sleep with your head slightly elevated. None of this fixes the cause — only the dentist can — but it should make the wait more bearable.',
      },
      {
        question: 'Will the emergency appointment fix the problem?',
        answer:
          'Usually the emergency appointment provides immediate pain relief — opening the tooth to release pressure, prescribing antibiotics for infection, or temporary dressing — with definitive treatment (root canal, extraction, or restoration) booked at a follow-up. Some straightforward cases are fully resolved at the emergency visit; the matched dentist will tell you what to expect.',
      },
    ],
  },

  {
    id: 'knocked-out-tooth',
    title: 'Knocked-out tooth (avulsion)',
    slug: 'knocked-out-tooth',
    shortLabel: 'Knocked-out tooth (avulsion)',
    description:
      'A permanent adult tooth completely knocked out from trauma — sport, fall, or accident. The first 60 minutes are critical for re-implantation. Matched dentists prioritise these as same-day emergencies and can re-implant successfully if the tooth is preserved correctly.',
    urgencyTier: 'critical',
    icon: 'AlertTriangle',
    faqs: [
      {
        question: 'What should I do immediately if a tooth has been knocked out?',
        answer:
          'For an adult permanent tooth: pick it up by the crown (not the root), rinse briefly in milk or saliva (NOT water — water damages the root surface cells), and either re-insert it into the socket immediately if possible, or store it in milk or inside the cheek pouch. Get to a dentist within 60 minutes — the survival rate of a re-implanted tooth drops sharply after the first hour. Do NOT attempt to re-insert a child\'s baby tooth — those are not re-implanted.',
      },
      {
        question: 'Can a knocked-out tooth always be saved?',
        answer:
          'Not always — but the chances are dramatically better the faster you act. A clean adult tooth re-implanted within 30 minutes has the best prognosis. By 60 minutes, success rates fall significantly. By two hours, re-implantation rarely succeeds long-term. The matched dentist will assess viability and either re-implant immediately or discuss replacement options (implant, bridge, or denture) if re-implantation is not possible.',
      },
      {
        question: 'What if it is a child\'s baby tooth?',
        answer:
          'Baby (deciduous) teeth are not re-implanted — re-inserting a baby tooth risks damaging the developing adult tooth underneath. The child still needs an emergency dental assessment to check for fragments left in the socket and to manage pain, but do not try to put the tooth back. Bring the tooth with you so the dentist can confirm it is whole.',
      },
    ],
  },

  {
    id: 'broken-or-chipped-tooth',
    title: 'Broken or chipped tooth',
    slug: 'broken-or-chipped-tooth',
    shortLabel: 'Broken or chipped tooth',
    description:
      'A tooth that has fractured, cracked, or had a piece broken off — typically from biting hard food or trauma. Severity ranges from cosmetic chip to deep fracture exposing the nerve. Matched dentists assess whether emergency treatment is needed or whether it can wait for a routine repair.',
    urgencyTier: 'urgent',
    icon: 'Slash',
    faqs: [
      {
        question: 'Does every broken tooth need emergency treatment?',
        answer:
          'No. A small cosmetic chip with no pain or sensitivity can usually wait a few days for a routine appointment. A deeper break that exposes the dentine (sensitive to hot/cold) or pulp (severe pain, visible pink or red tissue) needs same-day attention to prevent infection and protect the nerve. The matched dentist will triage by severity.',
      },
      {
        question: 'Should I keep the broken piece?',
        answer:
          'Yes if you can. For larger fragments — especially front teeth — modern bonding can sometimes re-attach the original piece for the best cosmetic result. Store it in milk or saline. For small chips, the dentist will usually rebuild with composite rather than re-attach.',
      },
      {
        question: 'What about a cracked tooth that is not visibly broken?',
        answer:
          'Cracked tooth syndrome — pain on biting that disappears when pressure releases, often without a visible crack — is a common dental emergency. The crack lets bacteria reach the pulp. Diagnosis requires examination and sometimes a special "tooth slooth" test. Treatment depends on crack depth: from a crown that holds the tooth together to root canal or extraction in severe cases.',
      },
    ],
  },

  {
    id: 'lost-filling-or-crown',
    title: 'Lost filling or crown',
    slug: 'lost-filling-or-crown',
    shortLabel: 'Lost filling or crown',
    description:
      'A filling or crown has fallen out, leaving the underlying tooth exposed. Usually painful with hot, cold, or sweet food. Not life-threatening but should be repaired within a few days to prevent further decay and protect the remaining tooth structure.',
    urgencyTier: 'priority',
    icon: 'Package',
    faqs: [
      {
        question: 'Is a lost filling or crown a true emergency?',
        answer:
          'Usually a same-week priority rather than a same-day emergency, unless severe pain is involved. The exposed tooth is more vulnerable to decay and fracture, so quick repair matters — but a few days is generally fine. Use over-the-counter temporary filling material (available from pharmacies) to protect the tooth in the interim.',
      },
      {
        question: 'Can I re-cement a crown that has fallen out?',
        answer:
          'A pharmacy temporary cement (e.g. Recapit) can hold a crown in place for a few days until you can be seen. Clean the inside of the crown and the tooth gently before re-cementing. Avoid biting hard food on it and see a dentist promptly for permanent re-cementation, which uses a much stronger adhesive than the temporary kit.',
      },
      {
        question: 'What if I have swallowed the filling or crown?',
        answer:
          'Swallowed dental restorations almost always pass harmlessly through the digestive tract within a day or two. The dentist can replace the filling or crown rather than re-using it — modern restorations are made fresh from impressions, so you have not lost anything irreplaceable. If you experience chest pain or breathing difficulty after a swallowed restoration, seek immediate medical attention.',
      },
    ],
  },

  {
    id: 'dental-abscess',
    title: 'Dental abscess and facial swelling',
    slug: 'dental-abscess',
    shortLabel: 'Dental abscess or facial swelling',
    description:
      'A bacterial infection causing localised pus collection — visible as a gum boil, or causing facial swelling, fever, or general feeling of being unwell. Always urgent. Spreading swelling to the eye, throat, or neck is a medical emergency requiring 999 or NHS 111, not a routine dental visit.',
    urgencyTier: 'critical',
    icon: 'AlertCircle',
    faqs: [
      {
        question: 'When does a dental abscess become a medical emergency?',
        answer:
          'Call 999 or NHS 111 — not a dentist — if facial swelling is spreading to your eye, neck, or throat; if you have difficulty breathing, swallowing, or opening your mouth; if you have a high fever (over 38.5°C) with shaking chills; or if you feel generally very unwell. Spreading orofacial infection can compromise the airway and is treated as a hospital admission, not an outpatient dental visit.',
      },
      {
        question: 'Will antibiotics fix a dental abscess on their own?',
        answer:
          'No. Antibiotics control the infection while the dentist drains the abscess and treats the underlying cause (root canal or extraction). Antibiotics alone do not cure a dental abscess because the source — the infected nerve or socket — is still present. Many GPs will not prescribe dental antibiotics because they cannot fix the underlying problem; the dentist needs to see you.',
      },
      {
        question: 'How long can I wait with a dental abscess before seeking care?',
        answer:
          'Same day if at all possible. A localised abscess that is not yet causing facial swelling can sometimes wait 24–48 hours, but progression is unpredictable. The risk of waiting is rapid spread — what is a manageable abscess on Monday morning can be a hospital admission by Tuesday evening. Submit the matching form as soon as you suspect an abscess.',
      },
    ],
  },

  {
    id: 'out-of-hours',
    title: 'Evening, weekend & bank-holiday emergencies',
    slug: 'out-of-hours',
    shortLabel: 'Out-of-hours emergency (evening / weekend / bank holiday)',
    description:
      'Genuine dental emergencies that occur outside standard clinic hours. Several Harlow dentists in our network offer Saturday morning slots, with a smaller subset covering Sundays and bank holidays. NHS 111 also maintains a free emergency dental rota for genuine out-of-hours need.',
    urgencyTier: 'urgent',
    icon: 'Moon',
    faqs: [
      {
        question: 'Are there emergency dentists open in Harlow on Sundays?',
        answer:
          'A small number of Harlow practices offer Sunday emergency slots, typically by appointment only and at a premium fee compared to weekday rates. NHS 111 (free, 24/7) maintains a directory of dentists with formal out-of-hours rotas and can book emergency NHS appointments directly. For our matching service, Sunday enquiries are handled first thing Monday morning unless you mark the request as critical.',
      },
      {
        question: 'What counts as an out-of-hours dental emergency?',
        answer:
          'Severe pain unrelieved by over-the-counter painkillers, uncontrolled bleeding after a recent extraction, dental trauma (knocked-out adult tooth, significant fracture), or facial swelling. Lost fillings, mild toothache, or chipped teeth can usually wait until the next working day. NHS 111 and the matched dentist both apply this triage.',
      },
      {
        question: 'How much do out-of-hours emergency appointments cost?',
        answer:
          'Private out-of-hours emergency consultations in Harlow are typically £150–£250, with treatment costed separately. NHS out-of-hours emergency treatment (booked through NHS 111) costs the standard NHS Band 1 rate of £27.40 in 2026, with any further treatment at the appropriate band. The matched private dentist quotes upfront before any treatment.',
      },
    ],
  },

  {
    id: 'wisdom-tooth-pain',
    title: 'Wisdom tooth pain',
    slug: 'wisdom-tooth-pain',
    shortLabel: 'Wisdom tooth pain (pericoronitis)',
    description:
      'Pain, swelling, or infection around an erupting or partially-erupted wisdom tooth — most often pericoronitis, where the gum flap over the tooth becomes inflamed and infected. Common in 17–25 year olds. Matched dentists provide immediate relief and discuss whether removal is needed.',
    urgencyTier: 'urgent',
    icon: 'CircleDot',
    faqs: [
      {
        question: 'What is pericoronitis and why does it happen?',
        answer:
          'Pericoronitis is inflammation of the soft tissue over a partially-erupted wisdom tooth — the gum flap traps food and bacteria, leading to infection. It causes localised pain, swelling, bad taste, and difficulty opening the jaw fully. It is the single most common wisdom-tooth emergency. Treatment typically combines irrigation, sometimes antibiotics, and discussion of whether the tooth should be removed to prevent recurrence.',
      },
      {
        question: 'Do all wisdom teeth that cause pain need to be removed?',
        answer:
          'No. Many episodes of pericoronitis settle with cleaning and antibiotics without extraction. NICE guidance recommends extraction only where there is a clear clinical case — repeated infections, decay that cannot be restored, cysts, or impaction causing damage to adjacent teeth. The matched dentist applies these criteria rather than defaulting to extraction.',
      },
      {
        question: 'Can I manage wisdom tooth pain at home before my appointment?',
        answer:
          'Yes, partially. Warm salt-water rinses (a teaspoon of salt in a cup of warm water) several times a day clean the gum flap area. Ibuprofen reduces inflammation and pain. Soft food avoids further trauma. None of this resolves the underlying problem — only the dentist can — but it should reduce discomfort while you wait for the appointment.',
      },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);
