import Link from "next/link";
import { categories } from "@/data/categories";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-2xl shadow-sm shadow-black/5">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-foreground sm:text-xl">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
              AI
            </span>
            AI_tutorial
          </Link>
          <span className="hidden text-xs text-foreground/60 sm:inline-block">
            Học AI an toàn, thông minh và phù hợp mọi tuổi
          </span>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden flex-wrap items-center gap-2 text-sm text-foreground/70 lg:flex">
            {categories.slice(0, 5).map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="rounded-full border border-border/60 px-3 py-2 transition hover:border-primary hover:text-primary"
              >
                {category.title}
              </Link>
            ))}
            <Link
              href="/prompt-mau"
              className="rounded-full border border-border/60 bg-muted px-3 py-2 text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Thư viện prompt
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
