const Button = ({
  text,
  link = '#',
  type = 'secondary',
  form = false,
  className = '',
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
        type === 'primary'
          ? 'bg-customPink hover:bg-customPink/80 hover:border-customPink/80 text-white text-center border-2 border-customPink'
          : 'bg-background text-customPink border text-center border-customPink hover:bg-customPink hover:text-white'
      } ${
        form ? 'w-full' : ''
      } rounded-lg text-[12px] md:text-[16px] font-bold duration-200 transition-all p-2 md:py-2.5 md:px-4 ${
        className || ''
      }`}
    >
      {text}
    </a>
  );
};

export default Button;
