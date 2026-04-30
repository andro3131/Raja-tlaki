import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raja-tlaki.b-cdn.net",
      },
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;
