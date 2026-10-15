import { useState } from "react";
import { assetPath } from "../lib/assetPath";
import { ImageLightboxGallery } from "./ImageLightboxGallery";

type TabId = "single" | "family" | "guest";

type Journey = {
  id: TabId;
  label: string;
  title: string;
  lead: string;
  points: { title: string; body: string }[];
  image: string;
};

const journeys: Journey[] = [
  {
    id: "single",
    label: "Single Existing",
    title: "Single existing member",
    lead: "A member who already has a YMCA membership and is joining the app for the first time. The goal was to connect their existing account quickly and get them to value fast.",
    points: [
      { title: "Log in or sign up", body: "Splash, login and sign-up with existing membership details, so the app recognizes who they are." },
      { title: "Set up the profile", body: "Short steps for gender, date of birth, language, location and membership type, then the member profile." },
      { title: "Home, scan and calendar", body: "Into home, QR scan for check-in, membership card variations, calendar and booking the next activity." },
      { title: "Profile and support", body: "Notifications, profile, settings, privacy, help and achievements to keep members coming back." },
    ],
    image: "01-single-existing.png",
  },
  {
    id: "family",
    label: "Family Existing",
    title: "Family existing member",
    lead: "Families share one membership but have several people using it. This journey builds on the single member flow and adds everything needed to manage a household.",
    points: [
      { title: "Same entry, family context", body: "The same login and setup as single members, so families learn one pattern, then branch into family membership." },
      { title: "Add a member", body: "The main account holder adds family members with their own details, address and optional payment." },
      { title: "Family in calendar & scan", body: "Calendar and booking let you pick which family member an activity is for, and each member has their own scan card." },
      { title: "Family management", body: "A family members page in profile to view and manage everyone on the membership." },
    ],
    image: "02-family-existing.png",
  },
  {
    id: "guest",
    label: "Guest New user",
    title: "Guest new user",
    lead: "Someone without a YMCA membership yet. This journey turns the app into a front door: explore, choose a location and plan, pay, and become a member.",
    points: [
      { title: "Sign up from scratch", body: "Sign-up and profile setup without existing membership details." },
      { title: "Choose location & plan", body: "Pick a YMCA location and membership type, with clear pricing before committing." },
      { title: "Payment and confirmation", body: "Payment details, an almost-there confirmation and onboarding screens that introduce the value of membership." },
      { title: "Guest experience", body: "A home with a 'Be our member' call to action and one-time pass, so guests can try before they join." },
    ],
    image: "03-guest-new-user.png",
  },
];

/** YMCA only: design process across the three member journeys. */
export function YmcaDesignProcessSection() {
  const [tab, setTab] = useState<TabId>("single");
  const current = journeys.find((j) => j.id === tab)!;

  return (
    <section
      aria-labelledby="ymca-design-process-heading"
      className="page-gutter border-b border-border py-16 md:py-24"
    >
      <div className="mb-8 max-w-2xl md:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          Design process
        </p>
        <h2
          id="ymca-design-process-heading"
          className="mt-3 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-text md:text-4xl"
        >
          One app,
          <span className="text-muted"> three member </span>
          journeys
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-[15px]">
          I designed the app around three types of members: single existing members, families and
          new guests. They share the same system and screens, but each journey has its own entry
          point, steps and needs.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Member journeys"
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
              aria-controls={`ymca-design-panel-${item.id}`}
              id={`ymca-design-tab-${item.id}`}
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
        id={`ymca-design-panel-${tab}`}
        aria-labelledby={`ymca-design-tab-${tab}`}
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
          label="journey"
          items={[
            {
              src: assetPath(`/projects/ymca/design/${current.image}`),
              title: current.title,
              note: "Click to open larger",
              wide: true,
            },
          ]}
        />
      </div>
    </section>
  );
}
