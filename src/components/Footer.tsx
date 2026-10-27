import { CopyrightYear } from "@/components/CopyrightYear";
import { siteConfig } from "@/config/site";
import { getBookingHref } from "@/lib/booking";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory">
      <div className="section-shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl tracking-[0.04em]">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-sm text-ink-soft">
              Modern brow artistry rooted in natural beauty, precision, and
              effortless confidence.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-3 text-ink-soft">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={getBookingHref()} className="hover:text-ink">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Visit</p>
            <address className="space-y-3 not-italic text-ink-soft">
              <p>
                {siteConfig.location.line1}
                <br />
                {siteConfig.location.line2}
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-ink"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  Instagram {siteConfig.social.instagramHandle}
                </a>
              </p>
              <ul className="space-y-1 pt-2">
                {siteConfig.hours.map((item) => (
                  <li key={item.day}>
                    {item.day}: {item.time}
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>

        <hr className="divider my-10" />

        <div className="flex flex-col gap-3 text-sm text-ink-soft md:flex-row md:items-center md:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.legalName}. All rights reserved.
          </p>
          <p>{siteConfig.location.note}</p>
        </div>
      </div>
    </footer>
  );
}
