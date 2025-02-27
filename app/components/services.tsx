import { BoldText } from "./heading";

const Services = ({
  image,
  title,
  content,
  button,
}: {
  image: string;
  title: string;
  content: string;
  button: string;
}) => {
  return (
    <div className="flex flex-col justify-left bg-white pb-4">
      <img className="fit-content items-center" src={image} />
      <BoldText text={title} />
      {/* <h2 className="font-black text-start text-lg pt-4 px-2">{title}</h2> */}
      <p className="font-bold text-start text-[13px] px-2">{content}</p>
      <button className="ml-2 mt-4 font-extrabold text-base bg-gray-200 p-2 rounded-full text-start text-black transition-colors hover:text-white hover:bg-customPink max-w-max">
        {button}
      </button>
    </div>
  );
};

export default Services;
