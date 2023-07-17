/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.tradingview.com",
        port: "",
        pathname: "/snapshots/p/**",
      },
    ],
  },
};

module.exports = nextConfig;
