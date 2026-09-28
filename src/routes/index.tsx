import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, ArrowLeft, Check, Home as HomeIcon, Building2, PanelsTopLeft, Hammer, Quote, Wrench, Zap, Droplets, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";
import heroLiving from "@/assets/hero-living.jpg";
import projKitchen from "@/assets/proj-kitchen.jpg";
import projBedroom from "@/assets/proj-bedroom.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projRetail from "@/assets/proj-retail.jpg";
import projOffice from "@/assets/proj-office.jpg";
import projWardrobe from "@/assets/proj-wardrobe.jpg";
import aboutDining from "@/assets/about-dining.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Infinite Space Interiors — Designing Elegant Spaces" },
    { name: "description", content: "Premium interior design and turnkey contracting by Infinite Space Interiors." },
    { property: "og:title", content: "Infinite Space Interiors — Designing Elegant Spaces" },
    { property: "og:description", content: "Premium interior design and turnkey contracting by Infinite Space Interiors." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: Home,
});

const services = [
  { num: "01", title: "Furniture Work", desc: "", icon: Hammer },
  { num: "02", title: "Civil Work", desc: "", icon: Wrench },
  { num: "03", title: "Electrical Work", desc: "", icon: Zap },
  { num: "04", title: "Plumbing Work", desc: "", icon: Droplets },
  { num: "05", title: "POP & Gypsum", desc: "", icon: PanelsTopLeft },
  { num: "06", title: "Paint & Polish", desc: "", icon: Paintbrush },
  { num: "07", title: "Modular Furniture", desc: "", icon: HomeIcon },
  { num: "08", title: "Turnkey Interiors", desc: "", icon: Building2 },
];
const projects = [
  { img: projKitchen, title: "Residential Interiors", cat: "Residential Interiors" },
  { img: projOffice, title: "Luxury Bungalows", cat: "Luxury Bungalows" },
  { img: projBath, title: "Hospitality Projects", cat: "Hospitality Projects" },
  { img: projRetail, title: "Office Interiors", cat: "Office Interiors" },
  { img: projBedroom, title: "Retail Spaces", cat: "Retail Spaces" },
  { img: projWardrobe, title: "Modular Furniture", cat: "Modular Furniture" },
];
const process = [
  { n: "01", t: "Site Visit", d: "" },
  { n: "02", t: "BOQ & Quotation", d: "" },
  { n: "03", t: "Design Approval", d: "" },
  { n: "04", t: "Material Selection", d: "" },
  { n: "05", t: "Production", d: "" },
  { n: "06", t: "Site Execution", d: "" },
  { n: "07", t: "Installation", d: "" },
  { n: "08", t: "Final Handover", d: "" },
];

function Counter({ to, suffix = "+" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(to);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n}{suffix}</span>;
}

function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const next = () => setProjectIndex((i) => (i + 1) % projects.length);
  const prev = () => setProjectIndex((i) => (i - 1 + projects.length) % projects.length);
  const shownProjects = Array.from({ length: 3 }, (_, i) => projects[(projectIndex + i) % projects.length]);

  return <div className="overflow-hidden">
    <section className="relative min-h-[560px] lg:min-h-[700px] h-[82svh] lg:h-[88svh] max-h-[920px] bg-charcoal text-cream section-wave section-wave-light">
      <img src={heroLiving} alt="Elegant living room designed by Infinite Space Interiors" className="absolute inset-0 w-full h-full object-cover object-center opacity-65" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/65 to-charcoal/20" />
      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 pt-32 pb-20 flex flex-col justify-center">
        <div className="max-w-3xl">
          <p className="eyebrow text-cream/85">Design • Build • Transform</p>
          <h1 className="mt-5 display-title text-[3.8rem] sm:text-[5rem] md:text-[6.7rem] lg:text-[7.5rem] max-w-[900px]">Designing elegant spaces that inspire living.</h1>
           <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-cream/80">Premium Interior Design & Turnkey Contracting</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-11 rounded-sm bg-sage text-primary-foreground hover:bg-cream hover:text-charcoal px-5 text-xs font-extrabold uppercase"><Link to="/contact">Start a Project <ArrowUpRight size={16}/></Link></Button>
            <Button asChild variant="outline" className="h-11 rounded-sm border-cream/55 bg-transparent text-cream hover:bg-cream hover:text-charcoal px-5 text-xs font-extrabold uppercase"><Link to="/projects">View Portfolio <ArrowUpRight size={16}/></Link></Button>
          </div>
        </div>
        <div className="hidden lg:block absolute right-6 xl:right-0 bottom-28 w-[250px] bg-card text-card-foreground p-3 shadow-xl rounded-sm rotate-[2deg]">
           <img src={projKitchen} alt="Residential interior project" className="w-full h-36 object-cover" />
           <div className="flex items-center justify-between pt-3"><div><p className="text-[10px] font-bold uppercase text-muted-foreground">Selected Work</p><p className="font-serif font-bold uppercase text-xl">Residential Interiors</p></div><ArrowUpRight size={18} className="text-sage-deep"/></div>
        </div>
        <div className="absolute bottom-9 left-6 right-6 mx-auto max-w-7xl hidden md:flex items-center gap-3 text-xs font-bold uppercase text-cream/70"><span className="h-px w-10 bg-sage"/>Interior Design & Turnkey Contracting</div>
      </div>
    </section>

    <section className="py-20 lg:py-28 section-wave section-wave-blush">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[.75fr_1.6fr] gap-10 lg:gap-20">
        <Reveal><div><p className="eyebrow text-sage-deep">About the Studio</p><p className="mt-7 max-w-xs text-sm leading-relaxed text-muted-foreground">Infinite Space Interiors is a premium interior design and turnkey contracting company with over 15 years of experience in transforming spaces into functional, refined and thoughtfully executed environments. We provide complete interior solutions combining design, quality craftsmanship and detailed project execution.</p><Button asChild variant="outline" className="mt-7 rounded-sm border-sage-deep text-sage-deep hover:bg-sage-deep hover:text-primary-foreground text-xs uppercase font-extrabold"><Link to="/about">Discover our story <ArrowUpRight size={15}/></Link></Button></div></Reveal>
        <Reveal><h2 className="font-serif uppercase text-[2.5rem] md:text-[3.8rem] lg:text-[4.2rem] font-extrabold leading-[.98] max-w-4xl">We design spaces with soul, <span className="text-muted-foreground">built to last.</span></h2></Reveal>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-0 border-t border-border">
        {[[70,"Projects completed"],[50,"Happy clients"],[15,"Years experience"],[20,"Team members"]].map(([n,label]) => <div key={label} className="pt-8 pb-3 px-4 first:pl-0 lg:border-r last:border-r-0 border-border"><p className="font-serif text-5xl lg:text-6xl font-extrabold"><Counter to={n as number}/><span className="text-sage"> </span></p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>)}
      </div>
    </section>

    <section className="bg-sage-soft py-20 lg:py-28 section-wave section-wave-light">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-9"><div><p className="eyebrow text-sage-deep">What We Do</p><h2 className="mt-4 font-serif text-5xl md:text-6xl uppercase">A full studio for every vision.</h2></div><Button asChild className="rounded-sm bg-sage text-primary-foreground hover:bg-charcoal uppercase text-xs font-extrabold"><Link to="/services">All Services <ArrowUpRight size={16}/></Link></Button></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map(s => <Reveal key={s.num}><Link to="/services" className="group flex flex-col min-h-[205px] h-full border border-border bg-card/60 p-6 hover:bg-card hover:border-sage transition-colors rounded-sm"><div className="flex items-start justify-between"><s.icon size={30} strokeWidth={1.5} className="text-charcoal"/><span className="text-sage-deep font-serif text-2xl font-bold">{s.num}</span></div><h3 className="mt-6 text-2xl uppercase">{s.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground max-w-sm">{s.desc}</p><span className="mt-4 inline-flex items-center gap-1 text-[10px] uppercase font-extrabold group-hover:text-sage-deep">Explore <ArrowUpRight size={13}/></span></Link></Reveal>)}
        </div>
         <div className="mt-12 grid lg:grid-cols-2 bg-card shadow-sm rounded-sm overflow-hidden">
          <img src={projKitchen} alt="Custom kitchen craftsmanship" loading="lazy" className="w-full h-full min-h-[280px] max-h-[420px] object-cover" />
           <div className="p-7 lg:p-12 flex flex-col justify-center"><p className="eyebrow text-sage-deep">Why Choose Us</p><h3 className="mt-4 text-4xl uppercase">Design.<br/>Craftsmanship.<br/>Execution.</h3><div className="mt-6 space-y-4">{[["Complete interior solutions", ""],["Quality craftsmanship", ""],["Detailed project execution", ""]].map(([t,d]) => <div key={t} className="flex gap-3"><Check size={17} className="mt-0.5 text-sage-deep shrink-0"/><div><p className="text-xs font-extrabold uppercase">{t}</p>{d && <p className="text-xs mt-1 text-muted-foreground">{d}</p>}</div></div>)}</div></div>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 section-wave section-wave-dark">
      <div className="mx-auto max-w-7xl px-6"><div className="flex items-end justify-between gap-4 mb-9"><div><p className="eyebrow text-sage-deep">Selected Work</p><h2 className="mt-4 text-5xl md:text-6xl uppercase">Showcase of our projects.</h2></div><div className="hidden sm:flex gap-2"><Button variant="outline" size="icon" className="rounded-sm" onClick={prev} aria-label="Previous projects"><ArrowLeft/></Button><Button size="icon" className="rounded-sm bg-sage hover:bg-charcoal" onClick={next} aria-label="Next projects"><ArrowRight/></Button></div></div>
        <div className="grid md:grid-cols-3 gap-4">{shownProjects.map(p => <Link to="/projects" key={p.title} className="group block"><div className="overflow-hidden hover-zoom rounded-sm"><img src={p.img} alt={p.title} loading="lazy" className="w-full aspect-[4/3] object-cover"/></div><div className="flex justify-between items-center mt-3"><div><h3 className="uppercase text-xl">{p.title}</h3><p className="text-xs text-muted-foreground mt-1">{p.cat}</p></div><ArrowUpRight className="text-sage-deep" size={20}/></div></Link>)}</div>
        <div className="mt-6 flex sm:hidden justify-between"><Button variant="outline" size="icon" onClick={prev} aria-label="Previous projects"><ArrowLeft/></Button><Button size="icon" onClick={next} aria-label="Next projects"><ArrowRight/></Button></div>
        <Button asChild variant="outline" className="mt-8 rounded-sm uppercase text-xs font-extrabold border-sage-deep text-sage-deep hover:bg-sage-deep hover:text-primary-foreground"><Link to="/projects">View all projects <ArrowUpRight size={15}/></Link></Button>
      </div>
    </section>

    <section className="bg-charcoal text-cream py-20 lg:py-28 section-wave section-wave-light">
         <div className="mx-auto max-w-7xl px-6"><div className="flex justify-between items-end gap-6 mb-9"><div><p className="eyebrow text-cream/75">Client Testimonials</p><h2 className="mt-4 text-5xl md:text-6xl uppercase">Words from our clients.</h2></div></div>
         <div className="grid lg:grid-cols-[.8fr_1fr_1.1fr] gap-3 min-h-[310px]">
           <div className="bg-sage p-7 flex flex-col justify-between text-primary-foreground"><Quote size={36}/><div><h3 className="text-3xl uppercase">Client testimonials</h3><p className="mt-3 text-xs leading-relaxed max-w-sm">Approved client feedback will be shared here.</p><Button asChild variant="outline" className="mt-6 rounded-sm border-primary-foreground text-primary-foreground bg-transparent hover:bg-cream hover:text-charcoal uppercase text-xs font-extrabold"><Link to="/testimonials">Testimonials <ArrowUpRight size={15}/></Link></Button></div></div>
           <div className="relative min-h-[220px]"><img src={aboutDining} alt="Designed dining space" loading="lazy" className="w-full h-full absolute inset-0 object-cover"/><div className="absolute bottom-0 right-0 bg-card text-card-foreground px-5 py-4 flex gap-6"><div><p className="font-serif text-3xl font-bold"><Counter to={70}/></p><p className="text-[10px] text-muted-foreground">Projects</p></div><div><p className="font-serif text-3xl font-bold"><Counter to={50}/></p><p className="text-[10px] text-muted-foreground">Clients</p></div></div></div>
           <div className="bg-card text-card-foreground p-7 flex flex-col justify-center"><p className="text-base leading-relaxed">Client testimonials</p><p className="mt-2 text-xs text-muted-foreground">Approved client feedback will be shared here.</p></div>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-background section-wave section-wave-blush"><div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-stretch"><div className="bg-sage-soft p-7 lg:p-12"><p className="eyebrow text-sage-deep">How We Work</p><h2 className="mt-4 text-5xl md:text-6xl uppercase">A clear path from vision to handover.</h2><div className="mt-9 space-y-2">{process.map(p => <div key={p.n} className="flex items-center gap-4 border-b border-border py-3"><span className="font-serif text-2xl text-sage-deep font-bold">{p.n}</span><div><h3 className="uppercase text-xl">{p.t}</h3></div></div>)}</div></div><div className="relative min-h-[400px]"><img src={projOffice} alt="Finished interior project" loading="lazy" className="absolute inset-0 w-full h-full object-cover"/><div className="absolute bottom-5 left-5 bg-card text-card-foreground p-5"><p className="font-serif text-4xl font-bold"><Counter to={70}/></p><p className="text-xs">Projects completed</p></div></div></div></section>

    <section className="bg-sage-soft pt-20 pb-0"><div className="mx-auto max-w-7xl px-6"><div className="text-center"><p className="eyebrow text-sage-deep">Let’s Begin</p><h2 className="mt-4 text-5xl md:text-6xl uppercase">Have a space in mind?</h2></div><div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">{[heroLiving, projKitchen, projBedroom, projRetail].map((img,i) => <img key={img} src={img} alt={["Living room", "Kitchen", "Bedroom", "Retail interior"][i]} loading="lazy" className="aspect-[4/3] w-full object-cover rounded-sm"/>)}</div><div className="relative mt-10 overflow-hidden bg-charcoal text-cream text-center py-14 px-6"><img src={heroLiving} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20"/><div className="relative"><h2 className="text-4xl md:text-5xl uppercase">Have a space in mind? Let's begin.</h2><p className="mt-3 text-sm text-cream/70">Tell us what you're dreaming of. We would love to hear about it.</p><Button asChild className="mt-6 bg-sage hover:bg-cream hover:text-charcoal rounded-sm uppercase text-xs font-extrabold"><Link to="/contact">Start your project <ArrowUpRight size={16}/></Link></Button></div></div></div></section>
  </div>;
}
