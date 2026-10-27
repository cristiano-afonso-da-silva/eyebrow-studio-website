"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { getBookingHref } from "@/lib/booking";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-ivory/90 text-ink backdrop-blur-md">
      <div className="section-shell flex min-h-[var(--header-h)] items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-[1.65rem] leading-none tracking-[0.04em]"
          onClick={close}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.92rem] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <Button
            href={getBookingHref()}
            variant="outline"
            className="min-h-10 px-4 text-[0.88rem]"
          >
            Book Now
          </Button>
        </nav>

        <button
          type="button"
          className="relative grid h-10 w-10 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-ivory px-[1.25rem] pb-6 pt-2 text-ink lg:hidden"
      >
        <nav className="flex flex-col" aria-label="Mobile">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-line py-4 text-lg"
            >
              {item.label}
            </a>
          ))}
          <Button
            href={getBookingHref()}
            className="mt-5 w-full"
            onClick={close}
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
