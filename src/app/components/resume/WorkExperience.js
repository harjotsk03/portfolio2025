import { ArrowUpRight, MapPin } from "lucide-react";
import studyspotrlogo from "../../assets/studyspotrlogo.png";
import aetherautomation_logo from "../../assets/aetherautomation_logo.jpeg";
import sfurobotsoccer from "../../assets/sfurobotsoccer.png";
import lululemonlogo from "../../assets/lululemonlogo.png";
import Image from "next/image";

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer (Co-op)",
      company: "Aether Automation",
      period: "April 2025 - Present",
      image: aetherautomation_logo,
      location: "Remote",
      description: [
        "Designed and implemented backend workflows in Java and Deluge to automate tasks in Zoho CRM, improving efficiency and reducing human error for clients saving 15–25 hours per week in administrative tasks.",
        "Developed secure application using Firebase and OAuth, and integrated backend logic for syncing with EHR systems like Tebra, improving patient onboarding speed by 20+ hours.",
        "Integrated OpenAI API into Zoho CRM to auto-generate email drafts, meeting notes, and action item summaries, reducing client data task times by 40% and improving response accuracy.",
        "Collaborated directly with clients to identify business needs and designed tailored automation solutions, utilizing Java and Deluge to automate repetitive tasks in order to reduce operational costs and time.",
      ],
    },
    {
      id: 2,
      role: "Founder & Software Engineer",
      company: "Study Spotr",
      period: "August 2024 - Present",
      image: studyspotrlogo,
      location: "Burnaby, BC, Canada",
      description: [
        "Built and optimized RESTful APIs using Node.js and AWS, powering a study-finding web application that helped 200+ students discover ideal study spaces based on real-time data and user preferences.",
        "Designed and optimized relational schemas in PostgreSQL to support study spot listings and real-time feedback; deployed backend services to Render, ensuring seamless data flow and integration with the frontend.",
        "Comprehensive unit and integration tests using Postman, reducing post-release bug reports by over 3×.",
        "Deployed core backend features to production and maintained post-launch stability by monitoring performance, conducting regular updates, and responding to user-reported issues.",
      ],
    },
    {
      id: 3,
      role: "Front-end Engineer/Web Development Director",
      company: "SFU Robot Soccer",
      period: "February 2024 - Present",
      image: sfurobotsoccer,
      location: "Burnaby, BC, Canada",
      description: [
        "Led a team in developing a responsive web platform using React.js, improving accessibility across mobile and desktop devices, which resulted in a 15% increase in traﬃc and doubled user engagement on mobile.",
        "Optimized accessibility through UX design, improving user engagement, and reducing bounce rates by 25%.",
        "Collaborated with cross-functional teams to translate business requirements into technical solutions, ensuring a usable and cross-browser compatible website, enhancing the user experience for students and developers.",
      ],
    },
    {
      id: 4,
      role: "Educator (Retail Store)",
      company: "Lululemon Athletica",
      period: "September 2022 - April 2025",
      image: lululemonlogo,
      location: "Surrey, BC, Canada",
      description: [],
    },
  ];

  return (
    <section className="bg-stone-100 w-full flex flex-col px-8 lg:px-40 py-10 lg:py-24">
      <p className="text-black text-2xl lg:text-4xl manrope-medium">
        Work Experience
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

            <div className="flex flex-col w-full">
              <div className="flex flex-col gap-1 lg:gap-4 lg:flex-row lg:justify-between w-full lg:items-start">
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

              {/* bullet list */}
              <ul className="list-disc leading-relaxed pl-5 mt-3 space-y-2 text-stone-500 w-11/12 text-sm lg:text-base manrope-regular">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
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
