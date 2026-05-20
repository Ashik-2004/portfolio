import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const items = [
  {
    company: "Jezt Technologies",
    role: "Operations Intern",
    year: "2026",
    bullets: [
      "Coordinated operational workflows across teams",
      "Improved process efficiency and reduced delays",
      "Maintained reporting systems and operational tracking",
      "Worked with cross-functional teams",
      "Managed schedules and documentation",
    ],
  },
];

export function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="experience" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="02" title="Experience" />
        <ul className="border-t hairline">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.company} className="border-b hairline">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left transition-colors hover:bg-white/[0.015]"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-muted-foreground">{item.year}</span>
                    <h3 className="font-serif text-2xl text-foreground md:text-4xl">
                      {item.company}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:inline">
                      {item.role}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-foreground/60 group-hover:text-foreground"
                    >
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-10 md:grid-cols-12">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground md:col-span-3 md:hidden">
                          {item.role}
                        </p>
                        <ul className="space-y-3 md:col-span-9 md:col-start-4">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="font-mono text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mr-3 text-foreground/40">—</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
