import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const font = Bai_Jamjuree({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Clipboard landing page",
  description:
    "Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
