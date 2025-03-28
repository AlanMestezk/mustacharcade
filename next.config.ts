import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sujeitoprogramador.com", // Substitua pelo seu domínio de imagem
      },
    ],
  },
};

export default nextConfig;