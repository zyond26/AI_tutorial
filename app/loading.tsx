export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
        <p className="text-sm font-medium text-foreground/70">Đang tải…</p>
      </div>
    </div>
  );
}
