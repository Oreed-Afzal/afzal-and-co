// ---------------------------------------------------------------------------
// Central site configuration.
// Edit firm name, contact details, and content here — everything else reads
// from this file so there is a single source of truth.
// ---------------------------------------------------------------------------

export const site = {
  name: "Afzal A. Haider & Co.",
  legalName: "Afzal A. Haider & Co. Advocates & Legal Consultants",
  shortName: "Afzal A. Haider & Co.",
  tagline: "Advocates & Legal Consultants",
  // Used in <title> templates and structured data.
  description:
    "Afzal A. Haider & Co. is a full-service law firm in Lahore providing trusted legal counsel in criminal, constitutional, family, civil, corporate and banking law. Decades of courtroom experience at your service.",
  // IMPORTANT: change to the real production domain before launch.
  url: "https://muhammadafzal.com",
  locale: "en_PK",
  founderName: "Senior Advocate Afzal A. Haider",
  foundedYear: 1995,
  contact: {
    phone: "+92 300 4384427",
    phoneHref: "+923004384427",
    whatsapp: "03004384427",
    email: "afzalalim8@gmail.com",
    address: {
      line1: "90-A1, Gulberg-III, Lahore",
      city: "Lahore",
      region: "Punjab",
      postalCode: "54000",
      country: "Pakistan",
    },
    // Embedded map query (Lahore High Court area as a placeholder).
    mapQuery: "Lahore High Court, Lahore, Pakistan",
    hours: "Mon – Sat: 8:00 AM – 11:00 PM PKT",
  },
  social: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  icon: string; // key into Icons map
  image: string;
  description: string;
  highlights: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "criminal-law",
    title: "Criminal Law",
    short:
      "Robust defence and prosecution support across bail, trial and appeal at every tier of court.",
    icon: "shield",
    image: "/images/practice-criminal.svg",
    description:
      "Facing a criminal allegation is one of the most stressful experiences a person can endure. Our criminal law team provides decisive, around-the-clock representation — from pre-arrest and post-arrest bail to trial advocacy and appeals before the High Court and Supreme Court. We protect your rights at every stage and build a defence strategy grounded in evidence and procedure.",
    highlights: [
      "Pre-arrest & post-arrest bail applications",
      "Trial advocacy in sessions & magistrate courts",
      "Appeals, revisions and references",
      "FIR quashing and anticipatory relief",
    ],
  },
  {
    slug: "constitutional-law",
    title: "Constitutional Law",
    short:
      "Enforcement of fundamental rights and writ jurisdiction before the High Court and Supreme Court.",
    icon: "scale",
    image: "/images/practice-constitutional.svg",
    description:
      "Constitutional matters demand precision and a deep command of precedent. We file and contest writ petitions, fundamental-rights cases, and public-interest litigation. Whether challenging unlawful state action or protecting your constitutional guarantees, we craft arguments that stand up to the highest scrutiny.",
    highlights: [
      "Writ petitions (Article 199)",
      "Fundamental rights enforcement",
      "Public interest litigation",
      "Service and administrative matters",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    short:
      "Compassionate counsel on divorce, custody, guardianship, maintenance and inheritance.",
    icon: "heart",
    image: "/images/practice-family.svg",
    description:
      "Family disputes are deeply personal. We combine sensitivity with firm advocacy to resolve matters of divorce (khula & talaq), child custody and guardianship, maintenance, dower (haq mehr) and inheritance. Wherever possible we pursue amicable settlement, while remaining fully prepared to protect your interests in court.",
    highlights: [
      "Divorce, khula & dissolution of marriage",
      "Child custody & guardianship",
      "Maintenance & dower recovery",
      "Inheritance & succession certificates",
    ],
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    short:
      "Strategic resolution of property, contractual and commercial disputes through every forum.",
    icon: "gavel",
    image: "/images/practice-civil.svg",
    description:
      "From property and tenancy disputes to breach of contract and recovery suits, our civil litigation practice delivers clear strategy and relentless follow-through. We handle declarations, injunctions, specific performance and damages, guiding clients efficiently from filing to final decree and execution.",
    highlights: [
      "Property, title & tenancy disputes",
      "Breach of contract & recovery suits",
      "Injunctions & specific performance",
      "Execution & decree enforcement",
    ],
  },
  {
    slug: "corporate-law",
    title: "Corporate & Commercial",
    short:
      "End-to-end advisory on company formation, contracts, compliance and commercial disputes.",
    icon: "building",
    image: "/images/practice-corporate.svg",
    description:
      "Businesses need a legal partner who understands commercial realities. We advise on company incorporation, SECP compliance, shareholder agreements, contract drafting and negotiation, mergers and commercial dispute resolution — helping enterprises grow on a sound legal footing.",
    highlights: [
      "Company incorporation & SECP compliance",
      "Contract drafting & negotiation",
      "Shareholder & partnership agreements",
      "Commercial dispute resolution",
    ],
  },
  {
    slug: "banking-finance-law",
    title: "Banking & Finance",
    short:
      "Representation in banking recovery, finance disputes and matters before banking courts.",
    icon: "bank",
    image: "/images/practice-banking.svg",
    description:
      "Our banking and finance practice represents both institutions and borrowers in recovery suits, financial settlements and matters before the Banking Courts. We bring technical command of financial regulation and a pragmatic approach to negotiation and litigation alike.",
    highlights: [
      "Banking recovery suits",
      "Financial settlements & restructuring",
      "Banking court representation",
      "Loan & mortgage disputes",
    ],
  },
];

export const stats = [
  { value: 30, suffix: "+", label: "Years of Experience" },
  { value: 2500, suffix: "+", label: "Cases Handled" },
  { value: 1800, suffix: "+", label: "Satisfied Clients" },
  { value: 95, suffix: "%", label: "Success Rate" },
];

export const whyChooseUs = [
  {
    icon: "scale",
    title: "Decades of Courtroom Experience",
    text: "A track record spanning thousands of matters across every tier of the Pakistani judiciary.",
  },
  {
    icon: "users",
    title: "Client-Centred Approach",
    text: "Clear communication, honest advice and a strategy tailored to your specific circumstances.",
  },
  {
    icon: "shield",
    title: "Confidential & Ethical",
    text: "Your matters are handled with absolute discretion and the highest professional standards.",
  },
  {
    icon: "clock",
    title: "Responsive & Available",
    text: "Timely updates and accessible counsel — including urgent bail and injunction matters.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed R.",
    role: "Business Owner",
    quote:
      "Afzal A. Haider & Co. handled our commercial dispute with remarkable clarity and professionalism. They explained every step and secured an outcome better than we hoped for.",
  },
  {
    name: "Sara K.",
    role: "Family Law Client",
    quote:
      "During an incredibly difficult time they were compassionate yet firm. I always felt my interests were genuinely protected. I cannot recommend them enough.",
  },
  {
    name: "Bilal M.",
    role: "Criminal Defence Client",
    quote:
      "Their command of procedure and quick action on my bail application made all the difference. A truly dedicated and knowledgeable team.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  category: string;
  image: string;
  content: string[]; // paragraphs
};

export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-bail-in-pakistan",
    title: "Understanding Bail in Pakistan: Your Rights Explained",
    excerpt:
      "A practical guide to pre-arrest and post-arrest bail, the factors courts consider, and what to do if you or a loved one is detained.",
    date: "2026-05-20",
    readingTime: "6 min read",
    category: "Criminal Law",
    image: "/images/blog-bail.svg",
    content: [
      "Bail is one of the most important protections in the criminal justice system. It allows an accused person to remain free pending trial, on the understanding that they will appear before the court when required. Understanding how bail works can make a critical difference in the early hours after an arrest.",
      "Pakistani law recognises two principal forms of bail. Pre-arrest bail (often called anticipatory bail) is sought when a person fears arrest in a registered case. Post-arrest bail is sought after a person has already been taken into custody. The grounds and considerations for each differ, and timing is often decisive.",
      "Courts weigh several factors when deciding a bail application, including the nature and seriousness of the offence, whether the offence is bailable or non-bailable, the strength of the evidence, the likelihood of the accused absconding or tampering with evidence, and the period already spent in custody.",
      "If you or a family member is arrested, the most important step is to obtain competent legal advice immediately. A timely, well-prepared bail application — supported by the right documents and legal grounds — significantly improves the prospects of relief.",
    ],
  },
  {
    slug: "khula-vs-talaq-explained",
    title: "Khula vs. Talaq: What Every Spouse Should Know",
    excerpt:
      "The legal differences between khula and talaq, the procedure before the family court, and how custody and maintenance are decided.",
    date: "2026-04-12",
    readingTime: "7 min read",
    category: "Family Law",
    image: "/images/blog-family.svg",
    content: [
      "Ending a marriage is never easy, and the legal process can feel overwhelming. Two of the most commonly discussed routes under family law are khula and talaq. While both lead to the dissolution of marriage, they differ in who initiates the process and the procedure that follows.",
      "Talaq is the right of the husband to pronounce divorce, which must then be notified to the Union Council under the law, triggering a reconciliation period. Khula, on the other hand, is the wife's right to seek dissolution of marriage through the family court, typically by returning the dower or as the court directs.",
      "Related questions of child custody, maintenance, and recovery of dower (haq mehr) are usually decided alongside or following the dissolution. Courts give paramount importance to the welfare of any children involved when deciding custody.",
      "Every family situation is unique. Early legal guidance helps you understand your rights, protect your interests, and — wherever possible — resolve matters with dignity and minimal conflict.",
    ],
  },
  {
    slug: "property-disputes-checklist",
    title: "Buying Property in Pakistan: A Legal Due-Diligence Checklist",
    excerpt:
      "Protect your investment. The essential title verification and documentation checks to complete before any property purchase.",
    date: "2026-03-03",
    readingTime: "5 min read",
    category: "Civil Litigation",
    image: "/images/blog-property.svg",
    content: [
      "Property is among the most significant investments most families make — and also one of the most common sources of litigation. A little diligence before purchase can save years of costly disputes later.",
      "Begin by verifying the title. Obtain and examine the latest fard (record of rights), confirm the chain of ownership, and check that the seller is the lawful owner with the authority to sell. Cross-check the records maintained at the relevant revenue office.",
      "Confirm that the property is free from encumbrances — there should be no mortgage, lien, court attachment, or pending litigation. A search of relevant records and, where appropriate, a public notice can surface hidden claims.",
      "Finally, ensure the sale deed is properly drafted, the correct stamp duty is paid, and the transfer is duly registered and mutated in the revenue records. Engaging a lawyer for these steps provides a crucial layer of protection for your investment.",
    ],
  },
];

export function getPracticeArea(slug: string) {
  return practiceAreas.find((p) => p.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
