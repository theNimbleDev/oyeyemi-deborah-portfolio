import Navbar from "@/app/components/navbar";
import Button from "@/app/components/button";
import Services from "@/app/components/services";

const Service = [
  {
    image: "/images/business.png",
    title: "Business Analysis",
    content: "Transform data into actionable insights for your business.",
  },
  {
    image: "/images/sales.png",
    title: "Sales Strategy Optimization",
    content: "Elevate your sales strategies to maximize revenue.",
  },
  {
    image: "/images/customer.png",
    title: "Customer Experience Enhancement",
    content: "Create exceptional customer journeys that drive loyalty.",
  },
];

export default function About() {
  return (
    <section className="bg-background text-foreground px-4 md:px-6 lg:px-20">
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex flex-row align-middle justify-center gap-4">
          {Service.map((service, index) => (
            <Services
              key={index}
              image={service.image}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
