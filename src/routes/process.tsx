import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { pageHead, processSteps } from "@/lib/site-content";
import projectAsset from "@/assets/axxela-andheri-reception.jpg.asset.json";
export const Route = createFileRoute("/process")({ head: () => pageHead("Our Process", "Our interior project workflow, from consultation and BOQ preparation to execution, quality checks and final handover.", "/process"), component: Process });
function Process() {
 return <div><section className="bg-charcoal text-cream page-intro section-wave section-wave-blush"><div className="mx-auto max-w-7xl px-6"><p className="eyebrow text-cream/75">Our Process</p><h1 className="mt-5 display-title max-w-4xl">From the first visit to final handover.</h1><p className="mt-6 max-w-xl text-cream/75 leading-relaxed">A coordinated approach to planning, workmanship and site execution. The stages and scope are agreed to suit each project.</p></div></section>
 <section className="bg-sage-soft py-16 lg:py-20"><div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start"><div>{processSteps.map((step,index) => <Reveal key={step.title}><div className="grid grid-cols-[3rem_1fr] gap-4 py-6 border-b border-border"><span className="font-serif text-3xl text-sage-deep">{String(index+1).padStart(2,"0")}</span><div><h2 className="text-2xl uppercase">{step.title}</h2><p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.description}</p></div></div></Reveal>)}</div><div className="lg:sticky lg:top-28"><img src={projectAsset.url} alt="Completed Axxela office reception in Andheri" className="w-full aspect-[4/3] object-cover"/><h2 className="mt-7 text-3xl uppercase">One coordinated project scope.</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">From civil work and services to furniture and finishing, we coordinate the workstreams your interior needs.</p><Button asChild className="mt-6"><Link to="/contact">Start a Project <ArrowUpRight size={16}/></Link></Button></div></div></section></div>;
}
