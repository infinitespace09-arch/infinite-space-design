import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Infinite Space Interiors" },
      { name: "description", content: "What our clients say about working with Infinite Space Interiors." },
      { property: "og:title", content: "Testimonials — Infinite Space" },
      { property: "og:description", content: "Words from the people who live in the spaces we design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <div>
       <section className="bg-charcoal text-cream pt-32 pb-16 lg:pt-40 lg:pb-20 section-wave section-wave-blush">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
             <p className="eyebrow text-cream/70">Testimonials</p>
             <h1 className="mt-6 display-title text-5xl md:text-7xl lg:text-8xl max-w-5xl text-balance">
               The best brief we receive is a kind word.
            </h1>
          </Reveal>
        </div>
      </section>

       <section className="bg-sage-soft pt-16 pb-20 lg:pb-32">
           <div className="mx-auto max-w-7xl px-6">
             <Reveal>
               <article className="bg-card p-8 md:p-10 rounded-sm border border-border max-w-2xl">
                 <Quote className="text-sage-deep" />
                 <p className="mt-6 text-xl font-semibold leading-snug">Client testimonials</p>
                 <p className="mt-3 text-sm text-muted-foreground">Approved client feedback will be shared here.</p>
               </article>
             </Reveal>
        </div>
      </section>
    </div>
  );
}
