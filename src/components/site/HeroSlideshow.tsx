import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import living from "@/assets/sagar-bhai-mira-bhayander-living-1.jpg.asset.json";
import mehulLiving from "@/assets/mehul-thakkar-powai-living-2.jpg.asset.json";
import bedroom from "@/assets/mehul-thakkar-powai-bedroom-headboard.jpg.asset.json";
import swing from "@/assets/mehul-thakkar-powai-living-swing.jpg.asset.json";
import sagarLiving from "@/assets/sagar-bhai-mira-bhayander-living-2.jpg.asset.json";
import workstations from "@/assets/bhoomi-world-bhiwandi-workstations-3.jpg.asset.json";

const slides = [
  { src: mehulLiving.url, alt: "Mehul Thakkar living room — Powai" },
  { src: living.url, alt: "Sagar Bhai living room — Mira Bhayander" },
  { src: workstations.url, alt: "Bhoomi World office — Bhiwandi" },
  { src: swing.url, alt: "Mehul Thakkar living room with swing — Powai" },
  { src: sagarLiving.url, alt: "Sagar Bhai living room seating — Mira Bhayander" },
  { src: bedroom.url, alt: "Mehul Thakkar bedroom — Powai" },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(preference.matches);
    sync(); preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    let cancelled = false;
    const next = (index + 1) % slides.length;
    const preload = new Image();
    preload.src = slides[next].src;
    const timer = window.setTimeout(async () => {
      try { await preload.decode(); } catch { return; }
      if (cancelled) return;
      setPrevious(index); setIndex(next);
    }, 5500);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [index, paused, reduced]);
  return <>
    <div className="absolute inset-0 overflow-hidden" aria-label="Completed project photographs">
      {previous !== null && <img key={`previous-${previous}`} src={slides[previous].src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover"/>}
      <img key={index} src={slides[index].src} alt={slides[index].alt} fetchPriority={index === 0 ? "high" : "auto"} className={`absolute inset-0 w-full h-full object-cover ${previous !== null ? "hero-crossfade" : ""}`} />
    </div>
    {!reduced && <Button size="icon" variant="outline" className="absolute bottom-8 right-6 z-10 bg-charcoal/70 text-cream border-cream/40 hover:bg-charcoal" aria-label={paused ? "Play project slideshow" : "Pause project slideshow"} onClick={() => setPaused(value => !value)}>{paused ? <Play/> : <Pause/>}</Button>}
  </>;
}