import { ArrowUpRight, MapPin } from "lucide-react";
import studyspotrlogo from "../../assets/studyspotrlogo.png";
import aetherautomation_logo from "../../assets/aetherautomation_logo.jpeg";
import Image from "next/image";

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Software Engineer",
      company: "Aether Automation",
      period: "June 2025 - Present",
      image: aetherautomation_logo,
      location: "Remote",
      description:
        "Lead and developed automation, integration, and custom software development projects for clients. Directly incharge of 2 client portfolios ensuring project scope, budget, and timelines are met.",
    },
    {
      id: 2,
      role: "Founder & Software Engineer",
      company: "Study Spotr",
      period: "August 2024 - Present",
      image: studyspotrlogo,
      location: "Burnaby, BC, Canada",
      description:
        "Built a full stack web application to help students find study spots on, around, and off campus. Optimized for usability and scalability, used by over 100 students Canada-wide.",
    },
    {
      id: 3,
      role: "Junior Software Engineer (Co-op)",
      company: "Aether Automation",
      period: "April 2025 - June 2025",
      location: "Remote",
      image: aetherautomation_logo,
      description:
        "Developed custom integrations and automations in Zoho CRM using Java and Deluge saving end users up to 20+ hours a week in admin related tasks.",
    },
  ];

  return (
    <section className="bg-stone-100 w-full flex flex-col px-8 lg:px-40 py-10 lg:py-24">
      <p className="text-black text-2xl lg:text-4xl manrope-medium">
        Work Experience
      </p>
      <p className="text-stone-400 text-sm lg:text-base lg:w-10/12 mt-2 lg:mt-3 manrope-regular">
        Selected recent experiences in startups and internships, showcasing
        hands-on work and impact.
      </p>

      <div className="mt-10 flex flex-col gap-16">
        {experiences.map((exp) => (
          <button
            key={exp.id}
            className="group flex flex-row gap-6 justify-start text-left items-start transition-colors duration-300 rounded"
          >
            <Image
              src={exp.image}
              alt="Logo"
              width={50}
              height={50}
              className="object-contain rounded-md"
            />

            <div className="flex flex-col">
              <div className="flex flex-col gap-1 lg:gap-0 lg:flex-row lg:justify-between lg:items-start">
                <div className="flex gap-0.5 lg:gap-1.5 flex-col items-start justify-start">
                  <h3 className="text-lg lg:text-2xl manrope-medium text-black">
                    {exp.role} @ {exp.company}
                  </h3>
                  <span className="flex flex-row items-center gap-1 text-stone-400/80 text-xs lg:text-sm mt-1 lg:mt-0 manrope-regular">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
                <span className="text-stone-500 text-xs lg:text-sm mt-1 manrope-regular">
                  {exp.period}
                </span>
              </div>
              <p className="text-stone-500 w-11/12 mt-3 text-sm lg:text-base manrope-regular">
                {exp.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      <button className="rounded-lg lg:ml-auto hover:cursor-pointer mt-10 bg-black text-white manrope-regular w-max px-3.5 py-2 text-xs lg:text-sm lg:px-5 lg:py-2 group">
        <div className="inline-flex items-center">
          View All Experience
          <span className="ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </button>
    </section>
  );
}
