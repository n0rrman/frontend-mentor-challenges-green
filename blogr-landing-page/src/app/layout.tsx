import type { Metadata } from "next";
import "./globals.css";

import { ubuntu } from "./fonts";

export const metadata: Metadata = {
  title: "Blogr landing page",
  description:
    "Flex your layout muscles with this landing page challenge. You'll mostly be working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
