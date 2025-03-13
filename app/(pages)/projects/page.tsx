import React from "react";
import ProjectCard from "@/app/components/projectCard";
import { HeadingTwo } from "@/app/components/heading";

interface Project {
  id: number;
  title: string;
  role: string;
  dateRange: string;
  tools: string[];
  fullrole?: string;
  isRemote: boolean;
  backgroundImage: string;
  readMoreLink?: string;
}
export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Business Analysis Project",
      role: "Business Analyst",
      fullrole: "Business Analyst",
      dateRange: "Mar. 2024 - Jun. 2024",
      tools: ["mySQL", "Excel", "PowerBI"],
      isRemote: false,
      backgroundImage: "/images/businessAnalyst.svg",
      readMoreLink: "/projects/business-analyst",
    },
    {
      id: 2,
      title: "Product Marketing Campaign",
      role: "Head of Product Marketing and Gro...",
      fullrole: "Head of Product Marketing and Growth",
      dateRange: "Sep. 2023 - Dec. 2023",
      tools: ["mySQL", "Excel", "PowerBI"],
      isRemote: false,
      backgroundImage: "/images/headOfProduct.svg",
      readMoreLink: "/projects/product-marketing",
    },
    {
      id: 3,
      title: "Sales Growth Initiative",
      role: "Sales & Marketing Specialist - Rem...",
      fullrole: "Sales & Marketing Specialist - Remote",
      dateRange: "Jul. 2023 - Sep. 2023",
      tools: ["mySQL", "Excel", "PowerBI"],
      isRemote: true,
      backgroundImage: "/images/sales&Marketing.svg",
      readMoreLink: "/projects/sales-marketing-1",
    },
    {
      id: 4,
      title: "Marketing Analytics",
      role: "Sales & Marketing Specialist - Rem...",
      fullrole: "Sales & Marketing Specialist - Remote",
      dateRange: "Jan. 2024 - Mar. 2024",
      tools: ["mySQL", "Excel", "PowerBI"],
      isRemote: true,
      backgroundImage: "/images/businessAnalyst.svg",
      readMoreLink: "/projects/sales-marketing-2",
    },
  ];

  return (
    <div className="min-h-screen text-white mb-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-base text-white font-bold mt-2 mb-1">
            Harnessing data for strategic growth
          </p>
          <HeadingTwo text="Driving Business Success Through" type="primary" />
          <HeadingTwo text="Analysis" type="primary" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              isRemote={project.isRemote}
              backgroundImage={project.backgroundImage}
              role={project.role}
              fullrole={project.fullrole}
              dateRange={project.dateRange}
              tools={project.tools}
              readMoreLink={project.readMoreLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
