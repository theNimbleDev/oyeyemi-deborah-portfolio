import React from "react";
import Link from "next/link";
import Button from "@/app/components/button";
import { Heading30 } from "./heading";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  role: string;
  fullrole?: string;
  dateRange: string;
  tools: string[];
  isRemote: boolean;
  backgroundImage: string;
  id?: number;
  idRoute: string;
  readMoreLink?: string; // Optional link property
}

const ProjectCard = ({
  title,
  role,
  dateRange,
  tools,
  isRemote,
  fullrole,
  backgroundImage,
  readMoreLink = "#",
  id,
  idRoute,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-left bg-black text-white mb-4">
      <Link href={`/projects/${id}`}>
        <Image
          alt="project-image"
          src={backgroundImage}
          width={541}
          height={337}
        />
      </Link>
      <div className="pt-2 pb-4">
        <p className="text-sm md:text-base text-white font-normal md:font-bold mt-2 mb-1">
          {dateRange}
        </p>
        <Heading30 text={role} type="primary" hide="hidden md:block" />
        <Heading30 text={fullrole || ""} type="primary" hide="md:hidden" />

        <div className="mb-4 md:mb-8">
          <span className="text-lg text-white font-bold">Tools used: </span>
          <span className="text-base md:text-lg font-normal">
            {tools.join(", ")}
          </span>
        </div>
        <Button text="Read More" link={`/projects/${id}`} type="primary" />
      </div>
    </div>
  );
};

export default ProjectCard;

// return (
//   <div className="flex flex-col justify-left bg-black text-white mb-4">
//     <Link href={readMoreLink}>
//       <Image
//         alt="project-image"
//         src={backgroundImage}
//         width={541}
//         height={337}
//       />
//     </Link>
//     <div className="pt-2 pb-4">
//       <p className="text-sm md:text-base text-white font-normal md:font-bold mt-2 mb-1">
//         {dateRange}
//       </p>
//       <Heading30 text={role} type="primary" hide="hidden md:block" />
//       <Heading30 text={fullrole || ""} type="primary" hide="md:hidden" />

//       <div className="mb-4 md:mb-8">
//         <span className="text-lg text-white font-bold">Tools used: </span>
//         <span className="text-base md:text-lg font-normal">
//           {tools.join(", ")}
//         </span>
//       </div>
//       <Button text="Read More" link="#" type="primary" />
//     </div>
//   </div>
// );
