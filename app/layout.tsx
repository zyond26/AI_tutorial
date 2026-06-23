import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import GoogleAnalyticsClient from "@/components/GoogleAnalyticsClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Cho Tôi — Hướng dẫn dùng AI thực chiến cho người Việt",
  description:
    "80+ công cụ AI, 300+ prompt mẫu, hướng dẫn từng bước cho học tập, IT, kinh doanh, làm ảnh và video",
  openGraph: {
    title: "AI Cho Tôi — Hướng dẫn dùng AI thực chiến cho người Việt",
    description:
      "80+ công cụ AI, 300+ prompt mẫu, hướng dẫn từng bước cho học tập, IT, kinh doanh, làm ảnh và video",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Cho Tôi — Hướng dẫn dùng AI thực chiến cho người Việt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <GoogleAnalyticsClient />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
