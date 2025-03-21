import { HeadingTwo } from "@/app/components/heading";

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white mt-8 mb-12">
      <HeadingTwo text="Work Experience" type="primary" className="mb-4" />
      <div className="border border-customPink/80 p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h2 className="text-base font-bold">
            Business Analyst Intern - Remote
          </h2>
          <span
            className="text-white
           text-base font-normal"
          >
            Mar., 2024 - Jun. 2024
          </span>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4 text-base font-normal">
          <span className="text-white">Teleperson</span>
          <span className="text-white">Wisconsin</span>
        </div>

        <ul className="list-disc pl-6 space-y-3 mb-[30px] text-base font-normal">
          <li>
            Utilized tools such as Excel, SQL, and Power BI to analyze data
            trends and create detailed dashboards that provided actionable
            insights for decision-making.
          </li>
          <li>
            Worked closely with stakeholders to document business requirements,
            develop process workflows, and deliver data-driven recommendations
            to optimize communication solutions.
          </li>
          <li>
            Worked closely with stakeholders to document business requirements,
            develop process workflows, and deliver data-driven recommendations
            to optimize communication solutions.
          </li>
          <li>
            Worked closely with stakeholders to document business requirements,
            develop process workflows, and deliver data-driven recommendations
            to optimize communication solutions.
          </li>
        </ul>

        <div className="mb-[30px]">
          <div className="flex flex-col md:flex-row justify-between mb-2">
            <h2 className="text-base font-bold">
              Head of Product Marketing and Growth Operations
            </h2>
            <span
              className="text-white
              text-base font-normal"
            >
              Sep. 2021 - Dec. 2022
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-4 text-base font-normal">
            <span className="text-white">ProconnectPAY</span>
            <span className="text-white">Lagos, Nigeria</span>
          </div>

          <ul className="list-disc pl-6 space-y-3 text-base font-normal">
            <li>
              Trained and developed sales team associates in products, selling
              techniques and procedures.
            </li>
            <li>
              Led the development of a sales training curriculum and training
              process that resulted in an 80% increase in sales
            </li>
            <li>Led information workshops with different client groups.</li>
            <li>
              Led the strategy and execution of a multifaceted social media
              marketing campaign that increased the company's profit by 99%
            </li>
          </ul>
        </div>

        <div className="mb-[30px]">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-base font-bold">
              Sales & Marketing Specialist - Remote
            </h2>
            <span
              className="text-white
             text-base font-normal"
            >
              Nov. 2021 - Dec. 2022
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-4 text-base font-normal">
            <span className="text-white">
              Parrot Media Consultants - A Public Relations and Advertising
              Company.
            </span>
            <span className="text-white">Fort Worth, TX</span>
          </div>

          <ul className="list-disc pl-6 space-y-3  text-base font-normal">
            <li>
              Trained and developed sales team associates in products, selling
              techniques and procedures.
            </li>
            <li>
              Led the development of a sales training curriculum and training
              process that resulted in an 80% increase in sales
            </li>
            <li>Led information workshops with different client groups.</li>
            <li>
              Led the strategy and execution of a multifaceted social media
              marketing campaign that increased the company's profit by 99%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
