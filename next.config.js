/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/study-guide', destination: '/study-guide.html' },
    ]
  },
}

module.exports = nextConfig
