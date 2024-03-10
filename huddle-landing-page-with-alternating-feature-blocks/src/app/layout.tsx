import type { Metadata } from "next";
import "./globals.css";

import { mainFont } from "./fonts";

export const metadata: Metadata = {
  title: "Huddle landing page with alternating feature blocks",
  description:
    "This challenge is perfect if you're wanting to practice your layout skills. If you're starting to get a bit more confident laying out a web page, give this project a go.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.className} text-[1.125rem]`}>
        {children}
      </body>
    </html>
  );
}
