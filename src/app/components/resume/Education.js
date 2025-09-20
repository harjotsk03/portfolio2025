import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import sfulogo from "../../assets/sfulogo.png";

export default function Education() {
  const releventCourses = ["Mobile Computing", "Data Structures and Algorithms", "Web Design and Development", "Intro to AI", "Generative AI", "Human-Computer Interactions", "Interaction Design"];
  const acheivements = [
    "Deans Honour Roll Summer 2024",
    "Deans Honour Roll Fall 2024",
    "Deans Honour Roll Spring 2024",
    "SIAT Project Showcase x2 Summer 2024",
    "SIAT Project Showcase Spring 2024",
  ];
  return (
    <section className="bg-white w-full flex flex-col px-8 lg:px-40 py-10 lg:py-24">
      <p className="text-black text-2xl lg:text-4xl manrope-medium">
        Education
      </p>
      <div className="mt-10 flex flex-col gap-16">
        <div className="group flex flex-row gap-6 justify-start text-left items-start transition-colors duration-300 rounded">
          <Image
            src={sfulogo}
            alt="Logo"
            width={50}
            height={50}
            className="object-contain rounded-md"
          />

          <div className="flex flex-col w-full">
            <div className="flex flex-col gap-1 lg:gap-4 lg:flex-row lg:justify-between w-full lg:items-start">
              <div className="flex gap-0.5 lg:gap-1.5 flex-col items-start justify-start">
                <h3 className="text-lg lg:text-2xl manrope-medium text-black">
                  BSc. Computer Science & IAT @ Simon Fraser University
                </h3>
                <span className="flex flex-row items-center gap-1 text-stone-400/80 text-xs lg:text-sm mt-1 lg:mt-0 manrope-regular">
                  <MapPin size={12} /> Burnaby, BC, Canada
                </span>
              </div>
              <span className="text-stone-500 text-xs lg:text-sm mt-1 manrope-regular">
                Expected Graduation: May 2026
              </span>
            </div>

            {/* bullet list */}
            <p className="leading-relaxed pl-5 mt-3 space-y-2 text-stone-400 w-11/12 text-sm lg:text-base manrope-regular">
              Relevent Courses:{" "}
            </p>
            <ul className="list-disc leading-relaxed pl-5 mt-1 space-y-2 text-stone-500 w-11/12 text-sm lg:text-base manrope-regular columns-1 lg:columns-3 ml-4">
              {releventCourses.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="leading-relaxed pl-5 mt-6 space-y-2 text-stone-400 w-11/12 text-sm lg:text-base manrope-regular">
              Acheivements:{" "}
            </p>
              <ul className="list-disc leading-relaxed pl-5 mt-1 space-y-2 text-stone-500 w-11/12 text-sm lg:text-base manrope-regular columns-1 lg:columns-3 ml-4">
                {acheivements.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
