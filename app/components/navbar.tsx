import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-background text-white flex flex-row justify-between items-center py-4 md:py-6 lg:py-8">
      <div className="text-white font-semibold lg:text-[24px]">
        <span className="text-customPink">Deborah</span> Oyeyemi
      </div>
      <ul className="flex flex-row gap-6 text-base md:gap-8 lg:gap-10 lg:text-[12px] font-bold">
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
    </nav>
  );
}

export default Navbar;
