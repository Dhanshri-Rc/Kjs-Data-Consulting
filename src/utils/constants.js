// ── Company Data ─────────────────────────────────────────────────────────────

export const COMPANY = {
  name: 'KJs DataEdge',
  fullName: 'KJs DataEdge Consulting',
  tagline: 'Transforming Data into Strategic Advantage',
  founded: 2009,
  experience: 15,
  email: 'consulting@kjsdataedge.com',
  phone: '+44 20 7946 0321',
  offices: ['London', 'New York', 'Singapore', 'Dubai'],
}

// ── Navigation ────────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

// ── Hero Stats ────────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Enterprise Clients' },
  { value: 50, suffix: '+', label: 'Ab Initio Engineers' },
  { value: 12, suffix: '+', label: 'Countries Active' },
]

// ── Services ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: 'data-governance',
    icon: '🏛️',
    number: '01',
    title: 'Data Governance',
    shortDesc: 'Enterprise governance frameworks ensuring quality, lineage, and regulatory compliance at global scale.',
    fullDesc: `We design and implement comprehensive governance frameworks that align people, processes, and technology. 
    From policy architecture to MDM deployment, our governance practice draws on deep regulatory experience with Tier-1 banks 
    and global pharmaceutical companies where data quality is a compliance mandate.`,
    offerings: [
      'Data Quality Management & DQ Scorecards',
      'Master Data Management (MDM) Architecture',
      'Metadata Management & Enterprise Data Cataloguing',
      'GDPR / BCBS 239 / DORA Compliance Frameworks',
      'Data Stewardship Programs & Operating Models',
      'Data Lineage & End-to-End Impact Analysis',
    ],
    color: '#007BFF',
    glowColor: 'rgba(0,123,255,0.3)',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 'ab-initio',
    icon: '⚙️',
    number: '02',
    title: 'Ab Initio Development',
    shortDesc: 'Certified Ab Initio architects delivering mission-critical ETL pipelines for Tier-1 financial institutions.',
    fullDesc: `KJs DataEdge is one of the few consulting firms globally with a dedicated Ab Initio Centre of Excellence. 
    Our 50+ certified engineers have delivered mission-critical pipelines processing billions of records daily for 
    global banks, insurers, and telecoms — from Co>Operating System architecture to real-time Continuous Flows.`,
    offerings: [
      'Co>Operating System Architecture & Design',
      'GDE / EME / Control>Center Implementations',
      'Performance Tuning for High-Volume Pipelines',
      'Legacy ETL Migration to Ab Initio Platform',
      'Ab Initio Continuous Flows for Real-Time Processing',
      'Staff Augmentation & Certified Ab Initio Training',
    ],
    color: '#4FD1C5',
    glowColor: 'rgba(79,209,197,0.3)',
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80',
  },
  {
    id: 'data-marketplace',
    icon: '🗂️',
    number: '03',
    title: 'Data Marketplace',
    shortDesc: 'End-to-end Data Marketplace platforms enabling self-service analytics and data product monetisation.',
    fullDesc: `We help enterprises become truly data-driven by turning internal data assets into discoverable, governed, 
    and monetisable products. Our Data Marketplace implementations reduce time-to-data from weeks to hours, 
    enabling business teams to operate autonomously without bottlenecking central data teams.`,
    offerings: [
      'Data Product Design & Self-Service Cataloguing',
      'Internal Data Exchange Architecture',
      'Secure Data Sharing & API Monetisation',
      'Usage Analytics & Data Cost Accounting',
      'Vendor Evaluation & Platform Selection',
      'Data Mesh Transition from Centralised Architecture',
    ],
    color: '#007BFF',
    glowColor: 'rgba(0,123,255,0.3)',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: 'data-strategy',
    icon: '🧭',
    number: '04',
    title: 'Data Strategy & Transformation',
    shortDesc: 'C-suite advisory defining data transformation roadmaps that generate measurable competitive advantage.',
    fullDesc: `Transformation begins with strategy. Our senior advisors partner with C-level executives to define where 
    data can create competitive advantage, then architect the roadmap, team model, and technology stack to deliver it — 
    within realistic budgets and timelines, with measurable ROI milestones built in from day one.`,
    offerings: [
      'Data Maturity Assessments & Benchmarking',
      'Cloud Data Platform Roadmaps (AWS/Azure/GCP)',
      'Data Mesh & Data Fabric Architecture Advisory',
      'Chief Data Officer (CDO) Advisory Services',
      'Data Culture & Enterprise Literacy Programs',
      'Technology Selection & Business Case Development',
    ],
    color: '#4FD1C5',
    glowColor: 'rgba(79,209,197,0.3)',
    img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
  },
]

// ── Industries ────────────────────────────────────────────────────────────────

export const INDUSTRIES = [
  {
    icon: '🏦',
    name: 'Banking & Finance',
    desc: 'Risk analytics, BCBS 239 compliance, real-time AML/KYC data pipelines, regulatory reporting automation.',
    clients: '60+ clients',
    color: '#007BFF',
  },
  {
    icon: '💊',
    name: 'Pharmaceuticals',
    desc: 'Clinical data management, pharmacovigilance pipelines, regulatory submission data, R&D data platforms.',
    clients: '40+ clients',
    color: '#4FD1C5',
  },
  {
    icon: '🛒',
    name: 'Retail & CPG',
    desc: 'Customer 360 platforms, supply-chain analytics, real-time personalisation engines, demand forecasting.',
    clients: '50+ clients',
    color: '#007BFF',
  },
  {
    icon: '📡',
    name: 'Telecom',
    desc: 'Network analytics, churn prediction models, BSS/OSS modernisation, subscriber data platforms at scale.',
    clients: '35+ clients',
    color: '#4FD1C5',
  },
]

// ── Differentiators (Why Us) ──────────────────────────────────────────────────

export const WHY_US = [
  {
    icon: '🎯',
    title: 'Ab Initio Centre of Excellence',
    desc: 'One of few globally certified Ab Initio practices with 50+ engineers and 100+ successful deployments.',
  },
  {
    icon: '🔬',
    title: 'Regulatory-Grade Governance',
    desc: 'Deep expertise in GDPR, BCBS 239, DORA, HIPAA, and industry-specific compliance frameworks.',
  },
  {
    icon: '🚀',
    title: 'Agile Delivery at Enterprise Scale',
    desc: 'Iterative delivery combining offshore excellence with on-site strategic engagement for maximum velocity.',
  },
  {
    icon: '🌍',
    title: 'Domain-Embedded Consultants',
    desc: 'Our consultants bring prior industry tenure — banking, pharma, retail — not just technology skills.',
  },
  {
    icon: '💡',
    title: 'Outcomes-Focused Contracts',
    desc: 'We structure engagements around business outcomes: efficiency gains, time-to-insight, and platform ROI.',
  },
  {
    icon: '🤝',
    title: 'Partnership, Not Dependency',
    desc: 'We embed within your teams to build lasting capability, ensuring you are self-sufficient post-engagement.',
  },
]

// ── Milestones / Timeline ─────────────────────────────────────────────────────

export const MILESTONES = [
  { year: '2009', title: 'Founded in London', desc: 'Launched as a specialist Ab Initio consultancy serving global banks from Canary Wharf.' },
  { year: '2012', title: 'North American Expansion', desc: 'Opened New York office; delivered first enterprise Data Governance programme for a Top-5 US bank.' },
  { year: '2015', title: 'Pharma Practice Launch', desc: 'Established Life Sciences vertical; onboarded first Global Pharma 50 client in Basel, Switzerland.' },
  { year: '2018', title: 'Data Marketplace CoE', desc: 'Pioneered enterprise Data Marketplace frameworks; recognised as industry thought leader.' },
  { year: '2021', title: 'Cloud Transformation', desc: 'Launched Cloud Data Platform practice across AWS, Azure, and GCP; expanded to Singapore & Dubai.' },
  { year: '2024', title: '200+ Engagements', desc: 'Surpassed 200 enterprise engagements across 12 countries; named Top Ab Initio Partner globally.' },
]

// ── Leadership ────────────────────────────────────────────────────────────────

export const LEADERSHIP = [
  {
    name: 'Kunal Joshi',
    title: 'Founder & Chief Executive',
    bio: '20+ years delivering data transformation for Barclays, HSBC, Roche. Former Global Ab Initio Architect.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'Priya Sharma',
    title: 'Managing Director, EMEA',
    bio: 'Former Deloitte data practice lead. Specialist in BCBS 239 and financial services data governance.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    linkedin: '#',
  },
  {
    name: 'James Whitfield',
    title: 'Head of Data Strategy',
    bio: 'Ex-McKinsey Digital. Specialises in Data Mesh architecture and CDO advisory for global enterprises.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    linkedin: '#',
  },
]

// ── Metrics ───────────────────────────────────────────────────────────────────

export const METRICS = [
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
  { value: 40, suffix: '%', label: 'Avg. Time-to-Insight Reduction' },
  { value: 300, suffix: 'M+', label: 'Records Governed Daily' },
  { value: 4, suffix: '', label: 'Continents Served' },
]

// ── Testimonials ──────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote: "KJs DataEdge transformed our data governance posture within 6 months. Their Ab Initio expertise is genuinely world-class — no other firm comes close.",
    author: 'Chief Data Officer',
    company: 'Global Tier-1 Investment Bank',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
  {
    quote: "The Data Marketplace they built for us reduced time-to-data from 3 weeks to under 2 hours. The business impact was immediate and measurable.",
    author: 'VP Data & Analytics',
    company: 'Fortune 500 Pharmaceutical',
    img: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&q=80',
  },
  {
    quote: "Their strategy team helped us move from data chaos to a coherent, cloud-native data platform in under 18 months. Exceptional delivery.",
    author: 'Group CTO',
    company: 'Pan-European Telecom Group',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
]
