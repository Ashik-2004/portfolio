import { useEffect, useState } from "react";
import { ArrowUpRight, Star, GitBranch } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  topics: string[];
};

const GITHUB_USER = "Ashik-2004";
const FEATURED_TOPIC = "portfolio-featured";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function prettyName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function featuredOrder(topics: string[]) {
  const orderTopic = topics.find((t) => /^order-\d+$/.test(t));
  return orderTopic ? parseInt(orderTopic.split("-")[1], 10) : 999;
}

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`, {
      headers: { Accept: "application/vnd.github.mercy-preview+json" },
    })
      .then((r) => (r.ok ? r.json() : []))
      .then((data: Repo[]) =>
        setRepos(Array.isArray(data) ? data.filter((r) => !r.fork) : []),
      )
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  const featured = repos
    .filter((r) => r.topics?.includes(FEATURED_TOPIC))
    .sort((a, b) => featuredOrder(a.topics) - featuredOrder(b.topics));

  const others = repos.filter((r) => !r.topics?.includes(FEATURED_TOPIC));

  return (
    <section id="work" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03" title="Selected Work" />

        {loading ? (
          <p className="font-mono text-xs text-muted-foreground">$ loading projects...</p>
        ) : featured.length === 0 ? (
          <p className="max-w-xl font-mono text-xs leading-relaxed text-muted-foreground">
            $ no featured projects yet — add the topic{" "}
            <span className="text-foreground">portfolio-featured</span> to any repo on GitHub to
            surface it here. Use <span className="text-foreground">order-1</span>,{" "}
            <span className="text-foreground">order-2</span>... topics to control order.
          </p>
        ) : (
          <div className="space-y-px border-t border-b hairline">
            {featured.map((p, i) => {
              const techList = [p.language, ...p.topics.filter((t) => t !== FEATURED_TOPIC && !/^order-\d+$/.test(t))]
                .filter(Boolean)
                .slice(0, 4) as string[];
              return (
                <Reveal key={p.id} delay={i * 0.05}>
                  <a
                    href={p.homepage || p.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group grid grid-cols-12 gap-6 px-2 py-10 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="col-span-1 font-mono text-xs text-muted-foreground">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="col-span-11 md:col-span-7">
                      <h3 className="font-serif text-2xl leading-tight text-foreground md:text-3xl">
                        {prettyName(p.name)}
                      </h3>
                      <p className="mt-3 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
                        {p.description || "—"}
                      </p>
                    </div>
                    <div className="col-span-12 col-start-2 flex flex-wrap items-start gap-2 md:col-span-4 md:col-start-9 md:justify-end">
                      {techList.map((t) => (
                        <span
                          key={t}
                          className="border hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                      <ArrowUpRight className="ml-auto h-5 w-5 text-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground md:ml-2" />
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        )}

        <div className="mt-24">
          <div className="mb-8 flex items-baseline justify-between border-b hairline pb-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/70">
              ~/repositories
            </h3>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              View all
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {loading ? (
            <p className="font-mono text-xs text-muted-foreground">$ fetching repositories...</p>
          ) : others.length === 0 ? (
            <p className="font-mono text-xs text-muted-foreground">
              $ unable to fetch — visit github.com/{GITHUB_USER}
            </p>
          ) : (
            <div className="grid gap-px bg-white/5 md:grid-cols-2 lg:grid-cols-3">
              {others.slice(0, 9).map((r) => (
                <a
                  key={r.id}
                  href={r.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between gap-4 bg-background p-6 transition-colors hover:bg-white/[0.02]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-sm text-foreground">{r.name}</h4>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="mt-3 line-clamp-2 font-mono text-xs leading-relaxed text-muted-foreground">
                      {r.description || "—"}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/80">
                    {r.language && (
                      <span className="inline-flex items-center gap-1.5">
                        <GitBranch className="h-3 w-3" />
                        {r.language}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5">
                      <Star className="h-3 w-3" />
                      {r.stargazers_count}
                    </span>
                    <span className="ml-auto">{formatDate(r.updated_at)}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
