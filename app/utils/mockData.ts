export const Service = [
  {
    id: "business-analysis",
    image: "/images/business.svg",
    title: "Business Analysis",
    content: "Transform data into actionable insights for your business.",
    contentDetail:
      "Delivering an outstanding customer experience is vital for building loyalty and retaining clients. My expertise in customer experience enhancement focuses on understanding customer needs and expectations. By conducting thorough analyses and gathering feedback, I identify pain points and opportunities to create seamless customer journeys. I work collaboratively with teams to design and implement strategies that ensure every interaction adds value. From initial contact to post-purchase follow-up, my goal is to foster positive relationships and keep customers coming back. Together, we can transform your customer experience and turn satisfied clients into brand advocates.",
  },
  {
    id: "sales-strategy-optimization",
    image: "/images/sales.svg",
    title: "Sales Strategy Optimization",
    content: "Elevate your sales strategies to maximize revenue.",
    contentDetail:
      "Delivering an outstanding customer experience is vital for building loyalty and retaining clients. My expertise in customer experience enhancement focuses on understanding customer needs and expectations. By conducting thorough analyses and gathering feedback, I identify pain points and opportunities to create seamless customer journeys. I work collaboratively with teams to design and implement strategies that ensure every interaction adds value. From initial contact to post-purchase follow-up, my goal is to foster positive relationships and keep customers coming back. Together, we can transform your customer experience and turn satisfied clients into brand advocates.",
  },
  {
    id: "customer-experience-enhancement",
    image: "/images/customer.svg",
    title: "Customer Experience Enhancement",
    content: "Create exceptional customer journeys that drive loyalty.",
    contentDetail:
      "Delivering an outstanding customer experience is vital for building loyalty and retaining clients. My expertise in customer experience enhancement focuses on understanding customer needs and expectations. By conducting thorough analyses and gathering feedback, I identify pain points and opportunities to create seamless customer journeys. I work collaboratively with teams to design and implement strategies that ensure every interaction adds value. From initial contact to post-purchase follow-up, my goal is to foster positive relationships and keep customers coming back. Together, we can transform your customer experience and turn satisfied clients into brand advocates.",
    // link: "/about/customer-experience",
  },
];

export interface ProjectD {
  idRoute: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  toolsUsed: string;
  fullDescription?: string;
  projectImages?: string[];
}
// export const Projects = [
export const Projects: ProjectD[] = [
  {
    idRoute: "business-analysis-dashboard",
    title: "Driving Business Success Through Analysis",
    date: "Mar 2024 - Jun 2024",
    summary:
      "A comprehensive data analysis project utilizing Excel, SQL, and Power BI to generate actionable insights for strategic decision-making.",
    image: "/public/images/Place-Holder-Image.jpg", // Replace with actual image path
    toolsUsed: "Excel, SQL, Power BI",
    fullDescription:
      "Developed advanced data analysis dashboards that transformed raw data into strategic insights, enabling data-driven decision-making for key business stakeholders.",
    projectImages: [
      "/public/images/Place-Holder-Image.jpg",
      "/public/images/Place-Holder-Image.jpg",
    ],
  },
  {
    idRoute: "product-marketing-strategy",
    title: "Product Marketing and Growth Operations",
    date: "Sep 2021 - Dec 2022",
    summary:
      "Implemented marketing strategies that resulted in significant sales and profit growth for ProconnectPAY.",

    image: "/public/images/Place-Holder-Image.jpg",
    toolsUsed: 
      "Marketing Analytics, Sales Training, Social Media Marketing",
    fullDescription:
      "Led a transformative marketing approach that increased company profits by 99% through targeted sales training and innovative marketing campaigns.",
    projectImages: [
      "/public/images/Place-Holder-Image.jpg",
      "/public/images/Place-Holder-Image.jpg",
    ],
  },
  // Add more projects as needed
];
