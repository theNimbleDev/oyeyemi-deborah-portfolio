import { inter } from "@/app/utils/font";

export const Footer = () => {
  return (
    <footer className="flex justify-center items-center font-inter py-6 bg-[#131212] text-white">
      <p className={`${inter.className} text-sm`}>
        © 2023 Deborah Olamide Oyeyemi. All rights Reserved.
      </p>
    </footer>
  );
};
