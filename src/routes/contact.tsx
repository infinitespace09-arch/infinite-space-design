import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Infinite Space Interiors" },
      { name: "description", content: "Contact Infinite Space Interiors for premium interior design and turnkey contracting in Mumbai." },
      { property: "og:title", content: "Contact Infinite Space" },
      { property: "og:description", content: "Start a project with our studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Thank you — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
      setSending(false);
    }, 700);
  }

  return (
    <div>
       <section className="bg-sage-soft pt-32 pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
               <p className="eyebrow text-sage-deep">Get in Touch</p>
               <h1 className="mt-6 display-title text-5xl md:text-7xl text-balance">
                 Let's design something remarkable.
              </h1>
              <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
                 Tell us about your interior project and we will be in touch.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <form onSubmit={onSubmit} className="mt-12 grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" />
                <Field label="Project type" name="type" placeholder="Residential, Retail…" />
                <div className="sm:col-span-2">
                  <Field label="Tell us about your space" name="message" textarea required />
                </div>
                 <Button
                  type="submit"
                  disabled={sending}
                   className="sm:col-span-2 mt-2 h-12 rounded-sm bg-sage-deep text-primary-foreground px-8 hover:bg-charcoal disabled:opacity-60 text-xs uppercase font-extrabold"
                >
                  {sending ? "Sending…" : "Send Inquiry"} <Send size={16} />
                 </Button>
              </form>
            </Reveal>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <Reveal delay={200}>
               <div className="bg-card rounded-sm p-8 md:p-10 border border-border">
                 <h3 className="font-bold uppercase text-sm tracking-[0.1em]">Studio</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-4"><MapPin className="text-sage-deep shrink-0 mt-0.5" size={18} /> Shop-3, Floor-GRD, 6/6A, Aga Irani Building, Balashet Madurkar Marg, Elphinstone Rly Stn (W), Delisle Road, Mumbai – 400013</li>
                  <li className="flex gap-4"><Phone className="text-sage-deep shrink-0 mt-0.5" size={18} /> <span>+91 9324029464<br />+91 9820012617</span></li>
                  <li className="flex gap-4"><Mail className="text-sage-deep shrink-0 mt-0.5" size={18} /> infinitespace09@gmail.com</li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required, textarea, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean; placeholder?: string;
}) {
  const base = "mt-2 w-full bg-transparent border-b border-border focus:border-sage-deep outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      <span className="text-xs tracking-widest uppercase text-muted-foreground">{label}{required && " *"}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
