/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: "**.picsum.photos",
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
