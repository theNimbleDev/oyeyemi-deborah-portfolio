import ContactForm from "@/app/components/contactform";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex-1 py-4 md:py-8">
      <div className="mx-auto space-y-8 mb-8">
        <h1 className="text-customPink text-4xl mb-10 font-bold">
          Connect with Me
        </h1>

        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8 md:gap-12">
          <ContactForm />
          <Image
            width={526}
            height={513}
            src="/images/contactImg.svg"
            alt="Profile Image"
          />
        </div>
      </div>
    </main>
  );
}
