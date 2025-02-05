import { inter } from "@/app/utils/font";
const Paragraph = ({ text, type }: { text: string; type: string }) => {
  return <p className={`${inter.className} ${type}`}>{text}</p>;
};

export default Paragraph;
