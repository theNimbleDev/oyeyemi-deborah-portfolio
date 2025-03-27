"use client";
import React from "react";
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";
import { SubHeading } from "@/app/components/heading";
import Button from "@/app/components/button";
import { useParams } from "next/navigation";
import { Projects } from "@/app/utils/mockData";
import Link from "next/link";

const ProjectDetail = () => {
  const router = useParams();
  const { idRoute } = router;

  // Find the project with the matching `id`
  const projectDetails = Projects.find((project) => project.idRoute == idRoute);

  //   if (!projectDetails) {
  //     return (
  //       <div className="bg-black text-white min-h-screen">Project not found</div>
  //     );
  //   }
  console.log("projectDetails", projectDetails);
  // interface PPComponentProps {
  //   title: string;
  //   date: string;
  //   summary: string;
  //   mainImage: string;
  //   additionalImages?: string[];
  //   toolsUsed: string[];
  // }

  // const PPComponent: React.FC<PPComponentProps> = ({
  //   title,
  //   date,
  //   summary,
  //   mainImage,
  //   additionalImages = [],
  //   toolsUsed,
  // }) => {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <Link
          href="/projects"
          className="flex items-center justify-start font-light text-white text-sm hover:underline"
        >
          <MdKeyboardBackspace className="text-3xl mr-2" />
          Back to Projects
        </Link>
      </div>

      {/* Project Details Container */}
      <div className="container mx-auto mt-16">
        {/* Project Header */}
        <div className="mb-8">
          <p className="text-customPink text-sm mb-2">{projectDetails?.date}</p>
          <SubHeading text={projectDetails?.title} />
        </div>

        {/* Project Summary Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
          <p className="text-base leading-relaxed">
            {projectDetails?.fullDescription || projectDetails?.summary}
          </p>
        </section>

        {/* Main Project Image */}
        <div className="mb-8 w-full h-[500px] relative">
          <Image
            src={projectDetails?.image || ""}
            alt={projectDetails?.title || ""}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Additional Images */}
        {/* {additionalImages.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {additionalImages.map((img, index) => (
              <div key={index} className="relative h-[250px]">
                <Image
                  src={img}
                  alt={`Project detail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        )} */}

        {/* Tools Used Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Tools Used</h2>
          <div className="flex flex-wrap gap-3">
            {projectDetails?.toolsUsed}
            {/* {toolsUsed.map((tool, index) => (
              <span
                key={index}
                className="bg-customPink/20 text-customPink px-3 py-1 rounded-full text-sm"
              >
                {tool}
              </span>
            ))} */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;

//   return (
//     <div className="relative w-full min-h-screen bg-black text-white p-6 md:p-12">
//       <div className="absolute top-6 left-6">
//         <Link
//           href="/projects"
//           className="flex items-center justify-start font-light text-white text-sm hover:underline"
//         >
//           <MdKeyboardBackspace className="text-3xl mr-2" />
//           Back to Projects
//         </Link>
//       </div>

//       <div className="container mx-auto mt-16">
//         {/* Project Header */}
//         <div className="mb-12">
//           <SubHeading text={projectDetails?.title} />
//           <p className="text-customPink text-sm mt-2">{projectDetails?.date}</p>
//         </div>

//         {/* Project Summary */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold mb-4">Project Summary</h2>
//           <p className="text-base leading-relaxed">
//             {projectDetails?.fullDescription || projectDetails?.summary}
//           </p>
//         </section>

//         {/* Main Project Image */}
//         <div className="mb-12 w-full h-[400px] relative">
//           <Image
//             src={projectDetails?.image || ""}
//             alt={projectDetails?.title || ""}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>

//         {/* Project Images Grid */}
//         {projectDetails?.projectImages &&
//           projectDetails?.projectImages.length > 0 && (
//             <section className="mb-12 grid grid-cols-2 gap-4">
//               {projectDetails?.projectImages.map((img, index) => (
//                 <div key={index} className="relative h-[250px]">
//                   <Image
//                     src={img}
//                     alt={`Project detail ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//               ))}
//             </section>
//           )}

//         {/* Tools Used */}
//         <section>
//           <h2 className="text-2xl font-bold mb-4">Tools Used</h2>
//           <div className="flex flex-wrap gap-3">
//             {projectDetails?.toolsUsed.map((tool, index) => (
//               <span
//                 key={index}
//                 className="bg-customPink/20 text-customPink px-3 py-1 rounded-full text-sm"
//               >
//                 {tool}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Call to Action */}
//         <div className="mt-12">
//           <Button text="View More Details" link="#" type="primary" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;
