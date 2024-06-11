/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: { unoptimized: true }, 
    output: 'export',
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      }
};

module.exports = nextConfig;
