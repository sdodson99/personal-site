/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createBundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
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
});

module.exports = nextConfig;
