import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import aboutDining from "@/assets/about-dining.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projOffice from "@/assets/proj-office.jpg";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Infinite Space Interiors" },
      { name: "description", content: "A decade of designing elegant, considered interiors across India." },
      { property: "og:title", content: "About — Infinite Space" },
      { property: "og:description", content: "Our story, philosophy and craft." },
      { property: "og:image", content: aboutDining },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-20">
        <div className="absolute top-32 right-0 w-1/2 h-2/3 bg-sage-soft -z-10" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-deep">About Us</p>
              <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-balance">
                A studio of <em className="italic text-sage-deep">designers</em>, makers and dreamers.
              </h1>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <p className="text-muted-foreground leading-relaxed">
                We are a small, senior team — designers, project managers and craftspeople —
                quietly shaping some of the most distinctive interiors in the country.
                We believe great design should feel inevitable, never loud.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-6">
          <Reveal className="md:col-span-7"><img src={aboutDining} alt="Dining" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm" /></Reveal>
          <Reveal className="md:col-span-5 md:pt-20" delay={100}><img src={projBath} alt="Bath" loading="lazy" className="w-full aspect-[3/4] object-cover rounded-sm" /></Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-cream py-28 lg:py-40">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-deep">Philosophy</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl text-balance">
              "Design <em className="italic text-sage-deep">disappears</em> when it works.
              What remains is the way a space makes you feel."
            </h2>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            ["Restraint", "We edit relentlessly. Every element earns its place."],
            ["Craft", "Built by hands we know. Carpentry in our own workshop."],
            ["Honesty", "Real materials, honest pricing, no hidden surprises."],
            ["Care", "From first call to handover, you work with one team."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <p className="font-serif text-sage-deep text-xl">0{i + 1}</p>
              <h3 className="mt-6 font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAMILY BUSINESS — overlapping like reference */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <img src={projOffice} alt="Reception" loading="lazy" className="w-full aspect-[5/4] object-cover rounded-sm" />
            </Reveal>
            <Reveal delay={150}>
              <img src={projBath} alt="Bath detail" loading="lazy" className="hidden md:block absolute -bottom-12 -right-8 w-1/2 aspect-[3/4] object-cover rounded-sm shadow-2xl border-8 border-cream" />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-sage-deep">Family Run</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl text-balance">
                A family-run practice with a <em className="italic text-sage-deep">workshop</em> at heart.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Founded in 2013, Infinite Space remains family-led — which is why every project
                gets senior attention and our own carpenters' hands.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-7 py-3.5 text-sm hover:bg-sage-deep">
                Visit our studio <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
