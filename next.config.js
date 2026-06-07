/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nexustecnologia.online" }],
        destination: "https://nexustecnologia.online/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
