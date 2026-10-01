import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import aboutDining from "@/assets/about-dining.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projOffice from "@/assets/proj-office.jpg";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Infinite Space Interiors" },
      { name: "description", content: "Learn about Infinite Space Interiors, a premium interior design and turnkey contracting company with over 15 years of experience." },
      { property: "og:title", content: "About — Infinite Space" },
      { property: "og:description", content: "Our story, philosophy and craft." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-sage-soft pt-32 pb-16 lg:pt-40 lg:pb-20 section-wave section-wave-light">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-sage-deep">About Us</p>
              <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl text-balance">
                Premium interior design and turnkey contracting.
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-5 min-w-0">
            <Reveal delay={150}>
              <p className="text-muted-foreground leading-relaxed">
                Infinite Space Interiors is a premium interior design and turnkey contracting company with over 15 years of experience in transforming spaces into functional, refined and thoughtfully executed environments. We provide complete interior solutions combining design, quality craftsmanship and detailed project execution.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7"><img src={aboutDining} alt="Dining" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm" /></Reveal>
          <Reveal className="md:col-span-5 md:pt-20" delay={100}><img src={projBath} alt="Bath" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-sm" /></Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-charcoal text-cream py-20 lg:py-28 section-wave section-wave-light">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="eyebrow text-sage-deep">Philosophy</p>
               <h2 className="mt-6 font-serif text-4xl md:text-6xl uppercase font-extrabold leading-none text-balance">
              "Functional, refined and thoughtfully executed environments.
              Complete interior solutions from design to project execution."
            </h2>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 lg:py-28 bg-sage-soft section-wave section-wave-light">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            ["Residential Interiors", ""],
            ["Luxury Bungalows", ""],
            ["Hospitality Projects", ""],
            ["Office Interiors", ""],
            ["Retail Spaces", ""],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
               <p className="font-serif font-extrabold text-sage-deep text-3xl">0{i + 1}</p>
               <h3 className="mt-6 font-bold uppercase text-2xl">{t}</h3>
              {d && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>}
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAMILY BUSINESS — overlapping like reference */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <img src={projOffice} alt="Reception" loading="lazy" className="w-full aspect-[5/4] object-cover rounded-sm" />
            </Reveal>
            <Reveal delay={150}>
              <img src={projBath} alt="Bath detail" loading="lazy" className="hidden md:block absolute -bottom-12 right-0 w-1/2 aspect-[3/4] object-cover rounded-sm shadow-2xl border-8 border-cream" />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
               <p className="eyebrow text-sage-deep">About Infinite Space</p>
                <h2 className="mt-5 display-title text-4xl md:text-6xl text-balance break-words">
                  Complete interiors, thoughtfully executed.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                 Our complete interior solutions combine design, quality craftsmanship and detailed project execution.
              </p>
               <Button asChild className="mt-8 rounded-sm bg-sage-deep text-primary-foreground hover:bg-charcoal text-xs font-bold uppercase"><Link to="/contact">Visit our studio <ArrowUpRight size={16} /></Link></Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
