import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {categories.map((category) => (
        <Link
          key={category.slug}
          href={`/${category.slug}`}
          className="group overflow-hidden rounded-3xl border border-border/70 bg-background/90 p-6 transition hover:-translate-y-1 hover:border-primary/80 hover:bg-primary/5"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-2xl">
            {category.emoji}
          </div>
          <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
          <p className="mt-3 text-sm leading-6 text-foreground/70">{category.description}</p>
        </Link>
      ))}
    </section>
  );
}
