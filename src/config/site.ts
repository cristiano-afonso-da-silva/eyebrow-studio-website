export const siteConfig = {
  name: "Arché",
  legalName: "Arché Brow Studio",
  tagline: "The art of natural beauty",
  description:
    "A boutique eyebrow studio specializing in thoughtfully crafted brows that enhance your natural features.",
  url: "https://arche.studio",

  /**
   * Set this to your Fresha, Square Appointments, or other booking URL.
   * When empty, booking CTAs open the enquiry form fallback.
   */
  bookingUrl: "",

  contact: {
    email: "hello@arche.studio",
    phone: "(555) 010-2040",
    phoneHref: "tel:+15550102040",
  },

  location: {
    line1: "Studio location coming soon",
    line2: "City, State ZIP",
    note: "Address will be shared with confirmed appointments.",
  },

  hours: [
    { day: "Tuesday – Friday", time: "10:00 – 18:00" },
    { day: "Saturday", time: "09:00 – 16:00" },
    { day: "Sunday – Monday", time: "Closed" },
  ],

  social: {
    instagram: "https://instagram.com/",
    instagramHandle: "@arche.brows",
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "FAQ", href: "#faq" },
  ],

  services: [
    {
      id: "shaping",
      title: "Brow Shaping",
      description:
        "Precision shaping designed to complement your natural facial structure.",
      duration: "Duration TBD",
      price: "Pricing TBD",
      image: "service-1.jpg",
      imageAlt: "Soft beauty products arranged in calm studio light",
    },
    {
      id: "tinting",
      title: "Brow Tinting",
      description:
        "Soft, natural-looking definition that enhances your existing brows.",
      duration: "Duration TBD",
      price: "Pricing TBD",
      image: "service-2.jpg",
      imageAlt: "Warm makeup textures and soft neutral tones",
    },
    {
      id: "lamination",
      title: "Brow Lamination",
      description:
        "Fuller, beautifully styled brows with a polished finish.",
      duration: "Duration TBD",
      price: "Pricing TBD",
      image: "service-3.jpg",
      imageAlt: "Calm spa atmosphere with soft natural light",
    },
    {
      id: "package",
      title: "Brow Styling Package",
      description:
        "A personalized combination of treatments for a complete brow refresh.",
      duration: "Duration TBD",
      price: "Pricing TBD",
      image: "service-4.jpg",
      imageAlt: "Quiet beauty ritual in a refined treatment setting",
    },
  ],

  gallery: [
    {
      src: "gallery-1.jpg",
      alt: "Editorial portrait with soft natural light",
      span: "tall" as const,
    },
    {
      src: "gallery-2.jpg",
      alt: "Close beauty portrait highlighting facial features",
      span: "square" as const,
    },
    {
      src: "gallery-3.jpg",
      alt: "Detailed eye and brow photography",
      span: "wide" as const,
    },
    {
      src: "gallery-4.jpg",
      alt: "Natural skin texture in soft daylight",
      span: "square" as const,
    },
    {
      src: "gallery-5.jpg",
      alt: "Quiet portrait with refined expression",
      span: "tall" as const,
    },
  ],

  experience: [
    {
      step: "01",
      title: "Consultation",
      description:
        "Understanding your preferences, natural brow shape, and desired result.",
    },
    {
      step: "02",
      title: "The Treatment",
      description:
        "Careful attention to every detail with a personalized approach.",
    },
    {
      step: "03",
      title: "The Reveal",
      description: "Beautifully refined brows that still feel like you.",
    },
  ],

  faqs: [
    {
      question: "How should I prepare for my appointment?",
      answer:
        "Arrive with clean brows and avoid heavy makeup in the brow area. If you have a preferred shape or reference photos, feel free to bring them. Specific preparation notes may be shared once your booking is confirmed.",
    },
    {
      question: "How long does a brow appointment take?",
      answer:
        "Most visits are designed to feel unhurried. Exact timing depends on the service selected and will be confirmed when Arché finalizes the service menu.",
    },
    {
      question: "How often should I book my brow treatment?",
      answer:
        "Many clients return every few weeks to maintain shape, though the ideal cadence depends on your growth pattern and chosen treatments.",
    },
    {
      question: "How long does brow lamination last?",
      answer:
        "Lamination results typically soften gradually over several weeks. Longevity varies by hair type, aftercare, and lifestyle. Personalized guidance will be provided after your treatment.",
    },
    {
      question: "Can I book a consultation first?",
      answer:
        "Yes. If you prefer to discuss your goals before booking a full treatment, request a consultation through the booking enquiry form or email.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellation details will be confirmed before launch. Please include scheduling flexibility in your enquiry, and we will follow up with the current policy.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
