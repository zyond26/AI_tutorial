import type { Metadata } from "next";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Ảnh AI | AI_tutorial",
  description: "Công cụ AI để tạo ảnh, thiết kế và nội dung visual đẹp mắt.",
  openGraph: { title: "Ảnh AI | AI_tutorial", description: "Công cụ AI để tạo ảnh, thiết kế và nội dung visual đẹp mắt.", images: ["/og-image.svg"] },
  alternates: { canonical: "https://aichotoi.vn/anh-ai" },
};

const categoryTools = tools.filter((tool) => tool.categories.includes("anh-ai"));

export default function AnhAIPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Ảnh AI</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">Tạo ảnh AI chuyên nghiệp trong vài bước</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Khám phá nền tảng AI hỗ trợ tạo poster, ảnh minh họa và nội dung visual cho dự án sáng tạo của bạn.
        </p>
      </div>
      <ToolList tools={categoryTools} />
    </main>
  );
}
