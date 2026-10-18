import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import aboutDiningAsset from "@/assets/sagar-bhai-mira-bhayander-dining.jpg.asset.json";
import projBathAsset from "@/assets/iqbal-bhai-jogeshwari-bathroom.jpg.asset.json";
import projOfficeAsset from "@/assets/axxela-andheri-reception.jpg.asset.json";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site-content";

const aboutDining = aboutDiningAsset.url;
const projBath = projBathAsset.url;
const projOffice = projOfficeAsset.url;

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Our Contracting Approach", "Infinite Space Interiors combines interior design, workmanship and coordinated turnkey project execution from its Mumbai workshop.", "/about"),
  component: About,
});

function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-sage-soft page-intro section-wave section-wave-light">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-sage-deep">About Us</p>
              <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl text-balance">
                Interior design.
                Turnkey execution.
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
          <Reveal className="md:col-span-7"><img src={aboutDining} alt="Completed Sagar Bhai dining space in Mira Bhayander" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm" /></Reveal>
          <Reveal className="md:col-span-5 md:pt-20" delay={100}><img src={projBath} alt="Iqbal Bhai bathroom in Jogeshwari" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm" /></Reveal>
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
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["Workmanship", "Material choices, custom carpentry and finishing are considered alongside the practical needs of installation."],
            ["Site Coordination", "Civil work, services, furniture and finishing are coordinated within the agreed project scope."],
            ["Clear Communication", "Requirements and design decisions are discussed before execution, with practical coordination as work progresses."],
            ["Checks & Handover", "Completed work is reviewed and finishing items addressed as part of final inspection and handover."],
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
      <section className="relative py-20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <Reveal>
              <img src={projOffice} alt="Axxela office reception in Andheri" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-sm" />
            </Reveal>
            <Reveal delay={150}>
              <img src={projBath} alt="Iqbal Bhai bathroom finishing detail" loading="lazy" className="hidden md:block absolute -bottom-12 right-0 w-1/2 aspect-[4/3] object-cover rounded-sm shadow-2xl border-8 border-cream" />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
               <p className="eyebrow text-sage-deep">About Infinite Space</p>
                <h2 className="mt-5 display-title text-4xl md:text-6xl text-balance break-words">
                  Complete interiors, thoughtfully executed.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                 Our turnkey contracting approach brings planning, site coordination, construction, custom furniture and finishing together. The scope is agreed for each project, with attention to communication, workmanship and final checks.
              </p>
               <Button asChild className="mt-8 rounded-sm bg-sage-deep text-primary-foreground hover:bg-charcoal text-xs font-bold uppercase"><Link to="/contact">Discuss your project <ArrowUpRight size={16} /></Link></Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
