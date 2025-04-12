/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
      "i.pinimg.com",
      "avatarfiles.alphacoders.com",
      "peterdraw.studio",
      "blog.uxfol.io",
      "wallpapers.com"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatarfiles.alphacoders.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "peterdraw.studio",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.uxfol.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wallpapers.com",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
