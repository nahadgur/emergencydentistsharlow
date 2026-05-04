// data/areaContent.ts
// Hand-written per-area content. Each entry powers the area detail page
// intro, why-specialist, who-we-match, common-triggers, local context.
// Genuinely differentiated per neighbourhood — no token-swap templates.

export interface AreaContent {
  heroHeading: string;
  heroParagraph: string;
  introHeading: string;
  introParagraphs: string[];
  whySpecialistMatters: string;
  patientProfile: { heading: string; points: string[] };
  commonTriggers: string[];
  localContext: string;
  faqOverride?: { question: string; answer: string }[];
}

export const areaContent: Record<string, AreaContent> = {

  'old-harlow': {
    heroHeading: 'Emergency dentists in Old Harlow (CM17)',
    heroParagraph:
      'Old Harlow is the historic core of the borough — a conservation area where the medieval church and Mulberry Green sit alongside independent shops on the High Street. We match Old Harlow residents and the surrounding CM17 catchment with vetted dentists handling everything from severe toothache to knocked-out teeth, usually within 60 minutes during opening hours.',
    introHeading: 'Same-day emergency dental matching for Old Harlow residents',
    introParagraphs: [
      'Old Harlow\'s residential character — period properties, conservation streets, longer-established families — produces a slightly different emergency dental presentation mix than the modern western neighbourhoods. We see a higher proportion of crown and bridge failures (older restorations finally giving up after 20+ years), root-canal pain in heavily restored teeth, and trauma from gardening and household DIY rather than from sport.',
      'Practices serving Old Harlow are clustered near the High Street and along the Sheering Lower Road. Most see both NHS and private patients, and the matched dentist will discuss which route makes sense for your situation. NHS Band 1 emergency consultations are £27.40; private emergency consultations typically run £80–£150 plus treatment.',
      'For serious presentations — facial swelling, knocked-out adult tooth, severe pain unrelieved by painkillers — the matching service prioritises Old Harlow enquiries to ensure same-day appointments. For non-urgent presentations (lost filling, mild ache), the matched dentist may book within the working week at standard rates.',
    ],
    whySpecialistMatters:
      'Old Harlow\'s building stock means many patients here have wells of dental history — multiple crowns, bridges, and historical fillings dating back decades. Treating an emergency in a heavily restored mouth is more nuanced than in a young patient with virgin teeth. Matched dentists with restorative experience produce better outcomes when the underlying tooth structure is already compromised.',
    patientProfile: {
      heading: 'Patients we typically match in Old Harlow',
      points: [
        'Long-established residents with substantial historical restorations needing emergency assessment',
        'Older patients with crown or bridge failures requiring re-cementation or replacement',
        'Families dealing with paediatric trauma (knocked-out baby teeth, mouth injuries from playgrounds)',
        'Local business owners and high-street workers needing same-day cover during the working week',
        'Residents in the surrounding villages (Hatfield Heath, Sheering) with no dentist of their own in the immediate area',
      ],
    },
    commonTriggers: [
      'A long-standing crown finally coming off after 15–25 years of service',
      'Severe ache from a heavily restored tooth where decay has reached the pulp',
      'Falling at home (pavement trips, ladder slips during DIY) producing chipped or broken front teeth',
      'Acute pericoronitis on an erupting wisdom tooth in late teens or early twenties',
      'Lost filling around the conservation area where local pharmacies sell temporary cement',
    ],
    localContext:
      'Old Harlow has a distinct identity from the planned post-war town — a market settlement that pre-dates the New Town designation by centuries. The conservation status of much of the area means the dental practices operate from converted period buildings rather than purpose-built modern clinics, which influences both the patient demographic (more established families, fewer young transient renters) and the type of work (more crown and bridge maintenance, fewer cosmetic procedures than in newer areas like Newhall).',
  },

  'church-langley': {
    heroHeading: 'Emergency dentists in Church Langley (CM17)',
    heroParagraph:
      'Church Langley is one of the largest modern villages in Essex — a planned development that has matured over the last 25 years into a school-catchment family hub anchored by the Tesco Extra and Henry Moore School. We match Church Langley families with vetted Harlow emergency dentists, with paediatric trauma and family-of-four scheduling among the most common patterns.',
    introHeading: 'Family-focused emergency dental matching for Church Langley',
    introParagraphs: [
      'Church Langley\'s demographic skews family — school-catchment buyers, two-children-and-a-dog households, and the parents of teenagers who play rugby and football at the weekend. The emergency dental presentations reflect this: paediatric mouth trauma from playgrounds and sport, sports injuries in older teenagers, and the inevitable "lost filling on a Friday night" requests from busy working parents.',
      'No dental practices sit physically inside Church Langley — the major Tesco Extra is the only large commercial anchor. Matched dentists are typically in Old Harlow (a 5–7 minute drive) or central Harlow (10 minutes via the A1184). Saturday morning slots are particularly relevant here given how busy weekday school-run mornings are for most local families.',
      'For paediatric emergencies — especially knocked-out adult teeth in 8–12 year olds — every minute counts and we treat these as critical-priority matches regardless of time of day. For routine wisdom tooth pain in older teenagers and twenty-somethings, we book at standard urgency.',
    ],
    whySpecialistMatters:
      'Paediatric dental emergencies are technically and emotionally different from adult emergencies. A child needs a dentist who can manage the patient as well as the tooth — calm, practiced explanations, parent involvement done well, a tolerance for the inevitable wriggling and crying. Matched dentists for Church Langley families have explicit paediatric emergency experience, not just adult-only practices.',
    patientProfile: {
      heading: 'Patients we typically match in Church Langley',
      points: [
        'School-aged children with playground or sport-related dental trauma',
        'Teenagers in the rugby- and football-playing demographic (knocked-out teeth, fractured incisors)',
        'Working parents needing Saturday morning slots that fit around school commitments',
        'Wisdom-tooth pain in 17–22 year olds completing their eruption sequence',
        'Family-of-four registrations transitioning from emergency to ongoing routine care',
      ],
    },
    commonTriggers: [
      'Playground or PE-lesson trauma producing chipped or knocked-out front teeth',
      'Friday night discovery that a filling has been quietly missing for several days',
      'Wisdom-tooth pain in teenagers that flares the night before an exam',
      'Sport-related avulsion (rugby, football, hockey) at weekend matches',
      'New family arrivals needing emergency cover before they have registered with a dentist',
    ],
    localContext:
      'Church Langley reached its current population entirely within the last 25 years — the village simply did not exist in 1995. This produces a noticeably younger demographic and a higher concentration of families with school-age children than the older Harlow neighbourhoods. The lack of a dental practice physically inside the village is the most-cited inconvenience by residents — every Church Langley dental enquiry involves at least a 5-minute drive.',
  },

  'newhall': {
    heroHeading: 'Emergency dentists for Newhall residents (CM17)',
    heroParagraph:
      'Newhall is the most recently developed of Harlow\'s neighbourhoods — a contemporary mixed-use scheme that has grown around Newhall Square and Centenary Park since the early 2000s. We match Newhall residents with vetted Harlow emergency dentists, typically in Church Langley or central Harlow given Newhall\'s location on the eastern edge of town.',
    introHeading: 'Emergency dental matching for Newhall residents',
    introParagraphs: [
      'Newhall\'s population is younger and more transient than the older Harlow neighbourhoods — first-time buyers, young couples, and a higher proportion of renters than in the established areas. The dental emergency mix reflects this: less crown-and-bridge maintenance, more wisdom-tooth pain in twenty-somethings, more new-arrival emergencies before patients have registered with a regular practice.',
      'The closest dental practices to Newhall are in Church Langley\'s commercial cluster (3 minutes by car) and Old Harlow High Street (7 minutes). Matched Newhall enquiries typically route to one of these depending on availability and the specific emergency type.',
      'Many Newhall residents work in central London or Stansted — meaning Saturday morning slots and out-of-hours cover are particularly relevant. The matching service prioritises Saturday slot availability for Newhall enquiries flagged as time-constrained.',
    ],
    whySpecialistMatters:
      'Newhall residents who have not yet registered with a regular dentist — common in this transient demographic — benefit from a matching service that can introduce them to a practice that will continue ongoing care after the emergency is resolved. The matched dentist usually offers transition to regular registration if the patient wants it.',
    patientProfile: {
      heading: 'Patients we typically match in Newhall',
      points: [
        'First-time buyers and young couples not yet registered with a Harlow dentist',
        'Wisdom-tooth pain in 20–28 year olds during late eruption',
        'Renters who have moved within the last year and have not transferred dental records',
        'London commuters needing Saturday morning slots around weekday work hours',
        'Families with very young children (Newhall has a high birth rate) needing paediatric emergency cover',
      ],
    },
    commonTriggers: [
      'New arrivals discovering a long-ignored filling has finally given way',
      'Saturday-morning urgency from London-commuting residents',
      'Wisdom-tooth pain in the early-twenties demographic',
      'First emergency presentations from children of new families establishing routines',
      'Sports trauma from the running and cycling clusters around Centenary Park',
    ],
    localContext:
      'Newhall is the architectural showcase of modern Harlow — the development won several design awards in its early phases and continues to expand with new residential clusters. The demographic remains noticeably younger and higher-income than the average for the borough, which influences the dental emergency profile (less repair-of-old-restorations, more first-time presentations).',
  },

  'sumners': {
    heroHeading: 'Emergency dentists for Sumners (CM19)',
    heroParagraph:
      'Sumners sits on the western edge of Harlow, between the town centre and Roydon. We match Sumners residents with vetted Harlow emergency dentists, with practices in central Harlow and Roydon both within easy reach.',
    introHeading: 'Emergency dental matching for Sumners residents',
    introParagraphs: [
      'Sumners has a long-established residential character — predominantly post-war housing in mid-density family clusters along Joyners Field and Westfield. The dental emergency mix is broadly typical of established residential Harlow: a mix of established-family crown maintenance, school-age trauma from the surrounding family demographic, and the occasional out-of-hours wisdom-tooth flare.',
      'The closest dental practices are in central Harlow (5 minutes via the A414) and Roydon village (4 minutes west). For urgent same-day matching we consider both depending on availability and your specific emergency type.',
      'Many Sumners residents work in central Harlow or Bishop\'s Stortford, making working-day matching the dominant pattern. Saturday slots are available through the matched dentists for genuine weekend emergencies.',
    ],
    whySpecialistMatters:
      'Sumners patients tend to be longer-tenured Harlow residents who may have had the same dentist for many years. Matched emergency dentists understand the value of continuity — the emergency visit is often the first introduction, and many Sumners patients prefer to continue with the matched practice for routine care if the emergency experience is positive.',
    patientProfile: {
      heading: 'Patients we typically match in Sumners',
      points: [
        'Established families with school-age children needing paediatric emergency cover',
        'Older residents with substantial restorative history requiring crown re-cementation or repair',
        'Working-age adults needing fast same-day pain relief during the working week',
        'Parents of teenagers with sports-related dental trauma',
        'Residents whose previous Harlow dentist has retired or closed and who need re-engagement',
      ],
    },
    commonTriggers: [
      'Crown loss in older residents with restoration history dating back to the 1990s',
      'Severe ache from a heavily filled tooth where decay has progressed beyond the existing repair',
      'Sports trauma from school-age and teenage children',
      'Lost filling that has been ignored for a few days and finally produced sensitivity',
      'Pericoronitis flares in the late-teens-to-early-twenties demographic',
    ],
    localContext:
      'Sumners is one of Harlow\'s quieter residential neighbourhoods — the housing is predominantly post-war, the streets are calm, and the population skews towards established families and older homeowners rather than young professional renters. Western Harlow generally has fewer dental practices than central or eastern Harlow, but matched dentists in central Harlow are within a 5-minute drive of any Sumners address.',
  },

  'staple-tye': {
    heroHeading: 'Emergency dentists for Staple Tye (CM18)',
    heroParagraph:
      'Staple Tye is a long-established neighbourhood on the south-western side of Harlow, anchored by the Staple Tye Shopping Centre and adjacent to Latton Bush. We match Staple Tye residents with vetted Harlow emergency dentists, with practices in central Harlow and the Latton Bush area both accessible.',
    introHeading: 'Emergency dental matching for Staple Tye residents',
    introParagraphs: [
      'Staple Tye is dominated by family housing close to the shopping centre and the local schools. The dental emergency mix here mirrors much of established Harlow — a steady stream of school-age trauma, working-age toothache, and older-resident crown maintenance, with occasional weekend out-of-hours pressure when something happens on a Saturday afternoon and cannot wait until Monday.',
      'Matched dentists for Staple Tye enquiries are typically in central Harlow (5–7 minutes by car) or in the wider CM18 catchment. For genuine same-day emergencies during opening hours we aim to confirm an appointment within an hour of the form being submitted.',
      'NHS access for Staple Tye residents is variable — some practices in the area maintain NHS lists, some are private-only. The matching form lets you indicate NHS preference and we prioritise practices with NHS availability where possible.',
    ],
    whySpecialistMatters:
      'A meaningful share of Staple Tye dental emergencies are paediatric — the area\'s family demographic and proximity to multiple schools (Brays Grove, Burnt Mill) means children\'s dental trauma is a regular presentation. Matched dentists for Staple Tye routinely handle paediatric emergencies and have age-appropriate communication patterns rather than treating children as small adults.',
    patientProfile: {
      heading: 'Patients we typically match in Staple Tye',
      points: [
        'School-age children with playground or PE-related trauma',
        'Working-age adults needing same-day pain relief that fits around the working day',
        'Older residents with extensive restorative history needing emergency repairs',
        'Families with NHS preference looking for emergency NHS access',
        'Residents living between Bush Fair and the Staple Tye precinct who use either as a local hub',
      ],
    },
    commonTriggers: [
      'Playground falls causing chipped front teeth in primary-school children',
      'Lost filling discovered over the weekend and producing sensitivity by Monday',
      'Severe toothache in working-age adults unrelieved by over-the-counter painkillers',
      'Crown failures in older residents with restoration history dating to the 1990s or earlier',
      'Wisdom tooth flare-ups in teenage and twenty-something residents',
    ],
    localContext:
      'Staple Tye is one of the quieter family-residential neighbourhoods in Harlow, with the shopping centre serving as a local hub for grocery, post office, and pharmacy needs. The pharmacy is particularly relevant for emergency dental — temporary filling kits, dental cement, and over-the-counter pain relief are all stocked, making Staple Tye one of the easier areas to manage acute symptoms while waiting for a matched appointment.',
  },

  'the-stow': {
    heroHeading: 'Emergency dentists for The Stow (CM20)',
    heroParagraph:
      'The Stow is one of Harlow\'s original 1950s neighbourhood centres — a planned precinct anchored by the shopping centre that has served central Harlow for over 70 years. We match Stow residents with vetted central Harlow emergency dentists, typically with travel times under 10 minutes for most central addresses.',
    introHeading: 'Emergency dental matching for The Stow residents',
    introParagraphs: [
      'The Stow\'s position in central Harlow gives residents the widest practical choice of dental practices in the borough — the central CM20 cluster includes practices on the High Street, in the Town Centre, and along First Avenue, all within a few minutes\' drive. For The Stow residents this typically means we can offer 2–3 practice options for same-day matching during opening hours.',
      'The patient profile here is broad — The Stow has both long-established residents in the original 1950s housing and newer arrivals in the surrounding apartment developments. The dental emergency mix reflects the breadth: paediatric trauma alongside crown failures alongside wisdom-tooth pain, with no single category dominating.',
      'NHS emergency access in central Harlow is generally better than in the outer neighbourhoods — more practices, more NHS list capacity, more flexibility for genuine same-day NHS need. Where NHS preference is indicated we prioritise practices with current NHS availability.',
    ],
    whySpecialistMatters:
      'Central Harlow practices serve a higher daily patient volume than the suburban practices, which means more case-mix exposure — emergency dentists working in central practices typically see avulsions, abscesses, and complex trauma every week, not every few months. Matched dentists from the central cluster bring this volume of recent experience to the appointment.',
    patientProfile: {
      heading: 'Patients we typically match for The Stow',
      points: [
        'Established residents in the original 1950s housing with long restorative history',
        'Newer apartment-development residents needing first-time emergency access in Harlow',
        'Working-age adults employed locally and needing convenient appointment slots',
        'School-age children at the surrounding schools',
        'Older residents with crown-and-bridge maintenance needs',
      ],
    },
    commonTriggers: [
      'Severe toothache from neglected decay finally reaching the pulp',
      'Crown re-cementation requests from older residents',
      'Lost filling discovered over the weekend',
      'Trauma from local sports clubs and primary-school playgrounds',
      'New arrivals needing first-time emergency cover before they have registered',
    ],
    localContext:
      'The Stow remains one of Harlow\'s most architecturally distinctive neighbourhoods — the 1950s precinct shopping centre is a recognised example of post-war planned-town design, and the surrounding housing follows the original New Town principles. The dental practice landscape in central CM20 is denser than anywhere else in the borough, making same-day matching faster here than in the outer neighbourhoods.',
  },

  'mark-hall': {
    heroHeading: 'Emergency dentists for Mark Hall (CM20)',
    heroParagraph:
      'Mark Hall is one of the original Harlow neighbourhoods, centred around First Avenue and adjacent to the town centre. We match Mark Hall residents with vetted central Harlow emergency dentists, typically with very short travel times given the central location.',
    introHeading: 'Emergency dental matching for Mark Hall residents',
    introParagraphs: [
      'Mark Hall\'s central Harlow location and established 1950s residential character produce a broad emergency dental mix — long-established residents needing crown and bridge maintenance alongside the inevitable trauma cases from the wider family demographic. Most matched appointments for Mark Hall residents are within 5 minutes\' drive.',
      'The First Avenue spine and adjacent Park Lane connect Mark Hall directly to the central Harlow dental cluster, giving residents the widest practical choice of practices in the borough. We typically offer 2–3 practice options for same-day matching from the central cluster.',
      'NHS access here mirrors the central Harlow pattern — generally better than the outer neighbourhoods, with several practices maintaining NHS lists. Where NHS preference is indicated, we prioritise accordingly.',
    ],
    whySpecialistMatters:
      'Mark Hall patients often have decades of dental history within Harlow — the area was among the first occupied in the New Town development in the 1950s, and many residents have used the same local practices for many years. Matched emergency dentists with restorative experience handle the heavily restored mouths typical of this demographic better than newer practitioners.',
    patientProfile: {
      heading: 'Patients we typically match in Mark Hall',
      points: [
        'Long-tenured Harlow residents with substantial historical restorative work',
        'Older patients managing crown-and-bridge maintenance',
        'Working-age adults employed in central Harlow needing convenient slots',
        'Families with school-age children at the surrounding primary schools',
        'Residents whose previous dentist has retired or whose practice has closed',
      ],
    },
    commonTriggers: [
      'Crown loss in long-tenured residents with restoration history dating to the 1980s or 1990s',
      'Severe ache from heavily restored teeth where decay has progressed beyond the existing repair',
      'Lost filling around the central residential streets',
      'Sports and playground trauma in school-age children',
      'Pericoronitis flares in the late-teens-to-early-twenties demographic',
    ],
    localContext:
      'Mark Hall was one of the four original neighbourhoods designated when Harlow was established as a New Town in 1947. The 1950s residential character has been largely preserved, and many of the original residents (or their direct descendants) still live in the area. This gives the patient demographic an unusual depth — emergency dentists routinely see patients whose family dental history in Harlow goes back three generations.',
  },

  'netteswell': {
    heroHeading: 'Emergency dentists for Netteswell (CM20)',
    heroParagraph:
      'Netteswell sits at the heart of central Harlow, adjacent to Town Park and the central commercial cluster. We match Netteswell residents with vetted Harlow emergency dentists, typically with very short travel times.',
    introHeading: 'Emergency dental matching for Netteswell residents',
    introParagraphs: [
      'Netteswell\'s central position means residents have the widest practical choice of Harlow dental practices — most central CM20 practices are within a 5–10 minute walk or short drive. The emergency dental mix here is broad: established-family crown and bridge maintenance alongside trauma cases, working-age toothache alongside paediatric presentations.',
      'Town Park\'s proximity matters more than it might sound — sport and recreational injury cases in the surrounding family demographic produce a steady flow of avulsion and fracture trauma matched to central practices. Bush Fair (the adjacent local shopping precinct) also features as a cluster point for residents.',
      'NHS access for Netteswell residents is generally good — the central practice density gives more NHS list flexibility than the outer neighbourhoods. Most matched practices accept both NHS and private patients and will discuss the route at the appointment.',
    ],
    whySpecialistMatters:
      'Netteswell\'s position next to Town Park produces an unusual concentration of recreational and sports-related dental trauma — football, rugby, cycling injuries from the park and the surrounding playing fields. Matched dentists experienced with avulsion and fracture cases are particularly relevant for this address group.',
    patientProfile: {
      heading: 'Patients we typically match in Netteswell',
      points: [
        'Sports and park-recreation injury cases (avulsion, fracture) from the Town Park area',
        'Established families with school-age children',
        'Working-age adults employed in central Harlow',
        'Older residents needing crown-and-bridge maintenance',
        'Residents living on the Bush Fair side using the local pharmacy for symptom management',
      ],
    },
    commonTriggers: [
      'Knocked-out adult teeth from football and rugby in Town Park',
      'Cycling injuries producing fractured front teeth',
      'Severe toothache in working-age adults',
      'Lost crown failures in older residents',
      'Wisdom-tooth pain in teenagers and twenty-somethings',
    ],
    localContext:
      'Netteswell is at the heart of post-war Harlow — adjacent to Town Park (one of the largest urban parks in any English town of comparable size) and a short walk from the original Stow precinct. The combination of central residential density and the park\'s recreational use means matched dentists here see a higher proportion of trauma cases than in the more residential outer neighbourhoods.',
  },

  'sawbridgeworth': {
    heroHeading: 'Emergency dentists for Sawbridgeworth (CM21)',
    heroParagraph:
      'Sawbridgeworth is the historic Hertfordshire market town just north of Harlow — a separate town with its own character but commonly served by Harlow-area dentists for emergency cover. We match Sawbridgeworth residents with vetted dentists across the wider catchment, including practices in Harlow and the immediate Sawbridgeworth area.',
    introHeading: 'Emergency dental matching for Sawbridgeworth residents',
    introParagraphs: [
      'Sawbridgeworth is geographically separate from Harlow but shares the dental practice catchment — most Sawbridgeworth residents who need emergency dental care end up at a Harlow practice or one of the small Sawbridgeworth surgeries. Travel time from any Sawbridgeworth address to central Harlow is typically 6–10 minutes via the A1184.',
      'The patient profile here skews towards established families and older homeowners — the High Street and Bell Street residential streets are home to long-tenured Sawbridgeworth families, with newer arrivals concentrated in the recent developments around Pishiobury Drive. Emergency presentations reflect the demographic: more crown-and-bridge maintenance, less first-presentation toothache, more managed ongoing dental relationships.',
      'NHS access from Sawbridgeworth is via the same central Harlow practices that serve the rest of the borough. We prioritise NHS-list practices where preference is indicated.',
    ],
    whySpecialistMatters:
      'Sawbridgeworth\'s slightly older and more established demographic means matched emergency dentists with restorative experience are particularly relevant — the typical Sawbridgeworth emergency involves a 15-year-old crown finally failing or a heavily restored tooth requiring assessment, rather than a first-time toothache presentation.',
    patientProfile: {
      heading: 'Patients we typically match in Sawbridgeworth',
      points: [
        'Long-established residents with substantial historical restorative work',
        'Older homeowners managing crown-and-bridge maintenance',
        'Families with children at the local primary and secondary schools',
        'Newer arrivals in the Pishiobury Drive developments',
        'London commuters via Liverpool Street needing slot flexibility',
      ],
    },
    commonTriggers: [
      'Long-standing crown loss in established residents',
      'Severe ache from heavily restored teeth in older patients',
      'Sports trauma in school-age children',
      'Lost filling discovered at weekends',
      'New arrivals from London needing first-time emergency cover before registering with a dentist',
    ],
    localContext:
      'Sawbridgeworth is technically in Hertfordshire (East Herts district) rather than Essex, but the daily life of the town — shopping, schooling, healthcare, dentistry — is closely integrated with Harlow. The town has its own railway station with direct services to Liverpool Street, which produces a meaningful London-commuter demographic among newer residents.',
  },

  'roydon': {
    heroHeading: 'Emergency dentists for Roydon (CM19)',
    heroParagraph:
      'Roydon is the Lee Valley village just west of Harlow — a separate community with its own character but commonly served by Harlow-area dentists for emergency need. We match Roydon residents with vetted central Harlow practices, typically a 4–5 minute drive from the village.',
    introHeading: 'Emergency dental matching for Roydon residents',
    introParagraphs: [
      'Roydon is a small village geographically separate from Harlow proper, with its own primary school, post office, and country pubs. There is no dental practice in the village itself — Roydon residents in need of emergency dental care travel either west into Hertfordshire or, more commonly, the short drive east into Harlow.',
      'The patient demographic in Roydon is predominantly settled-family — long-tenured residents in established cottages and newer arrivals in the developments around Roydon Marina. Emergency presentations are broad and unconcentrated: the relatively small population means we see a steady mix rather than any single dominant category.',
      'NHS access from Roydon is through the central Harlow practices. Travel times are short — under 10 minutes from anywhere in the village to central Harlow practices — which makes same-day matching practical even for non-driving patients via lift or public transport.',
    ],
    whySpecialistMatters:
      'Roydon\'s population is small enough that residents may not be aware of the full range of Harlow dental practices available to them. The matching service surfaces practices based on the specific emergency type — for example, sport-trauma cases routed to practices with avulsion experience, paediatric cases routed to family-friendly practices — rather than just the closest geographically.',
    patientProfile: {
      heading: 'Patients we typically match in Roydon',
      points: [
        'Long-established village residents with substantial historical restorative work',
        'Families with children at Roydon Primary or the Harlow secondary schools',
        'Newer arrivals in the Marina developments needing first-time emergency cover',
        'London commuters via Roydon railway station needing slot flexibility',
        'Residents from the surrounding rural lanes (Halls Green, Nazeing) using Roydon as their dental access point',
      ],
    },
    commonTriggers: [
      'Severe toothache requiring same-day pain relief',
      'Lost crown or filling in established residents',
      'Sport and outdoor trauma (cycling, horse riding from the surrounding lanes)',
      'Pericoronitis in teenagers and twenty-somethings',
      'New arrivals discovering they have no UK dentist registered',
    ],
    localContext:
      'Roydon is technically in Essex but with a distinct village character very different from Harlow proper — country lanes, the Lee Navigation, and the Marina giving the village a recreational and tourism flavour absent from Harlow town. Dental needs are met by the central Harlow cluster of practices given the absence of any practice in the village itself.',
  },
};

export const getAreaContent = (slug: string): AreaContent | undefined => areaContent[slug];
