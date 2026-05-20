import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "https://github.com/Ashik-2004", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com/in/ashikreji101", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:ashikreji349@gmail.com", label: "Email", Icon: Mail },
];

export function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 right-0 left-0 z-50 mix-blend-difference"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" className="font-serif text-lg italic text-white/90">ar.</a>
        <ul className="flex items-center gap-6 md:gap-8">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
