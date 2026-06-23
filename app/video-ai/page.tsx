import type { Metadata } from "next";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Video AI | AI Cho Tôi",
  description: "Công cụ AI tạo và chỉnh sửa video nhanh chóng cho nội dung digital.",
  openGraph: { title: "Video AI | AI Cho Tôi", description: "Công cụ AI tạo và chỉnh sửa video nhanh chóng cho nội dung digital.", images: ["/og-image.svg"] },
  alternates: { canonical: "https://aichotoi.vn/video-ai" },
};

const categoryTools = tools.filter((tool) => tool.categories.includes("video-ai"));

export default function VideoAIPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Video AI</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">AI tạo và biên tập video cho nội dung hiện đại</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Khai thác AI để tạo video, làm subtitle, tạo avatar và chỉnh sửa hiệu ứng mà không cần studio phức tạp.
        </p>
      </div>
      <ToolList tools={categoryTools} />
    </main>
  );
}
