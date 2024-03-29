import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Thousand Lights",
  description:
    "Capture unforgettable moments with The Thousand Lights, your premier events photography company. From lively celebrations to intimate gatherings, our lens immortalizes the essence of every occasion. Join us in preserving memories and illuminating the magic of your events through a thousand lights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
