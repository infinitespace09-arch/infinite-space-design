import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import projKitchen from "@/assets/proj-kitchen.jpg";
import projBedroom from "@/assets/proj-bedroom.jpg";
import projBath from "@/assets/proj-bath.jpg";
import projRetail from "@/assets/proj-retail.jpg";
import projOffice from "@/assets/proj-office.jpg";
import projWardrobe from "@/assets/proj-wardrobe.jpg";
import aboutDining from "@/assets/about-dining.jpg";
import heroLiving from "@/assets/hero-living.jpg";
import toniGuyInteriorOneAsset from "@/assets/toni-guy-andheri-interior-1.jpg.asset.json";
import toniGuyInteriorTwoAsset from "@/assets/toni-guy-andheri-interior-2.jpg.asset.json";
import toniGuyExteriorAsset from "@/assets/toni-guy-andheri-exterior.jpg.asset.json";
import anilBhaiLivingOneAsset from "@/assets/anil-bhai-santacruz-living-1.jpg.asset.json";
import anilBhaiTvUnitAsset from "@/assets/anil-bhai-santacruz-tv-unit.jpg.asset.json";
import anilBhaiLivingTwoAsset from "@/assets/anil-bhai-santacruz-living-2.jpg.asset.json";
import anilBhaiBedroomAsset from "@/assets/anil-bhai-santacruz-bedroom.jpg.asset.json";
import kamalJainWa0023 from "@/assets/kamal-jain-worli-0413-wa0023.jpg.asset.json";
import kamalJainWa0026 from "@/assets/kamal-jain-worli-0413-wa0026.jpg.asset.json";
import kamalJainWa0027 from "@/assets/kamal-jain-worli-0413-wa0027.jpg.asset.json";
import kamalJainWa0033 from "@/assets/kamal-jain-worli-0413-wa0033.jpg.asset.json";
import kamalJainWa0036 from "@/assets/kamal-jain-worli-0413-wa0036.jpg.asset.json";
import kamalJainWa0047 from "@/assets/kamal-jain-worli-0716-wa0047.jpg.asset.json";
import kamalJainWa0049 from "@/assets/kamal-jain-worli-0716-wa0049.jpg.asset.json";
import kamalJainWa0053 from "@/assets/kamal-jain-worli-0716-wa0053.jpg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Infinite Space Interiors" },
      { name: "description", content: "A selected gallery of residential, commercial and retail interiors." },
      { property: "og:title", content: "Projects Gallery — Infinite Space" },
      { property: "og:description", content: "Selected work from our studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projects,
});

const all = [
  { img: kamalJainWa0033, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0036, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0023, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0026, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0027, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0047, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0049, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: kamalJainWa0053, t: "Kamal Jain — Worli", c: "Residential Interiors", loc: "Worli" },
  { img: anilBhaiLivingOneAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: anilBhaiTvUnitAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: anilBhaiLivingTwoAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: anilBhaiBedroomAsset.url, t: "Anil Bhai — Santacruz", c: "Residential Interiors", loc: "Santacruz" },
  { img: toniGuyExteriorAsset.url, t: "TONI&GUY Salon — Andheri", c: "Retail Spaces", loc: "Andheri" },
  { img: toniGuyInteriorOneAsset.url, t: "TONI&GUY Salon — Andheri", c: "Retail Spaces", loc: "Andheri" },
  { img: toniGuyInteriorTwoAsset.url, t: "TONI&GUY Salon — Andheri", c: "Retail Spaces", loc: "Andheri" },
  { img: heroLiving, t: "Residential Interiors", c: "Residential Interiors", loc: "" },
  { img: projKitchen, t: "Luxury Bungalows", c: "Luxury Bungalows", loc: "" },
  { img: projOffice, t: "Hospitality Projects", c: "Hospitality Projects", loc: "" },
  { img: projBath, t: "Office Interiors", c: "Office Interiors", loc: "" },
  { img: projRetail, t: "Retail Spaces", c: "Retail Spaces", loc: "" },
  { img: projBedroom, t: "Turnkey Interiors", c: "Turnkey Interiors", loc: "" },
  { img: projWardrobe, t: "Modular Furniture", c: "Modular Furniture", loc: "" },
  { img: aboutDining, t: "Furniture Work", c: "Furniture Work", loc: "" },
];
const filters = ["All", "Residential Interiors", "Luxury Bungalows", "Hospitality Projects", "Office Interiors", "Retail Spaces", "Turnkey Interiors", "Modular Furniture", "Furniture Work"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? all : all.filter((p) => p.c === filter);

  return (
    <div>
       <section className="bg-sage-soft pt-32 pb-12 lg:pt-40 section-wave section-wave-light">
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
                 <Button
                  key={f}
                  onClick={() => setFilter(f)}
                    variant="outline"
                    aria-pressed={filter === f}
                    className={`px-5 py-2 rounded-sm text-xs font-bold uppercase border transition-colors ${
                    filter === f
                       ? "bg-sage-deep text-primary-foreground border-sage-deep hover:bg-sage"
                       : "bg-card border-border text-muted-foreground hover:border-sage-deep hover:text-sage-deep"
                  }`}
                >
                  {f}
                 </Button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

       <section className="pt-12 pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <Reveal key={p.t + i} delay={i * 50}>
              <div className={`group ${i % 5 === 0 ? "sm:col-span-2" : ""}`}>
                <div className="overflow-hidden rounded-sm hover-zoom">
                  <img src={p.img} alt={p.t} loading="lazy" className={`w-full object-cover ${i % 5 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`} />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                   <h3 className="font-bold uppercase text-lg">{p.t}</h3>
                   {p.loc && <p className="text-xs tracking-widest uppercase text-muted-foreground">{p.loc}</p>}
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
