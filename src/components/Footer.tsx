import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="relative border-t hairline px-6 py-10 md:px-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Built by Ashik Reji
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </motion.footer>
  );
}
