import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "800"],
});

export const metadata: Metadata = {
  title: "Notifications page",
  description:
    "This project will be a brilliant test of your HTML, CSS, and basic JavaScript skills. You'll use JS to toggle the visual state of the notifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} text-veryDarkBlue bg-veryLightGrayishBlue`}
      >
        {children}
      </body>
    </html>
  );
}
