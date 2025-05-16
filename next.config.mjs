/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Cursor' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Cursor/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    path: process.env.NODE_ENV === 'production' ? '/Cursor/_next/image' : '/_next/image',
    remotePatterns: [],
  },
}

export default nextConfig
