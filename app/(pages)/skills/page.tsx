import React from "react";
import { HeadingTwo } from "@/app/components/heading";
import { HeadingThree } from "@/app/components/heading";

export default function Skills() {
  return (
    <section className="bg-black text-white min-h-screen mt-8 mb-12">
      <HeadingTwo text="Skills" type="primary" className="mb-4" />

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Analysis Tools */}
        <div className="border border-customPink p-6">
          <HeadingThree text="Data Analysis Tool" type="primary" />

          <ul className="space-y-1">
            <li>Advanced Excel (V-Lookup, Pivot tables, Macros)</li>
            <li>SQL</li>
            <li>R</li>
            <li>SAS</li>
            <li>Alteryx</li>
            <li>Qlik Sense</li>
            <li>Tableau</li>
            <li>Lucid Chart (ER Model)</li>
            <li>Python</li>
          </ul>
        </div>

        {/* Digital Marketing & CRM */}
        <div className="border border-customPink p-6">
          <HeadingThree text="Digital Marketing & CRM" type="primary" />
          <ul className="space-y-1">
            <li>SEO</li>
            <li>Social Media Management</li>
            <li>Email Marketing</li>
            <li>Google Analytics</li>
            <li>Salesforce</li>
            <li>CRM</li>
          </ul>
        </div>

        {/* Design & Creative Tools */}
        <div className="border border-customPink p-6">
          <HeadingThree text="Design & Creative Tools" type="primary" />
          <ul className="space-y-1">
            <li>Coral Draw</li>
            <li>Photoshop</li>
            <li>Canva</li>
            <li>Figma</li>
          </ul>
          <h3 className="text-customPink font-bold mt-6 mb-4">Languages</h3>
          <ul className="space-y-1">
            <li>English</li>
          </ul>
        </div>

        {/* Empty box to maintain grid layout */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
}
