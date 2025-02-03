import type { Metadata } from "next";
import { manRope, geistMono, geistSans } from "@/app/utils/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deborah's Portfolio",
  description: "A Professional Business Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manRope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
