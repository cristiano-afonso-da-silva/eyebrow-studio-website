import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-shell py-[clamp(4.5rem,10vw,7.5rem)]">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <figure className="overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Soft editorial portrait with natural makeup and defined features"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </Reveal>

        <Reveal delay={0.08} className="max-w-xl lg:justify-self-end">
          <p className="eyebrow mb-4">About Arché</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]">
            Beauty in every detail.
          </h2>
          <p className="mt-6 text-ink-soft">
            At Arché, we believe that beautiful brows are never one-size-fits-all.
            Every face tells a different story, and every brow deserves a
            thoughtful approach. Through precision, care, and an appreciation for
            natural beauty, we create results that feel effortlessly yours.
          </p>
          <a
            href="#experience"
            className="mt-8 inline-flex text-[0.95rem] font-medium text-brown underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            Discover Arché
          </a>
        </Reveal>
      </div>
    </section>
  );
}
