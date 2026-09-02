import type { CaseStudyExtras } from "./types";

const p = (slug: string, file: string) => `/projects/${slug}/${file}`;

export const caseStudyData: Record<string, CaseStudyExtras> = {
 gom: {
 impact:
 "Connected Customer, Vendor, Issuer and Admin experiences (with a shared design system and content approach) for Government of Manitoba licensing.",
 client: "Government of Manitoba",
 timeline: "Multi-year delivery · live at manitobaelicensing.ca",
 team: "UX and Content Lead · led a team of two · 65 person multidisciplinary delivery team",
 tools: ["Figma", "FigJam", "Design System", "Content strategy", "Design QA", "Accessibility review"],
 liveUrl: "https://www.manitobaelicensing.ca/public/home",
 context:
 "Government licensing systems are more complex than they appear from the outside. The platform needed to serve members of the public while also supporting the people responsible for selling, issuing, reviewing and administering licences behind the scenes. My responsibility was to help make those experiences feel like parts of one product rather than disconnected systems.",
 goals: [
 "Customer Portal, clear public discovery, account access and purchase confidence",
 "Vendor Portal, fast, repeatable operational workflows with fewer errors",
 "Issuer Portal, support users completing actions on behalf of another person",
 "Admin System, information density, consistency and clear system feedback",
 "Design System, shared patterns across the ecosystem",
 "UX Content, responsive experience, accessibility and design QA",
 ],
 research: [
 {
 title: "Business rules into journeys",
 description:
 "A requirement might explain what the system must technically do, but that does not automatically explain how a person should experience it. I looked at complete tasks (decisions, blockers, error states and what needed to stay visible) instead of designing screen by screen.",
 },
 {
 title: "Cross-discipline collaboration",
 description:
 "Worked directly with Business Analysts on rules and edge cases, developers on technical realism and documentation, QA on implementation fidelity, and the client on reviews, decisions and continuous improvement.",
 },
 {
 title: "Ecosystem consistency audit",
 description:
 "As the project expanded from the Customer Portal to Vendor, Issuer and Admin experiences, I oversaw UX, UI, content and design consistency so similar actions would not drift apart across portals.",
 },
 ],
 insights: [
 "The more complex the system is behind the interface, the simpler the experience needs to feel in front of it",
 "Good UX does not remove complexity from the business, it organizes it so users do not have to understand the entire system first",
 "Customer, vendor, issuer and admin needs cannot be identical, but they must share foundations",
 "On a 65 person project, design quality depends on shared understanding before features reach production",
 ],
 solutions: [
 {
 title: "Customer Portal",
 description:
 "The public facing experience needed to make it easy to understand what could be purchased, create or access an account, find the right licence or permit, and complete the task with confidence, covering park vehicle permits, fishing, hunting, forestry, trapping, draws and other regulated activities.",
 image: p("gom", "solution-1.png"),
 },
 {
 title: "Vendor Portal",
 description:
 "Designed around speed, repeatable workflows, customer lookup, transactions and operational clarity, helping organizations complete frequent tasks efficiently while reducing the risk of errors.",
 image: p("gom", "solution-2.png"),
 },
 {
 title: "Issuer Portal",
 description:
 "Supported users helping customers purchase and manage licences on behalf of another person, adding complexity around identification, eligibility, account information, licence selection and transaction states.",
 image: p("gom", "solution-3.png"),
 },
 {
 title: "Admin System",
 description:
 "Prioritized information density, consistency, efficiency and clear system feedback for users who need visibility and control over products, rules, users and operational workflows.",
 image: p("gom", "solution-4.png"),
 },
 ],
 learnings: [
 "Working across customer, vendor, issuer and administrative experiences meant thinking about UX at a product ecosystem level, not only at the screen level",
 "Strong products happen when design, content, business analysis, development, QA and the client work toward the same experience",
 "Designing Manitoba eLicensing meant connecting government rules, operational processes, transactions and multiple user groups into one understandable digital ecosystem",
 ],
 metrics: [
 { value: "4", label: "Connected experiences, Customer, Vendor, Issuer, Admin"},
 { value: "65", label: "Person multidisciplinary delivery team"},
 { value: "Live", label: "Public portal at manitobaelicensing.ca"},
 ],
 overview:
 "I led a team of two and owned the UX, UI and content direction across multiple connected products, including the Customer Portal, Admin System, Vendor Portal and Issuer Portal. My role went beyond designing individual screens, I was responsible for creating a consistent experience across the ecosystem, establishing the design system, defining content patterns and working closely with Business Analysts, QA specialists, developers and the client throughout delivery.",
 challenge:
 "The project was not a single website. It was an ecosystem of connected experiences designed for people with very different goals, levels of experience and responsibilities, and it needed to feel like one product.",
 process: [
 {
 phase: "01",
 title: "Turning requirements into experiences",
 description:
 "Translated complicated business requirements into understandable user journeys. Asked what the user was trying to accomplish, what information they needed, what could prevent them from continuing, what happens when something goes wrong, and what should happen next.",
 },
 {
 phase: "02",
 title: "Designing for complex decisions",
 description:
 "Product discovery and checkout needed to help users understand whether they were selecting the correct option before completing a transaction. Clear hierarchy, progressive disclosure, contextual information and consistent language became core tools.",
 },
 {
 phase: "03",
 title: "Content was part of the UX",
 description:
 "Shaped page titles, instructions, form labels, helper text, validation messages, error states, confirmations, navigation, buttons, product information and transactional messaging so users would not have to interpret the interface before using it.",
 },
 {
 phase: "04",
 title: "Design system across portals",
 description:
 "Established shared patterns for typography, colour, spacing, forms, buttons, navigation, alerts, tables, cards, modals and validation, creating a common language between UX, development, QA, Business Analysts and the client.",
 },
 {
 phase: "05",
 title: "From design to production",
 description:
 "Stayed involved through implementation, reviewing developed screens, resolving unexpected states with developers, and collaborating with QA when UX issues appeared. Small inconsistencies become large ones when patterns repeat across an ecosystem.",
 },
 ],
 deliverables: [
 "UX leadership across multiple connected applications",
 "Leadership of a two person UX and content team",
 "Customer Portal, Vendor Portal, Issuer Portal and Admin System UX/UI",
 "Information architecture, user flows and interaction design",
 "Responsive design and accessibility",
 "Design system creation and management",
 "UX writing and content strategy",
 "Developer collaboration, design QA, BA collaboration and client reviews",
 ],
 outcomes: [
 "Connected eLicensing ecosystem supporting public and operational government services",
 "Customers have a digital destination for discovering, purchasing and managing licences and permits",
 "Vendors and issuers have tools for serving customers and completing licensing transactions",
 "Administrators have operational interfaces to manage the system behind those experiences",
 "Shared design system and UX patterns created a foundation the platform could continue to grow on",
 ],
 gallery: [
 {
 type: "image",
 src: p("gom", "01-hero.png"),
 caption: "Customer Portal home, Manitoba eLicensing licence discovery",
 },
 {
 type: "video",
 src: p("gom", "portal-walkthrough.mp4"),
 poster: p("gom", "portal-home.png"),
 caption:
 "A walkthrough of the Manitoba eLicensing experience, from public licence discovery and purchasing to the systems supporting vendors, issuers and administrators",
 },
 {
 type: "image",
 src: p("gom", "02-detail.png"),
 caption: "Licence category cards, Park Vehicle Permit and outdoor services",
 },
 {
 type: "image",
 src: p("gom", "03-detail.png"),
 caption: "Responsive experience, desktop and mobile Customer Portal",
 },
 {
 type: "image",
 src: p("gom", "05-detail.png"),
 caption: "Global navigation, licence types, special permits and issuers",
 },
 {
 type: "image",
 src: p("gom", "06-detail.png"),
 caption: "Issuers search, finding in-person licensing support",
 },
 {
 type: "image",
 src: p("gom", "07-detail.png"),
 caption: "Mobile Customer Portal, designed for real outdoor contexts",
 },
 {
 type: "image",
 src: p("gom", "08-detail.png"),
 caption: "Special licences, regulated products with clear entry points",
 },
 {
 type: "image",
 src: p("gom", "portal-sign-in.png"),
 caption: "Secure citizen identity, account access before transactional flows",
 },
 ],
 narrative: [
 {
 eyebrow: "Ecosystem",
 title: "One platform, multiple experiences",
 body: [
 "The project was not a single website. It was an ecosystem of connected experiences designed for people with very different goals, levels of experience and responsibilities.",
 "The Customer Portal had to simplify complex government rules without removing information customers needed. The Vendor Portal prioritized speed and operational clarity. The Issuer experience supported completing actions on behalf of another person. The Admin System required information density, consistency and clear system feedback.",
 ],
 },
 {
 eyebrow: "Approach",
 title: "Designing for different users without creating different products",
 body: [
 "A customer purchasing a fishing licence has very different needs from a vendor completing transactions throughout the day. An administrator managing information has different needs again.",
 "The solution was consistent foundations (typography, components, interaction patterns, feedback and content principles) while information architecture, navigation and workflow density adapted to each user group.",
 ],
 },
 {
 eyebrow: "Team",
 title: "Working inside a 65 person team",
 body: [
 "Large digital products require UX to work as part of the delivery process, not beside it. Business Analysts defined requirements and business logic. UX translated those into usable experiences. Developers validated feasibility. QA identified edge cases. The client provided operational knowledge and feedback.",
 "My role often sat between these groups, making sure everyone shared the same understanding of how the product should behave before a feature reached production.",
 ],
 bullets: [
 "Accessibility influenced hierarchy, contrast, typography, forms, interaction states, errors, responsive behaviour and content",
 "Responsive behaviour was designed as part of the experience, not a final adaptation of desktop",
 "Operational portals prioritized desktop efficiency and information visibility",
 ],
 },
 ],
 closing:
 "Designing Manitoba eLicensing meant designing much more than an ecommerce experience. It meant connecting government rules, operational processes, transactions and multiple user groups into one understandable digital ecosystem. My role was to help make that complexity feel simple.",
 },

 nmbr: {
 impact: "One daily spend number replaced category overload, onboarding completion climbed past 80% at launch.",
 client: "NMBR (Series A fintech startup)",
 timeline: "5 months · 2024",
 team: "Lead UI/UX Designer · product manager · 2 engineers · behavioral researcher",
 tools: ["Figma", "Principle", "Mixpanel", "UserTesting", "Notion", "Linear"],
 context:
 "NMBR's founders saw a pattern in finance app churn: people opened budgeting tools, connected accounts, then abandoned them within a week. The product hypothesis was radical, give users one number they could trust instead of dashboards full of categories and guilt-inducing charts.",
 goals: [
 "Translate complex cash-flow math into a single, transparent daily spend limit",
 "Design onboarding that connects accounts in under five minutes",
 "Build trust so users understand how the number changes when they spend",
 "Create a mobile UI calm enough for daily check-ins, not monthly dread",
 ],
 research: [
 {
 title: "Abandoned-app interviews",
 description:
 "Interviewed 30 people who quit other finance apps within 30 days. Mapped emotional triggers around shame, confusion, and distrust of automated categorization.",
 },
 {
 title: "Number transparency tests",
 description:
 "Ran five prototype variants showing how the daily limit was calculated, users needed a tap-to-explain layer, not a spreadsheet.",
 },
 ],
 insights: [
 "Users trust a number more when they can see the three inputs that moved it",
 "Category budgets feel like homework; a daily limit feels like permission",
 "Onboarding fails when bank linking errors lack a human-readable recovery path",
 "Push notifications work only when they celebrate staying under limit, not nagging",
 ],
 solutions: [
 {
 title: "The spend number",
 description:
 "Designed a hero metric with expandable breakdown (bills, savings buffer, and days left in the cycle) so the math felt inspectable, not magical.",
 },
 {
 title: "Five-minute setup",
 description:
 "Built a guided onboarding flow with progressive account linking, plain-language consent screens, and skip paths for manual entry.",
 },
 {
 title: "Daily rhythm UI",
 description:
 "Created a home screen optimized for 10-second check-ins: today's number, recent transactions affecting it, and gentle overspend recovery prompts.",
 },
 ],
 learnings: [
 "Fintech trust is a UI problem as much as a security problem, transparency beats precision",
 "Behavioral design works when the default action is glance, not configure",
 ],
 metrics: [
 { value: "82%", label: "Onboarding completion at launch"},
 { value: "3×", label: "Daily active use vs. category-based prototype"},
 { value: "4.8", label: "App Store rating in first release window"},
 ],
 overview:
 "Most budgeting apps overwhelm people with categories and charts. NMBR gives users one clear answer: what can I spend right now? I led UI/UX from behavioral research through launch-ready mobile screens and the spend-number interaction model.",
 challenge:
 "Turn complex cash flow math into a single, trustworthy number that updates in real time without feeling like a black box. Every edge case (irregular income, shared accounts, mid-cycle bills) threatened to collapse the simplicity promise.",
 process: [
 {
 phase: "01",
 title: "Behavioral research",
 description:
 "Interviewed users who abandoned other finance apps. Synthesized emotional and functional barriers to daily budgeting tool use.",
 },
 {
 phase: "02",
 title: "Number model design",
 description:
 "Prototyped surfacing the daily spend limit with varying levels of calculation transparency. Validated tap-to-explain patterns in moderated sessions.",
 },
 {
 phase: "03",
 title: "Onboarding & trust flows",
 description:
 "Designed account linking, error recovery, and first-week education sequences that explained the logic without a tutorial wall.",
 },
 {
 phase: "04",
 title: "Launch polish & validation",
 description:
 "Ran usability tests on overspend states, notification tone, and settings depth. Handed off motion specs and component library for iOS build.",
 },
 ],
 deliverables: [
 "Mobile app UI kit and component library",
 "Onboarding and account-linking flows",
 "Spend number algorithm interaction spec",
 "Notification and overspend recovery patterns",
 "Usability test report and launch QA checklist",
 ],
 outcomes: [
 "Onboarding completion reached 82%, highest in competitive benchmark set",
 "Daily active use tripled against the category-based prototype arm",
 "Users described the product as calming in diary study follow-ups",
 "4.8 App Store rating with praise focused on simplicity, not features",
 ],
 gallery: [
 { type: "image", src: p("nmbr", "01-hero.png"), caption: "Daily spend number, hero home screen"},
 { type: "image", src: p("nmbr", "02-detail.png"), caption: "Tap-to-explain breakdown of the number"},
 { type: "image", src: p("nmbr", "03-detail.png"), caption: "Budget cycle overview and bills timeline"},
 { type: "image", src: p("nmbr", "04-detail.png"), caption: "Five-minute onboarding and bank linking"},
 { type: "image", src: p("nmbr", "05-detail.png"), caption: "Overspend recovery and gentle notifications"},
 ],
 },

 weebo: {
 impact:
 "From idea to live AI product, design, development, architecture and QA owned end to end with the founders.",
 client: "W3380 (early-stage AI startup)",
 timeline: "Ground-up product · design through production",
 team: "Product Designer & Full Stack Product Builder · founders · CEO · development collaborators",
 tools: ["Figma", "React", "Design system", "Database design", "AI UX", "QA"],
 liveUrl: "https://w3380-production.up.railway.app/home",
 context:
 "A project can contain hundreds of pieces of information (recordings, requirements, spreadsheets, PDFs, decisions) distributed across folders and tools. People search, teams repeat questions, and new members struggle to recover context. W3380 was built around a different idea: what if your project could answer questions about itself?",
 goals: [
 "Capture knowledge from documents, spreadsheets, images, meeting audio and structured forms",
 "Create a centralized, searchable project knowledge hub",
 "Design AI chat grounded in project data, not generic internet answers",
 "Connect insights to analytics and actionable tickets",
 "Ship a production web application with accessibility, testing and iteration",
 ],
 research: [
 {
 title: "Bigger than design handoff",
 description:
 "Worked with founders from questions like “What if users could upload an entire project and then talk to it?” through file types, processing states, AI access, permissions, database needs, mobile and accessibility, decisions that crossed UX, architecture, content and QA.",
 },
 {
 title: "AI only useful with the right context",
 description:
 "The challenge was not putting chat on a model. The experience had to continuously reinforce that answers came from captured project knowledge, shaping capture, organization, chat, history and output.",
 },
 {
 title: "Design and develop in the same loop",
 description:
 "Designed interactions, built them, used them, found problems, changed the design, updated implementation and tested again, the browser became part of the design process.",
 },
 ],
 insights: [
 "When you own getting a feature into production, every UI decision looks different, buttons connect to logic, forms to data, AI answers to knowledge",
 "A blank chat field is powerful and uncertain, users need to know what they can ask and what the AI knows",
 "AI products need content that explains what is happening without exposing unnecessary technical complexity",
 "Moving fast without a system creates disconnected patterns; every feature can introduce another exception",
 ],
 solutions: [
 {
 title: "Capture experience",
 description:
 "Made uploading PDFs, Excel, screenshots, images, meeting audio and structured forms feel easy while communicating processing, completion, failure and next steps.",
 image: p("weebo", "solution-1.png"),
 },
 {
 title: "Knowledge hub",
 description:
 "Designed the bridge from raw uploads to structured project memory, hierarchy, categories, search, states, permissions and empty/error patterns.",
 image: p("weebo", "solution-2.png"),
 },
 {
 title: "Chat with your project",
 description:
 "Built conversational UX for natural questions about goals, requirements, decisions and dependencies, with clear project context and response structure.",
 image: p("weebo", "solution-3.png"),
 },
 {
 title: "Analyze & act",
 description:
 "Connected analytics and intelligent ticketing so teams move from understanding to structured work across Jira, Asana or Trello.",
 image: p("weebo", "solution-4.png"),
 },
 ],
 learnings: [
 "Design becomes more interesting when you understand what exists underneath the interface",
 "W3380 was where design stopped being a handoff and became the product itself",
 "I didn't just design W3380, I built it",
 ],
 metrics: [
 { value: "1", label: "Product builder across design and development"},
 { value: "0→1", label: "From concept to live production app"},
 { value: "Live", label: "AI knowledge platform on Railway"},
 ],
 overview:
 "My involvement covered almost every layer, UX strategy, UI, design system, frontend, backend, database, architecture, AI experience, content, accessibility, testing, QA and production iteration. This was not a traditional design handoff. I was helping build the actual product.",
 challenge:
 "Most teams already have the information. The problem is finding it. W3380 turns captured project information into a living knowledge source teams can explore through AI, ask instead of search.",
 process: [
 {
 phase: "01",
 title: "Capture",
 description:
 "Designed multi-source intake so users understand what they can upload, what is processing, what completed or failed, where information went, and what to do next.",
 },
 {
 phase: "02",
 title: "Organize",
 description:
 "Built the knowledge hub as structured project memory (not isolated files) ready for search, review and AI retrieval.",
 },
 {
 phase: "03",
 title: "Ask",
 description:
 "Designed chat that helps users know what to ask, which project they are talking to, how answers are structured, and what happens when information cannot be found.",
 },
 {
 phase: "04",
 title: "Analyze & act",
 description:
 "Shaped analytics for scanning risks and trends, and ticket flows that turn conversational output into structured work.",
 },
 {
 phase: "05",
 title: "System & ship",
 description:
 "Created the design system alongside the product, implemented across frontend and data layers, tested real workflows, and shipped the live application.",
 },
 ],
 deliverables: [
 "Product thinking, feature definition and UX strategy",
 "UI, interaction design, responsive design and design system",
 "UX writing and content strategy",
 "Frontend implementation and backend functionality",
 "Database structure and application architecture",
 "Accessibility, functional testing, QA and production iteration",
 ],
 outcomes: [
 "Live AI-powered project knowledge system for capture, hub, chat, analytics and integrations",
 "Consistent product language across navigation, chat, uploads and system feedback",
 "Architecture that supports projects, conversations, knowledge processing and AI context",
 "Continuous design → build → break → fix → test → ship loop with founders",
 ],
 gallery: [
 {
 type: "image",
 src: p("weebo", "01-hero.png"),
 caption: "LIVE PRODUCT, W3380 home: smarter collaboration powered by your data",
 },
 {
 type: "image",
 src: p("weebo", "02-detail.png"),
 caption: "How it works, capture knowledge, hub, chat with data, analyze & decide",
 },
 {
 type: "image",
 src: p("weebo", "03-detail.png"),
 caption: "Key features and responsive experience, desktop and mobile",
 },
 {
 type: "image",
 src: p("weebo", "04-detail.png"),
 caption: "Product authentication, entry to the AI workspace",
 },
 {
 type: "image",
 src: p("weebo", "05-detail.png"),
 caption: "Why W3380, reduce miscommunication, speed decisions, retain knowledge",
 },
 {
 type: "image",
 src: p("weebo", "06-detail.png"),
 caption: "Pricing and product surfaces across devices",
 },
 {
 type: "image",
 src: p("weebo", "07-detail.png"),
 caption: "Sign up, from marketing site into the live application",
 },
 {
 type: "image",
 src: p("weebo", "08-detail.png"),
 caption: "Product evolution, interface, mind system and design system",
 },
 ],
 narrative: [
 {
 eyebrow: "Ecosystem",
 title: "Capture → Organize → Ask → Analyze → Act",
 body: [
 "The chatbot may be the most visible part of W3380, but the larger challenge was connecting knowledge capture, a centralized hub, project-specific AI chat, analytics, structured forms and workflow integrations into one product.",
 "That required consistency across navigation, interactions, terminology, data structures and visual language, so every system felt like part of the same experience.",
 ],
 },
 {
 eyebrow: "Build",
 title: "I didn't hand off the product. I built it.",
 body: [
 "Because I owned design and development, UX decisions immediately became architecture decisions, projects, conversations, processing states, permissions, AI context and analytics all needed data structures that matched the experience.",
 "Some ideas looked good in Figma but felt wrong when interactive. Some technical possibilities created better UX than the original design. Owning both disciplines let the product evolve quickly.",
 ],
 bullets: [
 "Design system built alongside the product, tokens, chat elements, upload states, empty and error patterns",
 "Content treated as interface, prompts, processing, errors and confirmations that explain what is happening next",
 "Accessibility, testing and QA applied to real workflows in the live application",
 ],
 },
 {
 eyebrow: "Result",
 title: "One product. Many disciplines. One owner.",
 body: [
 "W3380 became a live AI-powered project knowledge system. My role covered the journey from the first product conversations to the experience running in the browser.",
 "From idea to interface. From interface to architecture. From architecture to working product. From working product to production.",
 ],
 },
 ],
 closing:
 "I didn't just design W3380. I built it. Design stopped being a handoff and became the product itself.",
 },

 csc: {
 impact:
 "Helped create and evolve the design system behind One Kings Lane, reusable foundations that let teams move faster without losing the brand.",
 client: "One Kings Lane",
 timeline: "Senior UX · Design Systems · live at onekingslane.com",
 team: "Senior UX Designer · 10 person multidisciplinary team · UX, Product, Frontend, Engineering",
 tools: [
 "Figma",
 "Design Systems",
 "Component libraries",
 "Pattern documentation",
 "Design QA",
 "Developer collaboration",
 ],
 liveUrl: "https://www.onekingslane.com/",
 context:
 "One Kings Lane is a premium home and lifestyle destination offering designer, vintage and exclusive furniture and decor alongside interior design services and inspiration. The digital experience brings together a large product catalog, editorial brand expression, ecommerce functionality and services for both individual customers and professional designers.",
 goals: [
 "Audit recurring UI and interaction patterns across the live ecommerce experience",
 "Establish shared visual foundations, typography, spacing, colour, grid and states",
 "Design reusable components for real commerce: cards, navigation, filters, PDP, responsive rules",
 "Separate functional consistency from brand expression across three retail brands",
 "Document usage, variants and constraints so designers and developers share the same rules",
 "Close the gap between Figma intent and production through collaboration and design QA",
 ],
 research: [
 {
 title: "From screens to systems",
 description:
 "Before thinking about components, we needed to think about patterns. I looked across the existing product to understand where the same problems were being solved in different ways, which components were repeated, which variations were intentional, and which were simply the result of different teams working at different times.",
 },
 {
 title: "Auditing what already existed",
 description:
 "Building a design system for an established ecommerce product is different from creating one for a new application. There is already a live product, customer behaviours, development patterns, business requirements and edge cases. The audit exposed inconsistencies and clarified what should become part of the shared system.",
 },
 {
 title: "Designers and developers as users",
 description:
 "I treated the design system as a product. Designers were its users, their feedback determined what needed to change. I worked directly with developers on behaviour, variants, states, responsive rules, technical constraints and edge cases so the system could be built, not only documented.",
 },
 ],
 insights: [
 "A single button variation may seem insignificant, across hundreds of screens it becomes a system problem",
 "The goal is not to make every screen identical, it is to know where consistency improves the experience and where flexibility is necessary",
 "A component is more than its default state, disabled, long text, sale pricing, missing content and narrow layouts are part of the design",
 "Functional consistency and brand expression must stay separate, especially when one team supports multiple retail brands",
 "Figma consistency is not enough, if the live product behaves differently, the design system is only documentation",
 ],
 solutions: [
 {
 title: "Catalog & product cards",
 description:
 "Product cards appear everywhere and carry imagery, brand, name, pricing, promotions, availability, badges and actions in very little space. The hierarchy needed to stay clear as content changed, sale states, best sellers and ready-to-ship messaging included.",
 image: p("csc", "solution-1.png"),
 },
 {
 title: "Product detail experiences",
 description:
 "The PDP is where brand and commerce meet, large imagery, descriptions, pricing, options, availability, shipping, specs and actions. The system created hierarchy between those elements while keeping the premium visual character of One Kings Lane.",
 image: p("csc", "solution-2.png"),
 },
 {
 title: "Responsive ecommerce",
 description:
 "Every component needed rules for what happens as the viewport changes. Navigation, cards and detail layouts adapted as part of the component itself, not as a separate mobile design created later.",
 image: p("csc", "solution-3.png"),
 },
 {
 title: "Discovery & category browsing",
 description:
 "Customers may know exactly what they want or arrive looking for inspiration. Navigation, menus, search, filters, sorting, pagination and product cards needed consistency while merchandise and imagery stayed visually dominant.",
 image: p("csc", "solution-4.png"),
 },
 {
 title: "Services beyond the catalog",
 description:
 "The experience extends past traditional ecommerce through personalized interior design services and programs for professional designers, patterns that still needed to feel unmistakably One Kings Lane.",
 image: p("csc", "solution-5.png"),
 },
 {
 title: "Brand expression at scale",
 description:
 "Standardization should not remove personality. Buttons, forms and modals need predictable behaviour, while typography, imagery, spacing and composition keep the experience connected to the brand.",
 image: p("csc", "solution-6.png"),
 },
 ],
 learnings: [
 "Creating one strong screen is a design problem. Creating a system that allows many designers and developers to build hundreds of consistent screens is a different problem.",
 "The strongest design system is not the one with the most components, it is the one that helps teams make better decisions with fewer unnecessary decisions.",
 "It needs to be clear enough to create consistency, flexible enough for real product requirements, simple enough that people use it, and strong enough to preserve brand identity.",
 "Customers should not notice the design system. They should simply experience a product that feels consistent.",
 ],
 metrics: [
 { value: "3", label: "Retail brands supported, One Kings Lane, Sur La Table, Z Gallerie"},
 { value: "10", label: "Person multidisciplinary team"},
 { value: "Live", label: "Luxury ecommerce at onekingslane.com"},
 ],
 overview:
 "I worked as a Senior UX Designer as part of a 10 person team supporting three established retail brands: One Kings Lane, Sur La Table and Z Gallerie. While my work crossed all three, this case study focuses on One Kings Lane and helping create and evolve the design system behind its digital experience. I worked directly with UX teams and developers to transform individual interface patterns into reusable, documented and scalable components that could support a large ecommerce platform without losing the character of the brand.",
 challenge:
 "Large ecommerce platforms grow continuously, new categories, promotions, product types, designers and developers. Small differences accumulate until a button, spacing, card or form behaves differently across the experience. My work focused on reducing that fragmentation with reusable foundations so teams could move faster while keeping One Kings Lane consistent.",
 process: [
 {
 phase: "01",
 title: "From screens to systems",
 description:
 "Mapped recurring patterns across the product, repeated components, near-identical variations, intentional brand-specific differences, and behaviours that needed to be standardized.",
 },
 {
 phase: "02",
 title: "Auditing the experience",
 description:
 "Compared components across pages, use cases and viewport sizes to expose inconsistencies and decide what belonged in the shared system.",
 },
 {
 phase: "03",
 title: "Building the foundation",
 description:
 "Started with the visual rules that influence everything else, typography, spacing, colour, layout, grid, borders, iconography, sizing and interaction states.",
 },
 {
 phase: "04",
 title: "Components for real ecommerce",
 description:
 "Designed for disabled states, long copy, unavailable products, sale pricing, promotions, form errors, missing content and narrow layouts, not only the perfect default.",
 },
 {
 phase: "05",
 title: "Collaborate, document, QA",
 description:
 "Partnered with UX designers and developers, wrote clear component rules, and continued design QA after handoff so production matched intent as the product kept shipping.",
 },
 ],
 deliverables: [
 "Design system strategy and UI audits",
 "Reusable component design, variants and interaction states",
 "Responsive behaviour and UX pattern consistency",
 "Design documentation and Figma libraries",
 "UX and developer collaboration",
 "Implementation review and design QA",
 "Cross-brand design system thinking",
 "Ecommerce UX for catalog, discovery and product detail",
 ],
 outcomes: [
 "Stronger foundations for building and evolving the One Kings Lane experience",
 "Teams could increasingly work from shared patterns, behaviours and reusable components",
 "Designers gained a more structured foundation for creating experiences",
 "Developers gained clearer expectations around reusable interface behaviour",
 "Customers experience consistency without needing to notice the system behind it",
 ],
 gallery: [
 { type: "image", src: p("csc", "01-hero.png"), caption: "One Kings Lane homepage, premium furniture, decor and editorial merchandising"},
 {
 type: "image",
 src: p("csc", "02-detail.png"),
 caption: "Furniture category, product cards carrying imagery, pricing and promotional states",
 },
 {
 type: "image",
 src: p("csc", "03-detail.png"),
 caption: "Responsive experience, desktop and mobile shopping journeys",
 },
 {
 type: "image",
 src: p("csc", "04-detail.png"),
 caption: "Product detail, where brand imagery and commerce decisions meet",
 },
 {
 type: "image",
 src: p("csc", "05-detail.png"),
 caption: "Discovery across furniture, lighting and clearance merchandising",
 },
 {
 type: "image",
 src: p("csc", "06-detail.png"),
 caption: "PDP information hierarchy, product story beside purchase actions",
 },
 {
 type: "image",
 src: p("csc", "07-detail.png"),
 caption: "New arrivals, exploratory browsing for customers seeking inspiration",
 },
 {
 type: "image",
 src: p("csc", "08-detail.png"),
 caption: "Best sellers, catalog patterns that stay consistent under promotional pressure",
 },
 ],
 narrative: [
 {
 eyebrow: "The brand",
 title: "Ecommerce with a strong point of view",
 body: [
 "One Kings Lane is not a generic furniture marketplace. The brand combines designer products, vintage pieces, exclusive collections and editorial inspiration to create a curated home shopping experience.",
 "Customers browse furniture, rugs, lighting, art, mirrors, decor, outdoor, tabletop and bed and bath, and the experience extends through personalized interior design services and programs for professional designers.",
 "That breadth creates a UX challenge: support complex commerce while remaining elegant enough to feel like One Kings Lane, not a collection of ecommerce templates.",
 ],
 },
 {
 eyebrow: "Consistency",
 title: "Consistency at scale",
 body: [
 "New categories, promotional experiences and product types keep arriving. Components evolve. Business priorities change. Different designers and developers solve similar problems in different places.",
 "Over time, small differences accumulate, a button behaves differently, spacing shifts, cards diverge, forms introduce another pattern, mobile behaviour becomes inconsistent.",
 "The goal was reusable foundations that allowed teams to move faster while keeping the One Kings Lane experience consistent.",
 ],
 },
 {
 eyebrow: "Systems thinking",
 title: "Preserving brand while standardizing behaviour",
 body: [
 "One of the risks of design systems is making everything feel generic, especially when the same team supports One Kings Lane, Sur La Table and Z Gallerie.",
 "All three are ecommerce businesses with similar digital patterns, but they should never feel like the same website with a different logo.",
 "The system needed to separate functional consistency from brand expression: predictable buttons, forms and modals, with typography, imagery, spacing and composition keeping each brand distinct.",
 ],
 bullets: [
 "Designers were treated as users of the system, feedback drove what changed",
 "Developer collaboration reduced the gap between design intent and live behaviour",
 "Documentation answered when to use a component, which variants and states exist, and what happens on mobile or when content is missing",
 "Design QA after handoff protected consistency when real content and promotions stressed the patterns",
 ],
 },
 {
 eyebrow: "Portfolio of brands",
 title: "Working across three brands",
 body: [
 "While this case study focuses on One Kings Lane, the broader role covered three ecommerce brands with shared UX problems and distinct expression.",
 ],
 cards: [
 {
 title: "One Kings Lane",
 description: "Premium furniture, decor, vintage and interior design.",
 image: p("csc", "01-hero.png"),
 },
 {
 title: "Sur La Table",
 description: "Kitchenware, cooking and culinary experiences.",
 },
 {
 title: "Z Gallerie",
 description: "Statement furniture and expressive home decor.",
 },
 ],
 },
 ],
 closing:
 "Good design systems are invisible. Customers do not think about components, tokens, variants or Figma libraries, they simply know when something feels consistent. My job was to build the system behind that feeling.",
 },

 slt: {
 impact:
 "Created and evolved the design system behind Sur La Table, flexible enough for a large culinary retail business, strong enough to preserve the brand’s energy.",
 client: "Sur La Table",
 timeline: "Senior UX · Design Systems · live at surlatable.com",
 team: "Senior UX Designer · 10 person multidisciplinary team · UX, Product, Frontend, Engineering",
 tools: [
 "Figma",
 "Design Systems",
 "Component libraries",
 "Pattern documentation",
 "Design QA",
 "Accessibility",
 "Developer collaboration",
 ],
 liveUrl: "https://www.surlatable.com/",
 context:
 "Sur La Table is a culinary retail brand built around the experience of cooking. Its digital ecosystem goes beyond traditional ecommerce, combining cookware, bakeware, knives, kitchen tools, small appliances and dining products with stores, cooking classes, rewards, gift registry, recipes and other culinary experiences.",
 goals: [
 "Audit recurring patterns across commerce, classes, stores and account experiences",
 "Establish shared foundations, typography, colour, spacing, grid and interaction states",
 "Design reusable components that survive real ecommerce content and edge cases",
 "Support product shopping and cooking-class experiences under one design language",
 "Document usage, variants and constraints for UX and engineering",
 "Close the gap between Figma intent and production through collaboration and design QA",
 ],
 research: [
 {
 title: "From pages to patterns",
 description:
 "Instead of asking how a page should look, I asked which patterns were repeating, which problems designers solved again and again, which variations were necessary, and which differences existed only because features were created at different times.",
 },
 {
 title: "Auditing a mature product",
 description:
 "Sur La Table was already a live digital experience with existing pages, components, development patterns and customer expectations. I reviewed navigation, search, buttons, forms, product cards, promotions, filters, modals, price states, store information, cooking class interfaces and account experiences.",
 },
 {
 title: "Designers and developers as users",
 description:
 "A design system is a product. I worked with UX teams on where patterns created friction, and with developers on structure, states, responsive rules, accessibility and edge cases, minimizing the distance between designed components and live ones.",
 },
 ],
 insights: [
 "One brand, many experiences, comparing cookware, booking a class, building a registry or checking store pickup all need to feel like Sur La Table",
 "The goal is not to remove variation, it is to make variation intentional",
 "A component that only works with perfect placeholder content is not finished",
 "Cooking classes change the system, ecommerce patterns alone are not enough",
 "Function can be systematic while imagery, typography, merchandising and editorial moments preserve brand personality",
 ],
 solutions: [
 {
 title: "Product discovery & cards",
 description:
 "Product cards carry image, name, brand, price, sale price, rating, promotion, availability, delivery, badges and actions. Consistent hierarchy meant customers did not relearn product information in every category, including store pickup and same-day delivery states.",
 image: p("slt", "solution-1.png"),
 },
 {
 title: "Product detail decisions",
 description:
 "Category pages help customers explore. Product pages help them decide (cost, availability, specifications, options, nearby pickup, shipping and next actions) with hierarchy flexible enough for a utensil or a premium cookware set.",
 image: p("slt", "solution-2.png"),
 },
 {
 title: "Shop vs experience",
 description:
 "A cookware product has price, quantity and shipping. A cooking class has location, date, time, capacity and experience information. The visual language stayed familiar while component structure adapted, different customer goals, one design language.",
 image: p("slt", "solution-3.png"),
 },
 {
 title: "Responsive culinary retail",
 description:
 "Responsive behaviour was part of each component definition. Navigation, filters, stacking and purchase layouts adapted to context rather than shrinking a desktop design later.",
 image: p("slt", "solution-4.png"),
 },
 {
 title: "Cooking classes at scale",
 description:
 "Date night, baking, family, private, corporate and online classes needed transaction patterns beyond hardgoods, while remaining connected to Sur La Table’s broader interface language.",
 image: p("slt", "solution-5.png"),
 },
 {
 title: "One customer ecosystem",
 description:
 "Product, store and class surfaces sit on the same digital system. Store location, pickup, events and local information stayed connected to ecommerce patterns instead of feeling like separate websites.",
 image: p("slt", "solution-6.png"),
 },
 ],
 learnings: [
 "A successful design system is not measured by how many components exist in Figma, it is measured by how many repeated decisions the system can remove.",
 "It helps designers move faster without reducing the quality of their thinking, and helps developers build consistent behaviour without interpreting every screen independently.",
 "Customers should never need to know a design system exists. They should simply feel that the experience works consistently.",
 "Working across Sur La Table, One Kings Lane and Z Gallerie reinforced what can be standardized, and what must remain unique to brand expression.",
 ],
 metrics: [
 { value: "3", label: "Retail brands, Sur La Table, One Kings Lane, Z Gallerie"},
 { value: "10", label: "Person multidisciplinary team"},
 { value: "Live", label: "Culinary retail at surlatable.com"},
 ],
 overview:
 "I worked as a Senior UX Designer as part of a 10 person team supporting three established retail brands: Sur La Table, One Kings Lane and Z Gallerie. While my work extended across all three, this case study focuses on Sur La Table and creating and evolving the design system supporting its digital customer experience. I worked directly with UX teams and developers to identify recurring patterns, standardize interface behaviour, create reusable components and improve consistency between design and the live product. The challenge was not simply creating a component library, it was creating a system flexible enough to support a large ecommerce business while preserving the character and energy of Sur La Table.",
 challenge:
 "As large digital products grow, small inconsistencies multiply, button variations, spacing drift, new form patterns, divergent mobile behaviour. Across Sur La Table’s retail platform those differences create friction for customers and make the product harder for teams to maintain. My work focused on turning individual interface decisions into a structured system for one brand with many experiences.",
 process: [
 {
 phase: "01",
 title: "From pages to patterns",
 description:
 "Mapped repeated problems across the experience, which elements should behave consistently, which variations were necessary, and how to create reusable solutions without limiting future design work.",
 },
 {
 phase: "02",
 title: "Auditing the existing experience",
 description:
 "Reviewed navigation, search, buttons, forms, product cards, promotions, filters, sorting, modals, messages, product information, price states, store information, cooking class interfaces and account experiences.",
 },
 {
 phase: "03",
 title: "Building the foundation",
 description:
 "Established typography, colour, spacing, layout, grid, borders, iconography, interactive states, sizing and responsive rules so designers and developers shared predictable values.",
 },
 {
 phase: "04",
 title: "Components for real commerce",
 description:
 "Designed beyond the default state (hover, focus, selected, disabled, error, loading, empty, sale, unavailable, long and short content, mobile and desktop) so components survived real catalog behaviour.",
 },
 {
 phase: "05",
 title: "Collaborate, document, QA",
 description:
 "Partnered with UX and developers, wrote clear component rules, built accessibility into shared patterns, and used design QA as a feedback loop between live content and the system.",
 },
 ],
 deliverables: [
 "Design system creation and evolution",
 "Design audits and component architecture",
 "Component variants, interaction states and responsive patterns",
 "Accessibility considerations inside shared components",
 "Ecommerce UX, discovery, navigation and product detail",
 "Cooking class and store-connected experience patterns",
 "Figma libraries and documentation",
 "UX and developer collaboration, implementation reviews and design QA",
 "Cross-brand system thinking",
 ],
 outcomes: [
 "Stronger foundations for designing and evolving the Sur La Table digital experience",
 "Shared patterns supporting consistency across a large ecommerce ecosystem",
 "Room for the unique requirements of products, stores, classes and other customer journeys",
 "Reusable foundations for UX teams and clearer expectations for developers",
 "A quieter customer benefit, an experience that feels consistent without revealing the system",
 ],
 gallery: [
 {
 type: "image",
 src: p("slt", "01-hero.png"),
 caption: "Sur La Table homepage, culinary retail beyond a traditional product catalog",
 },
 {
 type: "image",
 src: p("slt", "02-detail.png"),
 caption: "Cookware listing, product cards with pricing, filters and availability options",
 },
 {
 type: "image",
 src: p("slt", "03-detail.png"),
 caption: "Responsive experience, desktop and mobile shopping journeys",
 },
 {
 type: "image",
 src: p("slt", "04-detail.png"),
 caption: "Product detail, where information hierarchy supports a purchase decision",
 },
 {
 type: "image",
 src: p("slt", "05-detail.png"),
 caption: "Shop vs experience, product commerce beside cooking class discovery",
 },
 {
 type: "image",
 src: p("slt", "06-detail.png"),
 caption: "PDP close-ups, gallery and purchase information working as one system",
 },
 {
 type: "image",
 src: p("slt", "07-detail.png"),
 caption: "Cooking classes, dates, locations and experience-led transactions",
 },
 {
 type: "image",
 src: p("slt", "08-detail.png"),
 caption: "One customer ecosystem, products, stores and classes connected",
 },
 ],
 narrative: [
 {
 eyebrow: "The brand",
 title: "More than an online kitchen store",
 body: [
 "Sur La Table is built around cooking as both a product experience and a human experience. Customers shop cookware, knives, bakeware, kitchen tools, coffee equipment, appliances, dining products, food and outdoor cooking, while the digital experience also supports in-store and online cooking classes, private events, registry, rewards and store discovery.",
 "That creates a broader UX challenge than a traditional ecommerce website. One customer may be comparing cookware. Another may be searching for a cooking class. Another may be creating a registry. Someone else may be checking whether a product is available at a nearby store.",
 "All of those journeys need to feel like Sur La Table, consistency without making every interaction feel identical.",
 ],
 },
 {
 eyebrow: "The challenge",
 title: "One brand. Many experiences.",
 body: [
 "New features, marketing needs, designers and developers solving similar problems in different places, small inconsistencies multiply. A button gets another variation. A card uses different spacing. Mobile interactions diverge from desktop.",
 "Individually these differences seem small. Across a large retail platform they create friction for customers and make the product harder for teams to maintain.",
 "My work focused on helping turn those individual interface decisions into a more structured system, not by removing variation, but by making variation intentional.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Cooking classes change the system",
 body: [
 "One of the most interesting aspects of Sur La Table is that the digital experience also supports cooking classes, date night, baking, family, private events, corporate events and online classes.",
 "A cookware product has price, quantity, availability and shipping. A cooking class has location, date, time, capacity, participants and experience information. The interface needs to support both.",
 "That is exactly where a design system becomes valuable. The visual language can remain familiar while the component structure adapts to a different business model.",
 ],
 bullets: [
 "Different customer goals, one design language",
 "Shared typography, buttons, cards, spacing, status patterns and responsive behaviour",
 "Stores, pickup and events kept connected to the broader ecommerce language",
 ],
 },
 {
 eyebrow: "Brand & system",
 title: "Consistency, not sameness",
 body: [
 "I worked across Sur La Table, One Kings Lane and Z Gallerie. Many ecommerce problems were shared (buttons, forms, modals, navigation) but the brands themselves are very different.",
 "Sur La Table needed to retain the energy, warmth and practicality associated with cooking. Function could be systematic. Brand expression (imagery, typography, content, merchandising, composition and editorial moments) could remain flexible.",
 ],
 cards: [
 {
 title: "Sur La Table",
 description: "Cooking, kitchen products and culinary experiences.",
 image: p("slt", "01-hero.png"),
 },
 {
 title: "One Kings Lane",
 description: "Furniture, decor and curated home shopping.",
 },
 {
 title: "Z Gallerie",
 description: "Furniture and expressive home decor.",
 },
 ],
 },
 ],
 closing:
 "Customers see the experience. Teams see the system behind it. I designed both sides of that relationship. Different journeys. One brand. One system.",
 },

 zg: {
 impact:
 "Created and evolved the design system behind Z Gallerie, consistency without removing the personality that makes the brand feel anything but ordinary.",
 client: "Z Gallerie",
 timeline: "Senior UX · Design Systems · live at zgallerie.com",
 team: "Senior UX Designer · 10 person multidisciplinary team · UX, Product, Frontend, Engineering",
 tools: [
 "Figma",
 "Design Systems",
 "Component libraries",
 "Pattern documentation",
 "Design QA",
 "Accessibility",
 "Developer collaboration",
 ],
 liveUrl: "https://www.zgallerie.com/",
 context:
 "Z Gallerie is a modern furniture and home decor brand built around expressive interiors, statement pieces and a distinctive sense of glamour. The digital experience brings together furniture, decor, art, mirrors, lighting, rugs, textiles, gifts, design services and professional programs within one large ecommerce ecosystem.",
 goals: [
 "Audit recurring interface patterns across a mature visual ecommerce product",
 "Establish shared foundations, typography, colour, spacing, grid and interaction states",
 "Design reusable components that survive real commerce content and bold merchandising",
 "Support both product-led shopping and inspiration-led discovery under one system",
 "Separate functional consistency from brand expression across three retail brands",
 "Document behaviour and close the gap between design and production through QA",
 ],
 research: [
 {
 title: "Looking at the product as a system",
 description:
 "Instead of asking how a product page should look, I asked which parts should behave the same everywhere, which variations communicate the brand, which differences are simply inconsistency, and what happens when real content pushes a component beyond its ideal state.",
 },
 {
 title: "Auditing existing reality",
 description:
 "Z Gallerie was already a mature digital product. I reviewed navigation, buttons, product cards, forms, promotional modules, filters, search, modals, pricing, badges, product information, content blocks, account experiences and responsive behaviour, distinguishing intentional variation from unnecessary variation.",
 },
 {
 title: "Designers and developers as users",
 description:
 "The design system itself needed UX. I worked with designers on workarounds, rigidity and missing variants, and with developers on structure, states, accessibility and edge cases, so components made sense both visually and technically.",
 },
 ],
 insights: [
 "Standardize the experience, not the expression",
 "Shared problems do not always require identical expression across brands",
 "When basic interactions are solved, merchandising can become more expressive",
 "Furniture and decor shopping is highly visual, structure must not overpower merchandise",
 "Inspiration journeys (room, mood, style) need system support without flattening editorial moments",
 ],
 solutions: [
 {
 title: "Product cards & listing structure",
 description:
 "Product cards carry imagery, name, price, sale state, labels, availability, variations and actions across furniture, decor, textiles, art, lighting, rugs and mirrors. Structure stayed predictable even when merchandise changed dramatically.",
 image: p("zg", "solution-1.png"),
 },
 {
 title: "Product detail decisions",
 description:
 "PDPs bring emotional attraction and practical answers together (cost, size, options, materials, delivery and next actions) with clear hierarchy while photography remains dominant.",
 image: p("zg", "solution-2.png"),
 },
 {
 title: "Commerce meets editorial",
 description:
 "Category pages need functional structure. Campaign and lifestyle moments need freedom. The system connected both without forcing them into the same layout, one digital brand.",
 image: p("zg", "solution-3.png"),
 },
 {
 title: "Responsive commerce",
 description:
 "Components transformed rather than shrunk. Navigation, filters, cards and detail layouts adapted to preserve hierarchy and purpose across desktop, tablet and mobile.",
 image: p("zg", "solution-4.png"),
 },
 {
 title: "Inspiration → discovery → product",
 description:
 "Customers do not always start with a specific item. Room-based inspiration and curated environments needed structure that still allowed emotional, editorial browsing.",
 image: p("zg", "solution-5.png"),
 },
 {
 title: "Promotions, decor & services",
 description:
 "Clearance, decor merchandising and design services sat on the same foundations, commercial efficiency with room for Z Gallerie’s visual attitude.",
 image: p("zg", "solution-6.png"),
 },
 ],
 learnings: [
 "Consistency does not require visual sameness, a strong system can create more room for expression.",
 "When components are predictable, merchandising can become more expressive. When navigation is clear, imagery can become more dramatic.",
 "When the functional layer works quietly, the brand can speak louder.",
 "The goal was never the Figma library, it was improving the live product.",
 ],
 metrics: [
 { value: "3", label: "Retail brands, Z Gallerie, One Kings Lane, Sur La Table"},
 { value: "10", label: "Person multidisciplinary team"},
 { value: "Live", label: "Statement home ecommerce at zgallerie.com"},
 ],
 overview:
 "I worked as a Senior UX Designer as part of a 10 person team supporting three established retail brands: Z Gallerie, One Kings Lane and Sur La Table. My work covered all three, but this case study focuses on Z Gallerie and creating and evolving the design system behind its digital customer experience. I worked directly with UX teams and developers to audit existing interface patterns, create reusable components, define interaction behaviour, improve responsive consistency and reduce the gap between design and production. The challenge was not simply creating consistency, it was creating consistency without removing the personality that makes Z Gallerie feel like Z Gallerie.",
 challenge:
 "Large ecommerce platforms accumulate small inconsistencies, another button style, card layout, spacing rule, modal or mobile behaviour. Z Gallerie also needed to stay intentionally expressive. A system that made every experience perfectly uniform could remove the energy that defines the brand. The goal became: standardize the experience, not the expression.",
 process: [
 {
 phase: "01",
 title: "Look at the product as a system",
 description:
 "Moved from page-by-page thinking to pattern thinking, repeated problems, necessary variations, brand-communicating differences, and reusable components with intentional flexibility.",
 },
 {
 phase: "02",
 title: "Audit the existing experience",
 description:
 "Reviewed mature live patterns across navigation, commerce, promotions and responsive behaviour to decide what belonged in the shared system.",
 },
 {
 phase: "03",
 title: "Build the foundation",
 description:
 "Established typography, colour, spacing, layout, grid, borders, iconography, sizing, interactive states and responsive principles as predictable shared rules.",
 },
 {
 phase: "04",
 title: "Design components for reality",
 description:
 "Accounted for long names, sale states, sold-out items, bold imagery, missing information and narrow screens, not only the ideal default.",
 },
 {
 phase: "05",
 title: "Document, build, QA, evolve",
 description:
 "Partnered with UX and developers, documented purpose and states, reviewed production with real content, and treated the system as living alongside campaigns and collections.",
 },
 ],
 deliverables: [
 "Design system creation and evolution",
 "Interface audits and reusable component design",
 "Component variants, interaction states and responsive behaviour",
 "Ecommerce UX, discovery, listings and product detail",
 "Inspiration and editorial pattern support",
 "Accessibility considerations inside shared components",
 "Figma libraries and pattern documentation",
 "UX and developer collaboration, implementation review and design QA",
 "Cross-brand system thinking",
 ],
 outcomes: [
 "Stronger foundations for designing and evolving the Z Gallerie digital experience",
 "Shared components gave UX teams a more consistent starting point",
 "Clearer behaviour improved communication between UX and development",
 "Reusable foundations supported an evolving ecommerce product",
 "The system could do all of this without asking Z Gallerie to become less expressive",
 ],
 gallery: [
 {
 type: "image",
 src: p("zg", "01-hero.png"),
 caption: "Z Gallerie homepage, expressive interiors and statement merchandising",
 },
 {
 type: "image",
 src: p("zg", "02-detail.png"),
 caption: "Furniture listing, product cards structured around bold visual merchandise",
 },
 {
 type: "image",
 src: p("zg", "03-detail.png"),
 caption: "Responsive experience, same system, different context",
 },
 {
 type: "image",
 src: p("zg", "04-detail.png"),
 caption: "Product detail, inspiration meeting purchase decisions",
 },
 {
 type: "image",
 src: p("zg", "05-detail.png"),
 caption: "Commerce meets editorial, structured browsing beside lifestyle discovery",
 },
 {
 type: "image",
 src: p("zg", "06-detail.png"),
 caption: "PDP close-ups, gallery and purchase information in one hierarchy",
 },
 {
 type: "image",
 src: p("zg", "07-detail.png"),
 caption: "Inspiration browsing, room mood before a specific product",
 },
 {
 type: "image",
 src: p("zg", "08-detail.png"),
 caption: "Discovery across furniture, lighting and art & mirrors",
 },
 ],
 narrative: [
 {
 eyebrow: "The brand",
 title: "Anything but ordinary",
 body: [
 "Z Gallerie combines modern furniture with dramatic art, oversized mirrors, sculptural lighting, expressive textiles and decorative objects designed to become part of a room’s personality. The home is treated as a canvas, approached boldly.",
 "That matters when designing the digital product. The website cannot become a neutral ecommerce framework filled with beautiful product images. The interface needs enough restraint to let the merchandise lead while still maintaining the attitude of the brand.",
 "How do you standardize a product without standardizing its personality?",
 ],
 },
 {
 eyebrow: "The challenge",
 title: "Consistency without sameness",
 body: [
 "New campaigns, categories, features, designers and developers solving similar problems at different times, small inconsistencies accumulate until the experience is harder to maintain.",
 "Z Gallerie is intentionally expressive. A system that made every experience feel perfectly uniform could also remove some of the energy that defines the brand.",
 "The goal therefore became: standardize the experience. Not the expression.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Ecommerce meets editorial",
 body: [
 "Shopping does not always start with a product. Sometimes it starts with a room, a mood, a style or an idea. Z Gallerie supports room-based inspiration and curated environments alongside direct catalog shopping.",
 "A traditional ecommerce interface prioritizes products, price, availability, filters and actions. Editorial content prioritizes imagery, composition, story, emotion and brand. The challenge is not choosing one, it is creating a system that allows both to coexist.",
 "Personality works better when the foundation is stable. Customers should focus on the furniture, room or collection rather than figuring out how the interface works.",
 ],
 bullets: [
 "Bold on the surface. Structured underneath.",
 "Shared problems do not always require identical expression",
 "When the functional layer works quietly, the brand can speak louder",
 ],
 },
 {
 eyebrow: "Three brands",
 title: "Working across Z Gallerie, One Kings Lane and Sur La Table",
 body: [
 "All three businesses contained familiar ecommerce patterns (navigation, discovery, cards, forms, modals, account experiences and responsive behaviour) but they could not simply share one visual personality.",
 "Z Gallerie needed to remain Z Gallerie. Sur La Table needed culinary energy. One Kings Lane needed its own premium editorial character. The system should standardize what improves usability and efficiency. The brand should remain free to communicate its own identity.",
 ],
 cards: [
 {
 title: "Z Gallerie",
 description: "Furniture and expressive home decor.",
 image: p("zg", "01-hero.png"),
 },
 {
 title: "One Kings Lane",
 description: "Premium furniture, decor and curated home shopping.",
 },
 {
 title: "Sur La Table",
 description: "Cooking, kitchen products and culinary experiences.",
 },
 ],
 },
 ],
 closing:
 "Customers see the furniture, the art, the rooms, the materials, the personality. The system should disappear behind all of it. Bold on the surface. Structured underneath.",
 },

 gigz: {
 impact:
 "Sole UX, UI and content ownership, turning a startup idea into a complete social product for bedroom musicians.",
 client: "FineTune (early-stage startup)",
 timeline: "Ground-up product design · 2023",
 team: "Solo UX, UI and Content Designer · 7 person startup team · CEO + frontend & backend developers",
 tools: ["Figma", "Design system", "UX writing", "Developer handoff", "Design QA"],
 context:
 "Early stage startups rarely arrive with a complete specification. Ideas change, features evolve, technical limitations appear, and new opportunities become visible while the product is being built. There was no large design department, no separate UX writing team and no established product system, design was part of product development from the beginning.",
 goals: [
 "Help musicians discover each other as people and creators, not follower counts",
 "Design onboarding as the first step in creating a musician identity",
 "Make discovery, feed, messaging and notifications feel like steps toward real relationships",
 "Build a flexible design system that could grow with the product",
 "Keep language human, simple and appropriate for a creative community",
 ],
 research: [
 {
 title: "Designing for musicians, not followers",
 description:
 "Profiles needed to answer who you are, what you create, what instruments you play, what styles you care about, what you are working on, who you want to meet, and what you have made, so musicians could decide whether to follow, talk or collaborate.",
 },
 {
 title: "One connected experience",
 description:
 "As the only designer, every feature affected another part of the product. Profiles affected discovery. Discovery affected connections. Connections affected notifications. Content affected feeds. Messaging affected relationships. Account creation affected everything afterwards.",
 },
 {
 title: "Working with CEO and developers",
 description:
 "Ideas often started as business goals or simple concepts. I helped turn them into experiences, where a feature should live, how someone discovers it, what happens before and after, and how it affects the rest of the application.",
 },
 ],
 insights: [
 "The hardest part of social product design is not the interface, it is creating reasons for people to interact",
 "Discovery needs to lead somewhere; profiles need to communicate something meaningful",
 "Empty states in a new network must guide action, not just announce that nothing is there",
 "In a seven person team, design cannot operate in isolation from development and business priorities",
 ],
 solutions: [
 {
 title: "Onboarding as identity",
 description:
 "Treated registration as the first step in creating a musician identity, collecting useful information while keeping the process fast enough that users actually complete it.",
 image: p("gigz", "solution-1.png"),
 },
 {
 title: "Musician profiles",
 description:
 "Designed profiles around scannable creative information so musicians could quickly understand who someone is, what they create, and whether they want to connect.",
 image: p("gigz", "solution-2.png"),
 },
 {
 title: "Feed and discovery",
 description:
 "Built everyday social rhythm around music-related content with clear hierarchy, musician visible, content in focus, actions easy without overwhelming the post.",
 image: p("gigz", "solution-3.png"),
 },
 {
 title: "Feedback and relationships",
 description:
 "Designed feedback and messaging as the bridge between discovering someone and building a real connection, with notifications that clearly say who did something, what happened, and what to do next.",
 image: p("gigz", "solution-4.png"),
 },
 ],
 learnings: [
 "A button can create an action. A good experience creates a relationship between those actions.",
 "Working in a small startup taught me how to make design decisions quickly without losing sight of the larger system.",
 "Making music may start alone. The product was designed to make sure it does not have to stay that way.",
 ],
 metrics: [
 { value: "1", label: "Designer across UX, UI and content"},
 { value: "7", label: "Person startup team"},
 { value: "0→1", label: "Design system built from scratch"},
 ],
 overview:
 "I worked directly with the CEO and development team to transform ideas into a working product, designing everything from the overall experience and design system to individual flows, screens, interactions and product content.",
 challenge:
 "Bedroom musicians often create alone. They may want feedback, collaborators, inspiration, or simply other people who understand making music. FineTune needed to be about relationships, not another broadcast channel.",
 process: [
 {
 phase: "01",
 title: "Starting from an idea",
 description:
 "Helped shape how the product should work with the CEO and developers, continuously moving between product ideas, UX questions, technical possibilities and interface decisions.",
 },
 {
 phase: "02",
 title: "Mapping the core experience",
 description:
 "Designed onboarding, profiles, discovery, feed, connections, messaging and notifications as one connected loop rather than isolated screens.",
 },
 {
 phase: "03",
 title: "Content is interface",
 description:
 "Wrote button labels, instructions, profile prompts, empty states, errors, notifications and CTAs as part of the UX so the product felt human, not corporate.",
 },
 {
 phase: "04",
 title: "Design system from scratch",
 description:
 "Built typography, spacing, colours, buttons, inputs, cards, navigation, profile and content components, feedback states and modals alongside the product so new features stayed consistent.",
 },
 {
 phase: "05",
 title: "From Figma to a real product",
 description:
 "Stayed involved during implementation, every interaction needed to be buildable, every component needed real states, and every flow needed to consider what could go wrong.",
 },
 ],
 deliverables: [
 "Solo UX and UI ownership",
 "Product design and experience strategy",
 "Information architecture and user flows",
 "Interaction and visual design",
 "Design system and component design",
 "UX writing and product content",
 "Onboarding, profiles and social experiences",
 "Developer collaboration, handoff and design QA",
 ],
 outcomes: [
 "Complete social product experience designed from the ground up",
 "Reusable foundations for discovery, profiles, content, messaging and notifications",
 "Shared design system that sped up feature work while protecting consistency",
 "Product language tailored to a creative musician community",
 ],
 gallery: [
 {
 type: "image",
 src: p("gigz", "01-hero.png"),
 caption: "FineTune core experience, explore, profiles and feedback for bedroom musicians",
 },
 {
 type: "image",
 src: p("gigz", "02-detail.png"),
 caption: "Onboarding, welcome and Add Your Clips as the first steps of musician identity",
 },
 {
 type: "image",
 src: p("gigz", "03-detail.png"),
 caption: "Musician profiles, creative identity, instruments and connection actions",
 },
 {
 type: "image",
 src: p("gigz", "04-detail.png"),
 caption: "Explore and home, discovery and community rhythm without copying generic social apps",
 },
 {
 type: "image",
 src: p("gigz", "05-detail.png"),
 caption: "Feedback and notifications, meaningful activity with clear next actions",
 },
 {
 type: "image",
 src: p("gigz", "06-detail.png"),
 caption: "Design system colour foundations built from scratch alongside the product",
 },
 {
 type: "image",
 src: p("gigz", "07-detail.png"),
 caption: "Sign up, collecting useful identity information without slowing completion",
 },
 {
 type: "image",
 src: p("gigz", "08-detail.png"),
 caption: "From Figma to product, implementation screens for explore and profile",
 },
 ],
 narrative: [
 {
 eyebrow: "Challenge",
 title: "Designing for musicians, not followers",
 body: [
 "A profile needed to communicate more than a username and follower count. Who are you? What do you create? What instruments do you play? What styles are you interested in? What are you currently working on? What kind of musicians would you like to meet?",
 "These questions influenced how profiles, discovery, content and social interactions were structured throughout the product.",
 ],
 },
 {
 eyebrow: "System",
 title: "Building the design system from scratch",
 body: [
 "When I joined, there was no established product design system. As the application grew, reusable patterns became essential so a small startup would not create dozens of slightly different buttons, cards and interaction patterns.",
 "The system became a communication tool between design and development, shared components and behaviours instead of redefining the same patterns repeatedly.",
 ],
 },
 {
 eyebrow: "Team",
 title: "A small team means big ownership",
 body: [
 "Being the only UX and UI designer in a seven person startup meant responsibilities extended far beyond individual screens. There was no separate interaction designer, visual designer, UX writer or design system team.",
 "I needed to move between all of those responsibilities depending on what the product needed, making decisions quickly without losing sight of the larger system.",
 ],
 bullets: [
 "Empty states guided new users toward useful first actions",
 "Flexible foundations supported growth without over-designing v1",
 "Design and development ran in a tight feedback loop with the CEO",
 ],
 },
 ],
 closing:
 "Making music may start alone. The product was designed to make sure it does not have to stay that way.",
 },

 CHaPPie: {
 impact:
 "From idea to live product, design, development, architecture and QA owned end to end with the founders.",
 client: "CH4PP!3 (early-stage startup · IS Studio)",
 timeline: "Ground-up product · design through production · live on Railway",
 team: "End to End Product Designer & Full Stack Product Builder · founders · CEO · development team",
 tools: [
 "Figma",
 "React",
 "Design system",
 "Database design",
 "Integrations",
 "AI UX",
 "QA",
 ],
 liveUrl: "https://chappie-production.up.railway.app/",
 context:
 "CH4PP!3 is a client discovery platform built to help businesses find new opportunities and turn them into conversations. Users can search for local businesses that may need their services, review potential opportunities, prepare personalized outreach and move from discovery toward an actual sales conversation.",
 goals: [
 "Connect find → understand → create → reach out in one workflow",
 "Design search and lead evaluation for rapid opportunity assessment",
 "Support prototype generation and personalized outreach before contact",
 "Build authentication, subscriptions, integrations and usage limits",
 "Ship a production web application with accessibility, testing and iteration",
 "Create the design system alongside the product, not as a handoff",
 ],
 research: [
 {
 title: "Starting with an idea",
 description:
 "Early conversations with founders, what if we could find businesses that need a website, identify opportunities automatically, prepare something personalized and reach out from one place? I helped translate those questions into workflows, interfaces, architecture and a functioning application.",
 },
 {
 title: "A workflow, not a search",
 description:
 "Finding a client involves moving between many tools. CH4PP!3 was designed around reducing friction across the complete journey rather than treating lead discovery as one isolated search action.",
 },
 {
 title: "Design and develop together",
 description:
 "Designed interactions, built them, used them, changed the design, updated implementation and tested again, the browser became part of the design process because I owned both sides.",
 },
 ],
 insights: [
 "Search alone does not create a client, every important screen needs a clear next step",
 "AI should appear where it reduces real work, not as a generic chatbot attached to sales software",
 "Real applications need loading, no results, errors, disconnected services, limits and narrow screens, not only the perfect default",
 "The interface is only the visible part, a search field connects to data, a plan connects to permissions, an integration connects to an external system",
 "Moving fast without a system creates disconnected patterns; part of my job was maintaining coherence while the product evolved",
 ],
 solutions: [
 {
 title: "Search experience",
 description:
 "The primary experience begins with search for a potential client, location, business opportunity and next action visible so results start a sales workflow rather than returning names alone.",
 image: p("CHaPPie", "solution-1.png"),
 },
 {
 title: "Results into leads",
 description:
 "Result cards support rapid evaluation (who they are, where they are, what they do, whether they already have what you are selling, and what to do next) without overwhelming scan rhythm.",
 image: p("CHaPPie", "solution-2.png"),
 },
 {
 title: "Create before you ask",
 description:
 "Connected lead information with a creative workflow, generating a website concept tailored to the potential client so outreach can show an idea, not only a generic pitch.",
 image: p("CHaPPie", "solution-3.png"),
 },
 {
 title: "Integrations",
 description:
 "Connected Gmail, OpenAI and outreach tools with understandable connection states (connected, not connected, needs attention) without exposing unnecessary technical complexity.",
 image: p("CHaPPie", "solution-4.png"),
 },
 {
 title: "Plans & usage",
 description:
 "Free, Small, Mid and Large plans with search limits communicated before frustration, subscription UX connected to the actual application, not only the marketing page.",
 image: p("CHaPPie", "solution-5.png"),
 },
 {
 title: "Authentication",
 description:
 "Sign up, verify, sign in and success flows designed and implemented with clear language about what is happening, what is required and what to do next.",
 image: p("CHaPPie", "solution-6.png"),
 },
 ],
 learnings: [
 "CH4PP!3 reinforced that the interface is only the visible part of the product, search, results, plans and integrations all connect to real logic underneath",
 "Understanding those relationships changes how you design, you stop designing only for the perfect screenshot and start designing for the system",
 "I helped define it, design it, structure it, develop it, test it and ship it, design stopped being a handoff and became the product itself",
 ],
 metrics: [
 { value: "1", label: "Product builder across design and development"},
 { value: "0→1", label: "From concept to live production app"},
 { value: "Live", label: "Client discovery platform on Railway"},
 ],
 overview:
 "I worked directly with the founders and CEO to turn CH4PP!3 from an idea into a functioning web product. My role was not limited to UX or UI, I designed the experience, created the design system, developed the application, worked on frontend and backend, structured the database, shaped application architecture, wrote product content, implemented accessibility, tested the experience, handled QA and helped take the product from an idea to a live web system. This was not a design handoff. I was responsible for helping turn the idea into the actual product.",
 challenge:
 "For a small studio, agency or freelancer, finding new clients means moving between many tools, search, research, contact info, offer creation, outreach and tracking. Each step is manageable; the problem is the time when the process repeats for dozens or hundreds of businesses. CH4PP!3 needed to make the entire sequence from find to contact feel connected.",
 process: [
 {
 phase: "01",
 title: "Idea to workflow",
 description:
 "Translated founder conversations into connected journeys (search, qualify, create, contact) rather than independent features.",
 },
 {
 phase: "02",
 title: "Design the complete journey",
 description:
 "Approached the system as a journey: searching, reviewing results, evaluating businesses, working with integrations, generating concepts, preparing outreach and managing account limits.",
 },
 {
 phase: "03",
 title: "System & states",
 description:
 "Built foundations and components for real states, loading, no results, errors, disconnected services, long content, limits and responsive behaviour.",
 },
 {
 phase: "04",
 title: "Architecture & data",
 description:
 "Structured users, searches, leads, plans, integrations, generated content and outreach so screens represented real system behaviour.",
 },
 {
 phase: "05",
 title: "Build, test, ship",
 description:
 "Implemented frontend and backend, tested full workflows end to end, ran continuous QA and deployed the live application on Railway.",
 },
 ],
 deliverables: [
 "Product thinking, UX strategy and feature definition",
 "UI, interaction design, responsive design and design system",
 "UX writing and product content",
 "Frontend and backend development",
 "Database design and application architecture",
 "Authentication and subscription experiences",
 "Integrations, AI-assisted workflows and outreach",
 "Accessibility, functional testing, QA and production iteration",
 ],
 outcomes: [
 "Live client discovery platform at chappie-production.up.railway.app",
 "Connected workflow from business search to personalized outreach",
 "Design system evolved alongside the real application",
 "One owner across product, design, development, architecture, content and quality",
 ],
 gallery: [
 {
 type: "image",
 src: p("CHaPPie", "01-hero.png"),
 caption: "CH4PP!3, find local businesses without websites and reach out with a site offer",
 },
 {
 type: "video",
 src: p("CHaPPie", "product-walkthrough.mp4"),
 poster: p("CHaPPie", "02-detail.png"),
 caption:
 "Product walkthrough, from search and lead evaluation to prototype generation and outreach",
 },
 {
 type: "image",
 src: p("CHaPPie", "02-detail.png"),
 caption: "Search experience, location, opportunity and next action",
 },
 {
 type: "image",
 src: p("CHaPPie", "03-detail.png"),
 caption: "Responsive marketing and product entry, desktop and mobile",
 },
 {
 type: "image",
 src: p("CHaPPie", "04-detail.png"),
 caption: "Search results, rapid lead evaluation at a glance",
 },
 {
 type: "image",
 src: p("CHaPPie", "05-detail.png"),
 caption: "Workflow, search to qualify before creating outreach",
 },
 {
 type: "image",
 src: p("CHaPPie", "06-detail.png"),
 caption: "Create and contact, prototype concept beside personalized outreach",
 },
 {
 type: "image",
 src: p("CHaPPie", "07-detail.png"),
 caption: "Integrations, Gmail, OpenAI and connected services with clear states",
 },
 {
 type: "image",
 src: p("CHaPPie", "08-detail.png"),
 caption: "Find → create → contact, one connected sales workflow",
 },
 ],
 narrative: [
 {
 eyebrow: "The problem",
 title: "Finding a client is a workflow, not a search",
 body: [
 "For a small studio, agency or freelancer, finding new clients often means moving between many different tools, search, research, contact information, offer creation, outreach and tracking.",
 "Each individual step is manageable. The problem is the amount of time required when the process is repeated for dozens or hundreds of potential clients.",
 "CH4PP!3 was designed around reducing that friction, from find to understand to create to reach out.",
 ],
 },
 {
 eyebrow: "Workflow",
 title: "Search alone does not create a client",
 body: [
 "A list of potential businesses is useful. A sales tool becomes much more valuable when it helps users decide what to do with those businesses.",
 "The product was designed around moving users forward: search, identify an opportunity, understand the business, prepare something relevant, create outreach and contact the lead.",
 "Every important screen needed a clear next step, the product should not leave users wondering what to do with information.",
 ],
 bullets: [
 "Search → Qualify → Create → Contact → Client",
 "One lead. One relevant conversation.",
 "Opportunity becomes an idea before outreach begins",
 ],
 },
 {
 eyebrow: "Build",
 title: "I did not hand off the experience. I built it.",
 body: [
 "Because I was involved in both design and development, interface decisions immediately created technical questions, searches need data, leads need relationships, plans need permissions, integrations need credentials.",
 "The experience and technical structure needed to support each other. I could design, build, use, change, test and repeat in a short feedback loop.",
 "The goal was never to perfectly protect the original design. The goal was to improve the actual product.",
 ],
 },
 {
 eyebrow: "Live product",
 title: "From the first idea to production",
 body: [
 "This was not a concept case study. CH4PP!3 became a live web application with real accounts, data, APIs, errors, devices, limits and integrations.",
 "Building it meant working through all of those realities, not only how something should work in Figma, but what happens when it meets production.",
 ],
 },
 ],
 closing:
 "Search is only the beginning. A business is not a lead until you understand the opportunity. A lead is not a client until you start the conversation. Find the opportunity. Create the reason to talk. Start the conversation.",
 },

 ctc: {
 impact:
 "Helped translate enterprise complexity into understandable customer experiences inside one of Canada’s largest retail digital ecosystems.",
 client: "Canadian Tire",
 timeline: "Senior UX · Enterprise ecommerce · live at canadiantire.ca",
 team: "Senior UX Designer · UX teams · Business Analysts · Researchers · QA · Developers · Product & business stakeholders",
 tools: [
 "Figma",
 "Wireframing",
 "Prototyping",
 "Research collaboration",
 "Design QA",
 "Accessibility",
 "Enterprise ecommerce",
 ],
 liveUrl: "https://www.canadiantire.ca/en.html",
 context:
 "Canadian Tire is one of Canada’s largest and most recognizable retail brands. Its digital ecosystem supports customers across automotive, tools, hardware, home, outdoor living, sports, seasonal products and everyday essentials, while also connecting ecommerce to local store inventory, pickup and delivery, promotions, rewards, accounts, services and physical locations.",
 goals: [
 "Translate business requirements into customer journeys that answer practical questions",
 "Support product discovery across a catalog customers should not need to reverse-engineer",
 "Make store context, inventory and fulfillment visible when they matter, quiet when they do not",
 "Design services flows such as automotive booking alongside ecommerce patterns",
 "Collaborate across UX, BA, research, QA and development inside a mature enterprise platform",
 "Protect accessibility, responsive behaviour and consistency at Canadian Tire scale",
 ],
 research: [
 {
 title: "Requirements are not experiences",
 description:
 "A requirement might say a customer needs to select a preferred store. UX still has to answer when, why, what changes afterward, what happens if inventory is unavailable, how pickup and pricing are affected, and what mobile behaviour should be.",
 },
 {
 title: "Evidence from research partners",
 description:
 "Worked with research teams to test terminology, findability, action visibility and hesitation points, then returned insights into design changes rather than defending the original solution.",
 },
 {
 title: "Enterprise UX is a team sport",
 description:
 "A single experience can involve UX, researchers, BAs, developers, QA and stakeholders. My role often sat at the intersection, understanding what each group required while protecting the customer experience.",
 },
 ],
 insights: [
 "Canadian Tire is not one customer journey, it is thousands of journeys inside the same digital product",
 "From inside the organization, complexity is understandable; from the customer’s perspective, most of it should disappear",
 "Customers do not experience organizational structures, search, checkout, accounts and services should still feel like one Canadian Tire",
 "Fulfillment is part of the purchase decision, not only a checkout detail",
 "Good enterprise UX means knowing where change is valuable and where consistency matters more",
 ],
 solutions: [
 {
 title: "Product discovery at scale",
 description:
 "Supported navigation, category browsing and listing experiences so customers who search, browse, arrive from a flyer or start with a brand can move toward the right product without understanding internal catalog structure.",
 image: p("ctc", "solution-1.png"),
 },
 {
 title: "Product detail decisions",
 description:
 "Brought imagery, price, promotions, ratings, availability, store context, fulfillment, variants and specifications into a consistent decision hierarchy, flexible enough for tools, automotive and seasonal products.",
 image: p("ctc", "solution-2.png"),
 },
 {
 title: "Store context & fulfillment",
 description:
 "Made local inventory and pickup, ship or same-day options part of the shopping journey, visible when they change the decision, quiet when they should not interrupt browsing.",
 image: p("ctc", "solution-3.png"),
 },
 {
 title: "Automotive services",
 description:
 "Designed service booking flows that coexist with ecommerce (select store, choose service, date and time, contact details and appointment confirmation) closer to service design than add-to-cart.",
 image: p("ctc", "solution-4.png"),
 },
 {
 title: "Responsive retail contexts",
 description:
 "Considered desktop at home, phone in a garage or in-store comparison as different contexts, not simply the same interface shrunk onto a smaller screen.",
 image: p("ctc", "solution-5.png"),
 },
 {
 title: "Promotions & campaigns",
 description:
 "Supported flyer deals, clearance and seasonal campaigns within the broader shopping hierarchy so promotional messaging communicates value without overwhelming the product decision.",
 image: p("ctc", "solution-6.png"),
 },
 ],
 learnings: [
 "At enterprise scale, the skill is working with the people who understand different parts of the system (business, research, development and QA) until those perspectives become one experience.",
 "Design skill matters, but so do communication, listening, documentation, negotiation and systems thinking.",
 "The organization behind the experience may be enormous. The experience in front of the customer should not feel that way.",
 ],
 metrics: [
 { value: "4", label: "Retail brands, Canadian Tire, Sport Chek, Mark’s, Party City"},
 { value: "Enterprise", label: "Cross-functional UX, BA, research, QA and development"},
 { value: "Live", label: "Digital retail at canadiantire.ca"},
 ],
 overview:
 "I worked as a Senior UX Designer inside this large digital ecosystem, collaborating across multiple UX teams and contributing to experiences for four major retail brands: Canadian Tire, Sport Chek, Mark’s and Party City. While my work extended across these brands, this case study focuses on Canadian Tire. I worked directly with UX designers, Business Analysts, Researchers, QA specialists and development teams to design and improve customer-facing web experiences. My role was not simply to create pages, it was to understand business requirements, customer needs, technical constraints and existing platform patterns, then bring those pieces together into experiences that could work at Canadian Tire scale.",
 challenge:
 "Large organizations contain complexity for good reasons, departments, business rules, local stores, changing inventory and promotions, services that behave differently from products. My role was often to help translate that enterprise complexity into understandable customer decisions: Can I get this? How much does it cost? Is it available near me? When can I get it? Can I pick it up or have it delivered? What do I need to do next?",
 process: [
 {
 phase: "01",
 title: "Design inside the ecosystem",
 description:
 "Considered navigation, search, discovery, store selection, inventory, pricing, promotions, fulfillment, accounts, rewards, services, accessibility and responsive behaviour as connected systems, not isolated pages.",
 },
 {
 phase: "02",
 title: "From requirements to flows",
 description:
 "Partnered with Business Analysts to understand required vs optional behaviour, connected systems and edge cases, then organized those answers into customer-facing journeys.",
 },
 {
 phase: "03",
 title: "Discovery, product & fulfillment",
 description:
 "Designed listing and detail experiences that support comparison at catalog scale while keeping store context and how-to-get-it options part of the decision.",
 },
 {
 phase: "04",
 title: "Services alongside ecommerce",
 description:
 "Supported automotive service booking and other non-product journeys that need to feel familiar inside the same Canadian Tire ecosystem.",
 },
 {
 phase: "05",
 title: "Build, research, QA",
 description:
 "Collaborated with developers on constraints and states, used research to improve assumptions, and worked with QA when edge cases revealed experience problems, not only software defects.",
 },
 ],
 deliverables: [
 "UX design for enterprise ecommerce experiences",
 "Information architecture, user flows and interaction design",
 "Responsive design, wireframes and prototypes",
 "Content hierarchy and accessibility considerations",
 "Requirements translation with Business Analysts",
 "Research collaboration and design iteration",
 "Developer collaboration and implementation support",
 "Design QA with QA specialists",
 "Cross-brand digital experience work across the banner family",
 ],
 outcomes: [
 "Customer-facing experiences inside one of Canada’s largest and most complex retail ecosystems",
 "Stronger connection between business requirements, customer needs, research, technology and quality",
 "Clearer paths for discovery, store context, fulfillment and services",
 "Enterprise complexity kept behind the scenes, simple decisions in front of the customer",
 ],
 gallery: [
 {
 type: "image",
 src: p("ctc", "01-hero.png"),
 caption: "Canadian Tire homepage, entry into a national retail digital ecosystem",
 },
 {
 type: "image",
 src: p("ctc", "02-detail.png"),
 caption: "Product discovery, browsing and comparing at catalog scale",
 },
 {
 type: "image",
 src: p("ctc", "03-detail.png"),
 caption: "Responsive retail, desktop and mobile shopping contexts",
 },
 {
 type: "image",
 src: p("ctc", "04-detail.png"),
 caption: "Product detail, decision hierarchy across price, availability and actions",
 },
 {
 type: "image",
 src: p("ctc", "05-detail.png"),
 caption: "Discovery to product, different entry points, one understandable path",
 },
 {
 type: "image",
 src: p("ctc", "06-detail.png"),
 caption: "Ecommerce meets services, product shopping beside auto service journeys",
 },
 {
 type: "image",
 src: p("ctc", "07-detail.png"),
 caption: "Automotive services, booking flows that coexist with the retail ecosystem",
 },
 {
 type: "image",
 src: p("ctc", "08-detail.png"),
 caption: "Campaigns, discovery and services, connected experiences under one brand",
 },
 ],
 narrative: [
 {
 eyebrow: "Ecosystem",
 title: "Designing inside a huge ecosystem",
 body: [
 "Canadian Tire is not one customer journey. It is thousands of journeys living inside the same digital product, drills, winter tires, patio furniture, oil changes, local inventory checks and rewards.",
 "Every feature needs to consider the systems surrounding it: navigation, search, product discovery, store selection, inventory, pricing, promotions, fulfillment, accounts, rewards, services, accessibility and responsive behaviour.",
 "A change in one area can affect many others. My work required thinking about those connections constantly.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "Making a complex retail system feel simple",
 body: [
 "From inside the organization, complexity is understandable. From the customer’s perspective, most of it should disappear.",
 "Customers usually want something simpler: Can I get this product? How much does it cost? Is it available near me? When can I get it? Can I pick it up or have it delivered? What do I need to do next?",
 "My role was often to help translate enterprise complexity into understandable customer decisions.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Ecommerce, stores and services in one product",
 body: [
 "Canadian Tire has a strong relationship between digital shopping and physical stores. Location affects availability, pickup and other parts of the journey, important when it matters, quiet when it should not interrupt shopping.",
 "Modern retail does not end at Add to Cart. Pickup, ship-to-home and same-day options need to communicate how the customer can get the item as part of the purchase decision.",
 "Automotive service booking is closer to service design than ecommerce, yet it needs to coexist inside the same Canadian Tire ecosystem with familiar patterns.",
 ],
 bullets: [
 "Product availability depends on context",
 "One product, multiple ways to receive it",
 "Not every Canadian Tire journey is ecommerce",
 ],
 },
 {
 eyebrow: "Four brands",
 title: "Working across the banner family",
 body: [
 "My broader role included work across Canadian Tire, Sport Chek, Mark’s and Party City, each with its own customer needs and business requirements inside the larger corporate ecosystem.",
 "This case study focuses on Canadian Tire because it demonstrates the scale and complexity of the environment particularly well. Customers do not know which team owns which feature, to them, it is all one brand.",
 ],
 cards: [
 {
 title: "Canadian Tire",
 description: "Large-scale retail, ecommerce and services.",
 image: p("ctc", "01-hero.png"),
 },
 {
 title: "Sport Chek",
 description: "Sports, footwear, apparel and equipment.",
 },
 {
 title: "Mark’s",
 description: "Workwear, footwear and casual apparel.",
 },
 {
 title: "Party City",
 description: "Party supplies, celebrations and seasonal experiences.",
 },
 ],
 },
 ],
 closing:
 "Enterprise behind the scenes. Simple in front of the customer. Find what you need. Understand your options. Make a decision. Get it. Book it. Pick it up. Have it delivered. Keep moving.",
 },

 walmart: {
 impact: "Search-to-cart conversion rose 19% after PLP filter and checkout clarity improvements.",
 client: "Walmart (enterprise retail)",
 timeline: "10 months · 2022",
 team: "Lead UI/UX Designer · 2 product managers · 8 engineers · merchandising stakeholders",
 tools: ["Figma", "FigJam", "Optimizely", "FullStory", "Jira", "Confluence"],
 context:
 "Walmart's digital shoppers split between mobile browse, in-store pickup, and delivery, often switching mid-journey. Search relevance, promotional complexity, and checkout friction drove abandonment, especially when fees and pickup slots surfaced too late.",
 goals: [
 "Reduce pogo-sticking between search results and product pages",
 "Surface fees, promotions, and pickup slots before checkout commitment",
 "Align web and app component patterns for catalog-scale consistency",
 "Improve pickup satisfaction without slowing delivery-first flows",
 ],
 research: [
 {
 title: "Journey mapping at scale",
 description:
 "Mapped end-to-end paths for pickup, delivery, and browse-only shoppers across web and app with analytics funnels and session replay review.",
 },
 {
 title: "Checkout abandonment study",
 description:
 "Analyzed drop-off points across 50,000 sessions, surprise fees, slot unavailability, and account friction topped exit triggers.",
 },
 {
 title: "PLP filter usability tests",
 description:
 "Ran moderated tests on filter discoverability, chip behavior, and mobile drawer ergonomics with mixed retail familiarity levels.",
 },
 ],
 insights: [
 "Promotional badges without filter parity cause trust breaks when prices change at cart",
 "Pickup shoppers need inventory confidence at slot selection, not at checkout",
 "Mobile filter drawers fail when applied state isn't visible on the results grid",
 "Enterprise retail UX wins incrementally, component reuse beats one hero redesign",
 ],
 solutions: [
 {
 title: "Search and PLP redesign",
 description:
 "Redesigned result cards, sticky filter chips, and sort logic to keep shoppers in the listing layer, reducing unnecessary PDP hops.",
 },
 {
 title: "Checkout simplification",
 description:
 "Collapsed steps, surfaced fees early, and aligned payment and address patterns with clearer error recovery on mobile.",
 },
 {
 title: "Pickup slot selector",
 description:
 "Built slot UI with real-time inventory confidence, store distance context, and fallback paths when items weren't available for pickup.",
 },
 ],
 learnings: [
 "At catalog scale, filter IA matters more than card visual polish",
 "Pickup and delivery are different mental models, shared checkout shells need mode-aware defaults",
 ],
 metrics: [
 { value: "+19%", label: "Search-to-cart conversion lift"},
 { value: "−14%", label: "Checkout abandonment reduction"},
 { value: "+11 pts", label: "Pickup satisfaction score increase"},
 ],
 overview:
 "Walmart needed digital shopping to feel as straightforward as walking an aisle. I led UX for search and PLP improvements, checkout simplification, and pickup slot selection across web and responsive components.",
 challenge:
 "Massive catalog, aggressive promotional complexity, and users who split between mobile browsing and in-store pickup. Every change had to ship without breaking merchandising campaigns or legacy backend constraints.",
 process: [
 {
 phase: "01",
 title: "Journey mapping",
 description:
 "Mapped pickup, delivery, and browse paths across web and app. Prioritized funnel drops with analytics and stakeholder alignment.",
 },
 {
 phase: "02",
 title: "Search and filters",
 description:
 "Redesigned PLP filters, sort logic, and result cards. Validated chip behavior and mobile drawer patterns in usability tests.",
 },
 {
 phase: "03",
 title: "Checkout simplification",
 description:
 "Reduced steps and surfaced fees early. Aligned error states and guest checkout paths across breakpoints.",
 },
 {
 phase: "04",
 title: "Pickup integration",
 description:
 "Designed slot selector with inventory confidence and store context. Piloted at regional rollout with satisfaction tracking.",
 },
 ],
 deliverables: [
 "Search and PLP redesign specifications",
 "Filter chip and mobile drawer component set",
 "Checkout flow v2 with fee transparency patterns",
 "Pickup slot selector and inventory confidence UI",
 "Responsive component updates for shared library",
 ],
 outcomes: [
 "Search-to-cart conversion increased 19%",
 "Checkout abandonment decreased 14%",
 "Pickup satisfaction score rose 11 points in pilot regions",
 "Shared components adopted across two additional category teams",
 ],
 gallery: [
 { type: "image", src: p("walmart", "01-hero.png"), caption: "Product discovery and search results redesign"},
 { type: "image", src: p("walmart", "02-detail.png"), caption: "PLP filters and sticky chip behavior"},
 { type: "image", src: p("walmart", "03-detail.png"), caption: "Result cards with promotional clarity"},
 { type: "image", src: p("walmart", "04-detail.png"), caption: "Streamlined cart and checkout flow"},
 { type: "image", src: p("walmart", "05-detail.png"), caption: "Pickup slot selector with inventory confidence"},
 ],
 },

 anova: {
 impact:
 "Designed a native oven companion that turns appliance functions into human decisions, from choosing food to guided setup, timers and completion.",
 client: "Digital Oven Guide",
 timeline: "Solo UX/UI and Content Designer · 24-person multidisciplinary team",
 team: "Solo UX/UI and Content Designer · VP Product · iOS, Android and backend developers · QA · product and technical teams",
 tools: [
 "Figma",
 "Native app patterns",
 "Design system",
 "UX writing",
 "Prototyping",
 "Design QA",
 "Accessibility",
 ],
 figmaUrl: "https://www.figma.com/design/ztA6OE75zCogvR0m66KUsX/Anova-Guide-Page",
 secondaryFigmaUrl: "https://www.figma.com/design/8l0tXjOO3JoMJp7mS0mpkk/Anova-Guide-high-level-flow",
 secondaryFigmaLabel: "High-level app flow",
 context:
 "The Digital Oven Guide is a native application designed to help people use an oven with greater clarity and confidence. Cooking with an oven sounds simple until the user needs to decide which mode to use, what temperature is appropriate, where food should be positioned, how long it should cook and what to do next. The physical appliance contains the functionality. The digital product helps make that functionality understandable.",
 goals: [
 "Translate appliance complexity into practical human decisions",
 "Start with the user’s food goal rather than oven modes",
 "Support real kitchen contexts, busy hands, limited attention, parallel tasks",
 "Design guided cooking with clear hierarchy, timers, progress and states",
 "Build a design system and content language across the complete app",
 "Work hand-in-hand with product and development through implementation and design QA",
 ],
 research: [
 {
 title: "Users think in outcomes",
 description:
 "People begin with chicken, bread, pizza or steak, not the name of an oven mode. The experience needed to start from familiar intention and introduce technical settings only when relevant.",
 },
 {
 title: "Kitchen context changes UX",
 description:
 "Users may be standing, preparing food, waiting on heat or juggling several steps. Information must be scannable, actions obvious and instructions concise, the app should support cooking, not compete with it.",
 },
 {
 title: "Solo ownership across disciplines",
 description:
 "As the only UX/UI and content designer on a 24-person team, design decisions had to stay connected across journeys, components, writing, native behaviour and accessibility.",
 },
 ],
 insights: [
 "The oven knows what it can do, the user needs to know what to do",
 "Guided experiences work when users always know where they are, what to do now and what happens next",
 "A timer is not just another component, during cooking it may be the most important information on screen",
 "Design for states, not only screens, default, active, loading, completed and error are the real product",
 "The app and the oven are one experience, every digital instruction connects to a physical action",
 ],
 solutions: [
 {
 title: "Start with the food",
 description:
 "Organized discovery around what users want to cook, familiar goals first, appliance settings revealed when they matter.",
 image: p("anova", "solution-1.png"),
 },
 {
 title: "Choose → prepare → set → cook → complete",
 description:
 "Designed a guided journey that answers setting, temperature, placement, duration and next steps without dumping everything at once.",
 image: p("anova", "solution-2.png"),
 },
 {
 title: "One step at a time",
 description:
 "Structured cooking guidance so current action, progress and next step stay clear, supportive without becoming intrusive.",
 image: p("anova", "solution-3.png"),
 },
 {
 title: "Timers and live status",
 description:
 "Treated time and oven status as core journey information, started, in progress and complete states that reassure rather than distract.",
 image: p("anova", "solution-4.png"),
 },
 {
 title: "Content as interface",
 description:
 "Wrote instructions, actions, warnings and completion language with the UI so users never need to interpret the interface before they can use it.",
 image: p("anova", "solution-5.png"),
 },
 {
 title: "Design system + native delivery",
 description:
 "Built reusable foundations alongside the product and partnered with developers through build and design QA for a consistent native experience.",
 image: p("anova", "solution-6.png"),
 },
 ],
 learnings: [
 "Context is everything, a mobile screen exists inside a kitchen, a goal and a physical appliance.",
 "Being the sole designer means owning one product language across UX, UI, content, components, states and accessibility.",
 "The oven has the functions. The experience gives them meaning.",
 ],
 metrics: [
 { value: "1", label: "Solo UX/UI and Content Designer"},
 { value: "24", label: "Multidisciplinary product team"},
 { value: "Native", label: "iOS and Android companion experience"},
 ],
 overview:
 "I worked as the sole UX/UI and Content Designer on the Digital Oven Guide as part of a 24-person multidisciplinary team. I worked directly with the VP Product and development teams throughout the process, owning the design experience from early product thinking to the design system, user flows, interface, native mobile patterns, content and implementation support. My role was not limited to individual screens, I was responsible for creating a consistent product language across the complete application and making sure that design, content and development worked together as one experience.",
 challenge:
 "A physical appliance is built around functions. Users think about outcomes. The oven may think in cooking mode, temperature, rack position and duration. The user thinks: I want to cook this. The application needed to translate technical functionality into something practical, not teach everything about the oven, but help users make the right decision at the right moment.",
 process: [
 {
 phase: "01",
 title: "Define the product language",
 description:
 "Partnered with the VP Product to turn goals into experiences, who needs this, when they use it, what the appliance and app each need, and which states matter before screens are drawn.",
 },
 {
 phase: "02",
 title: "Map the cooking journey",
 description:
 "Designed from food choice through preparation, oven setup, cooking and completion, with hierarchy that reveals the right information at each stage.",
 },
 {
 phase: "03",
 title: "Design system and content",
 description:
 "Built reusable foundations and wrote guidance, labels, timers, errors and empty states as one interface language.",
 },
 {
 phase: "04",
 title: "Native build collaboration",
 description:
 "Worked hand-in-hand with iOS, Android and backend developers on constraints, native behaviour, data states and edge cases, design was part of the build, not a late handoff.",
 },
 {
 phase: "05",
 title: "Journey testing and design QA",
 description:
 "Tested complete journeys and reviewed live builds for hierarchy, content, accessibility and states until the implementation matched the intended experience.",
 },
 ],
 deliverables: [
 "Product UX, information architecture and user flows",
 "UI design and native mobile patterns",
 "Design system and component library",
 "UX writing and product content across guidance states",
 "Prototypes for cooking journeys and key interactions",
 "Developer collaboration and design QA",
 "Accessibility considerations at the system level",
 ],
 outcomes: [
 "A connected native experience that helps users move from uncertainty to action",
 "Guidance organized around food goals rather than appliance jargon first",
 "One consistent product language across design, content and development",
 "Technology remaining complex behind the experience, simple in front of the user",
 ],
 gallery: [
 {
 type: "image",
 src: p("anova", "01-hero.png"),
 caption: "Home, start with something delicious, not an oven mode",
 },
 {
 type: "image",
 src: p("anova", "02-detail.png"),
 caption: "Guide overview, doneness, timing and a clear next action",
 },
 {
 type: "image",
 src: p("anova", "03-detail.png"),
 caption: "Guided journey, choose food, prepare and set the oven",
 },
 {
 type: "image",
 src: p("anova", "04-detail.png"),
 caption: "Discovery to guidance, familiar goals become actionable setup",
 },
 {
 type: "image",
 src: p("anova", "05-detail.png"),
 caption: "Preheat → cook → finish, progress and status along the way",
 },
 {
 type: "image",
 src: p("anova", "06-detail.png"),
 caption: "Live cooking, timers, oven status and glanceable hierarchy",
 },
 {
 type: "image",
 src: p("anova", "07-detail.png"),
 caption: "Preparation content, ingredients and guidance designed to scan quickly",
 },
 {
 type: "image",
 src: p("anova", "08-detail.png"),
 caption: "Design explorations, end-to-end guide experience in Figma",
 },
 ],
 narrative: [
 {
 eyebrow: "Product",
 title: "The oven knows what it can do. The user needs to know what to do.",
 body: [
 "Modern ovens provide modes, temperatures, rack positions, timers and recommendations. For experienced cooks some of those decisions are familiar. For everyone else, the oven can quickly become more complicated than expected.",
 "The Digital Oven Guide was designed as a bridge between the appliance and the person using it, a companion that guides rather than expecting users to understand every function before they begin.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "Translate appliance complexity into human decisions",
 body: [
 "The goal was not to teach users everything about the oven. The goal was to help them make the right decision at the right moment.",
 "Present everything at once and the application becomes overwhelming. Hide too much and the user loses confidence. The experience needed a clear hierarchy that revealed the right information at the right stage.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Kitchen context, guidance and the physical product",
 body: [
 "This was not an app designed only for the sofa. Users may be standing in the kitchen with busy hands, food prepared and the oven already heating. Instructions need to be concise and progress visible.",
 "Every digital instruction eventually connects to a physical action, set this temperature, choose this mode, place the food here, wait this long. The mobile experience and the oven are one product experience.",
 ],
 bullets: [
 "Start with the user’s goal, not the appliance setting",
 "Where am I? What do I do now? What happens next?",
 "Digital + physical = one experience",
 ],
 },
 {
 eyebrow: "Ownership",
 title: "One designer. One product language.",
 body: [
 "There was no separate visual designer, interaction designer, UX writer or design-system team. I moved between those responsibilities depending on what the product required, journeys, components, instructions, native interactions and technical constraints.",
 "Working directly with the VP Product and developers meant UX was part of product definition and part of the build. The goal was never to protect the Figma file. The goal was to build the strongest product.",
 ],
 },
 ],
 image: p("anova", "01-hero.png"),
 closing:
 "The oven has the functions. The experience gives them meaning. Choose the food. Understand the setup. Follow the guidance. Track the process. Complete the task.",
 },

 ymca: {
 impact:
 "Designed a native YMCA member app that organizes facilities, activities and everyday needs around one clear member experience.",
 client: "YMCA",
 timeline: "Solo UX/UI, Content and Product Architecture Designer · 15-person multidisciplinary team",
 team: "Solo UX/UI, Content and Product Architecture Designer · client stakeholders · marketing · Business Analysts · product · iOS, Android and backend developers · QA",
 tools: [
 "Figma",
 "Product architecture",
 "Information architecture",
 "Native app patterns",
 "Design system",
 "UX writing",
 "Prototyping",
 "Design QA",
 "Accessibility",
 ],
 figmaUrl: "https://www.figma.com/design/HgLHwG9Xmw2QgXCRGucFDh/YMCA-Handoff",
 context:
 "The YMCA member app was designed to create a clearer digital connection between members and their fitness experience. A gym member may need to access services, understand what is available, manage activities, navigate different areas of the facility and return regularly to the things that matter most. The challenge was bringing those needs into one native mobile experience without making the product feel complicated.",
 goals: [
 "Define product architecture before designing individual screens",
 "Organize the app around member intentions, not internal departments",
 "Help members answer: What can I do? What is relevant? Where do I go? What is next?",
 "Design home for orientation and hierarchy, not a feature directory",
 "Build a design system, content language and native patterns across the app",
 "Balance marketing communication with functional member utility",
 "Partner with BAs, stakeholders and developers through implementation and design QA",
 ],
 research: [
 {
 title: "Architecture before screens",
 description:
 "It is easy to begin a mobile project by creating a home screen. But home is only useful once you understand what the complete application contains. I started by treating the product as a system, primary goals, what belongs together, what is global, frequent vs occasional, and how navigation remains understandable as the product grows.",
 },
 {
 title: "Members think in tasks",
 description:
 "Organizations often structure information around departments. Members think: I want to work out. I want to find something. I want to manage my activity. I want to know what is happening today. That difference shaped the information architecture.",
 },
 {
 title: "Solo ownership across the product language",
 description:
 "As the only UX/UI and content designer on a 15-person team, there was no separate information architect, visual designer, UX writer or design-system team. Architecture, UX, UI, content and components had to stay connected through one product language.",
 },
 ],
 insights: [
 "The organization is complex, the member journey should not be",
 "Members should not need to understand how the organization is structured internally",
 "A successful home screen creates hierarchy, it should not become a directory of every feature",
 "The relationship between screens matters more than any individual page",
 "Marketing communicates value, product UX helps someone complete a task",
 "Architecture answers where something belongs, the design system answers how it should behave",
 ],
 solutions: [
 {
 title: "Architecture around the member",
 description:
 "Defined the product structure with the member at the centre (Home, calendar, scan, profile, facilities and related journeys) so organizational complexity translated into a structure that made sense from the member’s perspective.",
 image: p("ymca", "solution-1.png"),
 },
 {
 title: "Home that answers what matters now",
 description:
 "Designed home for orientation (greeting, facility context, status, achievements and clear paths into the wider experience) without crowding the screen with every feature.",
 image: p("ymca", "solution-2.png"),
 },
 {
 title: "Scan and membership identity",
 description:
 "Made check-in and digital membership identity fast and glanceable, QR access, wallet integration and account details designed for use at the facility door.",
 image: p("ymca", "solution-3.png"),
 },
 {
 title: "Discovery with progressive structure",
 description:
 "Structured location, membership and plan selection so discovery starts broad enough to explore, then narrows toward something relevant, without showing everything at once.",
 image: p("ymca", "solution-4.png"),
 },
 {
 title: "Repeated use and calendar",
 description:
 "Supported returning members with predictable navigation, calendar context and frequent actions that require less rediscovery over time.",
 image: p("ymca", "solution-5.png"),
 },
 {
 title: "One language, system, content and build",
 description:
 "Created the design system and product content alongside the app, then worked with developers through states, accessibility and design QA so design was part of the build, not a late handoff.",
 image: p("ymca", "solution-6.png"),
 },
 ],
 learnings: [
 "A beautiful screen cannot solve a confusing product structure, if architecture is wrong, every future feature makes the problem larger.",
 "Marketing, business, UX, content and technology all see the product differently, the designer’s role is to connect those perspectives around the member.",
 "Users should not need to think about architecture. They should simply know where to go.",
 ],
 metrics: [
 { value: "1", label: "Solo UX/UI, Content and Product Architecture Designer"},
 { value: "15", label: "Multidisciplinary delivery team"},
 { value: "Native", label: "iOS and Android member experience"},
 ],
 overview:
 "I worked as the solo UX/UI, Content and Product Architecture Designer as part of a 15-person multidisciplinary team. I worked directly with client stakeholders, marketing teams, Business Analysts and developers, owning the experience from product structure and information architecture through user flows, interface design, design system, content, prototypes and implementation support. I wasn't just deciding what individual pages should look like. I needed to define how the complete product should fit together.",
 challenge:
 "Large organizations naturally contain complexity. Different services may be managed by different teams. Programs have different requirements. Marketing needs to communicate offers. Business rules determine access. Technical systems hold different kinds of data. The customer sees none of those boundaries, they see one YMCA. The product architecture needed to translate that complexity into a structure that made sense from the member’s perspective.",
 process: [
 {
 phase: "01",
 title: "Design the architecture first",
 description:
 "Before screens, defined primary member goals, which experiences belong together, what should be global, frequent vs secondary, journey starts and returns, and how navigation stays understandable as the product grows.",
 },
 {
 phase: "02",
 title: "Design around member goals",
 description:
 "Organized IA around recognizable intentions (work out, find something, manage an activity, know what is happening today) rather than exposing internal departments.",
 },
 {
 phase: "03",
 title: "Home, journeys and page IA",
 description:
 "Designed home for what matters right now, mapped discover → explore → act → manage → return, and applied hierarchy inside detail screens so identity, essentials, support and primary action stay clear.",
 },
 {
 phase: "04",
 title: "System, content and marketing balance",
 description:
 "Built the design system and wrote navigation, instructions, actions, empty and error states with the UI. Worked with marketing so brand communication had a place without overwhelming member utility.",
 },
 {
 phase: "05",
 title: "Build collaboration and design QA",
 description:
 "Partnered with BAs on rules-to-journeys, stakeholders on trade-offs, and developers on native behaviour, states and edge cases. Stayed through design QA and journey testing so the live product matched the intended experience.",
 },
 ],
 deliverables: [
 "Product architecture and information architecture",
 "UX strategy, user flows and interaction design",
 "UI design and native mobile patterns",
 "Design system, component states and accessibility",
 "UX writing and product content",
 "Prototypes, stakeholder collaboration and design QA",
 ],
 outcomes: [
 "A more connected digital YMCA member experience",
 "Architecture that organizes services and journeys around the member",
 "A design system and content language that keep the interface consistent",
 "Know what is available. Know where to go. Know what to do next.",
 "One organization. One member experience.",
 ],
 gallery: [
 {
 type: "image",
 src: p("ymca", "01-hero.png"),
 caption: "Home, orientation, facility context and what matters now",
 },
 {
 type: "image",
 src: p("ymca", "02-detail.png"),
 caption: "Scan, digital membership identity for facility access",
 },
 {
 type: "image",
 src: p("ymca", "03-detail.png"),
 caption: "Onboarding journey, start, intro and into the member experience",
 },
 {
 type: "image",
 src: p("ymca", "04-detail.png"),
 caption: "Home and profile, frequent return points in the product",
 },
 {
 type: "image",
 src: p("ymca", "05-detail.png"),
 caption: "Discovery, location, membership and plan selection",
 },
 {
 type: "image",
 src: p("ymca", "06-detail.png"),
 caption: "Calendar and scan, manage activity and return to access",
 },
 {
 type: "image",
 src: p("ymca", "07-detail.png"),
 caption: "Account setup, login, profile setup and member identity",
 },
 {
 type: "image",
 src: p("ymca", "08-detail.png"),
 caption: "Native member home, hierarchy without feature overload",
 },
 ],
 narrative: [
 {
 eyebrow: "Product",
 title: "Bringing the member experience into one place",
 body: [
 "A YMCA member interacts with more than a gym. Their experience can involve fitness services, activities, facilities, information, schedules and the everyday details required to understand what they can do and what they need next.",
 "Without a clear digital structure, those experiences become fragmented. The member should not need to understand how the organization is structured internally. They should open the application and quickly answer: What can I do? What is relevant to me? Where do I need to go? What is happening next?",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "The organization is complex. The member journey should not be.",
 body: [
 "Different services, programs, marketing initiatives, business rules and technical systems all create complexity. The customer sees none of those organizational boundaries, they see one YMCA.",
 "That meant product architecture had to translate organizational complexity into a structure that made sense from the member’s perspective. This became one of the most important parts of my role.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Architecture, home and the journeys between screens",
 body: [
 "I designed the structure before the screens, with the member at the centre of Home, activities, scan, account and facility information. Home answers what matters right now. Journeys connect discovery, action, management and return.",
 "Content was designed with the interface. Marketing had space without overwhelming utility. The design system and architecture worked together so new features had a place to belong and a way to behave.",
 ],
 bullets: [
 "Design the product before designing the home screen",
 "Translate organization language into member intentions",
 "Architecture → experience · system → consistent behaviour",
 ],
 },
 {
 eyebrow: "Ownership",
 title: "One designer. One product language.",
 body: [
 "Being the only UX/UI and content designer inside a 15-person team created broad ownership, product architecture, IA, UX, UI, native patterns, design system, writing, accessibility, prototyping, BA collaboration, stakeholder alignment, developer partnership and design QA.",
 "The advantage was continuity. Architecture, UX, UI, content and components stayed connected through one product language, from early structure through high-fidelity native designs ready for implementation.",
 ],
 },
 ],
 image: p("ymca", "01-hero.png"),
 closing:
 "One organization. One member experience. Know what is available. Know where to go. Know what to do next.",
 },

 ppjv: {
 impact:
 "Designed an internal banking dashboard and led the Aurora design system, making complex financial operations clearer, faster and more consistent for professional users.",
 client: "PPJV · Internal Banking",
 timeline: "Senior UX/UI & Content Designer · Design System Lead · 58-person delivery team",
 team: "Senior UX/UI & Content Designer · Design System Lead · 1 additional UX Designer · client stakeholders · Business Analysts · frontend/backend developers · QA · product and technical teams",
 tools: [
 "Figma",
 "Aurora Design System",
 "Information architecture",
 "Dashboard UX",
 "UX writing",
 "Prototyping",
 "Design QA",
 "Accessibility",
 ],
 figmaUrl: "https://www.figma.com/design/lCkuJJCNMUhCTFQAOSA85E/Handoff-file",
 secondaryFigmaUrl: "https://www.figma.com/design/8uI6GauoTwcBRWSV4yxBJb/PPJV-Design-System---Aurora",
 secondaryFigmaLabel: "Aurora Design System",
 context:
 "Banking software does not need to impress customers walking past a storefront. It needs to help professionals make the right decisions quickly, accurately and consistently. This internal fintech dashboard was designed to support complex banking operations through a centralized digital experience, information-dense workflows, multiple roles, operational states and the accuracy expected from financial systems.",
 goals: [
 "Make high information density usable without hiding essential operational data",
 "Translate business rules into clear flows, states, actions and recovery paths",
 "Create dashboard hierarchy so users know what needs attention first",
 "Lead Aurora as a shared product language across design and development",
 "Design tables, forms, status, errors and content as complete interaction systems",
 "Collaborate with BAs, stakeholders, QA and client developers through implementation and design QA",
 ],
 research: [
 {
 title: "Internal tools are used differently",
 description:
 "Professional users are doing their job, not exploring. They learn patterns, develop routines and repeat actions. Consistency becomes critical; changing the location or behaviour of an action unnecessarily slows people down.",
 },
 {
 title: "From business rules to experience",
 description:
 "Enterprise financial products contain detailed logic, permissions, required fields, state conditions and edge cases. Working with BAs meant answering how users know a condition exists, which action is available, and how they recover when it fails.",
 },
 {
 title: "Small UX team, large delivery org",
 description:
 "Two UX designers supporting a 58-person team needed shared patterns, interaction principles, content rules and component behaviour. Aurora became one of the tools that scaled design ownership across the product.",
 },
 ],
 insights: [
 "How do you make complexity usable, not how do you remove it",
 "A dashboard should answer what this user needs to understand or do, not display every requested metric",
 "A table is an interaction system, scan, sort, filter, select, compare, act and recover",
 "Status cannot rely only on colour, language, placement and hierarchy create one state language",
 "Errors should answer what happened, why it matters and what to do next",
 "Design systems need ownership, without it they become another static file",
 ],
 solutions: [
 {
 title: "Dashboard hierarchy that answers attention",
 description:
 "Designed operational overviews around primary information, status, items requiring attention and next actions, hierarchy instead of an unfiltered stream of metrics and shortcuts.",
 image: p("ppjv", "solution-1.png"),
 },
 {
 title: "Data-dense workflows without chaos",
 description:
 "Structured originator management, search and detail views with grouping, typography, progressive disclosure and clear actions so users can scan before they read.",
 image: p("ppjv", "solution-2.png"),
 },
 {
 title: "Transfers, transactions and recovery",
 description:
 "Designed transfer review, transaction detail and error states as complete experiences (problem, explanation and recovery) not technical messages added after development.",
 image: p("ppjv", "solution-3.png"),
 },
 {
 title: "Forms, validation and confirmation",
 description:
 "Guided complex inputs from empty through in-progress and validation to confirmation, reducing cognitive load and preventing mistakes before correcting them.",
 image: p("ppjv", "solution-4.png"),
 },
 {
 title: "Aurora, one system behind the product",
 description:
 "Led Aurora foundations and component families (typography, colour, buttons, tables, navigation, fields and states) so consistency scaled across features and teams.",
 image: p("ppjv", "solution-5.png"),
 },
 {
 title: "Components, navigation and documentation",
 description:
 "Designed reusable patterns with variants, states, content rules and accessibility built in, then partnered with developers so Figma intent survived into production.",
 image: p("ppjv", "solution-6.png"),
 },
 ],
 learnings: [
 "Large enterprise products cannot be designed effectively one screen at a time, every new pattern has product-wide consequences.",
 "Simplicity in fintech does not always mean removing information, it means creating structure within necessary complexity.",
 "Ask whether a decision belongs to the product, not only whether it works on this page.",
 ],
 metrics: [
 { value: "58", label: "Person multidisciplinary delivery team"},
 { value: "2", label: "UX designers supporting the product"},
 { value: "Aurora", label: "Design system led across the experience"},
 ],
 overview:
 "I worked as a Senior UX/UI and Content Designer and Design System Lead as part of a 58-person multidisciplinary delivery team. I worked alongside one additional UX Designer and collaborated directly with client stakeholders, Business Analysts, QA teams and client development teams. My responsibilities extended from individual workflows and pages to the system behind them, product experiences, interaction patterns, the Aurora design system, UX content, complex states, implementation collaboration and consistency across a large evolving internal banking product.",
 challenge:
 "Financial systems create a unique design environment: high information density, repeated workflows, unusual states, unavailable actions and decisions with real operational consequences. The interface needed clarity, efficiency, accuracy, consistency, visibility and accessibility, helping users move quickly without encouraging careless interaction.",
 process: [
 {
 phase: "01",
 title: "Translate rules into journeys",
 description:
 "Worked with BAs and stakeholders to turn conditions, permissions and dependencies into flows that communicate availability, missing information, failure and next steps.",
 },
 {
 phase: "02",
 title: "Product architecture and dashboard UX",
 description:
 "Defined where workflows begin, what stays persistent, which actions are global vs contextual, and how hierarchy surfaces attention without becoming another dump of metrics.",
 },
 {
 phase: "03",
 title: "Tables, forms, status and content",
 description:
 "Treated tables as interaction systems; designed form stages and confirmations; built one status language; wrote labels, warnings, errors and success states with the UI.",
 },
 {
 phase: "04",
 title: "Lead Aurora",
 description:
 "Established foundations, component architecture, variants, states, usage rules and documentation so a small UX team could support a large delivery organization consistently.",
 },
 {
 phase: "05",
 title: "Build, QA and design QA",
 description:
 "Collaborated with client developers on behaviour and system implementation, worked with QA on edge cases, and reviewed live builds against Aurora so quality survived production.",
 },
 ],
 deliverables: [
 "Product UX, information architecture and complex user flows",
 "Dashboard, data-dense interfaces, tables and forms",
 "Aurora design system, foundations, components and documentation",
 "Status systems, error patterns and UX writing",
 "Accessibility patterns embedded in reusable components",
 "Developer handoff, collaboration, QA partnership and design QA",
 ],
 outcomes: [
 "A more structured product language for building and evolving a complex internal financial system",
 "Dashboards and workflows that help users identify attention, status and next actions",
 "Aurora as a shared foundation between design and development",
 "Complexity remaining in the business, structure created in the interface",
 "Complex financial operations. One clear product language.",
 ],
 gallery: [
 {
 type: "image",
 src: p("ppjv", "01-hero.png"),
 caption: "Dashboard, what needs attention, status and next actions",
 },
 {
 type: "image",
 src: p("ppjv", "02-detail.png"),
 caption: "Manage originators, data-dense list with clear hierarchy",
 },
 {
 type: "image",
 src: p("ppjv", "03-detail.png"),
 caption: "Search to detail, progressive structure for complex records",
 },
 {
 type: "image",
 src: p("ppjv", "04-detail.png"),
 caption: "Transactions and transfers, operational review workflows",
 },
 {
 type: "image",
 src: p("ppjv", "05-detail.png"),
 caption: "Forms, empty, validation and confirmation as one journey",
 },
 {
 type: "image",
 src: p("ppjv", "06-detail.png"),
 caption: "Permissions and security, roles, grids and access clarity",
 },
 {
 type: "image",
 src: p("ppjv", "07-detail.png"),
 caption: "Aurora buttons, variants and states for consequence hierarchy",
 },
 {
 type: "image",
 src: p("ppjv", "08-detail.png"),
 caption: "Aurora foundations, colour, tables and navigation as one language",
 },
 ],
 narrative: [
 {
 eyebrow: "Product",
 title: "Internal banking is a different kind of UX",
 body: [
 "Consumer applications often design for simplicity through reduction. Internal enterprise products cannot always remove information, that information may be essential to the work.",
 "An internal banking employee may need status, history, ownership, financial information, related records, permissions, warnings and next actions before taking a decision. The interface cannot hide information simply to create a cleaner screenshot. It needs to organize that information so users can understand what matters and act with confidence.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "High information density. High consequence decisions.",
 body: [
 "Users work with large amounts of information, repeat workflows throughout the day, compare data quickly, identify unusual states and understand why an action is unavailable, with real operational consequences.",
 "My role included translating business logic into interaction design: how does the user know the condition exists, when should we communicate it, which action should be available, and how do they recover when something fails?",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Aurora, the system behind the experience",
 body: [
 "As Design System Lead I created and led Aurora so a growing dashboard would not become a collection of disconnected tools. Foundations, component families, status patterns, tables, forms and documentation established one product language.",
 "Experience, interface and system lived across handoff files and Aurora together, what the user needs to accomplish, how the workflow is presented, and how the product stays consistent as it grows.",
 ],
 bullets: [
 "Requirement → flow → interface",
 "Does this belong to the product, not only this page?",
 "Accessibility belongs inside the system",
 ],
 },
 {
 eyebrow: "Ownership",
 title: "Senior UX/UI, content and design system leadership",
 body: [
 "Working with one additional UX Designer inside a 58-person team meant significant ownership across UX, UI, content, architecture, Aurora and collaboration with stakeholders, BAs, QA and client developers.",
 "Figma was not the end of the work. Design QA protected both the individual feature and the larger system so implementation did not quietly introduce another inconsistency across the product.",
 ],
 },
 ],
 image: p("ppjv", "01-hero.png"),
 closing:
 "Complex financial operations. One clear product language. The complexity remained in the business. The interface created structure around it.",
 },

 "first-principles": {
 impact: "Design-to-dev time dropped 30% after three squads adopted shared tokens and core components.",
 client: "First Principles (internal product org)",
 timeline: "8 months · 2021",
 team: "Lead UI/UX Designer · 2 product designers · 4 engineers · design systems advocate",
 tools: ["Figma", "Storybook", "Zeroheight", "Style Dictionary", "GitHub", "Notion"],
 context:
 "A fast-growing product team shipped features weekly but every surface looked slightly different, button radii, type scales, and form patterns diverged squad by squad. Engineers copied Figma frames into code one-off; designers reinvented basics each sprint.",
 goals: [
 "Establish shared tokens and 40 core components without slowing initial velocity",
 "Document usage guidance, not just specs, when to use, not only how it looks",
 "Migrate legacy screens through phased adoption, not a big-bang rewrite",
 "Give leadership visible brand consistency without centralized design bottleneck",
 ],
 research: [
 {
 title: "UI inventory",
 description:
 "Screenshot every production screen and clustered inconsistencies into token gaps, redundant components, and undocumented patterns.",
 },
 {
 title: "Squad workflow interviews",
 description:
 "Interviewed designers and engineers from three squads on how they currently picked components and where system debt slowed releases.",
 },
 ],
 insights: [
 "Systems fail when components ship without decision guidance, teams revert to custom UI under deadline",
 "Token naming must match code variables; designer-friendly labels alone don't migrate",
 "Office hours beat launch announcements for adoption in fast-moving product orgs",
 "40 components is enough if they cover 90% of screens, depth over breadth",
 ],
 solutions: [
 {
 title: "Token foundation",
 description:
 "Defined color, type, spacing, and elevation tokens with Style Dictionary export, single source synced to Figma and codebase.",
 },
 {
 title: "Core component library",
 description:
 "Built 40 components with usage docs, do/don't examples, and Storybook stories covering states engineers actually implement.",
 },
 {
 title: "Adoption program",
 description:
 "Ran migration sprints, weekly office hours, and lint rules, measuring adoption by production usage, not Figma library installs.",
 },
 ],
 learnings: [
 "Design systems for startups must ship alongside features, parallel tracks beat freeze periods",
 "Documentation sites need search and scenarios; component galleries alone don't change habits",
 ],
 metrics: [
 { value: "−30%", label: "Design-to-dev time on migrated flows"},
 { value: "−60%", label: "UI inconsistency bugs in QA"},
 { value: "3", label: "Product squads fully adopted"},
 ],
 overview:
 "The team shipped fast but every feature looked slightly different. I led First Principles from UI inventory through token build, 40 core components, documentation site, and squad adoption program.",
 challenge:
 "Engineers wanted copy-paste components. Designers wanted room to solve new problems. Leadership wanted brand consistency yesterday, without a centralized bottleneck on every feature decision.",
 process: [
 {
 phase: "01",
 title: "UI inventory",
 description:
 "Screenshot production and clustered inconsistencies into token and component gaps with severity scoring for migration priority.",
 },
 {
 phase: "02",
 title: "Token & component build",
 description:
 "Defined tokens and 40 core components with usage guidance. Paired with engineers on Storybook and code parity from day one.",
 },
 {
 phase: "03",
 title: "Documentation site",
 description:
 "Published Zeroheight site with scenarios, search, and migration guides, not just static component thumbnails.",
 },
 {
 phase: "04",
 title: "Adoption program",
 description:
 "Ran office hours, migration sprints, and lint rules. Tracked production usage and bug trends squad by squad.",
 },
 ],
 deliverables: [
 "Design token library, Figma and code sync",
 "40 core components with Storybook stories",
 "Documentation site with usage scenarios",
 "Migration guide for legacy screens",
 "Adoption playbook and office hours program",
 ],
 outcomes: [
 "Design-to-dev time decreased 30% on migrated flows",
 "UI inconsistency bugs dropped 60% in QA cycles",
 "System adopted by all three product squads",
 "Leadership visibility into consistency without design review gate on every PR",
 ],
 gallery: [
 { type: "image", src: p("first-principles", "01-hero.png"), caption: "Token scale, color, type, and spacing"},
 { type: "image", src: p("first-principles", "02-detail.png"), caption: "Core component library overview"},
 { type: "image", src: p("first-principles", "03-detail.png"), caption: "Usage documentation with do/don't"},
 { type: "image", src: p("first-principles", "04-detail.png"), caption: "Storybook stories and code parity"},
 { type: "image", src: p("first-principles", "05-detail.png"), caption: "Migration guide and squad adoption tracker"},
 ],
 },

 westjet: {
 impact:
 "Created a proposal vision connecting ticketing, check-in, baggage and operations into one journey from ticket to takeoff.",
 client: "WestJet",
 timeline: "Creative Director · Proposal Lead Designer · 5-person proposal and design team",
 team: "Creative Director · Proposal Lead Designer · 5-person proposal team · client stakeholders · client product, business and technical teams",
 tools: [
 "Figma",
 "FigJam",
 "Creative direction",
 "Proposal storytelling",
 "Journey mapping",
 "Native app design",
 "Presentation design",
 ],
 figmaUrl:
 "https://www.figma.com/design/xbi0fqTCZrKHT4SVaM1R39/WestJet---ticketing--check-in--baggage-handling--and-maintenance--Copy-",
 secondaryFigmaUrl:
 "https://www.figma.com/board/AYllSbk9AqPFPY7vi1DetA/WestJet---ticketing--check-in--baggage-handling--and-maintenance",
 secondaryFigmaLabel: "Proposal board",
 context:
 "Air travel is not one interaction, it is a sequence of connected moments from planning and booking through check-in, baggage, boarding and flight. Behind every passenger journey is another operational system keeping aircraft, baggage, crews and services moving. This WestJet proposal explored a new digital product vision across those experiences.",
 goals: [
 "Make the complete airline journey feel more connected, not a set of disconnected screens",
 "Reduce uncertainty by answering what is happening, what to do, when and what is next",
 "Design trip hierarchy that evolves as departure gets closer",
 "Guide check-in from booking readiness to boarding pass with clear progress",
 "Translate baggage operations into passenger reassurance",
 "Connect passenger experience with operational and maintenance concepts",
 "Communicate a credible creative vision stakeholders could believe in",
 ],
 research: [
 {
 title: "Travel is decisions under time pressure",
 description:
 "The same product moves from relaxed planning to high-pressure airport moments. Hierarchy, content and timing must continuously answer what is happening, what to do, when and what happens next.",
 },
 {
 title: "One journey, two perspectives",
 description:
 "Passengers see one airline trip. Internally, ticketing, baggage, ground ops, aircraft and maintenance may live in different systems. Mapping both layers revealed where digital interactions could remove friction.",
 },
 {
 title: "Proposal work needs vision first",
 description:
 "Before button placement, the team needed a compelling story of what the experience could become (why it should exist and what it could feel like) then prove it with tangible native screens.",
 },
 ],
 insights: [
 "Passengers experience one journey, departments should not fragment that story",
 "What matters now becomes more important than what information exists",
 "A necessary process like check-in should feel predictable, with progress that reduces uncertainty",
 "Once a bag leaves the passenger’s hands, information becomes reassurance",
 "A boarding pass may need the least information when urgency is highest",
 "Passenger calm and operational density can share system thinking without looking identical",
 ],
 solutions: [
 {
 title: "Ticketing as an active journey start",
 description:
 "Treated trip information as the start of everything that follows (destination, travellers, status and next action) with hierarchy that shifts as departure approaches.",
 image: p("westjet", "solution-1.png"),
 },
 {
 title: "Native check-in with visible progress",
 description:
 "Designed a guided transition from booking to travel-ready (passengers, baggage, seats and boarding pass) so people always know what is done, current and remaining.",
 image: p("westjet", "solution-2.png"),
 },
 {
 title: "Baggage as its own journey",
 description:
 "Explored baggage states from checked through ready as passenger-facing reassurance (where is my bag) rather than exposing internal system jargon.",
 image: p("westjet", "solution-3.png"),
 },
 {
 title: "Boarding pass for the gate moment",
 description:
 "Prioritized gate, boarding, seat, zone and pass for scannability, making the most important screen simpler as urgency increases.",
 image: p("westjet", "solution-4.png"),
 },
 {
 title: "Status, notifications and content that work fast",
 description:
 "Designed travel language and status hierarchy for airports (what happened, does it affect me, what should I do) without adding anxiety through unclear messaging.",
 image: p("westjet", "solution-5.png"),
 },
 {
 title: "From proposal thinking to product vision",
 description:
 "Connected FigJam journeys and opportunity framing to high-fidelity native pages, so the polished screens were evidence of structured thinking, not decoration.",
 image: p("westjet", "solution-6.png"),
 },
 ],
 learnings: [
 "Creative direction is clarity around an idea, not making something look more dramatic.",
 "Design journeys rather than screens, ticketing affects check-in, check-in affects baggage, operations affect everything.",
 "Strong proposals show the right things in the right order, not everything.",
 ],
 metrics: [
 { value: "5", label: "Person proposal and design team"},
 { value: "CD", label: "Creative Director · Proposal Lead Designer"},
 { value: "Native", label: "Passenger + operational concept vision"},
 ],
 overview:
 "I worked as Creative Director and Proposal Lead Designer as part of a five-person team developing a new digital product vision across key airline experiences. The proposal explored ticketing, check-in, baggage handling and maintenance, bringing customer-facing and operational thinking together. I worked directly with client stakeholders from early conversations through concept development and detailed application pages. I wasn't just designing an interface. I helped define creative direction, shape the proposal story and take concepts from presentation ideas into tangible native experiences.",
 challenge:
 "To the airline, booking, baggage, check-in and operations may belong to different systems. To the passenger, they all belong to the same trip. How can digital experiences make the complete journey feel more connected, reducing uncertainty and giving clearer information when it matters?",
 process: [
 {
 phase: "01",
 title: "Proposal story and creative direction",
 description:
 "Established challenge → opportunity → vision → experience, with a calm, modern, operationally intelligent visual tone connected to WestJet, reducing visual noise rather than adding it.",
 },
 {
 phase: "02",
 title: "Map passenger and operational journeys",
 description:
 "Connected book → prepare → check in → baggage → board → fly with systems for baggage, ground ops, aircraft and maintenance underneath.",
 },
 {
 phase: "03",
 title: "Design around time and progress",
 description:
 "Explored how trip hierarchy evolves from booked to boarding, and how check-in progress reduces uncertainty across multi-step flows.",
 },
 {
 phase: "04",
 title: "Baggage, boarding and native context",
 description:
 "Translated operational baggage states into passenger language, simplified boarding pass priority and designed for one-handed airport use under time pressure.",
 },
 {
 phase: "05",
 title: "From board to high fidelity",
 description:
 "Moved FigJam thinking into polished native pages and stakeholder presentations, proving the vision with tangible screens across both Figma environments.",
 },
 ],
 deliverables: [
 "Creative direction and proposal narrative",
 "End-to-end journey maps, passenger and operations",
 "Native concepts for ticketing, check-in, baggage and boarding",
 "Status, notification and content direction",
 "Operational and maintenance concept screens",
 "High-fidelity UI and stakeholder presentation materials",
 ],
 outcomes: [
 "A tangible vision for connecting key moments across the airline journey",
 "Ticketing, check-in, baggage and operations framed as one story",
 "Screens stakeholders could hold instead of only imagining",
 "From ticket to takeoff. One connected journey.",
 ],
 gallery: [
 {
 type: "image",
 src: p("westjet", "01-hero.png"),
 caption: "Native trip experience, calm interface for a complex journey",
 },
 {
 type: "image",
 src: p("westjet", "02-detail.png"),
 caption: "High-fidelity passenger screens from the proposal",
 },
 {
 type: "image",
 src: p("westjet", "03-detail.png"),
 caption: "Ticketing, booking and check-in readiness",
 },
 {
 type: "image",
 src: p("westjet", "04-detail.png"),
 caption: "Native mobile concepts designed for the airport hand",
 },
 {
 type: "image",
 src: p("westjet", "05-detail.png"),
 caption: "Baggage journey, add, manage and drop with clearer reassurance",
 },
 {
 type: "image",
 src: p("westjet", "06-detail.png"),
 caption: "Boarding pass, gate, seat and pass when urgency is highest",
 },
 {
 type: "image",
 src: p("westjet", "07-detail.png"),
 caption: "From thinking to vision, discovery and proposal structure",
 },
 {
 type: "image",
 src: p("westjet", "08-detail.png"),
 caption: "Notifications and wayfinding, information without added anxiety",
 },
 ],
 narrative: [
 {
 eyebrow: "Opportunity",
 title: "Air travel contains too many separate moments",
 body: [
 "A passenger does not experience an airline as a collection of internal departments. They experience one journey, confirmation, notification, baggage, check-in, boarding pass, gate, delay, aircraft.",
 "The point wasn't just to redesign individual screens. It was to explore how technology could reduce uncertainty across the journey and give both passengers and airline teams clearer information at the moments when it matters.",
 ],
 },
 {
 eyebrow: "Direction",
 title: "Calm interface. Complex operation.",
 body: [
 "Creative direction needed enough personality to create excitement while keeping the interface focused on travel information and actions. Air travel already creates enough visual noise, the application should reduce it.",
 "Proposal design required deciding what story to tell, which problems deserve attention, how concepts connect and which screens prove the idea. Strong proposals are created by showing the right things in the right order.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "One journey. Two perspectives.",
 body: [
 "Before screens came the journey map, passenger moments from book to fly, and the operational layer of systems, baggage, ground ops, aircraft and maintenance underneath.",
 "The same trip changes as departure gets closer. Check-in should feel predictable. Baggage should answer where is my bag. The boarding pass should become simpler as urgency increases. Passenger calm and operational clarity can share system thinking without looking identical.",
 ],
 bullets: [
 "What is happening? What do I need to do? When? What is next?",
 "Progress reduces uncertainty",
 "Operational status translated into passenger reassurance",
 ],
 },
 {
 eyebrow: "Ownership",
 title: "Creative Director · Proposal Lead Designer",
 body: [
 "In a five-person team, the distance between strategy and execution was small, stakeholder conversation to direction to flow to screen to proposal narrative. My role connected those stages through creative direction.",
 "The two Figma environments tell two parts of the story: the board captures thinking; the design file shows those ideas becoming tangible application pages.",
 ],
 },
 ],
 image: p("westjet", "01-hero.png"),
 closing:
 "From ticket to takeoff. One connected journey. The passenger sees one airline. The systems behind that airline may be complex. The digital experience can help connect them.",
 },

 polard: {
 impact:
 "Designed lottery business portal workflows that help users find information, understand status and complete operational work efficiently.",
 client: "Lottery organization",
 timeline: "Senior UX/UI Designer · 5-person multidisciplinary team · Web + Mobile",
 team: "Senior UX/UI Designer · 5-person team · client stakeholders · client product teams · frontend and backend developers · technical teams",
 tools: [
 "Figma",
 "Information architecture",
 "Enterprise portal design",
 "Dashboard UX",
 "Responsive web",
 "Native mobile",
 "Prototyping",
 "Developer collaboration",
 ],
 figmaUrl: "https://www.figma.com/design/pYHsJIZqaLrJgRSzlU28fI/-WV--Web-Business-Portal",
 secondaryFigmaUrl: "https://www.figma.com/design/aK8AKRHXkJHUWJuoEf8PMI/-KS--Mobile-App",
 secondaryFigmaLabel: "Mobile application",
 context:
 "Lottery products may look simple from the customer side. Behind them is a larger business ecosystem, retail operations, accounts, products, information, transactions, reporting, users, permissions, status and support. I worked as Senior UX/UI Designer on a five-person team creating business portal experiences that translate those operational requirements into clear digital workflows.",
 goals: [
 "Organize complexity without hiding essential business information",
 "Prioritize clarity, speed, context, predictability, status and actions for people doing a job",
 "Design dashboard hierarchy around what needs attention",
 "Treat tables, forms and statuses as complete interaction systems",
 "Create consistent patterns users can learn once and use everywhere",
 "Apply consistent UX thinking across web Business Portal and native mobile",
 "Collaborate with client and developers through implementation",
 ],
 research: [
 {
 title: "Business users are there to complete work",
 description:
 "Portal users are not visiting casually. They return to the same workflows, work for long periods and become familiar with where things live, so consistency and predictability matter more than exploration.",
 },
 {
 title: "Architecture before pages",
 description:
 "Before individual interfaces, the portal needed structure, where users begin, which information belongs together, which actions are global vs record-specific, and how someone moves between related information.",
 },
 {
 title: "Different platforms, shared language",
 description:
 "Web can support denser information; mobile needs stronger prioritization and touch behaviour. Consistency helped where terminology, hierarchy, status language and principles transferred, without forcing identical layouts.",
 },
 ],
 insights: [
 "How do you organize complexity without hiding what matters?",
 "A dashboard should answer what is happening, what needs attention, what changed and what can I do",
 "More information does not need more visual noise, hierarchy makes density scannable",
 "A table is an interaction system, not only rows and columns",
 "Status must be understood before the action",
 "The perfect state is only one state, design for empty, loading, unavailable and error",
 ],
 solutions: [
 {
 title: "Dashboard that answers attention",
 description:
 "Structured the Business Portal home around important information, status, needs-attention and next actions, hierarchy instead of an unfiltered collection of metrics and shortcuts.",
 image: p("polard", "solution-1.png"),
 },
 {
 title: "Retailer resources and data-dense work",
 description:
 "Designed information-heavy areas with grouping, typography and clear actions so users can scan first, then drill into tables and tools when needed.",
 image: p("polard", "solution-2.png"),
 },
 {
 title: "Licensing workflows and table systems",
 description:
 "Treated tables as complete interaction systems (search, filter, open records, status and actions) with component patterns that stay consistent across the portal.",
 image: p("polard", "solution-3.png"),
 },
 {
 title: "Web portal + mobile ecosystem",
 description:
 "Connected desktop business workflows with native mobile experiences, shared product language across different contexts and information density.",
 image: p("polard", "solution-4.png"),
 },
 {
 title: "Mobile priorities that still complete the task",
 description:
 "Designed home, PlayON, account and related mobile flows with stronger hierarchy, larger targets and progressive disclosure, same purpose, different context.",
 image: p("polard", "solution-5.png"),
 },
 {
 title: "Components, modules and edge cases",
 description:
 "Built reusable modules and states so interactions learned once could be used everywhere, including confirmations and error experiences that keep the workflow understandable.",
 image: p("polard", "solution-6.png"),
 },
 ],
 learnings: [
 "Internal UX is often about creating order, the designer cannot always remove complexity, but can create structure.",
 "Innovation helps when it reduces friction; familiarity helps when users already know how their work is done.",
 "Design was not a handoff, it was part of the build with client and development teams.",
 ],
 metrics: [
 { value: "5", label: "Person multidisciplinary team"},
 { value: "2", label: "Connected products, web portal + mobile"},
 { value: "Senior", label: "UX/UI ownership across portal workflows"},
 ],
 overview:
 "I worked as a Senior UX/UI Designer as part of a five-person team creating business portal experiences for a lottery organization. My work focused on translating operational and business requirements into clear digital workflows users could understand quickly and complete efficiently. I worked directly with client teams and developers from early product discussions and page structure through high-fidelity design and implementation, across a web Business Portal and a native mobile application.",
 challenge:
 "Business-facing systems often contain more information than consumer applications, and that information cannot always be removed. A page may need business data, status, history, actions, related information, requirements and messages at once. The design needed hierarchy so users could scan quickly and understand what required attention.",
 process: [
 {
 phase: "01",
 title: "Portal architecture",
 description:
 "Defined primary areas, navigation, global vs contextual actions and how related records connect, structure before individual page polish.",
 },
 {
 phase: "02",
 title: "Dashboard and data density",
 description:
 "Designed home hierarchy for attention, then data-dense interfaces and tables with grouping, status language and action hierarchy.",
 },
 {
 phase: "03",
 title: "Workflows, forms and states",
 description:
 "Mapped find → review → act → confirm → return journeys, guided forms and edge cases so incomplete or failed states remained understandable.",
 },
 {
 phase: "04",
 title: "Web to mobile adaptation",
 description:
 "Applied consistent terminology, hierarchy and status thinking to native mobile while changing layout and prioritization for smaller screens.",
 },
 {
 phase: "05",
 title: "Client and developer collaboration",
 description:
 "Worked through component behaviour, responsive layouts, data states and edge cases, improving the live product rather than protecting the Figma file.",
 },
 ],
 deliverables: [
 "Business portal information architecture and user flows",
 "Dashboard, retailer resources, licensing and related page UX/UI",
 "Tables, forms, status patterns and component design",
 "Responsive web design across desktop breakpoints",
 "Native mobile application screens and flows",
 "Prototypes, client collaboration and implementation support",
 ],
 outcomes: [
 "Clearer digital experiences for complex lottery business workflows",
 "Portal structure that supports finding information, status and action",
 "Consistent UX thinking across web and mobile lottery products",
 "Complexity remaining behind the system, manageable in the interface",
 "Complex business operations. Clear digital workflows.",
 ],
 gallery: [
 {
 type: "image",
 src: p("polard", "01-hero.png"),
 caption: "Business Portal dashboard, what needs attention",
 },
 {
 type: "image",
 src: p("polard", "02-detail.png"),
 caption: "Retailer resources and licensing, operational page structure",
 },
 {
 type: "image",
 src: p("polard", "03-detail.png"),
 caption: "Tables as interaction systems, components and data views",
 },
 {
 type: "image",
 src: p("polard", "04-detail.png"),
 caption: "Full portal home experience, hierarchy across the page",
 },
 {
 type: "image",
 src: p("polard", "05-detail.png"),
 caption: "Web Business Portal and native mobile, shared product language",
 },
 {
 type: "image",
 src: p("polard", "06-detail.png"),
 caption: "Mobile home, PlayON and account, prioritised for the hand",
 },
 {
 type: "image",
 src: p("polard", "07-detail.png"),
 caption: "Forms, confirmation and error states, workflows beyond the happy path",
 },
 {
 type: "image",
 src: p("polard", "08-detail.png"),
 caption: "Content modules and reusable patterns across the portal",
 },
 ],
 narrative: [
 {
 eyebrow: "Product",
 title: "The business side of lottery",
 body: [
 "Customer-facing lottery experiences are only one part of the system. Business users need tools that help them manage the operational side, and they are not visiting the portal casually. They are there to complete work.",
 "That changes the UX. The interface needs clarity, speed, context, predictability, status and actions. A consumer product may encourage exploration. A business portal needs to help users understand what to do and complete it efficiently.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "Make complex operations feel routine",
 body: [
 "Internal systems often contain more information than consumer applications. That information cannot always be removed, users may need it to complete their task correctly.",
 "The challenge becomes organizing complexity without hiding what matters. Hierarchy, consistent navigation and familiar patterns make the portal feel easier after the tenth use than after the first.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Different environments. Consistent UX thinking.",
 body: [
 "The WV Business Portal supports large-screen workflows where information density and efficiency matter. The KS mobile application requires stronger prioritization for touch and limited space.",
 "They should not necessarily look identical. They can share terminology, hierarchy, status language, visual identity and interaction principles, learn once, use everywhere.",
 ],
 bullets: [
 "Architecture before pages",
 "Information density without visual chaos",
 "Same purpose. Different context.",
 ],
 },
 {
 eyebrow: "Ownership",
 title: "Senior UX/UI across portal and mobile",
 body: [
 "Working in a five-person team with direct client and developer collaboration meant owning flows, page structure, interaction design, UI, responsive behaviour and implementation support.",
 "Sometimes requirements needed to stay complicated because the business genuinely required it. Sometimes the best design came from simplifying. UX was understanding the difference.",
 ],
 },
 ],
 image: p("polard", "01-hero.png"),
 closing:
 "Complex business operations. Clear digital workflows. Find the information. Understand the status. Take the action. Complete the work.",
 },

 marks: {
 impact:
 "Helped translate Mark’s deep catalog into clear customer decisions, workwear requirements and everyday shopping inside one enterprise retail experience.",
 client: "Mark's",
 timeline: "Senior UX · Enterprise ecommerce · live at marks.com",
 team: "Senior UX Designer · UX teams · Business Analysts · Researchers · QA · Developers · Product & business stakeholders",
 tools: [
 "Figma",
 "Wireframing",
 "Prototyping",
 "Research collaboration",
 "Design QA",
 "Accessibility",
 "Enterprise ecommerce",
 ],
 liveUrl: "https://www.marks.com/en.html",
 context:
 "Mark’s is a Canadian retail brand serving customers across workwear, footwear and everyday apparel. The digital experience brings together women’s and men’s clothing, footwear, kids, workwear, work boots and shoes, safety products and professional apparel, from jeans and winter boots to safety footwear, high-visibility clothing, PPE and scrubs.",
 goals: [
 "Support very different shopping behaviours in one Mark’s storefront",
 "Help customers understand whether a product is right for the job, not only whether they like it",
 "Balance powerful filters and specifications with a retail experience that still feels simple",
 "Keep workwear and casual shopping familiar while letting information hierarchy adapt",
 "Collaborate across UX, BA, research, QA and development inside Canadian Tire Corporation",
 "Protect accessibility, responsive behaviour and coherent patterns at enterprise scale",
 ],
 research: [
 {
 title: "Requirements are not experiences",
 description:
 "A requirement might say the customer needs to identify whether a work shoe meets their needs. UX still has to decide which specifications matter most, where they appear, how filters organize, and what mobile and inventory do to the decision.",
 },
 {
 title: "Evidence from research partners",
 description:
 "Worked with research to test terminology, category findability, filter mental models and hesitation points, refining experiences rather than defending the first solution.",
 },
 {
 title: "Multiple teams, one Mark’s",
 description:
 "UX, BAs, researchers, developers, QA and stakeholders each see a different part of the problem. The customer sees none of that, collaboration was part of creating UX at enterprise scale.",
 },
 ],
 insights: [
 "Mark’s creates an interesting challenge because intent can change dramatically across the same storefront",
 "Workwear introduces another level of importance, the customer needs to understand whether it is right for what they do",
 "The same ecommerce structure needs enough flexibility for technical products and everyday apparel",
 "Customers do not always speak in categories, they think in jobs, features, brands and fit",
 "The customer should not need to understand how many teams and systems sit behind find, fit, availability and fulfillment",
 ],
 solutions: [
 {
 title: "Discovery across intents",
 description:
 "Supported paths through workwear, footwear and everyday apparel so customers can move from product, job, brand, feature or search toward the right item without fighting the catalog.",
 image: p("marks", "solution-1.png"),
 },
 {
 title: "Technical product hierarchy",
 description:
 "Helped listing and detail experiences surface meaningful workwear attributes (toe protection, waterproofing, insulation, width and more) so specifications become decisions.",
 image: p("marks", "solution-2.png"),
 },
 {
 title: "Work and everyday in one system",
 description:
 "Kept Mark’s feeling like one brand while letting information hierarchy adapt, function-forward for work products, clearer style and fit cues for casual shopping.",
 image: p("marks", "solution-3.png"),
 },
 {
 title: "Fit, size and local inventory",
 description:
 "Supported journeys where fit, size and store availability become personal quickly, especially when someone needs an item for work.",
 image: p("marks", "solution-4.png"),
 },
 {
 title: "Responsive retail contexts",
 description:
 "Treated home browsing, lunch-break checks and in-store comparison as different contexts, navigation, filters and actions transform with the device.",
 image: p("marks", "solution-5.png"),
 },
 {
 title: "Fulfillment & promotions",
 description:
 "Surfaced pickup, express delivery and ship-to-home when they matter, and supported changing sale and clearance states without destroying shopping hierarchy.",
 image: p("marks", "solution-6.png"),
 },
 ],
 learnings: [
 "At enterprise scale, senior UX means connecting research, BA, development and QA around the customer, not knowing every system alone.",
 "A completely new interaction can look better alone and still make the complete product worse, consider the page and the ecosystem it joins.",
 "Complex behind the experience. Clear in front of the customer.",
 ],
 metrics: [
 { value: "4", label: "Retail brands, Mark’s, Canadian Tire, Sport Chek, Party City"},
 { value: "Enterprise", label: "Cross-functional UX, BA, research, QA and development"},
 { value: "Live", label: "Digital retail at marks.com"},
 ],
 overview:
 "I worked as a Senior UX Designer within the larger Canadian Tire Corporation digital organization, contributing to experiences across Mark’s, Canadian Tire, Sport Chek and Party City. While my role extended across all four brands, this case study focuses on Mark’s. I collaborated directly with multiple UX teams, Business Analysts, UX Researchers, QA specialists and development teams to create and improve customer-facing web experiences. My role was not simply to create pages, it was to understand business requirements, customer needs, research, existing platform patterns and technical limitations, then bring those pieces together into experiences that could work at enterprise scale.",
 challenge:
 "Many ecommerce decisions are subjective. Workwear introduces another level of importance, a safety shoe can include steel toe, composite toe, anti-puncture protection, waterproofing and width. The customer does not only need to discover something they like. They need to understand whether it is right for what they do. Good UX needs to support both.",
 process: [
 {
 phase: "01",
 title: "Design for different customers",
 description:
 "Considered casual apparel, work boots, PPE and scrubs as different intents inside one Mark’s experience, consistency where it helps, context where the product demands it.",
 },
 {
 phase: "02",
 title: "From requirements to journeys",
 description:
 "Partnered with Business Analysts to understand rules, data and edge cases, then translated those into customer-facing flows that fit existing Mark’s patterns.",
 },
 {
 phase: "03",
 title: "Discovery through confidence",
 description:
 "Supported listing, comparison and detail experiences that help customers reduce choice and act with confidence, especially when specifications carry weight.",
 },
 {
 phase: "04",
 title: "Work / everyday balance",
 description:
 "Designed so workwear can lead with function while casual shopping still benefits from imagery, fit and simpler decisions, one brand, adaptable hierarchy.",
 },
 {
 phase: "05",
 title: "Build, research, QA",
 description:
 "Collaborated with developers on constraints and states, used research to improve assumptions, and worked with QA when edge cases revealed experience problems, not only software defects.",
 },
 ],
 deliverables: [
 "UX design for enterprise ecommerce experiences",
 "Information architecture, user flows and interaction design",
 "Responsive design, wireframes and prototypes",
 "Content hierarchy and accessibility considerations",
 "Requirements translation with Business Analysts",
 "Research collaboration and design iteration",
 "Developer collaboration and implementation support",
 "Design QA with QA specialists",
 "Cross-brand digital experience work across the banner family",
 ],
 outcomes: [
 "Customer-facing experiences inside the Mark’s digital ecosystem and larger Canadian Tire Corporation environment",
 "Stronger connection between business requirements, customer needs, research, technology and quality",
 "Clearer paths for workwear requirements, fit, availability and fulfillment",
 "Enterprise complexity kept behind the scenes, clear decisions in front of the customer",
 ],
 gallery: [
 {
 type: "image",
 src: p("marks", "01-hero.png"),
 caption: "Mark’s homepage, entry into work and everyday retail",
 },
 {
 type: "image",
 src: p("marks", "02-detail.png"),
 caption: "Mobile shopping, checking products on a break or in store",
 },
 {
 type: "image",
 src: p("marks", "03-detail.png"),
 caption: "Responsive retail, desktop and mobile Mark’s contexts",
 },
 {
 type: "image",
 src: p("marks", "04-detail.png"),
 caption: "Workwear merchandising, function as part of the product story",
 },
 {
 type: "image",
 src: p("marks", "05-detail.png"),
 caption: "Work boots and safety footwear, shopping around requirements",
 },
 {
 type: "image",
 src: p("marks", "06-detail.png"),
 caption: "Work / everyday, one Mark’s experience, different decision types",
 },
 {
 type: "image",
 src: p("marks", "07-detail.png"),
 caption: "Discovery and campaigns, commercial messaging inside the shopping hierarchy",
 },
 {
 type: "image",
 src: p("marks", "08-detail.png"),
 caption: "Casual and work contexts across devices, same brand, adaptable hierarchy",
 },
 ],
 narrative: [
 {
 eyebrow: "Customers",
 title: "One brand. Very different customers.",
 body: [
 "Someone shopping for casual clothing may decide on style, colour, fit and price. Someone shopping for work boots may need toe protection, plate type, waterproofing, insulation, width and workplace requirements. PPE shoppers may care less about style and more about compliance.",
 "The interface needs to support all of these customers without making Mark’s feel like several unrelated websites. That balance became part of the broader experience I was designing within.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "When product information can affect the job",
 body: [
 "Many ecommerce decisions are subjective. Workwear introduces another level of importance, the customer may need the product to perform under specific conditions.",
 "The customer does not only need to discover something they like. They need to understand whether it is right for what they do. Good UX needs to support both.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Work boots, everyday apparel and one system",
 body: [
 "Work footwear is one of the clearest examples of why Mark’s is interesting from a UX perspective. The most important question may not be which boot looks best, it may be which boot is right for my job.",
 "Mark’s is not only workwear. Casual apparel still needs inspiration, imagery and simpler decisions. The underlying system can remain familiar while the information hierarchy adapts.",
 ],
 bullets: [
 "Turn specifications into decisions",
 "Work / everyday, one Mark’s experience",
 "Find it. Fit it. Get it.",
 ],
 },
 {
 eyebrow: "Four brands",
 title: "Working across the banner family",
 body: [
 "My broader role within Canadian Tire Corporation included work across Mark’s, Canadian Tire, Sport Chek and Party City, very different customer behaviours inside the same larger corporate environment.",
 "Mark’s was particularly interesting because it sits between lifestyle retail and functional workwear. The customer experience needed to support both.",
 ],
 cards: [
 {
 title: "Mark’s",
 description: "Workwear, footwear and everyday apparel.",
 image: p("marks", "01-hero.png"),
 },
 {
 title: "Canadian Tire",
 description: "Large-scale retail, automotive, home and services.",
 },
 {
 title: "Sport Chek",
 description: "Sports, footwear, apparel and equipment.",
 },
 {
 title: "Party City",
 description: "Celebrations, balloons and occasion-based shopping.",
 },
 ],
 },
 ],
 image: p("marks", "01-hero.png"),
 closing:
 "Complex behind the experience. Clear in front of the customer. Find the right product. Understand whether it fits. Understand whether it works for the job. Choose the right size. Know whether it is available. Decide how to get it. Complete the purchase.",
 },
 sportchek: {
 impact:
 "Helped translate a large sporting goods catalog into focused customer journeys, discovery, size, local availability and fulfillment inside Sport Chek’s digital experience.",
 client: "Sport Chek",
 timeline: "Senior UX · Enterprise ecommerce · live at sportchek.ca",
 team: "Senior UX Designer · UX teams · Business Analysts · Researchers · QA · Developers · Product & business stakeholders",
 tools: [
 "Figma",
 "Wireframing",
 "Prototyping",
 "Research collaboration",
 "Design QA",
 "Accessibility",
 "Enterprise ecommerce",
 ],
 liveUrl: "https://www.sportchek.ca/en.html",
 context:
 "Sport Chek is one of Canada’s largest sporting goods and active lifestyle retailers. Its digital experience supports customers shopping across footwear, apparel, fitness, team sports, outdoor equipment, electronics and seasonal activities, from a specific pair of running shoes to hockey season prep, technical outdoor gear or everyday lifestyle browsing.",
 goals: [
 "Translate business requirements into customer journeys that feel focused inside a deep catalog",
 "Support discovery across search, sport, category, brand and promotion entry points",
 "Keep size, local inventory and fulfillment part of the purchase decision without cognitive overload",
 "Balance consistent Sport Chek patterns with product-type differences, lifestyle vs performance",
 "Collaborate across UX, BA, research, QA and development inside Canadian Tire Corporation",
 "Protect accessibility, responsive behaviour and brand clarity at enterprise scale",
 ],
 research: [
 {
 title: "Requirements are not experiences",
 description:
 "A requirement may describe a new page, promotion or interaction. UX still has to determine why the customer needs it, where they encounter it, what comes first, what happens on mobile, and how it fits existing Sport Chek patterns.",
 },
 {
 title: "Evidence from research partners",
 description:
 "Worked with research findings to test terminology, findability, filter mental models and hesitation points, refining experiences rather than treating the original solution as fixed.",
 },
 {
 title: "Multiple teams, one Sport Chek",
 description:
 "UX, BAs, researchers, developers, QA and stakeholders each see a different part of the problem. The customer sees none of that, collaboration was part of the UX work itself.",
 },
 ],
 insights: [
 "Sport Chek is not a single shopping journey, thousands of intentions live inside one storefront",
 "Good enterprise UX decides what the customer needs now, what they may need next, and what can stay available without demanding attention",
 "Size is not a secondary attribute for apparel and footwear, it can determine whether a purchase happens at all",
 "The customer does not care which inventory system holds an item, they care whether they can get their size near them",
 "What should remain consistent across products, and what needs to adapt, both matter",
 ],
 solutions: [
 {
 title: "Product discovery at scale",
 description:
 "Supported search, sport, category, brand and promotional entry points so customers can continually narrow a deep catalog until it becomes relevant, without needing to understand internal IA.",
 image: p("sportchek", "solution-1.png"),
 },
 {
 title: "Product detail decisions",
 description:
 "Brought imagery, brand, price, options, size, availability, ratings and specifications into a predictable hierarchy that can still adapt between lifestyle and technical products.",
 image: p("sportchek", "solution-2.png"),
 },
 {
 title: "Size, store context & fulfillment",
 description:
 "Connected product choice to size, local inventory and pickup, ship or same-day paths, answering “can I get this near me?” without exposing inventory infrastructure.",
 image: p("sportchek", "solution-3.png"),
 },
 {
 title: "Promotions & merchandising",
 description:
 "Supported deals, clearance and seasonal campaigns within the shopping hierarchy so commercial messages support decisions rather than obscure the product.",
 image: p("sportchek", "solution-4.png"),
 },
 {
 title: "Responsive retail contexts",
 description:
 "Treated couch browsing, in-store checks and commute shopping as different contexts, navigation, filters and actions transform with the device rather than simply shrinking.",
 image: p("sportchek", "solution-5.png"),
 },
 {
 title: "Services alongside ecommerce",
 description:
 "Recognized that Sport Chek also supports equipment services, journeys that ask what needs to be done and where, while still feeling connected to the same digital brand.",
 image: p("sportchek", "solution-6.png"),
 },
 ],
 learnings: [
 "At enterprise scale, senior UX means bringing research, BA, development and QA perspectives into one experience, not knowing every system alone.",
 "A design can look better in isolation and still be worse for the overall product, consider the page and the product it becomes part of.",
 "Many teams behind it. One experience in front of the customer.",
 ],
 metrics: [
 { value: "4", label: "Retail brands, Sport Chek, Canadian Tire, Mark’s, Party City"},
 { value: "Enterprise", label: "Cross-functional UX, BA, research, QA and development"},
 { value: "Live", label: "Digital retail at sportchek.ca"},
 ],
 overview:
 "I worked as a Senior UX Designer within the larger Canadian Tire Corporation digital organization, collaborating across multiple UX teams and contributing to experiences across Sport Chek, Canadian Tire, Mark’s and Party City. While my role extended across all four brands, this case study focuses on Sport Chek. I worked directly with UX designers, Business Analysts, UX Researchers, QA specialists, product teams and developers to create customer-facing web experiences. The work required more than designing individual pages, it required understanding how every page fits within a much larger shopping system.",
 challenge:
 "Large ecommerce systems contain categories, brands, sizes, specifications, promotions, ratings, store inventory, shipping, pickup, rewards and accounts. That information is necessary, but presenting everything at once creates cognitive overload. The goal was not to remove complexity from the business. It was to organize that complexity around the customer’s task so a large retail experience feels focused.",
 process: [
 {
 phase: "01",
 title: "Design inside one storefront",
 description:
 "Considered navigation, search, discovery, filters, product cards, size, store inventory, fulfillment, promotions, rewards, services, accessibility and responsive behaviour as connected systems, not isolated pages.",
 },
 {
 phase: "02",
 title: "From requirements to journeys",
 description:
 "Partnered with Business Analysts to understand system needs, edge cases and dependencies, then translated those into understandable customer paths that fit existing Sport Chek patterns.",
 },
 {
 phase: "03",
 title: "Discovery through decision",
 description:
 "Supported listing and detail experiences that help customers narrow the field, compare products, choose size and understand availability without turning shopping into data management.",
 },
 {
 phase: "04",
 title: "Local context & how to get it",
 description:
 "Designed around the relationship between digital inventory and physical shopping, pickup, shipping and same-day options communicated at the right moment.",
 },
 {
 phase: "05",
 title: "Build, research, QA",
 description:
 "Collaborated with developers on constraints and states, used research to improve assumptions, and worked with QA when edge cases revealed experience problems, not only software defects.",
 },
 ],
 deliverables: [
 "UX design for enterprise ecommerce experiences",
 "Information architecture, user flows and interaction design",
 "Responsive design, wireframes and prototypes",
 "Content hierarchy and accessibility considerations",
 "Requirements translation with Business Analysts",
 "Research collaboration and design iteration",
 "Developer collaboration and implementation support",
 "Design QA with QA specialists",
 "Cross-brand digital experience work across the banner family",
 ],
 outcomes: [
 "Customer-facing Sport Chek experiences inside one of Canada’s largest retail organizations",
 "Stronger connection between business requirements, customer needs, research, technology and quality",
 "Clearer paths for discovery, size, store context and fulfillment",
 "Enterprise complexity kept behind the scenes, a focused experience in front of the customer",
 ],
 gallery: [
 {
 type: "image",
 src: p("sportchek", "01-hero.png"),
 caption: "Sport Chek homepage, entry into an active lifestyle retail ecosystem",
 },
 {
 type: "image",
 src: p("sportchek", "02-detail.png"),
 caption: "Mobile shopping, comparing products on the go or in store",
 },
 {
 type: "image",
 src: p("sportchek", "03-detail.png"),
 caption: "Responsive retail, same Sport Chek experience across desktop and mobile",
 },
 {
 type: "image",
 src: p("sportchek", "04-detail.png"),
 caption: "Product detail, decision hierarchy across options, price and availability",
 },
 {
 type: "image",
 src: p("sportchek", "05-detail.png"),
 caption: "Shop by sport, different intentions, one understandable path",
 },
 {
 type: "image",
 src: p("sportchek", "06-detail.png"),
 caption: "Product and local context, ecommerce connected to store services",
 },
 {
 type: "image",
 src: p("sportchek", "07-detail.png"),
 caption: "Retail services, Sport Chek is more than a product catalog",
 },
 {
 type: "image",
 src: p("sportchek", "08-detail.png"),
 caption: "Promotions and product decisions, commercial messages inside the shopping hierarchy",
 },
 ],
 narrative: [
 {
 eyebrow: "Scale",
 title: "One storefront. Thousands of customer intentions.",
 body: [
 "A runner looking for a new shoe approaches the experience differently from a parent buying hockey equipment. Someone shopping for a winter jacket needs different information from someone comparing fitness technology.",
 "The catalog contains deeply structured paths across women, men, kids, footwear, sports, outdoor categories and technical equipment. Customers should benefit from that size without feeling the complexity behind it.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "Make a large retail experience feel focused",
 body: [
 "Categories, brands, sizes, specifications, promotions, ratings, store inventory and fulfillment are all necessary. Presenting everything at once creates cognitive overload.",
 "Good enterprise UX decides what the customer needs now, what they may need next, and what can remain available without demanding attention. The goal was to organize complexity around the customer’s task.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Size, stores and how to get it",
 body: [
 "For apparel and footwear, size can determine whether a purchase happens at all. Sport Chek also connects digital shopping to local inventory and Buy Online Pick Up In Store for eligible products.",
 "Pickup, ship-to-home and same-day options are not logistics systems to the customer, they are choices: I want it today, I can pick it up, send it to my home. Timing and clarity matter as much as the options themselves.",
 ],
 bullets: [
 "Product + location = availability",
 "Size is part of the experience",
 "One purchase, multiple paths",
 ],
 },
 {
 eyebrow: "Four brands",
 title: "Working across the banner family",
 body: [
 "My broader role within Canadian Tire Corporation included work across Sport Chek, Canadian Tire, Mark’s and Party City, each with its own customer needs inside the larger corporate ecosystem.",
 "This case study focuses on Sport Chek because it demonstrates sports-led discovery, size and local inventory especially well. Customers do not know which team owns which feature, to them, it is all Sport Chek.",
 ],
 cards: [
 {
 title: "Sport Chek",
 description: "Sports, footwear, apparel, fitness and equipment.",
 image: p("sportchek", "01-hero.png"),
 },
 {
 title: "Canadian Tire",
 description: "Large-scale retail, automotive, home and services.",
 },
 {
 title: "Mark’s",
 description: "Workwear, footwear and everyday apparel.",
 },
 {
 title: "Party City",
 description: "Celebrations, seasonal products and party experiences.",
 },
 ],
 },
 ],
 image: p("sportchek", "01-hero.png"),
 closing:
 "Many teams behind it. One experience in front of the customer. Find the right product. Understand the options. Choose the right size. Know whether it is available. Decide how to receive it. Complete the task.",
 },
 partycity: {
 impact:
 "Helped turn celebration intent into understandable shopping journeys, occasions, themes, balloons and seasonal peaks inside Party City’s digital experience.",
 client: "Party City",
 timeline: "Senior UX · Enterprise ecommerce · live at partycity.ca",
 team: "Senior UX Designer · UX teams · Business Analysts · Researchers · QA · Developers · Product & business stakeholders",
 tools: [
 "Figma",
 "Wireframing",
 "Prototyping",
 "Research collaboration",
 "Design QA",
 "Accessibility",
 "Enterprise ecommerce",
 ],
 liveUrl: "https://www.partycity.ca/en.html",
 context:
 "Party City is built around moments, birthdays, weddings, baby showers, graduations, anniversaries, Halloween and the countless smaller reasons people bring friends and family together. Unlike traditional ecommerce where customers may begin with a specific product, Party City customers often begin with something broader: I have something to celebrate.",
 goals: [
 "Help customers move from an event in their head to the products they need to make it real",
 "Support discovery across occasion, theme, colour, character, product and season entry points",
 "Keep seasonal change flexible without forcing customers to relearn how the site works",
 "Surface inventory and fulfillment clearly when celebrations have deadlines",
 "Collaborate across UX, BA, research, QA and development inside the Canadian Tire organization",
 "Protect accessibility, responsive behaviour and coherent hierarchy at enterprise scale",
 ],
 research: [
 {
 title: "Requirements are not experiences",
 description:
 "A requirement might say customers need to browse by theme. UX still asks where the theme appears, how someone discovers it, what comes first, how to narrow hundreds of items, and how mobile and search connect.",
 },
 {
 title: "Evidence from research partners",
 description:
 "Worked with research to understand whether customers begin with occasion or product, whether themes are findable, and where availability or filters create hesitation, then improved the design.",
 },
 {
 title: "Many teams, one Party City",
 description:
 "Discovery, product pages, accounts and shared functionality may live with different teams. Customers experience none of those boundaries, collaboration was part of the UX work itself.",
 },
 ],
 insights: [
 "Customers think in moments, not taxonomy, themed shopping can shortcut a complex catalog",
 "Sometimes colour is the search, visual attributes can be primary navigation, not only filters",
 "Balloons create a service-plus-product journey that needs shared patterns and its own logic",
 "Celebrations have deadlines, the question is not only do you sell this, but can I have it before the party",
 "Different moments need familiar interaction patterns so seasonal change does not retrain customers",
 ],
 solutions: [
 {
 title: "Occasion-led discovery",
 description:
 "Supported paths from occasion and theme into product collections so customers can assemble a celebration without assembling the catalog one department at a time.",
 image: p("partycity", "solution-1.png"),
 },
 {
 title: "Seasonal transformation",
 description:
 "Supported patterns that absorb Halloween, holidays and campaign peaks, navigation emphasis and merchandising change while core interactions stay familiar.",
 image: p("partycity", "solution-2.png"),
 },
 {
 title: "Balloons as product + service",
 description:
 "Recognized balloon ordering as more than a standard add-to-cart path, type, colour, quantity, bouquets and pickup timing create a specialized journey inside the same brand.",
 image: p("partycity", "solution-3.png"),
 },
 {
 title: "Choice without overload",
 description:
 "Helped listing and card patterns balance filters, price, availability and browse excitement so large collections stay scannable rather than becoming work.",
 image: p("partycity", "solution-4.png"),
 },
 {
 title: "Responsive celebration planning",
 description:
 "Treated phone discovery, commute browsing and in-store checks as different contexts, same task, transformed navigation, filters and actions.",
 image: p("partycity", "solution-5.png"),
 },
 {
 title: "Promotions inside the journey",
 description:
 "Kept campaign and clearance visibility high enough to support intent without turning the interface into competing banners that interrupt planning.",
 image: p("partycity", "solution-6.png"),
 },
 ],
 learnings: [
 "Senior UX at this scale is partly knowing how to bring research, BA, development and QA perspectives together around the customer.",
 "A completely new interaction can look better alone and still be worse for the complete product, consider the page and the ecosystem around it.",
 "We designed the ecommerce. The customer was designing the moment.",
 ],
 metrics: [
 { value: "4", label: "Retail brands, Party City, Canadian Tire, Sport Chek, Mark’s"},
 { value: "Enterprise", label: "Cross-functional UX, BA, research, QA and development"},
 { value: "Live", label: "Digital retail at partycity.ca"},
 ],
 overview:
 "I worked as a Senior UX Designer within the larger Canadian Tire corporate digital organization, collaborating across multiple UX teams and contributing to digital experiences for Party City, Canadian Tire, Sport Chek and Mark’s. While my work extended across all four brands, this case study focuses on Party City. I worked directly with UX teams, Business Analysts, UX Researchers, QA specialists and developers to create and improve customer-facing web experiences. My role involved translating business requirements into understandable customer journeys, designing responsive experiences and working closely with the teams responsible for bringing those experiences into production.",
 challenge:
 "Party planning creates a unique ecommerce complexity. The customer may know only the occasion, age, theme, colour, guest count or feeling they want to create. The digital experience needs to help translate those ideas into useful paths, occasion, theme, colour, character, product and season all leading into one understandable shopping experience.",
 process: [
 {
 phase: "01",
 title: "Design around occasions",
 description:
 "Considered occasion discovery alongside product discovery, themes, collections, navigation and search as tools for turning an event into a complete party.",
 },
 {
 phase: "02",
 title: "From requirements to journeys",
 description:
 "Partnered with Business Analysts to understand platform rules, availability and edge cases, then organized those answers into customer-facing flows that fit existing Party City patterns.",
 },
 {
 phase: "03",
 title: "Discovery through decision",
 description:
 "Supported listing, card and detail experiences that help customers narrow large collections without losing the excitement of browsing.",
 },
 {
 phase: "04",
 title: "Seasonal change & specialized journeys",
 description:
 "Designed for a site that becomes a different store throughout the year, and for experiences like balloons that blend product and service behaviours.",
 },
 {
 phase: "05",
 title: "Build, research, QA",
 description:
 "Collaborated with developers on constraints and states, used research to improve assumptions, and worked with QA when edge cases revealed experience problems, not only software defects.",
 },
 ],
 deliverables: [
 "UX design for enterprise ecommerce experiences",
 "Information architecture, user flows and interaction design",
 "Responsive design, wireframes and prototypes",
 "Content hierarchy and accessibility considerations",
 "Requirements translation with Business Analysts",
 "Research collaboration and design iteration",
 "Developer collaboration and implementation support",
 "Design QA with QA specialists",
 "Cross-brand digital experience work across the banner family",
 ],
 outcomes: [
 "Customer-facing Party City experiences inside a large Canadian retail organization",
 "Stronger connection between business requirements, customer needs, research, technology and quality",
 "Clearer paths from celebration intent through discovery, availability and purchase",
 "Enterprise complexity kept behind the scenes, planning feels easier in front of the customer",
 ],
 gallery: [
 {
 type: "image",
 src: p("partycity", "01-hero.png"),
 caption: "Party City homepage, entry into an occasion-driven retail ecosystem",
 },
 {
 type: "image",
 src: p("partycity", "02-detail.png"),
 caption: "Mobile planning, discovering party ideas on the go",
 },
 {
 type: "image",
 src: p("partycity", "03-detail.png"),
 caption: "Responsive celebration shopping, desktop and mobile contexts",
 },
 {
 type: "image",
 src: p("partycity", "04-detail.png"),
 caption: "Seasonal transformation, Halloween costumes and décor at catalog scale",
 },
 {
 type: "image",
 src: p("partycity", "05-detail.png"),
 caption: "Occasion entry, turning celebration intent into product paths",
 },
 {
 type: "image",
 src: p("partycity", "06-detail.png"),
 caption: "Balloons and party supplies, specialized journeys inside one brand",
 },
 {
 type: "image",
 src: p("partycity", "07-detail.png"),
 caption: "Balloon ordering, product plus service, select through pickup",
 },
 {
 type: "image",
 src: p("partycity", "08-detail.png"),
 caption: "Seasonal peaks across devices, different moments, familiar experience",
 },
 ],
 narrative: [
 {
 eyebrow: "Occasions",
 title: "The experience starts with an occasion",
 body: [
 "A customer planning a birthday may need balloons, decorations, tableware, candles, favours and more, but they may not begin by searching for any of those individually. They begin with: my daughter is turning six. Or: I am planning a wedding.",
 "That creates a different information architecture problem. The experience needs to support product discovery and occasion discovery, helping someone move from an event in their head to the products that make it real.",
 ],
 },
 {
 eyebrow: "Challenge",
 title: "Turn an event into a shopping journey",
 body: [
 "Customers can enter from occasion, theme, colour, character, product or season. All of those paths eventually need to lead into one understandable shopping experience.",
 "Give customers too few controls and discovery becomes difficult. Give them too many and shopping becomes work. The interface needs to help them narrow the experience without losing the excitement of browsing.",
 ],
 },
 {
 eyebrow: "Standout",
 title: "Moments, balloons and deadlines",
 body: [
 "Themed collections can shortcut a complex catalog, Pokémon, princesses or colour-led looks become the concept rather than assembling departments one by one.",
 "Balloons blend product and service: type, size, colour, quantity, bouquets and pickup timing. Celebrations also have dates, inventory and fulfillment answer whether customers can have what they need before the party.",
 ],
 bullets: [
 "Occasion → theme → products → complete the party",
 "Sometimes colour is the search",
 "Can I have it before the party?",
 ],
 },
 {
 eyebrow: "Four brands",
 title: "Working across the banner family",
 body: [
 "My broader role within the Canadian Tire organization included work across Party City, Canadian Tire, Sport Chek and Mark’s, very different customer behaviours inside a shared enterprise environment.",
 "This case study focuses on Party City because the journey often begins with an event rather than an item. Customers do not know which team owns which feature. To them, it is all Party City.",
 ],
 cards: [
 {
 title: "Party City",
 description: "Celebrations, balloons, costumes and occasion-based shopping.",
 image: p("partycity", "01-hero.png"),
 },
 {
 title: "Canadian Tire",
 description: "Large-scale retail, automotive, home and services.",
 },
 {
 title: "Sport Chek",
 description: "Sports, footwear, apparel and equipment.",
 },
 {
 title: "Mark’s",
 description: "Workwear, footwear and everyday apparel.",
 },
 ],
 },
 ],
 image: p("partycity", "01-hero.png"),
 closing:
 "We designed the ecommerce. The customer was designing the moment. From we should celebrate to we’re ready, the systems behind that journey can be complicated. The experience in front of the customer should make planning feel easier.",
 },
 ava: {
 impact: "Helped shape Ava’s early product experience, focused MVP flows and a foundation the team can grow.",
 client: "Ava",
 timeline: "Early-stage startup · 2024",
 team: "Product Designer · founders · engineering",
 tools: ["Figma", "Prototyping", "Product strategy"],
 context:
 "Ava is an early-stage startup product. The work focused on clarifying the core user problem and designing an MVP experience that could ship without overbuilding.",
 goals: [
 "Define the MVP journeys worth shipping first",
 "Design clear flows and interface patterns",
 "Establish a lightweight visual system for iteration",
 ],
 research: [
 {
 title: "Founder alignment",
 description:
 "Worked with founders to separate must-have journeys from later experiments.",
 },
 {
 title: "Early concept validation",
 description:
 "Tested rough flows against the intended user story before committing screen polish.",
 },
 ],
 insights: [
 "Early products need ruthless focus, every screen should defend the core loop",
 "A small design system prevents visual drift even before the team scales",
 ],
 solutions: [
 {
 title: "MVP journey design",
 description:
 "Mapped and designed the primary paths users need to complete to understand Ava’s value.",
 },
 {
 title: "Interface foundations",
 description:
 "Established hierarchy, components and empty/error states the team can reuse.",
 },
 ],
 learnings: [
 "Startup UX is as much about what not to design yet as what to ship",
 ],
 metrics: [
 { value: "MVP", label: "Focused early product experience"},
 { value: "Startup", label: "Design paired with founding team"},
 ],
 overview:
 "I helped design Ava’s early product experience, clarifying MVP scope, shaping core flows and establishing interface foundations for an early-stage startup.",
 challenge:
 "With limited time and an evolving product story, the challenge was shipping a coherent experience without designing the whole company on day one.",
 process: [
 {
 phase: "01",
 title: "Scope",
 description: "Aligned on the smallest valuable set of journeys.",
 },
 {
 phase: "02",
 title: "Design",
 description: "Created flows, screens and a lightweight system.",
 },
 {
 phase: "03",
 title: "Ship",
 description: "Supported implementation and early iteration.",
 },
 ],
 deliverables: [
 "MVP UX and UI",
 "User flows",
 "Design foundations",
 ],
 outcomes: [
 "A shippable early product experience",
 "Shared direction for design and engineering",
 ],
 gallery: [
 { type: "image", src: p("ava", "01-hero.png"), caption: "Ava, early product experience"},
 ],
 image: p("ava", "01-hero.png"),
 closing: "Focus first. Polish what ships. Grow the system with the product.",
 },
 "50nny": {
 impact: "Helped turn 50NNY’s early concepts into a coherent product experience and shared design direction.",
 client: "50NNY",
 timeline: "Early-stage startup · 2024",
 team: "Product Designer · founders · engineering",
 tools: ["Figma", "Prototyping", "Product strategy"],
 context:
 "50NNY is a startup product that needed structure, a clear experience backbone so features could grow without the interface becoming a collection of one-offs.",
 goals: [
 "Clarify the product story and primary journeys",
 "Design information architecture and key screens",
 "Establish visual and interaction patterns for iteration",
 ],
 research: [
 {
 title: "Concept workshops",
 description:
 "Worked with the team to translate brand and product ideas into user-facing journeys.",
 },
 {
 title: "Structure review",
 description:
 "Stress-tested navigation and flows against how the product was expected to expand.",
 },
 ],
 insights: [
 "Startup products need a spine early, IA and patterns beat isolated screen polish",
 "A clear product story helps the whole team say no to distractions",
 ],
 solutions: [
 {
 title: "Experience structure",
 description:
 "Defined the core journeys and information architecture for 50NNY’s digital product.",
 },
 {
 title: "Interface system",
 description:
 "Designed screens and reusable patterns that keep the product feeling coherent as it grows.",
 },
 ],
 learnings: [
 "Coherence is a startup advantage, users feel when every screen was invented separately",
 ],
 metrics: [
 { value: "Startup", label: "Product experience from concept to interface"},
 { value: "Foundation", label: "Patterns ready for the next feature wave"},
 ],
 overview:
 "I helped design 50NNY’s product experience, turning early concepts into structured journeys, screens and interface patterns for an early-stage startup.",
 challenge:
 "Ideas moved faster than structure. The challenge was giving 50NNY a clear experience without freezing experimentation.",
 process: [
 {
 phase: "01",
 title: "Story",
 description: "Defined who the product is for and what success looks like.",
 },
 {
 phase: "02",
 title: "Structure",
 description: "Built IA, flows and key interface patterns.",
 },
 {
 phase: "03",
 title: "Delivery",
 description: "Supported build and review with the startup team.",
 },
 ],
 deliverables: [
 "Product UX and UI",
 "Information architecture",
 "Visual and interaction patterns",
 ],
 outcomes: [
 "A clearer product experience for early users",
 "Shared design direction across the team",
 ],
 gallery: [
 { type: "image", src: p("50nny", "01-hero.png"), caption: "50NNY, startup product experience"},
 ],
 image: p("50nny", "01-hero.png"),
 closing: "Give the product a spine. Then let it grow.",
 },
};
