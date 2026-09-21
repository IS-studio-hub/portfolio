export type ResearchConclusions = {
  /** Short synthesis connecting competitive field + mood research. */
  lead: string;
  /** Takeaways from the competitors section. */
  competitive: string[];
  /** Takeaways from the mood board (palette, type, assets, references). */
  atmosphere: string[];
  /** Soft bridge into the media results that follow. */
  bridge: string;
};

/** Research conclusions derived from each project's competitive field and mood board. */
export const researchConclusionsData: Record<string, ResearchConclusions> = {
  gom: {
    lead: "Competitive licensing portals and the outdoor mood board both pointed the same direction: residents need official clarity without losing the wilderness story that makes parks worth visiting.",
    competitive: [
      "Peers like ServiceOntario and myFWC win when residency, product type and payment feel obvious under policy pressure — not when they hide behind agency jargon.",
      "Seasonal tags, renewals and multi-role ops are table stakes; the differentiator is reducing hesitation at discovery and checkout.",
      "Canadian provincial peers prove the bar is trusted forms, not entertainment UI.",
    ],
    atmosphere: [
      "Park green, form paper and prairie gold framed a government outdoors voice — official enough for permits, seasonal enough for wilderness.",
      "Words like Clear, Official and Residency became the tone filter for every key screen.",
      "Texture cues stayed paper-and-line, so the product felt procedural and outdoor at once.",
    ],
    bridge: "Those conclusions shaped the portal flows and seasonal presentation in the work below.",
  },
  weebo: {
    lead: "Knowledge products compete on capture-to-answer loops. The mood research kept that loop calm and workspace-native instead of sci-fi.",
    competitive: [
      "Notion AI and Glean set the expectation that answers should come from the team's own material with permissions respected.",
      "Guru and Mem show that trust comes from verification and memory, not just fluency.",
      "Leaving the work context to search is the failure mode — the product had to stay inside the project.",
    ],
    atmosphere: [
      "Indigo depth and soft lilac signals framed a quiet answering surface, not a spectacle.",
      "Ask, Capture, Hub became the language of the product story.",
      "Mesh and dots textures echoed networked knowledge without visual noise.",
    ],
    bridge: "The screens below follow that research: ask inside the hub, answer with grounded calm.",
  },
  csc: {
    lead: "Luxury home peers compete on curation and designer authority. The mood board locked that into linen, brass and quiet editorial charcoal.",
    competitive: [
      "Wayfair proves assortment alone is not enough — CSC had to feel curated, not infinite.",
      "Chairish and 1stDibs raise the bar for designer provenance and object storytelling.",
      "West Elm shows how room narratives sell furniture better than SKU grids alone.",
    ],
    atmosphere: [
      "Warm linen, brass and espresso set a quiet luxury palette that refuses discount energy.",
      "Curated, Room and Heirloom became the verbal filter for merchandising.",
      "Wash and grain textures support editorial stills over marketplace chrome.",
    ],
    bridge: "Those conclusions guided the room-led presentation in the results below.",
  },
  slt: {
    lead: "Culinary retail peers sit between specialty craft and lifestyle commerce. Mood research pushed heat, ritual and table energy into the visual system.",
    competitive: [
      "Williams Sonoma owns cookware authority — SLT needed equal craft credibility.",
      "Food52 proves recipe-led discovery can sell product without feeling like a catalogue dump.",
      "DTC cookware brands raise the bar for material honesty and product photography.",
    ],
    atmosphere: [
      "Tomato red, steel and maple framed a kitchen that feels used, not staged.",
      "Cook, Ritual and Heat became the language of confidence at the stove.",
      "Grain and wash textures keep surfaces tactile — wood, metal, parchment.",
    ],
    bridge: "The final frames below carry that culinary research into product and story.",
  },
  zg: {
    lead: "Statement home brands win on mood and point of view. Competitive and visual research both said: own drama, don't soften it.",
    competitive: [
      "RH and CB2 show that photography and gallery presentation can outrank assortment depth.",
      "Pottery Barn and West Elm prove brand system consistency is part of the purchase decision.",
      "The category rewards a bold stance — mild interiors read as forgettable.",
    ],
    atmosphere: [
      "Orchid violet, lacquer black and gallery white set a high-contrast collectible mood.",
      "Bold, Object and Drama became the verbal brief for merchandising.",
      "Mesh and wash textures support object-culture stills over soft lifestyle fluff.",
    ],
    bridge: "Those conclusions drive the statement frames in the work below.",
  },
  gigz: {
    lead: "Musician social peers span publishing, community and creator tools. Mood research kept the product late-night and peer-first — bedroom studio, not stadium.",
    competitive: [
      "SoundCloud and Bandcamp set audio social and artist-first expectations.",
      "Discord proves community loops matter as much as publishing features.",
      "Splice shows creators expect tools that respect craft and iteration, not vanity metrics alone.",
    ],
    atmosphere: [
      "Late-night coral and studio graphite framed feedback as intimate, not corporate.",
      "Loop, Share and Peer became the product vocabulary.",
      "Dots and mesh textures echo waveforms and studio cable energy.",
    ],
    bridge: "The results below follow that research into share-and-feedback moments.",
  },
  CHaPPie: {
    lead: "Sales intelligence peers compete on find-to-outreach speed. Mood research added sharp lime signals so opportunity hunting feels electric, not bureaucratic.",
    competitive: [
      "Apollo and ZoomInfo set the bar for contact richness and list building.",
      "LinkedIn Sales Navigator owns network context — local discovery had to feel equally grounded.",
      "Lightweight finders win on speed; enterprise suites win on depth — CH4PP!3 needed both in a freelancers' rhythm.",
    ],
    atmosphere: [
      "Lime ping on slate panels made outbound feel actionable.",
      "Find, Qualify, Reach became the sequence the UI had to honour.",
      "Mesh and lines textures support map-and-pipeline thinking.",
    ],
    bridge: "Those conclusions shaped the discovery and outreach frames below.",
  },
  ctc: {
    lead: "Hardlines peers compete on project confidence and aisle findability. Mood research locked triangle red and tool-steel grey as the retail signal.",
    competitive: [
      "Home Depot and Lowe’s set journey expectations for DIY and seasonal projects.",
      "Amazon and Walmart pressure price and speed — CTC had to win on trust and project clarity.",
      "Enterprise retail research pointed to terminology, filters and action visibility as hesitation points.",
    ],
    atmosphere: [
      "Triangle red, steel and caution amber framed weekend-project energy.",
      "DIY, Aisle and Fix became the language of the experience.",
      "Line textures reinforce wayfinding and hardware honesty.",
    ],
    bridge: "The screens below reflect that competitive and visual research.",
  },
  marks: {
    lead: "Workwear peers compete on durability storytelling. Mood research translated that into hi-vis orange, denim indigo and dusty trail beige.",
    competitive: [
      "Carhartt and Filson-level authenticity raised the bar for material honesty.",
      "Boot Barn and outdoor peers show footwear and utility as hero categories.",
      "Cross-brand CTC research reinforced collaboration with BA, research and QA around real shoppers.",
    ],
    atmosphere: [
      "Hi-vis, denim and dust set a grit palette that refuses fashion gloss.",
      "Durable, Shift and Utility became the verbal brief.",
      "Grain and wash textures keep fabric and trail tactility in frame.",
    ],
    bridge: "Those conclusions carry into the Mark’s frames below.",
  },
  sportchek: {
    lead: "Sporting goods peers compete with specialty, DTC and athletic brands. Mood research pushed race-day pulse — red, ice, track black.",
    competitive: [
      "Decathlon and Atmosphere set assortment and value expectations.",
      "Nike and Lululemon raise the storytelling bar even when the retailer is multi-brand.",
      "Seasonal kit journeys need speed and clarity more than endless filters.",
    ],
    atmosphere: [
      "Race red, ice cyan and track black framed athletic urgency.",
      "Train, Season and Kit became the merchandising language.",
      "Mesh and dots textures echo field energy and motion.",
    ],
    bridge: "The results below follow that competitive and atmosphere research.",
  },
  partycity: {
    lead: "Occasion retail peers compete on theme findability and colour energy. Mood research leaned into celebration overload — on purpose.",
    competitive: [
      "Amazon and Dollarama pressure price; Michaels and Oriental Trading pressure theme depth.",
      "Customers often start with occasion, not SKU — research confirmed theme-first journeys.",
      "Availability and filters are hesitation points when party dates are fixed.",
    ],
    atmosphere: [
      "Confetti violet, balloon yellow and frosting pink made colour a product feature.",
      "Theme, Surprise and Occasion became the verbal system.",
      "Dots and wash textures support party texture without looking childish by accident.",
    ],
    bridge: "Those conclusions shaped the occasion-led work below.",
  },
  walmart: {
    lead: "Virtual try-on peers compete on fit confidence and AR credibility. Mood research kept spark blue and fitting-room chrome as the fashion signal.",
    competitive: [
      "Amazon, ASOS, Google and Snap set expectations for try-on speed and visual believability.",
      "Self vs model switching is the differentiator — research pushed both paths.",
      "Fashion AR fails when it feels gimmicky; it wins when it reduces return anxiety.",
    ],
    atmosphere: [
      "Walmart blue, spark yellow and garment black framed try-on as retail, not novelty.",
      "Try-on, Self, Fit and AR became the product vocabulary.",
      "Mesh textures support tech presence without neon gimmick overlays.",
    ],
    bridge: "The try-on results below follow that competitive and visual research.",
  },
  anova: {
    lead: "Smart cooking peers compete on guided confidence. Mood research translated that into ember heat, stainless and recipe parchment.",
    competitive: [
      "Thermomix and Tovala prove guided sequences sell better than raw appliance controls.",
      "Breville / Joule set precision expectations for temperature and timing.",
      "The product had to feel like a cook companion, not a dashboard of sensors.",
    ],
    atmosphere: [
      "Ember orange and parchment framed progress as culinary, not industrial.",
      "Guide, Heat and Timer became the interaction language.",
      "Wash and grain textures keep the kitchen tactile.",
    ],
    bridge: "Those conclusions shaped the guided-cook frames below.",
  },
  ymca: {
    lead: "Fitness peers compete on belonging and class discovery. Mood research kept Y red and pool blue as community signals, not boutique gloss.",
    competitive: [
      "GoodLife and Anytime set gym-chain expectations for schedules and membership.",
      "ClassPass and Mindbody raise the bar for class findability and booking clarity.",
      "Community fitness wins when youth, family and belonging stay visible — not only workouts.",
    ],
    atmosphere: [
      "Y red, lane blue and towel white framed inclusive wellness.",
      "Belong, Move and Together became the verbal brief.",
      "Line textures support schedule clarity without cold marketplace UI.",
    ],
    bridge: "The results below carry that community research forward.",
  },
  ppjv: {
    lead: "Internal banking peers compete on ops clarity and trust. Mood research locked ledger grey and secure midnight so density never feels unsafe.",
    competitive: [
      "Backbase, Temenos and Thought Machine set expectations for modular banking UX.",
      "Ops tools fail when status and audit trails are ambiguous — clarity is the feature.",
      "Internal users need speed and certainty more than consumer delight patterns.",
    ],
    atmosphere: [
      "Trust blue, vault night and cleared green framed secure operations.",
      "Secure, Ops, Clear and Audit became the language of the UI.",
      "Lines and mesh textures support table density without visual chaos.",
    ],
    bridge: "Those conclusions informed the ops frames in the work below.",
  },
  "first-principles": {
    lead: "Conversational AI peers compete on empty-state clarity and trust. Mood research pushed electric ask-blue and thinking graphite so the first message feels inviting, not blank.",
    competitive: [
      "ChatGPT, Claude and Perplexity set the bar for answer quality and follow-up fluency.",
      "Empty states and suggested prompts are the real onboarding — research put them first.",
      "Long answers need structure and next steps, not walls of text.",
    ],
    atmosphere: [
      "Ask blue, empty white and hint grey framed a calm research conversation.",
      "Empty, Ask, Length and Trust became the product principles.",
      "Wash and dots textures keep the chat surface soft and focused.",
    ],
    bridge: "The conversational results below follow that research.",
  },
  westjet: {
    lead: "Airline peers compete on booking clarity and calm disruption handling. Mood research kept prairie teal and cloud white as the guest-care signal.",
    competitive: [
      "Air Canada, Porter and Delta set expectations for trip management and loyalty journeys.",
      "Low-cost peers pressure price; full-service peers pressure trust — WestJet needed both stories.",
      "Route clarity and guest tone matter as much as fare widgets.",
    ],
    atmosphere: [
      "Teal cabin light and runway night framed prairie airline calm.",
      "Fly, Guest and Route became the verbal system.",
      "Wash textures keep travel soft rather than operationally harsh.",
    ],
    bridge: "Those conclusions shaped the booking and trip frames below.",
  },
  polard: {
    lead: "Lottery peers compete on instant play and draw tension. Mood research leaned into jackpot violet and ticket white — hope with restraint.",
    competitive: [
      "OLG and Lotto Quebec set provincial digital expectations for tickets and responsible play.",
      "Jackpocket and UK National Lottery raise mobile instant-play patterns.",
      "Chance products need clarity on odds and next steps without dark-pattern pressure.",
    ],
    atmosphere: [
      "Draw violet, ticket white and win gold framed tension without chaos.",
      "Chance, Instant and Draw became the product vocabulary.",
      "Dots and mesh textures echo balls, scratches and ticket grids.",
    ],
    bridge: "The play experiences below follow that competitive and visual research.",
  },
  ava: {
    lead: "Creative AI peers compete on prompt-to-usable-output. Mood research kept studio black and blush bloom so generation feels artistic, not utilitarian only.",
    competitive: [
      "Midjourney, Runway and Firefly set aesthetic and motion expectations.",
      "Iteration speed and style control matter more than a single magic button.",
      "Output has to feel frame-ready for creative work, not just demo novelty.",
    ],
    atmosphere: [
      "Bloom pink, studio black and render silver framed a creative lab.",
      "Generate, Style, Prompt and Iterate became the workflow language.",
      "Mesh textures support generative energy without purple-glow cliché overload.",
    ],
    bridge: "Those conclusions shaped the generation frames below.",
  },
  "50nny": {
    lead: "Memory infrastructure peers compete with vector DBs and orchestration platforms. Mood research translated that into amber nodes and terminal black — infra that still feels approachable.",
    competitive: [
      "Pinecone, LangChain and LlamaIndex set mental models for store, retrieve and chain.",
      "OpenAI Platform raises the bar for API console clarity.",
      "Developers need testable memory and reuse — not only marketing diagrams.",
    ],
    atmosphere: [
      "Amber nodes, mint memory and terminal black framed infra with warmth.",
      "Remember, Embed, Test and Reuse became the product principles.",
      "Mesh and lines textures support graph and API thinking.",
    ],
    bridge: "The platform results below follow that research.",
  },
  superlocal: {
    lead: "Local food peers compete with grocers, farm platforms and social discovery. Mood research pushed mustard stall light and pepper red — market-fresh, not supermarket chrome.",
    competitive: [
      "Farm Boy sets polish for local grocery; Local Line sets farm marketplace patterns.",
      "Market directories and Instagram prove hours and vendor personality are part of the product.",
      "Freshness and locality must be felt immediately — not buried in filters.",
    ],
    atmosphere: [
      "Mustard, pepper and leaf green framed stall energy.",
      "Local, Fresh, Vendor and Hours became the verbal brief.",
      "Grain textures keep crate and soil tactility in the system.",
    ],
    bridge: "Those conclusions carry into the market frames below.",
  },
  blairandjack: {
    lead: "Men’s skincare peers compete on ritual, clinical trust and grooming ease. Mood research locked warm taupe and clinical cream for a calm daily system.",
    competitive: [
      "Hims and Keeps set telehealth and men’s wellness expectations.",
      "Harry’s owns ritual simplicity; The Ordinary owns clinical education.",
      "The brand needed physician-backed calm without medical coldness.",
    ],
    atmosphere: [
      "Taupe, serum cream and pump black framed a quiet ritual.",
      "Ritual, Calm and Science became the language of the site.",
      "Wash textures keep skin and bottle surfaces soft.",
    ],
    bridge: "The product results below follow that competitive and mood research.",
  },
  gatorade: {
    lead: "Performance hydration peers compete on athletic proof and formula clarity. Mood research pushed lightning orange and freeze cyan — sweat energy, not soft lifestyle.",
    competitive: [
      "BodyArmor, Powerade and Prime set campaign intensity expectations.",
      "Liquid I.V. raises lifestyle hydration storytelling — Gatorade still owns performance.",
      "Formula and win moments need to feel earned, not decorative.",
    ],
    atmosphere: [
      "Bolt orange, sideline graphite and freeze cyan framed athletic urgency.",
      "Sweat, Fuel and Formula became the campaign vocabulary.",
      "Mesh and dots textures echo pulse and motion.",
    ],
    bridge: "Those conclusions shaped the performance frames below.",
  },
  "magic-spoon": {
    lead: "Better-for-you cereal peers compete on protein claims and nostalgia packaging. Mood research kept bowl lilac and cartoon yellow — future cereal that still feels kid-joyful.",
    competitive: [
      "Catalina Crunch and Three Wishes set better-for-you cereal expectations.",
      "Legacy cereal brands still own nostalgia — Magic Spoon had to borrow joy without copying sugar culture.",
      "Nutrition facts need to feel honest next to playful pack energy.",
    ],
    atmosphere: [
      "Bowl lilac, milk white and loop yellow framed nostalgic crunch.",
      "Crunch, Protein and Replay became the brand language.",
      "Dots and wash textures support cereal-pop without cheapness.",
    ],
    bridge: "The pack and product results below follow that research.",
  },
  dahari: {
    lead: "Israeli commercial RE peers compete on portfolio clarity and institutional trust. Mood research locked blueprint blue and limestone — corporate, Hebrew-first, city-building.",
    competitive: [
      "Azrieli, Melisron and Amot set expectations for status, assets and investor confidence.",
      "Commercial presentation fails when projects feel like a brochure dump — status and plot clarity matter.",
      "Hebrew UI and corporate tone had to feel native, not translated afterthought.",
    ],
    atmosphere: [
      "Blueprint blue, limestone and ink framed urban renewal seriousness.",
      "Build, Renew, Plot and Status became the verbal system.",
      "Line textures support architectural drawing energy.",
    ],
    bridge: "Those conclusions shaped the corporate frames below.",
  },
  isstudio: {
    lead: "Studio sites compete on presence — craft and contact in one breath. Mood research pushed house gold on void black so the studio signal is unmistakable.",
    competitive: [
      "Instrument, &Walsh and Pentagram set the bar for identity-led studio browsing.",
      "Work-first presentation beats generic agency templates.",
      "Contact and craft must feel immediate — presence is the product.",
    ],
    atmosphere: [
      "House gold, void black and accent lime framed studio signal.",
      "House, Craft, Talk and Ship became the language of the site.",
      "Wash textures keep the house atmosphere cinematic.",
    ],
    bridge: "The studio results below follow that competitive and visual research.",
  },
  telaviv: {
    lead: "Place guides compete with city media and maps. Mood research locked Dizengoff night — Bauhaus cream, wet asphalt, palm neon — so the street feels lived-in, not touristic.",
    competitive: [
      "Time Out and Visit Israel set listing and tourism expectations.",
      "Secret Tel Aviv and Maps prove corners and nights matter more than generic city overviews.",
      "An interactive street wins when props, light and place names feel specific.",
    ],
    atmosphere: [
      "Night air cyan, Bauhaus cream and lamp amber framed the White City after dark.",
      "Street, Roof, Night and Corner became the experience vocabulary.",
      "Grain textures support asphalt and palm atmosphere over clean UI chrome.",
    ],
    bridge: "Those conclusions shaped the night-street results below.",
  },
  dooogs: {
    lead: "Dog guides compete with breed directories and pet marketplaces. Mood research kept poodle-host charm — soft, askable, yellow-shirt friendly — so advice feels personal.",
    competitive: [
      "AKC owns breed authority; Rover owns pet-parent trust; Spruce and Embark own content depth.",
      "Chat-first guidance had to feel warmer than a wiki and clearer than social tips.",
      "Starter prompts and breed curiosity are the onboarding — research put them up front.",
    ],
    atmosphere: [
      "Shirt yellow, groom white and dachshund ink framed a soft host brand.",
      "Chat, Breed, Ask and Guide became the product language.",
      "Wash textures keep the studio soft and approachable.",
    ],
    bridge: "The conversational results below follow that competitive and mood research.",
  },
};
