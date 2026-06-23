"use client";

import { useMemo, useState } from "react";
import { promptSections, type Prompt } from "@/data/prompts";

const missionGroups = [
  {
    id: "phap-su-hoc-duong",
    icon: "📚",
    title: "Pháp Sư Học Đường",
    description: "Tóm tắt sách, giải toán và luyện từ vựng Tiếng Anh bằng prompt AI.",
    categories: ["hoc-tap", "lap-trinh"],
    ageTag: "[Lớp 6-9]",
  },
  {
    id: "phu-thuy-hinh-anh",
    icon: "🎨",
    title: "Phù Thủy Hình Ảnh",
    description: "Tạo avatar anime, poster và concept art bằng AI.",
    categories: ["anh-ai"],
    ageTag: "[Lớp 10-12]",
  },
  {
    id: "nha-san-xuat-am-nhac",
    icon: "🎵",
    title: "Nhà Sản Xuất Âm Nhạc & Video",
    description: "Lên kịch bản, tạo nhạc và dựng video AI sáng tạo.",
    categories: ["video-ai"],
    ageTag: "[Lớp 10-12]",
  },
];

const difficultyStars = (difficulty: Prompt["difficulty"]) => {
  if (difficulty === "easy") return "⭐";
  if (difficulty === "medium") return "⭐⭐";
  return "⭐⭐⭐";
};

const getAgeTag = (prompt: Prompt) => {
  if (prompt.category === "hoc-tap") return "[Lớp 6-9]";
  if (prompt.category === "lap-trinh") return "[Lớp 10-12]";
  if (prompt.category === "anh-ai") return "[Lớp 10-12]";
  if (prompt.category === "video-ai") return "[Lớp 10-12]";
  if (prompt.category === "kinh-doanh") return "[Lớp 10-12]";
  return "[Lớp 10-12]";
};

const getChallengeText = (prompt: Prompt) => {
  if (prompt.category === "anh-ai") {
    return "Thử thách nhỏ: Thay cụm từ 'tạo ảnh' thành 'avatar anime' trong prompt này và xem kết quả khác đi thế nào.";
  }
  if (prompt.category === "video-ai") {
    return "Thử thách nhỏ: Thêm 'nhạc nền điện tử sôi động' vào prompt và xem kịch bản MV AI có đổi tông không.";
  }
  if (prompt.category === "hoc-tap") {
    return "Thử thách nhỏ: Thay 'bài học' bằng 'sơ đồ tư duy' để xem AI trình bày nội dung thế nào.";
  }
  return "Thử thách nhỏ: Thay đổi một chi tiết nhỏ trong prompt và so sánh kết quả AI trả về.";
};

export default function PromptLibrary() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const allPrompts = useMemo(
    () => promptSections.flatMap((section) => section.prompts),
    []
  );

  const missions = useMemo(
    () =>
      missionGroups.map((mission) => ({
        ...mission,
        prompts: allPrompts.filter((prompt) => mission.categories.includes(prompt.category)).slice(0, 3),
      })),
    [allPrompts]
  );

  const handleCopy = async (value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedPrompt(value);
    window.setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-border/70 bg-muted p-7 text-foreground/80 shadow-sm shadow-black/5">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Nhiệm vụ AI Hub</p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">Chọn Quest, copy prompt và bắt đầu hành trình học AI</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground/70">
          Mỗi mission là một thử thách thú vị cho học sinh: từ môn học, ảnh AI đến video sáng tạo. Thử thách nhỏ giúp bạn chơi cùng AI và làm chủ kỹ năng prompt.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {missions.map((mission) => (
          <div key={mission.id} className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm shadow-black/5">
            <div className="flex items-center gap-3 text-xl font-semibold text-foreground">
              <span>{mission.icon}</span>
              {mission.title}
            </div>
            <p className="mt-3 text-sm leading-7 text-foreground/70">{mission.description}</p>
            <div className="mt-5 grid gap-4">
              {mission.prompts.map((prompt) => (
                <article key={prompt.id} className="rounded-3xl border border-border/70 bg-muted p-4">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/70">
                    <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-cyan-200">{getAgeTag(prompt)}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{prompt.useCase}</span>
                    <span className="rounded-full bg-slate-800/80 px-2 py-1">{difficultyStars(prompt.difficulty)}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{prompt.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/75">{prompt.template}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleCopy(prompt.template)}
                      className="rounded-full border border-border/70 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
                    >
                      {copiedPrompt === prompt.template ? "Đã copy!" : "Một chạm - Copy nhanh"}
                    </button>
                    <span className="rounded-full bg-slate-950/80 px-3 py-2 text-xs text-slate-200">
                      Độ khó: {difficultyStars(prompt.difficulty)}
                    </span>
                  </div>
                  <p className="mt-4 rounded-3xl bg-slate-950/90 px-4 py-3 text-sm leading-6 text-slate-100">
                    {getChallengeText(prompt)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
