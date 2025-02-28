import React from "react";
import AboutDetail from "@/app/components/aboutDetail";

export default function CustomerExperiencePage() {
  return (
    <section className="text-white max-h-screen">
      <div className="max-w-7xl mx-auto">
        <AboutDetail
          image="/images/customer.svg"
          title="CUSTOMER EXPERIENCE ENHANCEMENT"
          content="Delivering an outstanding customer experience is vital for building loyalty and retaining clients. My expertise in customer experience enhancement focuses on understanding customer needs and expectations. By conducting thorough analyses and gathering feedback, I identify pain points and opportunities to create seamless customer journeys. I work collaboratively with teams to design and implement strategies that ensure every interaction adds value. From initial contact to post-purchase follow-up, my goal is to foster positive relationships and keep customers coming back. Together, we can transform your customer experience and turn satisfied clients into brand advocates."
          buttonText="Schedule Appointment"
          buttonLink="#"
        />
      </div>
    </section>
  );
}
