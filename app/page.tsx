import Button from "@/app/components/button";
import { HeadingOne, SubHeading } from "@/app/components/heading";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-background text-foreground min-h-screen">
      <div className="flex flex-row justify-end gap-4 p-4 md:p-6 lg:p-8">
        <Button text="Download CV" link="/cv" type="secondary" />
        <Button text="Contact Me" link="/contact" type="primary" />
      </div>
      <main className="flex flex-col justify-center items-center p-8 sm:p-12 md:p-16 lg:p-20">
        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-customPink">
            <Image
              src="/images/debo1.png"
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
          <div className="flex gap-6 sm:gap-8 md:gap-10 mt-4">
            <Link href="tel:" className="text-neonGreen">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Phone icon path */}
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="text-[#0077b5]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {" "}
              </svg>
            </Link>
            <Link href="https://google.com" className="text-customPink">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Google icon path */}
              </svg>
            </Link>
          </div>
          <nav className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <ul className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-white">
              <li>
                <Link
                  href="/about"
                  className="hover:text-customPink transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="hover:text-customPink transition-colors"
                >
                  Work Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="hover:text-customPink transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/certification"
                  className="hover:text-customPink transition-colors"
                >
                  Certification
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-customPink transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-customPink transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </section>
  );
}
