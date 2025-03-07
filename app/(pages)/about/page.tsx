import React from "react";
import Button from "@/app/components/button";
import Services from "@/app/components/services";
import { HeadingTwo } from "@/app/components/heading";

export default function About() {
  const Service = [
    {
      image: "/images/business.svg",
      title: "Business Analysis",
      content: "Transform data into actionable insights for your business.",
      link: "/about/business-analysis",
    },
    {
      image: "/images/sales.svg",
      title: "Sales Strategy Optimization",
      content: "Elevate your sales strategies to maximize revenue.",
      link: "/about/sales-strategy",
    },
    {
      image: "/images/customer.svg",
      title: "Customer Experience Enhancement",
      content: "Create exceptional customer journeys that drive loyalty.",
      link: "/about/customer-experience",
    },
  ];

  return (
    <section className="text-white min-h-screen">
      {/* Hero Section */}
      <div className="mt-4 pb-8">
        <p className="text-sm font-normal uppercase mb-2 tracking-wide">
          DRIVEN BUSINESS ANALYST
        </p>
        <HeadingTwo text="Maximizing success through insights" type="primary" />

        <div className="mb-8">
          <p className="text-white mb-8 font-normal text-base text-justify">
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
        <div className="mb-6">
          <h3 className="text-xs font-normal uppercase tracking-wide">
            DRIVEN INSIGHT
          </h3>
          <HeadingTwo
            text="Transforming business strategies with analytics"
            type="primary"
          />
        </div>

        <div className="text-black text-start flex flex-col md:tracking-tight md:font-light md:grid md:grid-cols-3 gap-4 md:gap-6">
          {Service.map((service, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg group"
            >
              <Services
                image={service.image}
                title={service.title}
                content={service.content}
                link={service.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
