import { assetPath } from "../lib/assetPath";

export type FigmaView = {
  /** Real Figma page the frame lives on. */
  page: string;
  /** Real frame, section or component set name. */
  frame: string;
  /** Optional short label for frames that share a name in Figma. */
  label?: string;
  /** Position in `pages`, only needed when two pages share a name. */
  pageIndex?: number;
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
const csc = (file: string) => assetPath(`/projects/csc/figma/${file}`);
const slt = (file: string) => assetPath(`/projects/slt/figma/${file}`);
const zg = (file: string) => assetPath(`/projects/zg/figma/${file}`);

export const figmaFilesData: Record<string, FigmaShowcase> = {
  gom: {
    note:
      "Three of the working files behind Manitoba eLicensing: the design library, the portal product file and a sprint handoff file. The page lists, sizes and frames below are exported directly from Figma. The files themselves are private to the client.",
    files: [
      {
        id: "library",
        name: "Government of Manitoba – Design Library",
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
        name: "Self-Service e-Licence Portal – Government of Manitoba",
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
  csc: {
    note:
      "The One Kings Lane ecommerce design system, straight from its Figma file: foundations, component pages, the step-by-step process behind a component, and the legacy system it grew out of. The file itself is private to the client.",
    files: [
      {
        id: "okl-design-system",
        name: "One King Lane Ecom Design System",
        kind: "Design system",
        cover: csc("okl-cover.jpg"),
        summary:
          "Six foundation pages and thirteen component pages covering everything from logo and colour to navigation, filters, product detail and order summary, plus a documented component process and the older Roots library for reference.",
        stats: [
          { value: "1,054", label: "Components" },
          { value: "19", label: "Library pages" },
          { value: "5", label: "Process steps" },
        ],
        pages: [
          "1.0  📂 Component Library",
          "       1.1  ↳  👁  Logo",
          "       1.2  ↳  🎨  Color",
          "       1.3  ↳   Aa  Typography",
          "       1.4  ↳   📐  Spacing",
          "       1.5  ↳   ☲  Grids",
          "       1.6  ↳   💎  Icons",
          "       1.7  ↳   ❎  Buttons",
          "       1.8 ↳  ❗️ Messages/ERR",
          "       1.9  ↳   🔘  Input",
          "       2.0 ↳  📢 NAVbar",
          "       2.1 ↳   🖖🏾 Secondary Header",
          "       2.2 ↳  ✋ Filter",
          "       2.3 ↳  ✌️ PDP",
          "       2.4 ↳   👉🏻  Pagination",
          "       2.5 ↳   👩‍💻 Order Summary",
          "       2.6 ↳  💌 Newsletter",
          "       2.7 ↳  ✌️ Footer",
          "       2.8 ↳   🧵 Bottom sheet & Pop ups",
          "       2.9 ↳    🪧 ADs",
          "----------------------------",
          "Component process",
          "PR",
          "[WIP] OKL PLP Components Match",
          "Old system (Roots)",
          "- More Component",
          "- OKL PDP UI",
          "- UI Exploration",
          "Discover",
          "Experience & Design",
          "Prototype",
          "VQA",
        ],
        views: [
          {
            page: "1.1 ↳ 👁 Logo",
            frame: "OKL",
            src: csc("okl-logo.png"),
            width: 1200,
            height: 1856,
            note:
              "The logo guide: six lockups from the primary logo to the favicon, each with a rule for where it can be used and which ones need design team approval.",
          },
          {
            page: "1.2 ↳ 🎨 Color",
            frame: "Color Palette",
            src: csc("okl-color.png"),
            width: 1254,
            height: 922,
            note:
              "Primary colours documented with their hex values, Sass token names and WCAG rating, so design and code refer to the same thing.",
          },
          {
            page: "1.2 ↳ 🎨 Color",
            frame: "Color Palette - Accessibility",
            src: csc("okl-color-a11y.png"),
            width: 1314,
            height: 1960,
            note:
              "A contrast matrix pairing every background with each typeface and size, marking which combinations pass AA or AAA and which ones not to use.",
          },
          {
            page: "1.3 ↳ Aa Typography",
            frame: "Typography System",
            src: csc("okl-typography.png"),
            width: 1332,
            height: 4962,
            note:
              "The full type scale from display headings to micro text, each style named by size, weight, line height and letter spacing. The same page holds the CSS variables and typography config developers built from.",
          },
          {
            page: "1.6 ↳ 💎 Icons",
            frame: "Icons",
            src: csc("okl-icons.png"),
            width: 1200,
            height: 1406,
            note:
              "Social, payment and interface icons with their sizes and states. The page holds 144 icon components.",
          },
          {
            page: "1.7 ↳ ❎ Buttons",
            frame: "Primary Button",
            src: csc("okl-buttons.png"),
            width: 1216,
            height: 2613,
            note:
              "The primary button built as one component with type, status, hover, focus and icon properties, and every state laid out: default, hover, focus, disabled and outline.",
          },
          {
            page: "1.9 ↳ 🔘 Input",
            frame: "Input Field v2.2",
            src: csc("okl-input.png"),
            width: 1275,
            height: 3007,
            note:
              "Revised credit card and dropdown fields as master components, with required, focus and open states. The input page holds 216 components.",
          },
          {
            page: "2.0 ↳ 📢 NAVbar",
            frame: "NavBar ",
            src: csc("okl-navbar.png"),
            width: 9153,
            height: 15348,
            note:
              "The navigation system at desktop, 1024, 768 and mobile, with every category's mega menu designed out.",
          },
          {
            page: "2.2 ↳ ✋ Filter",
            frame: "Filter",
            src: csc("okl-filter.png"),
            width: 13941,
            height: 9183,
            note:
              "The finished filter component at mobile, 1024, 768 and desktop, in every open category state. Its process is documented step by step on the Component process page. Zoom in to scroll along it.",
          },
          {
            page: "2.3 ↳ ✌️ PDP",
            frame: "PDP Details",
            src: csc("okl-pdp.png"),
            width: 8014,
            height: 8756,
            note:
              "Product detail modules (swatches, size, quantity, add to cart and the details accordion) in each open state at mobile, 1024, 768 and desktop.",
          },
          {
            page: "2.5 ↳ 👩‍💻 Order Summary",
            frame: "Order Summary",
            src: csc("okl-order-summary.png"),
            width: 1779,
            height: 8273,
            note:
              "The order summary shared by cart, checkout and confirmation at four breakpoints, with promo code, returns and error states.",
          },
          {
            page: "Component process",
            frame: "Search Bar",
            label: "0.1 Research & Data",
            src: csc("okl-process-1.png"),
            width: 1200,
            height: 1422,
            note:
              "Step one of my component process, written up in the file: auditing how competitors handle filters before designing the One Kings Lane filter.",
          },
          {
            page: "Component process",
            frame: "Search Bar",
            label: "Creating & Collecting",
            src: csc("okl-process-2.png"),
            width: 1200,
            height: 968,
            note:
              "Step two: collecting and creating the building blocks the filter needs, from search and sort to swatches and apply controls.",
          },
          {
            page: "Component process",
            frame: "Search Bar",
            label: "Creating The Categories",
            src: csc("okl-process-3.png"),
            width: 1200,
            height: 1350,
            note:
              "Step three: assembling the filter's categories, including sort, subcategory, pricing, colour and artist.",
          },
          {
            page: "Component process",
            frame: "Search Bar",
            label: "Responsive",
            src: csc("okl-process-4.png"),
            width: 1200,
            height: 1350,
            note:
              "Step four: taking the component from one screen to every width between 375 and 1920px, on the system's shared grid.",
          },
          {
            page: "Component process",
            frame: "Search Bar",
            label: "The Result",
            src: csc("okl-process-5.png"),
            width: 1200,
            height: 1350,
            note:
              "The result: the finished filter living in the library on its own page, 2.2 Filter.",
          },
          {
            page: "Old system (Roots)",
            frame: "Single Product",
            src: csc("okl-roots-single-product.png"),
            width: 1200,
            height: 4398,
            note:
              "A checkout product component from the older Roots system, kept in the file for reference. The page holds 246 legacy components.",
          },
        ],
      },
    ],
  },
  slt: {
    note:
      "The Sur La Table design system, straight from its Figma file: foundations, 25 component pages from buttons to a full checkout, and rules pages that spec every state for developers. The file itself is private to the client.",
    files: [
      {
        id: "slt-design-system",
        name: "SLT Design system",
        kind: "Design system",
        cover: slt("slt-cover.jpg"),
        summary:
          "Foundations for colour, type, spacing and grids, 25 component pages covering everything from inputs and alerts to drawers, gift options and a multi-step checkout, and two rules pages that turn button and input states into build specs.",
        stats: [
          { value: "847", label: "Components" },
          { value: "32", label: "Pages" },
          { value: "180", label: "Icons" },
        ],
        pages: [
          "Logo",
          "Color",
          "Typography",
          "Spacing",
          "Grids/Breakpoints",
          "Buttons",
          "Checkout",
          "Toggle",
          "Radio Buttons",
          "Icons (in process)",
          "Input",
          "Badges",
          "Tooltip",
          "Alerts & Feedback",
          "Steps",
          "Progressbar",
          "Accordion",
          "Order Summary",
          "Modal",
          "Drawer",
          "Card",
          "Regular Tabs",
          "Pagination",
          "Gift Options",
          "NavBar",
          "Footer",
          "Containers",
          "Checkout",
          "Payment method",
          "review",
          "Rules",
          "Rules 1",
        ],
        views: [
          {
            page: "Logo",
            frame: "Logo",
            src: slt("slt-logo.png"),
            width: 1326,
            height: 1153,
            note:
              "Logo variations with usage notes: the primary wordmark, the favicon for small screens, and the tagline lockup.",
          },
          {
            page: "Color",
            frame: "Color",
            src: slt("slt-color.png"),
            width: 3803,
            height: 1708,
            note:
              "The full palette: primary and secondary colours, each with a 50 to 900 scale, token names, hex values and WCAG rating. Zoom in to read the tokens.",
          },
          {
            page: "Typography",
            frame: "Typography",
            src: slt("slt-typography.png"),
            width: 2637,
            height: 5076,
            note:
              "Brandon Grotesque and Georgia styles written as specs developers can copy: weight, size in rem and px, line height and letter spacing for every heading, body, link and caps style.",
          },
          {
            page: "Spacing",
            frame: "Spacing",
            src: slt("slt-spacing.png"),
            width: 969,
            height: 2163,
            note:
              "Padding and margin on an 8px grid in rem and px, from 4px to 160px, built as components so designers place real spacers rather than eyeballing gaps.",
          },
          {
            page: "Grids/Breakpoints",
            frame: "Grid System",
            src: slt("slt-grid.png"),
            width: 9094,
            height: 1931,
            note:
              "Breakpoints and grid sizes for mobile (320 to 414px), tablet (768 to 1024px) and desktop (1280 to 1920px). Zoom in to scroll along it.",
          },
          {
            page: "Buttons",
            frame: "buttons",
            src: slt("slt-buttons.png"),
            width: 4740,
            height: 1865,
            note:
              "Primary, secondary and tertiary buttons with icon, loading and payment variants (Apple Pay, PayPal), each in default, hover, focus and disabled states. The page holds 133 components.",
          },
          {
            page: "Icons (in process)",
            frame: "Icons",
            src: slt("slt-icons.png"),
            width: 2956,
            height: 5457,
            note:
              "Control, visual helper and payment icons, each with a note on what it's for, from cooking class and gift registry to save payment.",
          },
          {
            page: "Input",
            frame: "Text Input field",
            src: slt("slt-input.png"),
            width: 2917,
            height: 3302,
            note:
              "Text, password, new password and card number fields in every state, with the behaviour written beside each: show/hide, live password rules and card number grouping.",
          },
          {
            page: "Alerts & Feedback",
            frame: "Alerts",
            src: slt("slt-alerts.png"),
            width: 7025,
            height: 1637,
            note:
              "Alert and feedback patterns: inline errors, security and privacy banners, call-outs and remaining-payment states. Gift card numbers in the example are masked here.",
          },
          {
            page: "Drawer",
            frame: "Drawer",
            src: slt("slt-drawer.jpg"),
            width: 17335,
            height: 13964,
            note: "Side drawers at every breakpoint, with and without imagery and action buttons. The page holds 59 components.",
          },
          {
            page: "Gift Options",
            frame: "Gift options",
            src: slt("slt-gift.png"),
            width: 4262,
            height: 1862,
            note: "The gift options checkout step, from off to message and packaging added, at mobile and desktop.",
          },
          {
            page: "Checkout",
            pageIndex: 27,
            frame: "Your Delivery Options",
            src: slt("slt-delivery.jpg"),
            width: 9651,
            height: 5724,
            note:
              "Delivery options as one component set covering standard, express and overnight shipping, split shipments and items shipped from vendors, at every breakpoint.",
          },
          {
            page: "Payment method",
            frame: "Payment method",
            src: slt("slt-payment.png"),
            width: 7032,
            height: 6237,
            note:
              "The payment step for saved cards, billing address, PayPal, Apple Pay and Afterpay, with each option's flow designed at every breakpoint.",
          },
          {
            page: "Rules",
            frame: "Rules",
            label: "Whole page",
            src: slt("slt-rules.png"),
            width: 9643,
            height: 7431,
            note:
              "Button rules written for developers: when to use each state, size and group, and the exact styling of every variant (height, radius, padding, font, weight, colours). Zoom in to read the specs.",
          },
          {
            page: "Rules 1",
            frame: "Rules 1",
            label: "Whole page",
            src: slt("slt-rules-inputs.png"),
            width: 7604,
            height: 3636,
            note:
              "Input rules: standard, optional, link and icon fields with their use cases, sizing rules and linked prototypes of each interaction.",
          },
        ],
      },
    ],
  },
  zg: {
    note:
      "The Z Gallerie design system, straight from its Figma file: foundations mapped to code, redlined handoff boards, a documented spacing decision and the checkout work it supported. The file itself is private to the client.",
    files: [
      {
        id: "zg-design-system",
        name: "ZG Design system",
        kind: "Design system",
        cover: zg("zg-cover.jpg"),
        summary:
          "Colour, type and spacing foundations tied to Tailwind utility classes and real CSS selectors, redlined checkout screens for developers, a spacing exercise that set the rules for form fields, and navigation, footer and payment components.",
        stats: [
          { value: "277", label: "Components" },
          { value: "14", label: "Pages" },
          { value: "149", label: "Icons" },
        ],
        pages: [
          "Logo",
          "Color",
          "Typography",
          "Spacing",
          "Icons",
          "Buttons",
          "Page 5",
          "Size swatches",
          "PDP component",
          "PLP",
          "Footer",
          "Top Nav bar",
          "Spacing",
          "Payment",
        ],
        views: [
          {
            page: "Color",
            frame: "Color Palette",
            src: zg("zg-color.png"),
            width: 1200,
            height: 4023,
            note:
              "The palette with an accessibility matrix showing which text and background pairs pass AA or AAA, and a utility-class palette mapped to Tailwind so developers use class names instead of hex values.",
          },
          {
            page: "Typography",
            frame: "Typography",
            src: zg("zg-typography.png"),
            width: 1200,
            height: 3130,
            note:
              "Every text style written as usage plus CSS: font, weight, line height, letter spacing and the actual site selectors it applies to. The page was still marked as a work in progress in the file.",
          },
          {
            page: "Spacing",
            frame: "Space",
            src: zg("zg-spacing.png"),
            width: 1200,
            height: 2041,
            note: "One spacing scale from 4 to 160px, split into padding, margin and markup spacing, built as components.",
          },
          {
            page: "Icons",
            frame: "Icons",
            label: "Whole page",
            src: zg("zg-icons.png"),
            width: 2981,
            height: 3610,
            note:
              "Control, visual helper and payment icons, each paired with a note on what it helps the shopper do. The page holds 149 icon components.",
          },
          {
            page: "Page 5",
            frame: "Page 5",
            label: "Whole page",
            src: zg("zg-redlines.jpg"),
            width: 10876,
            height: 3415,
            note:
              "The developer handoff board: checkout screens and components with visible and hidden redlines for typography, spacing and every component, plus the mobile modals. Zoom in to scroll along it.",
          },
          {
            page: "Spacing",
            pageIndex: 12,
            frame: "Spacing",
            label: "Whole page",
            src: zg("zg-spacing-exercise.png"),
            width: 5994,
            height: 4728,
            note:
              "A spacing exercise for the UX/UI team: guest checkout forms compared side by side to decide the spacing between form fields, with the agreed rules written beside them and the master components they fed. Sample names and a gift card number are masked here.",
          },
          {
            page: "Top Nav bar",
            frame: "Top Nav bar",
            label: "Whole page",
            src: zg("zg-nav.png"),
            width: 4053,
            height: 235,
            note: "The top navigation at 1440, 1024, 768 and 375px, from promo bar and utility links down to search and breadcrumbs.",
          },
          {
            page: "Footer",
            frame: "Footer",
            label: "Whole page",
            src: zg("zg-footer.png"),
            width: 1268,
            height: 578,
            note: "The footer at mobile and tablet: email sign-up, accordion link groups and legal links.",
          },
          {
            page: "Payment",
            frame: "Payment",
            label: "Whole page",
            src: zg("zg-payment.jpg"),
            width: 16128,
            height: 3081,
            note:
              "Checkout payment work with the reasoning on the canvas: order details that expand with edit-cart built in, edit product removed so the cart scans faster, alternative payment methods and the order summary modal. Zoom in to scroll along it.",
          },
        ],
      },
    ],
  },
};
