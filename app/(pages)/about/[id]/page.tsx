'use client'
import React from "react";
import Image from "next/image";
import { MdKeyboardBackspace } from "react-icons/md";
import { SubHeading } from "@/app/components/heading";
import Button from "@/app/components/button";
import { useParams } from "next/navigation";
import { Service } from "@/app/utils/mockData";

const AboutDetail = () => {
  const router = useParams();
  const { id } = router; // Get the `id` from the URL
  console.log('id', router)

  // Find the project with the matching `id`
  const serviceDetails = Service.find((service) => service.id == id);

  console.log('serviceDetails', serviceDetails)


  return (
    <div className="relative w-full bg-black text-white">
      <div className="absolute">
        <a
          href="/about"
          className="flex items-center justify-start font-light text-white text-sm hover:underline"
        >
          <MdKeyboardBackspace className="text-3xl" />
        </a>
      </div>

      <div className="pt-2 md:pt-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-10">
          <Image
            width={498}
            height={403}
            className="w-full"
            src={serviceDetails?.image}
            alt="logo"
          />
        </div>

        <div className="pt-2 md:w-1/2 md:py-8 md:pl-12 flex flex-col text-white items-start">
          <SubHeading text={serviceDetails?.title} />
          <p className="text-sm font-normal md:text-base mt-4 mb-8">
            {serviceDetails?.contentDetail}
          </p>
          <Button text={'Schedule Appointment'} link="#" type="primary" />
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
