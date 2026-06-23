import type { Metadata } from "next";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Học tập | AI Cho Tôi",
  description: "Công cụ AI giúp học tập, ôn luyện và tự học bằng tiếng Việt.",
  openGraph: {
    title: "Học tập | AI Cho Tôi",
    description: "Công cụ AI giúp học tập, ôn luyện và tự học bằng tiếng Việt.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://aichotoi.vn/hoc-tap",
  },
};

const categoryTools = tools.filter((tool) => tool.categories.includes("hoc-tap"));

export default function HocTapPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Học tập</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">Công cụ AI cho học tập hiệu quả</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Khám phá các nền tảng AI hỗ trợ tự học, giải bài, soạn bài và ôn luyện. Những công cụ này giúp bạn tăng tốc kiến thức và làm việc hiệu quả hơn.
        </p>
      </div>
      <ToolList tools={categoryTools} />
    </main>
  );
}
