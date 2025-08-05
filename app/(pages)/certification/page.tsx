'use client';

import { HeadingTwo } from '@/app/components/heading';
import Link from 'next/link';

const certificateData = [
  {
    title: 'Qlik Sense Business Analyst Certification',
    date: 'November 2023',
    link: '#', // Replace with actual URL when available
  },
  {
    title: 'Alteryx Designer Core Certified',
    date: 'October 2023',
    link: '#',
  },
  {
    title: 'Certificate in Professional Marketing (CIM,UK)',
    date: 'April 2022',
    link: '#',
  },
];

export default function Certification() {
  return (
    <div className='min-h-screen bg-background text-foreground mt-8 mb-12'>
      <HeadingTwo text='Certification' type='primary' className='mb-4' />

      <div className='border border-customPink/80 p-6 mb-6 rounded-lg'>
        {certificateData.map((certificate, index) => (
          <div key={index} className='mb-[30px]'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
              <Link
                href={certificate.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-base font-bold text-primary hover:underline'
              >
                {certificate.title}
              </Link>
              <span className='text-foreground text-base font-normal'>
                {certificate.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
