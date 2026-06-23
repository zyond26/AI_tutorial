import type { Metadata } from "next";
import PromptExplorer from "@/components/PromptExplorer";

export const metadata: Metadata = {
  title: "Thư viện prompt | AI Cho Tôi",
  description: "Các prompt mẫu AI để viết nội dung, học tập và sáng tạo bằng tiếng Việt.",
};

export default function PromptMauPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Thư viện prompt</p>
        <h1 className="text-5xl font-semibold tracking-tight text-foreground">Prompt mẫu cho AI tiếng Việt</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Khám phá prompt mẫu cho học tập, lập trình, kinh doanh, ảnh, video và mạng xã hội. Tìm prompt phù hợp và copy ngay vào ChatGPT.
        </p>
      </div>
      <PromptExplorer />
    </main>
  );
}
