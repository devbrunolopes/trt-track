import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "TRT TRACK",
    short_name: "TRT TRACK",
    description: "Acompanhe seus registros e planos de aplicação.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "pt-BR",
    categories: ["health", "utilities"],
    icons: [
      { src: "/icons/trt-track-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/trt-track-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/trt-track-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
    ]
  };
}
