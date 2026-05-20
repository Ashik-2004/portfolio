import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-32 pb-20 md:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-emerald-400/80 mr-3 animate-pulse" />
          Ernakulam, Kerala — Available for opportunities
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[18vw] leading-[0.85] tracking-tight text-foreground md:text-[12rem]"
        >
          Ashik<span className="text-muted-foreground">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          Operations · Automation · Developer
        </motion.p>

        <div className="mt-20 grid gap-10 border-t hairline pt-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="md:col-span-7"
          >
            <p className="font-serif text-2xl leading-snug text-foreground/95 text-balance md:text-4xl">
              I build systems, workflows, and automation tools that solve real operational problems.
            </p>
            <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
              Operations-focused BCA graduate with hands-on experience managing workflows, automation
              systems, scalable web applications, and AI-powered productivity tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col justify-end gap-6 md:col-span-5 md:items-end"
          >
            <p className="max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground/70 md:text-right">
              Built with Python · Django · JavaScript · SQL · PHP · Automation Workflows
            </p>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
            >
              Explore work
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
