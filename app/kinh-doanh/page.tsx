import type { Metadata } from "next";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Kinh doanh | AI Cho Tôi",
  description: "AI hỗ trợ viết nội dung, marketing và phát triển doanh nghiệp hiệu quả.",
  openGraph: { title: "Kinh doanh | AI Cho Tôi", description: "AI hỗ trợ viết nội dung, marketing và phát triển doanh nghiệp hiệu quả.", images: ["/og-image.svg"] },
  alternates: { canonical: "https://aichotoi.vn/kinh-doanh" },
};

const categoryTools = tools.filter((tool) => tool.categories.includes("kinh-doanh"));

export default function KinhDoanhPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Kinh doanh</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">Giải pháp AI cho marketing và doanh nghiệp</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Khai thác công cụ AI giúp bạn tạo nội dung bán hàng, email, quảng cáo và chiến lược marketing nhanh chóng hơn.
        </p>
      </div>
      <ToolList tools={categoryTools} />
    </main>
  );
}
