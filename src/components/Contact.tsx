import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="06" title="Contact" />
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h3 className="font-serif text-4xl leading-tight text-foreground text-balance md:text-6xl">
              Let's build something quietly powerful.
            </h3>
            <div className="mt-10 space-y-4">
              {[
                { label: "Email", value: "ashikreji349@gmail.com", href: "mailto:ashikreji349@gmail.com" },
                { label: "Phone", value: "+91 90722 36427", href: "tel:+919072236427" },
                { label: "LinkedIn", value: "ashikreji101", href: "https://linkedin.com/in/ashikreji101" },
                { label: "GitHub", value: "Ashik-2004", href: "https://github.com/Ashik-2004" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b hairline py-3 transition-colors hover:border-white/30"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {c.label}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-foreground">
                    {c.value}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
                const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
                window.location.href = `mailto:ashikreji349@gmail.com?subject=${subject}&body=${body}`;
                setSent(true);
              }}
              className="space-y-6 border hairline p-8"
            >
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    className="mt-2 w-full border-b hairline bg-transparent py-2 font-mono text-sm text-foreground outline-none transition-all focus:border-white/50 focus:shadow-[0_1px_0_0_rgba(255,255,255,0.4)]"
                  />
                </div>
              ))}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="mt-2 w-full resize-none border-b hairline bg-transparent py-2 font-mono text-sm text-foreground outline-none transition-all focus:border-white/50 focus:shadow-[0_1px_0_0_rgba(255,255,255,0.4)]"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 border hairline px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-foreground transition-all hover:border-white/40 hover:bg-white/[0.04]"
              >
                {sent ? "Sent →" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
