import { About } from "@/components/About";
import { BookingCTA } from "@/components/BookingCTA";
import { BookingEnquiry } from "@/components/BookingEnquiry";
import { Experience } from "@/components/Experience";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Experience />
        <Testimonials />
        <FAQ />
        <BookingCTA />
        <BookingEnquiry />
      </main>
      <Footer />
    </>
  );
}
