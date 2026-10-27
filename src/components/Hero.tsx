import Image from "next/image";
import { asset } from "@/lib/asset";
import { getBookingHref } from "@/lib/booking";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="hero-zoom absolute inset-0">
          <Image
            src={asset("/images/hero.jpg")}
            alt="Close editorial portrait focusing on soft facial features"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_22%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/35 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/30" />
      </div>

      <div className="section-shell relative z-10 w-full pb-16 pt-[calc(var(--header-h)+2rem)] md:pb-20">
        <div className="hero-copy max-w-xl text-foam md:max-w-2xl">
          <p className="eyebrow mb-5 text-foam/75">
            The art of natural beauty
          </p>
          <h1 className="font-display text-[clamp(2.8rem,8vw,5.4rem)] font-medium leading-[1.05] tracking-[-0.02em]">
            Beautifully shaped.
            <br />
            Naturally you.
          </h1>
          <p className="mt-6 max-w-md text-[1.05rem] font-light text-foam/82">
            Thoughtfully crafted brows that enhance your natural features and
            bring confidence to every expression.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={getBookingHref()} variant="light">
              Book an Appointment
            </Button>
            <Button href="#services" variant="ghost">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
