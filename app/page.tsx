import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import PromptLibrary from "@/components/PromptLibrary";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI Cho Tôi | aichotoi.vn",
  description: "Tài nguyên AI tiếng Việt cho học tập, kinh doanh, lập trình và sáng tạo nội dung.",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <Hero />

      <section className="mt-16 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Danh mục</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Khám phá lĩnh vực AI bạn cần</h2>
          </div>
        </div>
        <CategoryGrid />
      </section>

      <section className="mt-20 space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Công cụ nổi bật</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Các nền tảng AI được chọn lọc</h2>
          </div>
        </div>
        <ToolList tools={tools.slice(0, 6)} />
      </section>

      <section className="mt-20 space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Prompt mẫu</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Mẫu prompt AI tiếng Việt</h2>
        </div>
        <PromptLibrary />
      </section>
    </main>
  );
}
