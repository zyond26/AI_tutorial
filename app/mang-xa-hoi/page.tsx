import type { Metadata } from "next";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Mạng xã hội | AI_tutorial",
  description: "Công cụ AI để tạo nội dung mạng xã hội và tối ưu tương tác.",
  openGraph: { title: "Mạng xã hội | AI_tutorial", description: "Công cụ AI để tạo nội dung mạng xã hội và tối ưu tương tác.", images: ["/og-image.svg"] },
  alternates: { canonical: "https://aichotoi.vn/mang-xa-hoi" },
};

const categoryTools = tools.filter((tool) => tool.categories.includes("mang-xa-hoi"));

export default function MangXaHoiPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Mạng xã hội</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">AI hỗ trợ nội dung và chiến lược social media</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Khám phá công cụ AI giúp bạn tạo bài đăng, caption và kế hoạch nội dung cho Facebook, Instagram, TikTok và YouTube.
        </p>
      </div>
      <ToolList tools={categoryTools} />
    </main>
  );
}
