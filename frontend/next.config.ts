import type { NextConfig } from "next";

const backendUrl = process.env.NODE_ENV === 'production' 
  ? 'https://apartment-backend-peach.vercel.app'
  : 'http://localhost:3001';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${backendUrl}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
