"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? siteConfig.gallery : siteConfig.gallery.slice(0, 4);

  return (
    <section id="work" className="section-shell py-[clamp(4.5rem,10vw,7.5rem)]">
      <Reveal className="mb-10 max-w-xl md:mb-14">
        <p className="eyebrow mb-4">Our Work</p>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          Every brow, uniquely yours.
        </h2>
        <p className="mt-5 text-ink-soft">
          Atmospheric editorial photography for now — real client before-and-after
          work will live here as Arché grows. These images are not customer results.
        </p>
      </Reveal>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <Reveal key={item.src} delay={index * 0.04} className="mb-4 break-inside-avoid">
            <figure className="overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={item.span === "wide" ? 700 : item.span === "tall" ? 1200 : 900}
                className={`w-full object-cover ${
                  item.span === "wide"
                    ? "aspect-[5/4]"
                    : item.span === "tall"
                      ? "aspect-[3/4]"
                      : "aspect-square"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <Button
          variant="outline"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "View More"}
        </Button>
      </Reveal>
    </section>
  );
}
