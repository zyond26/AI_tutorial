import type { Metadata } from "next";
import PromptExplorer from "@/components/PromptExplorer";
import PromptLibrary from "@/components/PromptLibrary";

export const metadata: Metadata = {
  title: "AI Tutorial Hub | AI_tutorial",
  description: "Học viện AI thu nhỏ cho học sinh lớp 6-12: quest prompt, AI workflow và sáng tạo dự án.",
};

export default function PromptMauPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <section className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-10 text-slate-100 shadow-[0_30px_80px_-50px_rgba(34,211,238,0.55)] sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">🧙‍♂️</span>
            AI Tutorial Hub
          </div>

          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Học viện AI thu nhỏ: học mà chơi, tạo sản phẩm AI trong lớp học
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              Chọn Thử thách, copy prompt một chạm, và thực hành theo chuỗi AI Workflow để biến ý tưởng thành sản phẩm thật — từ kịch bản đến âm nhạc, hình ảnh và video.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Quest dễ dàng", value: "Prompt cho lớp 6-9", icon: "✨" },
              { title: "AI workflow", value: "ChatGPT → Suno → Midjourney → CapCut", icon: "⚡" },
              { title: "Copy nhanh", value: "Button một chạm", icon: "🖱️" },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-cyan-500/20 bg-slate-950/70 p-5 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center gap-3 text-2xl">{item.icon}</div>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-cyan-300">{item.title}</p>
                <p className="mt-2 text-base leading-7 text-slate-300">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-cyan-500/30 bg-slate-900/90 p-6 shadow-inner shadow-cyan-500/10">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              {[
                { label: "ChatGPT", color: "bg-cyan-500/10 text-cyan-200" },
                { label: "Suno AI", color: "bg-violet-500/10 text-violet-200" },
                { label: "Midjourney", color: "bg-fuchsia-500/10 text-fuchsia-200" },
                { label: "CapCut", color: "bg-emerald-500/10 text-emerald-200" },
              ].map((item, index) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`rounded-3xl border border-slate-800/70 px-4 py-3 text-sm font-semibold ${item.color}`}>
                    {item.label}
                  </div>
                  {index < 3 ? <span className="text-2xl text-cyan-300">→</span> : null}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Xưởng Chế Tạo AI giúp học sinh hình dung quy trình: viết kịch bản, tạo nhạc, dựng ảnh chất và làm video hoàn chỉnh với AI.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <PromptLibrary />
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-sm shadow-black/5">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Xưởng Chế Tạo AI</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Chuỗi workflow AI</h2>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Dạy bạn cách phối hợp nhiều AI: ChatGPT viết, Suno AI tạo nhạc, Midjourney tạo ảnh và CapCut dựng video.
            </p>

            <div className="mt-6 space-y-4 rounded-3xl border border-border/70 bg-muted p-5">
              {[
                {
                  step: "1",
                  title: "Viết kịch bản",
                  detail: "ChatGPT giúp tạo nội dung, lời thoại và cấu trúc dự án.",
                },
                {
                  step: "2",
                  title: "Tạo nhạc nền",
                  detail: "Suno AI biến ý tưởng thành giai điệu sôi động.",
                },
                {
                  step: "3",
                  title: "Tạo ảnh",
                  detail: "Midjourney / Leonardo vẽ poster, avatar hoặc concept art.",
                },
                {
                  step: "4",
                  title: "Dựng video",
                  detail: "CapCut ghép hình và nhạc thành MV giới thiệu sản phẩm.",
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 rounded-3xl bg-slate-950/80 p-4 text-slate-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-lg font-semibold text-cyan-200">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-secondary/5 p-6 shadow-sm shadow-black/5">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Bảng nhiệm vụ</p>
            <div className="mt-6 space-y-4">
              {[
                {
                  icon: "📚",
                  title: "Pháp Sư Học Đường",
                  detail: "Tóm tắt sách, giải toán và luyện từ vựng bằng prompt AI.",
                },
                {
                  icon: "🎨",
                  title: "Phù Thủy Hình Ảnh",
                  detail: "Tạo tranh, avatar anime và thiết kế poster AI.",
                },
                {
                  icon: "🎵",
                  title: "Nhà Sản Xuất Âm Nhạc & Video",
                  detail: "Soạn kịch bản MV, nhạc nền và dựng video.<br/>Dùng Suno + CapCut.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/70 bg-card p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="mt-1 text-sm text-foreground/70" dangerouslySetInnerHTML={{ __html: item.detail }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-10">
        <PromptExplorer />
      </section>
    </main>
  );
}
