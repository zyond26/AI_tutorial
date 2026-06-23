import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Configure static export so the site can be deployed to GitHub Pages
  output: "export",
  // Useful for GitHub Pages where routes expect a file for each path
  trailingSlash: true,
};

export default nextConfig;
