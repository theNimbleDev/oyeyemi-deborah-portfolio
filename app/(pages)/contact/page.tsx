import ContactForm from "@/app/components/contactform";
import Image from "next/image";
import Head from "next/head";

export default function Contact() {
  return (
    <main className="flex-1 py-4 md:py-8">
      <div className="mx-auto space-y-8">
        <h1 className="text-customPink text-4xl font-bold">Connect with Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ContactForm />

          <div className="w-full aspect-[3/4] md:aspect-auto md:h-full min-h-[300px] md:min-h-[400px] rounded-lg overflow-hidden bg-gray-900">
            <div className="relative w-full h-full">
              <Image
                src="/images/contactImg.svg"
                alt="Profile Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// export default function Contact() {
//   return (
//     <section
//       className="bg-background text-foreground overflow-hidden min-h-screen h-screen
//    px-4 md:px-6 lg:px-20"
//     >
//       <header>
//         <Navbar />
//       </header>
//       <main className="bg-black py-4 gap-4">
//         <div className="mx-auto space-y-8">
//           <h1 className="text-customPink text-4xl font-bold">
//             Connect with Me
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <ContactForm />

//             <div className="w-full h-full min-h-[400px] rounded-lg overflow-hidden bg-gray-900">
//               <div className="relative w-full h-full">
//                 <Image
//                   src="/images/contactImg.svg"
//                   alt="Profile Image"
//                   layout="fill"
//                   objectFit="cover"
//                   objectPosition="center"
//                   className="rounded-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </section>
//   );
// }
