export type DesignSystemPhase = {
  id: string; // create | maintain | manage | implement
  title: string;
  summary: string;
  points: string[]; // 2-3 bullets
};

export type DesignSystemBoard = {
  note: string; // short intro for this project
  systemName: string; // e.g. "OKL System", "Aurora", "Manitoba Portal DS"
  foundations: string[]; // 4-6 tokens/areas: colour, type, spacing, etc. tailored
  components: string[]; // 5-8 key components tailored to the product
  phases: DesignSystemPhase[]; // exactly 4: Create, Maintain, Manage, Implement with engineering
};

export const designSystemData: Record<string, DesignSystemBoard> = {
  gom: {
    note:
      "On Manitoba eLicensing I established the Manitoba Portal DS so park Snopass flows, angling draws and vendor transactions read as one government product—not four unrelated sites.",
    systemName: "Manitoba Portal DS",
    foundations: [
      "WCAG-aligned colour for public forms and Admin table density",
      "Typography scale for licence names, regulatory helper text and cart line items",
      "Spacing and grid for multilevel-draw wizards vs Issuer lookup screens",
      "Validation semantics for residency, eligibility and Snopass empty states",
      "Content tone tokens for hunting, forestry, trapping and permit instructions",
      "Focus and keyboard states shared across Customer checkout and Vendor speed workflows",
    ],
    components: [
      "Licence category cards (Park Vehicle Permit, angling, outdoor services)",
      "Multistep permit forms with progressive disclosure and BA-driven edge cases",
      "Shopping cart and checkout with contribution and order review modules",
      "Global navigation across licence types, special permits and Issuers search",
      "Vendor customer lookup, transaction and repeatable operational tables",
      "Issuer flows for purchasing on behalf of another person with ID states",
      "Admin product, rules and user management with information-dense feedback",
      "Alerts, modals and empty states including Snopass residency messaging",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Leading a two-person UX and content team inside a 65-person program, I audited Customer, Vendor, Issuer and Admin screens on manitobaelicensing.ca—then codified Manitoba Portal DS foundations before new fishing, hunting or cart features invented a fifth button style.",
        points: [
          "Mapped complete tasks from licence discovery through checkout, separating role-specific density from shared typography, forms and validation.",
          "Named tokens and components in FigJam and Figma so BAs, QA and developers could reference the same patterns for park permits and Admin tables.",
          "Shipped first-wave buttons, alerts, navigation and table primitives aligned with content strategy for instructions and transactional messaging.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "As the ecosystem grew from Customer Portal to Vendor, Issuer and Admin, I maintained the library by versioning components when residency rules, draw logic or Snopass states changed—and kept design QA tied to what production actually shipped.",
        points: [
          "Reviewed new portal features for reuse before they became one-off Issuer or Vendor patterns outside the shared vocabulary.",
          "Updated validation and helper-text variants when business rules changed eligibility messaging without rewriting entire flows.",
          "Ran design QA against developed screens so cart, checkout and Admin feedback stayed visually and verbally aligned.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "Governance on a 65-person delivery meant deciding what belonged in Manitoba Portal DS versus a portal exception—Customer simplicity and Admin density had to coexist under one intake process I facilitated with the client.",
        points: [
          "Prioritized system backlog when similar actions drifted across Customer purchase paths and Issuer-on-behalf transactions.",
          "Set contribution rules with UX, content and development so ecosystem consistency stayed a default, not a late cleanup phase.",
          "Tracked missing states—partial eligibility, payment failures, residency blockers—as system issues affecting multiple portals.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "I stayed through implementation on Manitoba eLicensing—translating Figma into specs for responsive forms, table behaviour and checkout order with developers and QA when unexpected states appeared in live licensing flows.",
        points: [
          "Partnered on handoff for Snopass empty states, multilevel-draw steps and secure citizen sign-in before transactional flows.",
          "Joined reviews for Vendor speed workflows and Admin operational screens, not only Customer happy paths.",
          "Worked with QA to classify UX defects as Manitoba Portal DS gaps when root cause was a missing or misapplied shared pattern.",
        ],
      },
    ],
  },
  csc: {
    note:
      "On a 10-person team supporting three retail brands, I evolved the OKL System so designer furniture, vintage finds and interior-design services could scale on onekingslane.com without reading like a generic template.",
    systemName: "OKL System",
    foundations: [
      "Editorial type pairing for luxury home storytelling and catalog scannability",
      "Warm neutral palette with restrained accent use on sale and clearance states",
      "12-column grid balancing room-story modules and dense PLP grids",
      "Image aspect and elevation tokens for designer, vintage and exclusive merchandise",
      "Motion and hover tuned for merchandising carousels, not decorative distraction",
      "Promotional semantics for best sellers, ready-to-ship and clearance ribbons",
    ],
    components: [
      "Product cards carrying imagery, pricing, promotions and availability in tight space",
      "PDP stacks joining large gallery, specs, shipping and premium purchase actions",
      "Discovery modules—navigation, filters, sort and pagination for inspiration-led browsing",
      "Editorial hero and room-story blocks for catalog & product cards journeys",
      "Services beyond the catalog—interior design and professional designer program entry",
      "Responsive rules embedded in cards and PDP, not bolt-on mobile frames",
      "Footer, newsletter and trust modules with brand expression at scale",
      "Form fields for checkout and registry with predictable modal behaviour",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "I audited live One Kings Lane across breakpoints—from screens to systems—inventorying Catalog & product cards, Product detail experiences and Services beyond the catalog before naming OKL tokens designers could apply without re-measuring every sale state.",
        points: [
          "Compared navigation, filters and PDP modules to separate intentional One Kings Lane character from accidental drift across hundreds of screens.",
          "Established shared visual foundations while keeping functional consistency separate from brand expression across sister brands.",
          "Released first-wave tiles, promos and headers with documented variants for long titles, missing content and narrow layouts.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Campaign seasons and new collection modules kept pressure on OKL. I maintained the library by folding repeatable merchandising layouts into components and syncing Figma variants with frontend props after production diverged.",
        points: [
          "Updated Responsive ecommerce rules when sticky purchase modules or filter drawers changed behaviour on live onekingslane.com.",
          "Retired duplicate frames that cloned supported components and confused newer designers on the 10-person team.",
          "Refreshed pattern documentation when sale pricing, best-seller badges or ready-to-ship messaging needed clearer hierarchy.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "Supporting One Kings Lane alongside Sur La Table and Z Gallerie meant governing what stayed OKL-specific versus shared engineering—prioritizing component work by checkout friction and broken responsive behaviour on luxury PDPs.",
        points: [
          "Set contribution rules: propose a pattern twice across brands before it earned an OKL library slot or influenced sister systems.",
          "Stack-ranked system fixes where customers lost discovery clarity between editorial heroes and PLP filters.",
          "Ran office hours with UX and dev leads when Brand expression at scale conflicted with reuse across the three-brand program.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Figma consistency is not enough if onekingslane.com behaves differently. I paired with frontend on image ratios, filter behaviour and loading skeletons—design QA on promotional overlays and accessibility on sale badges.",
        points: [
          "Specified breakpoints and truncation so designer product titles did not break grid rhythm on clearance browsing.",
          "Reviewed built pages against OKL specs, especially quick-view and sticky add-to-cart on premium PDPs.",
          "Partnered on keyboard focus, contrast on promotional ribbons and screen-reader labels on product tiles.",
        ],
      },
    ],
  },
  slt: {
    note:
      "For Sur La Table on the same 10-person three-brand team, I built the SLT Commerce System so cookware PDPs, cooking-class enrollment and store pickup shared one culinary language on surlatable.com.",
    systemName: "SLT Commerce System",
    foundations: [
      "Culinary-forward typography for product specs and class schedule readability",
      "Heat-inspired accents on a neutral commerce base for sale and registry states",
      "Spacing scale for dense PDP materials/care blocks and airy editorial recipe moments",
      "Iconography for kitchen tools, store locator and class capacity cues",
      "Pricing and promo semantics including same-day delivery and pickup badges",
      "Touch targets sized for mobile recipe browsing and in-aisle store checks",
    ],
    components: [
      "Product discovery cards with ratings, pickup and same-day delivery states",
      "PDP modules for materials, care, compatibility and sticky add-to-cart",
      "Shop vs experience layouts—hardgoods quantity vs class date, time and location",
      "Cooking classes at scale cards for date night, baking, corporate and online enrollment",
      "Store locator rows connecting One customer ecosystem pickup and local events",
      "Filter drawers and sort controls for cookware grids and class listings",
      "Cart line items with gifting and registry states",
      "Modal patterns for quick shop and class detail without forking brand chrome",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "I audited surlatable.com from pages to patterns—Product discovery & cards, Shop vs experience and Cooking classes at scale—then tokenized type and spacing that worked on utensil grids and class schedules alike.",
        points: [
          "Separated shared ecommerce behaviour from intentional culinary editorial layouts before naming SLT components.",
          "Built foundations that survived imperfect content: long titles, missing images and promo pricing on premium cookware sets.",
          "Delivered first components for navigation, filters and PDP blocks with empty, loading and inventory-driven states documented.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Class seasons and pickup rule changes introduced new modules weekly. I maintained SLT by versioning class enrollment variants and reconciling Figma with shipped CSS when registry or rewards surfaces updated.",
        points: [
          "Added variants when recurring campaigns needed the same structure with different content density on shop headers.",
          "Pruned one-off frames duplicating supported cards after holiday and sale peaks on the live product.",
          "Maintained a changelog so UX and engineering knew which library version a feature targeted across three retail brands.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I managed SLT intake across shop, content and store teams—deciding when a class-specific UI deserved a new pattern versus extending an existing commerce component from OKL or ZG shared engineering.",
        points: [
          "Prioritized fixes where customers confused class enrollment with standard add-to-cart on Sur La Table journeys.",
          "Coordinated with sister-brand systems so shared frontend did not force Sur La Table to feel like generic enterprise retail.",
          "Documented decision logs for registry and pickup exceptions so they did not silently become new defaults.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Culinary shoppers notice when class dates or store hours render inconsistently. I paired on responsive PDP stacks, class booking handoffs and design QA when defects traced to unspecified component states.",
        points: [
          "Provided behaviour notes for filters, modals and sticky purchase modules on small screens during store-pickup flows.",
          "Reviewed implementations for promo combinations, missing images and long spec lists on bakeware PDPs.",
          "Closed the loop with QA when pickup messaging diverged between product cards and cart summaries.",
        ],
      },
    ],
  },
  zg: {
    note:
      "For Z Gallerie I created the ZG Retail System on that same 10-person team—standardizing functional layers so statement furniture, mirrors and room inspiration on zgallerie.com could stay dramatically expressive.",
    systemName: "ZG Retail System",
    foundations: [
      "High-contrast display type with refined body scale for decor and lighting specs",
      "Gallery black, warm white and metallic accent tokens for glamour merchandising",
      "Asymmetric grid rules for lifestyle full-bleed and inset photography",
      "Spacing rhythm supporting oversized heroes without breaking PLP scannability",
      "Image treatment tokens—carousel, zoom and dimension callouts on sculptural PDPs",
      "Subtle motion for reveal and hover on hero objects, not catalog noise",
    ],
    components: [
      "Product cards & listing structure across furniture, rugs, art and textiles",
      "PDP galleries keeping photography dominant while surfacing size and delivery",
      "Commerce meets editorial modules linking campaign freedom to functional PLP grids",
      "Inspiration → discovery → product rails for room-based browsing",
      "Collection carousels and lookbook stacks with minimal chrome on cards",
      "Navigation with editorial category storytelling",
      "Promotions, decor & services bands including clearance and design services entry",
      "Checkout inputs styled for premium simplicity without flattening mood-first heroes",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Z Gallerie could not afford a system that flattened personality. I audited mature zgallerie.com pages—Product cards & listing structure, Commerce meets editorial—and tokenized grid and type so designers could compose boldly within guardrails.",
        points: [
          "Distinguished brand equity drama from inconsistent button and modal implementation across promotions and PDPs.",
          "Published core carousels, cards and navigation with variants for campaign, clearance and missing lifestyle photography.",
          "Embedded Responsive commerce transformation rules inside components rather than shrinking desktop layouts later.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "New collection templates and clearance cycles kept arriving. I evolved ZG by merging successful one-offs into supported patterns and retiring layouts that fought keyboard focus or accessibility on sale modules.",
        points: [
          "Versioned hero and carousel modules when autoplay or motion requirements changed on seasonal campaigns.",
          "Kept Figma libraries aligned with frontend refactors so variant props stayed meaningful for rugs and lighting SKUs.",
          "Updated documentation when product data fields or photography ratios shifted on statement PDPs.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I governed ZG alongside OKL and SLT—triaging merchandising requests against engineering cost and making explicit calls about shared checkout versus Z-specific expression on inspiration journeys.",
        points: [
          "Set standards for when custom art direction stays outside the library versus becomes a component content slot.",
          "Prioritized system work where customers lost hierarchy between editorial heroes and functional filters.",
          "Ran cross-brand reviews so Z Gallerie patterns did not break shared account or cart flows from sister brands.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Statement imagery needs precise implementation. I worked with developers on lazy-loading placeholders, carousel focus order and responsive type so the live gallery feel matched designed Promotions, decor & services pages.",
        points: [
          "Specified crop rules and fallback states for missing lifestyle photography on furniture PDPs.",
          "Reviewed built pages for line breaks, sticky elements and mobile gallery gestures on high-urgency clearance paths.",
          "Partnered on QA for out-of-stock messaging and sale pricing on sculptural product cards.",
        ],
      },
    ],
  },
  ctc: {
    note:
      "Inside Canadian Tire Corporation I extended shared enterprise platform patterns—store context, fulfillment and automotive booking—while owning Customer journeys on canadiantire.ca, not inventing CTR’s catalog DS from scratch.",
    systemName: "CTR Pattern Extensions (Canadian Tire)",
    foundations: [
      "Canadian Tire red applied within existing enterprise neutral ramps",
      "Typography hierarchy for flyer deals, tools specs and bilingual entry pathways",
      "Spacing tokens for dense automotive and seasonal PLP grids on shared platform",
      "Store, pickup, ship and same-day status colour semantics I documented for CTR squads",
      "Icon usage aligned with enterprise category sets—automotive, home, outdoor living",
      "Responsive breakpoints tuned for garage phone use and in-store comparison contexts",
    ],
    components: [
      "Global header patterns with store context and search I adapted for CTR IA",
      "Product discovery at scale tiles with local inventory and fulfillment badges",
      "PDP modules for specs, services, variants and promotions on tools and seasonal SKUs",
      "Store context & fulfillment messaging visible when inventory changes the decision",
      "Automotive services booking stepper—store, service, date, contact, confirmation",
      "PLP filters including project attributes within enterprise filter shells",
      "Promotions & campaigns tiles absorbing flyer peaks without breaking hierarchy",
      "Cart and checkout step indicators reused from platform with CTR content rules",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "I contributed to enterprise reuse by auditing Canadian Tire discovery, Product detail decisions and Automotive services flows—documenting which patterns I owned versus inherited from the shared CTR platform before wireframing new fulfillment states.",
        points: [
          "Inventorying PLP, PDP and cart behaviour to propose extensions for store switching and unavailable combinations—not a greenfield DS charter.",
          "Aligned token usage with existing engineering constraints while specifying CTR-specific automotive booking and seasonal campaign modules.",
          "Defined brand-journey components for Product discovery at scale and Store context & fulfillment that other CTR brands could reference but not copy blindly.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Seasonal peaks and new services changed inventory rules constantly. I maintained the Canadian Tire extensions I owned—updating fulfillment copy variants and keeping Figma aligned with platform component APIs after upgrades.",
        points: [
          "Refreshed modules when tire-fitment-adjacent attributes, pickup rules or flyer promo states introduced new UI edge cases on canadiantire.ca.",
          "Removed deprecated one-off fulfillment messaging that bypassed shared enterprise badges I had documented.",
          "Tracked parity between my Figma variants and platform releases after cross-brand regression findings from QA.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "Across Canadian Tire, Sport Chek, Mark’s and Party City I helped govern what stayed enterprise-core versus Canadian Tire overlay—escalating broken filter behaviour and ambiguous store messaging to shared backlog owners when appropriate.",
        points: [
          "Facilitated decisions on when my automotive service stepper should influence enterprise patterns versus remain a CTR exception.",
          "Balanced BA-driven requirements with research-tested terminology on store selection and inventory visibility.",
          "Prioritized fixes where customers could not answer can I get this near me on shared platform flows I extended.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "At CTR scale my specs had to survive handoffs to many squads. I collaborated on token usage, responsive PLP behaviour and fulfillment states—design QA on bilingual pathways and automotive booking confirmations.",
        points: [
          "Clarified behaviour for inventory badges and store switching on PDP modules I delivered within platform shells.",
          "Reviewed builds for accessibility on filters, modals and checkout error recovery on Canadian Tire releases.",
          "Treated recurring QA defects on my journeys as signals to tighten shared component specs I maintained for CTR.",
        ],
      },
    ],
  },
  marks: {
    note:
      "For Mark’s I extended enterprise retail patterns while owning workwear-specific journeys—steel toe, PPE, high-vis and scrubs specs on marks.com had to scann without reinventing CTR’s core catalog system.",
    systemName: "Mark's Workwear Pattern Layer",
    foundations: [
      "Utility orange accents within enterprise neutral base used across CTR brands",
      "Typography tuned for spec labels—toe protection, waterproofing, insulation—vs marketing headlines",
      "Spacing for attribute-heavy PDP layouts on boots and safety products",
      "Size, width and fit guidance colour semantics distinct from casual apparel cues",
      "Badge system for safety rating, brand exclusives and promo pricing on work SKUs",
      "Accessible form tokens shared with platform checkout and account flows",
    ],
    components: [
      "Discovery across intents entry—workwear, footwear, kids and everyday apparel lanes",
      "Product tiles with spec chips for composite toe, anti-puncture and high-visibility",
      "PLP filters for size, width, safety rating and brand within enterprise filter UI",
      "Technical product hierarchy modules surfacing meaningful workwear attributes on PDP",
      "Work and everyday in one system layouts adapting hierarchy for jeans vs safety footwear",
      "Fit, size and local inventory selectors when someone needs gear for a job quickly",
      "Fulfillment & promotions surfacing express delivery and clearance without breaking scan",
      "Responsive retail contexts transforming filters for lunch-break mobile work boot searches",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Mark’s mixes Technical product hierarchy with casual shopping. I audited boots, outerwear and scrubs journeys—then documented pattern extensions on top of shared CTR components rather than claiming a standalone enterprise DS.",
        points: [
          "Mapped attribute display for steel toe, waterproofing and width that repeated across work boots but not Party City kits.",
          "Established grid and token usage for function-forward PDPs while reusing platform tiles and cart primitives.",
          "Released Mark’s-specific filter chips, spec tables and promo variants for clearance on professional apparel.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "New compliance labels and exclusive brands appeared each season. I maintained the workwear layer I owned—versioning spec modules when research refined filter mental models on marks.com.",
        points: [
          "Updated filter and chip patterns when merchandising introduced technical attributes outside casual apparel norms.",
          "Retired duplicate PDP modules that diverged from enterprise pricing treatment on shared platform components.",
          "Documented content rules for safety copy so UX writing stayed tied to Mark’s spec components, not generic CTR defaults.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "Within CTR I advocated for Mark’s-specific needs while reusing enterprise building blocks—governing when a workwear exception should feed back to shared patterns versus stay a Mark’s overlay.",
        points: [
          "Prioritized fixes where customers confused size systems or missed toe-protection information on safety shoes.",
          "Coordinated with researchers and BAs to validate pattern changes before promoting them beyond marks.com journeys I owned.",
          "Tracked cross-brand impact so Mark’s filter experiments did not break Sport Chek size charts on shared code paths.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Workwear PDPs fail when spec tables wrap badly on mobile. I worked with developers on truncation, selector behaviour and promo stacking—design QA with QA when edge cases revealed experience problems on PPE listings.",
        points: [
          "Specified expand patterns for long attribute lists on waterproofing and insulation fields.",
          "Reviewed pickup, size-unavailable and multi-SKU selectors on live work boot PDPs against my handoff specs.",
          "Fed implementation learnings back into Mark’s pattern docs for the next squad picking up Fulfillment & promotions modules.",
        ],
      },
    ],
  },
  sportchek: {
    note:
      "On Sport Chek I contributed enterprise platform patterns while owning active-retail journeys—size, hockey-season inventory and ship/pickup toggles on sportchek.ca where footwear decisions happen fast on mobile.",
    systemName: "Sport Chek Active Retail Extensions",
    foundations: [
      "Sport Chek energetic palette within shared enterprise photography frames",
      "Bold display type for campaign heroes paired with readable gear spec typography",
      "Spacing for equipment grids and team-affiliation storytelling modules",
      "Size and sport-category iconography layered on platform icon sets",
      "Promo badge semantics for deals, clearance and seasonal sport lanes",
      "Mobile-first tap targets for quick shop during commute browsing contexts",
    ],
    components: [
      "Product discovery at scale entry across search, sport, category and brand paths",
      "Product cards with size preview, promo flags and lifestyle vs performance hierarchy",
      "Advanced PLP filters for sport, size and brand using enterprise filter shells",
      "PDP galleries with fit notes, ratings and specifications for technical outdoor gear",
      "Size, store context & fulfillment toggles answering can I get my size near me",
      "Promotions & merchandising bands supporting hockey prep without obscuring PDP focus",
      "Services alongside ecommerce entry for equipment service journeys",
      "Mini-cart and checkout progress within shared CTR checkout components",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Sport Chek serves footwear, apparel and electronics in one door. I audited Size, store context & fulfillment and Product detail decisions flows—extending shared patterns for seasonal sports inventory rather than inventing a new catalog DS.",
        points: [
          "Identified structures shared between running shoes and hockey equipment despite different spec density on sportchek.ca.",
          "Documented Sport Chek-specific variants for size charts and inventory messaging atop platform tiles I did not own wholesale.",
          "Shipped filter, tile and fulfillment extensions with state docs for out-of-stock sizes and split shipments.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Seasonal turnover stress-tested my extensions. I maintained Sport Chek libraries by updating campaign modules and size-related variants when business rules evolved for local inventory APIs.",
        points: [
          "Added badge variants when new sports seasons introduced recurring attribute sets on PLP filters I maintained.",
          "Synced Figma with frontend changes to sticky add-to-cart and promo banners after platform refactors.",
          "Archived outdated ship-versus-pickup language that bypassed enterprise fulfillment components.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I managed intake from UX squads and BAs—prioritizing extensions that reduced confusion around size and fulfillment during peak sports retail, escalating systemic size-chart issues to enterprise owners when needed.",
        points: [
          "Recorded when Sport Chek needed a unique campaign module versus extending enterprise PLP behaviour from Canadian Tire patterns.",
          "Balanced brand energy with CTR-wide checkout constraints on account and rewards surfaces.",
          "Prioritized backlog tied to research findings on filter mental models and hesitation points on footwear PDPs.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Sports shoppers decide on phones in aisles. I partnered on selector logic, promo display and responsive filters—seasonal launch reviews with QA classifying repeat defects as extension gaps I owned.",
        points: [
          "Clarified behaviour for unavailable sizes and local store messaging on Product discovery at scale listings.",
          "Reviewed built PLPs during hockey and running campaigns, not only at initial wireframe handoff.",
          "Worked with developers on Services alongside ecommerce flows so equipment booking felt connected to shared chrome.",
        ],
      },
    ],
  },
  partycity: {
    note:
      "For Party City I extended enterprise ecommerce patterns while owning occasion-first journeys—balloon product-plus-service flows, Halloween peaks and theme/colour discovery on partycity.ca.",
    systemName: "Party City Occasion Extensions",
    foundations: [
      "Festive purple within accessible enterprise text pairings for partycity.ca",
      "Playful display type for occasion heroes with utility body styles for kit contents",
      "Spacing for theme grids and balloon customization steppers on shared layout tokens",
      "Occasion and season semantic colours—birthdays, weddings, Halloween campaigns",
      "Illustration and photography frame guidelines for curated kit carousels",
      "Form tokens tuned for party kit customization atop platform field components",
    ],
    components: [
      "Occasion-led discovery landing heroes and theme entry paths",
      "Seasonal transformation modules absorbing Halloween without retraining core interactions",
      "Balloons as product + service steppers—type, colour, quantity, bouquet, pickup timing",
      "PLP grids with age, theme and colour filters within enterprise listing shells",
      "Choice without overload card patterns balancing browse excitement and availability",
      "PDP modules for kit contents, substitutions and deadline-driven fulfillment callouts",
      "Cart grouping for mix-and-match party items using shared checkout primitives",
      "Responsive celebration planning navigation transforming filters on phone discovery",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Party City shoppers start with I have something to celebrate—not a SKU. I mapped Occasion-led discovery and Balloons as product + service journeys, then documented extensions on shared CTR components for kits and seasonal peaks.",
        points: [
          "Traced paths from themed entry into collections without claiming a new enterprise catalog system.",
          "Defined occasion tokens and layout rules that felt festive while reusing platform grid and button behaviour.",
          "Built first-wave kit tiles, balloon steppers and service states with documented substitution and availability edge cases.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Halloween and birthday cycles introduced new themes weekly. I maintained Occasion Extensions by folding successful campaign layouts into components and tightening balloon booking rules when ops messaging changed.",
        points: [
          "Versioned hero and kit modules after Seasonal transformation learnings each peak on partycity.ca.",
          "Updated service flows when pickup timing or substitution copy changed on balloon customization paths I owned.",
          "Kept Figma aligned with engineering components used across Party City and shared Canadian Tire platform releases.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I governed what deserved a new themed template versus re-skinning enterprise components—balancing merchandising creativity with sustainability inside the four-brand CTR program.",
        points: [
          "Prioritized fixes reducing drop-off during kit building and Promotions inside the journey peaks.",
          "Coordinated with BAs when availability rules needed clearer UI contracts on deadline-sensitive celebrations.",
          "Documented seasonal art-direction exceptions so one-off Halloween skins did not fork core checkout from enterprise patterns.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Occasion retail mixes product and service behaviours on shared code. I spec’d balloon step order, substitution states and peak-traffic performance—QA on cart grouping and pickup timing messages.",
        points: [
          "Specified validation and recovery for balloon customization flows distinct from standard add-to-cart platform behaviour.",
          "Reviewed theme pages where content length varied wildly during Responsive celebration planning launches.",
          "Partnered with QA on promo stacking and fulfillment messaging when party deadlines drove support tickets.",
        ],
      },
    ],
  },
  walmart: {
    note:
      "For Walmart US Fashion with Zeekit partners I built a focused try-on interaction system—Choose my model on the PDP image—not a full ecommerce catalog design system.",
    systemName: "Walmart Fashion Try-On UI",
    foundations: [
      "Overlay colour hierarchy subordinate to existing Walmart PDP photography",
      "Typography for measurement inputs, model names and editable applied-model status",
      "Spacing for on-image Choose my model control and desktop modal shells",
      "Motion tokens for model swap, CV processing and loading feedback",
      "Privacy and consent copy styling for Be Your Own Model upload paths",
      "Touch and pointer targets sized for bottom-sheet try-on on mobile app parity",
    ],
    components: [
      "Try It On / Choose my model entry anchored on fashion product imagery",
      "Choose my measurements panel—size and height inputs finding closest models",
      "Browse matching models carousel with name, size and height selection states",
      "Model applied on the PDP with editable who-is-model status on live image",
      "Be Your Own Model upload, framing guide and lighting guidance overlays",
      "Loading, processing, failure and retry overlays for CV-backed swaps",
      "Mobile bottom sheet and commerce-native modal flows from concept to live result",
      "Accessibility announcements for model changes without breaking Add to cart hierarchy",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Try-on began as Try It On concepts in FigJam. I scoped a feature interaction system for Choose my model on the image—measurements first, then carousel—without redesigning Walmart’s core fashion catalog components.",
        points: [
          "Mapped shopper paths from representation hesitation to Choose My Model vs Be Your Own Model without forcing one path.",
          "Defined overlay tokens respecting crowded PDP real estate—price, variants and fulfillment stayed primary.",
          "Prototyped commerce-native modal flow embedded in existing fashion PDP, not a disconnected AR novelty screen.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "As model filters and Zeekit platform rules evolved, I maintained try-on modules—updating consent copy, processing states and responsive shells when web and Walmart app implementations diverged.",
        points: [
          "Versioned filter and carousel behaviour after usability tests on height, shape, size and skin tone representation.",
          "Documented error patterns for upload quality, processing timeouts and unsupported garment types on live SKUs.",
          "Kept Figma aligned with shipped on-image CTA so fashion merchandising and Global Technology referenced the same states.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "Try-on touched fashion, legal, platform and CV teams. I managed scope by separating core PDP commerce from Virtual Try-On modules—prioritizing inclusive defaults and cross-platform parity for mobile shoppers.",
        points: [
          "Facilitated which filters shipped first versus stayed in research backlog after Concept → Result learnings.",
          "Balanced marketing excitement with clarity on what changed on the product image after model apply.",
          "Tracked parity between desktop modal and app bottom-sheet flows for private and national brand scale.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Computer vision behind the button required tight Zeekit and Walmart Global Technology partnership—I spec’d latency, skeleton states and API failures, joining QA on real fashion SKUs across skin tones and devices.",
        points: [
          "Worked on overlay z-index, scroll lock and handoff between PDP commerce and try-on modes.",
          "Defined acceptance criteria for model swap timing, image quality warnings and revert-to-default behaviour.",
          "Joined QA passes validating measurements-first matching and editable applied state on participating browse/clothing SKUs.",
        ],
      },
    ],
  },
  anova: {
    note:
      "As solo UX/UI and content designer on a ~24-person team, I built the Anova Oven Guide DS around food-first discovery and the Choose → prepare → set → cook → complete journey—not appliance-mode jargon.",
    systemName: "Anova Oven Guide DS",
    foundations: [
      "Warm appliance palette with high-contrast cooking and caution states for bright kitchens",
      "Native typography for step instructions, timers and temperature at arm’s length",
      "One-action-at-a-time spacing rhythm across guided cooking screens",
      "Semantic colours for heat, progress, success and connection to physical oven",
      "Iconography for modes, rack position and food categories in VP Product-aligned IA",
      "Haptic and motion guidance tokens paired with iOS and Android native patterns",
    ],
    components: [
      "Start with the food category picker and search entry",
      "Choose → prepare → set → cook → complete step cards with progressive disclosure",
      "One step at a time layouts keeping current action and next step visible",
      "Timers and live status rings for started, in-progress and complete phases",
      "Oven status dashboard tying digital instructions to rack and mode settings",
      "Modal sheets for rack position, settings and Content as interface warnings",
      "Completion and rest screens with next actions after cook finishes",
      "Empty, offline, connection-error and app-background recovery templates",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Solo on Digital Oven Guide, I created the DS while designing flows—partnering with VP Product to map Choose → prepare → set → cook → complete before tokenizing components that hide oven complexity behind chicken, bread and steak goals.",
        points: [
          "Audited early screens for repeated step layouts, timers and appliance status from Figma Guide and high-level flow files.",
          "Built foundations prioritizing legibility for busy hands and parallel kitchen tasks—not generic mobile UI kits.",
          "Componentized step cards and CTAs with explicit loading, failure and interrupted-cook states from the start.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "New recipes and oven capabilities kept arriving on the 24-person program. I extended the library instead of cloning screens—syncing components with Swift/Kotlin after platform feedback on timers and unit switching.",
        points: [
          "Added variants for video steps, multi-rack instructions and longer Choose → prepare sequences.",
          "Updated safety and temperature copy patterns when content rules shifted without breaking component slots.",
          "Refreshed native pattern docs when dynamic type or safe-area behaviour changed on iOS and Android builds.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "With one design owner and many developers, I treated Anova Oven Guide DS as the guardrail—new UI had to justify divergence from guided cooking patterns before shipping on release trains.",
        points: [
          "Prioritized system work reducing cognitive load during active cook phases when timers dominate the screen.",
          "Batched component updates with PM and engineering leads so content, UX writing and UI stayed one product language.",
          "Governed feature requests against Start with the food IA so mode-first screens did not fragment the app.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Native fidelity mattered as much as pixels. I paired on timer accuracy, oven connection states, offline behaviour and design QA on device—logging gaps as system updates for the next feature.",
        points: [
          "Handed off animation, haptic and transition specs for connection changes between app and physical oven.",
          "Tested interrupted cooks, app backgrounding and unit switching against documented component states.",
          "Stayed through build and design QA so Design system + native delivery matched VP Product acceptance criteria.",
        ],
      },
    ],
  },
  ymca: {
    note:
      "Solo UX, content and product architecture on a ~15-person team—I created the YMCA Member DS around Home, calendar, scan and profile with QR check-in, not a marketing brochure home.",
    systemName: "YMCA Member DS",
    foundations: [
      "YMCA red with accessible neutrals for community warmth in list-heavy views",
      "Native type scale for schedules, headlines and membership legal text",
      "Thumb-reach spacing for bottom navigation and scan-at-the-door flows",
      "Semantic colours for class capacity, waitlist and facility alert states",
      "Photography frames for centres, programs and achievement moments on Home",
      "Iconography for fitness, aquatics, childcare and giving tied to member IA",
    ],
    components: [
      "Architecture around the member shell—Home, calendar, scan, profile, facilities",
      "Home that answers what matters now—greeting, facility context, achievements",
      "Bottom navigation and global wayfinding across recurring member tasks",
      "Class schedule lists with filters, favourites and Repeated use and calendar context",
      "Scan and membership identity—QR check-in, wallet integration, glanceable account",
      "Discovery with progressive structure for location, membership and plan selection",
      "Account cards for membership, payment and notification preference controls",
      "Empty states for first-time, lapsed and waitlist-full members",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Before polishing screens I defined product architecture—Home, calendar, scan, profile—then built YMCA Member DS tokens and components so BAs and stakeholders saw one native language, not departmental silos.",
        points: [
          "Translated org complexity into member intentions: work out, find something, manage activity, know what is happening today.",
          "Tokenized colour, type and spacing for scan-at-door QR flows and busy schedule lists from the Handoff Figma file.",
          "Built home, booking and account components with accessibility states before marketing-heavy visuals.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Branch and season shifts changed program metadata constantly. I maintained the system by versioning schedule components and updating content modules after stakeholder reviews on the 15-person delivery team.",
        points: [
          "Extended list and filter patterns when new program types required metadata beyond initial calendar assumptions.",
          "Retired one-off screens duplicating Scan and membership identity or standard booking flows.",
          "Kept UX writing standards tied to components so tone stayed welcoming across Home and profile surfaces.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I governed intake from YMCA stakeholders and marketing—deciding when a local program needed custom presentation versus a configured instance of standard member components.",
        points: [
          "Prioritized investments helping members answer what is next near me without turning Home into a feature directory.",
          "Balanced marketing communication with functional utility on Architecture around the member navigation model.",
          "Tracked backlog for waitlist, cancellation and capacity-full states blocking launch confidence with developers.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Member apps depend on schedule reliability. I partnered on API-driven empty states, pull-to-refresh and dynamic type—design QA with QA and BAs on real branch data, not demo content alone.",
        points: [
          "Specified skeleton loaders and offline messaging for calendar-dependent views across iOS and Android.",
          "Reviewed builds for tap targets, focus order and contrast on red CTAs at facility check-in moments.",
          "Ran design QA on QR scan and wallet flows so One language, system, content and build survived production.",
        ],
      },
    ],
  },
  ppjv: {
    note:
      "As Design System Lead on a 58-person banking program, I led Aurora—foundations, Storybook and Figma—so two UX designers could scale originator, transfer and audit workflows for professional operators.",
    systemName: "Aurora",
    foundations: [
      "Enterprise blue with strict financial status semantics for SLA and permission states",
      "Dual typography scales—dashboard scan lines vs detail form labels on 4px grid",
      "Elevation and divider tokens for layered originator and transaction panels",
      "Data visualization colour ramps for balances, trends and attention callouts",
      "Focus, error and permission-denied states embedded in every Aurora primitive",
      "Content tone rules for errors that answer what happened, why and what next",
    ],
    components: [
      "Application shell with sidebar and context header for internal banking ops",
      "Sortable data tables with bulk selection, filter bars and saved views",
      "Dashboard hierarchy that answers attention—not unfiltered metric dumps",
      "Data-dense originator management search and detail with progressive disclosure",
      "Transfers, transactions and recovery panels with timeline history",
      "Form sections for approvals, exceptions and validation-through-confirmation stages",
      "Status chips, badges and SLA indicators sharing one non-colour-only language",
      "Modal, toast and inline error messaging documented in Storybook variants",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Internal PPJV UI was fragmenting under delivery pressure. I audited dashboards and Transfers, transactions and recovery flows—then stood up Aurora foundations plus high-density tables and forms for client dev teams on the 58-person program.",
        points: [
          "Interviewed operators about scan patterns and status language during originator management workflows.",
          "Published Aurora tokens and component families in Figma with a parallel Handoff and Design System file structure.",
          "Delivered tables, filters and forms with exhaustive state documentation aimed at Storybook consumption.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Aurora grew every release. I maintained semver-style library updates, contribution reviews and sync between Figma, Storybook and client developer implementations when compliance copy or audit trails changed UI.",
        points: [
          "Accepted or redirected pattern requests into core Aurora versus product extensions on PPJV features.",
          "Updated components when permissions, financial adjustments or audit visibility introduced new required fields.",
          "Retired duplicate tables that undermined trust—operators notice when two grids sort differently.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "As DS Lead with one additional UX designer supporting 58 people, I managed Aurora governance—intake, roadmap, office hours and adoption tracking across design and client development.",
        points: [
          "Prioritized components by workflow risk: approvals, exceptions, financial adjustments and audit visibility.",
          "Ran critiques with BAs and QA before promoting experimental patterns to Aurora core.",
          "Measured adoption by screens shipping Aurora primitives versus bespoke layouts on banking ops features.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Aurora only mattered if client developers implemented it accurately. I paired on token pipelines, table keyboard navigation and design QA on staging until production matched Storybook and Figma specs.",
        points: [
          "Handed off props-level guidance for sort, filter, pagination and row expansion on licensing-style tables.",
          "Reviewed staging builds for permission-gated actions and error recovery on financial forms I owned.",
          "Closed the loop with QA defect trends—patching Aurora docs and components, not single tickets alone.",
        ],
      },
    ],
  },
  westjet: {
    note:
      "In the WestJet proposal I shaped a Journey DS for ticketing, check-in, baggage and maintenance concepts—implementation meant buildability with technical leads, not production design QA on live ops.",
    systemName: "WestJet Journey DS",
    foundations: [
      "WestJet teal with sky neutrals for trip cards and operational density panels",
      "Native typography for gate-urgent boarding pass scannability vs relaxed planning screens",
      "Card spacing for trip hierarchy that escalates visually near departure disruption",
      "Semantic colours for on-time, delay, gate change and baggage reassurance milestones",
      "Iconography for baggage scans, seats, documents and maintenance ops concepts",
      "Motion tokens for check-in stepper progress and trip phase transitions in proposals",
    ],
    components: [
      "Ticketing as an active journey start—destination, travellers, status, next action",
      "Native check-in stepper with visible progress through passengers, baggage, seats",
      "Baggage as its own journey timeline from checked through ready for passengers",
      "Boarding pass surfaces simplified for the gate moment under time pressure",
      "Trip hub evolving from booking readiness to day-of-travel native screens",
      "Operational dashboard concepts for ground and baggage teams—not passenger chrome clones",
      "Status, notifications and content modules for airport-fast travel language",
      "Disruption recovery and empty templates linked to FigJam journey maps",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "As Creative Director and Proposal Lead on a five-person team, I mapped book → prepare → check in → baggage → board in FigJam—then created Journey DS foundations and native components proving Ticketing as an active journey start in high fidelity.",
        points: [
          "Audited recurring patterns across proposal Figma for passenger calm vs operational density without claiming shipped product ownership.",
          "Defined tokens and card structures escalating when trips entered delay or gate-change states in concept pages.",
          "Built component sets for check-in steppers and Baggage as its own journey used across stakeholder presentations.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Stakeholder feedback refined the vision weekly. I maintained the proposal library—merging duplicate check-in flows and versioning alert modules when ops partners added baggage scan data points to the story.",
        points: [
          "Consolidated successful one-off native screens into shared Journey DS components under iteration pressure.",
          "Versioned timeline and notification modules when maintenance concepts surfaced new operational fields.",
          "Kept FigJam proposal board linked to Figma components so narrative and UI stayed aligned for client reviews.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I governed scope across passenger and operational concepts—prioritizing patterns that demonstrated connected handoffs for the business case, not isolated app prettiness in the proposal deck.",
        points: [
          "Facilitated workshops on when passengers need calm hierarchy versus ops teams need dense tables in the same Journey DS.",
          "Tracked open questions—baggage scans, gate changes—as backlog items for future delivery phases beyond proposal.",
          "Presented Journey DS as scalability evidence alongside From proposal thinking to product vision solution screens.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Proposal implementation meant buildability—I paired with client technical leads on component boundaries, API-driven delay states and native patterns engineers could estimate, preparing handoff without production QA cycles.",
        points: [
          "Documented expected realtime states for rebooking and baggage milestones as estimation input, not shipped acceptance tests.",
          "Outlined accessibility requirements for boarding passes and time-sensitive alerts in spec-ready form for a future squad.",
          "Prepared component-level handoff so a delivery team could adopt Journey DS without reverse-engineering proposal visuals alone.",
        ],
      },
    ],
  },
  polard: {
    note:
      "On a five-person lottery team I designed portal patterns for the Business Portal and mobile PlayON—licensing table systems and retailer workflows, not an Aurora-style banking design system.",
    systemName: "Lottery Portal DS",
    foundations: [
      "Trust-forward blues with lottery brand accents for web density and mobile priority",
      "Typography for licensing forms, draw summaries and retailer financial tables",
      "Spacing grid balancing Business Portal marketing entry and ops-heavy work areas",
      "Status colours for pending, cleared, rejected and void on money-adjacent actions",
      "Secure interaction states for double-confirm and audit-friendly confirmations",
      "Responsive breakpoints for counter tablets vs desktop ops vs PlayON thumb reach",
    ],
    components: [
      "Dashboard that answers attention on Business Portal home",
      "Retailer resources and data-dense grouping before drill-in table work",
      "Licensing workflows and table systems—search, filter, open record, row actions",
      "Web portal + mobile ecosystem shells sharing terminology, not identical layouts",
      "PlayON mobile home and account flows with progressive disclosure",
      "Instant-game and ticket-ordering form wizards with permission variants",
      "Notification and task queue lists for operational follow-up",
      "Error, lockout and support escalation pages with workflow-preserving copy",
    ],
    phases: [
      {
        id: "create",
        title: "Create",
        summary:
          "Lottery ops mix regulation and speed. I audited WV Web Business Portal and KS Mobile App flows—Dashboard that answers attention and Licensing workflows and table systems—then created Lottery Portal DS foundations distinct from fintech Aurora patterns.",
        points: [
          "Mapped retailer order, activate, settle and dispute paths to shared form and table DNA before naming components.",
          "Established status and spacing tokens working on counter tablets and wide monitors for licensing tables I designed.",
          "Released core wizards, confirmations and empty states with explicit role permission variants in Figma handoff files.",
        ],
      },
      {
        id: "maintain",
        title: "Maintain",
        summary:
          "Rule changes and new game types kept arriving. I maintained Lottery Portal DS by extending licensing table variants and syncing web components with PlayON mobile verification screens.",
        points: [
          "Added validation steps when settlement or instant-game flows introduced new compliance copy requirements.",
          "Deprecated layouts that bypassed confirmation patterns required for financial actions on retailer accounts.",
          "Tracked parity between portal web tables and Mobile priorities that still complete the task flows.",
        ],
      },
      {
        id: "manage",
        title: "Manage",
        summary:
          "I governed which UX shortcuts were unacceptable in regulated lottery work—prioritizing system investments that reduced operational error on licensing tables and PlayON field tasks.",
        points: [
          "Worked with BAs to translate rule changes into component updates instead of one-off Business Portal pages.",
          "Prioritized backlog tied to audit trails, reversibility and clear ownership displays on dense retailer resources.",
          "Coordinated web and mobile contributors so status language stayed shared when platforms diverged in density.",
        ],
      },
      {
        id: "implement",
        title: "Implement with engineering",
        summary:
          "Retailers feel quality when confirmations fail or licensing tables lie. I partnered with client developers on validation order, role permissions on staging and QA scripts for money-adjacent flows—design part of the build, not a late handoff.",
        points: [
          "Specified double-confirm, disabled and rollback messaging for critical instant-game and ticket actions.",
          "Reviewed staging with real role permissions to catch components leaking wrong retailer data.",
          "Fed QA findings back into Lottery Portal DS docs so fixes benefited every workflow, not one WV ticket alone.",
        ],
      },
    ],
  },
};
