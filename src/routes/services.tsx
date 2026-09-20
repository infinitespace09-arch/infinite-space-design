import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
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
      { name: "description", content: "Residential, commercial, retail, turnkey, modular kitchens, wardrobes, carpentry and more." },
      { property: "og:title", content: "Our Services — Infinite Space" },
      { property: "og:description", content: "End-to-end interior design and turnkey contracting." },
      { property: "og:image", content: projKitchen },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const items = [
  { t: "Residential Interiors", d: "Homes shaped around the way you actually live — from layout to last cushion.", img: projBedroom },
  { t: "Commercial Interiors", d: "Workspaces that focus the mind and embody the brand.", img: projOffice },
  { t: "Retail Interiors", d: "Stores designed as immersive brand journeys.", img: projRetail },
  { t: "Turnkey Projects", d: "Single-point delivery, from first sketch to final styling.", img: aboutDining },
  { t: "Modular Kitchen", d: "Bespoke kitchens balancing craft, function and beauty.", img: projKitchen },
  { t: "Wardrobes", d: "Custom wardrobes tailored to the millimeter, built in our workshop.", img: projWardrobe },
  { t: "False Ceiling", d: "Architectural ceilings that quietly shape light and proportion.", img: projBath },
  { t: "Furniture & Custom Carpentry", d: "Heirloom-quality millwork made by hands we know.", img: projWardrobe },
  { t: "Renovation & Space Planning", d: "Reimagine existing homes and offices for how you live today.", img: projOffice },
];

function Services() {
  return (
    <div>
       <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
             <p className="eyebrow text-sage-deep">Services</p>
             <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl text-balance max-w-5xl">
               One studio. Every discipline of interior.
            </h1>
          </Reveal>
        </div>
      </section>

       <section className="pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 space-y-2">
          {items.map((s, i) => (
            <Reveal key={s.t}>
              <div className="group grid md:grid-cols-12 gap-8 items-center border-t border-border py-10 hover:bg-cream/60 transition-colors -mx-6 px-6">
                 <p className="md:col-span-1 font-bold text-sage-deep text-sm">{String(i + 1).padStart(2, "0")}</p>
                 <h3 className="md:col-span-4 font-bold uppercase text-xl md:text-2xl">{s.t}</h3>
                <p className="md:col-span-4 text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                <div className="md:col-span-3 overflow-hidden rounded-sm hover-zoom">
                  <img src={s.img} alt={s.t} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

       <section className="bg-sage py-20 section-band mx-4 md:mx-6 mb-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
           <h2 className="display-title text-4xl md:text-6xl lg:text-7xl text-charcoal text-balance max-w-3xl">
             Tell us about your space.
          </h2>
           <Link to="/contact" className="inline-flex items-center gap-3 rounded-sm bg-charcoal text-cream px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] hover:bg-sage-deep">
            Request a consultation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
