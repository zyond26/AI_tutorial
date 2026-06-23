"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsClient() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;
  return <GoogleAnalytics gaId={id} />;
}
