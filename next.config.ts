import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "tp9n04jb036e1nrw.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
