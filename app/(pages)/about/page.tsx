import Button from "@/app/components/button";
import Services from "@/app/components/services";
import { HeadingTwo } from "@/app/components/heading";

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
    <section className="text-white min-h-screen">
      {/* Hero Section */}
      <div className="mt-12 pb-12">
        <h3 className="text-lg uppercase mb-2 tracking-wide">
          DRIVEN BUSINESS ANALYST
        </h3>
        <HeadingTwo text="Maximizing success through insights" type="primary" />

        <div className="mb-8">
          <p className="text-white mb-8 font-bold">
            Deborah Olamide Oyeyemi is a highly motivated Business Analyst,
            bringing a robust background in sales and marketing. She leverages
            her comprehensive analytical skills to drive business success by
            optimizing sales strategies and enhancing customer experiences.
            Through data-driven insights, Deborah amplifies company visibility
            and fosters growth. This portfolio showcases her education,
            certifications, technical skills, work experience, and examples of
            analytical projects, all presented in a professional design that
            highlights her expertise and achievements.
          </p>
          <Button text="Contact Me" link="/contact" type="primary" />
        </div>
      </div>

      {/* Services Section */}
      <div className="pb-16">
        <div className="mb-8">
          <h3 className="text-lg uppercase tracking-wide">DRIVEN INSIGHT</h3>
          <HeadingTwo
            text="Transforming business strategies with analytics"
            type="primary"
          />
        </div>

        <div className="text-black text-start grid grid-cols-3 gap-6">
          {Service.map((service, index) => (
            <Services
              key={index}
              image={service.image}
              title={service.title}
              content={service.content}
              button="Learn More"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
