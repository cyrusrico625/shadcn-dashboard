/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
