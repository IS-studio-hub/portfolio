import type { Competitor } from "./types";

/** Competitive set per case study — company peers or concept-adjacent products. */
export const competitorsData: Record<
  string,
  { intro?: string; competitors: Competitor[] }
> = {
  gom: {
    intro:
      "Public licensing platforms compete on clarity under regulation — discovery, payment confidence and multi-role operations.",
    competitors: [
      {
        name: "ServiceOntario",
        focus: "Provincial digital services",
        note: "High-volume government transactions with strong identity and form patterns.",
        url: "https://www.ontario.ca/page/serviceontario",
      },
      {
        name: "myFWC",
        focus: "Fish & wildlife licensing",
        note: "U.S. wildlife licensing with residency rules, tags and seasonal products.",
        url: "https://myfwc.com/",
      },
      {
        name: "California CDFW",
        focus: "License & permit portal",
        note: "Complex outdoor permits with education requirements and renewals.",
        url: "https://wildlife.ca.gov/",
      },
      {
        name: "AlbertaRELM",
        focus: "Outdoor licensing",
        note: "Canadian provincial peer for hunting, fishing and draw systems.",
        url: "https://www.albertarelm.com/",
      },
    ],
  },
  weebo: {
    intro:
      "Project knowledge products compete on how well teams can capture, ask and act without leaving the work.",
    competitors: [
      {
        name: "Notion AI",
        focus: "Workspace + AI",
        note: "Documents and databases with embedded AI answering from page context.",
        url: "https://www.notion.com/product/ai",
      },
      {
        name: "Glean",
        focus: "Enterprise search",
        note: "Company-wide retrieval across tools with permission-aware answers.",
        url: "https://www.glean.com/",
      },
      {
        name: "Guru",
        focus: "Knowledge management",
        note: "Verified knowledge cards and browser extensions for support and sales teams.",
        url: "https://www.getguru.com/",
      },
      {
        name: "Mem",
        focus: "AI notes",
        note: "Personal and team memory with automatic organization and recall.",
        url: "https://get.mem.ai/",
      },
    ],
  },
  csc: {
    intro:
      "Luxury home ecommerce competes on curation, designer authority and visual merchandising — not lowest price alone.",
    competitors: [
      {
        name: "Wayfair",
        focus: "Mass home marketplace",
        note: "Scale and assortment pressure every curated home retailer.",
        url: "https://www.wayfair.com/",
      },
      {
        name: "Chairish",
        focus: "Designer consignment",
        note: "Peer marketplace for high-end pre-owned furniture and decor.",
        url: "https://www.chairish.com/",
      },
      {
        name: "1stDibs",
        focus: "Luxury design marketplace",
        note: "Authenticated vintage and contemporary design at collector prices.",
        url: "https://www.1stdibs.com/",
      },
      {
        name: "West Elm",
        focus: "Modern home brand",
        note: "Strong brand system and room storytelling for contemporary interiors.",
        url: "https://www.westelm.com/",
      },
    ],
  },
  slt: {
    intro:
      "Culinary retail sits between specialty brands, lifestyle houses and DTC kitchen upstarts.",
    competitors: [
      {
        name: "Williams Sonoma",
        focus: "Premium kitchen retail",
        note: "Closest peer for cookware authority, registry and culinary storytelling.",
        url: "https://www.williams-sonoma.com/",
      },
      {
        name: "Crate & Barrel",
        focus: "Home & tabletop",
        note: "Overlapping tabletop and entertaining assortment with strong visual systems.",
        url: "https://www.crateandbarrel.com/",
      },
      {
        name: "Food52",
        focus: "Editorial commerce",
        note: "Recipe-led discovery that blurs content and shop.",
        url: "https://food52.com/",
      },
      {
        name: "Made In",
        focus: "DTC cookware",
        note: "Direct cookware brand competing for performance-minded home cooks.",
        url: "https://madeincookware.com/",
      },
    ],
  },
  zg: {
    intro:
      "Statement home brands compete on mood, photography and how boldly they own a point of view.",
    competitors: [
      {
        name: "Pottery Barn",
        focus: "Lifestyle home",
        note: "Room-led storytelling and broad home assortment.",
        url: "https://www.potterybarn.com/",
      },
      {
        name: "RH",
        focus: "Luxury interiors",
        note: "Gallery-like presentation and high-end furnishings.",
        url: "https://rh.com/",
      },
      {
        name: "West Elm",
        focus: "Modern decor",
        note: "Contemporary aesthetic with strong componentized ecommerce UI.",
        url: "https://www.westelm.com/",
      },
      {
        name: "CB2",
        focus: "Urban modern",
        note: "Younger modern lifestyle brand with bold product photography.",
        url: "https://www.cb2.com/",
      },
    ],
  },
  gigz: {
    intro:
      "Musician social products compete with publishing platforms, creator tools and community apps.",
    competitors: [
      {
        name: "SoundCloud",
        focus: "Audio social",
        note: "Discovery and feedback loops for independent music uploads.",
        url: "https://soundcloud.com/",
      },
      {
        name: "Bandcamp",
        focus: "Artist commerce",
        note: "Direct-to-fan sales with community and release culture.",
        url: "https://bandcamp.com/",
      },
      {
        name: "Discord",
        focus: "Creator communities",
        note: "Where many bedroom musicians already build peer relationships.",
        url: "https://discord.com/",
      },
      {
        name: "Splice",
        focus: "Music creation tools",
        note: "Sounds, samples and collaboration for producers in-home.",
        url: "https://splice.com/",
      },
    ],
  },
  CHaPPie: {
    intro:
      "Client-discovery tools compete with sales intelligence suites and lightweight lead finders.",
    competitors: [
      {
        name: "Apollo.io",
        focus: "Sales intelligence",
        note: "Search, enrich and sequence prospects from one database.",
        url: "https://www.apollo.io/",
      },
      {
        name: "ZoomInfo",
        focus: "B2B data platform",
        note: "Enterprise go-to-market data and intent signals.",
        url: "https://www.zoominfo.com/",
      },
      {
        name: "LinkedIn Sales Navigator",
        focus: "Network prospecting",
        note: "Relationship-based discovery inside the professional graph.",
        url: "https://business.linkedin.com/sales-solutions/sales-navigator",
      },
      {
        name: "Hunter",
        focus: "Contact finding",
        note: "Lightweight email finding and verification for outbound.",
        url: "https://hunter.io/",
      },
    ],
  },
  ctc: {
    intro:
      "Canadian hardlines retail competes with home improvement giants, mass merchants and marketplaces.",
    competitors: [
      {
        name: "Home Depot Canada",
        focus: "Home improvement",
        note: "Primary hardlines peer for DIY, tools and project journeys.",
        url: "https://www.homedepot.ca/",
      },
      {
        name: "Lowe’s Canada",
        focus: "Home improvement",
        note: "Overlapping project and seasonal merchandising patterns.",
        url: "https://www.lowes.ca/",
      },
      {
        name: "Amazon",
        focus: "Marketplace convenience",
        note: "Always-on assortment and fulfillment pressure on category pages.",
        url: "https://www.amazon.ca/",
      },
      {
        name: "Walmart Canada",
        focus: "Mass retail",
        note: "Broad basket competition including automotive and seasonal.",
        url: "https://www.walmart.ca/",
      },
    ],
  },
  marks: {
    intro:
      "Workwear and casual apparel compete across specialty chains, outdoor retailers and brand DTC.",
    competitors: [
      {
        name: "Carhartt",
        focus: "Workwear brand",
        note: "Category authority for durable work apparel.",
        url: "https://www.carhartt.com/",
      },
      {
        name: "Boot Barn",
        focus: "Western & work",
        note: "Specialty retail for boots and work lifestyle.",
        url: "https://www.bootbarn.com/",
      },
      {
        name: "Sport Chek",
        focus: "Canadian apparel/sport",
        note: "Sister-category traffic for casual and outdoor wear in Canada.",
        url: "https://www.sportchek.ca/",
      },
      {
        name: "Helly Hansen",
        focus: "Outdoor workwear",
        note: "Performance outerwear competing for utility-minded shoppers.",
        url: "https://www.hellyhansen.com/",
      },
    ],
  },
  sportchek: {
    intro:
      "Sporting goods retail competes with specialty chains, brand DTC and value-led outdoor stores.",
    competitors: [
      {
        name: "Decathlon",
        focus: "Value sports retail",
        note: "Own-brand sports assortment with strong digital product systems.",
        url: "https://www.decathlon.ca/",
      },
      {
        name: "Atmosphere",
        focus: "Canadian outdoor",
        note: "Outdoor specialty peer within Canadian retail.",
        url: "https://www.atmosphere.ca/",
      },
      {
        name: "Nike",
        focus: "Brand DTC",
        note: "Direct athlete storytelling and product drops online.",
        url: "https://www.nike.com/ca/",
      },
      {
        name: "Lululemon",
        focus: "Athletic lifestyle",
        note: "High-intent athletic apparel with refined ecommerce craft.",
        url: "https://shop.lululemon.com/",
      },
    ],
  },
  partycity: {
    intro:
      "Party retail competes with mass merchants, craft chains and online occasion specialists.",
    competitors: [
      {
        name: "Amazon Party Supplies",
        focus: "Marketplace occasions",
        note: "Endless SKUs and fast shipping for last-minute party needs.",
        url: "https://www.amazon.ca/",
      },
      {
        name: "Michaels",
        focus: "Craft & party",
        note: "Overlapping DIY celebration and seasonal craft shopping.",
        url: "https://canada.michaels.com/",
      },
      {
        name: "Oriental Trading",
        focus: "Bulk party goods",
        note: "Value packs and themed assortments for events.",
        url: "https://www.orientaltrading.com/",
      },
      {
        name: "Dollarama",
        focus: "Value celebrations",
        note: "Low-cost party and seasonal goods in Canadian retail.",
        url: "https://www.dollarama.com/",
      },
    ],
  },
  walmart: {
    intro:
      "Fashion virtual try-on competes with marketplace AR, brand fitting tools and computer-vision fashion startups.",
    competitors: [
      {
        name: "Amazon Virtual Try-On",
        focus: "Marketplace AR",
        note: "Scale try-on experiences inside the world’s largest retail app.",
        url: "https://www.amazon.com/",
      },
      {
        name: "ASOS Fit Assistant",
        focus: "Fashion sizing AI",
        note: "Fit confidence tools that reduce return friction online.",
        url: "https://www.asos.com/",
      },
      {
        name: "Google AR Trial",
        focus: "Search AR commerce",
        note: "Try-before-buy surfaces in search and shopping graphs.",
        url: "https://arvr.google.com/",
      },
      {
        name: "Snap AR Shopping",
        focus: "Social try-on",
        note: "Lens-based try-on for beauty and fashion brands.",
        url: "https://www.snapchat.com/",
      },
    ],
  },
  anova: {
    intro:
      "Smart cooking companions compete with appliance ecosystems and guided-recipe platforms.",
    competitors: [
      {
        name: "Thermomix",
        focus: "Guided appliance cooking",
        note: "Recipe-driven hardware with tightly coupled software guidance.",
        url: "https://www.thermomix.com/",
      },
      {
        name: "Breville / Joule",
        focus: "Precision cooking",
        note: "Connected kitchen tools with app-led temperature control.",
        url: "https://www.breville.com/",
      },
      {
        name: "Tovala",
        focus: "Smart oven + meals",
        note: "Scan-to-cook meals paired with a connected oven.",
        url: "https://www.tovala.com/",
      },
      {
        name: "June Oven",
        focus: "Camera-led smart oven",
        note: "Vision-assisted cooking modes and recipe guidance.",
        url: "https://juneoven.com/",
      },
    ],
  },
  ymca: {
    intro:
      "Community fitness products compete with gym chains, class marketplaces and wellness apps.",
    competitors: [
      {
        name: "GoodLife Fitness",
        focus: "Canadian gym chain",
        note: "National membership competitor for workouts and schedules.",
        url: "https://www.goodlifefitness.com/",
      },
      {
        name: "ClassPass",
        focus: "Class marketplace",
        note: "Flexible bookings across studios instead of a single club.",
        url: "https://classpass.com/",
      },
      {
        name: "Mindbody",
        focus: "Studio booking platform",
        note: "Scheduling and discovery infrastructure for fitness businesses.",
        url: "https://www.mindbodyonline.com/",
      },
      {
        name: "Anytime Fitness",
        focus: "24/7 club network",
        note: "Convenience-led gym memberships with digital access patterns.",
        url: "https://www.anytimefitness.com/",
      },
    ],
  },
  ppjv: {
    intro:
      "Internal banking experiences compete with core platforms and modern digital banking suites.",
    competitors: [
      {
        name: "Backbase",
        focus: "Digital banking suite",
        note: "Composable engagement banking for retail and business channels.",
        url: "https://www.backbase.com/",
      },
      {
        name: "Temenos",
        focus: "Core banking",
        note: "Enterprise core systems that shape internal operational UX.",
        url: "https://www.temenos.com/",
      },
      {
        name: "Thought Machine",
        focus: "Cloud core banking",
        note: "Modern core alternatives influencing product surfaces.",
        url: "https://www.thoughtmachine.net/",
      },
      {
        name: "FIS",
        focus: "Banking technology",
        note: "Large-scale banking software across channels and ops.",
        url: "https://www.fisglobal.com/",
      },
    ],
  },
  "first-principles": {
    intro:
      "Conversational AI products compete on empty-state clarity, trust and how naturally questions become work.",
    competitors: [
      {
        name: "ChatGPT",
        focus: "General AI chat",
        note: "Default conversational baseline for asking and iterating.",
        url: "https://chatgpt.com/",
      },
      {
        name: "Claude",
        focus: "Long-context assistant",
        note: "Strong writing and reasoning competitor for knowledge work.",
        url: "https://claude.ai/",
      },
      {
        name: "Perplexity",
        focus: "Answer engine",
        note: "Search-native conversation with cited responses.",
        url: "https://www.perplexity.ai/",
      },
      {
        name: "Poe",
        focus: "Multi-bot chat",
        note: "Aggregator experience for trying many models in one UI.",
        url: "https://poe.com/",
      },
    ],
  },
  westjet: {
    intro:
      "Airline digital products compete on booking clarity, disruption handling and loyalty journeys.",
    competitors: [
      {
        name: "Air Canada",
        focus: "National carrier",
        note: "Primary Canadian peer for booking, status and trip management.",
        url: "https://www.aircanada.com/",
      },
      {
        name: "Porter Airlines",
        focus: "Regional / premium leisure",
        note: "Canadian competitor with distinctive brand and route story.",
        url: "https://www.flyporter.com/",
      },
      {
        name: "Flair Airlines",
        focus: "Ultra-low-cost",
        note: "Price-led booking flows that pressure ancillary UX.",
        url: "https://flyflair.com/",
      },
      {
        name: "Delta",
        focus: "Global digital airline",
        note: "Benchmark for polished trip apps and disruption communication.",
        url: "https://www.delta.com/",
      },
    ],
  },
  polard: {
    intro:
      "Lottery digital experiences compete with provincial operators and instant-play mobile products.",
    competitors: [
      {
        name: "OLG",
        focus: "Provincial lottery",
        note: "Canadian lottery digital peer for games, results and accounts.",
        url: "https://www.olg.ca/",
      },
      {
        name: "Lotto Quebec",
        focus: "Provincial lottery",
        note: "Strong digital lottery patterns across tickets and draws.",
        url: "https://www.espacejeux.com/",
      },
      {
        name: "The National Lottery (UK)",
        focus: "National lottery digital",
        note: "Mature online ticket purchase and results experience.",
        url: "https://www.national-lottery.co.uk/",
      },
      {
        name: "Jackpocket",
        focus: "Lottery app",
        note: "Mobile-first lottery courier experience in the U.S.",
        url: "https://jackpocket.com/",
      },
    ],
  },
  ava: {
    intro:
      "Creative AI studios compete with generation tools that turn prompts into usable visual output.",
    competitors: [
      {
        name: "Midjourney",
        focus: "Image generation",
        note: "Cultural default for high-aesthetic AI imagery.",
        url: "https://www.midjourney.com/",
      },
      {
        name: "Runway",
        focus: "Generative video",
        note: "Creator tools spanning image, video and editing workflows.",
        url: "https://runwayml.com/",
      },
      {
        name: "Adobe Firefly",
        focus: "Creative Cloud AI",
        note: "Generation inside professional design tooling.",
        url: "https://www.adobe.com/products/firefly.html",
      },
      {
        name: "Leonardo",
        focus: "Asset generation",
        note: "Model playgrounds for production-ready creative assets.",
        url: "https://leonardo.ai/",
      },
    ],
  },
  "50nny": {
    intro:
      "AI memory and API platforms compete with vector databases, orchestration frameworks and model platforms.",
    competitors: [
      {
        name: "Pinecone",
        focus: "Vector database",
        note: "Managed memory retrieval for AI applications.",
        url: "https://www.pinecone.io/",
      },
      {
        name: "LangChain",
        focus: "AI orchestration",
        note: "Framework for chaining models, tools and memory.",
        url: "https://www.langchain.com/",
      },
      {
        name: "LlamaIndex",
        focus: "Data framework",
        note: "Connecting private data sources to LLM applications.",
        url: "https://www.llamaindex.ai/",
      },
      {
        name: "OpenAI Platform",
        focus: "Model APIs",
        note: "Default API surface for chat, embeddings and tooling.",
        url: "https://platform.openai.com/",
      },
    ],
  },
  superlocal: {
    intro:
      "Local food discovery competes with grocers, market directories and farm-to-table platforms.",
    competitors: [
      {
        name: "Farm Boy",
        focus: "Specialty grocery",
        note: "Polished local-produce retail presence in Ontario.",
        url: "https://farmboy.ca/",
      },
      {
        name: "Local Line",
        focus: "Local food marketplace",
        note: "Connects buyers with nearby farms and producers.",
        url: "https://localline.ca/",
      },
      {
        name: "Farmers’ Market directories",
        focus: "Market listings",
        note: "Hours-and-vendor lists without brand-led storytelling.",
      },
      {
        name: "Instagram local food",
        focus: "Social discovery",
        note: "Where many vendors already publish availability and personality.",
        url: "https://www.instagram.com/",
      },
    ],
  },
  blairandjack: {
    intro:
      "Men’s skincare DTC competes with grooming brands, telehealth and clinical beauty lines.",
    competitors: [
      {
        name: "Hims",
        focus: "Men’s wellness DTC",
        note: "Telehealth-led grooming and care with strong conversion UX.",
        url: "https://www.hims.com/",
      },
      {
        name: "Harry’s",
        focus: "Men’s grooming",
        note: "Ritual-based brand storytelling for everyday grooming.",
        url: "https://www.harrys.com/",
      },
      {
        name: "The Ordinary",
        focus: "Clinical actives",
        note: "Ingredient-led education that shoppers compare against rituals.",
        url: "https://theordinary.com/",
      },
      {
        name: "Keeps",
        focus: "Men’s dermatology",
        note: "Medical-backed men’s hair and skin pathways online.",
        url: "https://www.keeps.com/",
      },
    ],
  },
  gatorade: {
    intro:
      "Performance hydration competes across sports drinks, functional beverages and electrolyte brands.",
    competitors: [
      {
        name: "BodyArmor",
        focus: "Sports hydration",
        note: "Direct rival in athletic drink storytelling and retail.",
        url: "https://www.drinkbodyarmor.com/",
      },
      {
        name: "Powerade",
        focus: "Sports drink",
        note: "Coca-Cola peer competing for training and game-day mindshare.",
        url: "https://www.powerade.com/",
      },
      {
        name: "Liquid I.V.",
        focus: "Electrolyte packets",
        note: "Lifestyle hydration brand with strong DTC narrative.",
        url: "https://www.liquid-iv.com/",
      },
      {
        name: "Prime",
        focus: "Creator hydration",
        note: "Culture-led beverage competitor with viral distribution.",
        url: "https://drinkprime.com/",
      },
    ],
  },
  "magic-spoon": {
    intro:
      "Better-for-you cereal competes with protein cereals, keto brands and legacy breakfast giants.",
    competitors: [
      {
        name: "Catalina Crunch",
        focus: "Keto cereal",
        note: "Direct peer in low-carb breakfast positioning.",
        url: "https://catalinacrunch.com/",
      },
      {
        name: "Three Wishes",
        focus: "Grain-free cereal",
        note: "Plant-protein cereal with clean DTC storytelling.",
        url: "https://threewishes.com/",
      },
      {
        name: "HighKey",
        focus: "Keto snacks",
        note: "Overlapping keto breakfast and snack shelf.",
        url: "https://highkey.com/",
      },
      {
        name: "Special K / legacy cereal",
        focus: "Mass breakfast",
        note: "Household brands still owning aisle attention and nostalgia.",
        url: "https://www.specialk.com/",
      },
    ],
  },
  dahari: {
    intro:
      "Israeli commercial real-estate sites compete on portfolio clarity, status and institutional trust.",
    competitors: [
      {
        name: "Azrieli Group",
        focus: "Commercial RE",
        note: "Major Israeli peer for malls, offices and digital portfolio presence.",
        url: "https://www.azrieli.com/",
      },
      {
        name: "Melisron",
        focus: "Retail properties",
        note: "Commercial landlord competing for tenant and investor attention.",
        url: "https://www.melisron.co.il/",
      },
      {
        name: "Amot",
        focus: "Income-producing RE",
        note: "Institutional property company with corporate web patterns.",
        url: "https://www.amot.co.il/",
      },
      {
        name: "RE/MAX commercial",
        focus: "Brokerage listings",
        note: "Listing-led discovery for commercial and development assets.",
        url: "https://www.remax.co.il/",
      },
    ],
  },
  isstudio: {
    intro:
      "Studio websites compete on presence — how quickly craft, point of view and contact feel unmistakable.",
    competitors: [
      {
        name: "Instrument",
        focus: "Digital product studio",
        note: "High-craft marketing site with strong case-study pacing.",
        url: "https://www.instrument.com/",
      },
      {
        name: "&Walsh",
        focus: "Design studio",
        note: "Bold identity-led studio presence online.",
        url: "https://andwalsh.com/",
      },
      {
        name: "Pentagram",
        focus: "Design consultancy",
        note: "Institutional design authority through work-first browsing.",
        url: "https://www.pentagram.com/",
      },
      {
        name: "IDEO",
        focus: "Design & innovation",
        note: "Thought-leadership led studio and product storytelling.",
        url: "https://www.ideo.com/",
      },
    ],
  },
  telaviv: {
    intro:
      "Place guides compete with city media, tourism boards and map-first discovery apps.",
    competitors: [
      {
        name: "Time Out Tel Aviv",
        focus: "City culture media",
        note: "Editorial listings for food, nightlife and events.",
        url: "https://www.timeout.com/israel",
      },
      {
        name: "Visit Israel",
        focus: "Tourism board",
        note: "Official destination storytelling and trip planning.",
        url: "https://www.israel.travel/",
      },
      {
        name: "Secret Tel Aviv",
        focus: "Local listings",
        note: "Community-led events and neighborhood discovery.",
        url: "https://www.secrettelaviv.com/",
      },
      {
        name: "Google Maps",
        focus: "Map discovery",
        note: "Default way people find parking, transit and nearby places.",
        url: "https://maps.google.com/",
      },
    ],
  },
  dooogs: {
    intro:
      "Dog guides compete with breed directories, pet marketplaces and veterinary content brands.",
    competitors: [
      {
        name: "AKC",
        focus: "Breed authority",
        note: "Canonical breed standards and educational content.",
        url: "https://www.akc.org/",
      },
      {
        name: "Rover",
        focus: "Pet services marketplace",
        note: "Care booking with strong pet-parent trust patterns.",
        url: "https://www.rover.com/",
      },
      {
        name: "The Spruce Pets",
        focus: "Pet editorial",
        note: "Care and breed articles optimized for search intent.",
        url: "https://www.thesprucepets.com/",
      },
      {
        name: "Embark",
        focus: "Dog DNA / health",
        note: "Science-led breed and health discovery for owners.",
        url: "https://embarkvet.com/",
      },
    ],
  },
};
