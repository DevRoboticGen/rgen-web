/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.youtube.com",
      "v5.airtableusercontent.com",
      "www.material-tailwind.com",
      "images.unsplash.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
