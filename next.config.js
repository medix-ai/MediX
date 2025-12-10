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
  // 정적 export에서는 API route 제외
  excludeDefaultMomentLocales: true,
};

module.exports = nextConfig;

