import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huddle landing page with curved sections",
  description:
    "Practice using pseudo-elements for styling extras and the CSS position property for the sections with curved edges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
