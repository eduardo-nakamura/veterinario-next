/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/veterinario-next' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/veterinario-next' : '',
  images: {
    unoptimized: true, // Required for static exports
  },  
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/veterinario-next' : '', 
};

module.exports = nextConfig;