import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import projKitchen from "@/assets/proj-kitchen.jpg";
import projBedroom from "@/assets/proj-bedroom.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projRetail from "@/assets/proj-retail.jpg";
import projOffice from "@/assets/proj-office.jpg";
import projWardrobe from "@/assets/proj-wardrobe.jpg";
import aboutDining from "@/assets/about-dining.jpg";
import heroLiving from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Infinite Space Interiors" },
      { name: "description", content: "A selected gallery of residential, commercial and retail interiors." },
      { property: "og:title", content: "Projects Gallery — Infinite Space" },
      { property: "og:description", content: "Selected work from our studio." },
      { property: "og:image", content: heroLiving },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const all = [
  { img: heroLiving, t: "Arched Living Room", c: "Residential", loc: "Bengaluru" },
  { img: projKitchen, t: "Verdant Kitchen", c: "Residential", loc: "Mumbai" },
  { img: projOffice, t: "Walnut Reception", c: "Commercial", loc: "Hyderabad" },
  { img: projBath, t: "Marble Suite", c: "Residential", loc: "Bengaluru" },
  { img: projRetail, t: "Boutique Loft", c: "Retail", loc: "Pune" },
  { img: projBedroom, t: "Sage Bedroom", c: "Residential", loc: "Goa" },
  { img: projWardrobe, t: "Emerald Wardrobe", c: "Carpentry", loc: "Bengaluru" },
  { img: aboutDining, t: "Sculpted Dining", c: "Residential", loc: "Delhi" },
];
const filters = ["All", "Residential", "Commercial", "Retail", "Carpentry"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? all : all.filter((p) => p.c === filter);

  return (
    <div>
       <section className="pt-32 pb-12 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
             <p className="eyebrow text-sage-deep">Projects Gallery</p>
             <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl max-w-5xl text-balance">
               Spaces we've brought to life.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                   className={`px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-[0.1em] border transition-colors ${
                    filter === f
                      ? "bg-charcoal text-cream border-charcoal"
                      : "border-border text-muted-foreground hover:border-charcoal hover:text-charcoal"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

       <section className="pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <Reveal key={p.t + i} delay={i * 50}>
              <div className={`group ${i % 5 === 0 ? "sm:col-span-2" : ""}`}>
                <div className="overflow-hidden rounded-sm hover-zoom">
                  <img src={p.img} alt={p.t} loading="lazy" className={`w-full object-cover ${i % 5 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`} />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                   <h3 className="font-bold uppercase text-lg">{p.t}</h3>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground">{p.loc}</p>
                </div>
                <p className="text-sm text-sage-deep mt-1">{p.c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
