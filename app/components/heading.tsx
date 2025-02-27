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

export const HeadingTwo = ({ text, type }: { text: string; type: string }) => {
  return (
    <h1
      className={`${inter.className} ${
        type === "secondary" ? "text-white" : "text-customPink"
      } text-[22px] md:text-[34px] font-semibold text-start leading-tight`}
    >
      {text}
    </h1>
  );
};

export const HeadingThree = ({
  text,
  type,
}: {
  text: string;
  type: string;
}) => {
  return (
    <h1
      className={`${inter.className} ${
        type === "secondary" ? "text-white" : "text-customPink"
      } text-[18px] md:text-[22px] font-semibold text-start leading-tight pb-2`}
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

export const BoldText = ({ text }: { text: string }) => {
  return (
    <p
      className={`${inter.className} text-black text-[12px] md:text-[16px] font-bold mt-2 text-start px-2`}
    >
      {text}
    </p>
  );
};
