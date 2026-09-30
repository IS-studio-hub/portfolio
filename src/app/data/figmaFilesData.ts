import { assetPath } from "../lib/assetPath";

export type FigmaView = {
  /** Real Figma page the frame lives on. */
  page: string;
  /** Real frame, section or component set name. */
  frame: string;
  src: string;
  /** Size of the frame on the Figma canvas. */
  width: number;
  height: number;
  note: string;
};

export type FigmaFile = {
  id: string;
  name: string;
  kind: string;
  cover: string;
  summary: string;
  stats: { value: string; label: string }[];
  /** Full page list in file order. Divider pages (dashes only) render as separators. */
  pages: string[];
  views: FigmaView[];
};

export type FigmaShowcase = {
  note: string;
  files: FigmaFile[];
};

const gom = (file: string) => assetPath(`/projects/gom/figma/${file}`);

export const figmaFilesData: Record<string, FigmaShowcase> = {
  gom: {
    note:
      "Three of the working files behind Manitoba eLicensing: the design library, the portal product file and a sprint handoff file. The page lists, sizes and frames below are exported directly from Figma. The files themselves are private to the client.",
    files: [
      {
        id: "library",
        name: "GOM – Design Library",
        kind: "Design library",
        cover: gom("lib-cover.png"),
        summary:
          "The source of truth for the eLicensing UI: primitive and semantic tokens, a responsive type system, icons, components and page templates.",
        stats: [
          { value: "168", label: "Variables" },
          { value: "30", label: "Text styles" },
          { value: "230", label: "Icon components" },
        ],
        pages: [
          "✅ Cover / Overview",
          "Table of contents",
          "-----------------",
          "CORE",
          "🦬 Logo",
          "🎨 Colors",
          "🇦 Typography",
          "🔲 Grid, size and spacing",
          "😊 Icons",
          "FA icons - FIlled",
          "Elements (WIP)",
          "---------------",
          "COMPONENTS (WIP)",
          "- Hero Component",
          "- Top Bar",
          "- Media Gallery",
          "- Account Details (WIP)",
          "- Radio Button Styles (WIP)",
          "- Form",
          "- Feedback",
          "- Product Cards (WIP)",
          "- Article",
          "- Accordion",
          "- Footer (WIP)",
          "------------------------------------------------------",
          "TEMPLATES",
          "Cart / Checkout",
          "- Temporary Printed Permit",
          "- Vendor Form",
          "- Current Mockups",
          "- In-Progress Mockups (WIP)",
          "-----------",
          "Archive",
        ],
        views: [
          {
            page: "✅ Cover / Overview",
            frame: "Project thumbnail",
            src: gom("lib-cover.png"),
            width: 1240,
            height: 640,
            note:
              "Every file opens on a status cover, so anyone who lands in it knows what it is, who owns it and whether it is still in progress.",
          },
          {
            page: "🎨 Colors",
            frame: "Colours",
            src: gom("lib-colours.png"),
            width: 1522,
            height: 1798,
            note:
              "Primitive colours grouped by how much of the UI they should cover (60 / 30 / 3), then mapped to semantic text tokens. 85 primitive variables feed 83 semantic ones.",
          },
          {
            page: "🇦 Typography",
            frame: "Typography Styles",
            src: gom("lib-typography.png"),
            width: 2734,
            height: 3012,
            note:
              "A rem-based type system with separate mobile and desktop steps for headings, buttons, paragraphs and labels, documented so developers could match it in CSS.",
          },
          {
            page: "🔲 Grid, size and spacing",
            frame: "Number Tokens",
            src: gom("lib-number-tokens.png"),
            width: 1722,
            height: 1968,
            note:
              "Spacing, padding and corner radius on one shared size scale, stored as number variables instead of hard-coded values.",
          },
          {
            page: "😊 Icons",
            frame: "Icons",
            src: gom("lib-icons.png"),
            width: 3050,
            height: 3642,
            note:
              "230 icon components, each drawn at five sizes, alongside the Manitoba bison mark.",
          },
          {
            page: "- Hero Component",
            frame: "1440/Static-hero-component",
            src: gom("lib-hero.png"),
            width: 1472,
            height: 4684,
            note:
              "Hero component set for content, landing and homepage headers, with a matching 320px mobile set. The page holds 35 components and variants.",
          },
          {
            page: "Cart / Checkout",
            frame: "Shopping Cart - Annual PVP - Width: 1440",
            src: gom("lib-cart.png"),
            width: 1440,
            height: 2566,
            note:
              "Page templates built from the library, like this Park Vehicle Permit cart with its donation module and order summary, designed at 390px and 1440px.",
          },
        ],
      },
      {
        id: "portal",
        name: "Self-Service e-Licence Portal – GoM",
        kind: "Product file",
        cover: gom("portal-cover.png"),
        summary:
          "Where the customer portal was worked out end to end: sitemap, research, user flows, wireframes, prototypes and a dev handoff page for each licence type.",
        stats: [
          { value: "24", label: "Pages" },
          { value: "4", label: "Licence flows" },
          { value: "13", label: "Handoff pages" },
        ],
        pages: [
          "✅ Cover / Overview",
          "📐 Current Sitemap",
          "🔍 Research & Insights",
          "🧭 User Flows",
          "🧪 Wireframes / UX Concepts",
          "🧭  Prototypes (WIP)",
          "Presentation",
          "Imagery",
          "-----",
          "📋 Dev Handoff",
          "--Homepage",
          "--PVP",
          "--Angling May",
          "--Hunting August-September-December",
          "--Forestry (WIP)",
          "--Multilevel Draws (WIP)",
          "--Account (WIP)",
          "--Trapping (WIP)",
          "--Menu (WIP)",
          "--Notifications (WIP)",
          "--Error full page (WIP)",
          "--Shopping Cart (WIP)",
          "--Checkout (WIP)",
          "----",
          "Testings",
          "📁 Archive / Old Versions",
        ],
        views: [
          {
            page: "✅ Cover / Overview",
            frame: "Project thumbnail",
            src: gom("portal-cover.png"),
            width: 1240,
            height: 640,
            note:
              "The file cover: started in April 2025 by the Online Digital Studio UX team, with its status up front.",
          },
          {
            page: "✅ Cover / Overview",
            frame: "Overview",
            src: gom("portal-overview.png"),
            width: 1440,
            height: 2001,
            note:
              "The initiative statement that opens the file, linked to the Miro boards, Jira and Confluence the program ran on. The team roster below it is left out here.",
          },
          {
            page: "🔍 Research & Insights",
            frame: "Market Research",
            src: gom("portal-research.jpg"),
            width: 21425,
            height: 15760,
            note:
              "A research wall comparing how other provinces and permit services handle licensing, sign-up and park permits, with notes pulled into insights.",
          },
          {
            page: "🧭 User Flows",
            frame: "New PVP Flow",
            src: gom("portal-flow-pvp.png"),
            width: 24274,
            height: 6823,
            note:
              "The end-to-end Park Vehicle Permit flow, one of four licence flows (PVP, angling, hunting and forestry) mapped before any screen was designed. Zoom in to scroll along it.",
          },
          {
            page: "🧪 Wireframes / UX Concepts",
            frame: "Itamar",
            src: gom("portal-wireframes.png"),
            width: 15879,
            height: 15439,
            note:
              "My own section of the shared wireframes page, where UX concepts were explored side by side with the rest of the design team.",
          },
          {
            page: "--Homepage",
            frame: "Home",
            src: gom("portal-home.jpg"),
            width: 9032,
            height: 5231,
            note:
              "The homepage handoff section, with desktop, tablet and mobile layouts laid out together for development.",
          },
          {
            page: "--PVP",
            frame: "Vehicle Permit",
            src: gom("portal-pvp.png"),
            width: 6548,
            height: 3071,
            note:
              "Park Vehicle Permit screens ready for handoff. The same page holds bus permits, confirmation, receipt, email and printed card sections.",
          },
          {
            page: "--PVP",
            frame: "Printed Vehicle Card",
            src: gom("portal-card.png"),
            width: 3373,
            height: 1654,
            note:
              "Design went past the screen: the printed permit card a customer displays in their vehicle.",
          },
        ],
      },
      {
        id: "sprint",
        name: "Sprint P2B · Apr 20 – May 15",
        kind: "Sprint file",
        cover: gom("sprint-cover.jpg"),
        summary:
          "A sprint copy of the portal file, organised into three dev handoff phases with a page for every feature going to development.",
        stats: [
          { value: "41", label: "Pages" },
          { value: "3", label: "Handoff phases" },
          { value: "30", label: "Feature pages" },
        ],
        pages: [
          "✅ Cover / Overview",
          "📐 Current Sitemap",
          "🔍 Research & Insights",
          "🧭 User Flows",
          "🧪 Wireframes / UX Concepts",
          "🧭  Prototypes (WIP)",
          "Presentation",
          "Errors/alerts Messages",
          "-----",
          "📋 Dev Handoff",
          "--Homepage",
          "--PVP",
          "--Angling May",
          "--Hunting August-September-December",
          "--Forestry",
          "--Multilevel Draws (WIP)",
          "--Outffiter PDF",
          "--5 Tags Pack",
          "--MVP - Issuers",
          "--FAQs",
          "--Publications",
          "--Account (WIP)",
          "--Shopping Cart (WIP)",
          "--Checkout (WIP)",
          "--Error full page",
          "--Refunded Receipt",
          "--Menu",
          "--Select Residency",
          "--Signed out messege",
          "--Breadcrumbs",
          "--Footer",
          "-----------",
          "📋 Dev Handoff - P2",
          "--Special Licences ",
          "--Caribou",
          "--Trapping",
          "--Moose licence",
          "--Snopass (WIP)",
          "--Sitemap page (WIP)",
          "-----",
          "📋 Dev Handoff - P3",
          "--Gifts",
          "--Customer Onboarding (WIP)",
          "--Notifications (WIP) - P2",
        ],
        views: [
          {
            page: "Errors/alerts Messages",
            frame: "Hunting ERRs",
            src: gom("sprint-errors.png"),
            width: 2346,
            height: 2064,
            note:
              "Every validation state for a hunting licence purchase, written and designed field by field: missing hunter education numbers, invalid game tags and tags already in the cart.",
          },
          {
            page: "--MVP - Issuers",
            frame: "MANITOBA RESIDENT",
            src: gom("sprint-issuers.png"),
            width: 8816,
            height: 2139,
            note:
              "Issuer location search at four breakpoints, collapsed and expanded, so residents can find a place to buy a licence in person. Zoom in to scroll along it.",
          },
          {
            page: "--Caribou",
            frame: "Big Game",
            src: gom("sprint-big-game.jpg"),
            width: 5265,
            height: 4449,
            note:
              "The Big Game catalogue, showing draw quotas, remaining quantities and licence rules on every card, from mobile to desktop.",
          },
          {
            page: "--Moose licence",
            frame: "Moose licence Form - partner 2",
            src: gom("sprint-moose.png"),
            width: 9186,
            height: 11208,
            note:
              "A partner moose licence form that adds group members to one purchase, designed at four breakpoints including the add-member modal.",
          },
          {
            page: "--Snopass (WIP)",
            frame: "Snopass",
            src: gom("sprint-snopass.png"),
            width: 6548,
            height: 3965,
            note:
              "Snowmobile trail permits at 375, 768, 1020 and 1440, with eligibility and insurance rules written into each option.",
          },
          {
            page: "--Gifts",
            frame: "Gifts catalog",
            src: gom("sprint-gifts.png"),
            width: 6548,
            height: 3071,
            note:
              "A Phase 3 feature: gifts to the Fish and Wildlife Enhancement Fund and Provincial Parks Endowment, handed off at four breakpoints.",
          },
        ],
      },
    ],
  },
};
