import { Manrope, Geist, Geist_Mono } from "next/font/google";

export const manRope = Manrope({
  subsets: ["latin"],
  weight: ["200"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
