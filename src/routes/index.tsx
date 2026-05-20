import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ashik Reji — Operations · Automation · Developer" },
      {
        name: "description",
        content:
          "Portfolio of Ashik Reji — operations-focused BCA graduate building automation systems, workflows, and scalable digital tools.",
      },
      { property: "og:title", content: "Ashik Reji — Operations · Automation · Developer" },
      { property: "og:description", content: "Systems, workflows, and automation tools." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground grain">
      <div className="dotted-grid pointer-events-none fixed inset-0 z-0" />
      <CursorGlow />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
