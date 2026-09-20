import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
             <div className="flex items-center gap-2 bg-cream rounded-sm p-3 w-fit">
               <img src={logo} alt="Infinite Space Interiors" className="h-11 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-cream/70 leading-relaxed">
              Designing elegant spaces that inspire living. Luxury residential,
              commercial & retail interiors crafted with creativity, functionality
              and precision.
            </p>
             <p className="mt-6 font-bold uppercase tracking-[0.12em] text-sage text-xs">
              Design • Build • Transform
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sage text-sm tracking-[0.2em] uppercase">Explore</h4>
            <ul className="mt-5 space-y-3 text-cream/80">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/projects", "Projects"],
                ["/testimonials", "Testimonials"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-sage transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sage text-sm tracking-[0.2em] uppercase">Studio</h4>
            <ul className="mt-5 space-y-4 text-cream/80">
              <li className="flex items-start gap-3"><MapPin size={16} className="mt-1 text-sage" /> 12, Design District, Bengaluru, India</li>
              <li className="flex items-start gap-3"><Phone size={16} className="mt-1 text-sage" /> +91 98765 43210</li>
              <li className="flex items-start gap-3"><Mail size={16} className="mt-1 text-sage" /> hello@infinitespace.studio</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-sage hover:text-charcoal hover:border-sage transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Infinite Space Interiors. All rights reserved.</p>
          <p>Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
