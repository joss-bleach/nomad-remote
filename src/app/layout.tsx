import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AppProvider } from "@/providers/app-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nomad",
    default: "Work from anywhere",
  },
  description:
    "Discover and book long-term stays tailored for remote workers. Find fully-equipped homes with fast WiFi, workspaces, and vibrant digital nomad communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
