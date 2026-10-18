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
    <header className="fixed top-3 inset-x-3 md:top-5 md:inset-x-6 z-50 mx-auto max-w-[1500px] header-glass text-card-foreground shadow-md rounded-sm">
      <div className="flex h-[72px] md:h-[84px] items-center justify-between gap-4 px-4 md:px-7">
        <Link to="/" aria-label="Infinite Space Interiors home" className="shrink-0 flex items-center">
          <img src={logo} alt="Infinite Space Interiors" className="brand-logo w-[160px] md:w-[190px] h-auto" />
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 xl:gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} activeProps={{ className: "text-sage-deep" }} className="nav-link text-[11px] font-extrabold uppercase hover:text-sage-deep transition-colors">{l.label}</Link>
          ))}
        </nav>
        <Button asChild className="hidden lg:inline-flex h-10 rounded-sm bg-sage-deep text-primary-foreground hover:bg-charcoal text-xs font-extrabold uppercase px-4">
          <a href="tel:+919324029464"><ArrowUpRight size={16} /> Call Now</a>
        </Button>
        <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="lg:hidden" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav aria-label="Mobile navigation" className="lg:hidden border-t border-border px-5 py-3 grid grid-cols-2 gap-1 header-glass">
        {links.map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 text-xs font-extrabold uppercase hover:text-sage-deep">{l.label}</Link>)}
         <Button asChild className="col-span-2 mt-2 uppercase text-xs font-extrabold"><a href="tel:+919324029464" onClick={() => setOpen(false)}>Call Now <ArrowUpRight size={16}/></a></Button>
      </nav>}
    </header>
  );
}
