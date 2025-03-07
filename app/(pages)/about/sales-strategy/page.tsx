import React from "react";
import AboutDetail from "@/app/components/aboutDetail";
import Link from "next/link";

export default function SalesStrategyPage() {
  return (
    <section className=" text-white max-h-screen">
      <div className="max-w-7xl mx-auto">
        <AboutDetail
          image="/images/sales.svg"
          title="SALES STRATEGY OPTIMIZATION"
          content="In today's competitive market, having a robust sales strategy is essential. I bring extensive experience in sales strategy optimization, focusing on identifying opportunities for improvement and implementing effective solutions. By analyzing market trends and customer behavior, I work to enhance sales processes and team performance. I develop tailored strategies that not only boost sales but also improve customer relationships and satisfaction. My goal is to ensure that your sales team is equipped with the right tools and techniques to achieve their targets and exceed expectations. Together, we can drive revenue growth and elevate your business's success."
          buttonLink="Schedule Appointment"
        />
      </div>
    </section>
  );
}
