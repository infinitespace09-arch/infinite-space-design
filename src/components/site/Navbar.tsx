import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/infinite-space-logo.png.asset.json";
const logo = logoAsset.url;

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Our Process" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-3 inset-x-3 md:top-5 md:inset-x-6 z-50 mx-auto max-w-[1500px] bg-card text-card-foreground shadow-md rounded-sm">
      <div className="flex h-16 md:h-[72px] items-center justify-between gap-4 px-4 md:px-7">
        <Link to="/" aria-label="Infinite Space Interiors home" className="shrink-0 flex items-center">
          <img src={logo} alt="Infinite Space Interiors" className="w-[125px] md:w-[145px] h-auto" />
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 xl:gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} activeProps={{ className: "text-sage-deep" }} className="text-[11px] font-extrabold uppercase hover:text-sage-deep transition-colors">{l.label}</Link>
          ))}
        </nav>
        <Button asChild className="hidden lg:inline-flex h-10 rounded-sm bg-sage-deep text-primary-foreground hover:bg-charcoal text-xs font-extrabold uppercase px-4">
          <Link to="/contact"><ArrowUpRight size={16} /> Start a Project</Link>
        </Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="lg:hidden" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="lg:hidden border-t border-border px-5 py-3 grid grid-cols-2 gap-1 bg-card">
        {links.map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 text-xs font-extrabold uppercase hover:text-sage-deep">{l.label}</Link>)}
        <Link to="/contact" onClick={() => setOpen(false)} className="col-span-2 py-3 text-xs font-extrabold uppercase text-sage-deep">Start a Project ↗</Link>
      </nav>}
    </header>
  );
}
