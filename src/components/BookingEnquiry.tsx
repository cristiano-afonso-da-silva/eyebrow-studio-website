"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import { hasExternalBooking } from "@/lib/booking";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BookingEnquiry() {
  const [status, setStatus] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash.startsWith("#book")) return;
      const query = hash.includes("?") ? hash.split("?")[1] : "";
      const params = new URLSearchParams(query);
      const next = params.get("service");
      if (next) setService(next);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Arché appointment enquiry");
    return `mailto:${siteConfig.contact.email}?subject=${subject}`;
  }, []);

  if (hasExternalBooking()) {
    return null;
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const selected = String(data.get("service") || "").trim();

    setStatus(
      `Thank you, ${name}. Your ${selected || "appointment"} enquiry is ready to send — we’ll follow up by email. Nothing is booked until confirmed.`
    );
    form.reset();
    setService("");
  };

  return (
    <section id="book" className="section-shell py-[clamp(4.5rem,10vw,7.5rem)]">
      <Reveal className="mx-auto max-w-2xl border border-line bg-foam/50 px-6 py-10 md:px-10 md:py-12">
        <p className="eyebrow mb-4">Booking enquiry</p>
        <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.12]">
          Request an appointment
        </h2>
        <p className="mt-4 text-ink-soft">
          Online booking will connect here once a platform is selected. For now,
          send an enquiry and Arché will confirm availability by email.
        </p>

        <form className="mt-8 grid gap-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-xs font-medium tracking-[0.12em] text-ink-soft uppercase">
              Name
              <input
                name="name"
                required
                autoComplete="name"
                className="min-h-12 border border-line bg-foam/80 px-4 text-base font-light tracking-normal text-ink normal-case outline-none transition focus:border-taupe"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium tracking-[0.12em] text-ink-soft uppercase">
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="min-h-12 border border-line bg-foam/80 px-4 text-base font-light tracking-normal text-ink normal-case outline-none transition focus:border-taupe"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-xs font-medium tracking-[0.12em] text-ink-soft uppercase">
              Service
              <select
                name="service"
                required
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="min-h-12 border border-line bg-foam/80 px-4 text-base font-light tracking-normal text-ink normal-case outline-none transition focus:border-taupe"
              >
                <option value="">Select a service</option>
                {siteConfig.services.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
                <option value="Consultation">Consultation</option>
              </select>
            </label>
            <label className="grid gap-2 text-xs font-medium tracking-[0.12em] text-ink-soft uppercase">
              Preferred date
              <input
                type="date"
                name="date"
                className="min-h-12 border border-line bg-foam/80 px-4 text-base font-light tracking-normal text-ink normal-case outline-none transition focus:border-taupe"
              />
            </label>
          </div>

          <label className="grid gap-2 text-xs font-medium tracking-[0.12em] text-ink-soft uppercase">
            Notes
            <textarea
              name="notes"
              rows={3}
              placeholder="Anything helpful before your visit"
              className="border border-line bg-foam/80 px-4 py-3 text-base font-light tracking-normal text-ink normal-case outline-none transition focus:border-taupe"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit">Send enquiry</Button>
            <a
              href={mailtoHref}
              className="text-sm text-brown underline-offset-4 hover:underline"
            >
              Or email {siteConfig.contact.email}
            </a>
          </div>

          <p className="min-h-6 text-sm text-brown" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </Reveal>
    </section>
  );
}
