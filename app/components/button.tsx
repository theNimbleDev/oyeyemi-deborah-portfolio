// text
// link
// type - primary / secondary

const Button = ({
  text,
  link,
  type,
  form,
}: {
  text: string;
  link: string;
  type: string;
  form?: boolean;
}) => {
  return (
    <a
      href={link}
      className={`${
        type === "primary"
          ? "bg-customPink hover:bg-customPink/50 hover:text-white text-white text-center"
          : "bg-black text-customPink border-2 text-center border-customPink hover:border-customPink/50 hover:text-white"
      } ${
        form ? "w-full" : ""
      } border-customPink rounded-lg lg:text-[16px] font-bold duration-200 transition-all p-1 md:p-1.5 lg:px-4`}
    >
      {text}
    </a>
  );
};

export default Button;
