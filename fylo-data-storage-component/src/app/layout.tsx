import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Fylo data storage component",
  description:
    "This component has some interesting CSS challenges in the design. If you're looking to test your CSS skills, this will be a great project for you!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-veryDarkBlue ${raleway.className}`}>{children}</body>
    </html>
  );
}
