'use client';
import React from 'react';
import Image from 'next/image';
import { MdKeyboardBackspace } from 'react-icons/md';
import { HeadingTwo } from '@/app/components/heading';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Projects } from '@/app/utils/mockData';

const ProjectDetail = () => {
  const router = useParams();
  const { id } = router;

  // Find the project with the matching `id`
  const projectDetails = Projects.find((project) => project.id == id);

  return (
    <div className='min-h-screen bg-background text-foreground py-8'>
      <div className='container mx-auto'>
        {/* Back Button */}
        <div className='mb-6 text-foreground'>
          <Link
            href='/projects'
            className='flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300'
          >
            <MdKeyboardBackspace className='text-2xl' />
          </Link>
        </div>

        {/* Project Details Container */}
        <div className='space-y-8'>
          {/* Project Header */}
          <div>
            <p className='text-sm md:text-base font-bold mb-2'>
              {projectDetails?.dateRange}
            </p>
            <HeadingTwo
              text={projectDetails?.mobileTitle ?? ''}
              type='primary'
              className='font-bold mb-10 md:mb-20'
            />
          </div>

          {/* Project Summary Section */}
          <section>
            <h2 className='text-xl md:text-3xl font-bold mb-2 text-customPink'>
              Project Summary
            </h2>
            <p className='text-base leading-relaxed font-normal'>
              {projectDetails?.summary}
            </p>
          </section>

          {/* Main Project Image */}

          <div className='grid grid-col-1 md:grid-cols-2 gap-4 max-w-full h-fit overflow-hidden'>
            <div className='col-span-1 md:col-span-2 md:row-span-1'>
              <Image
                src={projectDetails?.backgroundImages[0] ?? ''}
                alt={`${projectDetails?.title} main project image`}
                width={1086}
                height={304}
                className='w-full rounded-lg'
              />
            </div>
            <div className='aspect-video relative'>
              <Image
                src={projectDetails?.backgroundImages[1] ?? ''}
                alt={`${projectDetails?.title} project image 2`}
                fill
                className='object-cover rounded-lg'
              />
            </div>
            <div className='aspect-video relative'>
              <Image
                src={projectDetails?.backgroundImages[2] ?? ''}
                alt={`${projectDetails?.title} project image 3`}
                fill
                className='object-cover rounded-lg'
              />
            </div>
          </div>
          {/* Tools Used Section */}
          <div>
            <h2 className='text-xl md:text-3xl font-bold mb-2 text-customPink'>
              Tools Used
            </h2>
            <p className='text-base font-normal'>{projectDetails?.tools}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
