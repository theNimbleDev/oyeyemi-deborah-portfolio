import MainLayout from "@/app/components/mainLayout";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
