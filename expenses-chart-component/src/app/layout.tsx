import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Expenses chart component",
  description:
    "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dm.className} bg-cream`}>{children}</body>
    </html>
  );
}
