/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/MediX' : '',
  assetPrefix: isProd ? '/MediX' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

