import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stories by WE VOW",
  description:
    "Capture unforgettable moments with Stories by WE VOW, your premier events photography company. From vibrant celebrations to heartfelt gatherings, our lens captures the essence of every occasion. Join us in preserving your memories and telling your unique story through the art of photography, creating timeless treasures you'll cherish forever.",
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
