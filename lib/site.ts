export const site = {
  name: "Zoelex Pharma",
  shortName: "Zoelex",
  tagline: "A manufacturing partner for your next product.",
  description:
    "Zoelex Pharma is a Pune-based contract and private-label manufacturer of gummies, oral thin films, softgels and liposomal formulations for nutraceutical brands.",
  url: "https://zoelexpharma.com",
  email: "info@zoelexpharma.com",
  careersEmail: "careers@zoelexpharma.com",
  phone: "+91 93117 16003",
  phoneHref: "tel:+919311716003",
  whatsapp:
    "https://wa.me/919311716003?text=Hello%20Zoelex%20Pharma%2C%20I%20would%20like%20to%20discuss%20a%20nutraceutical%20manufacturing%20enquiry.",
  website: "https://zoelexpharma.com",
  address: {
    line1: "Office No. 1, S. No. 50/15/1, Samarth Sankul",
    line2: "Dhayari, Pune, Haveli",
    line3: "Maharashtra 411041, India",
  },
  hours: "Monday to Saturday, 9:30 AM – 6:30 PM IST",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Zoelex%20Pharma%2C%20Office%20No.%201%2C%20Samarth%20Sankul%2C%20Dhayari%2C%20Pune%2C%20Maharashtra%20411041",
  disclaimer:
    "Products manufactured by Zoelex Pharma are dietary / nutraceutical supplements and are not intended to diagnose, treat, cure or prevent any disease.",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Formats", href: "/technologies" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Export", href: "/global" },
  { label: "Contact", href: "/contact" },
] as const;

export type Format = {
  index: string;
  slug: string;
  name: string;
  short: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageClassName: string;
  bullets: string[];
  categories: string[];
};

export const formats: Format[] = [
  {
    index: "01",
    slug: "gummies",
    name: "Vegan Gummies",
    short: "Pectin-based, gelatin-free",
    summary:
      "Pectin-based gummies with gelatin-free, sugar-free and low-sugar options — built around your ingredients, audience and product brief.",
    image: "/images/gummies-spill.jpg",
    imageAlt: "Vibrant red gummy supplements spilling from a clear container",
    imageClassName: "img-warm",
    bullets: [
      "Custom shapes, colours, flavours and coatings — sugar-sanded or oil-coated",
      "Sugar-free and low-sugar options",
      "Suitable for vitamins, minerals, herbal extracts, probiotics and more",
      "Packed in bottles, jars or pouches",
    ],
    categories: ["Vitamins & Minerals", "Immunity", "Sleep & Stress"],
  },
  {
    index: "02",
    slug: "otf",
    name: "Oral Thin Films",
    short: "Thin strips, no water needed",
    summary:
      "Thin strips that dissolve on the tongue without water — a fast, discreet dosing format for people on the move.",
    image: "/images/effervescent.jpg",
    imageAlt: "A person holding a dissolvable supplement beside a glass of water",
    imageClassName: "img-duo",
    bullets: [
      "Fast-onset, convenient dosing on the go",
      "An option for children, older adults and people who prefer not to swallow pills",
      "Thin strips dissolve on the tongue without water",
      "Suitable for vitamins (B12, D3), melatonin, caffeine, herbal actives and more",
      "Individually sealed sachets for freshness and portability",
    ],
    categories: ["Vitamins & Minerals", "Sleep & Stress", "Energy & Focus"],
  },
  {
    index: "03",
    slug: "softgels",
    name: "Softgels",
    short: "For oils and fat-soluble actives",
    summary:
      "Ideal for oils and fat-soluble actives, with an easy-to-swallow format that protects sensitive ingredients from oxygen and light.",
    image: "/images/softgels-marble.jpg",
    imageAlt: "Golden softgel capsules arranged on a pale marble surface",
    imageClassName: "img-warm",
    bullets: [
      "Excellent for omega-3, vitamin D, vitamin E, CoQ10 and herbal oils",
      "Protects sensitive actives from oxygen and light",
      "Gelatin and plant-based shell options",
      "Range of sizes, shapes and colours",
    ],
    categories: ["Vitamins & Minerals", "Heart & Joint", "Ayurvedic Range"],
  },
  {
    index: "04",
    slug: "liposomal",
    name: "Liposomal Formulations",
    short: "Phospholipid-based delivery",
    summary:
      "Phospholipid-based formulations in liquid and spray options, designed to mask difficult tastes and support absorption.",
    image: "/images/orange-macro.jpg",
    imageAlt: "Macro detail of a fresh orange slice",
    imageClassName: "img-warm",
    bullets: [
      "Suitable for vitamin C, glutathione, iron, curcumin, CoQ10 and more",
      "Available as liquids, sprays or as inputs for other formats",
      "Masks bitter or metallic tastes",
    ],
    categories: ["Vitamins & Minerals", "Immunity", "Beauty & Skin"],
  },
];

export type Category = {
  index: string;
  name: string;
  ideas: string[];
  formats: string[];
};

export const categories: Category[] = [
  {
    index: "01",
    name: "Vitamins & Minerals",
    ideas: ["Multivitamin", "Vitamin D3", "B12", "Biotin", "Zinc", "Iron"],
    formats: ["Gummies", "Thin films", "Softgels", "Liposomal"],
  },
  {
    index: "02",
    name: "Immunity",
    ideas: ["Vitamin C", "Elderberry", "Zinc + C", "Giloy"],
    formats: ["Gummies", "Liposomal"],
  },
  {
    index: "03",
    name: "Sleep & Stress",
    ideas: ["Melatonin", "Ashwagandha", "Magnesium", "L-Theanine"],
    formats: ["Gummies", "Thin films"],
  },
  {
    index: "04",
    name: "Energy & Focus",
    ideas: ["Caffeine", "B-Complex", "Ginseng"],
    formats: ["Gummies", "Thin films"],
  },
  {
    index: "05",
    name: "Beauty & Skin",
    ideas: ["Biotin", "Collagen support", "Glutathione", "Hair & Nails"],
    formats: ["Gummies", "Liposomal"],
  },
  {
    index: "06",
    name: "Heart & Joint",
    ideas: ["Omega-3", "CoQ10", "Turmeric / Curcumin"],
    formats: ["Softgels", "Liposomal"],
  },
  {
    index: "07",
    name: "Digestive Health",
    ideas: ["Apple Cider Vinegar", "Fibre", "Probiotics"],
    formats: ["Gummies"],
  },
  {
    index: "08",
    name: "Kids' Nutrition",
    ideas: ["Kids Multivitamin", "Omega", "Vitamin D"],
    formats: ["Gummies", "Thin films"],
  },
  {
    index: "09",
    name: "Ayurvedic Range",
    ideas: ["Ashwagandha", "Shilajit", "Triphala", "Tulsi", "Moringa"],
    formats: ["Gummies", "Softgels", "Thin films"],
  },
  {
    index: "10",
    name: "Women's Health",
    ideas: ["Iron + Folic Acid", "PCOS support", "Prenatal"],
    formats: ["Gummies", "Softgels"],
  },
];

export type Capability = {
  index: string;
  title: string;
  copy: string;
  detail?: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Contract Manufacturing",
    copy: "Your formulation, made to the agreed specification.",
    detail:
      "Manufacture your formulation to agreed specifications, with quality testing and batch documentation discussed for the project.",
  },
  {
    index: "02",
    title: "Private Label / White Label",
    copy: "Ready-formulation options for your brand.",
    detail:
      "Explore suitable tested ready formulations for your brand. Product scope, branding and launch timing depend on the project.",
  },
  {
    index: "03",
    title: "Formulation & R&D",
    copy: "Discuss formulation feasibility and product requirements.",
    detail:
      "Discuss custom formulas, taste and texture development, and stability studies against your product brief.",
  },
  {
    index: "04",
    title: "Packaging & Design Support",
    copy: "Packaging options aligned to format and market.",
    detail:
      "Discuss bottles, jars, pouches, blister packs or sachets, label requirements and design-partner support.",
  },
  {
    index: "05",
    title: "Regulatory & Documentation",
    copy: "Product and batch documentation, as applicable.",
    detail:
      "Available documents may include COA, MSDS, stability data, product dossiers and applicable FSSAI or export documentation.",
  },
  {
    index: "06",
    title: "Export Support",
    copy: "Export requirements reviewed for your destination market.",
    detail:
      "Review destination-market requirements and the export documentation relevant to your product and shipment.",
  },
];

export const certifications = [
  {
    code: "GMP",
    title: "Good Manufacturing Practice",
    copy: "Certified operations with documented manufacturing controls.",
  },
  {
    code: "FSSAI",
    title: "Food Safety",
    copy: "Food safety compliance for nutraceutical products manufactured in India.",
  },
  {
    code: "GLP",
    title: "Good Laboratory Practice",
    copy: "Laboratory operations supporting product testing and records.",
  },
];

export const qualitySteps = [
  {
    index: "01",
    title: "Raw material testing & vendor qualification",
    copy: "Every input is tested and every vendor qualified before use.",
  },
  {
    index: "02",
    title: "In-process checks at every critical step",
    copy: "Documented checks keep production inside specification.",
  },
  {
    index: "03",
    title: "Finished product testing",
    copy: "Potency, purity and microbial limits verified on every batch.",
  },
  {
    index: "04",
    title: "Stability studies",
    copy: "Shelf-life assurance across the product's intended life.",
  },
  {
    index: "05",
    title: "Full batch traceability & COA",
    copy: "A certificate of analysis accompanies every lot we dispatch.",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Enquiry",
    copy: "Share your product idea, target market and estimated volumes.",
  },
  {
    index: "02",
    title: "Consultation",
    copy: "Review suitable formats, formulation and packaging options.",
  },
  {
    index: "03",
    title: "Sampling",
    copy: "Review a product sample against the agreed brief.",
  },
  {
    index: "04",
    title: "Quote & agreement",
    copy: "Confirm project scope, pricing and planned timelines.",
  },
  {
    index: "05",
    title: "Production",
    copy: "Manufacture to the agreed specifications with quality checks.",
  },
  {
    index: "06",
    title: "Delivery",
    copy: "Plan dispatch with the relevant product and batch documentation.",
  },
];

export const values = [
  {
    index: "01",
    title: "Quality first",
    copy: "No shortcuts — every batch, every time.",
  },
  {
    index: "02",
    title: "Innovation",
    copy: "We look for better ways to deliver wellness.",
  },
  {
    index: "03",
    title: "Integrity",
    copy: "Transparent pricing, honest timelines and clear communication.",
  },
  {
    index: "04",
    title: "Partnership",
    copy: "Your brand's success is our success.",
  },
  {
    index: "05",
    title: "Sustainability",
    copy: "Plant-based choices and responsible manufacturing.",
  },
];

export const whyZoelex = [
  {
    index: "01",
    title: "Format specialists",
    copy: "Four delivery formats from a single manufacturing partner, supporting a broader product range.",
  },
  {
    index: "02",
    title: "Certified quality",
    copy: "GMP, FSSAI and GLP-certified operations with product and batch documentation discussed for each brief.",
  },
  {
    index: "03",
    title: "Vegan & clean-label options",
    copy: "Pectin-based, gelatin-free gummies, with natural colours and flavours among the options discussed for a product brief.",
  },
  {
    index: "04",
    title: "Ayurveda + modern science",
    copy: "Traditional herbs can be considered in modern, consumer-friendly formats.",
  },
  {
    index: "05",
    title: "Flexible MOQs",
    copy: "Minimum order quantities are discussed according to format and project requirements.",
  },
  {
    index: "06",
    title: "Speed to market",
    copy: "Ready formulations and an experienced team can help shorten a product's path to launch.",
  },
  {
    index: "07",
    title: "Global outlook",
    copy: "Export documentation and destination-market requirements can be discussed early.",
  },
];

export const mission = [
  "Develop supplement formats that improve compliance and consumer experience.",
  "Uphold high standards of quality, safety and regulatory compliance.",
  "Help brands launch and scale with speed and confidence.",
  "Invest continuously in research, technology and people.",
];

export const buyers = [
  "Nutraceutical & supplement brands",
  "D2C & e-commerce wellness startups",
  "Ayurvedic & herbal companies",
  "Pharma marketing & PCD companies",
  "Distributors & importers",
  "Sports nutrition & fitness brands",
  "Pharmacies & retail chains seeking private label",
  "Doctors & clinics developing their own range",
];

export const marketSteps = [
  {
    index: "01",
    title: "Share the destination",
    copy: "Tell us the country or market where the product is intended to be sold.",
  },
  {
    index: "02",
    title: "Review requirements",
    copy: "Discuss product documents and market-specific requirements before production.",
  },
  {
    index: "03",
    title: "Confirm the product",
    copy: "Agree the formula, format, packaging and manufacturing scope.",
  },
  {
    index: "04",
    title: "Plan dispatch",
    copy: "Align production timing and shipping arrangements for the order.",
  },
];

export const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "Minimum order quantities vary by format and formulation. Share your brief to discuss current requirements.",
  },
  {
    q: "Do you offer private label manufacturing?",
    a: "Yes. You can choose from our ready formulations and launch under your own brand name.",
  },
  {
    q: "Can you develop a custom formulation?",
    a: "Share your brief with our team. Formulation feasibility and scope are reviewed for each product.",
  },
  {
    q: "Are your gummies vegan?",
    a: "Yes. Our gummies are pectin-based and gelatin-free. Gelatin options are available on request.",
  },
  {
    q: "What is an oral thin film?",
    a: "A thin strip that dissolves on the tongue. It is designed to be taken without water.",
  },
  {
    q: "How long from sample to production?",
    a: "Timelines depend on the formulation, sampling, order size and packaging requirements. Contact our team for an estimate.",
  },
  {
    q: "Do you export?",
    a: "Contact us with your destination market so product availability and documentation requirements can be discussed.",
  },
  {
    q: "Which certifications do you hold?",
    a: "We are GMP, FSSAI and GLP certified.",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Shelf life depends on the individual formulation and is confirmed through the relevant stability data.",
  },
];

export const founder = {
  name: "Vidhatri Singh",
  role: "Founder & CEO, Zoelex Pharma",
  focus: "Formulation, regulatory pathways and scale-up",
  experience: "Zoelex Pharmaceuticals",
  education: "DY Patil",
  intro:
    "A pharmaceutical entrepreneur whose work is described around formulation, regulatory pathways and scale-up.",
  quote:
    "Supplements should be as easy to take as they are to make. Our job is to make the format disappear, so the benefit doesn't.",
};

export const legal = {
  privacy: {
    title: "Privacy Policy",
    updated: "Draft · November 2026",
    intro:
      "This policy describes the website's current data practices and is pending final review by Zoelex Pharma.",
    sections: [
      {
        heading: "What we collect",
        body: "This website collects information only when you choose to send an enquiry: the details you enter in the contact form (name, company, email, phone, country, product interests, estimated quantity and message) and any information you provide by email, phone or WhatsApp.",
      },
      {
        heading: "How we use it",
        body: "Enquiry details are used solely to respond to your request and to prepare quotations. They are not sold, rented or shared with third parties for marketing. Standard email and server logs may be processed for the operation and security of the site.",
      },
      {
        heading: "How the form works",
        body: "At present the contact form hands off to your own email client; no form data is stored on this website. When a backend enquiry service is connected, this policy will be updated to describe that processing, retention and your rights.",
      },
      {
        heading: "Your choices",
        body: "You can request access to, correction of, or deletion of your information at any time by writing to info@zoelexpharma.com.",
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    updated: "Draft · November 2026",
    intro:
      "These terms are pending final review by Zoelex Pharma before publication.",
    sections: [
      {
        heading: "Information, not an offer",
        body: "The content of this website is for general information about Zoelex Pharma's manufacturing capabilities. It does not constitute an offer, a specification, or contractual terms; commercial terms are established in individual agreements.",
      },
      {
        heading: "Product examples",
        body: "Product examples describe potential formulations, subject to formulation feasibility and applicable regulations. Products manufactured by Zoelex Pharma are dietary / nutraceutical supplements and are not intended to diagnose, treat, cure or prevent any disease.",
      },
      {
        heading: "Content and imagery",
        body: "All content, branding and design of this site belong to Zoelex Pharma. Photography used on this site is illustrative and does not depict the Zoelex facility or products.",
      },
      {
        heading: "Questions",
        body: "For questions about these terms, contact info@zoelexpharma.com.",
      },
    ],
  },
};
