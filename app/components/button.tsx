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
          ? "bg-customPink hover:bg-customPink/80 hover:text-white text-white"
          : "bg-black text-customPink"
      } ${
        form ? "w-full" : ""
      } border-customPink rounded-lg font-normal duration-200 transition-all p-1 md:p-2 lg:p-2`}
    >
      {text}
    </a>
  );
};

export default Button;
