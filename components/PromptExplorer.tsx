"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { promptSections, Prompt } from "@/data/prompts";

const categoryPills = [
  { label: "Tất cả", value: "all" },
  { label: "Học tập", value: "hoc-tap" },
  { label: "IT & Dev", value: "lap-trinh" },
  { label: "Kinh doanh", value: "kinh-doanh" },
  { label: "Ảnh AI", value: "anh-ai" },
  { label: "Video", value: "video-ai" },
  { label: "Mạng xã hội", value: "mang-xa-hoi" },
  { label: "Email", value: "email" },
  { label: "Báo cáo", value: "bao-cao" },
];

const difficultyPills = [
  { label: "Tất cả", value: "all" },
  { label: "Dễ", value: "easy" },
  { label: "Trung bình", value: "medium" },
  { label: "Nâng cao", value: "hard" },
];

const categoryLabels: Record<string, { label: string; color: string }> = {
  "hoc-tap": { label: "Học tập", color: "bg-amber-200 text-amber-900" },
  "lap-trinh": { label: "IT & Dev", color: "bg-sky-200 text-sky-900" },
  "kinh-doanh": { label: "Kinh doanh", color: "bg-emerald-200 text-emerald-900" },
  "anh-ai": { label: "Ảnh AI", color: "bg-fuchsia-200 text-fuchsia-900" },
  "video-ai": { label: "Video", color: "bg-violet-200 text-violet-900" },
  "mang-xa-hoi": { label: "Mạng xã hội", color: "bg-cyan-200 text-cyan-900" },
  "prompt-mau": { label: "Prompt mẫu", color: "bg-slate-200 text-slate-900" },
  email: { label: "Email", color: "bg-rose-200 text-rose-900" },
  "bao-cao": { label: "Báo cáo", color: "bg-amber-200 text-amber-900" },
};

const featuredIds = [
  "tom-tat-bai-hoc",
  "content-blog-ai",
  "review-code",
  "poster-event",
  "kich-ban-video",
  "toi-uu-prompt",
];

const allPrompts: Prompt[] = promptSections.flatMap((section) => section.prompts).map((prompt) => ({
  ...prompt,
  tags: [prompt.useCase, prompt.category, ...(prompt.tags ?? [])],
}));

export default function PromptExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [submittedPrompt, setSubmittedPrompt] = useState("");
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const featuredPrompts = useMemo(
    () => allPrompts.filter((prompt) => featuredIds.includes(prompt.id)),
    []
  );

  const filteredPrompts = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim();
    return allPrompts.filter((prompt) => {
      const matchesCategory = category === "all" || prompt.category === category;
      const matchesDifficulty = difficulty === "all" || prompt.difficulty === difficulty;
      const matchesSearch =
        !normalizedSearch ||
        prompt.title.toLowerCase().includes(normalizedSearch) ||
        prompt.template.toLowerCase().includes(normalizedSearch) ||
        prompt.tags?.some((tag) => tag.toLowerCase().includes(normalizedSearch));
      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [category, difficulty, search]);

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedPrompt(value);
    window.setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!submittedPrompt.trim()) return;

    const saved = JSON.parse(window.localStorage.getItem("user-submitted-prompts") || "[]");
    saved.unshift({
      id: `user-${Date.now()}`,
      title: "Prompt người dùng",
      template: submittedPrompt.trim(),
      category: "prompt-mau",
      useCase: "Tự gửi",
      difficulty: "medium",
      tags: ["user", "submit"],
    });
    window.localStorage.setItem("user-submitted-prompts", JSON.stringify(saved));
    setSubmittedPrompt("");
    alert("Prompt đã được lưu tạm thời vào LocalStorage.");
  };

  return (
    <section className="space-y-8">
      <div className="rounded-[2rem] border border-border/70 bg-white p-6 shadow-sm shadow-black/5">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <label htmlFor="prompt-search" className="text-sm font-semibold text-foreground/70">
              Tìm prompt
            </label>
            <input
              id="prompt-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Nhập từ khóa, chủ đề hoặc nội dung prompt..."
              className="w-full rounded-3xl border border-border/70 bg-muted px-5 py-4 text-base text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="rounded-3xl bg-primary/5 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Tổng prompt</p>
            <p className="mt-3 text-4xl font-semibold text-foreground">{filteredPrompts.length}</p>
            <p className="text-sm text-foreground/70">Kết quả sau bộ lọc</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-3">
          {categoryPills.map((pill) => {
            const active = pill.value === category;
            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => setCategory(pill.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active ? "border-primary bg-primary text-primary-foreground" : "border-border/70 bg-muted text-foreground"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-3">
          {difficultyPills.map((pill) => {
            const active = pill.value === difficulty;
            return (
              <button
                key={pill.value}
                type="button"
                onClick={() => setDifficulty(pill.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active ? "border-primary bg-primary text-primary-foreground" : "border-border/70 bg-muted text-foreground"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-border/70 bg-white p-6 shadow-sm shadow-black/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-primary">Featured</p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">Prompt hữu ích nhất</h2>
              </div>
              <p className="text-sm text-foreground/70">Top 6 prompt được chọn lọc cho khởi đầu nhanh.</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {featuredPrompts.map((prompt) => (
                <div key={prompt.id} className="rounded-3xl border border-border/70 bg-muted p-5">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/70">
                    <span className={`rounded-full px-2 py-1 ${categoryLabels[prompt.category]?.color ?? "bg-slate-200 text-slate-900"}`}>
                      {categoryLabels[prompt.category]?.label ?? prompt.category}
                    </span>
                    <span className="rounded-full bg-white px-2 py-1 text-foreground/70">{prompt.difficulty}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{prompt.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/75">{prompt.template}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => handleCopy(prompt.template)}
                      className="rounded-full border border-border/70 bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary"
                    >
                      {copiedPrompt === prompt.template ? "Đã copy!" : "COPY"}
                    </button>
                    <a
                      href={`https://chat.openai.com/?q=${encodeURIComponent(prompt.template)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                    >
                      THỬ NGAY
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrompts.map((prompt) => (
              <article key={prompt.id} className="rounded-[2rem] border border-border/70 bg-white p-6 shadow-sm shadow-black/5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-foreground/70">
                  <span className={`rounded-full px-2 py-1 ${categoryLabels[prompt.category]?.color ?? "bg-slate-200 text-slate-900"}`}>
                    {categoryLabels[prompt.category]?.label ?? prompt.category}
                  </span>
                  <span className="rounded-full bg-muted px-2 py-1 text-foreground/70">{prompt.difficulty}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{prompt.title}</h3>
                <pre className="mt-4 max-h-28 overflow-hidden whitespace-pre-wrap rounded-3xl bg-slate-950/95 px-4 py-4 text-sm font-medium leading-6 text-slate-100">
                  {prompt.template}
                </pre>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopy(prompt.template)}
                    className="rounded-full border border-border/70 bg-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary"
                  >
                    {copiedPrompt === prompt.template ? "Đã copy!" : "COPY"}
                  </button>
                  <a
                    href={`https://chat.openai.com/?q=${encodeURIComponent(prompt.template)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    THỬ NGAY
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/60">
                  <span>Dùng với:</span>
                  <span className="rounded-full bg-muted px-2 py-1">ChatGPT</span>
                  <span className="rounded-full bg-muted px-2 py-1">Gemini</span>
                  <span className="rounded-full bg-muted px-2 py-1">Bard</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-border/70 bg-white p-6 shadow-sm shadow-black/5">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Gửi prompt</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Thêm prompt của bạn</h2>
            <p className="mt-3 text-sm leading-6 text-foreground/70">
              Gửi prompt bạn đã tạo để lưu tạm thời trong trình duyệt. Sau này có thể chuyển sang Supabase.
            </p>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold text-foreground" htmlFor="user-prompt">
                Prompt của bạn
              </label>
              <textarea
                id="user-prompt"
                value={submittedPrompt}
                onChange={(event) => setSubmittedPrompt(event.target.value)}
                rows={6}
                className="w-full rounded-3xl border border-border/70 bg-muted px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Nhập prompt tiếng Việt của bạn..."
              />
              <button
                type="submit"
                className="w-full rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Lưu prompt
              </button>
            </form>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-muted p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Mẹo prompt</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground/75">
              <li>• Mô tả rõ mục tiêu và định dạng mong muốn.</li>
              <li>• Kèm ví dụ nếu cần để AI hiểu đúng.</li>
              <li>• Đặt câu hỏi cụ thể, tránh lệnh quá chung chung.</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
