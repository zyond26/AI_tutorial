import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import PromptLibrary from "@/components/PromptLibrary";
import ToolList from "@/components/ToolList";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "AI_tutorial | aichotoi.vn",
  description: "Tài nguyên AI tiếng Việt cho học tập, kinh doanh, lập trình và sáng tạo nội dung.",
};

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <Hero />

      <section className="mt-16 rounded-[2rem] border border-primary/20 bg-primary/5 p-8 shadow-sm shadow-primary/10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Prompt chuyên nghiệp</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Viết prompt chuẩn như chuyên gia AI</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/75">
              Dẫn dắt AI bằng cách xác định ngay vai trò, nhiệm vụ, phong cách và định dạng đầu ra. Prompt rõ ràng giúp kết quả nhanh, chính xác và an toàn hơn.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border/70 bg-card p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Bước 1</p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">Role - Vai trò</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Xác định AI đang đóng vai trò gì: giáo viên, chuyên gia, trợ lý hay người bạn đồng hành.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Bước 2</p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">Task - Nhiệm vụ</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Mô tả chính xác AI phải làm gì: viết nội dung, so sánh, tóm tắt, phân tích, lập kế hoạch...
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Bước 3</p>
            <h3 className="mt-3 text-xl font-semibold text-foreground">Context & Style</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Thêm thông tin nền, đối tượng và phong cách: thân thiện, chuyên nghiệp, ngắn gọn, vui nhộn.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-background/90 p-6 border border-border/70">
          <h3 className="text-lg font-semibold text-foreground">Ví dụ prompt chuẩn</h3>
          <pre className="mt-4 overflow-x-auto rounded-3xl bg-muted p-4 text-sm leading-6 text-foreground/80">
"Bạn là một <strong>[chuyên gia]</strong>. Hãy giúp tôi <strong>[nhiệm vụ cụ thể]</strong> cho <strong>[đối tượng]</strong> với <strong>[bối cảnh]</strong> và yêu cầu <strong>[phong cách / định dạng]</strong>."
          </pre>
          <p className="mt-4 text-sm text-foreground/70">
            Ví dụ: "Bạn là một giáo viên STEM. Hãy viết một bài học 5 phút về lập trình robot cho học sinh lớp 7, dùng ngôn ngữ vui vẻ và rõ ràng."
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-border/70 bg-muted p-8 shadow-sm shadow-black/5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">AI_tutorial khác biệt</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">Nền tảng AI chuyên nghiệp, chọn lọc và an toàn</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/70">
              Chúng tôi tập trung vào hướng dẫn rõ ràng, prompt chuẩn và nội dung phù hợp cho cả trẻ em cùng người lớn.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {[
            {
              title: "Lọc kỹ nội dung",
              description: "Chỉ chọn đề xuất phù hợp, tránh nội dung rối rắm.",
            },
            {
              title: "Prompt chuẩn",
              description: "Cấu trúc rõ ràng, dễ copy và chỉnh sửa ngay.",
            },
            {
              title: "Dành cho giáo viên",
              description: "Có lời khuyên an toàn cho học sinh và phụ huynh.",
            },
            {
              title: "Cập nhật liên tục",
              description: "Đề xuất công cụ mới nhất theo từng lĩnh vực.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border/70 bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Giới thiệu AI</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">AI là gì và vì sao bạn nên dùng nó đúng cách</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/70">
            Trí tuệ nhân tạo giúp bạn tự động hóa công việc, tạo nội dung nhanh và tìm ra hướng giải quyết thông minh. Nhưng quan trọng nhất là biết dùng AI có mục đích và kiểm soát kết quả.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-border/70 bg-card/80 p-6">
            <h3 className="text-xl font-semibold text-foreground">AI là gì</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/70">
              AI là công nghệ giúp máy tính phân tích thông tin, tìm mẫu và đưa ra gợi ý giống như một trợ lý thông minh.
            </p>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/80 p-6">
            <h3 className="text-xl font-semibold text-foreground">Lợi ích</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground/70">
              <li>Tiết kiệm thời gian và tăng hiệu suất.</li>
              <li>Hỗ trợ viết nội dung, học tập, phân tích và sáng tạo.</li>
              <li>Giúp người mới dễ tiếp cận các ý tưởng kỹ thuật số.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border/70 bg-card/80 p-6">
            <h3 className="text-xl font-semibold text-foreground">Mặt hại</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground/70">
              <li>Cần kiểm tra kỹ vì AI không phải lúc nào cũng đúng.</li>
              <li>Có thể lệ thuộc nếu dùng thay thế suy nghĩ con người.</li>
              <li>Phải cẩn trọng với dữ liệu riêng tư và bản quyền.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm shadow-black/5">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              title: "Chuyên nghiệp",
              description: "Prompt chuẩn, cấu trúc rõ ràng, kết quả chính xác.",
              icon: "🎯",
            },
            {
              title: "An toàn",
              description: "Chủ đề chọn lọc, phù hợp trẻ em và phụ huynh yên tâm.",
              icon: "🛡️",
            },
            {
              title: "Dễ tiếp cận",
              description: "Hướng dẫn cho mọi trình độ, từ người mới đến người dùng nâng cao.",
              icon: "🚀",
            },
            {
              title: "Thực hành nhanh",
              description: "Ví dụ mẫu, prompt dùng ngay và copy nhanh.",
              icon: "⚡",
            },
          ].map((item) => (
            <div key={item.title} className="group rounded-3xl border border-border/70 bg-muted p-6 transition hover:border-primary hover:shadow-lg hover:shadow-primary/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

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

      <section className="mt-20 space-y-6 rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm shadow-black/5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Hướng dẫn prompt</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground">Viết prompt chuyên nghiệp, chuẩn chỉnh</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-foreground/70">
            Hướng dẫn này giúp bạn tạo prompt rõ ràng, có cấu trúc và dễ tối ưu cho AI. Áp dụng cho ChatGPT, Gemini, Bard hoặc mọi trợ lý văn bản.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border/70 bg-muted p-6">
            <h3 className="text-xl font-semibold text-foreground">1. R-T-C</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Role - Task - Context là dạng cơ bản nhất để AI hiểu bạn cần ai làm việc gì trong hoàn cảnh nào.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li><strong>Role:</strong> Xác định vai trò chuyên gia.</li>
              <li><strong>Task:</strong> Nhiệm vụ cụ thể, rõ ràng.</li>
              <li><strong>Context:</strong> Bối cảnh, giới hạn và đối tượng.</li>
            </ul>
            <p className="mt-4 rounded-3xl bg-background/80 p-4 text-sm text-foreground/80">
              "Bạn là một <strong>[Vai trò]</strong>. Hãy giúp tôi <strong>[Nhiệm vụ]</strong> cho <strong>[Bối cảnh]</strong> với điều kiện <strong>[Giới hạn]</strong>."
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-muted p-6">
            <h3 className="text-xl font-semibold text-foreground">2. T-A-S-K</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Công thức toàn diện giúp bạn yêu cầu AI kỹ hơn: Target, Action, Setting/Style, Key Deliverable.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li><strong>Target:</strong> Định rõ vai trò và mục tiêu.</li>
              <li><strong>Action:</strong> Hành động AI phải làm.</li>
              <li><strong>Setting/Style:</strong> Giọng văn và bối cảnh.</li>
              <li><strong>Key Deliverable:</strong> Định dạng kết quả mong muốn.</li>
            </ul>
            <p className="mt-4 rounded-3xl bg-background/80 p-4 text-sm text-foreground/80">
              "[Target]: Bạn là chuyên gia về <strong>[Lĩnh vực]</strong>. [Action]: Hãy <strong>[Hành động]</strong>. [Setting/Style]: Sử dụng giọng <strong>[Phong cách]</strong>. [Key Deliverable]: Trình bày dưới dạng <strong>[Bảng/Danh sách]</strong>."
            </p>
          </div>

          <div className="rounded-3xl border border-border/70 bg-muted p-6">
            <h3 className="text-xl font-semibold text-foreground">3. F-S-P</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/75">
              Few-Shot Prompting là cách dạy AI bằng ví dụ trước khi yêu cầu mới.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li><strong>Formula:</strong> Nói cách bạn muốn làm việc.</li>
              <li><strong>Sample:</strong> Cung cấp 1-2 ví dụ mẫu.</li>
              <li><strong>Prompt:</strong> Yêu cầu mới theo cùng phong cách.</li>
            </ul>
            <p className="mt-4 rounded-3xl bg-background/80 p-4 text-sm text-foreground/80">
              "Đây là cách tôi làm... Đây là ví dụ... Bây giờ hãy làm điều tương tự với..."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
