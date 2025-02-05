import { FiPhone } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import Button from "@/app/components/button";
import { HeadingOne, SubHeading } from "@/app/components/heading";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";
import Homenav from "@/app/components/homenav";

export default function Home() {
  return (
    <section className="bg-background text-foreground h-screen overflow-hidden">
      <div className="flex flex-row justify-end gap-6 p-4 md:p-6 lg:p-7">
        <Button text="Download CV" link="/cv" type="secondary" />
        <Button text="Contact Me" link="/contact" type="primary" />
      </div>
      <main className="flex flex-col justify-center items-center p-8 sm:p-8 md:p-10 lg:p-6">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-8 md:gap-8 lg:gap-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
            <Image
              src="/images/debo.svg"
              width={300}
              height={300}
              alt="deborah's profile image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <HeadingOne text="- Deborah Olamide Oyeyemi -" type="primary" />
            <SubHeading text="Business Analyst | Sales Marketer" />
          </div>
          <div className="flex gap-6 sm:gap-8 md:gap-8">
            <Link href="tel:" className="text-green-500">
              <FiPhone size={40} />
            </Link>
            <Link href="https://linkedin.com" className="text-[#0077b5]">
              <FaLinkedin size={40} />
            </Link>
            <Link href="https://google.com">
              <FcGoogle size={40} />
            </Link>
          </div>
          <div>
            <Homenav />
          </div>
        </div>
      </main>
    </section>
  );
}
