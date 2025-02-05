import { inknut_Antiqua } from "@/app/utils/font";
import { inter } from "@/app/utils/font";

export const HeadingOne = ({ text, type }: { text: string; type: string }) => {
  return (
    <h1
      className={`${inknut_Antiqua.className} ${
        type === "secondary" ? "text-white" : "text-customPink"
      } text-[20px] sm:text-[24px] md:text-[34px] lg:text-[46px] font-semibold text-center leading-tight`}
    >
      {text}
    </h1>
  );
};

export const SubHeading = ({ text }: { text: string }) => {
  return (
    <p
      className={`${inter.className} text-white text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] font-bold mt-2 text-center`}
    >
      {text}
    </p>
  );
};
