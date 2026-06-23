import type { Metadata } from "next";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "IT & Dev | AI_tutorial",
  description: "Công cụ AI dành cho lập trình viên, tự động hóa và phát triển sản phẩm.",
  openGraph: {
    title: "IT & Dev | AI_tutorial",
    description: "Công cụ AI dành cho lập trình viên, tự động hóa và phát triển sản phẩm.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "https://aichotoi.vn/lap-trinh" },
};

const categoryTools = tools.filter((tool) => tool.categories.includes("lap-trinh"));

export default function LapTrinhPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="space-y-4 pb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">IT &amp; Dev</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">AI cho lập trình và phát triển sản phẩm</h1>
        <p className="max-w-3xl text-base leading-7 text-foreground/75">
          Tìm công cụ AI giúp bạn viết mã, tự động hóa quá trình phát triển và tối ưu workflow. Phù hợp cho dev và nhóm kỹ thuật.
        </p>
      </div>
      <ToolList tools={categoryTools} />
    </main>
  );
}
