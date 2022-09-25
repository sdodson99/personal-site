/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['page.tsx'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

module.exports = nextConfig;
