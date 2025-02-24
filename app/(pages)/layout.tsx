import PageLayout from "@/app/components/pageLayout";
import { manRope, geistMono, geistSans } from "@/app/utils/font";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageLayout>{children}</PageLayout>;
}
