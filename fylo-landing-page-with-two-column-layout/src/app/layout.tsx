import type { Metadata } from "next";
import "./globals.css";

import { openSans } from "./fonts";

export const metadata: Metadata = {
  title: "Fylo landing page with two column layout",
  description:
    "This project is great if you're starting to get confident with slightly more complex layouts. The second section with the testimonial area will provide a nice challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
