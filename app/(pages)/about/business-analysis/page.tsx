import React from "react";
import AboutDetail from "@/app/components/aboutDetail";
import Link from "next/link";

export default function BusinesAnalysisPage() {
  return (
    <section className="text-white max-h-screen mt-4 md:mt-2">
      <div className="max-w-7xl mx-auto">
        <AboutDetail
          image="/images/business.svg"
          title="BUSINESS ANALYSIS"
          content="As a skilled Business Analyst, I specialize in transforming complex data into actionable insights that drive business growth. By employing a variety of analytical techniques, I uncover trends and patterns that help optimize operations and enhance decision-making processes. My approach involves collaborating closely with stakeholders to identify key performance indicators and establish metrics that align with strategic goals. Through rigorous analysis and reporting, I empower organizations to make informed decisions, improve efficiency, and ultimately increase profitability. Let’s unlock the potential of your data together and pave the way for your business's success."
          buttonLink="Schedule Appointment"
        />
      </div>
    </section>
  );
}
