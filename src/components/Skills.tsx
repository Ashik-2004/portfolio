import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const groups: { label: string; items: string[] }[] = [
  { label: "Operations", items: ["Workflow Optimization", "Process Documentation", "Cross-functional Collaboration"] },
  { label: "Automation", items: ["Automation Workflows", "AI Productivity Tools"] },
  { label: "Backend", items: ["Python", "Django", "PHP", "SQL", "MySQL"] },
  { label: "Frontend", items: ["JavaScript", "HTML", "CSS"] },
  { label: "Tools", items: ["GitHub", "VS Code"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="04" title="Capabilities" />
        <div className="space-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-6 border-b hairline pb-8">
                <p className="col-span-12 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:col-span-3">
                  ./{g.label.toLowerCase()}
                </p>
                <div className="col-span-12 flex flex-wrap gap-2 md:col-span-9">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="group cursor-default border hairline px-3 py-1.5 font-mono text-xs text-foreground/80 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:text-foreground hover:shadow-[0_0_24px_-8px_rgba(255,255,255,0.25)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
