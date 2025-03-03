/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/veterinario-next',
  images: {
    unoptimized: true, // Required for static exports
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/veterinario-next/' : '', //Important for github pages subdirectories
};

module.exports = nextConfig;