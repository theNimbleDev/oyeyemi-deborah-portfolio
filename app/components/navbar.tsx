"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-white">
      <div className="flex justify-between items-center py-4 md:py-6 lg:py-8 ">
        <div className="text-white font-semibold lg:text-[24px]">
          <Link href="/" className=" transition-colors">
            <span className="text-customPink">Deborah</span> Oyeyemi
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className={`lg:hidden z-50 relative group ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="relative flex overflow-hidden items-center justify-center w-[30px] h-[30px] transform transition-all duration-200">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  isOpen ? "rotate-[42deg] translate-x-px" : ""
                }`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-[42deg] -translate-x-px" : ""
                }`}
              ></div>
            </div>
          </div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row gap-6 text-base md:gap-8 lg:gap-10 lg:text-[12px] font-bold">
          <li>
            <Link href="/" className="hover:text-customPink transition-colors">
              Home
            </Link>
          </li>
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
              href="/skills"
              className="hover:text-customPink transition-colors"
            >
              Skills
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
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          <li>
            <Link
              href="/"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/experience"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              href="/certification"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              Certification
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-customPink transition-colors"
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
