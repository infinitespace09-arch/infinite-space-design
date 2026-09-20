import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Sparkles, Check, Plus } from "lucide-react";
import heroLiving from "@/assets/hero-living.jpg";
import projKitchen from "@/assets/proj-kitchen.jpg";
import projBedroom from "@/assets/proj-bedroom.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projRetail from "@/assets/proj-retail.jpg";
import projOffice from "@/assets/proj-office.jpg";
import projWardrobe from "@/assets/proj-wardrobe.jpg";
import aboutDining from "@/assets/about-dining.jpg";
import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinite Space Interiors — Designing Elegant Spaces" },
      { name: "description", content: "Luxury residential, commercial & retail interiors crafted with creativity, functionality and precision." },
      { property: "og:title", content: "Infinite Space Interiors" },
      { property: "og:description", content: "Designing elegant spaces that inspire living." },
      { property: "og:image", content: heroLiving },
    ],
  }),
  component: Home,
});

const services = [
  { num: "01", title: "Residential Interiors", desc: "Homes shaped around your daily rituals — warm, considered, enduring." },
  { num: "02", title: "Commercial Interiors", desc: "Workplaces that focus the mind and elevate the brand." },
  { num: "03", title: "Retail Interiors", desc: "Stores designed as immersive brand journeys." },
  { num: "04", title: "Turnkey Projects", desc: "End-to-end delivery, from first sketch to final styling." },
  { num: "05", title: "Modular Kitchen", desc: "Bespoke kitchens balancing craft, function and beauty." },
  { num: "06", title: "Wardrobes & Carpentry", desc: "Custom millwork tailored to the millimeter." },
];

const projects = [
  { img: projKitchen, title: "Verdant Kitchen", cat: "Residential", h: "row-span-2" },
  { img: projOffice, title: "Walnut Reception", cat: "Commercial", h: "" },
  { img: projBath, title: "Marble Suite", cat: "Residential", h: "" },
  { img: projRetail, title: "Boutique Loft", cat: "Retail", h: "row-span-2" },
  { img: projBedroom, title: "Sage Bedroom", cat: "Residential", h: "" },
  { img: projWardrobe, title: "Emerald Wardrobe", cat: "Carpentry", h: "" },
];

const testimonials = [
  { name: "Aarav & Meera Kapoor", role: "Homeowners, Bengaluru", quote: "They translated a vague feeling into a home we never want to leave. Every corner has intent." },
  { name: "Studio Aera", role: "Boutique Owner", quote: "Our footfall doubled in the first quarter. The space tells our brand story without saying a word." },
  { name: "Rohan Mehta", role: "Founder, Northwind", quote: "Calm, precise, on time. Working with Infinite Space felt less like a project and more like a partnership." },
];

const process = [
  { n: "01", t: "Discovery", d: "Conversations to understand the way you live, work and dream." },
  { n: "02", t: "Concept", d: "Mood, material and spatial direction — clearly visualised." },
  { n: "03", t: "Design", d: "3D walkthroughs, detailed drawings, every finish chosen with care." },
  { n: "04", t: "Build", d: "Master craftspeople, daily QA, weekly reporting." },
  { n: "05", t: "Reveal", d: "Styled, photographed and handed over — ready to inhabit." },
];

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n}{suffix}</span>;
}

function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-sm bg-charcoal min-h-[650px] lg:min-h-[720px]">
            <div className="absolute inset-0 lg:left-[43%]">
              <img src={heroLiving} alt="Luxury living room interior" width={1600} height={1200} className="h-full w-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/55 to-transparent" />
            </div>
          <div className="relative z-10 grid min-h-[650px] lg:min-h-[720px] items-end lg:items-center lg:grid-cols-12 p-7 md:p-12 lg:p-16">
          <div className="lg:col-span-7 relative z-10 text-cream">
            <Reveal>
              <p className="eyebrow inline-flex items-center gap-2 text-sage-soft">
                <Sparkles size={14} /> Design • Build • Transform
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 display-title max-w-4xl text-balance">
                Designing elegant spaces that inspire living.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-lg text-cream/75 leading-relaxed">
                Luxury residential, commercial & retail interiors crafted with creativity,
                functionality and precision.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="group inline-flex items-center gap-2 rounded-sm bg-sage text-primary-foreground px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] hover:bg-cream hover:text-charcoal transition-colors">
                  Start a Project
                  <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
                </Link>
                <Link to="/projects" className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-cream hover:border-cream transition-colors">
                  View Portfolio
                </Link>
              </div>
            </Reveal>
          </div>
          </div>
          <div className="absolute bottom-7 right-7 hidden lg:flex items-center gap-3 bg-cream p-4 text-charcoal">
            <div className="h-10 w-10 rounded-full bg-sage flex items-center justify-center"><Plus size={18} /></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.1em]">12+ years</p><p className="text-[0.65rem] text-muted-foreground">crafting meaningful spaces</p></div>
          </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-cream overflow-hidden py-6">
        <div className="flex marquee-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-bold text-xl md:text-2xl uppercase tracking-[0.08em] text-charcoal/70">
              <span>Residential</span><span className="text-sage">✦</span>
              <span>Commercial</span><span className="text-sage">✦</span>
              <span>Retail</span><span className="text-sage">✦</span>
              <span>Turnkey</span><span className="text-sage">✦</span>
              <span>Modular Kitchens</span><span className="text-sage">✦</span>
              <span>Carpentry</span><span className="text-sage">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <Reveal>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage -z-10" />
              <img src={aboutDining} alt="Elegant dining interior" loading="lazy" width={1400} height={1400} className="w-full aspect-square object-cover rounded-sm" />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-sage-deep">About the Studio</p>
              <h2 className="mt-5 display-title text-4xl md:text-6xl lg:text-7xl text-balance">
                We design spaces with soul, built to last.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
                Infinite Space is a Bengaluru-based interior design and turnkey contracting
                studio. For over a decade we have shaped homes, workspaces and stores that feel
                quietly luxurious — disciplined in detail, generous in feeling.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                <div><p className="font-serif text-4xl text-sage-deep"><Counter to={250} /></p><p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Projects</p></div>
                <div><p className="font-serif text-4xl text-sage-deep"><Counter to={180} /></p><p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Clients</p></div>
                <div><p className="font-serif text-4xl text-sage-deep"><Counter to={12} /></p><p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Years</p></div>
              </div>
              <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-charcoal hover:text-sage-deep transition-colors group">
                Discover our story
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-20 lg:py-28 section-band mx-4 md:mx-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <p className="eyebrow text-sage-deep">What We Do</p>
              <h2 className="mt-4 display-title text-4xl md:text-6xl lg:text-7xl max-w-3xl text-balance">
                A full studio for every vision.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm hover:text-sage-deep">
                All services <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <Reveal key={s.num}>
                <div className="group bg-cream p-10 h-full hover:bg-background transition-colors cursor-pointer">
                  <div className="flex items-start justify-between">
                   <span className="font-bold text-sage-deep text-sm">{s.num}</span>
                    <ArrowUpRight size={18} className="text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-sage-deep" />
                  </div>
                   <h3 className="mt-12 text-xl md:text-2xl font-extrabold uppercase">{s.title}</h3>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 lg:py-28 bg-background">
        <div className="absolute inset-y-0 right-0 w-2/3 bg-sage-soft -z-10" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <img src={projKitchen} alt="Kitchen craftsmanship" loading="lazy" width={1200} height={1500} className="w-full aspect-[4/5] object-cover rounded-sm shadow-xl" />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-sage-deep">Why Choose Us</p>
              <h2 className="mt-5 display-title text-4xl md:text-6xl lg:text-7xl text-balance">
                Considered design. Honest craft.
              </h2>
              <div className="mt-10 space-y-6">
                {[
                  ["Single point of accountability", "One studio, one team — design, materials, execution and styling."],
                  ["Transparent timelines & pricing", "Fixed-scope quotes and weekly progress reports."],
                  ["In-house workshop", "Bespoke carpentry built by our craftspeople, not subcontracted."],
                ].map(([t, d]) => (
                  <div key={t} className="flex gap-5">
                    <span className="h-px w-8 bg-sage-deep mt-3 shrink-0" />
                    <div>
                      <h4 className="font-bold uppercase text-sm tracking-[0.08em]">{t}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-charcoal text-cream py-20 section-band mx-4 md:mx-6">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            [20, "+", "Years of experience"],
            [250, "+", "Projects delivered"],
            [180, "+", "Happy clients"],
            [40, "+", "Awards & features"],
          ].map(([n, s, label]) => (
            <Reveal key={label as string}>
             <p className="text-5xl md:text-6xl font-extrabold text-sage"><Counter to={n as number} suffix={s as string} /></p>
             <p className="mt-3 eyebrow text-cream/60">{label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS MASONRY */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <p className="eyebrow text-sage-deep">Selected Work</p>
              <h2 className="mt-4 display-title text-4xl md:text-6xl lg:text-7xl">
                Showcase of our projects.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm hover:text-sage-deep">
                View all <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[280px] gap-4">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className={`${p.h} group relative overflow-hidden rounded-sm hover-zoom`}>
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <p className="text-cream/70 text-xs tracking-widest uppercase">{p.cat}</p>
                  <h3 className="font-serif text-cream text-2xl">{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream py-20 lg:py-28 relative overflow-hidden section-band mx-4 md:mx-6">
        <div className="absolute top-10 left-10 font-serif text-[12rem] leading-none text-sage/30 select-none">"</div>
        <div className="mx-auto max-w-4xl px-6 text-center relative">
          <Reveal>
             <p className="eyebrow text-sage-deep">Kind Words</p>
             <h2 className="mt-4 display-title text-4xl md:text-6xl">From the people who live in them.</h2>
          </Reveal>
          <div className="mt-16 min-h-[200px]">
            <Reveal key={active}>
               <p className="font-serif text-2xl md:text-3xl text-charcoal/90 leading-snug text-balance">
                "{testimonials[active].quote}"
              </p>
              <p className="mt-8 font-serif text-lg">{testimonials[active].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[active].role}</p>
            </Reveal>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 transition-all rounded-full ${i === active ? "w-10 bg-sage-deep" : "w-3 bg-charcoal/20"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
             <p className="eyebrow text-sage-deep">How We Work</p>
             <h2 className="mt-4 display-title text-4xl md:text-6xl lg:text-7xl max-w-4xl">
               A clear path from vision to keys-in-hand.
            </h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {process.map((p) => (
              <Reveal key={p.n}>
                <div className="bg-background p-8 h-full">
                   <p className="font-bold text-sage-deep text-sm">{p.n}</p>
                   <h4 className="mt-8 font-bold uppercase text-sm tracking-[0.1em]">{p.t}</h4>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-20 bg-sage section-band mx-4 md:mx-6 mb-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <Reveal>
             <h2 className="display-title text-4xl md:text-6xl lg:text-7xl text-charcoal text-balance max-w-3xl">
               Have a space in mind? Let's begin.
            </h2>
          </Reveal>
          <Reveal delay={100}>
             <Link to="/contact" className="inline-flex items-center gap-3 rounded-sm bg-charcoal text-cream px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] hover:bg-sage-deep transition-colors">
              Start your project <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
