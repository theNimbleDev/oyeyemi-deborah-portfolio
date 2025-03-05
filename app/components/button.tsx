const Button = ({
  text,
  link,
  type,
  form,
  className,
}: {
  text: string;
  link: string;
  type: string;
  form?: boolean;
  className?: string;
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
      } border-customPink rounded-lg lg:text-[16px] font-bold duration-200 transition-all p-2 md:p-2.5 lg:px-4 ${
        className || ""
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
