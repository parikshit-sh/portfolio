/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'], // Add this line to transpile GSAP
};

export default nextConfig;
