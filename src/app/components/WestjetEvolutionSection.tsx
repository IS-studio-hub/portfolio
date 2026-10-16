import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "ticketing" | "checkin" | "baggage";

type Evolution = {
  id: TabId;
  label: string;
  poweredBy: string;
  title: string;
  lead: string;
  points: { title: string; body: string }[];
  image: string;
  note: string;
};

const evolutions: Evolution[] = [
  {
    id: "ticketing",
    label: "Ticketing",
    poweredBy: "Powered by AI",
    title: "Smart booking",
    lead: "The next step for ticketing was moving from forms to conversation. Passengers say where they want to go, and the app finds the right flights, routes and seats for them.",
    points: [
      { title: "Ask, don't search", body: "A Smart Booking entry where passengers type a request in plain language, like 'I want to fly to Berlin', instead of filling a long form." },
      { title: "Personalized results", body: "Flight options based on preferences and past trips, shown as the same flight cards used across the app." },
      { title: "Seats in the chat", body: "The assistant can show the seat map inside the conversation, so choosing a seat is part of the same flow." },
      { title: "Built on the same system", body: "AI features reuse the existing components, so the new experience still feels like WestJet." },
    ],
    image: "01-ticketing-ai.png",
    note: "Smart booking landing, AI chat and in-chat seat selection",
  },
  {
    id: "checkin",
    label: "Check-in",
    poweredBy: "Powered by AI and GPS",
    title: "Check-in that knows where you are",
    lead: "Check-in evolves from a task passengers have to remember into a service that reacts to time and location, and guides them through the airport.",
    points: [
      { title: "Triggered by context", body: "Time-sensitive notifications when check-in opens or when the passenger arrives at the airport." },
      { title: "Fewer steps", body: "Real-time updates, passenger confirmation and seat selection as short, focused screens." },
      { title: "GPS wayfinding", body: "A live map with walking time to the next step, like bag drop or the gate, and how busy each area is." },
      { title: "Boarding pass follows you", body: "The pass advances automatically based on time and location, so the right one is always on top." },
    ],
    image: "02-check-in-ai-gps.png",
    note: "Notification, check-in steps and GPS airport navigation",
  },
  {
    id: "baggage",
    label: "Baggage handling",
    poweredBy: "Powered by RFID & IoT sticker sensors",
    title: "Your bags, our priority",
    lead: "With RFID tags and IoT sticker sensors, baggage stops being a black box. Passengers always know where their bags are, from check-in until they are back in their hands.",
    points: [
      { title: "Live bag location", body: "Sensors report each bag's status, so the app can show it on the map in real time." },
      { title: "Proactive updates", body: "Notifications like 'All bags are on board' reassure passengers without them having to ask." },
      { title: "One system, two views", body: "The same tracking data gives operations teams a loading confirmation view for the whole flight." },
      { title: "Fewer lost bags", body: "When a bag misses a connection, the system can flag it early and guide the passenger to the next step." },
    ],
    image: "03-baggage-rfid-iot.png",
    note: "Bag on board notification and live baggage map",
  },
];

/** WestJet only: system evolution proposal (AI ticketing, AI + GPS check-in, RFID/IoT baggage). */
export function WestjetEvolutionSection() {
  const [tab, setTab] = useState<TabId>("ticketing");
  const current = evolutions.find((item) => item.id === tab)!;

  return (
    <section
      aria-labelledby="westjet-evolution-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          System evolution
        </p>
        <h2
          id="westjet-evolution-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          Where the product
          <span className="text-muted"> could go </span>
          next
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          Beyond the core screens, the proposal showed how the system could evolve with new
          technology: AI for booking, AI and GPS for check-in, and RFID and IoT sensors for
          baggage. Each step builds on the same journey and design system, so new capabilities
          feel like part of one connected trip.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="System evolution areas"
        className="mb-8 flex flex-wrap gap-2 border-b border-border pb-3"
      >
        {evolutions.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`westjet-evolution-panel-${item.id}`}
              id={`westjet-evolution-tab-${item.id}`}
              onClick={() => setTab(item.id)}
              className={`rounded-sm px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active
                  ? "bg-text text-bg"
                  : "border border-border text-muted hover:border-text/40 hover:text-text"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`westjet-evolution-panel-${tab}`}
        aria-labelledby={`westjet-evolution-tab-${tab}`}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16">
          <div className="max-w-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {current.poweredBy}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-text">
              {current.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{current.lead}</p>
          </div>
          <ol className="m-0 grid list-none gap-6 p-0 sm:grid-cols-2">
            {current.points.map((point, index) => (
              <li key={point.title} className="border-t border-border pt-5">
                <span className="font-mono text-[11px] tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 font-display text-lg font-semibold text-text">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[15px]">{point.body}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <ImageLightboxGallery
            key={current.id}
            label="evolution"
            items={[
              {
                src: assetPath(`/projects/westjet/evolution/${current.image}`),
                title: `${current.label}: ${current.poweredBy.toLowerCase()}`,
                note: current.note,
                wide: true,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
