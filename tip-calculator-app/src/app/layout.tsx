import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const space = Space_Mono({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Tip calculator app",
  description:
    "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>{children}</body>
    </html>
  );
}
