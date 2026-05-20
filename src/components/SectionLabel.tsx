export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-4 border-b hairline pb-4">
      <span className="font-mono text-xs text-muted-foreground">{index}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/80">{title}</h2>
    </div>
  );
}
