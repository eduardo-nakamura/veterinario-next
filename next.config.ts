/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/veterinario-next',
  assetPrefix: '/veterinario-next',
  images: {
    unoptimized: true, // Required for static exports
  },
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/veterinario-next/' : '', 
};

module.exports = nextConfig;