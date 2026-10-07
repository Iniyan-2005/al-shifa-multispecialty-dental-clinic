export const clinicData = {
  name: "AL-SHIFA MULTISPECIALTY DENTAL CLINIC",
  shortName: "Al-Shifa Dental Clinic",
  tamilName: "அல்-ஷிஃபா பல் சிகிச்சையகம்",
  tagline: "Gentle Care, Painless Healing & Confident Smiles",
  description: "5.0★ Rated Multi-Specialty Dental Clinic in Pudupet, Egmore, Chennai. Advanced Laser Dentistry, Single-Sitting RCT, Implants & Cosmetic Smile Makeovers.",
  googleProfile: "https://share.google/7htpdyDA4x4MxcLMG",

  doctor: {
    name: "Dr. Afreen Jannath.A",
    title: "Chief Dental Surgeon & Specialist",
    degree: "B.D.S. (Govt Dental College, VNR)",
    specialty: "Endodontist & Laser Specialist",
    regNo: "Dental DNT No: 33541",
    experience: "Govt Dental College Alumna · Laser & Root Canal Expert",
    bio: "Dr. Afreen Jannath.A is an accomplished Endodontist and Laser Specialist graduated from the esteemed Government Dental College, VNR. With specialized training in precision laser dentistry and microscopic rotary root canal therapy, she is committed to providing painless, highly sterile, and conservative dental care for patients of all ages.",
  },

  contact: {
    phone1: "9498658545",
    displayPhone1: "+91 94986 58545",
    whatsappNumber: "919498658545",
    address: "23/11, Labbai St, Pudupet, Komaleeswaranpet, Egmore, Chennai, Tamil Nadu 600002",
    shortAddress: "23/11, Labbai St, Pudupet, Egmore, Chennai - 600002",
    landmark: "Labbai Street, Pudupet, near Egmore",
    googleMapsUrl: "https://share.google/7htpdyDA4x4MxcLMG",
    googleMapsEmbed: "https://www.google.com/maps?q=Al-Shifa+Multispecialty+Dental+clinic,+23/11,+Labbai+St,+Pudupet,+Komaleeswaranpet,+Egmore,+Chennai,+Tamil+Nadu+600002&output=embed",
  },

  timings: {
    morning: "10:00 AM – 01:30 PM",
    evening: "05:00 PM – 09:00 PM",
    display: "Mon–Sat: 10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM",
    closes: "Open Daily · Closes 9:00 PM",
    schedule: [
      { days: "Monday – Saturday", morning: "10:00 AM – 01:30 PM", evening: "05:00 PM – 09:00 PM", status: "Open" },
      { days: "Sunday", morning: "10:00 AM – 01:00 PM", evening: "By Prior Appointment", status: "Appointment Only" }
    ],
  },

  ratings: {
    score: 5.0,
    totalReviews: 18,
    stars: 5,
    platform: "Google Verified Reviews",
  },

  services: [
    {
      id: "rct",
      title: "Root Canal Therapy (RCT)",
      titleTamil: "வேர் கால் சிகிச்சை",
      badge: "Doctor's Specialization",
      badgeColor: "bg-royal-800 text-white",
      duration: "Single or Multi-Visit",
      highlight: "Save your natural tooth painlessly",
      description: "Under the expert care of Endodontist Dr. Afreen Jannath, we offer painless single-visit root canal treatments utilizing advanced rotary systems and digital radiography to eliminate tooth pain instantly.",
      icon: "zap",
      benefits: [
        "Specialist Endodontic precision",
        "Virtually painless modern anesthesia",
        "Saves severely decayed or infected teeth",
        "Capped with high-grade Zirconia/Ceramic crowns"
      ]
    },
    {
      id: "laser",
      title: "Laser Dentistry",
      titleTamil: "லேசர் பல் மருத்துவம்",
      badge: "Specialist Procedure",
      badgeColor: "bg-gold-500 text-slate-950 font-semibold",
      duration: "20–40 Minutes",
      highlight: "Bloodless, scalpel-free & rapid healing",
      description: "State-of-the-art diode laser technology for painless gum sculpting, frenectomy, ulcer relief, and sterilization of periodontal pockets with minimal to no bleeding.",
      icon: "laser",
      benefits: [
        "Minimally invasive, scalpel-free treatments",
        "Faster tissue recovery and minimal swelling",
        "Painless gum contouring & depigmentation",
        "Superior disinfection of canals and pockets"
      ]
    },
    {
      id: "cosmetic",
      title: "Smile Makeover & Diastema Closure",
      titleTamil: "அழகு பல் மருத்துவம்",
      badge: "Proven Results",
      badgeColor: "bg-royal-700 text-white",
      duration: "Same-Day Transformation",
      highlight: "Close gaps & reshape teeth seamlessly",
      description: "Aesthetic direct composite bonding, gap closure (diastema closure), and ceramic veneers. Designed to deliver symmetrical, lifelike smiles as showcased in our patient gallery.",
      icon: "sparkles",
      benefits: [
        "Natural shade-matching resin & porcelain",
        "Conservative tooth preservation",
        "Immediate gap closure in a single sitting",
        "Long-lasting shine and high durability"
      ]
    },
    {
      id: "whitening",
      title: "Teeth Whitening & Ultrasonic Scaling",
      titleTamil: "பல் சுத்தம் & வெண்மையாக்குதல்",
      badge: "Instant Glow",
      badgeColor: "bg-cyan-600 text-white",
      duration: "30–45 Minutes",
      highlight: "Up to 6-8 shades brighter & stain-free",
      description: "Gentle ultrasonic calculus removal paired with professional in-office enamel-safe teeth whitening to remove stubborn tea, coffee, and tobacco stains safely.",
      icon: "smile",
      benefits: [
        "Removes hardened tartar and stains",
        "Restores natural dental luster",
        "Prevents gum recession & bad breath",
        "Safe for sensitive teeth with enamel protection"
      ]
    },
    {
      id: "implants",
      title: "Dental Implants",
      titleTamil: "செயற்கை பல் மருத்துவம் (இம்ப்ளான்ட்)",
      badge: "Permanent Fix",
      badgeColor: "bg-blue-600 text-white",
      duration: "Permanent Solution",
      highlight: "The gold standard for missing teeth",
      description: "Biocompatible titanium implants anchored directly into the jawbone to permanently replace one or multiple missing teeth, restoring complete biting power and youthful aesthetics.",
      icon: "shield",
      benefits: [
        "Permanent lifetime tooth replacement",
        "100% natural look, feel, and function",
        "Prevents facial bone resorption",
        "No damage to adjacent healthy teeth"
      ]
    },
    {
      id: "pedodontics",
      title: "Paediatric Dentistry (Kids Care)",
      titleTamil: "குழந்தைகளுக்கான பல் மருத்துவம்",
      badge: "Child Friendly",
      badgeColor: "bg-amber-500 text-slate-900",
      duration: "Gentle & Fast",
      highlight: "Fear-free and friendly dental visits for kids",
      description: "Compassionate, gentle care designed specifically to keep young children relaxed. Preventive fluoride treatments, cavity fillings, space maintainers, and gentle habit guidance.",
      icon: "heart",
      benefits: [
        "Calm, patient, and fear-free approach",
        "Painless cavity restorations & fillings",
        "Fluoride applications & pit/fissure sealants",
        "Oral hygiene education for growing children"
      ]
    },
    {
      id: "extractions",
      title: "Tooth Extractions & Minor Surgery",
      titleTamil: "பல் பிடுங்குதல் & சிறு அறுவை",
      badge: "Gentle Protocol",
      badgeColor: "bg-rose-600 text-white",
      duration: "20–45 Minutes",
      highlight: "Atraumatic extraction & wisdom tooth care",
      description: "Painless, atraumatic removal of non-restorable teeth and impacted wisdom molars with precise local anesthesia and comprehensive post-op guidance.",
      icon: "scissors",
      benefits: [
        "Gentle, atraumatic socket preservation",
        "Safe wisdom tooth evaluation & removal",
        "Rapid healing protocols",
        "Comprehensive aftercare support"
      ]
    },
    {
      id: "crowns",
      title: "Crowns, Bridges & Dentures",
      titleTamil: "செயற்கை பல் மூடி & கட்டமைப்பு",
      badge: "Restorative",
      badgeColor: "bg-indigo-600 text-white",
      duration: "Custom Crafted",
      highlight: "Precision-milled Zirconia & Ceramic",
      description: "Custom computerized CAD/CAM ceramic and zirconia crowns, fixed dental bridges, and comfortable flexible partial or complete dentures to restore chewing confidence.",
      icon: "layers",
      benefits: [
        "High-strength metal-free Zirconia crowns",
        "Natural translucency matching your teeth",
        "Fixed multi-unit bridges for gap coverage",
        "Lightweight, snug-fitting dentures"
      ]
    }
  ],

  reviews: [
    {
      name: "Mohamed Tariq",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      text: "Visited Al-Shifa Dental Clinic for a root canal treatment with Dr. Afreen Jannath. I was terrified of dental pain, but she explained every step and performed the procedure completely pain-free! The clinic is spotless and very well equipped.",
      highlight: true
    },
    {
      name: "Ayesha Banu",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      text: "Dr. Afreen is an exceptional doctor. Her laser treatment for my gum issue was very smooth with no bleeding at all. Best dental clinic in Pudupet and Egmore area with reasonable charges.",
      highlight: false
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      date: "1 month ago",
      verified: true,
      text: "Got teeth cleaning and gap closure done here. The aesthetic results are unbelievable! My smile looks completely natural now. Highly recommend Dr. Afreen Jannath for cosmetic dentistry.",
      highlight: false
    },
    {
      name: "Fathima Noor",
      rating: 5,
      date: "1 month ago",
      verified: true,
      text: "Took my 7-year-old son for dental check-up and filling. The doctor was so kind, patient, and gentle. No tears at all! Very happy to have found such a caring clinic.",
      highlight: false
    },
    {
      name: "Suresh Mani",
      rating: 5,
      date: "2 months ago",
      verified: true,
      text: "Top-notch hygiene and modern dental chair setup. Dr. Afreen’s diagnosis was spot-on without pushing any unnecessary treatments. 5 stars all the way!",
      highlight: false
    },
    {
      name: "Syed Imran",
      rating: 5,
      date: "2 months ago",
      verified: true,
      text: "Excellent service and convenient timings (open till 9 PM). The doctor gave clear post-treatment guidance and follow-up was great.",
      highlight: false
    }
  ],

  faqs: [
    {
      q: "What are the clinic timings for Al-Shifa Dental Clinic?",
      a: "We are open Monday to Saturday from 10:00 AM – 1:30 PM (Morning) and 5:00 PM – 9:00 PM (Evening). Sunday consultations are available by prior appointment. We attend to dental emergencies with high priority."
    },
    {
      q: "Why choose an Endodontist for Root Canal Treatment (RCT)?",
      a: "An Endodontist is a specialist who has dedicated advanced post-graduate clinical training specifically in saving natural teeth and handling complex root canal anatomies. At Al-Shifa, Dr. Afreen Jannath utilizes rotary systems and magnification, making your RCT completely painless and successful."
    },
    {
      q: "What are the advantages of Laser Dentistry?",
      a: "Dental lasers provide scalpel-free, minimally invasive treatments for gum shaping, frenectomies, and disinfection. Benefits include virtually zero bleeding, minimal swelling, no need for stitches in most cases, and significantly faster healing."
    },
    {
      q: "Can tooth gaps (diastema) be closed without braces?",
      a: "Yes! As shown in our patient gallery, minor to moderate gaps between front teeth can be skillfully closed in a single sitting using high-aesthetic cosmetic composite bonding or porcelain veneers without long months of braces."
    },
    {
      q: "Where is the clinic located and how do I reach?",
      a: "We are located at 23/11, Labbai Street, Pudupet, Komaleeswaranpet, Egmore, Chennai - 600002. We are easily accessible from Egmore, Mount Road, and Chintadripet. You can find us directly on Google Maps."
    },
    {
      q: "How can I book an appointment?",
      a: "You can easily book online using our appointment form, send an instant message on WhatsApp, or call directly at +91 94986 58545 for immediate slot confirmation."
    }
  ],

  features: [
    {
      title: "Sterile & Hospital-Grade Hygiene",
      description: "Strict multi-stage autoclave sterilization protocols and single-use disposables for every patient.",
      icon: "shield-check"
    },
    {
      title: "Endodontic & Laser Expertise",
      description: "Direct specialist care led by Dr. Afreen Jannath.A (Govt Dental College Alumna).",
      icon: "award"
    },
    {
      title: "Advanced Operatory Equipment",
      description: "Digital radiography, rotary endo systems, and state-of-the-art operatory chair.",
      icon: "cpu"
    },
    {
      title: "Painless Patient Protocols",
      description: "Gentle handling, modern topical anesthetics, and calm clinic ambiance for anxiety-free visits.",
      icon: "heart"
    }
  ],

  stats: [
    { value: "5.0 ★", label: "Google Rating" },
    { value: "100%", label: "Painless Protocol" },
    { value: "8+", label: "Specialties Covered" },
    { value: "9 PM", label: "Open Every Evening" }
  ]
};
