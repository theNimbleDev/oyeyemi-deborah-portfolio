import Navbar from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-background text-foreground min-h-screen flex flex-col px-4 md:px-6 lg:px-20">
        <header>
          <Navbar />
        </header>
        <div className="flex-1 container mx-auto md:py-2">{children}</div>
      </div>
      <Footer />
    </section>
  );
}
