/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Ignore TypeScript errors during build
  },
  output: 'export', // ✅ Enables static export
  images: {
    unoptimized: true, // ✅ Disable Next.js image optimization
  },
  trailingSlash: true, // ✅ Adds a trailing slash for better static hosting
};

module.exports = nextConfig;
