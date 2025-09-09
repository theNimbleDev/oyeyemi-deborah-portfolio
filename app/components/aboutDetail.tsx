import React from 'react';
import Image from 'next/image';
import { SubHeading } from './heading';
import Button from './button';
import { MdKeyboardBackspace } from 'react-icons/md';
import Link from 'next/link';

interface AboutDetailProps {
  image: string;
  title: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
}

const AboutDetail = ({
  image,
  title,
  content,
  buttonText = 'Schedule Appointment',
}: AboutDetailProps) => {
  return (
    <div className='relative w-full bg-black text-white'>
      <div className='absolute'>
        <Link
          href='/about'
          className='flex items-center justify-start font-light text-white text-sm hover:underline'
        >
          <MdKeyboardBackspace className='text-3xl' />
        </Link>
      </div>

      <div className='pt-2 md:pt-6 flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-10'>
          <Image
            width={498}
            height={403}
            className='w-full'
            src={image}
            alt='logo'
          />
        </div>

        <div className='pt-2 md:w-1/2 md:py-8 md:pl-12 flex flex-col text-white items-start'>
          <SubHeading text={title} />
          <p className='text-sm font-normal md:text-base mt-4 mb-8'>
            {content}
          </p>
          <Button text={buttonText} link='#' type='primary' />
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
