import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["800"] });

export const metadata: Metadata = {
  title: "Advice generator app",
  description:
    "The perfect project if you're learning how to interact with 3rd-party APIs. This challenge uses the Advice Slip API to generate random quotes of advice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} font-extrabold flex justify-center items-center min-h-screen bg-darkBlue`}
      >
        {children}
      </body>
    </html>
  );
}
