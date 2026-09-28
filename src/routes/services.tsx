import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projKitchen from "@/assets/proj-kitchen.jpg";
import projBedroom from "@/assets/proj-bedroom.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projRetail from "@/assets/proj-retail.jpg";
import projOffice from "@/assets/proj-office.jpg";
import projWardrobe from "@/assets/proj-wardrobe.jpg";
import aboutDining from "@/assets/about-dining.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Infinite Space Interiors" },
      { name: "description", content: "Furniture, civil, electrical, plumbing, POP and gypsum, paint, modular furniture and turnkey interiors." },
      { property: "og:title", content: "Our Services — Infinite Space" },
      { property: "og:description", content: "End-to-end interior design and turnkey contracting." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const items = [
  { t: "Furniture Work", img: projBedroom },
  { t: "Civil Work", img: projOffice },
  { t: "Electrical Work", img: projRetail },
  { t: "Plumbing Work", img: aboutDining },
  { t: "POP & Gypsum", img: projBath },
  { t: "Paint & Polish", img: projKitchen },
  { t: "Modular Furniture", img: projWardrobe },
  { t: "Turnkey Interiors", img: projOffice },
];

function Services() {
  return (
    <div>
       <section className="bg-sage-soft pt-32 pb-16 lg:pt-40 lg:pb-20 section-wave section-wave-light">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
             <p className="eyebrow text-sage-deep">Services</p>
             <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl text-balance max-w-5xl">
               One studio. Every discipline of interior.
            </h1>
          </Reveal>
        </div>
      </section>

       <section className="py-20 lg:py-28">
         <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((s, i) => (
            <Reveal key={s.t}>
               <article className="group h-full border border-border bg-card rounded-sm overflow-hidden hover:border-sage transition-colors">
                 <div className="overflow-hidden hover-zoom"><img src={s.img} alt={s.t} loading="lazy" className="w-full aspect-[4/3] object-cover" /></div>
                  <div className="p-6"><p className="font-serif font-extrabold text-sage-deep text-2xl">{String(i + 1).padStart(2, "0")}</p><h3 className="mt-3 uppercase text-2xl">{s.t}</h3></div>
               </article>
            </Reveal>
          ))}
        </div>
      </section>

       <section className="bg-charcoal py-20 text-cream">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
           <h2 className="display-title text-4xl md:text-6xl lg:text-7xl text-balance max-w-3xl">
             Tell us about your space.
          </h2>
           <Button asChild className="rounded-sm bg-sage text-primary-foreground hover:bg-cream hover:text-charcoal text-xs font-bold uppercase"><Link to="/contact">Request a consultation <ArrowUpRight size={18} /></Link></Button>
        </div>
      </section>
    </div>
  );
}
