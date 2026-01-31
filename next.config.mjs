const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
