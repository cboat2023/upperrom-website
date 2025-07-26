import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [], // Add any external image domains here (e.g., YouTube thumbnails, external CDNs)
    formats: ['image/webp', 'image/avif'], // Modern image formats for better performance
  },
  // Optimize for production builds
  compress: true,
  // Enable static exports if needed for hosting
  // output: 'export', // Uncomment for static site generation
};

export default nextConfig;
