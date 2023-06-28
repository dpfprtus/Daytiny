require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  env: {
    NEXT_PUBLIC_API_URL:
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_API_URL_PROD
        : process.env.NEXT_PUBLIC_API_URL_DEV,
    G_TRACKING_ID: process.env.G_TRACKING_ID,
  },
  images: {
    unoptimized: true,
  },
};
