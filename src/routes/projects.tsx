import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { filterProjects, type Project, type ProjectFilter } from "@/lib/projects";
import { pageHead } from "@/lib/site-content";

export const Route = createFileRoute("/projects")({
  validateSearch: (search: Record<string, unknown>): { category?: Exclude<ProjectFilter, "All Projects"> } => ({ category: search.category === "Residential" || search.category === "Commercial" || search.category === "Retail" ? search.category : undefined }),
  head: () => pageHead("Residential & Commercial Projects", "Explore genuine residential interior execution, office interiors and retail fit-outs by Infinite Space Interiors.", "/projects"),
  component: Projects,
});
function Projects() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const filter = category || "All Projects";
  const [selected, setSelected] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  function move(direction: number) { if (selected) setImageIndex(index => (index + direction + selected.images.length) % selected.images.length); }
  return <div>
    <section className="bg-sage-soft page-intro section-wave section-wave-light"><div className="mx-auto max-w-7xl px-6">
      <p className="eyebrow text-sage-deep">Our Projects</p><h1 className="mt-5 display-title max-w-4xl">Spaces we've brought to life.</h1>
      <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">Residential projects and commercial fit-outs, from homes and apartments to offices, retail spaces and salons.</p>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Project categories">{(["All Projects", "Residential", "Commercial", "Retail"] as const).map(item => <Button key={item} variant={filter === item ? "default" : "outline"} aria-pressed={filter === item} onClick={() => navigate({ search: { category: item === "All Projects" ? undefined : item }, replace: true, resetScroll: false })} className="rounded-sm text-xs uppercase font-bold">{item}</Button>)}</div>
    </div></section>
    <section className="py-12 lg:py-20"><div className="mx-auto max-w-7xl px-6"><p className="mb-7 text-sm text-muted-foreground" aria-live="polite">{filterProjects(filter).length} projects</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">{filterProjects(filter).map(project => <article key={project.id} data-project={project.id}>
        <Button variant="ghost" onClick={() => {setSelected(project); setImageIndex(0);}} aria-label={`Open ${project.name}`} className="group block h-auto w-full p-0 text-left whitespace-normal hover:bg-transparent rounded-sm">
          <div className="relative overflow-hidden aspect-[4/3] hover-zoom rounded-sm"><img src={project.cover} alt={`${project.name} — ${project.category.toLowerCase()} interior project`} loading="lazy" className="w-full h-full object-cover"/><span className="absolute bottom-3 right-3 bg-card text-card-foreground px-3 py-1.5 text-xs">{project.images.length} photos</span></div>
          <div className="mt-4 flex items-start justify-between gap-3"><h2 className="text-2xl uppercase leading-tight">{project.name}</h2><ArrowUpRight size={20} className="shrink-0 text-sage-deep mt-1"/></div>
          <p className="mt-2 text-xs uppercase text-sage-deep">{project.category}{project.sector ? ` · ${project.sector}` : ""} Projects</p><p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin size={12}/>{project.location}</p>
        </Button>
      </article>)}</div>
    </div></section>
    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="flex flex-col max-w-5xl w-[calc(100%-2rem)] max-h-[90svh] overflow-y-auto gap-3 p-4 md:p-6 rounded-sm" onKeyDown={event => {if(event.key === "ArrowLeft") move(-1); if(event.key === "ArrowRight") move(1);}}>
      <div className="shrink-0 space-y-2"><DialogTitle className="pr-8 text-2xl uppercase">{selected?.name}</DialogTitle><DialogDescription>{selected?.category} Projects · {selected?.location}</DialogDescription></div>
      {selected && <><div data-gallery-main className="relative mx-auto w-[min(100%,calc((90svh-240px)*4/3))] aspect-[4/3] shrink-0 bg-muted overflow-hidden"><img src={selected.images[imageIndex]} alt={`${selected.name} — project photograph ${imageIndex + 1}`} className="w-full h-full object-cover"/>
        <Button size="icon" variant="outline" className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card" onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft/></Button><Button size="icon" variant="outline" className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-card/90 hover:bg-card" onClick={() => move(1)} aria-label="Next photograph"><ArrowRight/></Button></div>
        <p className="shrink-0 text-center text-sm text-muted-foreground" aria-live="polite">{imageIndex + 1} / {selected.images.length}</p>
        <div data-gallery-thumbnails className="flex shrink-0 gap-2 overflow-x-auto pb-1">{selected.images.map((image,index) => <Button key={image} variant="ghost" aria-label={`View photograph ${index+1}`} aria-pressed={imageIndex===index} onClick={() => setImageIndex(index)} className={`p-0 h-16 md:h-20 w-auto shrink-0 aspect-[4/3] overflow-hidden rounded-sm border-2 ${imageIndex===index ? "border-primary" : "border-transparent"}`}><img src={image} alt={`${selected.name} thumbnail ${index+1}`} loading="lazy" className="w-full h-full object-cover"/></Button>)}</div>
      </>}
    </DialogContent></Dialog>
  </div>;
}
