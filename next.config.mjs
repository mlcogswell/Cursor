/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Cursor' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Cursor/' : '',
}

export default nextConfig
