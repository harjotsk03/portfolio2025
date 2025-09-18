import Image from "next/image";
import EmberOpsAIMockup from "../../assets/EmberOpsAIMockup.png";
import StudySpotrMockup from "../../assets/StudySpotrMockup.png";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "Study Spotr",
      description:
        "Build a full stack web application to help students find study spots on, around, and off campus. Used by over 100 students Canada wide.",
      image: StudySpotrMockup,
      link: "https://www.studyspotr.com",
    },
    {
      id: 2,
      title: "OpenAI Integration with CRM",
      description:
        "Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.",
      image: EmberOpsAIMockup,
      link: "#",
    },
  ];
  return (
    <div className="bg-white w-full h-max flex flex-col px-8 lg:px-40 py-10 lg:py-20">
      <p className="text-black text-2xl lg:text-4xl manrope-medium">
        Featured Projects
      </p>
      <p className="text-stone-400 text-sm lg:text-base lg:w-10/12 mt-2 lg:mt-3 manrope-regular">
        Explore my featured projects, shaped by startup and co-op experiences,
        where I combine engineering discipline with a focus on usability and
        scalability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => (
          <button
            key={project.id}
            className="overflow-hidden group hover:cursor-pointer items-start text-left flex flex-col"
          >
            <div className="relative w-full rounded-2xl overflow-hidden h-80 lg:h-96">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all ease-in-out duration-500"
              />
            </div>

            <div className="flex flex-col flex-1 mt-6">
              <h3 className="text-xl lg:text-[1.8vw] manrope-medium text-black">
                {project.title}
              </h3>
              <p className="text-stone-400 manrope-regular text-sm lg:text-base mt-2 flex-1">
                {project.description}
              </p>
              <div className="opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out inline-flex mt-4 items-center text-xs lg:text-sm text-black manrope-regular">
                See the project
                <span className="transform transition-transform duration-500 ease-out delay-300 group-hover:translate-x-2 ml-1">
                  →
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <button className="rounded-lg lg:ml-auto hover:cursor-pointer mt-10 bg-black text-white manrope-regular w-max px-3.5 py-2 text-xs lg:text-sm lg:px-5 lg:py-2 group">
        <div className="inline-flex items-center">
          View All Projects
          <span className="ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </button>
    </div>
  );
}
