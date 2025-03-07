import Navbar from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-background text-foreground min-h-screen flex flex-col mx-auto">
        <header className=" sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="px-4 md:px-0 md:max-w-[1128px] container mx-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
