import { promptSections } from "@/data/prompts";

export default function PromptLibrary() {
  return (
    <section className="space-y-10">
      {promptSections.map((section) => (
        <div key={section.title} className="rounded-3xl border border-border/70 bg-card p-6">
          <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {section.prompts.map((prompt) => (
              <div key={prompt.id} className="rounded-3xl border border-border/70 bg-background/80 p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/60">
                  <span className="rounded-full bg-primary/10 px-2 py-1">{prompt.category}</span>
                  <span className="rounded-full bg-muted px-2 py-1">{prompt.useCase}</span>
                  <span className="rounded-full bg-muted px-2 py-1">{prompt.difficulty}</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground">{prompt.title}</p>
                <p className="mt-3 text-sm leading-7 text-foreground/75">{prompt.template}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
