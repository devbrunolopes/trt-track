import type { Metadata } from "next";
import "./globals.css";
import PwaRegister from "./pwa-register";

export const metadata: Metadata = {
  title: "TRT TRACK",
  description: "Controle de aplicações e acompanhamento pessoal.",
  applicationName: "TRT TRACK",
  themeColor: "#050505",
  appleWebApp: { capable: true, statusBarStyle: "black", title: "TRT TRACK" },
  icons: {
    icon: [
      { url: "/icons/trt-track-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/trt-track-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/icons/trt-track-512.png"
  },
  formatDetection: { telephone: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body><PwaRegister />{children}</body>
    </html>
  );
}