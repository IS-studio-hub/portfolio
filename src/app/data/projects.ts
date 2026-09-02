import type { Project } from "./types";
import { caseStudyData } from "./caseStudyData";
import { assetPath } from "../lib/assetPath";

export type {
 ProcessPhase,
 Project,
 ProjectMedia,
 ResearchItem,
 SolutionItem,
 MetricItem,
 NarrativeSection,
} from "./types";

export const SITE = {
  name: "IS",
  title: "Product Designer",
  email: "hello@isexperience.house",
  url: "https://alexreyes.design",
  bio: "I design digital products that feel obvious once you use them. Ten years across fintech, government, and consumer brands taught me that clarity beats clever every time.",
  seoDescription:
    "IS is a product designer based in Toronto. Case studies across government, retail, fintech, native apps and design systems.",
  location: "Toronto, Canada",
  stats: { corporates: 14, startups: 6, years: 10, clients: 20 },
  social: {
    linkedin: "https://www.linkedin.com/in/shamrikin/",
    dribbble: "https://dribbble.com/Shamrikin",
    instagram: "https://www.instagram.com/is.experience.house/",
  },
};

const img = (id: number, w = 1200, h = 800) =>
 `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const embed = (url: string) =>
 `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;

const GOM_DESIGN_LIBRARY =
 "https://www.figma.com/design/UBeOIjHkB23tcxrBk9eSng/GOM---Design-Library";
const GOM_PORTAL =
 "https://www.figma.com/design/ZRj8qEQfz6PzfRKjOT13jk/Self-Service-e-Licence-Portal---GoM";
const asset = (file: string) => assetPath(`/projects/gom/${file}`);
const projectImg = (slug: string) => assetPath(`/projects/${slug}/01-hero.png`);

const rawProjects = [
 {
 slug: "gom",
 title: "Designing Manitoba’s New eLicensing Experience",
 shortTitle: "GoM",
 subtitle: "Leading UX and content across a complex government service ecosystem",
 description:
 "Manitoba eLicensing is a digital platform that allows residents, visitors, vendors and government teams to purchase, issue and manage licences and permits across Manitoba.",
 year: "2024",
 role: "UX and Content Lead",
 tags: [
 "Customer Portal",
 "Vendor Portal",
 "Issuer Portal",
 "Admin System",
 "Design System",
 "UX Content",
 "Accessibility",
 ],
 accent: "#4ADE80",
 gridSpan: "full",
 image: asset("01-hero.png"),
 gallery: [
 {
 type: "image",
 src: asset("01-hero.png"),
 caption: "Customer Portal home, licence discovery for parks, fishing, hunting and more",
 },
 {
 type: "video",
 src: asset("portal-walkthrough.mp4"),
 poster: asset("portal-home.png"),
 caption:
 "A walkthrough of the Manitoba eLicensing experience, from public licence discovery to the systems supporting vendors, issuers and administrators",
 },
 {
 type: "image",
 src: asset("02-detail.png"),
 caption: "Service category cards, Park Vehicle Permit and outdoor licence discovery",
 },
 {
 type: "image",
 src: asset("03-detail.png"),
 caption: "Responsive Customer Portal, desktop and mobile designed together",
 },
 {
 type: "image",
 src: asset("05-detail.png"),
 caption: "Navigation menu, clear paths across licence types and issuer search",
 },
 {
 type: "image",
 src: asset("06-detail.png"),
 caption: "Issuers search, helping customers find places to purchase in person",
 },
 {
 type: "image",
 src: asset("07-detail.png"),
 caption: "Mobile Customer Portal, glanceable licence categories on smaller screens",
 },
 {
 type: "image",
 src: asset("08-detail.png"),
 caption: "Special licences, complex regulated products with clear entry points",
 },
 {
 type: "image",
 src: asset("portal-sign-in.png"),
 caption: "Manitoba citizen identity, secure account access before purchase flows",
 },
 ],
 figmaUrl: GOM_DESIGN_LIBRARY,
 secondaryFigmaUrl: GOM_PORTAL,
 secondaryFigmaLabel: "e-Licence Portal",
 embedFigmaUrl: embed(GOM_DESIGN_LIBRARY),
 secondaryEmbedFigmaUrl: embed(GOM_PORTAL),
 embedFigmaLabel: "GOM Design Library",
 overview:
 "Manitoba eLicensing is a digital platform that allows residents, visitors, vendors and government teams to purchase, issue and manage licences and permits across Manitoba. As UX and Content Lead, I worked as part of a 65 person multidisciplinary delivery team responsible for creating the new eLicensing experience for the Government of Manitoba.",
 challenge:
 "A customer may simply want to purchase a fishing licence or park permit, but behind that transaction is a much larger ecosystem involving eligibility rules, customer accounts, licence types, payments, vendors, issuers, government administration, reporting and regulatory requirements. The challenge was to turn that complexity into experiences that felt clear, predictable and easy to navigate for very different types of users.",
 process: [
 {
 phase: "01",
 title: "Turning requirements into experiences",
 description:
 "Worked with Business Analysts to understand requirements, rules and edge cases, then translated them into complete user journeys, what the user is trying to accomplish, what information they need, what could block them, and what happens when something goes wrong.",
 },
 {
 phase: "02",
 title: "Designing for complex decisions",
 description:
 "Licensing is not traditional ecommerce. Different licences have different eligibility requirements, rules, dates and restrictions. Designed discovery and checkout with clear hierarchy, progressive disclosure, contextual information and consistent language so users could make informed decisions.",
 },
 {
 phase: "03",
 title: "Content as part of the UX",
 description:
 "Shaped page titles, instructions, form labels, helper text, validation, errors, confirmations, navigation, buttons, product information and transactional messaging so users would not have to interpret the interface before they could use it.",
 },
 {
 phase: "04",
 title: "Design system, delivery and QA",
 description:
 "Established shared patterns across portals, collaborated with developers on feasibility, stayed involved through implementation, and partnered with QA to catch inconsistencies before they scaled across the ecosystem.",
 },
 ],
 deliverables: [
 "UX leadership across multiple connected applications",
 "Leadership of a two person UX and content team",
 "Customer, Vendor, Issuer and Admin System UX and UI",
 "Information architecture, user flows and interaction design",
 "Responsive design and accessibility",
 "Design system creation and management",
 "UX writing and content strategy",
 "Developer collaboration, design QA and client design reviews",
 ],
 outcomes: [
 "A connected eLicensing ecosystem supporting public and operational government services",
 "Customers can discover, purchase and manage licences and permits digitally",
 "Vendors and issuers have tools for serving customers and completing transactions",
 "Administrators have operational interfaces to manage the system behind those experiences",
 "Shared design system and UX patterns created a reusable foundation as the platform grew",
 ],
 },
 {
 slug: "weebo",
 title: "From Idea to Live AI Product",
 shortTitle: "W3380",
 subtitle: "Designing, building and shipping an AI knowledge platform from the ground up",
 description:
 "W3380 turns scattered project knowledge into an intelligent, searchable workspace. Capture, organize, ask, analyze and act on your own data.",
 year: "2024",
 role: "Product Designer & Full Stack Product Builder",
 tags: ["AI", "Product Design", "Full Stack", "Design System", "Architecture"],
 accent: "#818CF8",
 gridSpan: "half",
 image: projectImg("weebo"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("weebo"),
 caption: "W3380 live product, smarter collaboration powered by your data",
 },
 ],
 liveUrl: "https://w3380-production.up.railway.app/home",
 overview:
 "W3380 transforms scattered project knowledge into an intelligent, searchable workspace. I worked directly with the founders and CEO to take W3380 from product ideas and early concepts to a functioning web application, designing the experience, building the design system, developing the application, structuring the database, and shipping to production.",
 challenge:
 "Project knowledge is everywhere (recordings, requirements, spreadsheets, PDFs, decisions) but teams lose it across folders and tools. W3380 asked: what if your project could answer questions about itself?",
 process: [
 {
 phase: "01",
 title: "Capture & knowledge hub",
 description:
 "Designed upload, processing, and organization flows so PDFs, spreadsheets, images, meeting audio and structured forms become a secure, searchable project memory.",
 },
 {
 phase: "02",
 title: "AI chat with project context",
 description:
 "Built conversational UX that reinforces answers come from project knowledge (not generic internet responses) including history, empty states and failure cases.",
 },
 {
 phase: "03",
 title: "From conversation to action",
 description:
 "Connected chat and documents to analytics and intelligent ticketing so insights can become structured work in tools like Jira, Asana or Trello.",
 },
 {
 phase: "04",
 title: "Design, build, ship, iterate",
 description:
 "Owned design system, frontend, backend structure, accessibility, testing and QA, moving between Figma and production in a continuous feedback loop.",
 },
 ],
 deliverables: [
 "End-to-end product design and UX strategy",
 "UI, design system and product content",
 "Frontend and backend implementation",
 "Database structure and application architecture",
 "AI experience, accessibility, testing and QA",
 "Production deployment and ongoing iteration",
 ],
 outcomes: [
 "Live AI knowledge platform at w3380-production.up.railway.app",
 "Connected capture → organize → ask → analyze → act product ecosystem",
 "Design system patterns that survived implementation",
 "One owner across design, development, architecture and quality",
 ],
 },
 {
 slug: "csc",
 title: "One Kings Lane",
 shortTitle: "One Kings Lane",
 subtitle: "Scaling a luxury ecommerce experience through design systems",
 description:
 "Senior UX design for the design system behind One Kings Lane: reusable components, patterns and documentation that keep a premium catalog consistent at scale.",
 year: "2023",
 role: "Senior UX Designer · Design Systems",
 tags: ["Ecommerce", "Design Systems", "Luxury Retail", "UX"],
 accent: "#C4A574",
 gridSpan: "half",
 image: projectImg("csc"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("csc"),
 caption: "One Kings Lane, luxury home shopping experience",
 },
 ],
 overview:
 "I worked as a Senior UX Designer on a 10 person team supporting One Kings Lane, Sur La Table and Z Gallerie, focusing this case study on the design system behind One Kings Lane.",
 challenge:
 "A large ecommerce catalog grows continuously. Without shared foundations, buttons, cards, forms and navigation drift, and the brand starts to feel like a collection of templates.",
 process: [
 {
 phase: "01",
 title: "Audit the experience",
 description:
 "Compared recurring UI and interaction patterns across pages, use cases and viewports to find intentional variation vs accidental fragmentation.",
 },
 {
 phase: "02",
 title: "Build foundations",
 description:
 "Established typography, spacing, colour, grid, borders, iconography and interaction states as a shared visual language.",
 },
 {
 phase: "03",
 title: "Components for real commerce",
 description:
 "Designed product cards, navigation, filters and detail patterns with states, responsive rules and documentation teams could ship from.",
 },
 ],
 deliverables: [
 "UI audits and pattern inventory",
 "Design system foundations and Figma libraries",
 "Reusable ecommerce components and variants",
 "Documentation, design QA and developer collaboration",
 ],
 outcomes: [
 "Stronger shared foundations for One Kings Lane experiences",
 "Clearer reusable behaviour for designers and developers",
 "Consistency customers feel without noticing the system",
 ],
 },
 {
 slug: "slt",
 title: "Sur La Table",
 shortTitle: "SLT",
 subtitle: "Creating a scalable design system for a culinary retail experience",
 description:
 "Senior UX design for the Sur La Table design system: reusable patterns supporting cookware commerce, cooking classes, stores and culinary experiences.",
 year: "2023",
 role: "Senior UX Designer · Design Systems · Ecommerce",
 tags: ["Ecommerce", "Design Systems", "Culinary", "Retail"],
 accent: "#C45A3C",
 gridSpan: "half",
 image: projectImg("slt"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("slt"),
 caption: "Sur La Table, cookware, classes and culinary experiences",
 },
 ],
 overview:
 "I worked as a Senior UX Designer on a 10 person team supporting Sur La Table, One Kings Lane and Z Gallerie, focusing this case study on creating and evolving the design system behind Sur La Table’s digital customer experience.",
 challenge:
 "Sur La Table is more than an online kitchen store. The system had to support commerce, cooking classes, stores and registry journeys with consistency, without making every interaction feel identical.",
 process: [
 {
 phase: "01",
 title: "From pages to patterns",
 description:
 "Audited navigation, search, cards, forms, filters, modals, pricing, store information and class interfaces to find what should be shared versus intentionally flexible.",
 },
 {
 phase: "02",
 title: "Foundations & components",
 description:
 "Built typography, colour, spacing and interaction rules, then designed commerce components that survive real content, sales, pickup, long titles and missing data.",
 },
 {
 phase: "03",
 title: "Shop and experience together",
 description:
 "Extended the system for cooking classes, stores and digital-physical journeys while collaborating with UX and developers through documentation and design QA.",
 },
 ],
 deliverables: [
 "Design audits and pattern inventory",
 "Foundations, Figma libraries and component documentation",
 "Ecommerce and experience patterns, cards, navigation, PDP, classes",
 "Developer collaboration, accessibility and design QA",
 ],
 outcomes: [
 "Stronger shared foundations across Sur La Table’s digital ecosystem",
 "Reusable patterns for products, classes, stores and discovery",
 "Consistency customers feel without noticing the system",
 ],
 },
 {
 slug: "zg",
 title: "Z Gallerie",
 shortTitle: "ZG",
 subtitle: "Building a design system for a brand that refuses to feel ordinary",
 description:
 "Senior UX design for the Z Gallerie design system: reusable patterns that keep statement furniture ecommerce consistent without removing the brand’s personality.",
 year: "2023",
 role: "Senior UX Designer · Design Systems · Ecommerce",
 tags: ["Ecommerce", "Design Systems", "Home Decor", "Retail"],
 accent: "#A78BFA",
 gridSpan: "half",
 image: projectImg("zg"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("zg"),
 caption: "Z Gallerie, statement furniture and expressive home decor",
 },
 ],
 overview:
 "I worked as a Senior UX Designer on a 10 person team supporting Z Gallerie, One Kings Lane and Sur La Table, focusing this case study on creating and evolving the design system behind Z Gallerie’s digital customer experience.",
 challenge:
 "Consistency without sameness. The system had to structure a large ecommerce ecosystem without removing the expressive personality that makes Z Gallerie feel like Z Gallerie.",
 process: [
 {
 phase: "01",
 title: "Audit the reality",
 description:
 "Compared navigation, cards, forms, promotions, filters and responsive behaviour to separate intentional brand variation from unnecessary inconsistency.",
 },
 {
 phase: "02",
 title: "Foundations & components",
 description:
 "Built typography, colour, spacing and interaction rules, then designed commerce components that survive sale states, bold imagery and real content.",
 },
 {
 phase: "03",
 title: "Commerce meets editorial",
 description:
 "Supported product discovery and inspiration journeys under one language, collaborating with UX and developers through documentation and design QA.",
 },
 ],
 deliverables: [
 "Design audits and pattern inventory",
 "Foundations, Figma libraries and component documentation",
 "Ecommerce and inspiration patterns, cards, PLP, PDP, responsive",
 "Developer collaboration, accessibility and design QA",
 ],
 outcomes: [
 "Stronger shared foundations without flattening Z Gallerie’s expression",
 "Reusable patterns for discovery, product detail and merchandising",
 "Consistency customers feel while personality stays on the surface",
 ],
 },
 {
 slug: "gigz",
 title: "Building a Social Network for Bedroom Musicians",
 shortTitle: "Fine Tune",
 subtitle: "Designing a social product from the ground up for musicians who create from home",
 description:
 "FineTune is a social networking platform created for bedroom musicians. A place to connect, share work, discover artists, and build community around making music.",
 year: "2023",
 role: "Solo UX, UI and Content Designer",
 tags: [
 "Social",
 "Mobile",
 "Design System",
 "UX Writing",
 "Startup",
 "Music",
 ],
 accent: "#FF8A65",
 gridSpan: "full",
 image: projectImg("gigz"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("gigz"),
 caption: "FineTune, explore, profiles and feedback at the core of the social experience",
 },
 ],
 figmaUrl: "https://www.figma.com/design/cFwGUkAVoCfniW4fouSNWM/Gigz-Design-system",
 secondaryFigmaUrl: "https://www.figma.com/design/LUJEz2onkyACcPghOm4vah/Fine-Tune",
 secondaryFigmaLabel: "Fine-Tune product file",
 overview:
 "FineTune is a social networking platform created for bedroom musicians. It gives independent musicians a place to connect, share their work, discover other artists, build relationships and become part of a community around creating music. I joined as the sole UX, UI and Content Designer on a seven person startup team.",
 challenge:
 "Musicians already have platforms to publish music, post content and promote themselves. Building real relationships with other musicians is a different problem. The challenge was to design a social experience around those relationships rather than create another platform focused only on broadcasting content.",
 process: [
 {
 phase: "01",
 title: "Starting from an idea",
 description:
 "Worked closely with the CEO and developers to shape how the product should work, moving continuously between product ideas, UX questions, technical possibilities and real interface decisions.",
 },
 {
 phase: "02",
 title: "Designing one connected experience",
 description:
 "Mapped how users move through onboarding, profiles, discovery, feed, connections, messaging and notifications so every feature supported the larger relationship loop.",
 },
 {
 phase: "03",
 title: "Content as interface",
 description:
 "Designed the language together with the UI (onboarding prompts, empty states, actions, notifications and errors) so the product sounded human and appropriate for a creative community.",
 },
 {
 phase: "04",
 title: "Design system and delivery",
 description:
 "Built reusable foundations alongside the product and stayed involved through implementation, reviewing the developed experience with developers as real data and edge cases appeared.",
 },
 ],
 deliverables: [
 "Solo UX and UI ownership across the complete product",
 "Product UX strategy, information architecture and user flows",
 "Interaction design, visual design and responsive experiences",
 "Design system and component library",
 "UX writing and product content",
 "Onboarding, profiles, social feed, messaging and notifications",
 "Developer handoff, design QA and product iteration",
 ],
 outcomes: [
 "A complete social product experience designed from the ground up alongside the team building it",
 "Foundations for discovery, profiles, content, messaging and notifications that encourage real relationships",
 "A design system that kept a small startup consistent while moving quickly",
 "Product language that felt human, simple and right for a creative community",
 ],
 },
 {
 slug: "CHaPPie",
 title: "CH4PP!3",
 shortTitle: "CH4PP!3",
 subtitle: "From search to your next client",
 description:
 "End-to-end product design and development for a client discovery and outreach platform: search, qualify, create and reach out in one workflow.",
 year: "2024",
 role: "End to End Product Designer & Full Stack Product Builder",
 tags: ["Startup", "SaaS", "Full Stack", "Design System", "AI"],
 accent: "#FB923C",
 gridSpan: "half",
 image: projectImg("CHaPPie"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("CHaPPie"),
 caption: "CH4PP!3, client discovery and outreach platform",
 },
 ],
 overview:
 "I worked directly with the founders and CEO to turn CH4PP!3 from an idea into a live web product, designing the experience, building the application, and shipping it to production.",
 challenge:
 "Finding potential clients is easy to describe. Actually finding the right businesses, understanding the opportunity, preparing something relevant and reaching out takes time, especially when the process repeats across dozens of leads.",
 process: [
 {
 phase: "01",
 title: "Map the full workflow",
 description:
 "Translated business ideas into a connected journey (find, understand, create and reach out) instead of isolated search or email tools.",
 },
 {
 phase: "02",
 title: "Design & build together",
 description:
 "Created the design system alongside the product, implemented frontend and backend, and tested in the browser as the source of truth.",
 },
 {
 phase: "03",
 title: "Ship & iterate",
 description:
 "Handled authentication, subscriptions, integrations, accessibility, QA and production iteration on Railway.",
 },
 ],
 deliverables: [
 "Product strategy, UX, UI and design system",
 "Frontend, backend, database and architecture",
 "Search, lead, prototype and outreach workflows",
 "Authentication, subscriptions and integrations",
 "Content, accessibility, testing and QA",
 ],
 outcomes: [
 "Live client discovery platform at chappie-production.up.railway.app",
 "One workflow from business search to personalized outreach",
 "Design system and product shipped by one builder across design and code",
 ],
 },
 {
 slug: "ctc",
 title: "Canadian Tire",
 shortTitle: "Canadian Tire",
 subtitle: "Designing digital experiences at enterprise scale",
 description:
 "Senior UX design inside one of Canada’s largest retail ecosystems, translating business requirements into customer experiences across ecommerce, stores, fulfillment and services.",
 year: "2022",
 role: "Senior UX Designer · Enterprise Ecommerce",
 tags: ["Enterprise", "Ecommerce", "Retail", "Cross Functional"],
 accent: "#DC2626",
 gridSpan: "half",
 image: projectImg("ctc"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("ctc"),
 caption: "Canadian Tire, enterprise retail digital experience",
 },
 ],
 overview:
 "I worked as a Senior UX Designer inside Canadian Tire’s digital ecosystem, collaborating across UX, BA, research, QA and development teams, and contributing to experiences across Canadian Tire, Sport Chek, Mark’s and Party City.",
 challenge:
 "Enterprise retail complexity is understandable inside the organization. From the customer’s perspective, most of it should disappear, can I get this, how much is it, is it near me, and what do I do next?",
 process: [
 {
 phase: "01",
 title: "Requirements to experience",
 description:
 "Translated business rules and BA requirements into user flows that answered when, why and what happens next, including store context and edge cases.",
 },
 {
 phase: "02",
 title: "Discovery & fulfillment",
 description:
 "Designed product discovery, listing and detail experiences that keep merchandise central while supporting filters, local inventory and pickup or delivery decisions.",
 },
 {
 phase: "03",
 title: "Collaborate & QA",
 description:
 "Worked with research, developers and QA to validate assumptions, negotiate technical constraints and resolve edge cases before and after implementation.",
 },
 ],
 deliverables: [
 "Enterprise ecommerce UX and information architecture",
 "User flows, wireframes and prototypes",
 "Responsive and accessibility-conscious patterns",
 "Cross-team collaboration with BA, research, QA and development",
 ],
 outcomes: [
 "Customer-facing experiences that connect requirements, research and technology at Canadian Tire scale",
 "Clearer paths from discovery through store context, fulfillment and services",
 "Consistency across a multi-brand enterprise ecosystem",
 ],
 },
 {
 slug: "marks",
 title: "Mark's",
 shortTitle: "Mark's",
 subtitle: "Designing retail experiences for work and everyday life",
 description:
 "Senior UX design for Mark’s, helping customers shop workwear, safety footwear and everyday apparel inside one enterprise retail experience.",
 year: "2023",
 role: "Senior UX Designer · Enterprise Ecommerce",
 tags: ["Enterprise", "Ecommerce", "Workwear", "Cross Functional"],
 accent: "#FB923C",
 gridSpan: "half",
 image: projectImg("marks"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("marks"),
 caption: "Mark’s, work and everyday retail digital experience",
 },
 ],
 overview:
 "I worked as a Senior UX Designer within the Canadian Tire Corporation digital organization, contributing to experiences across Mark’s, Canadian Tire, Sport Chek and Party City, with this case study focused on Mark’s.",
 challenge:
 "Mark’s serves very different intents in one storefront, casual style decisions beside work boots and PPE where specifications can affect the job. The challenge was supporting both without making Mark’s feel like several unrelated websites.",
 process: [
 {
 phase: "01",
 title: "Requirements to decisions",
 description:
 "Translated BA and business requirements into journeys that help customers understand whether a product fits their work or everyday needs.",
 },
 {
 phase: "02",
 title: "Workwear & everyday discovery",
 description:
 "Supported listing and detail experiences where technical attributes, fit, size and availability shape confident purchase decisions.",
 },
 {
 phase: "03",
 title: "Collaborate across disciplines",
 description:
 "Worked with research, developers and QA so edge cases, accessibility and responsive behaviour strengthened the live Mark’s experience.",
 },
 ],
 deliverables: [
 "Enterprise ecommerce UX and information architecture",
 "User flows, wireframes and prototypes",
 "Responsive and accessibility-conscious patterns",
 "Cross-team collaboration with BA, research, QA and development",
 ],
 outcomes: [
 "Customer-facing Mark’s experiences inside a large Canadian retail organization",
 "Clearer paths for workwear requirements and everyday shopping in one system",
 "Complexity kept behind the scenes, clear decisions in front of the customer",
 ],
 },
 {
 slug: "sportchek",
 title: "Sport Chek",
 shortTitle: "Sport Chek",
 subtitle: "Designing retail experiences for how Canadians move",
 description:
 "Senior UX design for Sport Chek, helping customers find footwear, apparel, equipment and services inside one of Canada’s largest active lifestyle retail ecosystems.",
 year: "2022",
 role: "Senior UX Designer · Enterprise Ecommerce",
 tags: ["Enterprise", "Ecommerce", "Sports", "Cross Functional"],
 accent: "#E11D2E",
 gridSpan: "half",
 image: projectImg("sportchek"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("sportchek"),
 caption: "Sport Chek, sports retail digital experience",
 },
 ],
 overview:
 "I worked as a Senior UX Designer within the Canadian Tire Corporation digital organization, collaborating across UX teams and contributing to experiences across Sport Chek, Canadian Tire, Mark’s and Party City, with this case study focused on Sport Chek.",
 challenge:
 "Sport Chek is not a single shopping journey. Runners, hockey parents, outdoor shoppers and lifestyle browsers all enter one storefront. The challenge was making a large retail experience feel focused, organizing complexity around the customer’s task.",
 process: [
 {
 phase: "01",
 title: "Requirements to journeys",
 description:
 "Translated BA and business requirements into customer journeys that answered why, where, what comes first and what happens when information is unavailable.",
 },
 {
 phase: "02",
 title: "Discovery, size & fulfillment",
 description:
 "Supported product discovery, listing and detail experiences where size, local inventory and pickup or shipping options shape the purchase decision.",
 },
 {
 phase: "03",
 title: "Collaborate across disciplines",
 description:
 "Worked with research, developers and QA so edge cases, accessibility and responsive behaviour strengthened the final Sport Chek experience.",
 },
 ],
 deliverables: [
 "Enterprise ecommerce UX and information architecture",
 "User flows, wireframes and prototypes",
 "Responsive and accessibility-conscious patterns",
 "Cross-team collaboration with BA, research, QA and development",
 ],
 outcomes: [
 "Customer-facing Sport Chek experiences inside one of Canada’s largest retail organizations",
 "Clearer paths from discovery through size, availability and fulfillment",
 "Complexity kept behind the scenes, one focused experience in front of the customer",
 ],
 },
 {
 slug: "partycity",
 title: "Party City",
 shortTitle: "Party City",
 subtitle: "Designing digital experiences around life's moments",
 description:
 "Senior UX design for Party City, helping customers turn occasions, themes and celebrations into complete shopping journeys inside an enterprise retail ecosystem.",
 year: "2022",
 role: "Senior UX Designer · Enterprise Ecommerce",
 tags: ["Enterprise", "Ecommerce", "Occasions", "Seasonal"],
 accent: "#7C3AED",
 gridSpan: "half",
 image: projectImg("partycity"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("partycity"),
 caption: "Party City, occasion-driven retail digital experience",
 },
 ],
 overview:
 "I worked as a Senior UX Designer within the Canadian Tire corporate digital organization, collaborating across UX teams and contributing to experiences across Party City, Canadian Tire, Sport Chek and Mark’s, with this case study focused on Party City.",
 challenge:
 "Unlike traditional ecommerce where customers often begin with a product, Party City customers often begin with something broader: I have something to celebrate. The challenge was turning that intention into everything required to make the event happen.",
 process: [
 {
 phase: "01",
 title: "From occasion to products",
 description:
 "Translated requirements into journeys that help customers move from events, themes and colours into relevant product collections.",
 },
 {
 phase: "02",
 title: "Seasonal & balloon experiences",
 description:
 "Supported patterns that adapt for Halloween, birthdays and other peaks, including balloon journeys that blend product and service behaviours.",
 },
 {
 phase: "03",
 title: "Collaborate across disciplines",
 description:
 "Worked with research, BAs, developers and QA so edge cases, availability and responsive behaviour strengthened the live experience.",
 },
 ],
 deliverables: [
 "Enterprise ecommerce UX and information architecture",
 "User flows, wireframes and prototypes",
 "Responsive and accessibility-conscious patterns",
 "Cross-team collaboration with BA, research, QA and development",
 ],
 outcomes: [
 "Customer-facing Party City experiences inside a large Canadian retail organization",
 "Clearer paths from celebration intent through discovery, availability and purchase",
 "Complexity kept behind the scenes, planning feels easier in front of the customer",
 ],
 },
 {
 slug: "walmart",
 title: "Walmart Retail Experience",
 shortTitle: "Walmart",
 subtitle: "Retail and e-commerce UX overhaul",
 description:
 "UX overhaul for retail and e-commerce flows, from search and discovery through checkout and pickup.",
 year: "2022",
 role: "Lead UI/UX Designer",
 tags: ["Retail", "E-commerce", "Enterprise"],
 accent: "#0071CE",
 gridSpan: "half",
 image: projectImg("walmart"),
 gallery: [
 { type: "image" as const, src: img(1441986300917, 1400, 900), caption: "Product discovery redesign"},
 { type: "image" as const, src: img(1472851294708, 1400, 900), caption: "Cart and checkout flow"},
 ],
 overview:
 "Walmart needed digital shopping to feel as straightforward as walking an aisle. The overhaul targeted search relevance, filter clarity, and checkout speed.",
 challenge:
 "Massive catalog, aggressive promotional complexity, and users who split between mobile browsing and in-store pickup.",
 process: [
 {
 phase: "01",
 title: "Journey mapping",
 description:
 "Mapped end-to-end paths for pickup, delivery, and browse-only shoppers across web and app.",
 },
 {
 phase: "02",
 title: "Search and filters",
 description:
 "Redesigned PLP filters, sort logic, and result cards to reduce pogo-sticking between pages.",
 },
 {
 phase: "03",
 title: "Checkout simplification",
 description:
 "Reduced steps, surfaced fees early, and aligned pickup slot selection with inventory confidence.",
 },
 ],
 deliverables: [
 "Search and PLP redesign",
 "Checkout flow v2",
 "Pickup slot selector",
 "Responsive component updates",
 ],
 outcomes: [
 "Search-to-cart conversion up 19%",
 "Checkout abandonment down 14%",
 "Pickup satisfaction score increased 11 points",
 ],
 },
 {
 slug: "anova",
 title: "Digital Oven Guide",
 shortTitle: "Digital Oven Guide",
 subtitle: "Designing a native cooking experience around a physical product",
 description:
 "Solo UX/UI and content design for a native oven companion app, guiding users from what they want to cook to clear oven setup, progress and completion.",
 year: "2022",
 role: "Solo UX/UI and Content Designer",
 tags: ["Native App", "Product Design", "UX Writing", "Design System"],
 accent: "#F97316",
 gridSpan: "half",
 image: projectImg("anova"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("anova"),
 caption: "Digital Oven Guide, native cooking companion",
 },
 ],
 figmaUrl: "https://www.figma.com/design/ztA6OE75zCogvR0m66KUsX/Anova-Guide-Page",
 secondaryFigmaUrl: "https://www.figma.com/design/8l0tXjOO3JoMJp7mS0mpkk/Anova-Guide-high-level-flow",
 secondaryFigmaLabel: "High-level app flow",
 overview:
 "I worked as the sole UX/UI and Content Designer on a 24-person multidisciplinary team, owning the experience from product thinking through design system, flows, interface, native patterns, content and implementation support.",
 challenge:
 "A physical appliance is built around functions. Users think about outcomes. The Digital Oven Guide needed to translate cooking modes, temperatures and rack positions into human decisions, starting with the food, not the appliance setting.",
 process: [
 {
 phase: "01",
 title: "Start with the food",
 description:
 "Organized the experience around familiar goals (chicken, bread, pizza, steak) then introduced technical settings only when they became relevant.",
 },
 {
 phase: "02",
 title: "Guided cooking journey",
 description:
 "Designed choose → prepare → set oven → cook → complete with clear hierarchy, timers, progress and one-step-at-a-time content.",
 },
 {
 phase: "03",
 title: "System, build & QA",
 description:
 "Built the design system alongside the product, worked hand-in-hand with developers, and stayed through design QA so the live app matched the intended experience.",
 },
 ],
 deliverables: [
 "Product UX, IA and user flows for the native app",
 "UI design, native patterns and design system",
 "UX writing and product content across guidance states",
 "Developer collaboration, design QA and iteration",
 ],
 outcomes: [
 "A connected native experience that helps users move from uncertainty to action",
 "One product language across UX, UI, content, components and states",
 "Guidance that feels simple while appliance complexity stays behind the experience",
 ],
 },
 {
 slug: "ymca",
 title: "YMCA Member App",
 shortTitle: "YMCA",
 subtitle: "Designing the digital experience around the member",
 description:
 "Solo UX/UI, content and product architecture for a native YMCA member app, organizing facilities, activities and everyday member needs into one clear mobile experience.",
 year: "2023",
 role: "Solo UX/UI, Content and Product Architecture Designer",
 tags: ["Native App", "Product Architecture", "Design System", "UX Writing"],
 accent: "#C8102E",
 gridSpan: "half",
 image: projectImg("ymca"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("ymca"),
 caption: "YMCA Member App, home and member orientation",
 },
 ],
 figmaUrl: "https://www.figma.com/design/HgLHwG9Xmw2QgXCRGucFDh/YMCA-Handoff",
 overview:
 "I worked as the solo UX/UI, Content and Product Architecture Designer on a 15-person multidisciplinary team, owning the experience from product structure and information architecture through flows, interface, design system, content, prototypes and implementation support.",
 challenge:
 "Large organizations contain complexity, different services, teams, programs and systems. Members should not need to understand that structure. The app needed to answer: What can I do? What is relevant to me? Where do I need to go? What is happening next?",
 process: [
 {
 phase: "01",
 title: "Architecture before screens",
 description:
 "Defined the product as a system, primary member goals, what belongs together, what is global vs secondary, and how navigation stays clear as the product grows.",
 },
 {
 phase: "02",
 title: "Member journeys and home",
 description:
 "Mapped discovery through action and return, then designed a home experience that answers what matters right now without becoming a directory of every feature.",
 },
 {
 phase: "03",
 title: "System, content and build",
 description:
 "Built the design system and product language alongside the app, balanced marketing with member utility, and partnered with BAs and developers through design QA.",
 },
 ],
 deliverables: [
 "Product architecture and information architecture",
 "Native UX/UI, user flows and prototypes",
 "Design system, components and accessibility states",
 "UX writing, stakeholder collaboration and design QA",
 ],
 outcomes: [
 "A connected native member experience organized around real intentions",
 "One product language across architecture, interface and content",
 "Know what is available. Know where to go. Know what to do next.",
 ],
 },
 {
 slug: "ppjv",
 title: "Internal Banking Dashboard",
 shortTitle: "PPJV",
 subtitle: "Designing the system behind complex financial operations",
 description:
 "Senior UX/UI and content design plus Aurora design system leadership for an internal banking dashboard, making high-density financial workflows clear, consistent and actionable.",
 year: "2023",
 role: "Senior UX/UI & Content Designer · Design System Lead",
 tags: ["Enterprise Fintech", "Design System", "Dashboard", "UX Writing"],
 accent: "#2563EB",
 gridSpan: "half",
 image: projectImg("ppjv"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("ppjv"),
 caption: "Internal Banking Dashboard, operational overview",
 },
 ],
 figmaUrl: "https://www.figma.com/design/lCkuJJCNMUhCTFQAOSA85E/Handoff-file",
 secondaryFigmaUrl: "https://www.figma.com/design/8uI6GauoTwcBRWSV4yxBJb/PPJV-Design-System---Aurora",
 secondaryFigmaLabel: "Aurora Design System",
 overview:
 "I worked as Senior UX/UI and Content Designer and Design System Lead on a 58-person multidisciplinary team (alongside one additional UX Designer) designing product experiences, leading the Aurora design system, and collaborating with stakeholders, BAs, QA and client developers through implementation.",
 challenge:
 "Internal banking cannot hide essential information for a cleaner screenshot. The UX challenge was making complexity usable (status, history, ownership, financial data, permissions and next actions) so professionals could decide quickly, accurately and consistently.",
 process: [
 {
 phase: "01",
 title: "Rules to experience",
 description:
 "Translated business logic with BAs and stakeholders into flows that communicate conditions, available actions, failures and recovery, not just happy paths.",
 },
 {
 phase: "02",
 title: "Architecture and dashboard hierarchy",
 description:
 "Structured the product as a system (navigation, persistent context, related records and attention hierarchy) so dense workflows stayed scannable.",
 },
 {
 phase: "03",
 title: "Aurora system and design QA",
 description:
 "Led Aurora foundations, components, states and documentation, then stayed through developer collaboration and design QA so consistency survived production.",
 },
 ],
 deliverables: [
 "Dashboard UX, IA and complex financial workflows",
 "Aurora design system, foundations, components and docs",
 "UX writing, status patterns, tables, forms and errors",
 "Developer handoff, collaboration and design QA",
 ],
 outcomes: [
 "A structured product language for complex financial operations",
 "Aurora as a shared foundation across design and development",
 "Complexity stayed in the business, the interface created structure around it",
 ],
 },
 {
 slug: "first-principles",
 title: "Saence AI",
 shortTitle: "Saence AI",
 subtitle: "Designing an AI conversation experience from the ground up",
 description:
 "Solo UX/UI design for Saence AI, an early-stage conversational product where asking a question becomes the interface.",
 year: "2025",
 role: "Solo UX/UI Designer",
 tags: ["AI", "Conversation Design", "Startup", "Design System"],
 accent: "#2563EB",
 gridSpan: "half",
 image: projectImg("first-principles"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("first-principles"),
 caption: "Saence AI, conversation at the centre of the product",
 },
 ],
 figmaUrl: "https://www.figma.com/design/S2xz1AdpOD04JphAfeilZu/Pages-Handoff---Hub---Site",
 secondaryFigmaUrl: "https://www.figma.com/design/ONbT13PCxxHBc9NegeowVz/FirstPrinciples-DS",
 secondaryFigmaLabel: "Design system",
 overview:
 "As the solo UX/UI Designer on a seven-person startup team, I shaped how Saence AI should work, look and feel while the product was still being defined. Design was part of product strategy, not a late handoff.",
 challenge:
 "A blank conversational input can feel powerful or confusing. The interface needed to help people understand what to ask, what the system was doing and how to continue, without turning AI into another complicated menu.",
 process: [
 {
 phase: "01",
 title: "Start with conversation",
 description:
 "Defined the product around asking, receiving and continuing, then decided which supporting areas belong outside the chat.",
 },
 {
 phase: "02",
 title: "Design states, not only screens",
 description:
 "Mapped empty, sending, thinking, responding, complete and error states so the system felt alive without feeling technical.",
 },
 {
 phase: "03",
 title: "Build the system with the product",
 description:
 "Created foundations and reusable chat patterns alongside founders and developers as features moved into the build.",
 },
 ],
 deliverables: [
 "Conversation UX and empty-state strategy",
 "Chat and AI response patterns across content lengths",
 "Input, history and supporting product architecture",
 "Design system for a fast-moving startup team",
 "Responsive layouts and design QA through implementation",
 ],
 outcomes: [
 "A conversational product centred on ask, receive and continue",
 "Clear system feedback without exposing model complexity",
 "A shared visual language across chat, search and supporting surfaces",
 "Design decisions that stayed connected to the real product build",
 ],
 },
 {
 slug: "westjet",
 title: "WestJet",
 shortTitle: "WestJet",
 subtitle: "Reimagining the journey from ticket to takeoff",
 description:
 "Creative direction and proposal lead design for a native WestJet experience spanning ticketing, check-in, baggage and operations. One connected journey from passenger to airline systems.",
 year: "2024",
 role: "Creative Director · Proposal Lead Designer",
 tags: ["Airline", "Native App", "Proposal", "Creative Direction"],
 accent: "#0EA5A8",
 gridSpan: "half",
 image: projectImg("westjet"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("westjet"),
 caption: "WestJet, from ticket to takeoff",
 },
 ],
 figmaUrl: "https://www.figma.com/design/xbi0fqTCZrKHT4SVaM1R39/WestJet---ticketing--check-in--baggage-handling--and-maintenance--Copy-",
 secondaryFigmaUrl: "https://www.figma.com/board/AYllSbk9AqPFPY7vi1DetA/WestJet---ticketing--check-in--baggage-handling--and-maintenance",
 secondaryFigmaLabel: "Proposal board",
 overview:
 "As Creative Director and Proposal Lead Designer on a five-person team, I shaped the product vision, proposal story and native application concepts across ticketing, check-in, baggage handling and operational experiences, working directly with WestJet stakeholders from early conversations through high-fidelity pages.",
 challenge:
 "Passengers experience one journey. Airlines run many systems. The proposal explored how digital experiences could reduce uncertainty across the trip and connect customer-facing moments with the operations that keep aircraft, baggage and services moving.",
 process: [
 {
 phase: "01",
 title: "Vision before screens",
 description:
 "Built a proposal narrative from challenge to opportunity to vision, so stakeholders could understand why the experience should exist and what it could feel like.",
 },
 {
 phase: "02",
 title: "One journey, two perspectives",
 description:
 "Mapped passenger moments from book to fly alongside baggage, ground ops, aircraft and maintenance, identifying where information needed to move between stages.",
 },
 {
 phase: "03",
 title: "From board to high fidelity",
 description:
 "Moved from FigJam thinking into native application pages, trip hierarchy that evolves with time, guided check-in, baggage reassurance and boarding clarity.",
 },
 ],
 deliverables: [
 "Creative direction and proposal storytelling",
 "Journey maps across passenger and operations",
 "Native UX/UI concepts for ticketing, check-in and baggage",
 "High-fidelity screens and stakeholder presentations",
 ],
 outcomes: [
 "A tangible vision connecting ticket to takeoff",
 "Passenger and operational concepts sharing one journey story",
 "From ticket to takeoff. One connected journey.",
 ],
 },
 {
 slug: "polard",
 title: "Lottery Business Portal",
 shortTitle: "Lottery Portal",
 subtitle: "Designing clear business workflows behind a complex lottery ecosystem",
 description:
 "Senior UX/UI design for a lottery business web portal and connected native mobile app, turning operational complexity into clear, repeatable workflows.",
 year: "2023",
 role: "Senior UX/UI Designer",
 tags: ["Enterprise Portal", "Lottery", "Web + Mobile", "Dashboard"],
 accent: "#7C3AED",
 gridSpan: "half",
 image: projectImg("polard"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("polard"),
 caption: "Lottery Business Portal, dashboard and workflows",
 },
 ],
 figmaUrl: "https://www.figma.com/design/pYHsJIZqaLrJgRSzlU28fI/-WV--Web-Business-Portal",
 secondaryFigmaUrl: "https://www.figma.com/design/aK8AKRHXkJHUWJuoEf8PMI/-KS--Mobile-App",
 secondaryFigmaLabel: "Mobile application",
 overview:
 "As Senior UX/UI Designer on a five-person team, I designed business portal experiences for a lottery organization, translating operational requirements into clear digital workflows across a web Business Portal and a native mobile application.",
 challenge:
 "Lottery products look simple from the customer side. Behind them sit retail operations, accounts, products, transactions, reporting, permissions and support. The UX challenge was organizing that complexity without hiding what matters.",
 process: [
 {
 phase: "01",
 title: "Architecture before pages",
 description:
 "Defined portal structure (primary areas, global vs record actions, related information and how the experience grows) so users always know where they are before what they can do.",
 },
 {
 phase: "02",
 title: "Dashboard, tables and workflows",
 description:
 "Designed hierarchy for attention, data-dense interfaces, tables as interaction systems and complete find → review → act → confirm journeys.",
 },
 {
 phase: "03",
 title: "Web to mobile consistency",
 description:
 "Adapted product language across desktop density and mobile prioritization, shared terminology, status and principles without forcing identical layouts.",
 },
 ],
 deliverables: [
 "Business portal UX/UI and information architecture",
 "Dashboard, tables, forms and status patterns",
 "Responsive web and native mobile design",
 "Prototypes, client collaboration and implementation support",
 ],
 outcomes: [
 "Clearer digital experiences for complex lottery business workflows",
 "Shared UX thinking across web portal and mobile product contexts",
 "Complex business operations. Clear digital workflows.",
 ],
 },
 {
 slug: "ava",
 title: "AVA",
 shortTitle: "AVA",
 subtitle: "From an idea to a live creative platform",
 description:
 "End-to-end product design and development for a kinetic typography studio: create, animate, save, embed and export in one workflow.",
 year: "2024",
 role: "End to End Product Designer & Full Stack Product Builder",
 tags: ["Startup", "SaaS", "Full Stack", "Design System"],
 accent: "#F472B6",
 gridSpan: "half",
 image: projectImg("ava"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("ava"),
 caption: "AVA, kinetic typography studio",
 },
 ],
 liveUrl: "https://is-studio-hub.github.io/ava/index.html",
 overview:
 "I worked directly with the founders and CEO to turn AVA from an idea into a live web product, designing the experience, building the application and shipping it to production.",
 challenge:
 "Creative software has a natural tension. More control creates more possibility and more complexity. AVA needed powerful Studio controls without making experimentation feel technical.",
 process: [
 {
 phase: "01",
 title: "Map the creative loop",
 description:
 "Translated product ideas into source, shape, style, animate, save and export rather than isolated screens.",
 },
 {
 phase: "02",
 title: "Design the Studio",
 description:
 "Kept the canvas dominant and organized controls around creative intent with immediate visual feedback.",
 },
 {
 phase: "03",
 title: "Build and ship the system",
 description:
 "Implemented library, accounts, plans, embeds and QA so the interactive experiment became a complete product.",
 },
 ],
 deliverables: [
 "Studio UX, UI and interaction design",
 "Design system across creative and SaaS surfaces",
 "Frontend, architecture and product infrastructure",
 "Library, embeds, accounts and subscription UX",
 ],
 outcomes: [
 "A live creative platform from blank field to embed and video",
 "One owner across product, design, development and quality",
 "A design system that evolved with the real application",
 ],
 },
 {
 slug: "50nny",
 title: "50NNY",
 shortTitle: "50NNY",
 subtitle: "Designing and building the system behind smarter AI",
 description:
 "End-to-end product design and development for a multimodal memory API: upload, process, store, test and reuse AI context in one workflow.",
 year: "2024",
 role: "End to End Product Designer & Full Stack Product Builder",
 tags: ["Startup", "AI", "Full Stack"],
 accent: "#FBBF24",
 gridSpan: "half",
 image: projectImg("50nny"),
 gallery: [
 {
 type: "image" as const,
 src: projectImg("50nny"),
 caption: "50NNY, multimodal memory platform",
 },
 ],
 overview:
 "I worked directly with the founders and CEO to take 50NNY from an early product idea to a functioning live application across UX, UI, design system, frontend, architecture, content, accessibility, testing and QA.",
 challenge:
 "How do we make powerful AI infrastructure feel manageable? The product needed to be technical enough for real workflows while remaining understandable enough to learn without constant documentation.",
 process: [
 {
 phase: "01",
 title: "Define the interaction model",
 description:
 "Organised the product around input → process → understand → store → reuse.",
 },
 {
 phase: "02",
 title: "Design states and systems",
 description:
 "Built visible feedback for memory, API testing, datasets and multimodal input.",
 },
 {
 phase: "03",
 title: "Build and ship",
 description:
 "Implemented, tested and shipped the live platform with the founders.",
 },
 ],
 deliverables: [
 "Multimodal memory and developer platform UX/UI",
 "Design system and technical components",
 "Frontend, architecture and database structure",
 "API playground, docs, auth and production QA",
 ],
 outcomes: [
 "Live multimodal memory platform on Railway",
 "Connected workflow from upload to reusable context",
 "One owner across product, design, development and quality",
 ],
 },
];

/** Home page section order, Corporates then Startups. */
export const CORPORATE_SLUGS = [
 "gom",
 "csc",
 "slt",
 "zg",
 "ctc",
 "marks",
 "sportchek",
 "partycity",
 "walmart",
 "anova",
 "ymca",
 "ppjv",
 "westjet",
 "polard",
] as const;

export const STARTUP_SLUGS = [
 "weebo",
 "CHaPPie",
 "gigz",
 "first-principles",
 "ava",
 "50nny",
] as const;

const bySlug = (list: readonly string[]) =>
 list
 .map((slug) => projects.find((p) => p.slug === slug))
 .filter((p): p is Project => Boolean(p));

export const projects: Project[] = (() => {
 const mapped = rawProjects.map((base) => ({
 ...base,
 ...caseStudyData[base.slug],
 })) as Project[];
 const order = [...CORPORATE_SLUGS, ...STARTUP_SLUGS];
 const ordered = order
 .map((slug) => mapped.find((p) => p.slug === slug))
 .filter((p): p is Project => Boolean(p));
 const leftovers = mapped.filter((p) => !order.includes(p.slug as (typeof order)[number]));
 return [...ordered, ...leftovers];
})();

export const corporateProjects = bySlug(CORPORATE_SLUGS);
export const startupProjects = bySlug(STARTUP_SLUGS);

export function getProject(slug: string): Project | undefined {
 // Keep old /project/obs links working after the CH4PP!3 rename.
 const normalized = slug === "obs"? "CHaPPie": slug;
 return projects.find((p) => p.slug === normalized);
}

export function getAdjacentProjects(slug: string): {
 prev: Project | null;
 next: Project | null;
} {
 const normalized = slug === "obs"? "CHaPPie": slug;
 const index = projects.findIndex((p) => p.slug === normalized);
 if (index === -1) return { prev: null, next: null };
 return {
 prev: index > 0 ? projects[index - 1] : null,
 next: index < projects.length - 1 ? projects[index + 1] : null,
 };
}
