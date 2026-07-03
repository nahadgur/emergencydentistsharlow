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
  // Draft posts are excluded from the static params, sitemap, index and
  // sidebar, so they 404 in production and are never indexed. They still
  // resolve by slug in `next dev` if visited directly.
  draft?: boolean;
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
  {
    slug: 'childrens-dental-emergencies-what-parents-should-do-harlow',
    title: "Children's Dental Emergencies: What Parents Should Do in Harlow",
    metaTitle: "Children's Dental Emergencies: A Parent's Guide (Harlow)",
    metaDescription:
      "A calm, practical guide for parents in Harlow: knocked-out baby vs adult teeth, night toothache, chipped teeth, bitten lips, and swelling. First aid steps and when to seek urgent care.",
    category: 'Trauma & first aid',
    publishDate: '2026-06-27',
    excerpt:
      "Children knock teeth, chip them and wake with toothache at the worst hours. Here is what to do first, what is genuinely urgent, and how to get a child seen in Harlow. NHS dental care is free for under-18s.",
    content: [
      { type: 'p', text: "A dental emergency in a small child is frightening for everyone in the room, and a frightened child makes calm decisions harder. The reassuring part is that most childhood dental injuries look far worse than they are, and the few that are genuinely time-critical have simple first steps you can take at home. One thing worth knowing up front: NHS dental care is free for everyone under 18, so cost should never be the reason you delay getting a child checked." },

      { type: 'h2', text: 'Knocked-out tooth: baby and adult teeth are treated very differently' },
      { type: 'p', text: "The single most important thing to work out is whether the tooth that came out is a baby (milk) tooth or an adult (permanent) one, because the right action is opposite for each. Most children start losing baby teeth naturally from around age six and have their front adult teeth through by about eight, so a knocked-out tooth in a younger child is almost always a baby tooth, while in an older child or teenager it is more likely to be a permanent one." },
      { type: 'p', text: "If it is a baby tooth, do not try to push it back in. Re-implanting a baby tooth can damage the developing adult tooth sitting in the bone above it. Keep the child calm, control any bleeding with gentle pressure from clean gauze or a clean cloth, and arrange a dental check so the socket can be examined and the adult tooth bud assessed." },
      { type: 'p', text: "If it is an adult tooth, the clock matters. Hold it by the white crown, never the root, rinse it briefly in milk only if it is dirty, and if your child is old enough to cooperate, gently slot it back into the socket and have them bite on a clean cloth. If you cannot re-insert it, store it in milk and get to a dentist fast. The full minute-by-minute method is set out in our guide to [what to do if you knock out a tooth](/blog/what-to-do-if-you-knock-out-a-tooth/), and it is worth reading before you ever need it." },
      { type: 'note', text: "Quick rule: baby tooth knocked out, leave it out and see a dentist. Adult tooth knocked out, keep it in milk or back in the socket and get seen within the hour." },

      { type: 'h2', text: 'Toothache, especially the kind that strikes at night' },
      { type: 'p', text: "Toothache has a habit of arriving at bedtime, partly because lying down increases blood flow to the head and partly because there are fewer distractions once the lights are off. For a child in pain overnight, you can give a children's painkiller such as paracetamol or ibuprofen at the dose for their age and weight printed on the bottle, never adult tablets or aspirin, which is not suitable for under-16s. Propping them up on an extra pillow, a cool drink of water, and a warm salt-water rinse for an older child who can spit reliably all help take the edge off. If the pain keeps coming back, our [out-of-hours emergency dental service in Harlow](/services/out-of-hours/) can match your child with a dentist when your own practice is closed." },
      { type: 'p', text: "Painkillers buy comfort, not a cure. Persistent or severe toothache in a child means something needs treating, so book a dental appointment rather than riding it out night after night. Many of the same [calming measures that help adults through severe toothache before they can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/) work for children too, and the [NHS toothache page](https://www.nhs.uk/conditions/toothache/) carries children's dosing advice you can use to double-check amounts." },

      { type: 'h2', text: 'Chipped or broken tooth' },
      { type: 'p', text: "A chipped tooth is one of the most common playground and sports injuries, and a small chip is rarely an emergency. Rinse the mouth with warm water, find the fragment if you can and keep it in milk in case the dentist can bond it back, and use a cold compress on the cheek if there is swelling or bruising. A jagged edge can be covered with a small piece of orthodontic wax or sugar-free chewing gum to stop it catching the tongue or lip until you are seen." },
      { type: 'p', text: "Treat a break as more urgent if a large piece has come away, if you can see a pink or red dot in the middle of the tooth where the nerve is exposed, or if the tooth is loose, pushed out of position or very painful to touch. Those need same-day dental attention. A minor chip with no pain can usually wait for a routine appointment, but still gets checked so a hidden crack does not turn into a bigger problem later." },

      { type: 'h2', text: 'Bitten lip, tongue or cheek that will not stop bleeding' },
      { type: 'p', text: "Falls and knocks often cut the lip or tongue rather than the teeth, and the mouth has a rich blood supply, so even a small cut can bleed dramatically and look alarming. Clean your hands, then press a clean piece of gauze or a clean cloth firmly over the bleeding point for around ten minutes without lifting it to peek, as that restarts the bleeding. A cold compress or a wrapped ice cube held against the outside of the lip helps slow the flow and brings down swelling." },
      { type: 'p', text: "Most mouth cuts settle within ten to fifteen minutes of steady pressure. Seek urgent care if the bleeding does not slow after fifteen minutes of firm pressure, if the cut is deep or gaping and might need stitches, if it goes right through the lip, or if the injury came with a heavy blow to the head. For a wound that needs stitching or any serious head injury, the emergency department at Princess Alexandra Hospital on Hamstel Road in Harlow is the right place, or call 999." },

      { type: 'h2', text: 'Facial swelling: the one to take seriously' },
      { type: 'p', text: "Swelling of the gum, cheek or face in a child usually points to a dental infection, and unlike the injuries above it tends to need prompt attention rather than watchful waiting. A small gum swelling near one tooth with mild discomfort should be seen the same day or the next day. The picture becomes urgent when swelling spreads across the face, tracks towards the eye or down towards the neck, or comes with a fever, because infection in a child can move faster than in an adult." },
      { type: 'p', text: "If your child has facial swelling spreading towards the eye or neck, any difficulty swallowing or breathing, or a high fever with it, do not wait for a dental appointment. Call 999 or NHS 111, or go straight to the emergency department, as spreading infection is a hospital matter. The warning signs and the line between a dental problem and a medical one are explained more fully in our guide to [recognising a dental abscess](/blog/recognising-a-dental-abscess-vs-routine-toothache/)." },

      { type: 'h2', text: 'Getting a child seen in Harlow' },
      { type: 'p', text: "In the daytime your own dentist is the first call, and NHS dental treatment is free for under-18s, so there is no charge to weigh up. If you do not have a dentist or cannot get in quickly, NHS 111 can assess your child out of hours and direct you to urgent NHS dental care through the west Essex rota covering Harlow and the surrounding CM postcodes, from Old Harlow and Church Langley to Staple Tye and Sawbridgeworth. For general reassurance about looking after children's teeth and what counts as urgent, the [Oral Health Foundation](https://www.dentalhealth.org/) runs a free, independent dental helpline staffed by qualified professionals." },
      { type: 'p', text: "If your child has had a dental injury and you want them seen quickly in Harlow, tell us what happened using the form on this page and we will match you with a local dentist. We are an independent matching service and do not treat children ourselves, so for anything involving heavy bleeding, a serious head injury, spreading facial swelling or trouble breathing, go straight to 999 or A&E first." },
    ],
  },
  {
    slug: 'broken-or-chipped-tooth-what-to-do',
    title: 'Broken or Chipped a Tooth? What to Do Now',
    metaTitle: 'Broken or Chipped Tooth: First Aid Before You Are Seen',
    metaDescription:
      'What to do in the first hour after breaking or chipping a tooth in Harlow: keeping the fragment, easing sensitivity, protecting a sharp edge, and when a break is genuinely urgent.',
    category: 'Emergency basics',
    publishDate: '2026-07-02',
    draft: true,
    excerpt:
      'A chipped or broken tooth is alarming but rarely a true emergency. Here is what to do in the first hour, how to tell a cosmetic chip from an urgent break, and how to get seen in Harlow.',
    content: [
      { type: 'p', text: "Breaking or chipping a tooth usually happens without warning, from biting down on something hard, a knock during sport, or a fall. The first reaction is often panic, especially when it is a front tooth or the edge feels jagged against the tongue. The reassuring part is that most chips and breaks are not true emergencies and can be repaired well once you are seen. What matters in the first hour is protecting the tooth, judging how serious the break is, and keeping any broken piece in case it can be reattached." },

      { type: 'h2', text: 'What to do in the first hour' },
      { type: 'p', text: "The steps below apply whether you have lost a small corner or a larger section of the tooth. They protect the exposed surface and give a dentist the best chance of a clean repair." },
      { type: 'list', items: [
        'Rinse your mouth gently with warm water to clear away any fragments and see what has happened.',
        'If a piece has broken off, keep it and store it in milk or your own saliva, not water and not dry in a tissue. A larger fragment, especially from a front tooth, can sometimes be bonded back on for the best cosmetic result.',
        'Press a clean piece of gauze or a clean cloth on any bleeding gum for around ten minutes without lifting it to check.',
        'Hold a cold compress against the cheek over the area to ease swelling and pain.',
        'Cover a sharp or jagged edge with a small piece of orthodontic wax or sugar-free chewing gum so it does not cut your tongue or lip until you are seen.',
        'Take your usual over-the-counter painkiller as directed on the packet if the tooth is sore.',
      ] },
      { type: 'p', text: "The advice to keep the broken piece in milk mirrors the rule for a tooth that has come out completely. If the whole tooth has been knocked out rather than chipped, that is a different and more time-critical situation, and [a knocked-out adult tooth](/blog/what-to-do-if-you-knock-out-a-tooth/) needs re-implanting within the hour to stand the best chance." },

      { type: 'h2', text: 'Telling a minor chip from an urgent break' },
      { type: 'p', text: "Not every broken tooth needs to be seen the same day. The severity depends on how deep the break goes and whether the inner layers of the tooth are exposed. A tooth has a hard outer enamel layer, a softer dentine layer beneath it, and a living pulp at the centre that holds the nerve and blood supply." },
      { type: 'p', text: "A small chip in the enamel with no pain and no sharp edge is usually cosmetic and can wait a few days for a routine repair. A deeper break becomes more urgent when the dentine is exposed, which typically shows as sensitivity to hot, cold or sweet things. It becomes a same-day matter when the pulp is exposed, which means severe pain and sometimes a visible pink or red dot in the middle of the tooth. A tooth that is loose, pushed out of position, or bleeding from within is also one to have looked at quickly." },
      { type: 'note', text: "See a dentist the same day if the tooth is very painful, sensitive to temperature, loose, or shows a pink or red dot at its centre. A painless chip with a smooth edge can usually wait for a routine appointment." },
      { type: 'p', text: "There is also the cracked tooth that does not visibly break. Pain that flares when you bite and fades when you release the pressure can point to a crack running into the tooth, which lets bacteria reach the pulp over time. It needs examining even without an obvious chip. The [NHS guidance on a chipped, broken or cracked tooth](https://www.nhs.uk/conditions/chipped-broken-or-cracked-tooth/) is a useful reference for what a dentist can do, from bonding and fillings to a crown or root canal for a deeper fracture." },

      { type: 'h2', text: 'What to avoid' },
      { type: 'list', items: [
        'Do not try to file or smooth a sharp edge yourself. You risk weakening the tooth further or cutting your mouth.',
        'Do not glue the fragment back with household or superglue. It is toxic in the mouth and prevents a proper repair.',
        'Do not chew on the broken side, which can crack the tooth further or dislodge more of it.',
        'Do not ignore a painless break for weeks. An exposed surface lets decay and infection set in, turning a simple repair into a bigger treatment.',
      ] },
      { type: 'p', text: "If the break is causing steady throbbing pain rather than sharp sensitivity, the measures that help with any dental pain apply, and the [painkiller combination for managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/) works best while you wait. A break that has taken a filling with it needs the same protection as any [lost filling](/blog/what-to-do-if-a-filling-falls-out/), so the exposed cavity does not deepen." },

      { type: 'h2', text: 'When a break is a medical emergency' },
      { type: 'p', text: "A chipped or broken tooth on its own is a dental problem, not a medical one. It becomes a hospital matter when it comes with a heavier injury: a possible broken jaw, a deep cut that may need stitches, a serious blow to the head, or bleeding you cannot control with steady pressure. In those cases the emergency department at Princess Alexandra Hospital on Hamstel Road in Harlow is the right place, or call 999. Facial swelling that is spreading, or any difficulty swallowing or breathing, is also a 999 or A&E situation rather than something to wait for a dental appointment." },
      { type: 'p', text: "For a child who has broken a tooth, the same rules apply but with less cost pressure, because NHS dental care is free for under-18s. [Children's dental emergencies in Harlow](/blog/childrens-dental-emergencies-what-parents-should-do-harlow/) bring their own first-aid picture, including chipped teeth and knocks during play." },

      { type: 'h2', text: 'Getting a broken tooth seen in Harlow' },
      { type: 'p', text: "During the day your own dentist is the first call if you have one. If you do not, or you cannot get in quickly, our [broken or chipped tooth matching service](/services/broken-or-chipped-tooth/) can pair you with a local practice, prioritising a same-day slot where the tooth is painful or the nerve is exposed and routing a simple cosmetic chip to a next-day repair. Out of hours and at weekends, NHS 111 can assess you and direct you to urgent NHS dental care through the west Essex rota that covers Harlow and the surrounding CM postcodes, from Old Harlow and Church Langley to Staple Tye and Sawbridgeworth. Which of [the NHS and private routes in Harlow](/blog/nhs-vs-private-emergency-dental-harlow/) gets you seen sooner depends on the time of day and how much you are willing to pay." },
      { type: 'p', text: "If you want impartial advice while you decide, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline) staffed by qualified professionals who can talk you through looking after the tooth until your appointment. When you are ready to be seen quickly in Harlow, tell us what happened using the form on this page and we will match you with a local dentist. We are an independent matching service and do not treat you ourselves." },
    ],
  },
  {
    slug: 'bleeding-that-wont-stop-after-a-tooth-extraction',
    title: "Bleeding That Won't Stop After a Tooth Extraction",
    metaTitle: 'Bleeding After a Tooth Extraction: What to Do',
    metaDescription:
      'How to stop bleeding after a tooth extraction: the gauze pressure method, protecting the clot, what to avoid for 24 hours, and when persistent bleeding needs a dentist in Harlow.',
    category: 'Trauma & first aid',
    publishDate: '2026-07-03',
    draft: true,
    excerpt:
      'Some oozing after an extraction is normal, but bleeding that keeps going is unsettling. Here is the pressure method that actually works, how to protect the clot, and when to get seen in Harlow.',
    content: [
      { type: 'p', text: "A little bleeding after a tooth is taken out is completely normal and can carry on, as a slow ooze mixed with saliva, for several hours. It usually looks worse than it is because even a small amount of blood mixes with spit and spreads pink across the mouth. What matters is knowing the difference between that ordinary ooze and true bleeding that will not settle, and knowing the pressure method that stops most of it at home." },

      { type: 'h2', text: 'The pressure method that works' },
      { type: 'p', text: "Bleeding from a socket almost always stops with firm, sustained pressure in the right place. The most common mistake is dabbing at it, changing the gauze every couple of minutes to check, or biting somewhere that does not press on the socket itself." },
      { type: 'list', items: [
        'Roll a clean piece of gauze, or a clean cotton handkerchief, into a firm pad big enough to sit directly over the socket, not beside it.',
        'Dampen it very slightly so it does not stick to and pull away the forming clot.',
        'Bite down firmly and hold without moving or checking for at least ten minutes, and preferably twenty. The steady pressure is what lets a clot form.',
        'If it is still bleeding, replace the pad and repeat for another twenty minutes. Two full rounds of proper pressure settle most sockets.',
        'A cold, damp black or green teabag makes a good backup pad. The tannins in tea help the blood clot, and biting on one for twenty minutes often works when plain gauze alone has not.',
      ] },
      { type: 'p', text: "Stay upright and calm while you do this. Lying down raises the blood pressure in your head and keeps the ooze going, so sit up with your head slightly forward rather than tipping it back." },

      { type: 'h2', text: 'Protecting the clot for the first 24 hours' },
      { type: 'p', text: "Once a clot has formed in the socket it is doing the healing, and the whole job for the next day is to leave it undisturbed. Dislodging it restarts the bleeding and can lead to a painful dry socket a few days later, so the don'ts here matter as much as the pressure." },
      { type: 'list', items: [
        'Do not rinse, swish or spit for the first 24 hours. Rinsing washes the clot straight out.',
        'Do not suck through a straw, smoke or vape. The suction pulls the clot loose.',
        'Avoid hot food and drink, alcohol and strenuous exercise for the rest of the day, as all raise the flow and soften the clot.',
        'Do not poke the socket with your tongue or a finger to feel what is going on.',
        'From the day after, gentle warm salt-water rinses, a teaspoon of salt in a cup of warm water, keep the area clean without disturbing the clot.',
      ] },
      { type: 'note', text: "The clot is the healing. For 24 hours do not rinse, spit, suck through a straw, smoke or drink alcohol, and keep food and drink lukewarm rather than hot." },

      { type: 'h2', text: 'When the bleeding needs a dentist' },
      { type: 'p', text: "Steady oozing that slows over the first few hours is expected. Get in touch with a dentist if bleeding is still brisk after two full rounds of twenty-minute pressure, if it suddenly restarts heavily a day or two later, if you are on blood-thinning medication and it will not settle, or if you feel faint, dizzy or are losing more than a slow trickle. Fresh red blood filling the mouth quickly is different from pink-tinged saliva and is the sign to act. A dentist can pack the socket, place a dissolvable dressing or put in a small stitch to close it, none of which you can do at home." },
      { type: 'p', text: "The general steps for looking after a healing socket, and the routes to urgent care, are set out on the [NHS pages for finding a dentist](https://www.nhs.uk/nhs-services/dentists/). For a heavy bleed you genuinely cannot control with pressure, especially after a blow to the face or alongside a serious head injury, treat it as an emergency: in Harlow that means the A&E department at Princess Alexandra Hospital on Hamstel Road, or call 999." },

      { type: 'h2', text: 'Bleeding after a knock rather than a planned extraction' },
      { type: 'p', text: "Not all mouth bleeding comes from a socket. A fall or a blow can split the lip, tongue or cheek, and the mouth's rich blood supply means even a small cut bleeds dramatically. The same principle applies, firm pressure with clean gauze for ten to fifteen minutes without lifting to peek. If a whole tooth has come out in the injury rather than being extracted, that is a separate and more time-critical problem, and [a knocked-out adult tooth](/blog/what-to-do-if-you-knock-out-a-tooth/) needs storing in milk and re-implanting within the hour. Where the injury involves a child, the first-aid steps for [children's dental emergencies in Harlow](/blog/childrens-dental-emergencies-what-parents-should-do-harlow/) cover bitten lips and knocks during play." },

      { type: 'h2', text: 'Getting seen quickly in Harlow' },
      { type: 'p', text: "During the day your own dentist, or the practice that did the extraction, is the first call, as they know the socket and can deal with it fastest. Out of hours and at weekends, NHS 111 can assess you and direct you to urgent NHS dental care through the west Essex rota that covers Harlow and the surrounding CM postcodes, from Old Harlow and Church Langley to Staple Tye and Sawbridgeworth. If you would rather be matched to a private slot, our [out-of-hours emergency dental service in Harlow](/services/out-of-hours/) can pair you with a local dentist when your own practice is closed. For impartial advice while the pressure is doing its work, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline) staffed by qualified professionals." },
      { type: 'p', text: "If bleeding after an extraction will not settle and you want to be seen quickly in Harlow, tell us what happened using the form on this page and we will match you with a local dentist. We are an independent matching service and do not treat you ourselves." },
    ],
  },
  {
    slug: 'out-of-hours-and-weekend-emergency-dentist-in-harlow',
    title: 'Out-of-Hours and Weekend Emergency Dentist in Harlow',
    metaTitle: 'Out-of-Hours Emergency Dentist in Harlow',
    metaDescription:
      'How to find an emergency dentist in Harlow in the evening, at weekends and on bank holidays: the NHS 111 route, the west Essex urgent rota, private options and what counts as urgent.',
    category: 'Local',
    publishDate: '2026-07-03',
    draft: true,
    excerpt:
      'Dental emergencies rarely wait for Monday morning. Here is how out-of-hours care actually works in Harlow, when NHS 111 is the right call, and what to do while you wait.',
    content: [
      { type: 'p', text: "Toothache and dental injuries have a habit of flaring on a Friday night or over a bank holiday weekend, exactly when your own practice is shut. Harlow has two out-of-hours routes running in parallel, the NHS emergency pathway through NHS 111 and private evening or weekend appointments, and knowing which fits your situation saves hours of ringing round. Both are worth understanding before you need them, along with what genuinely counts as an out-of-hours emergency and what to do to hold things together until you are seen." },

      { type: 'h2', text: 'The NHS out-of-hours route through 111' },
      { type: 'p', text: "Outside normal practice hours the NHS emergency dental pathway runs through NHS 111, which is free and open 24 hours a day. You call or use 111 online, describe the problem, and a trained adviser assesses how urgent it is. For genuine dental emergencies they can book you directly into an urgent dental appointment, a capability that has been in place across England since 2024. In this part of Essex those appointments sit on a shared west Essex rota, so the dentist you are sent to may be in Harlow, Bishop's Stortford or Epping depending on who is on call that day." },
      { type: 'p', text: "It helps to be realistic about timing. NHS England's clinical standard aims for a same-day response to a true emergency, but at busy weekends and over bank holidays the slot offered can be the next day rather than within the hour, and 111 itself can take a while to call back when demand is high. The cost, if you are seen, is the single NHS urgent charge for the whole course of treatment, which the [NHS dental costs page](https://www.nhs.uk/nhs-services/dentists/dental-costs/) keeps up to date as it is reviewed each April." },

      { type: 'h2', text: 'Private evening and weekend appointments' },
      { type: 'p', text: "The private route means a Harlow-area practice that keeps some out-of-hours capacity, booked either by ringing round yourself or through a matching service. A handful of local practices offer Saturday morning slots and a smaller number cover Sundays and bank holidays, usually by appointment only and at a premium over weekday fees. The advantage is choice and speed: you are seen at a set time near you rather than wherever the rota lands, and you can often keep the same dentist for any follow-up treatment. The trade-off is cost, which runs higher than the NHS charge, particularly for the premium out-of-hours slots." },
      { type: 'p', text: "Calling round yourself on a Saturday is slow, because you are competing for a small number of weekend slots and most receptions are unstaffed. A matching service that already knows which local practices have out-of-hours capacity shortcuts that, pairing you with a practice that can see you rather than leaving you to phone down a list, which is what our [out-of-hours emergency dental service in Harlow](/services/out-of-hours/) does. Whether the NHS or the private route gets you seen sooner depends on the day and how much you are willing to pay, and [the NHS and private routes in Harlow](/blog/nhs-vs-private-emergency-dental-harlow/) split most clearly on exactly that trade-off." },

      { type: 'h2', text: 'What actually counts as an out-of-hours emergency' },
      { type: 'p', text: "Both NHS 111 and the matched dentist triage by clinical urgency, not by how much a problem is bothering you at 2am. The following genuinely warrant out-of-hours care rather than waiting for the next working day:" },
      { type: 'list', items: [
        'Severe pain not controlled by over-the-counter painkillers taken correctly.',
        'A knocked-out or badly broken adult tooth from an injury.',
        'Bleeding after an extraction that will not settle with sustained pressure.',
        'Facial swelling from a suspected dental infection, especially if it is spreading.',
        'Trauma to the mouth with a heavy blow, deep cut or possible fracture.',
      ] },
      { type: 'p', text: "By contrast, a lost filling with no pain, a small painless chip or a mild ache that responds to painkillers can usually wait for a routine appointment. If you are unsure whether throbbing pain is an ordinary toothache or something that has turned into an abscess, the difference is worth understanding, because [recognising a dental abscess](/blog/recognising-a-dental-abscess-vs-routine-toothache/) is what tells you whether same-day out-of-hours care or a hospital is the right call." },

      { type: 'h2', text: 'Holding things together until you are seen' },
      { type: 'p', text: "Whichever route you take, you may have to wait a few hours for the slot, and how you use that time matters. For pain, taking ibuprofen and paracetamol together works far better than either alone, the core of [managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/), and sleeping propped up on extra pillows reduces the throbbing. For general reassurance overnight, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline) staffed by qualified professionals who can talk you through what you are dealing with." },

      { type: 'h2', text: 'When it is a hospital problem, not a dental one' },
      { type: 'p', text: "Out-of-hours dental care is for dental emergencies. Some situations are medical emergencies and belong at A&E or on 999, whatever the hour. Facial swelling spreading towards the eye, throat or neck, any difficulty swallowing or breathing, a high fever with shaking chills, or bleeding you cannot control after an injury all need hospital care rather than a dentist. In Harlow the emergency department is at Princess Alexandra Hospital on Hamstel Road. If your child is affected, the same thresholds apply, and cost is not a factor either way, since NHS dental treatment is free for under-18s." },
      { type: 'p', text: "If you need an out-of-hours or weekend emergency dentist in Harlow, tell us what has happened using the form on this page and we will match you with a local dentist who can see you. We are an independent matching service and do not treat you ourselves." },
    ],
  },
  {
    slug: 'what-an-emergency-dental-appointment-costs-in-harlow',
    title: 'What an Emergency Dental Appointment Costs in Harlow',
    metaTitle: 'Emergency Dental Appointment Cost in Harlow',
    metaDescription:
      'What an emergency dentist costs in Harlow: the single NHS urgent charge, indicative private consultation and treatment ranges, who is exempt, and how to avoid paying more than you need to.',
    category: 'Local',
    publishDate: '2026-07-03',
    draft: true,
    excerpt:
      'Cost is the first question most people have in a dental emergency. Here is an honest breakdown of the NHS urgent charge and the private ranges in Harlow, and who pays nothing at all.',
    content: [
      { type: 'p', text: "When a tooth flares up out of nowhere, one of the first worries is what it is going to cost to get it dealt with, and unhelpfully the answer is often hidden until you are in the chair. In Harlow there are two pricing worlds, the fixed NHS urgent charge and the variable private fee, and they work very differently. This guide breaks down what each actually costs, who pays nothing at all, and how to avoid spending more than you need to in a genuine emergency." },

      { type: 'h2', text: 'The NHS urgent charge is a single flat fee' },
      { type: 'p', text: "NHS urgent dental treatment in England is charged as one flat Band 1 fee for the entire course of urgent care, however many problems are dealt with in that visit and even if it takes more than one appointment to finish. From April 2026 that fee is £27.90. So an emergency appointment through NHS 111 that relieves pain, drains an abscess or dresses a broken tooth is a single charge, not a running total. Because the amount is reviewed each April, it is worth confirming the current figure on the [NHS dental costs page](https://www.nhs.uk/nhs-services/dentists/dental-costs/) rather than assuming last year's number." },
      { type: 'p', text: "There is an important limit to this. The urgent charge covers immediate treatment to get you out of trouble. If that visit leads to further planned work, a crown, a root canal completed later, a new denture, that follow-up is charged at the appropriate higher NHS band as a separate course of treatment. The urgent fee gets the emergency under control, it does not cover everything that might follow." },

      { type: 'h2', text: 'Who pays nothing' },
      { type: 'p', text: "NHS dental treatment, including urgent care, is free for a number of groups, so cost should never be the reason someone in this position delays being seen:" },
      { type: 'list', items: [
        'Anyone under 18.',
        'Under 19 and in full-time education.',
        'Pregnant, or having had a baby in the previous 12 months.',
        'Receiving certain low-income benefits, such as Income Support or Universal Credit within the qualifying thresholds.',
      ] },
      { type: 'p', text: "For a child in particular this matters, because there is no charge to weigh against getting them checked, one of the reasons [children's dental emergencies in Harlow](/blog/childrens-dental-emergencies-what-parents-should-do-harlow/) are rarely worth delaying over money." },

      { type: 'h2', text: 'What private emergency care costs' },
      { type: 'p', text: "Private emergency dentistry is priced per practice and per treatment, so there is no single figure, but the shape is predictable. A private emergency consultation and examination in the Harlow area is typically in the region of £80 to £150, with any treatment costed on top of that. Out-of-hours, weekend and bank-holiday slots carry a premium, and a private emergency appointment at those times can sit higher, roughly £150 to £250 for the visit before treatment. Treat all of these as indicative ranges to plan around, not fixed quotes, and expect the practice to confirm the figure before doing anything." },
      { type: 'p', text: "What you pay for is speed and choice, a set appointment near you, often with the dentist who would treat you as a regular patient, and easier access to weekend slots than the NHS rota offers. Whether that is worth the difference over the NHS charge is the heart of choosing between [the NHS and private routes in Harlow](/blog/nhs-vs-private-emergency-dental-harlow/), and it comes down to how quickly you need to be seen and how much the timing is worth to you." },

      { type: 'h2', text: 'How to avoid paying more than you need to' },
      { type: 'p', text: "A few habits keep the bill sensible in an emergency:" },
      { type: 'list', items: [
        'Ask for the consultation fee and a treatment estimate before agreeing to anything. A reputable practice quotes upfront.',
        'Check whether you are in one of the exempt groups above before assuming you will be charged.',
        'Do not let a manageable problem become an expensive one by waiting. A lost filling left for weeks can turn a small repair into a root canal.',
        'Match the urgency to the route. A painless chip does not need a premium Sunday slot; severe pain or spreading swelling does need to be seen at once.',
      ] },
      { type: 'p', text: "That last point is where an honest sense of urgency saves money. Knowing whether a problem is a true emergency or something that can wait for a routine appointment stops you paying an out-of-hours premium for something that did not need it, and a painful tooth can often be held steady with the pain-relief steps for [managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/) until an ordinary appointment. For impartial guidance on your options, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline)." },

      { type: 'h2', text: 'Getting matched to the right cost route in Harlow' },
      { type: 'p', text: "If you want to be seen quickly in Harlow and would like to weigh the cost as you go, tell us what has happened using the form on this page. We will match you with a local dentist, and where the NHS urgent route is the sensible choice we will say so rather than steering you to a private slot you do not need. We are an independent matching service and do not treat you ourselves, so any fee is set and taken by the practice you are matched to, quoted to you before treatment." },
    ],
  },
  {
    slug: 'pain-after-dental-treatment-what-is-normal-and-what-is-not',
    title: 'Pain After Dental Treatment: What Is Normal and What Is Not',
    metaTitle: 'Pain After Dental Treatment: Normal or a Problem?',
    metaDescription:
      'What is normal pain after a filling, extraction or root canal, when soreness signals a problem like dry socket or a high filling, and when to get seen again by a dentist in Harlow.',
    category: 'Emergency basics',
    publishDate: '2026-07-03',
    draft: true,
    excerpt:
      'Some ache after dental work is expected. The trick is knowing which soreness settles on its own and which is a sign something needs looking at again. Here is how to tell them apart.',
    content: [
      { type: 'p', text: "Leaving the dentist and finding the tooth still sore, or newly sore, is unsettling, especially after treatment that was meant to fix the problem. Most post-treatment discomfort is normal and fades within a few days as the area heals or settles. A smaller share is a genuine sign that something needs looking at again. Knowing which is which stops you both panicking over an ordinary ache and ignoring a problem that will only get worse. What follows is what to expect after the common treatments and where the line sits between healing and a problem." },

      { type: 'h2', text: 'After a filling' },
      { type: 'p', text: "It is normal for a newly filled tooth to be sensitive to hot, cold and pressure for a few days, sometimes up to a couple of weeks for a deep filling that was close to the nerve. That sensitivity should be settling, not building. Two things are worth watching for. If the tooth feels tall or hits first when you bite, the filling is very slightly too high and needs a quick adjustment, an easy five-minute fix that also stops the ache it causes. If, instead, sensitivity turns into spontaneous throbbing pain that arrives without a trigger and lingers, the nerve may have been irritated beyond recovery, which can point towards needing a root canal." },
      { type: 'note', text: "A filling that feels tall or catches when you bite is not something to put up with. A dentist adjusts it in minutes, and doing so often clears up the soreness straight away." },

      { type: 'h2', text: 'After an extraction' },
      { type: 'p', text: "Soreness at the extraction site for two to three days, easing steadily, is exactly what should happen, and ordinary painkillers manage it. The complication to know about is dry socket, where the protective blood clot is lost from the socket before it has healed. The tell-tale pattern is pain that improves for a day or two and then gets sharply worse around three to five days after the extraction, often a deep throbbing that radiates to the ear or eye on the same side, with a bad taste or smell. Dry socket is not dangerous but it is genuinely painful and does not settle on its own, because the exposed bone needs a dentist to clean and dress the socket. Protecting the clot in the first place is the best prevention, which means not rinsing, spitting, smoking or drinking through a straw for the first 24 hours after the tooth comes out." },

      { type: 'h2', text: 'After a root canal' },
      { type: 'p', text: "A root-treated tooth is commonly tender to bite on for several days afterwards, because the tissue around the root tip is inflamed from the treatment, and this usually fades over a week or so with over-the-counter painkillers. What is not expected is severe, escalating pain, or swelling that appears after the treatment, which can mean a flare-up of infection that needs the dentist to reassess. Mild tenderness on biting that is slowly improving is part of normal healing; a tooth that becomes more painful by the day is not." },

      { type: 'h2', text: 'The signs that always mean go back' },
      { type: 'p', text: "Whatever the treatment, some patterns tell you to be seen again rather than wait it out:" },
      { type: 'list', items: [
        'Pain that gets worse after the third day rather than better.',
        'Swelling of the gum, cheek or face that appears or grows after treatment.',
        'A filling or crown that feels high, catches or has come loose.',
        'A bad taste, discharge or fever alongside the pain.',
        'Pain severe enough that the combination of ibuprofen and paracetamol is not touching it.',
      ] },
      { type: 'p', text: "Swelling and fever in particular move a problem out of the ordinary-healing category. If facial swelling from a tooth spreads towards the eye, throat or neck, or comes with difficulty swallowing or breathing, that is a medical emergency for 999 or A&E rather than a dental one, and the warning signs are the same ones set out for [recognising a dental abscess](/blog/recognising-a-dental-abscess-vs-routine-toothache/). In Harlow the emergency department is at Princess Alexandra Hospital on Hamstel Road." },

      { type: 'h2', text: 'Managing the wait if you need to be seen again' },
      { type: 'p', text: "If post-treatment pain crosses the line and you need reviewing, the same holding measures apply as for any dental pain. Taking ibuprofen and paracetamol together at the correct doses, avoiding very hot or cold food on the tooth, and sleeping propped up are the same steps that help with [managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/). For impartial reassurance about whether what you are feeling is normal healing or something to act on, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline) staffed by qualified professionals, and the [NHS advice on dental care](https://www.nhs.uk/nhs-services/dentists/) sets out the routes to being seen." },

      { type: 'h2', text: 'Getting reviewed in Harlow' },
      { type: 'p', text: "The dentist who did the work is the right first call for pain that follows their treatment, because they know what was done and can adjust a high filling or dress a dry socket quickly, often at no or low cost as a review. If they are closed and the pain is severe, NHS 111 can direct you to urgent NHS dental care through the west Essex rota covering Harlow and the surrounding CM postcodes, from Old Harlow and Church Langley to Staple Tye and Sawbridgeworth. If you cannot get back to your own dentist and want to be seen quickly in Harlow, tell us what happened using the form on this page and we will match you with a local dentist. We are an independent matching service and do not treat you ourselves." },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find(a => a.slug === slug);

// Published posts only: drives the index, the sidebar and the sitemap so
// drafts never appear or get indexed.
export const publishedArticles = (): BlogArticle[] =>
  blogArticles.filter(a => !a.draft);

// Static params exclude drafts, so a draft slug is not pre-rendered and 404s
// in production.
export const getAllBlogSlugs = (): string[] =>
  publishedArticles().map(a => a.slug);
