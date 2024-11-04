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
        hostname: "picsum.photos",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
