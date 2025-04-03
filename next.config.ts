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
  typescript: {
    ignoreBuildErrors: true, // Ignora erros de tipagem apenas na build
  }
};

export default nextConfig;