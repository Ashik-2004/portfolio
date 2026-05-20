import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const points = [
  "BCA Graduate — 2023–2026",
  "Workflow optimization & process design",
  "Automation systems & AI productivity tools",
  "Cross-functional collaboration",
  "Operations management",
  "Scalable digital systems",
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="01" title="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="font-serif text-3xl leading-snug text-foreground/95 text-balance md:text-5xl">
              I enjoy solving operational bottlenecks through automation and clean system design.
            </p>
            <p className="mt-8 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
              My focus sits at the intersection of operations and engineering — building the
              invisible scaffolding that helps teams move faster, with less friction and fewer
              errors. From payroll platforms to AI-assisted workflows, I design systems that
              quietly do the heavy lifting.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <ul className="space-y-4 border-l hairline pl-6">
              {points.map((p) => (
                <li
                  key={p}
                  className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  <span className="mr-3 text-foreground/40">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
