import React from 'react';
import ProjectCard from '@/app/components/projectCard';
import { HeadingTwo } from '@/app/components/heading';
import { Projects } from '@/app/utils/mockData';

export default function ProjectsPage() {
  return (
    <section className='min-h-screen bg-background text-foreground mb-12'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-8'>
          <p className='text-base text-foreground font-bold mt-2 mb-1'>
            Harnessing data for strategic growth
          </p>
          <HeadingTwo text='Driving Business Success Through' type='primary' />
          <HeadingTwo text='Analysis' type='primary' />
        </div>

        {/* Projects grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {Projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                id={project.id}
                title={project.title}
                backgroundImage={project.backgroundImage}
                mobileTitle={project.mobileTitle}
                dateRange={project.dateRange}
                tools={project.tools}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
