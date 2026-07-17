import type { NextConfig } from "next"

const basePath = "/macosta"

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
