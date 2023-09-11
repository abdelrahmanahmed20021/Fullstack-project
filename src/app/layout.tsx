import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Post",
  description: "Post Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
