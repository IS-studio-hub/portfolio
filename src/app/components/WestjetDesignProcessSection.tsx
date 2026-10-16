import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "ticketing" | "checkin" | "baggage" | "airport";

type Journey = {
  id: TabId;
  label: string;
  title: string;
  lead: string;
  points: { title: string; body: string }[];
  images: { file: string; title: string }[];
};

const journeys: Journey[] = [
  {
    id: "ticketing",
    label: "Ticketing",
    title: "Ticketing and booking",
    lead: "Ticketing is where the trip starts, so I treated it as an active journey start rather than a one-off purchase. The screens set up everything that follows.",
    points: [
      { title: "Book in a few steps", body: "Trip type, airports, dates and passengers in a short, predictable sequence that works with one hand." },
      { title: "Trip at the centre", body: "Once booked, destination, travellers, status and next action become the heart of the home screen." },
      { title: "Hierarchy that changes with time", body: "Planning details lead early on; as departure gets closer, check-in and gate information take over." },
      { title: "Connected to what comes next", body: "Booking choices like bags and seats carry straight into check-in, so passengers never re-enter details." },
    ],
    images: [
      { file: "13-book.png", title: "Where would you like to go?" },
      { file: "14-return-trip.png", title: "Book a flight" },
      { file: "12-ticketing.png", title: "Choose a fare" },
    ],
  },
  {
    id: "checkin",
    label: "Trip & check-in",
    title: "Trip and check-in",
    lead: "Once booked, the trip becomes the centre of the app. The goal was to make getting travel-ready predictable, with the next step always clear.",
    points: [
      { title: "The trip on home", body: "The upcoming trip leads the home screen, with route, dates and travellers, plus the services that matter for it." },
      { title: "Trip details in one place", body: "Passengers, fare conditions and baggage on one screen, so passengers can check everything before the airport." },
      { title: "Add what you need", body: "Extra bags, devices and instruments added in a simple sheet with a clear total." },
      { title: "Real-time updates", body: "Flight, baggage and schedule changes as instant updates, with a countdown to the next adventure." },
    ],
    images: [
      { file: "10-home.png", title: "Trip on home" },
      { file: "15-add-baggage.png", title: "Trip details & add baggage" },
      { file: "19-check-in.png", title: "Real-time updates" },
    ],
  },
  {
    id: "baggage",
    label: "Baggage",
    title: "Baggage as its own journey",
    lead: "Once a bag leaves the passenger's hands, information becomes reassurance. I designed baggage as its own journey, in passenger language instead of system jargon.",
    points: [
      { title: "Drop with confidence", body: "Bag drop guidance that tells passengers when it closes, where to go and what to expect." },
      { title: "Quick Drop service", body: "A clear explanation of the Quick Drop baggage service: how it works, who can use it and what it costs." },
      { title: "Bag status people understand", body: "A timeline from check-in to the plane to the carousel that answers one question: where is my bag?" },
      { title: "Notify me about my bag", body: "Passengers choose to get baggage notifications, so updates come to them instead of them searching." },
    ],
    images: [
      { file: "17-baggage-drop.png", title: "Bag drop & notifications" },
      { file: "18-baggage-learn.png", title: "Quick Drop baggage service" },
      { file: "31-fj-tracking.png", title: "Baggage status" },
    ],
  },
  {
    id: "airport",
    label: "Airport & notifications",
    title: "At the airport",
    lead: "Airport moments happen under time pressure. Notifications, wayfinding and help had to answer what is happening, whether it affects me and what to do next.",
    points: [
      { title: "Notifications that calm", body: "Gate changes and delays written to inform without adding anxiety, with the next action in the message." },
      { title: "Wayfinding", body: "Airport maps that guide passengers to bag drop, security and the gate." },
      { title: "Boarding pass at hand", body: "Cabin, zone and seat with the pass on top of the map, so passengers never search for it at the gate." },
      { title: "AI travel assistant", body: "A chat concept for finding flights and quick answers, in plain language." },
    ],
    images: [
      { file: "30-fj-map.png", title: "Airport map & boarding pass" },
      { file: "20-notification.png", title: "Time-sensitive notification" },
      { file: "23-ai-chat.png", title: "AI travel assistant" },
    ],
  },
];

/** WestJet only: design process across the key moments of the trip. */
export function WestjetDesignProcessSection() {
  const [tab, setTab] = useState<TabId>("ticketing");
  const current = journeys.find((j) => j.id === tab)!;

  return (
    <section
      aria-labelledby="westjet-design-process-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Design process
        </p>
        <h2
          id="westjet-design-process-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          From ticket
          <span className="text-muted"> to </span>
          takeoff
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          I took the flows into native screens for the key moments of the trip: ticketing,
          check-in, baggage and the airport. They share one calm visual system, but each moment
          has its own priorities as departure gets closer.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Trip moments"
        className="mb-8 flex flex-wrap gap-2 border-b border-border pb-3"
      >
        {journeys.map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`westjet-design-panel-${item.id}`}
              id={`westjet-design-tab-${item.id}`}
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
        id={`westjet-design-panel-${tab}`}
        aria-labelledby={`westjet-design-tab-${tab}`}
        className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-16"
      >
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-text">
            {current.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">{current.lead}</p>
          <ol className="mt-8 m-0 list-none space-y-6 p-0">
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
        <ImageLightboxGallery
          key={current.id}
          label="screen"
          items={current.images.map((image) => ({
            src: assetPath(`/projects/westjet/raw/${image.file}`),
            title: image.title,
          }))}
        />
      </div>
    </section>
  );
}
