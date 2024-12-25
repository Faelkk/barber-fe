import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  domains: ["tjkcssowevhrffvicjwr.supabase.co"], // Add the domain here
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tjkcssowevhrffvicjwr.supabase.co",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
