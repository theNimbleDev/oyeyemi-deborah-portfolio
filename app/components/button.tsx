const Button = ({
  text,
  link = "#",
  type = "secondary",
  form = false,
  className = "",
  downloadFile,
}: {
  text: string;
  link?: string;
  type?: string;
  form?: boolean;
  className?: string;
  downloadFile?: string;
}) => {
  return (
    <a
      href={downloadFile || link}
      download={downloadFile ? true : undefined}
      className={`${
        type === "primary"
          ? "bg-customPink hover:bg-customPink/50 hover:border-transparent hover:text-white text-white text-center border-2"
          : "bg-black text-customPink border-2 text-center border-customPink hover:border-customPink/50 hover:text-white"
      } ${
        form ? "w-full" : ""
      } border-customPink rounded-lg text-[12px] md:text-[16px] font-bold duration-200 transition-all p-2 md:py-2.5 md:px-4 ${
        className || ""
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
