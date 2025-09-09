import Link from 'next/link';
const Homenav = () => {
  return (
    <nav className='mt-8 sm:mt-2 md:mt-2 lg:mt-2'>
      <ul className='flex flex-wrap justify-center gap-4 md:gap-3 lg:gap-4 text-forground font-normal bg-background rounded-full border border-gray-800 p-4 text-sm sm:text-base'>
        <li>
          <Link
            href='/about'
            className='hover:text-customPink transition-colors'
          >
            About
          </Link>
        </li>
        <span className='text-gray-600 pointer-events-none cursor-default'>
          |
        </span>
        <li>
          <Link
            href='/experience'
            className='hover:text-customPink transition-colors'
          >
            Work Experience
          </Link>
        </li>
        <span className='text-gray-600 pointer-events-none cursor-default'>
          |
        </span>
        <li>
          <Link
            href='/skills'
            className='hover:text-customPink transition-colors'
          >
            Skills
          </Link>
        </li>
        <span className='text-gray-600 pointer-events-none cursor-default'>
          |
        </span>
        <li>
          <Link
            href='/certification'
            className='hover:text-customPink transition-colors'
          >
            Certification
          </Link>
        </li>
        <span className='text-gray-600 pointer-events-none cursor-default'>
          |
        </span>
        <li>
          <Link
            href='/projects'
            className='hover:text-customPink transition-colors'
          >
            Projects
          </Link>
        </li>
        <span className='text-gray-600 pointer-events-none cursor-default'>
          |
        </span>
        <li>
          <Link
            href='/contact'
            className='hover:text-customPink transition-colors'
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Homenav;
