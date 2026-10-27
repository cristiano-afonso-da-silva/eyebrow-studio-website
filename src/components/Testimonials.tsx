import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="section-shell py-[clamp(4.5rem,10vw,7.5rem)]">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow mb-4">Testimonials</p>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Kind words, beautiful brows.
        </h2>
        <div className="mt-12 border border-line bg-foam/45 px-8 py-14 md:px-14">
          <p className="font-display text-[1.55rem] leading-snug text-ink-soft italic md:text-[1.85rem]">
            “Client stories will appear here once Arché welcomes its first
            guests. We only share verified reviews.”
          </p>
          <p className="mt-8 text-sm tracking-[0.14em] text-taupe uppercase">
            Reviews coming soon
          </p>
        </div>
      </Reveal>
    </section>
  );
}
