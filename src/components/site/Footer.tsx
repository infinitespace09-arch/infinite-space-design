import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo-trim.webp";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-7">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="bg-card rounded-sm w-fit p-2"><img src={logo} alt="Infinite Space Interiors" className="w-[190px] h-auto" /></div>
            <p className="mt-6 max-w-xs text-sm text-cream/65 leading-relaxed">Designing elegant spaces that inspire living. Luxury residential, commercial & retail interiors crafted with creativity, functionality and precision.</p>
            <p className="mt-5 text-xs font-extrabold uppercase text-sage">Design • Build • Transform</p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-xl uppercase">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/70">
              {[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/projects", "Projects"], ["/testimonials", "Testimonials"], ["/contact", "Contact"]].map(([to,label]) => <li key={to}><Link to={to} className="hover:text-sage transition-colors inline-flex items-center gap-1">{label}<ArrowUpRight size={12}/></Link></li>)}
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xl uppercase">Working Hours</h4>
            <dl className="mt-5 text-sm text-cream/70 space-y-3"><div className="flex justify-between gap-5"><dt>Mon — Sat</dt><dd>10am — 7pm</dd></div><div className="flex justify-between gap-5"><dt>Sun</dt><dd>Closed</dd></div></dl>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-xl uppercase">Contact Us</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 shrink-0 text-sage" />12, Design District, Bengaluru, India</li>
              <li><a className="flex items-center gap-3 hover:text-sage" href="tel:+919876543210"><Phone size={16} className="text-sage" />+91 98765 43210</a></li>
              <li><a className="flex items-center gap-3 hover:text-sage break-all" href="mailto:hello@infinitespace.studio"><Mail size={16} className="shrink-0 text-sage" />hello@infinitespace.studio</a></li>
            </ul>
            <div className="mt-6 flex gap-2">{[Instagram, Facebook, Linkedin].map((Icon, i) => <a key={i} href="#" aria-label={["Instagram", "Facebook", "LinkedIn"][i]} className="h-9 w-9 rounded-full border border-cream/25 flex items-center justify-center hover:bg-sage hover:border-sage transition-colors"><Icon size={15}/></a>)}</div>
          </div>
        </div>
        <div className="mt-16 border-t border-cream/20 pt-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream/50"><p>© {new Date().getFullYear()} Infinite Space Interiors. All rights reserved.</p><p>Crafted with care.</p></div>
      </div>
    </footer>
  );
}
