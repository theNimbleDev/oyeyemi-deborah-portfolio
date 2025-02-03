export const HeadingOne = ({ text, type }: { text: string; type: string }) => {
  return (
    <h1
      className={`${
        type === "secondary" ? "text-white" : "text-customPink"
      } lg:text-[50px] font-semibold`}
    >
      {text}
    </h1>
  );
};

export const SubHeading = ({ text }: { text: string }) => {
  return <p className="text-white text-lg mt-2">{text}</p>;
};

// export const HeadingOne = ({ text, type }: { text: string; type: string }) => {
//   return (
//     <h1
//       className={`${
//         type === "secondary" ? "text-white" : "text-customPink"
//       } lg:text-[50px] font-semibold`}
//     >
//       {text}
//     </h1>
//   );
// };
