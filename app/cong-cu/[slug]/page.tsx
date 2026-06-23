import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";

type PageProps = {
  params: {
    slug: string;
  };
};

function getCategoryTitle(slug: string) {
  return categories.find((category) => category.slug === slug)?.title ?? slug;
}

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const tool = tools.find((item) => item.id === params.slug);
  if (!tool) {
    return {
      title: "Công cụ không tìm thấy | AI Cho Tôi",
      description: "Không tìm thấy công cụ AI này.",
    };
  }

  return {
    title: `${tool.name} | AI Cho Tôi`,
    description: tool.shortDesc,
  };
}

export default function ToolDetailPage({ params }: PageProps) {
  const tool = tools.find((item) => item.id === params.slug);
  if (!tool) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm shadow-black/5">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {tool.categories.map(getCategoryTitle).join(" • ")}
          </p>
          <h1 className="text-4xl font-semibold text-foreground">{tool.name}</h1>
          <p className="max-w-3xl text-base leading-7 text-foreground/75">{tool.shortDesc}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-background/90 p-6">
            <h2 className="text-lg font-semibold text-foreground">Hướng dẫn nhanh</h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground/75">
              {tool.guideSteps.map((step) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-background/90 p-6">
            <h2 className="text-lg font-semibold text-foreground">Prompt gợi ý</h2>
            <ul className="mt-4 space-y-3 text-sm text-foreground/75">
              {tool.bestPrompts.map((prompt) => (
                <li key={prompt} className="rounded-2xl border border-border/70 bg-muted/50 p-3">
                  {prompt}
                </li>
              ))}
            </ul>
            <Link
              href={tool.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Mở {tool.name}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
