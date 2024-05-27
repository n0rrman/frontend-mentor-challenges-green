import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Contact Form",
  description:
    "Building accessible forms is a crucial task for front-end developers. This challenge will help you practice building a form with several input types and validation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-lightGreen ${karla.className}`}>{children}</body>
    </html>
  );
}
