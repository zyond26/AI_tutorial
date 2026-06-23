"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Tool } from "@/data/tools";
import { Prompt } from "@/data/prompts";
import ToolCard from "@/components/ToolCard";

export type Guide = {
  id: string;
  title: string;
  readingTime: string;
  excerpt: string;
};

type CategoryPageProps = {
  category: string;
  title: string;
  description: string;
  color: string;
  tools: Tool[];
  guides: Guide[];
  prompts: Prompt[];
};

const roadmapSteps = [
  {
    title: "Xác định mục tiêu",
    description: "Chọn mục tiêu AI phù hợp: học tập, kinh doanh, thiết kế hoặc video.",
    time: "15 phút",
  },
  {
    title: "Chọn công cụ",
    description: "Lựa công cụ phù hợp theo nhu cầu và lĩnh vực của bạn.",
    time: "10 phút",
  },
  {
    title: "Thử prompt",
    description: "Dùng mẫu prompt để kiểm tra và tinh chỉnh kết quả AI.",
    time: "20 phút",
  },
  {
    title: "Hoàn thiện quy trình",
    description: "Áp dụng kết quả vào bài tập, content hoặc sản phẩm thực tế.",
    time: "30 phút",
  },
];

const categoryIcons: Record<string, string> = {
  "hoc-tap": "📚",
  "lap-trinh": "💻",
  "kinh-doanh": "📈",
  "anh-ai": "🖼️",
  "video-ai": "🎬",
  "mang-xa-hoi": "🌐",
  "prompt-mau": "🪄",
};

export default function CategoryPage({
  category,
  title,
  description,
  color,
  tools,
  guides,
  prompts,
}: CategoryPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const stats = useMemo(
    () => [
      `${tools.length} Công cụ`,
      `${prompts.length} Prompt mẫu`,
      `${guides.length} Hướng dẫn`,
      `Color: ${color}`,
    ],
    [tools.length, prompts.length, guides.length, color]
  );

  useEffect(() => {
    const saved = window.localStorage.getItem(`category-progress-${category}`);
    if (saved) {
      setCurrentStep(Number(saved));
    }
  }, [category]);

  useEffect(() => {
    window.localStorage.setItem(`category-progress-${category}`, String(currentStep));
  }, [category, currentStep]);

  const relatedTools = tools.slice(0, 4);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedPrompt(value);
      window.setTimeout(() => setCopiedPrompt(null), 2000);
    } catch {
      setCopiedPrompt(value);
      window.setTimeout(() => setCopiedPrompt(null), 2000);
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-sm text-foreground/70">
        <Link href="/" className="font-semibold text-primary hover:underline">
          Trang chủ
        </Link>
        <span className="mx-2">→</span>
        <span className="font-semibold text-foreground">{title}</span>
      </div>

      <section className="rounded-[2rem] border border-border/70 bg-white px-6 py-8 shadow-sm shadow-black/5 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl text-4xl" style={{ backgroundColor: color }}>
            {categoryIcons[category] ?? "⭐"}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{title}</p>
            <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-foreground/75">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {stats.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-muted px-4 py-2 text-sm font-medium text-foreground/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Công cụ</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Dùng ngay những công cụ tốt nhất</h2>
          </div>
          <span className="text-sm text-foreground/70">{tools.length} công cụ được chọn lọc</span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Lộ trình</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Quy trình 4 bước để làm chủ {title.toLowerCase()}</h2>
          </div>
          <div className="rounded-full border border-primary/60 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            Bạn đang ở bước {currentStep} / {roadmapSteps.length}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {roadmapSteps.map((step, index) => {
            const active = currentStep === index + 1;
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setCurrentStep(index + 1)}
                className={`group rounded-[1.75rem] border p-6 text-left transition ${
                  active ? "border-primary bg-primary/5 shadow-sm" : "border-border/70 bg-muted"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-foreground/70">{step.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-foreground/50">{step.time}</p>
              </button>
            );
          })}
        </div>
      </section>

      {category === "video-ai" && (
        <section className="space-y-6 rounded-[2rem] border border-border/70 bg-white px-6 py-8 shadow-sm shadow-black/5 sm:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Quy trình làm video</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Từ ý tưởng đến xuất bản</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-5">
            {[
              "Ý tưởng",
              "Script",
              "Quay",
              "Dựng",
              "Đăng",
            ].map((label) => (
              <div key={label} className="rounded-3xl border border-border/70 bg-muted px-4 py-6 text-center text-sm font-semibold text-foreground">
                {label}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border/70 bg-muted p-6">
            <table className="min-w-full text-left text-sm text-foreground/75">
              <thead>
                <tr>
                  <th className="px-4 py-3">Công cụ</th>
                  <th className="px-4 py-3">Ưu điểm</th>
                  <th className="px-4 py-3">Phù hợp</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tool: "CapCut",
                    benefit: "Chỉnh sửa video nhanh, dễ dùng",
                    fit: "Social media, video ngắn",
                  },
                  {
                    tool: "DaVinci",
                    benefit: "Chỉnh màu và dựng chuyên sâu",
                    fit: "Video chuyên nghiệp, hậu kỳ",
                  },
                  {
                    tool: "Runway",
                    benefit: "AI tạo cảnh và hiệu ứng tự động",
                    fit: "Video sáng tạo với AI",
                  },
                ].map((row) => (
                  <tr key={row.tool} className="border-t border-border/70">
                    <td className="px-4 py-4 font-semibold text-foreground">{row.tool}</td>
                    <td className="px-4 py-4">{row.benefit}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {category === "anh-ai" && (
        <section className="space-y-6 rounded-[2rem] border border-border/70 bg-white px-6 py-8 shadow-sm shadow-black/5 sm:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Before / After</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">So sánh chỉnh sửa ảnh AI</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-black/5 p-6 text-center">
              <div className="mb-4 rounded-3xl bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 p-20 text-lg font-semibold text-slate-700">
                Ảnh trước
              </div>
              <p className="text-sm text-foreground/70">Ảnh gốc hàng hoá hoặc portrait chưa chỉnh sửa.</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-black/5 p-6 text-center">
              <div className="mb-4 rounded-3xl bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 p-20 text-lg font-semibold text-white">
                Ảnh sau
              </div>
              <p className="text-sm text-foreground/70">Ảnh đã xử lý với AI, xóa phông và tăng chi tiết.</p>
            </div>
          </div>
          <div className="overflow-x-auto rounded-3xl border border-border/70 bg-muted p-6">
            <table className="min-w-full text-left text-sm text-foreground/75">
              <thead>
                <tr>
                  <th className="px-4 py-3">Công cụ</th>
                  <th className="px-4 py-3">Điểm mạnh</th>
                  <th className="px-4 py-3">Sử dụng cho</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tool: "Canva AI",
                    benefit: "Thiết kế nhanh, nhiều template",
                    fit: "Social post, banner",
                  },
                  {
                    tool: "Midjourney",
                    benefit: "Ảnh nghệ thuật và prompt sáng tạo",
                    fit: "Concept art, poster",
                  },
                  {
                    tool: "Adobe Firefly",
                    benefit: "Chỉnh sửa ảnh linh hoạt và chuyên sâu",
                    fit: "Thiết kế thương hiệu",
                  },
                  {
                    tool: "Remove.bg",
                    benefit: "Xóa phông nền tự động",
                    fit: "Ảnh sản phẩm, avatar",
                  },
                ].map((row) => (
                  <tr key={row.tool} className="border-t border-border/70">
                    <td className="px-4 py-4 font-semibold text-foreground">{row.tool}</td>
                    <td className="px-4 py-4">{row.benefit}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Hướng dẫn</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Bài viết và hướng dẫn hữu ích</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.id} className="overflow-hidden rounded-3xl border border-border/70 bg-white shadow-sm shadow-black/5">
              <div className="h-48 bg-muted" />
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-foreground">{guide.title}</h3>
                <p className="text-sm leading-6 text-foreground/70">{guide.excerpt}</p>
                <p className="text-sm font-medium text-primary">{guide.readingTime}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Prompt mẫu</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Copy prompt & thử ngay</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {prompts.map((prompt) => (
            <div key={prompt.id} className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm shadow-black/5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{prompt.title}</p>
                  <p className="mt-2 text-sm text-foreground/70">{prompt.useCase} • {prompt.difficulty}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(prompt.template)}
                  className="rounded-full border border-border/70 bg-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  {copiedPrompt === prompt.template ? "Đã copy" : "Copy"}
                </button>
              </div>
              <p className="mt-4 whitespace-pre-line rounded-3xl bg-muted/70 p-4 text-sm leading-6 text-foreground/75">
                {prompt.template}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-border/70 bg-white px-6 py-8 shadow-sm shadow-black/5 sm:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Thường dùng cùng nhau</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Các công cụ liên quan</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/cong-cu/${tool.id}`}
              className="rounded-3xl border border-border/70 bg-muted px-5 py-6 text-left transition hover:border-primary/80 hover:bg-white"
            >
              <p className="text-sm font-semibold text-primary">{tool.name}</p>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{tool.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
