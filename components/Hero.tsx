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
    <section className="rounded-[2rem] border border-border/70 bg-white px-6 py-10 shadow-xl shadow-black/5 sm:px-10">
      <div className="max-w-4xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          AI Cho Tôi
        </p>
        <h1 className="text-[32px] font-semibold leading-tight tracking-tight text-foreground sm:text-[48px]">
          Dùng AI tăng năng suất gấp 3 lần — không cần biết lập trình
        </h1>
        <p className="mt-5 max-w-3xl text-[18px] leading-8 text-foreground/70">
          Dành cho học sinh, chủ shop, lập trình viên và người làm nội dung muốn tiết kiệm thời gian bằng AI.
        </p>

        <div className="mt-8 rounded-3xl border border-border/70 bg-muted px-5 py-4 text-[18px] font-medium text-foreground/85 transition">
          <span className="inline-block h-5 w-5 animate-pulse rounded-full bg-primary"></span>
          <span className={`ml-3 inline-block transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}>
            {useCases[currentIndex]}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Chọn lộ trình của tôi
          </button>
          <Link
            href="/prompt-mau"
            className="inline-flex items-center justify-center rounded-full border border-border/80 bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
          >
            Xem công cụ miễn phí
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
