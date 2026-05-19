import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Infinite Space Interiors" },
      { name: "description", content: "What our clients say about working with Infinite Space Interiors." },
      { property: "og:title", content: "Testimonials — Infinite Space" },
      { property: "og:description", content: "Words from the people who live in the spaces we design." },
    ],
  }),
  component: Testimonials,
});

const list = [
  { n: "Aarav & Meera Kapoor", r: "Homeowners, Bengaluru", q: "They translated a vague feeling into a home we never want to leave. Every corner has intent and warmth." },
  { n: "Studio Aera", r: "Boutique Owner", q: "Our footfall doubled in the first quarter. The space tells our brand story without saying a word." },
  { n: "Rohan Mehta", r: "Founder, Northwind", q: "Calm, precise, on time. Working with Infinite Space felt less like a project and more like a partnership." },
  { n: "Nikhil & Anjali", r: "Penthouse, Mumbai", q: "Detail. Detail. Detail. The carpentry alone is worth every rupee." },
  { n: "Ira Designs", r: "Retail Chain", q: "Three stores delivered on the same opening week. Flawlessly." },
  { n: "Dr. Kavya N.", r: "Clinic Owner", q: "Patients comment on the calm of the space before they meet me. That's design doing its job." },
];

function Testimonials() {
  return (
    <div>
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-sage-deep">Testimonials</p>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl text-balance">
              The best brief we receive is a <em className="italic text-sage-deep">kind word</em>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((t, i) => (
            <Reveal key={t.n} delay={i * 60}>
              <article className="bg-cream p-10 h-full rounded-sm flex flex-col">
                <Quote className="text-sage-deep" />
                <p className="mt-6 font-serif text-xl leading-snug text-balance flex-1">"{t.q}"</p>
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex gap-0.5 text-sage-deep">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="mt-3 font-serif text-lg">{t.n}</p>
                  <p className="text-sm text-muted-foreground">{t.r}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
