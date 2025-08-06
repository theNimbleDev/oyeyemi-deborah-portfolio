import Link from 'next/link';

interface ServiceProps {
  id: string;
  image: string;
  title: string;
  content: string;
}

const Services = ({ id, image, title, content }: ServiceProps) => {
  return (
    <div className='flex flex-col justify-left bg-background text-foreground pb-4'>
      <Link href={`/about/${id}`}>
        <img
          className='w-full cursor-pointer hover:opacity-90 transition-opacity'
          src={image}
          alt={title}
        />
      </Link>
      <div className='px-2 pt-4 bg-background text-foreground'>
        <p className='font-bold text-start text-[19px]'>{title}</p>
        <p className='font-medium text-start text-[16px]'>{content}</p>
      </div>
    </div>
  );
};

export default Services;
