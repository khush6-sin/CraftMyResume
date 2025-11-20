import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ckesrhtmw1uz5taz.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
