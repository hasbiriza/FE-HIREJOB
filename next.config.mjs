/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['res.cloudinary.com'], // Tambahkan domain yang diizinkan
  },
};


export default nextConfig;
