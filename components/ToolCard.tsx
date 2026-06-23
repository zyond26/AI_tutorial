import Link from "next/link";
import { Tool } from "@/data/tools";
import { categories } from "@/data/categories";

function getCategoryTitle(slug: string) {
  return categories.find((category) => category.slug === slug)?.title ?? slug;
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="rounded-3xl border border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/80 hover:shadow-lg hover:shadow-black/5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {tool.categories.map(getCategoryTitle).join(" • ")}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-foreground">{tool.name}</h3>
        </div>
        <span className="rounded-2xl bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {tool.logo}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-foreground/75">{tool.shortDesc}</p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-foreground/70">
        {tool.platforms.map((platform) => (
          <span key={platform} className="rounded-full border border-border/70 px-2 py-1">
            {platform}
          </span>
        ))}
      </div>
      <Link
        href={tool.link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
      >
        Mở công cụ
      </Link>
    </article>
  );
}
