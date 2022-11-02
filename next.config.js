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

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        { loader: '@svgr/webpack', options: { icon: true, titleProp: true } },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
