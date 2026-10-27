import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-line bg-cream/70 py-[clamp(4.5rem,10vw,7.5rem)]"
    >
      <div className="section-shell">
        <Reveal className="mb-12 max-w-xl md:mb-16">
          <p className="eyebrow mb-4">The Arché Experience</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]">
            A little time, just for you.
          </h2>
        </Reveal>

        <ol className="grid gap-0 md:grid-cols-3">
          {siteConfig.experience.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.08}>
              <li
                className={`border-line py-8 md:px-8 md:py-0 ${
                  index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                }`}
              >
                <p className="font-display text-5xl text-taupe/80 md:text-6xl">
                  {item.step}
                </p>
                <h3 className="mt-5 font-display text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xs text-ink-soft">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
