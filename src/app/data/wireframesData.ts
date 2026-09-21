export type WireframeLayout =
  | "portal"
  | "form"
  | "hub"
  | "chat"
  | "storefront"
  | "pdp"
  | "dashboard"
  | "mobile"
  | "map"
  | "marketing"
  | "feed"
  | "booking"
  | "studio"
  | "street";

export type WireframeFrame = {
  label: string;
  note: string;
  layout: WireframeLayout;
};

export type WireframesBoard = {
  note: string;
  frames: [WireframeFrame, WireframeFrame, WireframeFrame];
};

/** Minimal wireframe set per case study — three frames that mirror the final structure. */
export const wireframesData: Record<string, WireframesBoard> = {
  gom: {
    note: "Portal structure before polish — discovery, purchase and ops roles as bare bones.",
    frames: [
      { label: "Public portal", note: "Licence discovery", layout: "portal" },
      { label: "Checkout path", note: "Residency + pay", layout: "form" },
      { label: "Ops console", note: "Issuer / admin", layout: "dashboard" },
    ],
  },
  weebo: {
    note: "Capture → hub → ask — the knowledge loop as three skeleton screens.",
    frames: [
      { label: "Capture", note: "Intake surface", layout: "form" },
      { label: "Knowledge hub", note: "Project library", layout: "hub" },
      { label: "Ask", note: "Chat with project", layout: "chat" },
    ],
  },
  csc: {
    note: "Curated commerce bones — browse, product and room story without styling.",
    frames: [
      { label: "Catalog", note: "Product grid", layout: "storefront" },
      { label: "PDP", note: "Object detail", layout: "pdp" },
      { label: "Room story", note: "Editorial merch", layout: "marketing" },
    ],
  },
  slt: {
    note: "Culinary retail skeleton — shop, product and class journeys.",
    frames: [
      { label: "Shop home", note: "Cookware entry", layout: "storefront" },
      { label: "Product", note: "Material + buy", layout: "pdp" },
      { label: "Classes", note: "Booking strip", layout: "booking" },
    ],
  },
  zg: {
    note: "Statement retail wireframes — mood-first home, object, collect.",
    frames: [
      { label: "Mood home", note: "Hero + grid", layout: "marketing" },
      { label: "Object PDP", note: "Gallery focus", layout: "pdp" },
      { label: "Collections", note: "Browse lanes", layout: "storefront" },
    ],
  },
  gigz: {
    note: "Musician social bones — feed, share and peer feedback.",
    frames: [
      { label: "Feed", note: "Loop stream", layout: "feed" },
      { label: "Share take", note: "Upload flow", layout: "form" },
      { label: "Peer thread", note: "Feedback chat", layout: "chat" },
    ],
  },
  CHaPPie: {
    note: "Find → qualify → reach as three low-fi opportunity screens.",
    frames: [
      { label: "Search", note: "Local discovery", layout: "map" },
      { label: "Lead card", note: "Qualify panel", layout: "hub" },
      { label: "Outreach", note: "Message draft", layout: "form" },
    ],
  },
  ctc: {
    note: "Hardlines retail skeleton — home, aisle and project assist.",
    frames: [
      { label: "Home", note: "Seasonal entry", layout: "storefront" },
      { label: "Category", note: "Aisle browse", layout: "hub" },
      { label: "PDP", note: "Project buy", layout: "pdp" },
    ],
  },
  marks: {
    note: "Workwear commerce bones — home, kit and product detail.",
    frames: [
      { label: "Home", note: "Shift entry", layout: "storefront" },
      { label: "Category", note: "Utility grid", layout: "hub" },
      { label: "PDP", note: "Boot / gear", layout: "pdp" },
    ],
  },
  sportchek: {
    note: "Sport retail skeleton — train home, kit browse and PDP.",
    frames: [
      { label: "Home", note: "Season pulse", layout: "marketing" },
      { label: "Kit browse", note: "Sport grid", layout: "storefront" },
      { label: "PDP", note: "Gear detail", layout: "pdp" },
    ],
  },
  partycity: {
    note: "Occasion retail bones — theme entry, kits and product.",
    frames: [
      { label: "Occasions", note: "Theme entry", layout: "marketing" },
      { label: "Theme kit", note: "Party grid", layout: "storefront" },
      { label: "PDP", note: "Item detail", layout: "pdp" },
    ],
  },
  walmart: {
    note: "Try-on flow skeleton — PDP entry, model choose and result.",
    frames: [
      { label: "Fashion PDP", note: "Try-on entry", layout: "pdp" },
      { label: "Choose model", note: "Self / model", layout: "mobile" },
      { label: "Result", note: "Fit preview", layout: "mobile" },
    ],
  },
  anova: {
    note: "Guided cook bones — status, steps and plate.",
    frames: [
      { label: "Oven status", note: "Heat + timer", layout: "dashboard" },
      { label: "Guided steps", note: "Cook sequence", layout: "mobile" },
      { label: "Finish", note: "Plate / rest", layout: "marketing" },
    ],
  },
  ymca: {
    note: "Community fitness skeleton — belong, schedule and class.",
    frames: [
      { label: "Belong home", note: "Y entry", layout: "marketing" },
      { label: "Schedule", note: "Class list", layout: "hub" },
      { label: "Class detail", note: "Book slot", layout: "booking" },
    ],
  },
  ppjv: {
    note: "Banking ops bones — queue, detail and audit trail.",
    frames: [
      { label: "Ops queue", note: "Worklist", layout: "dashboard" },
      { label: "Txn detail", note: "Clear path", layout: "form" },
      { label: "Audit", note: "Ledger view", layout: "hub" },
    ],
  },
  "first-principles": {
    note: "Conversation skeleton — empty ask, reply and next.",
    frames: [
      { label: "Empty ask", note: "First message", layout: "chat" },
      { label: "Long reply", note: "Answer frame", layout: "hub" },
      { label: "Follow-ups", note: "Next prompts", layout: "mobile" },
    ],
  },
  westjet: {
    note: "Airline journey bones — search, results and trip.",
    frames: [
      { label: "Find flights", note: "Search form", layout: "booking" },
      { label: "Results", note: "Route list", layout: "hub" },
      { label: "Trip", note: "Guest calm", layout: "mobile" },
    ],
  },
  polard: {
    note: "Lottery play skeleton — home, pick and draw.",
    frames: [
      { label: "Play home", note: "Games entry", layout: "marketing" },
      { label: "Pick numbers", note: "Ticket form", layout: "form" },
      { label: "Draw night", note: "Results", layout: "mobile" },
    ],
  },
  ava: {
    note: "Generate studio bones — prompt, canvas and iterate.",
    frames: [
      { label: "Prompt", note: "Input dock", layout: "form" },
      { label: "Canvas", note: "Output frame", layout: "studio" },
      { label: "Iterate", note: "Variant grid", layout: "hub" },
    ],
  },
  "50nny": {
    note: "Memory platform skeleton — store, test and reuse.",
    frames: [
      { label: "Store", note: "Ingest API", layout: "dashboard" },
      { label: "Test", note: "Query console", layout: "form" },
      { label: "Reuse", note: "Context graph", layout: "hub" },
    ],
  },
  superlocal: {
    note: "Market site bones — produce entry, vendors and hours.",
    frames: [
      { label: "Market home", note: "Produce hero", layout: "marketing" },
      { label: "Vendors", note: "Stall grid", layout: "storefront" },
      { label: "Hours", note: "Visit info", layout: "mobile" },
    ],
  },
  blairandjack: {
    note: "Ritual skincare skeleton — brand, product and buy.",
    frames: [
      { label: "Ritual home", note: "Brand entry", layout: "marketing" },
      { label: "Product", note: "Bottle story", layout: "pdp" },
      { label: "Routine", note: "AM / PM", layout: "mobile" },
    ],
  },
  gatorade: {
    note: "Campaign site bones — hero, formula and proof.",
    frames: [
      { label: "Campaign hero", note: "Fuel entry", layout: "marketing" },
      { label: "Formula", note: "Science strip", layout: "hub" },
      { label: "Proof", note: "Athlete frame", layout: "studio" },
    ],
  },
  "magic-spoon": {
    note: "Cereal brand skeleton — pack, products and story.",
    frames: [
      { label: "Brand home", note: "Type entry", layout: "marketing" },
      { label: "Products", note: "Flavour grid", layout: "storefront" },
      { label: "PDP", note: "Nutrition buy", layout: "pdp" },
    ],
  },
  dahari: {
    note: "Corporate RE skeleton — entry, projects and blueprint.",
    frames: [
      { label: "Corporate home", note: "Hebrew entry", layout: "marketing" },
      { label: "Projects", note: "Portfolio grid", layout: "hub" },
      { label: "Project", note: "Status detail", layout: "pdp" },
    ],
  },
  isstudio: {
    note: "Studio site bones — house, work and talk.",
    frames: [
      { label: "House", note: "Presence entry", layout: "marketing" },
      { label: "Work", note: "Case strip", layout: "studio" },
      { label: "Talk", note: "Contact", layout: "form" },
    ],
  },
  telaviv: {
    note: "Night street skeleton — arrive, explore and place.",
    frames: [
      { label: "Arrive", note: "Street entry", layout: "street" },
      { label: "Explore", note: "Roof / ride", layout: "map" },
      { label: "Place", note: "Corner detail", layout: "mobile" },
    ],
  },
  dooogs: {
    note: "Dog guide bones — host, ask and breed tips.",
    frames: [
      { label: "Host home", note: "Poodle entry", layout: "marketing" },
      { label: "Ask", note: "Chat guide", layout: "chat" },
      { label: "Breed tips", note: "Answer cards", layout: "hub" },
    ],
  },
};
