import { useState, type FormEvent } from "react";
import { Nav } from "../components/Nav";
import { Seo } from "../components/Seo";
import { SITE } from "../data/projects";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-border bg-bg px-4 py-3 text-base text-text outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

export function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("_honey") ?? "").trim()) return;

    setStatus("sending");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SITE.contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: "New message from the IS portfolio",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!response.ok) throw new Error("Could not send");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Itamar Shamrik by email, phone, or the contact form."
        path="/contact"
      />
      <Nav variant="project" />
      <main className="page-gutter pb-24 pt-32 md:pb-32 md:pt-40">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Contact</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-text md:text-7xl">
          Let&apos;s build
          <br />
          something great.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Send a note about a project, a role, or a question. It comes straight to my Outlook.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="space-y-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Email</p>
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="mt-2 inline-block break-all font-display text-2xl text-accent transition-colors hover:text-text md:text-3xl"
                data-cursor="Email"
              >
                {SITE.contactEmail}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">Phone</p>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-2 inline-block font-display text-2xl text-accent transition-colors hover:text-text md:text-3xl"
                data-cursor="Call"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className={`${fieldClass} mt-2`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className={`${fieldClass} mt-2`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                className={`${fieldClass} mt-2 resize-y`}
              />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-accent px-6 py-3 font-mono text-sm font-medium uppercase tracking-wider text-black transition-transform hover:scale-105 disabled:cursor-wait disabled:opacity-70 disabled:hover:scale-100"
              data-cursor="Send"
            >
              {status === "sending" ? "Sending" : "Send"}
            </button>
            <p className="min-h-6 text-sm text-muted" role="status" aria-live="polite">
              {status === "sent" ? "Message sent. I’ll reply from Outlook." : null}
              {status === "error" ? (
                <>
                  The form didn’t send. Email{" "}
                  <a href={`mailto:${SITE.contactEmail}`} className="text-accent">
                    {SITE.contactEmail}
                  </a>{" "}
                  directly.
                </>
              ) : null}
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
