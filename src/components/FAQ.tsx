"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-line bg-beige/30 py-[clamp(4.5rem,10vw,7.5rem)]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-medium leading-[1.12] tracking-[-0.02em]">
            A few helpful answers.
          </h2>
          <p className="mt-5 max-w-sm text-ink-soft">
            Practical details for your visit. Business-specific policies can be
            updated easily before launch.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="border-t border-line">
            {siteConfig.faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-display text-[1.25rem] leading-snug md:text-[1.4rem]">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`mt-2 text-taupe transition-transform duration-300 ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div className="faq-content" data-open={open}>
                    <div>
                      <p className="pb-5 pr-8 text-ink-soft">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
