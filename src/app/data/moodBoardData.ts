export type MoodTexture = "grain" | "lines" | "dots" | "mesh" | "wash";
export type MoodAssetType = "image" | "video" | "model";

export type MoodSwatch = {
  hex: string;
  label: string;
};

export type MoodFont = {
  name: string;
  role: string;
  sample: string;
  stack: string;
};

export type MoodAsset = {
  type: MoodAssetType;
  label: string;
  note: string;
  /** Optional path under /public, e.g. projects/slug/file.png */
  src?: string;
  poster?: string;
};

export type MoodReference = {
  name: string;
  note: string;
  url?: string;
};

export type MoodBoard = {
  note: string;
  colors: MoodSwatch[];
  words: string[];
  fonts: MoodFont[];
  assets: MoodAsset[];
  references: MoodReference[];
  textures?: MoodTexture[];
};

/** Visual atmosphere — palette, type, separate assets and references. */
export const moodBoardData: Record<string, MoodBoard> = {
  gom: {
    note: "Government outdoors — trusted green, paper-white clarity, seasonal wilderness.",
    colors: [
      { hex: "#1B5E3B", label: "Park green" },
      { hex: "#F4F1EC", label: "Form paper" },
      { hex: "#0E2A1C", label: "Boreal" },
      { hex: "#C4A35A", label: "Prairie gold" },
      { hex: "#2F6FED", label: "Link blue" },
    ],
    words: ["Clear", "Official", "Seasonal", "Residency", "Permit"],
    textures: ["lines", "grain", "wash"],
    fonts: [
      { name: "Manitoba Sans", role: "UI / forms", sample: "Purchase a park permit", stack: "system-ui, \"Segoe UI\", sans-serif" },
      { name: "Public Serif", role: "Headings", sample: "My Account", stack: "Georgia, \"Times New Roman\", serif" },
      { name: "Mono Label", role: "Meta", sample: "VALIDITY · MB", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Permit fragment", note: "Parks pass cue", src: "projects/gom/card.png" },
      { type: "image", label: "Licence tiles", note: "Product assortment scrap", src: "projects/gom/grid/02-licences.jpg" },
      { type: "video", label: "Portal motion", note: "Flow atmosphere", src: "projects/gom/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "ServiceOntario", note: "Form clarity under policy", url: "https://www.ontario.ca/page/serviceontario" },
      { name: "myFWC", note: "Outdoor licensing patterns", url: "https://myfwc.com/" },
      { name: "GOV.UK Design System", note: "Trusted public UI language", url: "https://design-system.service.gov.uk/" },
    ],
  },
  weebo: {
    note: "Knowledge that answers back — indigo depth, soft lilac signals, calm workspace light.",
    colors: [
      { hex: "#818CF8", label: "Signal" },
      { hex: "#1E1B4B", label: "Night UI" },
      { hex: "#EEF2FF", label: "Panel" },
      { hex: "#34D399", label: "Ready" },
      { hex: "#64748B", label: "Meta" },
    ],
    words: ["Ask", "Capture", "Hub", "Grounded", "Ship"],
    textures: ["mesh", "dots", "grain"],
    fonts: [
      { name: "Inter Soft", role: "Product UI", sample: "Ask your project", stack: "Inter, system-ui, sans-serif" },
      { name: "JetBrains Mono", role: "Data / code", sample: "knowledge.hub", stack: "ui-monospace, Menlo, monospace" },
      { name: "Söhne Display", role: "Marketing", sample: "Your data. Your bot.", stack: "system-ui, sans-serif" },
    ],
    assets: [
      { type: "image", label: "Brand atmosphere", note: "Sky / signal still", src: "projects/weebo/card.png" },
      { type: "image", label: "Feature tiles", note: "Narrative fragments", src: "projects/weebo/solution-1.png" },
      { type: "image", label: "Mobile stack", note: "Device assets", src: "projects/weebo/grid/07-mobile.png" },
    ],
    references: [
      { name: "Notion AI", note: "Workspace answering", url: "https://www.notion.com/product/ai" },
      { name: "Glean", note: "Permissioned retrieval", url: "https://www.glean.com/" },
      { name: "Linear", note: "Calm product density", url: "https://linear.app/" },
    ],
  },
  csc: {
    note: "Curated home luxury — warm linen, brass, editorial charcoal.",
    colors: [
      { hex: "#C4A574", label: "Brass" },
      { hex: "#F7F3EC", label: "Linen" },
      { hex: "#2C241C", label: "Espresso" },
      { hex: "#8B7355", label: "Oak" },
      { hex: "#E8DFD0", label: "Plaster" },
    ],
    words: ["Curated", "Room", "Designer", "Quiet", "Heirloom"],
    textures: ["wash", "grain", "lines"],
    fonts: [
      { name: "Canela", role: "Editorial", sample: "Room stories", stack: "Georgia, \"Times New Roman\", serif" },
      { name: "Neue Haas", role: "UI", sample: "Shop the sale", stack: "system-ui, \"Helvetica Neue\", sans-serif" },
      { name: "Courier Prime", role: "Tags", sample: "DESIGNER PICK", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Room vignette", note: "Furniture fragment", src: "projects/csc/card.png" },
      { type: "image", label: "Catalog crop", note: "Product still", src: "projects/csc/solution-1.png" },
      { type: "image", label: "Material mood", note: "Brass / linen cue", src: "projects/csc/solution-2.png" },
    ],
    references: [
      { name: "Chairish", note: "Designer consignment mood", url: "https://www.chairish.com/" },
      { name: "1stDibs", note: "Luxury object presentation", url: "https://www.1stdibs.com/" },
      { name: "Architectural Digest", note: "Editorial interiors", url: "https://www.architecturaldigest.com/" },
    ],
  },
  slt: {
    note: "Culinary energy — tomato red, steel, butcher-block warmth.",
    colors: [
      { hex: "#C45A3C", label: "Tomato" },
      { hex: "#F5EDE3", label: "Marble" },
      { hex: "#1F2933", label: "Cast iron" },
      { hex: "#D4A574", label: "Maple" },
      { hex: "#5B7C6A", label: "Herb" },
    ],
    words: ["Cook", "Ritual", "Heat", "Table", "Craft"],
    textures: ["grain", "dots", "wash"],
    fonts: [
      { name: "GT America", role: "UI", sample: "Cook with confidence", stack: "system-ui, sans-serif" },
      { name: "Reckless", role: "Lifestyle", sample: "From stove to table", stack: "Georgia, serif" },
      { name: "IBM Plex Mono", role: "Specs", sample: "10\" / carbon steel", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Cookware still", note: "Steel + wood fragment", src: "projects/slt/card.png" },
      { type: "image", label: "Recipe scrap", note: "Culinary editorial", src: "projects/slt/solution-1.png" },
      { type: "image", label: "Heat cue", note: "Kitchen atmosphere", src: "projects/slt/solution-2.png" },
    ],
    references: [
      { name: "Williams Sonoma", note: "Culinary retail craft", url: "https://www.williams-sonoma.com/" },
      { name: "Food52", note: "Editorial commerce", url: "https://food52.com/" },
      { name: "Bon Appétit", note: "Food photography tone", url: "https://www.bonappetit.com/" },
    ],
  },
  zg: {
    note: "Statement interiors — orchid violet, lacquer black, gallery white.",
    colors: [
      { hex: "#A78BFA", label: "Orchid" },
      { hex: "#111111", label: "Lacquer" },
      { hex: "#FAFAF8", label: "Gallery" },
      { hex: "#E11D48", label: "Accent rose" },
      { hex: "#D6D3D1", label: "Concrete" },
    ],
    words: ["Bold", "Mood", "Object", "Drama", "Collect"],
    textures: ["mesh", "wash", "lines"],
    fonts: [
      { name: "Druk", role: "Display", sample: "Make a statement", stack: "Impact, Haettenschweiler, sans-serif" },
      { name: "Söhne", role: "UI", sample: "New arrivals", stack: "system-ui, sans-serif" },
      { name: "Feature Mono", role: "Labels", sample: "LIMITED", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Object study", note: "Statement furniture", src: "projects/zg/card.png" },
      { type: "image", label: "Gallery light", note: "High-contrast still", src: "projects/zg/solution-1.png" },
      { type: "image", label: "Pattern scrap", note: "Textile cue", src: "projects/zg/solution-2.png" },
    ],
    references: [
      { name: "RH", note: "Gallery retail presentation", url: "https://rh.com/" },
      { name: "CB2", note: "Urban modern mood", url: "https://www.cb2.com/" },
      { name: "Dezeen", note: "Object culture", url: "https://www.dezeen.com/" },
    ],
  },
  gigz: {
    note: "Bedroom musician energy — late-night coral, soft graphite, studio haze.",
    colors: [
      { hex: "#FF8A65", label: "Monitor glow" },
      { hex: "#1A1A1A", label: "Booth" },
      { hex: "#F3EDE6", label: "Demo sheet" },
      { hex: "#7C9CFF", label: "Waveform" },
      { hex: "#3F3F46", label: "Cable" },
    ],
    words: ["Loop", "Share", "Peer", "Late", "Signal"],
    textures: ["dots", "grain", "mesh"],
    fonts: [
      { name: "Space Grotesk", role: "Product", sample: "Share the take", stack: "system-ui, sans-serif" },
      { name: "Pitch Sans", role: "Social", sample: "Bedroom musicians", stack: "system-ui, sans-serif" },
      { name: "Roboto Mono", role: "Meta", sample: "03:41 · DEMO", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Waveform cue", note: "Audio visualization", src: "projects/gigz/card.png" },
      { type: "image", label: "Demo fragment", note: "Social feedback scrap", src: "projects/gigz/solution-1.png" },
      { type: "image", label: "Avatar stack", note: "Community cue", src: "projects/gigz/solution-2.png" },
    ],
    references: [
      { name: "SoundCloud", note: "Audio social energy", url: "https://soundcloud.com/" },
      { name: "Bandcamp", note: "Artist-first culture", url: "https://bandcamp.com/" },
      { name: "Discord", note: "Creator community UX", url: "https://discord.com/" },
    ],
  },
  CHaPPie: {
    note: "Opportunity hunting — sharp lime marks, slate panels, outbound electricity.",
    colors: [
      { hex: "#B8F000", label: "Ping" },
      { hex: "#0F172A", label: "Pipeline" },
      { hex: "#E2E8F0", label: "Lead card" },
      { hex: "#38BDF8", label: "Map pin" },
      { hex: "#475569", label: "Filter" },
    ],
    words: ["Find", "Qualify", "Reach", "Local", "Convert"],
    textures: ["mesh", "lines", "dots"],
    fonts: [
      { name: "Geist", role: "Product UI", sample: "Find the next client", stack: "system-ui, sans-serif" },
      { name: "IBM Plex Sans", role: "Data", sample: "Local opportunity", stack: "system-ui, sans-serif" },
      { name: "Geist Mono", role: "IDs", sample: "lead_0291", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Map pin mood", note: "Local discovery", src: "projects/CHaPPie/card.png" },
      { type: "image", label: "Lead card", note: "Prospect fragment", src: "projects/CHaPPie/solution-1.png" },
      { type: "image", label: "Search pulse", note: "Query fragment", src: "projects/CHaPPie/solution-2.png" },
    ],
    references: [
      { name: "Apollo.io", note: "Sales intelligence UI", url: "https://www.apollo.io/" },
      { name: "LinkedIn Sales Nav", note: "Network prospecting", url: "https://business.linkedin.com/sales-solutions" },
      { name: "Clay", note: "Modern GTM tools", url: "https://www.clay.com/" },
    ],
  },
  ctc: {
    note: "Canadian hardlines — triangle red, tool-steel grey, weekend project light.",
    colors: [
      { hex: "#DC2626", label: "Triangle" },
      { hex: "#F8FAFC", label: "Aisle" },
      { hex: "#334155", label: "Steel" },
      { hex: "#F59E0B", label: "Caution" },
      { hex: "#0F172A", label: "Hardware" },
    ],
    words: ["DIY", "Seasonal", "Aisle", "Fix", "Home"],
    textures: ["lines", "grain", "dots"],
    fonts: [
      { name: "CTC Sans", role: "Retail UI", sample: "Get it done", stack: "system-ui, sans-serif" },
      { name: "Highway Gothic", role: "Wayfinding", sample: "Automotive", stack: "Arial Narrow, Arial, sans-serif" },
      { name: "Roboto Mono", role: "SKU", sample: "DC0002726", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Triangle mark", note: "Brand signal", src: "projects/ctc/card.png" },
      { type: "image", label: "Tool still", note: "Hardware crop", src: "projects/ctc/solution-1.png" },
      { type: "image", label: "Seasonal poster", note: "Campaign fragment", src: "projects/ctc/solution-2.png" },
    ],
    references: [
      { name: "Home Depot", note: "Hardlines journeys", url: "https://www.homedepot.ca/" },
      { name: "Lowe's", note: "Project merchandising", url: "https://www.lowes.ca/" },
      { name: "Canadian Tire Live", note: "Brand retail reference", url: "https://www.canadiantire.ca/" },
    ],
  },
  marks: {
    note: "Workwear grit — safety orange, denim indigo, dusty trail beige.",
    colors: [
      { hex: "#FB923C", label: "Hi-vis" },
      { hex: "#1E3A5F", label: "Denim" },
      { hex: "#E7E0D5", label: "Dust" },
      { hex: "#44403C", label: "Boot" },
      { hex: "#A8A29E", label: "Metal" },
    ],
    words: ["Durable", "Shift", "Outdoor", "Utility", "Honest"],
    textures: ["grain", "wash", "lines"],
    fonts: [
      { name: "Work Sans", role: "UI", sample: "Built for the shift", stack: "system-ui, sans-serif" },
      { name: "Slab Trade", role: "Headlines", sample: "Workwear", stack: "Rockwell, \"Courier New\", serif" },
      { name: "IBM Plex Mono", role: "Specs", sample: "STEEL TOE", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Boot study", note: "Footwear detail", src: "projects/marks/card.png" },
      { type: "image", label: "Fabric swatch", note: "Canvas / denim", src: "projects/marks/solution-1.png" },
      { type: "image", label: "Hi-vis accent", note: "Safety color cue", src: "projects/marks/solution-2.png" },
    ],
    references: [
      { name: "Carhartt", note: "Workwear authenticity", url: "https://www.carhartt.com/" },
      { name: "Filson", note: "Rugged material story", url: "https://www.filson.com/" },
      { name: "Mark's live", note: "Retail reference", url: "https://www.marks.com/" },
    ],
  },
  sportchek: {
    note: "Game-day pulse — competitor red, ice white, night track black.",
    colors: [
      { hex: "#E11D2E", label: "Race red" },
      { hex: "#F8FAFC", label: "Jersey" },
      { hex: "#0A0A0A", label: "Track" },
      { hex: "#22D3EE", label: "Ice" },
      { hex: "#64748B", label: "Gear" },
    ],
    words: ["Train", "Season", "Kit", "Speed", "Field"],
    textures: ["mesh", "dots", "lines"],
    fonts: [
      { name: "Athletic Sans", role: "UI", sample: "Gear up", stack: "system-ui, sans-serif" },
      { name: "Impact Condensed", role: "Campaign", sample: "TRAIN HARDER", stack: "Impact, Haettenschweiler, sans-serif" },
      { name: "DIN Mono", role: "Stats", sample: "KM · 12.4", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Jersey crop", note: "Team color fragment", src: "projects/sportchek/card.png" },
      { type: "image", label: "Shoe silhouette", note: "Footwear icon", src: "projects/sportchek/solution-1.png" },
      { type: "image", label: "Motion sprint", note: "Athlete energy", src: "projects/sportchek/solution-2.png" },
    ],
    references: [
      { name: "Nike", note: "Athlete storytelling", url: "https://www.nike.com/" },
      { name: "Decathlon", note: "Sports assortment UX", url: "https://www.decathlon.ca/" },
      { name: "Sport Chek live", note: "Retail reference", url: "https://www.sportchek.ca/" },
    ],
  },
  partycity: {
    note: "Celebration overload — confetti violet, balloon yellow, cake frosting pink.",
    colors: [
      { hex: "#7C3AED", label: "Party" },
      { hex: "#FDE047", label: "Balloon" },
      { hex: "#FB7185", label: "Frosting" },
      { hex: "#FFFFFF", label: "Streamers" },
      { hex: "#0F172A", label: "Night event" },
    ],
    words: ["Theme", "Surprise", "Occasion", "Color", "Crowd"],
    textures: ["dots", "wash", "mesh"],
    fonts: [
      { name: "Balloon Sans", role: "UI", sample: "Make it a party", stack: "system-ui, sans-serif" },
      { name: "Poster Condensed", role: "Occasions", sample: "BIRTHDAY", stack: "Arial Black, Impact, sans-serif" },
      { name: "Comic Meta", role: "Tags", sample: "THEME KIT", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Balloon cluster", note: "Celebration object", src: "projects/partycity/card.png" },
      { type: "image", label: "Confetti texture", note: "Surface scrap", src: "projects/partycity/solution-1.png" },
      { type: "image", label: "Party burst", note: "Occasion still", src: "projects/partycity/solution-2.png" },
    ],
    references: [
      { name: "Michaels", note: "Craft + party mood", url: "https://canada.michaels.com/" },
      { name: "Oriental Trading", note: "Bulk occasion goods", url: "https://www.orientaltrading.com/" },
      { name: "Party City live", note: "Retail reference", url: "https://www.partycity.ca/" },
    ],
  },
  walmart: {
    note: "Fashion try-on — spark blue, fitting-room chrome, garment black.",
    colors: [
      { hex: "#0071DC", label: "Walmart blue" },
      { hex: "#FFC220", label: "Spark" },
      { hex: "#F1F5F9", label: "Mirror" },
      { hex: "#111827", label: "Garment" },
      { hex: "#94A3B8", label: "Rail" },
    ],
    words: ["Try-on", "Self", "Model", "Fit", "AR"],
    textures: ["mesh", "grain", "lines"],
    fonts: [
      { name: "Walmart Spark", role: "UI", sample: "Try it on", stack: "system-ui, sans-serif" },
      { name: "Boutique Serif", role: "Fashion", sample: "Virtual fit", stack: "Georgia, serif" },
      { name: "Code Pro", role: "AR meta", sample: "MODEL · SELF", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Model plate", note: "Outfit crop", src: "projects/walmart/card.png" },
      { type: "image", label: "Try-on fragment", note: "Fit cue", src: "projects/walmart/solution-1.png" },
      { type: "image", label: "Spark mark", note: "Brand cue", src: "projects/walmart/solution-2.png" },
    ],
    references: [
      { name: "Amazon Try-On", note: "Marketplace AR", url: "https://www.amazon.com/" },
      { name: "ASOS Fit", note: "Fashion confidence tools", url: "https://www.asos.com/" },
      { name: "Snap AR", note: "Social try-on", url: "https://www.snapchat.com/" },
    ],
  },
  anova: {
    note: "Guided cooking — ember orange, stainless, recipe parchment.",
    colors: [
      { hex: "#F97316", label: "Ember" },
      { hex: "#E8EEF2", label: "Steel" },
      { hex: "#1C1917", label: "Knob" },
      { hex: "#FEF3C7", label: "Parchment" },
      { hex: "#78716C", label: "Steam" },
    ],
    words: ["Guide", "Heat", "Timer", "Sense", "Plate"],
    textures: ["wash", "grain", "dots"],
    fonts: [
      { name: "Kitchen Sans", role: "App UI", sample: "Guided cook", stack: "system-ui, sans-serif" },
      { name: "Recipe Serif", role: "Steps", sample: "Sear then rest", stack: "Georgia, serif" },
      { name: "Timer Mono", role: "Controls", sample: "00:12:40", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Oven door", note: "Appliance fragment", src: "projects/anova/card.png" },
      { type: "image", label: "Cook progress", note: "Temperature cue", src: "projects/anova/solution-1.png" },
      { type: "image", label: "Plate still", note: "Finished dish crop", src: "projects/anova/solution-2.png" },
    ],
    references: [
      { name: "Thermomix", note: "Guided appliance cooking", url: "https://www.thermomix.com/" },
      { name: "Breville", note: "Precision kitchen UX", url: "https://www.breville.com/" },
      { name: "Tovala", note: "Scan-to-cook pairing", url: "https://www.tovala.com/" },
    ],
  },
  ymca: {
    note: "Community wellness — Y red, pool blue, locker-room concrete.",
    colors: [
      { hex: "#C8102E", label: "Y red" },
      { hex: "#0EA5E9", label: "Lane" },
      { hex: "#F5F5F4", label: "Towel" },
      { hex: "#292524", label: "Weight" },
      { hex: "#A8A29E", label: "Concrete" },
    ],
    words: ["Belong", "Move", "Youth", "Pool", "Together"],
    textures: ["lines", "dots", "wash"],
    fonts: [
      { name: "Community Sans", role: "UI", sample: "Find a class", stack: "system-ui, sans-serif" },
      { name: "Banner Soft", role: "Headlines", sample: "Belong here", stack: "system-ui, sans-serif" },
      { name: "Schedule Mono", role: "Times", sample: "6:30 AM", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Pool lane", note: "Water / lane fragment", src: "projects/ymca/card.png" },
      { type: "image", label: "Y mark", note: "Brand glyph", src: "projects/ymca/solution-1.png" },
      { type: "image", label: "Class energy", note: "Community cue", src: "projects/ymca/solution-2.png" },
    ],
    references: [
      { name: "GoodLife", note: "Canadian fitness peer", url: "https://www.goodlifefitness.com/" },
      { name: "ClassPass", note: "Class discovery", url: "https://classpass.com/" },
      { name: "Mindbody", note: "Studio booking patterns", url: "https://www.mindbodyonline.com/" },
    ],
  },
  ppjv: {
    note: "Internal banking — trust blue, ledger grey, secure midnight.",
    colors: [
      { hex: "#2563EB", label: "Trust" },
      { hex: "#0B1220", label: "Vault" },
      { hex: "#F8FAFC", label: "Statement" },
      { hex: "#10B981", label: "Cleared" },
      { hex: "#64748B", label: "Ledger" },
    ],
    words: ["Secure", "Ops", "Clear", "Audit", "Flow"],
    textures: ["lines", "mesh", "grain"],
    fonts: [
      { name: "Bank Sans", role: "Ops UI", sample: "Clear the queue", stack: "system-ui, sans-serif" },
      { name: "Ledger Serif", role: "Reports", sample: "Daily settlement", stack: "Georgia, serif" },
      { name: "IBM Plex Mono", role: "IDs", sample: "TXN-88421", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Secure seal", note: "Trust mark", src: "projects/ppjv/card.png" },
      { type: "image", label: "Table fragment", note: "Ops density crop", src: "projects/ppjv/solution-1.png" },
      { type: "image", label: "Status chip", note: "Cleared / pending", src: "projects/ppjv/solution-2.png" },
    ],
    references: [
      { name: "Backbase", note: "Digital banking suites", url: "https://www.backbase.com/" },
      { name: "Temenos", note: "Core banking language", url: "https://www.temenos.com/" },
      { name: "Stripe Dashboard", note: "Ops clarity reference", url: "https://stripe.com/" },
    ],
  },
  "first-principles": {
    note: "Conversational intelligence — electric blue, empty-state white, thinking graphite.",
    colors: [
      { hex: "#2563EB", label: "Ask" },
      { hex: "#FAFAFA", label: "Empty" },
      { hex: "#171717", label: "Reply" },
      { hex: "#A3A3A3", label: "Hint" },
      { hex: "#DDD6FE", label: "Suggest" },
    ],
    words: ["Empty", "Ask", "Length", "Trust", "Next"],
    textures: ["wash", "dots", "mesh"],
    fonts: [
      { name: "Conversation Sans", role: "Chat UI", sample: "What can I ask?", stack: "system-ui, sans-serif" },
      { name: "Essay Serif", role: "Long replies", sample: "A clearer answer", stack: "Georgia, serif" },
      { name: "Hint Mono", role: "Suggestions", sample: "try: summarize", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Empty state", note: "First-message plate", src: "projects/first-principles/card.png" },
      { type: "image", label: "Reply stream", note: "Answer fragment", src: "projects/first-principles/solution-1.png" },
      { type: "image", label: "Suggestion chips", note: "Prompt fragments", src: "projects/first-principles/solution-2.png" },
    ],
    references: [
      { name: "ChatGPT", note: "Conversational baseline", url: "https://chatgpt.com/" },
      { name: "Claude", note: "Long-form assistant tone", url: "https://claude.ai/" },
      { name: "Perplexity", note: "Answer-engine clarity", url: "https://www.perplexity.ai/" },
    ],
  },
  westjet: {
    note: "Prairie airline — teal cabin light, cloud white, runway night.",
    colors: [
      { hex: "#0EA5A8", label: "Teal" },
      { hex: "#F8FAFC", label: "Cloud" },
      { hex: "#0F172A", label: "Runway" },
      { hex: "#FCD34D", label: "Sun" },
      { hex: "#64748B", label: "Fuselage" },
    ],
    words: ["Fly", "Guest", "Route", "Calm", "West"],
    textures: ["wash", "grain", "lines"],
    fonts: [
      { name: "Cabin Sans", role: "Booking UI", sample: "Find flights", stack: "system-ui, sans-serif" },
      { name: "Westjet Script", role: "Brand voice", sample: "Owners Care", stack: "Georgia, serif" },
      { name: "Flight Mono", role: "Data", sample: "YYC → YYZ", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Teal livery", note: "Aircraft color cue", src: "projects/westjet/card.png" },
      { type: "image", label: "Seat map chip", note: "Cabin fragment", src: "projects/westjet/solution-1.png" },
      { type: "image", label: "Taxi / takeoff", note: "Travel atmosphere", src: "projects/westjet/solution-2.png" },
    ],
    references: [
      { name: "Air Canada", note: "National carrier UX", url: "https://www.aircanada.com/" },
      { name: "Porter", note: "Regional brand clarity", url: "https://www.flyporter.com/" },
      { name: "Delta", note: "Trip app polish", url: "https://www.delta.com/" },
    ],
  },
  polard: {
    note: "Lottery tension — jackpot violet, ticket white, chance black.",
    colors: [
      { hex: "#7C3AED", label: "Draw" },
      { hex: "#FDF4FF", label: "Ticket" },
      { hex: "#111827", label: "Night draw" },
      { hex: "#FBBF24", label: "Win" },
      { hex: "#C4B5FD", label: "Scratch" },
    ],
    words: ["Chance", "Instant", "Draw", "Hope", "Play"],
    textures: ["dots", "mesh", "wash"],
    fonts: [
      { name: "Chance Sans", role: "Play UI", sample: "Pick your numbers", stack: "system-ui, sans-serif" },
      { name: "Jackpot Display", role: "Win moments", sample: "DRAW NIGHT", stack: "Impact, Haettenschweiler, sans-serif" },
      { name: "Ticket Mono", role: "Codes", sample: "A-49281", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Ticket stub", note: "Paper lottery fragment", src: "projects/polard/card.png" },
      { type: "image", label: "Ball drop", note: "Draw cue", src: "projects/polard/solution-1.png" },
      { type: "image", label: "Scratch texture", note: "Instant-play surface", src: "projects/polard/solution-2.png" },
    ],
    references: [
      { name: "OLG", note: "Provincial lottery digital", url: "https://www.olg.ca/" },
      { name: "UK National Lottery", note: "Online ticket patterns", url: "https://www.national-lottery.co.uk/" },
      { name: "Jackpocket", note: "Mobile lottery UX", url: "https://jackpocket.com/" },
    ],
  },
  ava: {
    note: "Creative generation — blush pink, studio black, render silver.",
    colors: [
      { hex: "#F472B6", label: "Bloom" },
      { hex: "#0A0A0A", label: "Studio" },
      { hex: "#F5F5F5", label: "Canvas" },
      { hex: "#C084FC", label: "Prompt" },
      { hex: "#A1A1AA", label: "Render" },
    ],
    words: ["Generate", "Style", "Prompt", "Iterate", "Frame"],
    textures: ["mesh", "wash", "grain"],
    fonts: [
      { name: "Studio Sans", role: "Tool UI", sample: "Generate a frame", stack: "system-ui, sans-serif" },
      { name: "Editorial Display", role: "Output titles", sample: "Lookbook 01", stack: "Georgia, serif" },
      { name: "Prompt Mono", role: "Inputs", sample: "/style cinematic", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Render still", note: "Output crop", src: "projects/ava/card.png" },
      { type: "image", label: "Generate loop", note: "Prompt → image cue", src: "projects/ava/solution-1.png" },
      { type: "model", label: "Scene mass", note: "3D form study cue" },
    ],
    references: [
      { name: "Midjourney", note: "Aesthetic generation", url: "https://www.midjourney.com/" },
      { name: "Runway", note: "Generative video tools", url: "https://runwayml.com/" },
      { name: "Adobe Firefly", note: "Pro creative AI", url: "https://www.adobe.com/products/firefly.html" },
    ],
  },
  "50nny": {
    note: "AI memory infrastructure — amber nodes, terminal black, data mint.",
    colors: [
      { hex: "#FBBF24", label: "Node" },
      { hex: "#020617", label: "Terminal" },
      { hex: "#ECFDF5", label: "Memory" },
      { hex: "#34D399", label: "Store" },
      { hex: "#94A3B8", label: "API" },
    ],
    words: ["Remember", "Embed", "Test", "Reuse", "Context"],
    textures: ["mesh", "lines", "dots"],
    fonts: [
      { name: "Infra Sans", role: "Platform UI", sample: "Store this memory", stack: "system-ui, sans-serif" },
      { name: "Terminal", role: "API", sample: "POST /memory", stack: "ui-monospace, Menlo, monospace" },
      { name: "Doc Serif", role: "Guides", sample: "How context works", stack: "Georgia, serif" },
    ],
    assets: [
      { type: "image", label: "Node graph", note: "Memory topology scrap", src: "projects/50nny/card.png" },
      { type: "image", label: "Ingest flow", note: "Upload → embed cue", src: "projects/50nny/solution-1.png" },
      { type: "image", label: "Key chip", note: "API credential fragment", src: "projects/50nny/solution-2.png" },
    ],
    references: [
      { name: "Pinecone", note: "Vector memory UX", url: "https://www.pinecone.io/" },
      { name: "LangChain", note: "Orchestration mental model", url: "https://www.langchain.com/" },
      { name: "OpenAI Platform", note: "API console patterns", url: "https://platform.openai.com/" },
    ],
  },
  superlocal: {
    note: "Market-fresh — mustard stall light, pepper red, farm green.",
    colors: [
      { hex: "#E3B23C", label: "Mustard" },
      { hex: "#C92424", label: "Pepper" },
      { hex: "#2F5D3A", label: "Leaf" },
      { hex: "#F7F1E3", label: "Crate" },
      { hex: "#1D4ED8", label: "Sign blue" },
    ],
    words: ["Local", "Fresh", "Vendor", "Hours", "Soil"],
    textures: ["grain", "wash", "dots"],
    fonts: [
      { name: "Market Script", role: "Brand", sample: "Superlocal", stack: "Georgia, \"Brush Script MT\", cursive" },
      { name: "Stall Sans", role: "UI", sample: "Market hours", stack: "system-ui, sans-serif" },
      { name: "Label Mono", role: "Tags", sample: "OCT 13–19", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Pepper still", note: "Produce asset", src: "projects/superlocal/card.png" },
      { type: "image", label: "Market poster", note: "Campaign fragment", src: "projects/superlocal/solution-1.png" },
      { type: "video", label: "Market walk", note: "Vendor atmosphere", src: "projects/superlocal/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "Farm Boy", note: "Local grocery polish", url: "https://farmboy.ca/" },
      { name: "Local Line", note: "Farm marketplace", url: "https://localline.ca/" },
      { name: "Farmers' markets Ontario", note: "Hours + vendor reality", url: "https://farmersmarketsontario.com/" },
    ],
  },
  blairandjack: {
    note: "Men’s ritual skin — warm taupe, clinical cream, bottle black.",
    colors: [
      { hex: "#C4A484", label: "Taupe" },
      { hex: "#F5F1EA", label: "Serum" },
      { hex: "#1C1917", label: "Pump" },
      { hex: "#EA580C", label: "Active" },
      { hex: "#A8A29E", label: "Stone" },
    ],
    words: ["Ritual", "Calm", "Science", "Daily", "Skin"],
    textures: ["wash", "grain", "lines"],
    fonts: [
      { name: "Ritual Sans", role: "UI", sample: "Start your ritual", stack: "system-ui, sans-serif" },
      { name: "Clinical Serif", role: "Science", sample: "Physician-backed", stack: "Georgia, serif" },
      { name: "Label Mono", role: "Facts", sample: "AM / PM", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Bottle still", note: "Product crop", src: "projects/blairandjack/card.png" },
      { type: "image", label: "Ritual frame", note: "Brand fragment", src: "projects/blairandjack/solution-1.png" },
      { type: "video", label: "Pump motion", note: "Ritual use loop", src: "projects/blairandjack/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "Hims", note: "Men's wellness DTC", url: "https://www.hims.com/" },
      { name: "Harry's", note: "Grooming ritual brand", url: "https://www.harrys.com/" },
      { name: "The Ordinary", note: "Clinical education tone", url: "https://theordinary.com/" },
    ],
  },
  gatorade: {
    note: "Performance hydration — lightning orange, sweat graphite, freeze cyan.",
    colors: [
      { hex: "#F97316", label: "Bolt" },
      { hex: "#111827", label: "Sideline" },
      { hex: "#22D3EE", label: "Freeze" },
      { hex: "#F8FAFC", label: "Towel" },
      { hex: "#84CC16", label: "Electrolyte" },
    ],
    words: ["Sweat", "Fuel", "Win", "Formula", "Pulse"],
    textures: ["mesh", "dots", "lines"],
    fonts: [
      { name: "Performance Sans", role: "Campaign", sample: "Win from within", stack: "system-ui, sans-serif" },
      { name: "Block Condensed", role: "Posters", sample: "FUEL", stack: "Arial Black, Impact, sans-serif" },
      { name: "Stat Mono", role: "Data", sample: "Na+ · K+", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Bottle sculpt", note: "Product silhouette", src: "projects/gatorade/card.png" },
      { type: "image", label: "Formula panel", note: "Science crop", src: "projects/gatorade/solution-1.png" },
      { type: "video", label: "Sweat / splash", note: "Performance motion", src: "projects/gatorade/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "BodyArmor", note: "Sports drink rivalry", url: "https://www.drinkbodyarmor.com/" },
      { name: "Liquid I.V.", note: "Hydration lifestyle", url: "https://www.liquid-iv.com/" },
      { name: "Nike Training", note: "Athletic campaign craft", url: "https://www.nike.com/" },
    ],
  },
  "magic-spoon": {
    note: "Nostalgic cereal future — bowl lilac, milk white, cartoon yellow.",
    colors: [
      { hex: "#A78BFA", label: "Bowl" },
      { hex: "#FFFBEB", label: "Milk" },
      { hex: "#FACC15", label: "Loop" },
      { hex: "#FB7185", label: "Marshmallow" },
      { hex: "#1E1B4B", label: "Night snack" },
    ],
    words: ["Crunch", "Protein", "Kid", "Bowl", "Replay"],
    textures: ["dots", "wash", "grain"],
    fonts: [
      { name: "Cereal Soft", role: "Brand UI", sample: "High protein cereal", stack: "system-ui, sans-serif" },
      { name: "Nostalgia Display", role: "Pack", sample: "Fruity", stack: "Georgia, serif" },
      { name: "Nutrition Mono", role: "Facts", sample: "14g protein", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Loop pile", note: "Cereal still", src: "projects/magic-spoon/card.png" },
      { type: "image", label: "Box panel", note: "Packaging fragment", src: "projects/magic-spoon/solution-1.png" },
      { type: "video", label: "Pour motion", note: "Milk + crunch loop", src: "projects/magic-spoon/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "Catalina Crunch", note: "Better-for-you cereal", url: "https://catalinacrunch.com/" },
      { name: "Three Wishes", note: "Grain-free breakfast", url: "https://threewishes.com/" },
      { name: "90s cereal ads", note: "Nostalgia packaging language" },
    ],
  },
  dahari: {
    note: "Hebrew corporate real estate — blueprint blue, limestone, ink black.",
    colors: [
      { hex: "#60A5FA", label: "Blueprint" },
      { hex: "#E7E2D6", label: "Limestone" },
      { hex: "#0F172A", label: "Ink" },
      { hex: "#B45309", label: "Crane" },
      { hex: "#78716C", label: "Concrete" },
    ],
    words: ["Build", "Renew", "Plot", "Status", "City"],
    textures: ["lines", "grain", "mesh"],
    fonts: [
      { name: "Hebrew UI", role: "Product", sample: "פרויקטים", stack: "Arial Hebrew, Arial, sans-serif" },
      { name: "Blueprint Sans", role: "Corporate", sample: "Urban renewal", stack: "system-ui, sans-serif" },
      { name: "Plan Mono", role: "Meta", sample: "NETANYA · 2025", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Facade crop", note: "Architecture fragment", src: "projects/dahari/card.png" },
      { type: "image", label: "Blueprint line", note: "Technical drawing scrap", src: "projects/dahari/solution-1.png" },
      { type: "video", label: "Site motion", note: "Construction atmosphere", src: "projects/dahari/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "Azrieli", note: "Israeli commercial RE", url: "https://www.azrieli.com/" },
      { name: "Dezeen", note: "Architecture presentation", url: "https://www.dezeen.com/" },
      { name: "Dahari live", note: "Corporate site reference", url: "https://is-studio-hub.github.io/dahari/" },
    ],
  },
  isstudio: {
    note: "Studio house signal — experience gold, void black, showreel white.",
    colors: [
      { hex: "#FBBF24", label: "House" },
      { hex: "#050505", label: "Void" },
      { hex: "#F5F5F5", label: "Reel" },
      { hex: "#C8FF00", label: "Accent" },
      { hex: "#737373", label: "Quiet" },
    ],
    words: ["House", "Craft", "Talk", "Presence", "Ship"],
    textures: ["wash", "grain", "dots"],
    fonts: [
      { name: "Fraunces", role: "Display", sample: "Experience House", stack: "Fraunces, Georgia, serif" },
      { name: "DM Sans", role: "UI", sample: "Let's talk", stack: "\"DM Sans\", system-ui, sans-serif" },
      { name: "DM Mono", role: "Meta", sample: "IS STUDIO", stack: "\"DM Mono\", ui-monospace, monospace" },
    ],
    assets: [
      { type: "image", label: "House mark", note: "Identity glyph", src: "projects/isstudio/card.png" },
      { type: "image", label: "Accent craft", note: "Studio fragment", src: "projects/isstudio/solution-1.png" },
      { type: "video", label: "Showreel cut", note: "Motion presence", src: "projects/isstudio/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "Instrument", note: "Studio site craft", url: "https://www.instrument.com/" },
      { name: "&Walsh", note: "Identity-led studios", url: "https://andwalsh.com/" },
      { name: "Pentagram", note: "Work-first browsing", url: "https://www.pentagram.com/" },
    ],
  },
  telaviv: {
    note: "Dizengoff night — Bauhaus cream, wet asphalt, palm neon.",
    colors: [
      { hex: "#7DD3FC", label: "Night air" },
      { hex: "#F5E6C8", label: "Bauhaus" },
      { hex: "#0B1220", label: "Asphalt" },
      { hex: "#F59E0B", label: "Lamp" },
      { hex: "#FB7185", label: "Bougainvillea" },
    ],
    words: ["Street", "Roof", "Night", "Corner", "Week"],
    textures: ["grain", "wash", "mesh"],
    fonts: [
      { name: "Night Serif", role: "Place titles", sample: "Dizengoff 23", stack: "Georgia, \"Times New Roman\", serif" },
      { name: "Street Sans", role: "UI chips", sample: "Roof · Ride · Eat", stack: "system-ui, sans-serif" },
      { name: "Stamp Mono", role: "Meta", sample: "23:59 · NIGHT", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "model", label: "Bauhaus mass", note: "Building volume study", src: "projects/telaviv/grid/02-street.png" },
      { type: "image", label: "Palm & lamp", note: "Street prop stills", src: "projects/telaviv/grid/07-street-wide.jpg" },
      { type: "video", label: "Orbit walkthrough", note: "Scene motion study", src: "projects/telaviv/grid/08-walkthrough.mp4" },
    ],
    references: [
      { name: "Time Out TLV", note: "City culture listings", url: "https://www.timeout.com/israel" },
      { name: "Bauhaus Center", note: "White City architecture", url: "https://www.bauhaus-center.com/" },
      { name: "Dizengoff live", note: "Interactive reference", url: "https://is-studio-hub.github.io/TelAviv/" },
    ],
  },
  dooogs: {
    note: "Poodle host charm — shirt yellow, groom white, dachshund ink.",
    colors: [
      { hex: "#FBBF24", label: "Shirt" },
      { hex: "#E5E5E5", label: "Studio grey" },
      { hex: "#111111", label: "Mark" },
      { hex: "#FFFFFF", label: "Fur" },
      { hex: "#F97316", label: "Treat" },
    ],
    words: ["Chat", "Breed", "Ask", "Soft", "Guide"],
    textures: ["wash", "dots", "grain"],
    fonts: [
      { name: "Host Soft", role: "Chat UI", sample: "What about dogs?", stack: "system-ui, sans-serif" },
      { name: "Friendly Display", role: "Brand", sample: "Dooogs!", stack: "Georgia, serif" },
      { name: "Chip Mono", role: "Prompts", sample: "POODLES", stack: "ui-monospace, Menlo, monospace" },
    ],
    assets: [
      { type: "image", label: "Poodle host", note: "Character portrait", src: "projects/dooogs/card.png" },
      { type: "image", label: "Prompt field", note: "Ask fragment", src: "projects/dooogs/grid/03-chat.png" },
      { type: "image", label: "Starter chips", note: "Conversation starters", src: "projects/dooogs/grid/04-poodles.png" },
    ],
    references: [
      { name: "AKC", note: "Breed authority tone", url: "https://www.akc.org/" },
      { name: "Rover", note: "Pet-parent trust UX", url: "https://www.rover.com/" },
      { name: "Dooogs live", note: "Product reference", url: "https://is-studio-hub.github.io/dooogs/en" },
    ],
  },
};
