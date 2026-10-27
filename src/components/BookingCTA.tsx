import Image from "next/image";
import { getBookingHref } from "@/lib/booking";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden py-[clamp(5rem,12vw,8rem)]">
      <div className="absolute inset-0">
        <Image
          src="/images/cta.jpg"
          alt="Soft beauty textures in warm editorial light"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>

      <Reveal className="section-shell relative z-10 max-w-2xl text-center text-foam md:mx-auto">
        <p className="eyebrow mb-4 text-foam/70">Begin</p>
        <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.02em]">
          Your best brows begin here.
        </h2>
        <p className="mt-5 text-foam/80">
          Let&apos;s create something beautifully you.
        </p>
        <div className="mt-9 flex justify-center">
          <Button href={getBookingHref()} variant="light">
            Book Your Appointment
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
