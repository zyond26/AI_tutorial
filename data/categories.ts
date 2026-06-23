export type Category = {
  slug: string;
  title: string;
  description: string;
  emoji: string;
};

export const categories: Category[] = [
  {
    slug: "hoc-tap",
    title: "Học tập",
    description: "Công cụ hỗ trợ học tập, ghi nhớ và sáng tạo nội dung giáo dục.",
    emoji: "📚",
  },
  {
    slug: "lap-trinh",
    title: "IT & Dev",
    description: "Giải pháp AI dành cho lập trình, tự động hóa và quản lý dự án.",
    emoji: "💻",
  },
  {
    slug: "kinh-doanh",
    title: "Kinh doanh",
    description: "Công cụ AI giúp viết nội dung, marketing và quản lý doanh nghiệp.",
    emoji: "📈",
  },
  {
    slug: "anh-ai",
    title: "Ảnh AI",
    description: "Sáng tạo hình ảnh đẹp mắt, thiết kế nhanh và ý tưởng visual.",
    emoji: "🖼️",
  },
  {
    slug: "video-ai",
    title: "Video AI",
    description: "Tạo video chuyên nghiệp với nội dung tự động và chỉnh sửa thông minh.",
    emoji: "🎬",
  },
  {
    slug: "mang-xa-hoi",
    title: "Mạng xã hội",
    description: "Tối ưu nội dung và chiến lược cho các nền tảng mạng xã hội.",
    emoji: "🌐",
  },
  {
    slug: "prompt-mau",
    title: "Thư viện prompt",
    description: "Kho prompt mẫu cho viết bài, bán hàng, sáng tạo và học tập.",
    emoji: "🪄",
  },
];
