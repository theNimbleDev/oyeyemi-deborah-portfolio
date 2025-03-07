import MainLayout from "@/app/components/mainLayout";
import { Inter } from "next/font/google";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
