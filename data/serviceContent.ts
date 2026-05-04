// data/serviceContent.ts
// Per-service deep content. Each entry powers the service detail page
// intro, benefits cards, "is this right for you" candidates, and the
// process steps. Hand-written for clinical accuracy in a YMYL niche.

export interface ServiceContent {
  intro: string[];
  benefits: { title: string; desc: string }[];
  candidateIntro: string;
  candidates: string[];
  process: { title: string; desc: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {

  'severe-toothache': {
    intro: [
      'Severe toothache is the single most common dental emergency we match in Harlow. The underlying cause is almost always one of three things: deep decay reaching the pulp (pulpitis), an early or established abscess, or a cracked tooth allowing bacteria into the inner chamber. The pain itself is not dangerous — but the underlying cause progresses without treatment, and pulpitis that could have been resolved with a filling at week one becomes a root canal at week three and an extraction at week six.',
      'Matched dentists triage toothache calls by intensity, duration, and whether you have any swelling. Severe pain unrelieved by ibuprofen and paracetamol taken together, pain that wakes you at night, or pain accompanied by any visible facial swelling all qualify as same-day emergencies. Mild intermittent twinges that respond to painkillers can usually wait until the next routine slot, though we still match within the working day so you have an opinion before things worsen.',
      'The emergency appointment provides immediate pain relief — opening the tooth to release pressure, prescribing antibiotics where infection is established, or placing a temporary sedative dressing — followed by a definitive treatment plan at a follow-up visit. Most severe toothache cases are fully resolvable; the goal of the emergency appointment is to relieve pain immediately and identify the right next step.',
    ],
    benefits: [
      {
        title: 'Pain relief on the day',
        desc: 'Matched dentists prioritise pain control at the emergency visit — through dressings, drainage, prescription analgesia, or starting root canal treatment. You leave the appointment in materially less pain than you arrived in.',
      },
      {
        title: 'Diagnosis, not just relief',
        desc: 'A dentist who only treats the symptom (e.g. antibiotics for an abscess) without addressing the cause sets you up for recurrence. Matched dentists identify the underlying problem and explain the full treatment path.',
      },
      {
        title: 'Sensible escalation if needed',
        desc: 'Most toothache is dental, but a small number of presentations are referred pain from the jaw, sinuses, or even cardiac. Experienced clinicians recognise red flags and refer appropriately rather than treating the wrong thing.',
      },
      {
        title: 'Clear quote before treatment',
        desc: 'The matched dentist provides a written quote for any treatment beyond the emergency consultation itself. You decide what to proceed with — no surprises on the bill.',
      },
    ],
    candidateIntro: 'Same-day matching for severe toothache is most relevant if any of the following apply:',
    candidates: [
      'Pain that does not respond to ibuprofen and paracetamol taken together at recommended adult doses',
      'Pain that wakes you from sleep or prevents normal eating and drinking',
      'Pain accompanied by any visible swelling of the face, gum, or jaw',
      'Pain that has lasted more than 48 hours and is getting worse rather than better',
      'Sensitivity to hot or cold that lingers for more than 30 seconds after the trigger is removed',
      'A recent dental procedure followed by new severe pain — this is uncommon and warrants assessment',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us what you are experiencing, where you are in Harlow, and how soon you can attend. The form is brief — under two minutes.',
      },
      {
        title: 'We make the introduction',
        desc: 'Within 60 minutes during opening hours, we connect you with a matched Harlow dentist who has availability and the right experience for your situation.',
      },
      {
        title: 'You attend the emergency appointment',
        desc: 'The dentist examines, takes any necessary X-rays, and provides immediate pain relief. They confirm the diagnosis and discuss the treatment options with clear costs.',
      },
      {
        title: 'You decide on next steps',
        desc: 'Definitive treatment (root canal, extraction, restoration) is usually booked as a follow-up. You can continue with the matched dentist as your regular practitioner if you wish, or return to your usual practice — your choice.',
      },
    ],
  },

  'knocked-out-tooth': {
    intro: [
      'A completely knocked-out adult permanent tooth is one of the few true dental emergencies where every minute genuinely counts. The cells on the root surface that allow re-attachment to the jaw bone start dying within minutes of the tooth leaving the socket — by 60 minutes, success rates of re-implantation are dropping fast; by two hours, long-term success is rare. The window for action is short and the action itself is specific.',
      'The single most important thing you can do is preserve the tooth correctly. Pick it up by the crown (the white part) — never the root. If it is dirty, rinse it briefly in milk or saliva. Do not use water — water is hypotonic relative to the cells on the root surface and damages them. Then either re-insert the tooth into the socket immediately (push gently — it should slot back in) or store it in cold milk or inside the patient\'s cheek pouch (saliva works as a transport medium). And get to a dentist within the hour.',
      'Matched Harlow dentists prioritise avulsion calls absolutely — even where the schedule is full, an avulsion case is fitted in. The emergency visit involves cleaning, re-implantation, splinting to adjacent teeth for 1–2 weeks, and follow-up monitoring. Some re-implanted teeth survive for decades; some are lost despite perfect technique. The dentist will be honest about prognosis.',
    ],
    benefits: [
      {
        title: 'Absolute priority handling',
        desc: 'Avulsion enquiries jump every queue. Matched dentists are explicitly briefed to fit avulsion cases the same hour — even displacing routine patients if needed.',
      },
      {
        title: 'Correct re-implantation technique',
        desc: 'Re-implantation is straightforward in concept but easy to do badly. Splinting tension, occlusal adjustment, and the post-implantation antibiotic and tetanus protocol all matter. Experienced dentists get this right.',
      },
      {
        title: 'Honest prognosis',
        desc: 'Not every re-implanted tooth survives. The matched dentist will give you a realistic prognosis based on time-out-of-socket, root maturity, and damage to the socket — not false reassurance.',
      },
      {
        title: 'Clear plan B if re-implantation fails',
        desc: 'Even where re-implantation is impossible or unsuccessful, the dentist immediately discusses the replacement options (implant, bridge, or denture) with timing and costs. You leave with a path forward, not just a missing tooth.',
      },
    ],
    candidateIntro: 'Avulsion (knocked-out tooth) matching is the right route if:',
    candidates: [
      'A permanent adult tooth has been completely knocked out within the last few hours',
      'The tooth itself is intact (not shattered into multiple pieces)',
      'The patient is alert and the avulsion is the primary concern (not part of major head trauma — call 999 for that)',
      'You are able to reach a Harlow dental practice within 1–2 hours of the injury',
      'You have preserved the tooth in milk, saliva, or re-inserted it in the socket',
    ],
    process: [
      {
        title: 'Preserve the tooth correctly NOW',
        desc: 'Pick it up by the crown only. Rinse briefly in milk if dirty (NOT water). Re-insert into socket immediately if you can; otherwise store in milk or inside the cheek. Time matters — every minute counts.',
      },
      {
        title: 'Submit the matching form marked "knocked-out tooth"',
        desc: 'We treat avulsion as critical priority. The form takes under one minute — you can fill it in while heading to the practice.',
      },
      {
        title: 'We connect you immediately',
        desc: 'Avulsion calls bypass routine queueing. We aim to confirm a Harlow practice within 15 minutes during opening hours.',
      },
      {
        title: 'Re-implantation, splinting, and follow-up',
        desc: 'The dentist re-implants, splints the tooth to its neighbours, and books follow-up appointments to monitor healing. Antibiotics and a tetanus check complete the protocol.',
      },
    ],
  },

  'broken-or-chipped-tooth': {
    intro: [
      'Broken and chipped teeth are among the most common emergency presentations — usually the result of biting something hard (a popcorn kernel, a fish bone, a bottle cap), sport, or a fall. Severity varies enormously. A small enamel chip on the corner of a front tooth with no pain or sensitivity is essentially cosmetic and can wait days for a routine repair. A deeper fracture exposing the dentine (the yellower layer beneath the white enamel) creates immediate sensitivity to hot, cold, and sweet food. A break exposing the pulp — visible as a small red or pink spot in the centre of the broken surface — is acutely painful and risks rapid infection.',
      'Cracked tooth syndrome deserves separate mention. Patients describe sharp pain on biting that vanishes the moment pressure releases — often without any visible crack. The crack lets bacteria reach the pulp and is one of the trickier diagnoses in dentistry. Matched dentists use a "tooth slooth" or similar device to apply pressure to individual cusps and identify which one is cracked. Treatment depends on how deep the crack runs: from a crown that holds the tooth together, to root canal therapy if the pulp is involved, to extraction in the worst cases.',
      'Matched Harlow dentists triage by severity. Visible pulp exposure or significant pain books same day. Sensitivity without visible pulp exposure books within 48 hours. Cosmetic chips with no symptoms book at the next routine slot. Where you can recover the broken fragment, bring it — for larger front-tooth fractures, modern adhesive dentistry can sometimes re-attach the original piece for a virtually invisible repair.',
    ],
    benefits: [
      {
        title: 'Triage by severity',
        desc: 'Not every break is an emergency. The matched dentist tells you whether you need to be seen today or whether a routine slot in 48 hours is fine — saving you time and unnecessary urgency.',
      },
      {
        title: 'Original-fragment re-attachment where possible',
        desc: 'For larger front-tooth fractures, the original piece can sometimes be bonded back. The cosmetic result is materially better than a composite rebuild. Bring the fragment in milk if you have it.',
      },
      {
        title: 'Cracked-tooth diagnosis',
        desc: 'Pain on biting that disappears when pressure releases is the classic cracked-tooth presentation — and easy to miss without a deliberate test. Matched dentists routinely test for this.',
      },
      {
        title: 'Long-term plan, not just a quick fix',
        desc: 'A composite repair on a heavily-restored tooth has a finite lifespan. The matched dentist discusses whether a crown is the right longer-term answer, with a clear cost comparison, rather than defaulting to the cheapest immediate fix.',
      },
    ],
    candidateIntro: 'Same-day or next-day matching for a broken tooth is appropriate when:',
    candidates: [
      'You can see pink, red, or visibly bloody tissue in the centre of the broken surface (pulp exposure)',
      'The tooth is sharply painful or aching constantly',
      'You have significant sensitivity to hot, cold, or sweet food and drink',
      'A larger fragment has come away — particularly from a front tooth where appearance matters',
      'You experience sharp pain on biting that disappears when pressure releases (suspected crack)',
      'A crown has cracked or chipped and is causing soft-tissue irritation',
    ],
    process: [
      {
        title: 'Recover the fragment if you can',
        desc: 'Find any larger broken pieces and store them in milk or saline. Even if the dentist cannot re-attach, having the fragment helps with reconstruction planning.',
      },
      {
        title: 'Submit the matching form',
        desc: 'Describe the break — front or back tooth, size of fragment, any visible bleeding or pulp tissue, current pain level. We use this to triage urgency.',
      },
      {
        title: 'Emergency assessment',
        desc: 'The matched dentist examines, takes X-rays, and assesses both the immediate damage and any underlying weakness. They explain whether you need same-day treatment or whether a planned routine repair is appropriate.',
      },
      {
        title: 'Restoration: rebuild or refer',
        desc: 'Most broken teeth can be restored at the visit — composite for chips, crowns where structure is compromised. Severe fractures may need root canal therapy followed by a crown, usually as separate appointments.',
      },
    ],
  },

  'lost-filling-or-crown': {
    intro: [
      'A lost filling or crown is rarely a same-day emergency — but it does need attention within a few days. The exposed underlying tooth is more vulnerable to decay, fracture, and sensitivity. Without the protection of the restoration, food packs into the cavity, bacteria multiply, and the tooth weakens further. A repair that would have been straightforward at week one can become a root canal or extraction by month two if the cavity grows or the remaining walls of the tooth crack.',
      'For lost crowns specifically: keep the crown if you have it. The matched dentist can almost always re-cement it back into place at a single appointment, which is cheaper than a brand-new crown. Pharmacy temporary cement (Recapit or similar) holds a crown in place for a few days until you can be seen. Clean both the inside of the crown and the underlying tooth gently before re-cementing, and avoid biting hard food on it.',
      'Lost fillings vary by what was filling. A small composite repair from a routine appointment can usually be replaced like-for-like. A large amalgam filling (silver-coloured, mercury-based) that has held a tooth together for two decades may have been the only thing preserving structural integrity — its loss often signals a tooth that needs more than another filling, often a crown or even extraction. Matched dentists assess the remaining structure honestly rather than just patching.',
    ],
    benefits: [
      {
        title: 'Re-cement existing crown at low cost',
        desc: 'A lost crown that you have kept can usually be re-cemented at the appointment for a fraction of a new crown\'s cost. Bring the crown — clean it gently first.',
      },
      {
        title: 'Honest assessment of remaining tooth',
        desc: 'Sometimes a lost large filling reveals a tooth that needs more than a simple repair. Matched dentists tell you when a crown or extraction is the right answer, with cost comparison — rather than just patching for short-term convenience.',
      },
      {
        title: 'Temporary protection guidance',
        desc: 'If you cannot be seen for 24–48 hours, the matched dentist advises on pharmacy temporary cement, dietary precautions, and any pain-management steps that prevent the situation worsening.',
      },
      {
        title: 'No upsell pressure',
        desc: 'A simple re-cement or filling replacement should be quoted at simple-procedure rates. Matched dentists do not use the emergency context to push expensive treatment that is not clinically justified.',
      },
    ],
    candidateIntro: 'Same-week matching for lost fillings or crowns is right if:',
    candidates: [
      'A filling has fallen out and you have noticeable sensitivity or food packing in the cavity',
      'A crown has come off — even without pain, the underlying tooth is vulnerable',
      'You can feel a sharp edge on the broken tooth that is irritating your tongue or cheek',
      'A temporary filling placed at a previous appointment has come out before the permanent restoration was done',
      'You are about to travel and want the tooth secured before going abroad',
    ],
    process: [
      {
        title: 'Locate the lost piece if possible',
        desc: 'For a lost crown, find it — most can be re-cemented if intact. For a lost filling, the original material is not re-used (a fresh restoration is placed) but knowing what was there helps the dentist.',
      },
      {
        title: 'Use pharmacy temporary cement if needed',
        desc: 'If you cannot be seen for a day or two, Recapit-style temporary cement from any pharmacy holds the crown in place. Avoid biting on it.',
      },
      {
        title: 'Submit the matching form',
        desc: 'We match within the working day for genuine sensitivity or pain, or within 48 hours for asymptomatic cases.',
      },
      {
        title: 'Re-cementation or replacement',
        desc: 'Most cases are resolved at a single appointment — the existing crown re-cemented or a fresh filling placed. Where the underlying tooth is too damaged for simple repair, the dentist discusses the longer-term options.',
      },
    ],
  },

  'dental-abscess': {
    intro: [
      'A dental abscess is a localised collection of pus caused by bacterial infection — most often from an untreated decayed tooth, but sometimes from gum disease (a periodontal abscess) or after an unsuccessful root canal. The infection itself is contained, for now — but bacterial infections in the orofacial region can spread quickly along the natural tissue planes, and spreading infection becomes a hospital problem rather than a dental one. Recognising when an abscess is still a routine dental emergency and when it has become a medical emergency is the single most important triage decision in this category.',
      'Localised abscesses present as a tender swelling on the gum near the tooth, often with a visible pus-filled "boil" that may discharge intermittently. Pain is typically constant, throbbing, and worse when lying down. There may be a bad taste. These are urgent — same-day matching — but rarely dangerous. The dentist drains the abscess, treats the underlying tooth (usually root canal or extraction), and prescribes antibiotics if the infection is established beyond the immediate area.',
      'Spreading orofacial infection is a different category. Facial swelling moving towards the eye (preseptal or orbital cellulitis), down towards the throat or neck (Ludwig\'s angina), or causing any difficulty swallowing or breathing requires immediate medical care — call 999 or NHS 111, not a dentist. These rare presentations need IV antibiotics in hospital, sometimes airway protection, and urgent surgical drainage. The matching service is for dental abscess — the medical service for spreading infection. The matched dentist will tell you immediately if your presentation needs hospital care rather than dental care.',
    ],
    benefits: [
      {
        title: 'Same-day drainage and pain relief',
        desc: 'Localised abscess pain is some of the worst in dentistry. Drainage relieves pressure within minutes. Matched dentists prioritise abscess calls for same-day fitting.',
      },
      {
        title: 'Antibiotics with the right indication',
        desc: 'Antibiotics are appropriate where infection has spread beyond the immediate area, where the patient is systemically unwell, or where drainage cannot be achieved. Matched dentists prescribe to indication, not as a default — overuse breeds resistance.',
      },
      {
        title: 'Honest hospital-vs-dentist triage',
        desc: 'Spreading infection (eye, neck, swallowing, breathing) is a hospital problem. Matched dentists will tell you immediately if your presentation needs A&E or NHS 111 rather than booking you in for a dental appointment that would delay proper care.',
      },
      {
        title: 'Treat the cause, not just the symptom',
        desc: 'Antibiotics and drainage manage the acute episode. Definitive treatment (root canal or extraction) addresses the source. Without addressing the cause, the abscess returns. The matched dentist plans both stages clearly.',
      },
    ],
    candidateIntro: 'Same-day dentist matching is appropriate for:',
    candidates: [
      'A localised gum boil or visible pus pocket near a specific tooth',
      'Constant throbbing tooth pain, worse when lying down',
      'Bad taste in the mouth (often from intermittent pus discharge)',
      'Mild facial swelling localised to one cheek or jaw area, without spreading',
      'Recent root canal followed by new pain and swelling',
    ],
    process: [
      {
        title: 'Self-triage for medical-emergency signs first',
        desc: 'Call 999 or NHS 111 — not a dentist — if you have facial swelling spreading to your eye, throat, or neck; difficulty swallowing or breathing; high fever with shaking chills; or feel generally very unwell. These are hospital problems.',
      },
      {
        title: 'Submit the matching form for localised abscess',
        desc: 'For straightforward localised abscess presentations, submit the matching form. We treat these as same-day priority.',
      },
      {
        title: 'Emergency dental visit',
        desc: 'The dentist examines, takes any necessary X-ray, and drains the abscess. Antibiotics are prescribed if appropriate. Pain relief is usually immediate.',
      },
      {
        title: 'Definitive treatment scheduled',
        desc: 'Root canal or extraction is booked as a follow-up — usually within a few days, once acute infection has settled. Without this step, the abscess returns.',
      },
    ],
  },

  'out-of-hours': {
    intro: [
      'Genuine dental emergencies do not respect clinic opening hours. Severe toothache flares overnight, knocked-out teeth happen at sport on Saturday afternoons, lost crowns come out on bank-holiday Mondays. The Harlow emergency dental landscape outside standard 9–5 hours has three layers: a small number of practices offering Saturday morning emergency slots, an even smaller number covering Sundays, and the NHS 111 out-of-hours emergency dental rota that operates 24/7 for genuine urgent need.',
      'Our matching service handles out-of-hours enquiries by triage. Critical presentations — knocked-out adult tooth, uncontrolled bleeding, suspected spreading infection — are routed immediately to NHS 111 if they cannot wait until morning. Severe pain that you can manage with painkillers until the next morning is matched first thing the next working day. Moderate issues (lost filling, mild toothache, broken tooth without pulp exposure) are matched at standard rates the next working day.',
      'For Saturday and Sunday cover, several Harlow practices in our network do offer paid private emergency slots — typically £150–£250 for the consultation alone, with treatment costed separately. These are genuine appointments with experienced dentists, not minor injury units staffed by nurses. NHS 111 booking is free but allocates whichever rota dentist is on call across a wide geographic area, which may mean travel.',
    ],
    benefits: [
      {
        title: 'Honest routing to 111 when appropriate',
        desc: 'Some out-of-hours dental presentations belong with NHS 111 (free) rather than a paid private appointment. We tell you which is which rather than booking everything privately for the sake of it.',
      },
      {
        title: 'Saturday slots in central Harlow',
        desc: 'Several practices in our network offer Saturday morning emergency slots. We know which and book directly — no calling round closed practices on a Saturday morning.',
      },
      {
        title: 'Clear out-of-hours pricing',
        desc: 'The matched dentist quotes the out-of-hours fee upfront before you commit. You decide whether to proceed at the OOH rate or wait until Monday morning standard rates.',
      },
      {
        title: 'Triage that takes urgency seriously',
        desc: 'Critical presentations (avulsion, spreading infection) bypass any normal queueing. Routine OOH presentations (lost filling) go through standard matching.',
      },
    ],
    candidateIntro: 'The out-of-hours matching pathway fits if:',
    candidates: [
      'It is outside standard clinic hours (typically before 8am, after 6pm, or any time on Sunday or bank holidays)',
      'Your presentation is acute enough that you cannot reasonably wait until the next working day',
      'You have already taken over-the-counter pain relief and it is insufficient',
      'You are not exhibiting medical-emergency signs (call 999 or NHS 111 directly for those)',
    ],
    process: [
      {
        title: 'Self-triage first',
        desc: 'Call 999 or NHS 111 — not us — if you have life-threatening signs (uncontrolled bleeding, breathing difficulty, spreading facial swelling). Those are hospital problems.',
      },
      {
        title: 'Submit the matching form, mark "out-of-hours"',
        desc: 'For genuine urgent dental need that cannot wait, submit the form. We triage out-of-hours requests against the available Saturday/Sunday slots in our network.',
      },
      {
        title: 'We confirm or route you to 111',
        desc: 'If we have a private OOH slot that fits your situation, we confirm and you attend. If your situation is better served by NHS 111 (cost or clinical reasons), we tell you and provide the free 111 contact pathway directly.',
      },
      {
        title: 'Follow-up the next working day',
        desc: 'Most OOH appointments resolve the immediate emergency but leave definitive treatment to a planned follow-up. The matched dentist coordinates this directly with you at the OOH visit.',
      },
    ],
  },

  'wisdom-tooth-pain': {
    intro: [
      'Wisdom-tooth pain is one of the most predictable emergencies in dentistry — pericoronitis (inflammation of the gum flap over a partially-erupted wisdom tooth) accounts for the majority of presentations, typically in 17–25 year olds whose wisdom teeth are mid-eruption. Food and bacteria collect under the gum flap, the area becomes inflamed and infected, and the result is localised pain, swelling, bad taste, and difficulty fully opening the jaw. The pain often comes in waves over a few days, with the patient hoping it will settle on its own — and sometimes it does, only to recur worse a few weeks later.',
      'Treatment for acute pericoronitis combines local cleaning under the flap (sometimes with the dentist using a syringe to irrigate the trapped debris out), antibiotics if there is established infection or systemic upset, and clear advice on whether the underlying tooth should ultimately be removed. NICE guidance on wisdom-tooth removal is more conservative than common dental practice — extraction is recommended only where there are clear clinical indications (repeated infections, decay that cannot be restored, cysts, damage to adjacent teeth), not as routine prevention.',
      'Matched Harlow dentists triage wisdom-tooth pain by severity and frequency. A first episode of mild pericoronitis with no swelling can often be managed with home measures (warm salt-water rinses, ibuprofen, soft food) for 24–48 hours before needing a clinic visit. Severe swelling, systemic upset, repeated episodes, or any difficulty swallowing requires same-day attention — the latter being an early warning sign of spreading infection that may need hospital input.',
    ],
    benefits: [
      {
        title: 'Conservative NICE-aligned advice',
        desc: 'Matched dentists follow NICE guidance on wisdom-tooth removal — extraction only where clinically justified, not as routine prevention. Many episodes resolve without surgery; the dentist explains when surgery actually is the right answer.',
      },
      {
        title: 'Same-day relief for acute episodes',
        desc: 'Acute pericoronitis is genuinely painful. Cleaning under the flap and prescribing appropriate analgesia provides immediate relief — much faster than waiting for antibiotics alone to take effect.',
      },
      {
        title: 'Honest about extraction complexity',
        desc: 'Wisdom-tooth extraction varies from straightforward (fully erupted, single-rooted) to complex (impacted, near the inferior alveolar nerve, requires referral to a specialist oral surgeon). The matched dentist is honest about which category your tooth falls into.',
      },
      {
        title: 'Spotting the spreading-infection cases',
        desc: 'A small subset of pericoronitis presentations progress to spreading infection requiring hospital care. Experienced dentists recognise the early warning signs — difficulty swallowing, severe trismus (jaw stiffness), systemic upset — and refer appropriately rather than treating in primary care.',
      },
    ],
    candidateIntro: 'Same-day or next-day matching for wisdom-tooth pain is appropriate when:',
    candidates: [
      'You have visible swelling around an erupting back tooth',
      'You cannot fully open your jaw (trismus) and the limitation is increasing',
      'You have a bad taste from the affected area or visible pus',
      'This is a recurrent episode (third or fourth time) — even if currently mild',
      'You are systemically unwell (fever, fatigue) alongside local symptoms',
      'You are about to travel and want the situation assessed before going',
    ],
    process: [
      {
        title: 'Manage acutely at home if mild',
        desc: 'Warm salt-water rinses several times a day, ibuprofen for pain and inflammation, soft food. Mild first-episode pericoronitis often settles with these measures within 24–48 hours.',
      },
      {
        title: 'Submit the matching form if not settling',
        desc: 'If pain is severe, swelling is increasing, or you have systemic symptoms, submit the form. We match same-day for acute presentations.',
      },
      {
        title: 'Cleaning, irrigation, and assessment',
        desc: 'The matched dentist cleans under the gum flap, prescribes antibiotics and analgesia if appropriate, and assesses whether the tooth should ultimately be removed.',
      },
      {
        title: 'Surgical planning if needed',
        desc: 'If extraction is clinically indicated, the matched dentist either books it directly (for simpler extractions) or refers to a specialist oral surgeon (for impacted teeth or those near the inferior alveolar nerve).',
      },
    ],
  },
};

export const getServiceContent = (slug: string): ServiceContent =>
  serviceContent[slug] ?? serviceContent['severe-toothache'];
