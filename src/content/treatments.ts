import { CategoryInfo, TreatmentItem } from "@/types";

export const treatmentCategories: CategoryInfo[] = [
  {
    id: "emergency",
    name: "Pain & Emergency Care",
    description: "Urgent dental evaluation and rapid relief for acute pain, trauma, or sudden swelling.",
    badge: "Immediate Attention",
  },
  {
    id: "restorative",
    name: "Restorative Dentistry",
    description: "Tooth repairs, composite fillings, and structural restorations for fractured or decayed teeth.",
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    description: "Preserving natural teeth by safely cleaning, shaping, and sealing infected or inflamed pulp canals.",
    badge: "Tooth Preservation",
  },
  {
    id: "crowns",
    name: "Crowns & Bridges",
    description: "High-strength tooth caps and multi-unit bridges, including confirmed Silver and Gold crowns.",
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    description: "Aesthetic improvements, veneers, and smile enhancements tailored to your natural facial contours.",
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    description: "Tooth alignment assessment and corrective orthodontic planning for improved function and aesthetics.",
  },
  {
    id: "implants",
    name: "Dental Implants",
    description: "Modern tooth replacement concepts anchoring permanent artificial roots directly into the jawbone.",
  },
  {
    id: "removable",
    name: "Removable Appliances",
    description: "Customized partial and complete removable dental prostheses for functional mastication.",
  },
  {
    id: "preventive",
    name: "Examination & Prevention",
    description: "Comprehensive oral health check-ups, diagnostic examinations, and proactive preventive care.",
  },
  {
    id: "lab",
    name: "In-House Dental Laboratory",
    description: "Precision custom dental fabrication and fitting crafted directly within our Eastleigh facility.",
    badge: "On-Site Craftsmanship",
  },
];

export const treatmentsData: TreatmentItem[] = [
  {
    id: "emergency-pain-relief",
    slug: "emergency-pain-relief",
    category: "emergency",
    title: "Emergency Dental Care & Pain Relief",
    shortDescription: "Rapid diagnostic evaluation and urgent relief for severe dental pain, swelling, or sudden oral trauma.",
    fullDescription: "Severe tooth pain can be debilitating. Our emergency dental team focuses on quickly diagnosing the root cause of acute pain—whether from deep decay, pulp infection, dental abscess, or traumatic injury—and initiating immediate clinical relief.",
    isConfirmed: true,
    symptoms: [
      "Throbbing or constant sharp toothache",
      "Facial, gum, or jaw swelling",
      "Severe sensitivity to hot and cold temperatures",
      "Pain when chewing or applying slight pressure",
      "Broken, chipped, or knocked-out tooth",
    ],
    processSteps: [
      {
        step: 1,
        title: "Immediate Clinical Evaluation",
        description: "Targeted assessment and diagnostic examination to identify the precise source of pain.",
      },
      {
        step: 2,
        title: "Pain Management & Stabilization",
        description: "Administering localized relief and addressing urgent infection or physical damage.",
      },
      {
        step: 3,
        title: "Definitive Treatment Plan",
        description: "Discussing long-term restorative options such as a filling, root canal, or extraction depending on tooth vitality.",
      },
    ],
    benefits: [
      "Prompt alleviation of acute suffering",
      "Prevention of infection spread to facial spaces",
      "Maximized chance of saving traumatized teeth",
    ],
    considerations: [
      "Emergency treatment often focuses on stabilizing the tooth; follow-up visits may be required for complete restoration.",
    ],
    faq: [
      {
        question: "Does a toothache always mean extraction is needed?",
        answer: "No. In modern dentistry, saving your natural tooth is always the primary priority. Treatments such as root canal therapy or deep restorations can often preserve teeth that cause severe pain.",
      },
      {
        question: "How quickly should I be seen for dental swelling?",
        answer: "Dental swelling indicates active infection and should be examined by a dentist as soon as possible to prevent complications.",
      },
    ],
    relatedTreatments: ["root-canal-treatment", "restorative-fillings", "dental-extractions"],
    interactiveModelType: "decay",
    seoTitle: "Emergency Dental Care & Pain Relief in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Immediate emergency dental care, acute pain relief, and trauma management at NeoDental Clinic, 14th St, Eastleigh, Nairobi.",
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    category: "root-canal",
    title: "Root Canal Treatment (Endodontics)",
    shortDescription: "A safe, tooth-saving procedure to clean, disinfect, and seal infected or inflamed inner pulp canals.",
    fullDescription: "When bacteria breach deep enamel and dentin to reach the tooth's innermost pulp chamber, the nerves and blood vessels become inflamed or infected. Root canal treatment removes the diseased tissue, disinfects the complex canal system, and seals it completely—saving your natural tooth from extraction.",
    isConfirmed: true,
    symptoms: [
      "Spontaneous, lingering pain to hot or cold drinks",
      "Pain that wakes you up at night",
      "Darkening or discoloration of a single tooth",
      "Tender bump or pimple on the gum near the tooth root",
      "Pain when biting or tapping the tooth",
    ],
    processSteps: [
      {
        step: 1,
        title: "Access & Pulp Removal",
        description: "A micro-opening is created in the tooth crown under local anesthesia to access the pulp chamber.",
      },
      {
        step: 2,
        title: "Canal Cleansing & Shaping",
        description: "Specialized flexible endodontic instruments thoroughly clean and shape the internal root canals.",
      },
      {
        step: 3,
        title: "Bio-compatible Sealing",
        description: "The canals are hermetically sealed with biocompatible material (gutta-percha) to prevent bacterial reinfection.",
      },
      {
        step: 4,
        title: "Restoration & Crown Placement",
        description: "A permanent filling or custom crown is placed to restore full biting strength and natural appearance.",
      },
    ],
    benefits: [
      "Relieves persistent tooth infection and throbbing pain",
      "Preserves natural jawbone structure and adjacent tooth alignment",
      "Restores normal chewing efficiency and aesthetics",
    ],
    considerations: [
      "Root canal-treated teeth become more brittle over time and generally require a protective crown.",
    ],
    faq: [
      {
        question: "Is root canal treatment painful?",
        answer: "Modern root canal procedures are performed under effective local anesthesia, making the experience very similar to receiving a routine dental filling.",
      },
      {
        question: "How long does a root canal-treated tooth last?",
        answer: "With proper crown restoration and good oral hygiene, a root canal-treated tooth can last for decades or a lifetime.",
      },
    ],
    relatedTreatments: ["dental-crowns", "restorative-fillings", "emergency-pain-relief"],
    interactiveModelType: "root-canal",
    seoTitle: "Root Canal Treatment in Eastleigh, Nairobi | NeoDental Clinic",
    seoDescription: "Professional endodontic root canal therapy at NeoDental Clinic, Eastleigh. Preserve your natural smile with modern tooth-saving care.",
  },
  {
    id: "dental-crowns",
    slug: "dental-crowns",
    category: "crowns",
    title: "Dental Crowns (Gold, Silver & Restorative)",
    shortDescription: "Custom-fitted caps that cover and strengthen weakened, broken, or root canal-treated teeth.",
    fullDescription: "A dental crown is a custom-engineered cap that completely encases a damaged tooth above the gumline. NeoDental provides durable crown restorations, including confirmed options in Silver and Gold, as well as tooth-strengthening restorative caps crafted with support from our on-site dental laboratory.",
    isConfirmed: true,
    symptoms: [
      "Extensively broken, cracked, or worn down tooth",
      "Tooth with a very large existing filling and little natural structure remaining",
      "Protection required following a root canal treatment",
      "Aesthetic or functional restoration requirement",
    ],
    processSteps: [
      {
        step: 1,
        title: "Tooth Preparation",
        description: "The tooth is gently reshaped around its circumference to create exact space for the crown.",
      },
      {
        step: 2,
        title: "Impression & Custom Lab Fabrication",
        description: "Accurate dental impressions are taken and sent to our laboratory for precision custom crafting.",
      },
      {
        step: 3,
        title: "Try-in & Permanent Cementation",
        description: "The crown is tested for contact, occlusion, and comfort before being permanently bonded in place.",
      },
    ],
    benefits: [
      "Protects structurally compromised teeth from fracturing",
      "Offers superior longevity and chewing strength",
      "Custom choices including classic Gold and Silver crowns",
    ],
    considerations: [
      "Requires adequate remaining tooth structure or core buildup.",
    ],
    faq: [
      {
        question: "What crown materials are available at NeoDental?",
        answer: "NeoDental offers durable options including confirmed Silver and Gold crowns, alongside restorative caps. Consult our team for individualized recommendations.",
      },
      {
        question: "How do I care for a dental crown?",
        answer: "Brush and floss daily just like natural teeth, paying special attention to the gumline where the crown meets the tooth.",
      },
    ],
    relatedTreatments: ["root-canal-treatment", "restorative-fillings", "dental-laboratory-services"],
    interactiveModelType: "crown",
    seoTitle: "Dental Crowns (Gold & Silver) in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Custom dental crowns including Gold and Silver crowns at NeoDental Clinic, Eastleigh Nairobi. High durability and precise lab fit.",
  },
  {
    id: "restorative-fillings",
    slug: "restorative-fillings",
    category: "restorative",
    title: "Restorative Dentistry & Dental Fillings",
    shortDescription: "Treating cavities and minor fractures to restore tooth integrity, aesthetics, and chewing function.",
    fullDescription: "Restorative dentistry repairs teeth affected by decay, erosion, or physical chips. We gently remove deteriorated tooth structure and restore the tooth with biocompatible, durable restorative materials matched to natural tooth contours.",
    isConfirmed: true,
    symptoms: [
      "Visible dark spots or holes on tooth surface",
      "Food catching between specific teeth",
      "Brief sensitivity when consuming sugary foods or cold beverages",
      "Rough or jagged edge on a tooth",
    ],
    processSteps: [
      {
        step: 1,
        title: "Decay Removal",
        description: "Carefully cleaning the decayed area while preserving as much healthy tooth structure as possible.",
      },
      {
        step: 2,
        title: "Cavity Conditioning",
        description: "Treating the prepared cavity surface to ensure an optimal micro-mechanical bond.",
      },
      {
        step: 3,
        title: "Restoration & Polishing",
        description: "Layering the restorative material, curing, shaping the anatomical fissures, and smoothing for natural bite.",
      },
    ],
    benefits: [
      "Halts the progression of dental decay toward the pulp",
      "Restores normal chewing surface and contact points",
      "Minimally invasive and completed in a single comfortable visit",
    ],
    considerations: [
      "Very deep decay close to the nerve may require monitoring or additional protection.",
    ],
    faq: [
      {
        question: "How long does a dental filling procedure take?",
        answer: "Most dental fillings are completed comfortably within 30 to 45 minutes.",
      },
      {
        question: "Can I eat right after a filling?",
        answer: "You can eat once any local numbness wears off to avoid accidentally biting your tongue or inner cheek.",
      },
    ],
    relatedTreatments: ["dental-crowns", "emergency-pain-relief", "preventive-examination"],
    interactiveModelType: "decay",
    seoTitle: "Dental Fillings & Tooth Restoration in Eastleigh | NeoDental",
    seoDescription: "Gentle, durable tooth fillings and restorative dental solutions at NeoDental Clinic, Eastleigh, Nairobi.",
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    category: "implants",
    title: "Dental Implants (Missing Tooth Restoration)",
    shortDescription: "Permanent artificial root foundations designed to support single or multiple replacement teeth.",
    fullDescription: "A dental implant is a titanium post surgically placed into the jawbone beneath your gums. Once integrated with the bone, it provides a stable foundation for a custom crown, bridge, or prosthesis that looks, feels, and functions like a natural tooth.",
    isConfirmed: false, // CLINIC_CONFIRMATION_REQUIRED for specific surgery packages
    symptoms: [
      "One or more missing natural teeth",
      "Difficulty chewing due to tooth loss",
      "Shifted neighboring teeth into empty spaces",
      "Desire for a permanent alternative to removable dentures",
    ],
    processSteps: [
      {
        step: 1,
        title: "Diagnostic Planning & Bone Assessment",
        description: "Evaluating jawbone density, nerve pathways, and overall oral health suitability.",
      },
      {
        step: 2,
        title: "Implant Placement",
        description: "Precision positioning of the biocompatible post into the jawbone.",
      },
      {
        step: 3,
        title: "Osseointegration Period",
        description: "Natural bone bonding around the implant post to create a solid anchor.",
      },
      {
        step: 4,
        title: "Abutment & Custom Crown",
        description: "Connecting the custom-crafted tooth restoration for complete functionality.",
      },
    ],
    benefits: [
      "Prevents bone loss associated with missing teeth",
      "Does not require grinding down neighboring healthy teeth",
      "Restores superior biting strength and natural smile aesthetics",
    ],
    considerations: [
      "Suitability depends on individual bone density and general health factors (CLINIC_CONFIRMATION_REQUIRED).",
    ],
    faq: [
      {
        question: "Who is a candidate for dental implants?",
        answer: "Most adults with healthy gums and adequate bone density are potential candidates. A thorough clinical evaluation is necessary.",
      },
    ],
    relatedTreatments: ["dental-crowns", "removable-appliances", "dental-laboratory-services"],
    interactiveModelType: "implant",
    seoTitle: "Dental Implants Education & Consultation in Eastleigh | NeoDental",
    seoDescription: "Learn about dental implants, missing tooth solutions, and restorative care at NeoDental Clinic, Eastleigh Nairobi.",
  },
  {
    id: "cosmetic-dentistry-veneers",
    slug: "cosmetic-dentistry-veneers",
    category: "cosmetic",
    title: "Cosmetic Dentistry & Aesthetic Solutions",
    shortDescription: "Enhancing the color, symmetry, and overall appearance of your smile with personalized treatments.",
    fullDescription: "Cosmetic dentistry combines science and artistry to improve the visual harmony of your teeth. From addressing stubborn discolourations to micro-shaping and veneers, our focus is on natural, healthy-looking aesthetic enhancements.",
    isConfirmed: true,
    symptoms: [
      "Discolored, stained, or unevenly shaded teeth",
      "Small chips or gaps between front teeth",
      "Slightly misshapen or uneven tooth edges",
      "Desire to enhance smile confidence",
    ],
    processSteps: [
      {
        step: 1,
        title: "Aesthetic Smile Consultation",
        description: "Discussing your goals, analyzing facial proportions, and assessing tooth health.",
      },
      {
        step: 2,
        title: "Custom Design & Mockup",
        description: "Planning tooth contours and shades to complement your natural smile.",
      },
      {
        step: 3,
        title: "Precision Application & Polish",
        description: "Applying restorative or veneer solutions for a harmonious, radiant result.",
      },
    ],
    benefits: [
      "Natural-looking enhancement tailored to facial symmetry",
      "Boosted confidence in social and professional interactions",
      "Conservative tooth preservation approach",
    ],
    considerations: [
      "Underlying oral health issues (such as active decay or gum disease) must be treated before aesthetic work.",
    ],
    faq: [
      {
        question: "What is the difference between crowns and veneers?",
        answer: "Veneers are ultra-thin shells covering only the front surface of the tooth for aesthetic reasons, while crowns encase the entire tooth for structural strength.",
      },
    ],
    relatedTreatments: ["dental-crowns", "orthodontic-assessment", "preventive-examination"],
    interactiveModelType: "anatomy",
    seoTitle: "Cosmetic Dentistry & Smile Enhancement in Eastleigh | NeoDental",
    seoDescription: "Modern cosmetic dental solutions, veneers, and aesthetic smile enhancements at NeoDental Clinic, Nairobi.",
  },
  {
    id: "orthodontic-assessment",
    slug: "orthodontic-assessment",
    category: "orthodontics",
    title: "Orthodontic Assessment & Teeth Alignment",
    shortDescription: "Educational assessment and corrective planning for crowded, spaced, or misaligned teeth.",
    fullDescription: "Orthodontics focuses on correcting irregularities in tooth position and jaw alignment. Properly aligned teeth are not only more aesthetic, but also significantly easier to keep clean and less prone to uneven wear or joint strain.",
    isConfirmed: true,
    symptoms: [
      "Crowded or overlapping teeth",
      "Gaps or spaces between teeth",
      "Overbite, underbite, or crossbite concerns",
      "Difficulty brushing effectively between crooked teeth",
    ],
    processSteps: [
      {
        step: 1,
        title: "Orthodontic Examination",
        description: "Assessing dental occlusion, jaw alignment, and facial balance.",
      },
      {
        step: 2,
        title: "Treatment Planning",
        description: "Formulating a tailored roadmap outlining estimated timeline and biomechanical stages.",
      },
      {
        step: 3,
        title: "Progressive Alignment",
        description: "Periodic adjustments guiding teeth smoothly into their optimal physiological positions.",
      },
    ],
    benefits: [
      "Significantly improves long-term oral hygiene accessibility",
      "Distributes chewing forces evenly across dental arches",
      "Enhances facial symmetry and smile harmony",
    ],
    considerations: [
      "Treatment duration varies based on individual complexity and patient compliance.",
    ],
    faq: [
      {
        question: "Is orthodontics only for children and teenagers?",
        answer: "Not at all. Adults of all ages successfully undergo orthodontic alignment to improve oral health and aesthetics.",
      },
    ],
    relatedTreatments: ["preventive-examination", "cosmetic-dentistry-veneers"],
    interactiveModelType: "anatomy",
    seoTitle: "Orthodontics & Teeth Alignment in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Comprehensive orthodontic consultations and tooth alignment planning at NeoDental Clinic, Eastleigh.",
  },
  {
    id: "removable-appliances",
    slug: "removable-appliances",
    category: "removable",
    title: "Removable Dental Appliances & Dentures",
    shortDescription: "Custom-made removable appliances to restore function and appearance for multiple missing teeth.",
    fullDescription: "Removable dental appliances provide a practical, non-surgical solution to replace missing teeth. Fabricated with care in our dental laboratory, these appliances restore masticatory function, support lip and cheek contours, and improve speech clarity.",
    isConfirmed: true,
    symptoms: [
      "Multiple missing teeth across upper or lower arch",
      "Difficulty chewing firm foods",
      "Changes in facial profile or speech due to missing teeth",
    ],
    processSteps: [
      {
        step: 1,
        title: "Impressions & Jaw Measurement",
        description: "Recording detailed impressions and measuring jaw relationships for comfortable bite alignment.",
      },
      {
        step: 2,
        title: "In-House Lab Crafting",
        description: "Our technicians set up the teeth in wax to verify shape, shade, and alignment.",
      },
      {
        step: 3,
        title: "Fitting & Fine Adjustments",
        description: "Delivering the finalized appliance with personalized guidance on adaptation and daily care.",
      },
    ],
    benefits: [
      "Non-surgical, economical approach to tooth replacement",
      "Customized on-site for optimal comfort and fit",
      "Restores facial fullness and chewing capability",
    ],
    considerations: [
      "Requires daily cleaning and periodic professional relining or checks.",
    ],
    faq: [
      {
        question: "How do I take care of a removable dental appliance?",
        answer: "Rinse after meals, gently brush with a soft brush and non-abrasive cleanser, and store in clean water or soaking solution overnight.",
      },
    ],
    relatedTreatments: ["dental-laboratory-services", "dental-crowns"],
    interactiveModelType: "lab",
    seoTitle: "Removable Dental Appliances & Dentures in Eastleigh | NeoDental",
    seoDescription: "Custom removable dental appliances and dentures crafted with in-house laboratory support at NeoDental Clinic.",
  },
  {
    id: "preventive-examination",
    slug: "preventive-examination",
    category: "preventive",
    title: "Comprehensive Examination & Preventive Care",
    shortDescription: "Proactive dental check-ups, diagnostic screening, and hygiene maintenance for lifelong oral health.",
    fullDescription: "Preventive care is the cornerstone of lifelong dental health. Routine clinical examinations allow early detection of asymptomatic decay, gum inflammation, and enamel wear long before they develop into painful or costly conditions.",
    isConfirmed: true,
    symptoms: [
      "Routine 6-month check-up due",
      "Mild gum bleeding during brushing",
      "Rough calculus buildup behind lower teeth",
      "Bad breath (halitosis) concerns",
    ],
    processSteps: [
      {
        step: 1,
        title: "Visual & Periodontal Screening",
        description: "Systematic check of all teeth, gums, tongue, and oral soft tissues.",
      },
      {
        step: 2,
        title: "Diagnostic Assessment",
        description: "Checking enamel integrity, restorations, bite alignment, and plaque retention points.",
      },
      {
        step: 3,
        title: "Preventive Guidance",
        description: "Personalized recommendations for brushing technique, diet, and any needed protective therapies.",
      },
    ],
    benefits: [
      "Catches minor issues before they cause acute pain",
      "Protects gums from irreversible periodontal bone loss",
      "Maintains fresh breath and clean teeth",
    ],
    considerations: [
      "Regular visits every 6 months are strongly recommended for optimal preventive health.",
    ],
    faq: [
      {
        question: "Why should I visit the dentist if I have no pain?",
        answer: "Many dental conditions, including early cavities and gum disease, develop silently without pain until advanced stages. Regular checks catch them early.",
      },
    ],
    relatedTreatments: ["restorative-fillings", "emergency-pain-relief"],
    interactiveModelType: "anatomy",
    seoTitle: "Dental Examination & Check-up in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Comprehensive dental check-ups and preventive oral health assessments at NeoDental Clinic, Eastleigh.",
  },
  {
    id: "dental-laboratory-services",
    slug: "dental-laboratory-services",
    category: "lab",
    title: "In-House Dental Laboratory & Custom Restoration",
    shortDescription: "On-site dental craftsmanship ensuring direct collaboration between dentist, technician, and patient.",
    fullDescription: "Unlike many clinics that outsource prosthetics to distant third-party labs, NeoDental features an integrated in-house dental laboratory. Our technicians design, fabricate, and refine crowns, bridges, and dental appliances right here on 14th Street, Eastleigh—enabling tighter quality control and prompt custom adjustments.",
    isConfirmed: true,
    symptoms: [
      "Need for custom-fitted crown, bridge, or appliance",
      "Desire for precise shade and contour matching",
      "Adjustments or modifications to existing prosthetics",
    ],
    processSteps: [
      {
        step: 1,
        title: "Clinical Assessment & Scanning/Impression",
        description: "Capturing exact micro-dimensions of the patient's dental arch.",
      },
      {
        step: 2,
        title: "Anatomical Custom Design",
        description: "Sculpting the precise occlusal anatomy, contact points, and margins.",
      },
      {
        step: 3,
        title: "Precision Fabrication",
        description: "Crafting the dental restoration in our laboratory using tested dental materials.",
      },
      {
        step: 4,
        title: "Chairside Refinement & Final Fitting",
        description: "Direct technician-dentist collaboration for micro-refinements and perfect fit.",
      },
    ],
    benefits: [
      "Direct communication between dental technicians and treating clinicians",
      "Prompt adjustments without shipping delays",
      "High attention to personalized dental aesthetics and bite comfort",
    ],
    considerations: [
      "Exact specialized manufacturing machinery subject to CLINIC_CONFIRMATION_REQUIRED before publishing technical claims.",
    ],
    faq: [
      {
        question: "What is the advantage of having an in-house dental lab?",
        answer: "An in-house lab allows direct collaboration between your dentist and the dental technician, ensuring accurate custom fits, faster turnaround, and seamless shade adjustments.",
      },
    ],
    relatedTreatments: ["dental-crowns", "removable-appliances", "root-canal-treatment"],
    interactiveModelType: "lab",
    seoTitle: "In-House Dental Laboratory in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Explore NeoDental's on-site dental laboratory in Eastleigh, Nairobi. Custom crowns, bridges, and prosthetics crafted with precision.",
  },
];
