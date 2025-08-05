import { HeadingTwo } from '@/app/components/heading';
import { experienceData } from '@/app/utils/customData';

export default function Experience() {
  return (
    <div className='min-h-screen bg-background text-foreground mt-8 mb-12'>
      <HeadingTwo text='Work Experience' type='primary' className='mb-4' />

      <div className='border border-customPink/80 bg-card p-6 mb-6 rounded-lg'>
        {experienceData.map((experience, index) => (
          <div key={index} className='mb-[30px]'>
            <div className='flex flex-col md:flex-row justify-between mb-2'>
              <h2 className='text-base font-bold text-foreground'>
                {experience.title}
              </h2>
              <span className='text-muted-foreground text-base font-normal'>
                {experience.date}
              </span>
            </div>
            <div className='flex flex-col md:flex-row justify-between mb-4 text-base font-normal'>
              <span className='text-foreground'>{experience.company}</span>
              <span className='text-muted-foreground'>
                {experience.location}
              </span>
            </div>

            <ul className='list-disc pl-6 space-y-3 text-base font-normal text-foreground'>
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
