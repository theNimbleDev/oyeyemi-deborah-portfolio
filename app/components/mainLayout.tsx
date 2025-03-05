import Navbar from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-background text-foreground min-h-screen flex flex-col px-6 md:px-6 lg:px-20">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-1 container mx-auto md:py-2">{children}</main>
      </div>
      <Footer />
    </>
  );
}
