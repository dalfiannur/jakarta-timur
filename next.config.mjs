/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.jakarta.go.id",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "**.youtube.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
