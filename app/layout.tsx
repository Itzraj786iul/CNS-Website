import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import { MainLayout } from "@/components/layout/main-layout";
import { baseMetadata } from "@/lib/metadata";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#16324a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
