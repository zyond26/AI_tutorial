"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const useCases = [
  "Học sinh ôn thi...",
  "Chủ shop viết content...",
  "Lập trình viên debug code...",
  "Người 50+ dùng ChatGPT...",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % useCases.length);
        setVisible(true);
      }, 300);
    }, 2000);

    return () => {
      window.clearInterval(interval);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/95 px-6 py-10 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.75)] sm:px-10">
      <div className="absolute right-10 top-6 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute left-6 bottom-10 h-28 w-28 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative max-w-4xl">
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">✨</span>
          AI_tutorial dành cho mọi lứa tuổi
        </p>
        <h1 className="text-[34px] font-semibold leading-tight tracking-tight text-foreground sm:text-[52px]">
          AI thông minh, chuyên nghiệp và thân thiện với trẻ nhỏ
        </h1>
        <p className="mt-5 max-w-3xl text-[18px] leading-8 text-foreground/70">
          Hướng dẫn prompt chuẩn, chọn công cụ đúng, tiết kiệm thời gian và giữ an toàn khi sử dụng AI cho học tập và sáng tạo.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Dễ hiểu", icon: "🧠", description: "Hướng dẫn prompt rõ ràng cho mọi trình độ." },
            { label: "An toàn cho trẻ em", icon: "👧👦", description: "Chọn lọc nội dung phù hợp học sinh." },
            { label: "Chuyên nghiệp", icon: "🌟", description: "Ứng dụng thực tế cho học tập và kinh doanh." },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-border/70 bg-muted p-4 text-sm text-foreground/85 transition hover:border-primary hover:bg-primary/5">
              <p className="text-xl">{item.icon}</p>
              <p className="mt-3 font-semibold text-foreground">{item.label}</p>
              <p className="mt-2 text-xs leading-5 text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 shadow-lg shadow-primary/10"
          >
            Bắt đầu khám phá
          </button>
          <Link
            href="/prompt-mau"
            className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Xem prompt mẫu
          </Link>
        </div>

        <div className="mt-8 grid gap-4 text-center text-sm text-foreground/70 sm:grid-cols-4">
          {[
            "80+ Công cụ",
            "300+ Prompt mẫu",
            "6 Lĩnh vực",
            "100% Miễn phí",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border/70 bg-background/80 px-4 py-4">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
