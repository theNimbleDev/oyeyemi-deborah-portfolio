import Button from "@/app/components/button";
import Services from "@/app/components/services";

const Service = [
  {
    image: "/images/business.svg",
    title: "Business Analysis",
    content: "Transform data into actionable insights for your business.",
  },
  {
    image: "/images/sales.svg",
    title: "Sales Strategy Optimization",
    content: "Elevate your sales strategies to maximize revenue.",
  },
  {
    image: "/images/customer.svg",
    title: "Customer Experience Enhancement",
    content: "Create exceptional customer journeys that drive loyalty.",
  },
];

export default function About() {
  return (
    <section className="bg-background text-foreground h-screen">
      <div>
        <p className="text-white">
          Deborah Olamide Oyeyemi is a highly motivated Business Analyst,
          bringing a robust background in sales and marketing. She leverages her
          comprehensive analytical skills to drive business success by
          optimizing sales strategies and enhancing customer experiences.
          Through data-driven insights, Deborah amplifies company visibility and
          fosters growth. This portfolio showcases her education,
          certifications, technical skills, work experience, and examples of
          analytical projects, all presented in a professional design that
          highlights her expertise and achievements.
        </p>
      </div>
      <main>
        <div className="flex flex-row align-middle justify-center gap-6">
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
