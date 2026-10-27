import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getBookingHref } from "@/lib/booking";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-line bg-beige/35 py-[clamp(4.5rem,10vw,7.5rem)]"
    >
      <div className="section-shell">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]">
            Designed around you.
          </h2>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <article className="group">
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-display text-[1.75rem] font-medium leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-ink-soft">
                      {service.duration} · {service.price}
                    </p>
                  </div>
                  <p className="mt-3 max-w-md text-ink-soft">
                    {service.description}
                  </p>
                  <Button
                    href={getBookingHref(service.id)}
                    variant="text"
                    className="mt-5"
                  >
                    Book This Service
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
