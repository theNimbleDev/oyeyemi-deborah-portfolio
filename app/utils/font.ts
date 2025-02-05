import {
  Manrope,
  Geist,
  Geist_Mono,
  Inter,
  Inknut_Antiqua,
} from "next/font/google";

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

export const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inknut_Antiqua = Inknut_Antiqua({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
