// data/blog.ts
// Hand-written blog content. Start small (4 posts) and add as you go.
// Every post is reviewed for clinical accuracy — YMYL niche, Google's
// E-E-A-T bar is high, generic AI-generated content is an active liability.

export interface ContentBlock {
  type: 'p' | 'h2' | 'h3' | 'list' | 'note';
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Emergency basics' | 'Trauma & first aid' | 'Pain management' | 'Local';
  publishDate: string;
  excerpt: string;
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'what-to-do-if-you-knock-out-a-tooth',
    title: 'What to do if you knock out a tooth — the first 60 minutes',
    metaTitle: 'Knocked-out Tooth: First 60 Minutes Guide (UK)',
    metaDescription:
      'Step-by-step guide for what to do in the first hour after a knocked-out adult tooth. How to pick up, store, and re-implant for the best chance of saving the tooth.',
    category: 'Trauma & first aid',
    publishDate: '2026-05-04',
    excerpt:
      'A knocked-out adult tooth is one of the few true dental emergencies where every minute counts. Here is exactly what to do in the first 60 minutes — and what to avoid.',
    content: [
      { type: 'p', text: 'A completely knocked-out adult permanent tooth (an "avulsion" in clinical terms) is one of the few dental emergencies where the first 60 minutes determine the outcome. The cells on the root surface that allow the tooth to re-attach to the jaw bone start dying within minutes of being out of the socket. By 30 minutes the success rate is dropping. By 60 minutes it has dropped sharply. By two hours, long-term success is rare.' },
      { type: 'p', text: 'The good news: re-implantation is straightforward in concept. A correctly preserved adult tooth, brought to a dentist within the hour, has an excellent chance of long-term survival. Here is exactly what to do.' },

      { type: 'h2', text: 'Step 1: Pick up the tooth correctly' },
      { type: 'p', text: 'Pick up the tooth by the crown — the white biting part you see in the mouth. Do NOT touch the root (the yellower, narrower part that was inside the gum). The cells on the root surface are exactly what make re-attachment possible, and they are easily damaged by handling.' },
      { type: 'p', text: 'If the tooth is dirty (covered in soil, blood, debris), rinse it briefly — under 10 seconds — in milk or saliva. Do not use water. Water is hypotonic relative to the cells on the root surface, which means it draws water into the cells and damages them by osmotic pressure. Milk and saliva have the right osmotic balance.' },

      { type: 'h2', text: 'Step 2: Re-insert the tooth into the socket if you can' },
      { type: 'p', text: 'If the patient is alert and you can do it without forcing, push the tooth gently back into the socket where it came from. It should slot in with mild pressure. Have the patient bite gently on a clean cloth or gauze to hold it in place during transport.' },
      { type: 'p', text: 'Re-implantation in the socket is the best preservation method by a wide margin. The natural socket environment maintains the cell viability better than any storage medium.' },

      { type: 'h2', text: 'Step 3: If you cannot re-insert, store correctly' },
      { type: 'p', text: 'Where re-insertion is not practical (a child too distressed, the patient unconscious or unable to cooperate, the tooth visibly fractured), store the tooth in:' },
      { type: 'list', items: [
        'Cold milk — best practical storage medium. Most households have it.',
        'The patient\'s own saliva — store the tooth inside the cheek pouch (NOT for small children who might swallow it).',
        'Saline solution — if you happen to have contact lens saline, this works too.',
      ] },
      { type: 'p', text: 'Avoid: water, dry tissue, bare hands. All damage the root cells.' },

      { type: 'h2', text: 'Step 4: Get to a dentist within the hour' },
      { type: 'p', text: 'Submit our matching form marked "knocked-out tooth" or call NHS 111 if you are out of normal hours. Avulsion calls bypass any normal queueing in our matching service — we aim to confirm a Harlow practice within 15 minutes during opening hours.' },
      { type: 'p', text: 'The dentist will clean the tooth and socket, re-implant if not already in place, splint the tooth to its neighbours for 1–2 weeks, prescribe antibiotics, and check tetanus status. Follow-up appointments monitor whether the tooth is taking root or being rejected.' },

      { type: 'h2', text: 'Getting a knocked-out tooth seen in Harlow' },
      { type: 'p', text: 'For the tooth itself, speed matters more than distance: re-implant it or store it in milk and head for the first available dentist. During the day we aim to confirm a practice across Harlow and the surrounding CM postcodes, from Old Harlow and Church Langley to Staple Tye and Sawbridgeworth. Out of hours, NHS 111 directs you to the local urgent dental rota, which in this area can sit in Harlow, Bishop\'s Stortford or Epping.' },
      { type: 'p', text: 'If the knock-out came with a heavier facial injury, deep cuts, a possible broken jaw, or bleeding you cannot control with pressure, that is an A&E matter rather than a dental one. The nearest emergency department is at Princess Alexandra Hospital on Hamstel Road in Harlow. Take the tooth with you in milk so a dentist can still attempt re-implantation afterwards.' },

      { type: 'h2', text: 'A different rule for baby teeth' },
      { type: 'p', text: 'If a child knocks out a baby (deciduous) tooth, do NOT try to re-insert it. Re-implanting a baby tooth risks damaging the developing adult tooth in the bone underneath. The child still needs an emergency dental check — the dentist will examine the socket for retained fragments, check for damage to the adult tooth bud, and manage pain. Bring the tooth so the dentist can confirm it is whole.' },

      { type: 'note', text: 'This guide is for adult permanent teeth. For children\'s baby teeth, do not re-insert — see a dentist for assessment but leave the tooth out.' },

      { type: 'h2', text: 'What if the tooth has been out for more than two hours?' },
      { type: 'p', text: 'Long-term success is rare beyond two hours, but not impossible — especially if the tooth was preserved in milk for some of that time. Bring the tooth in any case. The dentist will assess and either re-implant with realistic expectations or discuss replacement options (implant, bridge, or denture). A late-presented avulsion is still better managed by a dentist than left.' },
    ],
  },

  {
    slug: 'managing-severe-toothache-before-you-can-be-seen',
    title: 'Managing severe toothache before you can be seen',
    metaTitle: 'Severe Toothache: Pain Relief Guide Before Dentist',
    metaDescription:
      'Practical guide to managing severe toothache while waiting for an emergency dental appointment in Harlow. Painkillers, what to avoid, when to seek urgent care.',
    category: 'Pain management',
    publishDate: '2026-05-04',
    excerpt:
      'Severe toothache rarely settles overnight. Here is what works to manage it while you wait for the matched dentist appointment — and what to avoid.',
    content: [
      { type: 'p', text: 'Severe toothache is one of the worst pains in dentistry. Throbbing, constant, often worse when lying down, sometimes radiating to the jaw and ear. Most patients reach for whatever painkiller is in the bathroom cabinet, take whatever the packet says, and find it does not touch the pain. There is a better approach.' },

      { type: 'h2', text: 'Combine ibuprofen and paracetamol' },
      { type: 'p', text: 'The single most effective over-the-counter approach for severe toothache is to take ibuprofen and paracetamol together. They work on different pain pathways — ibuprofen reduces inflammation, paracetamol blocks pain signals centrally — and the combined effect is materially greater than either alone. Adult dosing:' },
      { type: 'list', items: [
        'Ibuprofen 400mg every 6 hours (maximum 1200mg per day OTC; a doctor can prescribe higher)',
        'Paracetamol 1000mg every 4–6 hours (maximum 4000mg per day)',
        'You can take both at the same time, or stagger them — both work',
      ] },
      { type: 'p', text: 'This combination is not magic — it will not work as well as a dentist actually treating the cause — but it makes the wait considerably more bearable. Check the packets for any contraindications and do not exceed the stated doses.' },

      { type: 'h2', text: 'What to avoid' },
      { type: 'list', items: [
        'Aspirin against the gum — the old myth. Aspirin is acidic and burns soft tissue. It does nothing for the tooth and produces a chemical ulcer.',
        'Whisky against the tooth — alcohol mucosal application briefly numbs but the underlying pain returns intensified.',
        'Hot food and drink — heat dilates the inflamed pulp tissue and increases pain dramatically.',
        'Very cold food and drink — for the same reason, cold can spike pain in an inflamed tooth.',
        'Lying flat — gravity reduces blood flow to the head and reduces throbbing pain. Sleep with two or three pillows propping you up.',
      ] },

      { type: 'h2', text: 'Things that help mildly' },
      { type: 'list', items: [
        'Warm (not hot) salt-water rinses — a teaspoon of salt in a cup of warm water, rinsed several times. Particularly helpful where there is gum swelling.',
        'Clove oil dabbed sparingly on the tooth using a cotton bud — eugenol in clove oil has mild local anaesthetic effect. Do not swallow.',
        'Cold compress on the cheek (not directly on the tooth) — for visible facial swelling.',
      ] },

      { type: 'h2', text: 'When to escalate beyond the matching service' },
      { type: 'p', text: 'Call NHS 111 (free, 24/7) or 999 if you have any of:' },
      { type: 'list', items: [
        'Facial swelling spreading towards your eye, throat, or neck',
        'Difficulty swallowing or breathing',
        'High fever (over 38.5°C) with shaking chills',
        'Generally feeling very unwell — disoriented, severely fatigued',
      ] },
      { type: 'p', text: 'Spreading orofacial infection is a medical emergency requiring hospital admission, not a paid private dental visit. The matching service is for dental-only emergencies; call 111 or 999 for spreading infection signs.' },

      { type: 'h2', text: 'Getting seen in Harlow while you wait' },
      { type: 'p', text: 'Painkillers buy you time, not a cure. During opening hours our matching service looks for the soonest slot across Harlow and the nearby CM postcodes, including Church Langley, Newhall, The Stow and Sawbridgeworth. Out of hours, NHS 111 books the local urgent dental rota, which may place you in Harlow, Bishop\'s Stortford or Epping depending on who is on call.' },
      { type: 'p', text: 'If the toothache is joined by spreading facial swelling, trouble swallowing or breathing, or a high fever, do not wait for a dental slot. The emergency department at Princess Alexandra Hospital on Hamstel Road in Harlow handles spreading dental infection, which is the right route when painkillers and a routine appointment are no longer enough.' },

      { type: 'h2', text: 'Why the dentist visit matters even after symptoms settle' },
      { type: 'p', text: 'Severe toothache that "settles by itself" is rarely good news. Most often it means the nerve has died and stopped sending pain signals — the underlying decay or infection is still progressing, just silently. Three weeks later it returns as an abscess or facial swelling. The matching service introduces you to a dentist who will diagnose the cause whether the pain has settled or not.' },
    ],
  },

  {
    slug: 'nhs-vs-private-emergency-dental-harlow',
    title: 'NHS vs private emergency dental in Harlow — the practical difference',
    metaTitle: 'NHS vs Private Emergency Dentist in Harlow (2026)',
    metaDescription:
      'Practical comparison of NHS and private emergency dental access in Harlow. Costs, waiting times, what is and is not covered, and how to use NHS 111.',
    category: 'Local',
    publishDate: '2026-05-04',
    excerpt:
      'Harlow has both NHS and private emergency dental routes. Here is how to choose between them based on your situation, urgency, and cost preference.',
    content: [
      { type: 'p', text: 'When you need an emergency dentist in Harlow, you have two parallel options: the NHS emergency dental service (accessed via NHS 111) and private emergency appointments (accessed via direct booking or our matching service). Most people don\'t know there is a choice, or assume "NHS for free" is always better. The reality is more nuanced.' },

      { type: 'h2', text: 'NHS emergency dental — how it works in Harlow' },
      { type: 'p', text: 'The NHS emergency dental pathway is via NHS 111 (free, 24/7). You call 111, describe your symptoms, and the operator either books you an emergency appointment with a dentist on the local out-of-hours rota or refers you to a clinic with NHS emergency capacity that day. The cost is fixed at the NHS Band 1 rate of £27.40 in 2026 for the consultation and any urgent treatment to relieve pain.' },
      { type: 'p', text: 'The catch: the NHS emergency rota covers a wide geographic area, not just Harlow. The dentist you see may be in Bishop\'s Stortford, Epping, or further. Saturday and Sunday slots are particularly limited — the rota is staffed by whoever is on call, not by your usual practice. And NHS 111 may take 30–60 minutes to call back during busy periods, which feels long when you are in pain.' },

      { type: 'h2', text: 'Private emergency dental — how it works in Harlow' },
      { type: 'p', text: 'Private emergency appointments are booked either by calling round Harlow practices yourself or via a matching service like ours. Cost is higher — typically £80–£150 for the consultation alone, with treatment costed on top. But you choose the practice (we recommend based on your situation), you typically get the same dentist who would treat you as a regular patient, and out-of-hours slots (Saturday morning, Sunday) are more accessible.' },
      { type: 'p', text: 'The matching service exists because calling round is slow. A typical patient calls 5–8 Harlow practices on a Saturday morning before finding one with a slot — by which point the morning is gone. A matching service that already knows current capacity confirms a slot in 30–60 minutes.' },

      { type: 'h2', text: 'Which to choose: a practical guide' },
      { type: 'p', text: 'Use NHS 111 when:' },
      { type: 'list', items: [
        'Cost is the primary constraint',
        'Your symptoms are clear-cut (severe pain, abscess, knocked-out tooth) — the NHS pathway handles textbook emergencies well',
        'You can travel to wherever the rota dentist is located',
        'You are willing to wait for the call-back and the assigned slot',
      ] },
      { type: 'p', text: 'Use private emergency matching (or call private practices directly) when:' },
      { type: 'list', items: [
        'You need a specific Harlow location (mobility, no transport, child to collect)',
        'You want the same dentist for follow-up treatment, not a one-off rota dentist',
        'You need a Saturday or Sunday slot and NHS 111 has no rota slot available',
        'Your situation is sub-emergency (lost filling, mild ache) where NHS 111 will rightly tell you to wait until Monday',
        'You can absorb the higher consultation cost in exchange for speed and choice',
      ] },

      { type: 'h2', text: 'When the choice does not matter' },
      { type: 'p', text: 'For genuine medical emergencies — uncontrolled bleeding, facial swelling spreading to eye/throat/neck, breathing difficulty — neither NHS dental nor private dental is the right route. Call 999 or NHS 111 (medical, not dental). These are hospital problems requiring IV antibiotics and sometimes surgical drainage, not outpatient dental care.' },

      { type: 'h2', text: 'A note on NHS dental availability in Harlow generally' },
      { type: 'p', text: 'NHS dental access in Harlow has been under pressure for several years — many practices have NHS list closures, and routine NHS registration with a Harlow dentist can be difficult. Emergency NHS access via 111 is separate from this — the rota slots exist for genuine emergencies whether or not you are registered NHS with anyone. Use NHS 111 without hesitation if your situation fits.' },
    ],
  },

  {
    slug: 'recognising-a-dental-abscess-vs-routine-toothache',
    title: 'Recognising a dental abscess vs routine toothache',
    metaTitle: 'Dental Abscess vs Toothache: Symptoms Guide',
    metaDescription:
      'How to tell a dental abscess from routine toothache, the warning signs, when to call 999 or NHS 111, and how to get an abscess seen by an emergency dentist in Harlow.',
    category: 'Emergency basics',
    publishDate: '2026-05-04',
    excerpt:
      'Most toothache is just toothache. A dental abscess is a different category — the same underlying problem (infection) but with the potential to escalate fast. Here are the warning signs.',
    content: [
      { type: 'p', text: 'Most toothache is uncomfortable but not dangerous. A dental abscess is uncomfortable AND can become dangerous — the same underlying pathology (bacterial infection of the pulp or surrounding tissue) but with a meaningful risk of spreading to facial spaces where it becomes a hospital problem rather than a dental one. Telling the difference matters.' },

      { type: 'h2', text: 'Routine toothache — typical features' },
      { type: 'list', items: [
        'Sharp pain triggered by hot, cold, or sweet food and drink, settling within seconds of removing the trigger',
        'Mild constant ache that responds reasonably to over-the-counter painkillers',
        'No swelling — the gum and face look normal',
        'No bad taste or visible pus',
        'You feel generally well — no fever, no fatigue beyond what the pain causes',
      ] },
      { type: 'p', text: 'Routine toothache is usually pulpitis (inflamed nerve), early decay, or a cracked tooth. It needs a dentist within days but is not an immediate threat to your wellbeing. Manage with painkillers and see a dentist at the earliest sensible appointment.' },

      { type: 'h2', text: 'Dental abscess — typical features' },
      { type: 'list', items: [
        'Constant throbbing pain, often worse when lying down (gravity drains pus from the area when upright)',
        'Pain that does not respond fully to over-the-counter painkillers',
        'Visible gum swelling — a localised "boil" near a specific tooth, sometimes with a white pus head',
        'Bad taste in the mouth, often intermittent (the abscess discharges and refills)',
        'Mild facial swelling on the affected side',
        'Sometimes mild fever or general unwellness',
      ] },
      { type: 'p', text: 'A localised abscess is urgent — same-day matching — but rarely dangerous if seen promptly. The dentist drains the abscess, treats the underlying tooth (root canal or extraction), and prescribes antibiotics if appropriate. Pain relief is usually immediate.' },

      { type: 'h2', text: 'Spreading infection — the medical-emergency category' },
      { type: 'p', text: 'A small subset of dental abscess presentations escalate to spreading infection of the facial spaces. This is a hospital problem, not a dental one. Call 999 or NHS 111 — not a dentist — if you have any of:' },
      { type: 'list', items: [
        'Facial swelling extending towards your eye (preseptal or orbital cellulitis)',
        'Swelling spreading down towards the throat or neck (Ludwig\'s angina)',
        'Any difficulty swallowing — feels like there is something in your throat',
        'Any difficulty breathing — even mild',
        'Difficulty fully opening your mouth (severe trismus)',
        'High fever (over 38.5°C) with shaking chills',
        'Generally feeling very unwell — confused, severely tired, dizzy on standing',
      ] },
      { type: 'p', text: 'These presentations need IV antibiotics in hospital, sometimes airway protection, and urgent surgical drainage. They are uncommon — most dental abscesses do not progress this far — but when they do, the progression is fast and the outcome depends on early hospital admission. The matching service will tell you immediately if your symptoms suggest hospital care rather than dental care.' },

      { type: 'h2', text: 'Where to get a dental abscess seen in Harlow' },
      { type: 'p', text: 'A localised abscess needs same-day dental care. During the day we match you to a Harlow practice with capacity, covering Old Harlow, Mark Hall, Staple Tye, Sumners and the villages out to Roydon and Sawbridgeworth. Outside practice hours, NHS 111 routes you to the west Essex urgent dental rota, which can be based in Harlow, Bishop\'s Stortford or Epping.' },
      { type: 'p', text: 'The picture changes the moment the infection looks like it is spreading. Swelling tracking towards the eye or down the neck, difficulty swallowing or breathing, or a high fever with chills is a hospital problem. Go to the emergency department at Princess Alexandra Hospital on Hamstel Road in Harlow, or call 999, rather than waiting for a dentist.' },

      { type: 'h2', text: 'What about antibiotics from a GP?' },
      { type: 'p', text: 'GPs are increasingly reluctant to prescribe antibiotics for dental abscess because antibiotics alone do not cure the infection — the source (the dead nerve, the infected socket) is still present, and the abscess returns once the antibiotic course finishes. Only the dentist can address the source through drainage and definitive treatment. The matching service connects you with a dentist who can do both — drain the acute abscess and start the definitive treatment plan.' },

      { type: 'h2', text: 'How fast should you act?' },
      { type: 'list', items: [
        'Routine toothache: see a dentist within the working week',
        'Localised abscess (visible gum boil, bad taste, no facial swelling): same-day if at all possible',
        'Mild facial swelling without the spreading-infection signs above: same-day urgently',
        'Spreading-infection signs (eye, throat, neck, breathing, swallowing): call 999 or NHS 111 immediately, not a dentist',
      ] },
    ],
  },
  {
    slug: 'what-to-do-if-a-filling-falls-out',
    title: 'What to do if a filling falls out',
    metaTitle: 'Lost a Filling? What to Do Before You Are Seen',
    metaDescription: 'A filling has come out: how to protect the tooth, ease the sensitivity, what to avoid, when it is urgent, and how to get seen quickly by a dentist in Harlow.',
    category: 'Emergency basics',
    publishDate: '2026-06-22',
    excerpt: 'A lost filling is rarely a true emergency, but the exposed tooth needs protecting before a small problem becomes a bigger one. Here is what to do, and how to get seen in Harlow.',
    content: [
      { type: 'p', text: "A filling coming out is one of the most common dental problems, and the good news is that it is rarely a true emergency. It usually causes more alarm than pain at first, because the cavity underneath is suddenly exposed. The priority is to protect the tooth, manage any sensitivity, and get it seen before a small problem turns into a bigger one. This guide covers what to do in the first hour, what to avoid, and how to get seen in Harlow." },
      { type: 'h2', text: 'Do not panic, but do not ignore it' },
      { type: 'p', text: "A lost filling leaves the inner part of the tooth open to temperature, food and bacteria, which is why a tooth can suddenly feel sensitive to hot, cold or sweet things. That sensitivity is uncomfortable but not dangerous. What matters is not leaving the tooth exposed for weeks, because the cavity can deepen, and what would have been a simple refill can become a root canal or an extraction. Treat it as something to sort within a few days rather than the same evening, unless you are in severe pain or there is swelling." },
      { type: 'h2', text: 'What to do in the first hour' },
      { type: 'list', items: [
        'Rinse gently with warm salt water to clear any debris from the cavity.',
        'Keep the filling if you find it, but do not try to glue it back yourself; a dentist needs to refit or replace it properly.',
        'Cover the cavity with a temporary dental filling material from a pharmacy to protect it for a few days until you are seen.',
        'Avoid chewing on that side, and steer clear of very hot, cold, sweet or hard foods that trigger the sensitivity.',
        'Manage any discomfort with your usual over-the-counter painkiller, taken as directed on the packet.',
      ] },
      { type: 'h2', text: 'When a lost filling is more urgent' },
      { type: 'p', text: "Most lost fillings can wait a day or two for an appointment. Treat it as more urgent if you have severe or throbbing pain, a swelling in the gum or face, a bad taste or discharge, or a large piece of tooth has broken away with the filling. Those can signal that decay or infection has reached the nerve, which is covered in our guide to [managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/). If there is facial swelling that is spreading, or any difficulty swallowing or breathing, treat it as a medical emergency: in Harlow that means the A&E department at Princess Alexandra Hospital on Hamstel Road, or call 999." },
      { type: 'h2', text: 'Getting seen in Harlow' },
      { type: 'p', text: "During the day, your own dentist is the first call if you have one. If you do not, or you cannot get in quickly, out of hours and at weekends NHS 111 can assess you and direct you to urgent NHS dental care through the west Essex rota that covers Harlow and the surrounding CM postcodes, from Old Harlow and Church Langley to Staple Tye and Bush Fair. The [NHS guidance on dental problems](https://www.nhs.uk/nhs-services/dentists/) explains the routes, and whether NHS or private is the quicker option for you is set out in our guide to [NHS versus private emergency dental care in Harlow](/blog/nhs-vs-private-emergency-dental-harlow/)." },
      { type: 'p', text: "For impartial advice while you wait, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline) that can talk you through looking after the tooth until your appointment." },
      { type: 'p', text: "If a filling has come out and you want to be seen quickly in Harlow, tell us what happened using the form on this page and we will match you with a local dentist who can refit or replace it. We are an independent matching service and do not treat you ourselves." },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find(a => a.slug === slug);

export const getAllBlogSlugs = (): string[] => blogArticles.map(a => a.slug);
