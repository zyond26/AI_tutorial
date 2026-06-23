export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background/80 py-10">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
        <p>AI Cho Tôi © {new Date().getFullYear()}.</p>
        <p className="mt-2">Tập hợp tài nguyên AI tiếng Việt cho học tập, kinh doanh và sáng tạo.</p>
      </div>
    </footer>
  );
}
