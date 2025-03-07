import Link from "next/link";

interface ServiceProps {
  image: string;
  title: string;
  content: string;
  link?: string; // Optional link property
}

const Services = ({ image, title, content, link = "#" }: ServiceProps) => {
  return (
    <div className="flex flex-col justify-left bg-white pb-4">
      <Link href={link}>
        <img
          className="w-full cursor-pointer hover:opacity-90 transition-opacity"
          src={image}
          alt={title}
        />
      </Link>
      <div className="px-2 pt-4">
        <p className="font-bold text-start text-[19px] ml-2">{title}</p>
        <p className="font-medium text-start text-[16px] ml-2">{content}</p>
      </div>
    </div>
  );
};

export default Services;
