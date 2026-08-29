import { CategoryInfo, TreatmentItem } from "@/types";

export const treatmentCategories: CategoryInfo[] = [
  {
    id: "emergency",
    name: "Pain & Emergency Care",
    description: "Fast relief for severe toothaches, facial swelling, broken teeth, or sudden dental pain.",
    badge: "Same-Day Relief",
  },
  {
    id: "restorative",
    name: "Tooth Fillings & Repairs",
    description: "Gentle cavity repair and seamless tooth-colored fillings to stop decay and restore chewing.",
  },
  {
    id: "root-canal",
    name: "Root Canal Therapy",
    description: "Saving your natural tooth by removing deep nerve infections and permanently stopping pain.",
    badge: "Tooth Saver",
  },
  {
    id: "crowns",
    name: "Gold & Silver Crowns",
    description: "Strong, custom-fitted caps crafted in our Eastleigh lab to protect broken or weakened teeth.",
  },
  {
    id: "cosmetic",
    name: "Cosmetic Smile Makeovers",
    description: "Veneers, teeth whitening, and cosmetic tooth shaping for a bright, confident, natural smile.",
  },
  {
    id: "orthodontics",
    name: "Braces & Teeth Alignment",
    description: "Straightening crooked, crowded, or gapped teeth with modern metal and ceramic braces.",
  },
  {
    id: "implants",
    name: "Permanent Dental Implants",
    description: "Permanent artificial root foundations that replace missing teeth for a natural bite.",
  },
  {
    id: "removable",
    name: "Custom Dentures",
    description: "Comfortable, natural-feeling partial and complete dentures for easy, confident chewing.",
  },
  {
    id: "preventive",
    name: "Check-Ups & Deep Cleaning",
    description: "Gentle ultrasonic cleaning and routine examinations to keep gums healthy and breath fresh.",
  },
  {
    id: "lab",
    name: "In-House Dental Laboratory",
    description: "Custom crown and denture craftsmanship crafted directly on 14th Street in Eastleigh.",
    badge: "On-Site Lab",
  },
];

export const treatmentsData: TreatmentItem[] = [
  {
    id: "emergency-pain-relief",
    slug: "emergency-pain-relief",
    category: "emergency",
    title: "Emergency Pain Relief & Urgent Dental Care",
    shortDescription: "Fast, gentle relief for severe toothaches, facial swelling, or sudden broken teeth.",
    fullDescription: "Severe tooth pain can be unbearable and scary when you don't know the cause. Our emergency team in Eastleigh focuses on quickly finding what hurts, stopping your pain immediately with gentle numbing, and saving your natural tooth from further damage.",
    isConfirmed: true,
    symptoms: [
      "Severe throbbing toothache that keeps you awake at night",
      "Swelling in your gums, cheek, or jawline",
      "Sharp pain when chewing or biting down on food",
      "Extreme sensitivity that lingers after hot tea or cold water",
      "A tooth that is cracked, chipped, knocked loose, or broken",
    ],
    processSteps: [
      {
        step: 1,
        title: "Gentle Examination & Finding the Cause",
        description: "We gently examine the painful tooth to pinpoint whether the pain comes from deep decay, an infected nerve, or a cracked edge.",
      },
      {
        step: 2,
        title: "Immediate Numbing & Pain Relief",
        description: "We administer local numbing with a gentle touch so the throbbing stops and you can immediately relax in the chair.",
      },
      {
        step: 3,
        title: "Clear Plan to Protect Your Tooth",
        description: "We explain your treatment options in simple terms—whether a quick filling, root canal, or protective cap—so you keep your natural smile.",
      },
    ],
    benefits: [
      "Immediate relief from severe pain and discomfort",
      "Stops dental infections before they spread to your face or jaw",
      "Gives you the highest chance of saving your real, natural tooth",
    ],
    considerations: [
      "Emergency visits focus on stopping your pain right away; a follow-up visit may be scheduled to complete permanent restoration.",
    ],
    faq: [
      {
        question: "Does severe tooth pain mean I have to pull my tooth?",
        answer: "No! Pulling a tooth is always our last resort. In most cases, we can stop the infection, clean the tooth, and place a protective filling or crown so you keep your real tooth for life.",
      },
      {
        question: "How fast can I be seen if my face or gum is swollen?",
        answer: "Swelling means an active infection needs prompt care. We recommend contacting us immediately on WhatsApp or walking into our Eastleigh clinic on 14th Street for same-day evaluation.",
      },
    ],
    relatedTreatments: ["root-canal-treatment", "restorative-fillings", "dental-crowns"],
    interactiveModelType: "decay",
    seoTitle: "Emergency Dental Care & Pain Relief in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Immediate emergency dental care, acute pain relief, and trauma management at NeoDental Clinic, 14th St, Eastleigh, Nairobi.",
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    category: "root-canal",
    title: "Root Canal Therapy (Saving Your Real Tooth)",
    shortDescription: "A gentle, tooth-saving procedure to clean deep nerve infections and permanently stop throbbing pain.",
    fullDescription: "When tooth decay goes deep beneath your enamel, bacteria reach the soft nerve (pulp) inside the root. This causes the nerve to swell and throb. Instead of pulling your tooth out, a gentle root canal cleans away the bacteria, protects the root, and seals it tight so your natural tooth stays strong and healthy.",
    isConfirmed: true,
    symptoms: [
      "Deep, throbbing toothache that gets worse when lying down",
      "Sharp pain that lingers for minutes after drinking hot tea or cold water",
      "Pain or tenderness when you tap the tooth or chew food",
      "A small, pimple-like bump on your gums near the sore tooth",
      "A tooth that has turned dark or grey after an injury",
    ],
    processSteps: [
      {
        step: 1,
        title: "Comfortable Numbing & Opening",
        description: "We gently numb the area so you feel zero sharp sensations, then make a tiny opening to reach the infected nerve.",
      },
      {
        step: 2,
        title: "Deep Micro-Cleaning",
        description: "Specialized gentle instruments clean and disinfect the tiny root canals, washing away all bacteria.",
      },
      {
        step: 3,
        title: "Germ-Proof Bio-Seal",
        description: "We fill and seal the clean canals with a biocompatible rubber material to ensure bacteria can never enter again.",
      },
      {
        step: 4,
        title: "Protective Crown or Filling",
        description: "We place a strong filling or custom crown on top so you can bite, chew, and smile with complete confidence.",
      },
    ],
    benefits: [
      "Permanently eliminates throbbing nerve pain and deep infection",
      "Preserves your real, natural tooth and maintains your jawbone strength",
      "Restores full chewing power without leaving an empty gap in your mouth",
    ],
    considerations: [
      "A tooth that has had a root canal is no longer nourished by internal blood flow, so we recommend placing a protective crown to prevent it from chipping.",
    ],
    faq: [
      {
        question: "Is a root canal painful?",
        answer: "Not at all. With modern local numbing, having a root canal feels very similar to getting a routine filling. The procedure actually removes the infection that was causing your pain in the first place.",
      },
      {
        question: "How long does a tooth last after a root canal?",
        answer: "With a well-fitted protective crown and regular daily brushing, a root canal-treated tooth can last for decades or even the rest of your life.",
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
    title: "Custom Dental Crowns (Gold, Silver & Ceramic)",
    shortDescription: "Strong protective caps custom-crafted in our Eastleigh lab to restore broken or weakened teeth.",
    fullDescription: "A dental crown is a custom-made protective cap that covers a broken, cracked, or heavily filled tooth down to the gumline. At NeoDental, our in-house dental laboratory on 14th Street crafts durable Gold crowns, Silver crowns, and natural tooth-colored porcelain caps—ensuring an exact fit to your bite with no long waiting periods.",
    isConfirmed: true,
    symptoms: [
      "A broken, cracked, or heavily worn-down tooth",
      "A tooth with a large filling that is starting to crack or break",
      "A tooth that recently completed root canal treatment",
      "Wanting a durable, classic Gold or Silver crown for style and long-lasting strength",
    ],
    processSteps: [
      {
        step: 1,
        title: "Gentle Tooth Preparation",
        description: "We gently shape the outer surface of the tooth so the custom cap fits smoothly over it without feeling bulky.",
      },
      {
        step: 2,
        title: "Exact Measurement & In-House Lab Crafting",
        description: "We take precise measurements and craft your custom Gold, Silver, or ceramic crown directly in our Eastleigh lab.",
      },
      {
        step: 3,
        title: "Bite Check & Permanent Bonding",
        description: "We check your bite to ensure chewing feels completely natural, then permanently bond the crown in place.",
      },
    ],
    benefits: [
      "Protects weak teeth from fracturing when chewing tough foods",
      "Provides unmatched durability—especially with proven Gold and Silver alloys",
      "Made on-site in Eastleigh for faster turnaround and easy chairside adjustments",
    ],
    considerations: [
      "Requires a stable tooth base or core build-up beneath the crown.",
    ],
    faq: [
      {
        question: "Why do many patients choose Gold or Silver crowns?",
        answer: "Gold and Silver crowns are renowned for their exceptional strength and longevity. They withstand heavy chewing forces without chipping or wearing down opposing teeth, making them ideal for back molars.",
      },
      {
        question: "How do I care for my dental crown?",
        answer: "Treat it just like your natural teeth! Brush twice daily, floss around the edges at the gumline, and visit us for routine cleanings.",
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
    title: "Tooth-Colored Composite Fillings",
    shortDescription: "Gentle removal of cavities restored with seamless, natural-looking composite material.",
    fullDescription: "When food and bacteria linger on teeth, they create acids that eat away small holes called cavities. If caught early, cavities are completely painless to fix. We gently clean away the soft decay and fill the space with a durable resin that perfectly matches the natural color of your teeth.",
    isConfirmed: true,
    symptoms: [
      "Dark spots, brown lines, or visible holes in your teeth",
      "Food constantly getting caught between two teeth when eating",
      "Brief sensitivity when drinking cold soda or eating sweets",
      "A rough or sharp edge on a tooth that rubs against your tongue",
    ],
    processSteps: [
      {
        step: 1,
        title: "Gentle Decay Removal",
        description: "We gently clear away the softened decay while preserving as much healthy, strong tooth as possible.",
      },
      {
        step: 2,
        title: "Tooth Conditioning & Bonding",
        description: "We prepare the tooth surface with a gentle bonding agent so the filling locks securely in place.",
      },
      {
        step: 3,
        title: "Layering & Natural Polishing",
        description: "We shape the tooth-colored filling to match your natural tooth grooves, harden it with a special blue light, and polish it smooth.",
      },
    ],
    benefits: [
      "Stops cavities from reaching the nerve and causing severe toothaches",
      "Blends invisibly with your natural enamel—no ugly dark metal lines",
      "Completed in a single, relaxed 30-minute visit",
    ],
    considerations: [
      "If decay is extremely deep and close to the nerve, we place a soothing protective base to prevent sensitivity.",
    ],
    faq: [
      {
        question: "Will getting a filling hurt?",
        answer: "No. We apply effective local numbing before starting, so you will only feel light vibration and water spray. Most patients are surprised at how quick and comfortable it is.",
      },
      {
        question: "Can I eat right after getting a filling?",
        answer: "Yes, our composite fillings harden instantly under the blue curing light. We simply recommend waiting until your mouth numbing wears off so you don't accidentally bite your cheek.",
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
    title: "Permanent Dental Implants (Missing Tooth Replacement)",
    shortDescription: "Permanent artificial root foundations that replace missing teeth for a natural bite.",
    fullDescription: "A dental implant is a small, medical-grade titanium screw placed into your jawbone to replace the root of a missing tooth. Once your jawbone naturally heals around it, we attach a custom crown on top. It looks, feels, and chews exactly like a real natural tooth.",
    isConfirmed: false,
    symptoms: [
      "One or more missing teeth creating gaps in your smile",
      "Difficulty chewing food because teeth are missing on one side",
      "Neighboring teeth tilting or drifting into empty spaces",
      "Wanting a permanent tooth replacement that never needs to be removed at night",
    ],
    processSteps: [
      {
        step: 1,
        title: "Jaw Health & Bone Check",
        description: "We assess your gums and jawbone to ensure they provide a solid, healthy foundation for the implant.",
      },
      {
        step: 2,
        title: "Gentle Post Placement",
        description: "The small titanium post is positioned into the jawbone under comfortable local anesthesia.",
      },
      {
        step: 3,
        title: "Natural Bone Integration",
        description: "Over a few months, your bone naturally bonds around the post, creating an unbreakable anchor.",
      },
      {
        step: 4,
        title: "Custom Crown Attachment",
        description: "We attach a custom-crafted tooth crown on top that matches your surrounding smile perfectly.",
      },
    ],
    benefits: [
      "Permanently replaces missing teeth without grinding down neighboring healthy teeth",
      "Prevents your jawbone from shrinking and keeps your facial shape full",
      "Restores 100% of your natural biting and chewing power",
    ],
    considerations: [
      "Requires healthy gums and sufficient jawbone density; our clinicians evaluate your suitability during consultation.",
    ],
    faq: [
      {
        question: "How long do dental implants last?",
        answer: "With proper daily brushing and regular dental cleanings, dental implants are designed to last for the rest of your life.",
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
    title: "Cosmetic Smile Makeovers & Veneers",
    shortDescription: "Custom porcelain veneers and tooth shaping designed to give you a bright, confident, natural smile.",
    fullDescription: "Your smile is one of the first things people notice. If you feel self-conscious about gaps, deep discoloration, or chipped front teeth, cosmetic dentistry can transform your look. We design custom porcelain veneers and tooth reshaping tailored to your natural facial contours.",
    isConfirmed: true,
    symptoms: [
      "Deeply stained or yellowed teeth that don't respond to standard toothpaste",
      "Small gaps or spaces between your front teeth",
      "Chipped, worn-down, or unevenly sized teeth",
      "Hiding your smile or covering your mouth in photos",
    ],
    processSteps: [
      {
        step: 1,
        title: "Smile Design Consultation",
        description: "We listen to what you want to improve, analyze your smile line, and plan the ideal tooth shapes and shade.",
      },
      {
        step: 2,
        title: "Gentle Tooth Preparation",
        description: "We smooth a fraction of a millimeter from the front enamel so the veneers fit seamlessly.",
      },
      {
        step: 3,
        title: "Custom Lab Crafting & Placement",
        description: "Our lab crafts ultra-thin porcelain shells that we bond permanently over your teeth for a radiant smile.",
      },
    ],
    benefits: [
      "Creates an even, bright, and radiant smile that looks completely natural",
      "Porcelain resists future coffee, tea, and food stains",
      "Greatly boosts your confidence when speaking and laughing",
    ],
    considerations: [
      "Any active cavities or gum inflammation must be treated first to ensure a healthy foundation.",
    ],
    faq: [
      {
        question: "What is the difference between a crown and a veneer?",
        answer: "A veneer covers only the visible front surface of a tooth for cosmetic enhancement, whereas a crown encases the entire tooth to provide structural strength.",
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
    title: "Braces & Teeth Straightening",
    shortDescription: "Corrective roadmaps for crowded teeth, gaps, and bite alignment using modern metal or clear braces.",
    fullDescription: "Crooked, crowded, or overlapping teeth are difficult to keep clean and can lead to gum disease and uneven enamel wear. Orthodontics gently guides your teeth into their proper positions over time, giving you a straighter smile that is easier to brush and healthier for life.",
    isConfirmed: true,
    symptoms: [
      "Teeth that overlap, twist, or push against each other",
      "Noticeable gaps or spaces between teeth",
      "Upper and lower teeth not meeting properly when chewing (overbite or crossbite)",
      "Food constantly getting trapped in tight, crooked areas",
    ],
    processSteps: [
      {
        step: 1,
        title: "Bite & Alignment Check",
        description: "We examine your jaw alignment, tooth spacing, and facial symmetry.",
      },
      {
        step: 2,
        title: "Custom Alignment Plan",
        description: "We map out your personalized roadmap and discuss comfortable metal or discreet ceramic brace options.",
      },
      {
        step: 3,
        title: "Gentle Progressive Adjustments",
        description: "Periodic check-ups gently guide your teeth step-by-step into their ideal, healthy positions.",
      },
    ],
    benefits: [
      "Makes teeth significantly easier to brush and floss, preventing future cavities",
      "Distributes chewing force evenly across all teeth to protect your jaw joints",
      "Gives you a beautifully aligned, confident smile",
    ],
    considerations: [
      "Treatment time varies depending on spacing complexity and keeping up with regular adjustment appointments.",
    ],
    faq: [
      {
        question: "Can adults get braces too?",
        answer: "Yes! Teeth can be successfully straightened at any age. Many of our adult patients choose braces to improve both their chewing comfort and smile aesthetics.",
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
    title: "Custom Partial & Full Dentures",
    shortDescription: "Comfortable, natural-feeling tooth replacements made in our Eastleigh lab so you can chew with confidence.",
    fullDescription: "If you are missing multiple teeth, eating your favorite foods and speaking clearly can become difficult. Our on-site dental laboratory crafts lightweight, comfortable partial and full dentures shaped to fit your gums securely—restoring your chewing power and supporting your facial contours.",
    isConfirmed: true,
    symptoms: [
      "Several missing teeth across your upper or lower jaw",
      "Difficulty chewing meat, bread, or firm foods",
      "Sunken facial appearance or lips losing support due to missing teeth",
      "An old denture that has become loose, uncomfortable, or wobbly",
    ],
    processSteps: [
      {
        step: 1,
        title: "Accurate Gum Impressions",
        description: "We take precise measurements of your gums and jaw alignment to ensure a snug, comfortable fit.",
      },
      {
        step: 2,
        title: "In-House Lab Setup & Wax Try-In",
        description: "Our lab technicians set up the teeth in wax so you can preview the shape, shade, and bite before completion.",
      },
      {
        step: 3,
        title: "Final Fitting & On-Site Adjustments",
        description: "We deliver your custom dentures and make any micro-adjustments immediately on 14th Street so there are no sore spots.",
      },
    ],
    benefits: [
      "An affordable, non-surgical solution to replace multiple missing teeth",
      "Crafted directly in our Eastleigh lab for faster delivery and same-day adjustments",
      "Restores full facial shape and makes chewing food enjoyable again",
    ],
    considerations: [
      "Requires daily cleaning and soaking overnight in fresh water to keep gums healthy.",
    ],
    faq: [
      {
        question: "How do I take care of my new dentures?",
        answer: "Rinse them after meals, gently brush them with a soft toothbrush, and place them in clean water or soaking solution overnight to allow your gums to rest.",
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
    title: "Dental Check-Up & Ultrasonic Cleaning",
    shortDescription: "Gentle ultrasonic tartar removal and comprehensive oral screening to keep your gums healthy and breath fresh.",
    fullDescription: "Preventive care is the easiest way to avoid painful toothaches and expensive treatments. Many dental problems—like early cavities and gum inflammation—start silently with zero pain. Our gentle ultrasonic cleaning washes away hardened tartar that toothbrushes can't remove, keeping your teeth clean and your gums firm.",
    isConfirmed: true,
    symptoms: [
      "Gums bleeding slightly when brushing or flossing",
      "Yellow or brownish tartar buildup along the back of your lower teeth",
      "Bad breath that doesn't go away after brushing",
      "It has been more than 6 months since your last dental check-up",
    ],
    processSteps: [
      {
        step: 1,
        title: "Gentle Gum & Tooth Examination",
        description: "We check every tooth, your gums, and your bite to spot any early issues before they turn into pain.",
      },
      {
        step: 2,
        title: "Ultrasonic Water Cleaning",
        description: "We use a gentle ultrasonic water scaler that vibrates away stubborn tartar and plaque without scraping your enamel.",
      },
      {
        step: 3,
        title: "Polishing & Fresh Breath Guidance",
        description: "We polish your teeth to a smooth, shiny finish that makes it harder for new plaque and food stains to stick.",
      },
    ],
    benefits: [
      "Catches tiny cavities early when they can be fixed quickly and painlessly",
      "Prevents gum disease from loosening teeth and causing bone loss",
      "Leaves your mouth feeling ultra-clean with fresh, long-lasting breath",
    ],
    considerations: [
      "Visiting every 6 months ensures your teeth and gums stay healthy all year round.",
    ],
    faq: [
      {
        question: "Why should I see a dentist if my teeth don't hurt?",
        answer: "By the time a tooth starts hurting, decay has already reached the deep inner nerve. Routine check-ups catch small issues while they are painless, saving you time, discomfort, and money.",
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
    title: "In-House Dental Laboratory Craftsmanship",
    shortDescription: "On-site crown and denture fabrication on 14th Street for perfect bite alignment and same-day adjustments.",
    fullDescription: "Most dental clinics send impressions to third-party labs across the city or abroad, meaning patients must wait weeks and deal with loose-fitting crowns. NeoDental operates an integrated in-house dental laboratory right here on 14th Street in Eastleigh. Our technicians work directly alongside our dentists to ensure your Gold crowns, Silver crowns, and dentures fit your natural bite on day one.",
    isConfirmed: true,
    symptoms: [
      "Need a custom Gold crown, Silver crown, or porcelain bridge",
      "Need custom partial or full dentures made with an exact fit",
      "Need fast chairside adjustments on an existing crown or denture that feels tight",
    ],
    processSteps: [
      {
        step: 1,
        title: "Precise Scanning & Impressions",
        description: "We capture exact measurements of your teeth so the restoration matches your bite millimeter-by-millimeter.",
      },
      {
        step: 2,
        title: "Direct Technician Consultation",
        description: "Our lab technicians see your smile in person to match the exact shade and shape of your surrounding teeth.",
      },
      {
        step: 3,
        title: "On-Site Precision Fabrication",
        description: "We craft your crowns or dentures right here in Eastleigh using durable, certified dental materials.",
      },
      {
        step: 4,
        title: "Same-Day Chairside Fitting",
        description: "If any adjustment is needed, our technician refines it immediately while you relax in the clinic.",
      },
    ],
    benefits: [
      "No waiting weeks—restorations crafted on-site in Eastleigh",
      "Direct technician matching for a 100% natural look and comfortable bite",
      "Instant adjustments if a crown or denture needs slight smoothing",
    ],
    considerations: [
      "Custom metal and ceramic selections are discussed during your initial clinic visit.",
    ],
    faq: [
      {
        question: "What is the advantage of an in-house dental lab?",
        answer: "Having our lab on-site means faster delivery, better quality control, and direct collaboration between your dentist and the technician who crafts your restoration.",
      },
    ],
    relatedTreatments: ["dental-crowns", "removable-appliances", "root-canal-treatment"],
    interactiveModelType: "lab",
    seoTitle: "In-House Dental Laboratory in Eastleigh, Nairobi | NeoDental",
    seoDescription: "Explore NeoDental's on-site dental laboratory in Eastleigh, Nairobi. Custom crowns, bridges, and prosthetics crafted with precision.",
  },
];
