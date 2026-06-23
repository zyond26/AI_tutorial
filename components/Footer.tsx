export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80 py-10">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
        <p>AI_tutorial © {new Date().getFullYear()}. Nền tảng AI tiếng Việt chuyên nghiệp.</p>
        <p className="mt-2">Tài nguyên chọn lọc cho học tập, kinh doanh và sáng tạo nội dung an toàn.</p>
      </div>
    </footer>
  );
}
