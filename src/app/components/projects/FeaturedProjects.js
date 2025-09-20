"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { X } from "lucide-react";

import EmberOpsAIMockup from "../../assets/EmberOpsAIMockup.png";
import StudySpotrMockup from "../../assets/StudySpotrMockup.png";
import woggledashboard from "../../assets/woggledashboard.png";
import pharmabotics from "../../assets/pharmabotics.png";
import gardensimulator from "../../assets/gardensimulator.png";
import foodvisionai from "../../assets/foodvisionai.png";
import bintheredumpedthat from "../../assets/bintheredumpedthat.png";
import footballwizard from "../../assets/footballwizard.png";
import { useRouter } from "next/navigation";

export default function FeaturedProjects() {
  const router = useRouter();
  const projects = [
    {
      id: 1,
      title: "Study Spotr",
      description:
        "Full stack application to help students find study spots. Used by over 100 students Canada wide.",
      image: StudySpotrMockup,
      link: "/casestudies/studyspotr",
      tech: [
        "Next.js",
        "Tailwind",
        "Framer Motion",
        "Java",
        "Springboot",
        "AWS",
        "PostgreSQL",
        "TypeScript",
      ],
      type: "Startup",
    },
    {
      id: 2,
      title: "Bin There, Dumped That",
      description:
        "App for tracking and managing waste disposal and recycling for households.",
      image: bintheredumpedthat,
      link: "/casestudies/binthere",
      tech: [
        "React",
        "MongoDB",
        "Tailwind",
        "AWS",
        "Arduino",
        "OpenAI",
        "JavaScript",
      ],
      type: "Hackathon",
    },
    {
      id: 3,
      title: "OpenAI Integration with CRM",
      description:
        "Integrating OpenAI into a CRM system to automate workflows and improve user productivity.",
      image: EmberOpsAIMockup,
      link: "#",
      tech: [
        "Zoho CRM",
        "Java",
        "OpenAI API",
        "HTML",
        "CSS",
        "JavaScript",
        "Deluge",
      ],
      type: "Internship",
    },
    {
      id: 4,
      title: "Garden Simulator",
      description:
        "Built a Garden Simulation game using Java to learn game design, development, object-oriented programming, software patterns, and more.",
      image: gardensimulator,
      link: "#",
      tech: ["Java"],
      type: "Course Work",
    },
    {
      id: 5,
      title: "Custom Client Portal",
      description:
        "Designed and developed a full stack application to help Woggle Consulting with client management and form log in management.",
      image: woggledashboard,
      link: "#",
      tech: ["React", "Tailwind", "Node.js", "Firebase", "JavaScript"],
      type: "Internship",
    },
    {
      id: 6,
      title: "Pharmabotics",
      description:
        "A mobile app connecting health enthusiasts to track their supplement intake and health metrics.",
      image: pharmabotics,
      link: "#",
      tech: [
        "React",
        "Tailwind",
        "MongoDB",
        "Node.js",
        "Arduino",
        "C++",
        "AWS",
        "JavaScript",
      ],
      type: "Course Work",
    },
    {
      id: 7,
      title: "Food Vision AI",
      description:
        "AI-powered app to recognize food items from images and provide nutritional insights.",
      image: foodvisionai,
      link: "#",
      tech: [
        "React Native",
        "Expo",
        "Python",
        "TensorFlow",
        "OpenAI API",
        "JavaScript",
      ],
      type: "Course Work",
    },
    {
      id: 8,
      title: "Football Wizard AI",
      description:
        "App for tracking and managing waste disposal and recycling for households.",
      image: footballwizard,
      link: "#",
      tech: [
        "React",
        "Tailwind",
        "OpenAI",
        "JavaScript",
        "RAGS",
        "Python",
        "Scikit-learn",
        "Pandas",
        "numpy",
      ],
      type: "Course Work",
    },
  ];

  const languageSet = new Set([
    "Java",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "Deluge",
  ]);

  const allLanguages = Array.from(
    new Set(projects.flatMap((p) => p.tech.filter((t) => languageSet.has(t))))
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [loading, setLoading] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const allTech = Array.from(new Set(projects.flatMap((p) => p.tech)));
  const allTypes = Array.from(new Set(projects.map((p) => p.type)));

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      let results = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (selectedTech.length > 0) {
        results = results.filter((p) =>
          selectedTech.every((tech) => p.tech.includes(tech))
        );
      }

      if (selectedTypes.length > 0) {
        results = results.filter((p) => selectedTypes.includes(p.type));
      }

      setFilteredProjects(results);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedTech, selectedTypes]);

  const toggleTech = (tech) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const clearAllFilters = () => {
    setSelectedTech([]);
    setSelectedTypes([]);
  };

  useEffect(() => {
    if (filterOpen) {
      // Scroll to top

      window.scrollTo({
        top: 0,
        duration: 800,
        behavior: "smooth",
      });

      // Lock body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Unlock body scroll
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [filterOpen]);

  return (
    <div className="bg-white w-full h-max flex flex-col px-8 lg:px-28 py-6">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-3">
        <div className="relative flex-1 w-full md:w-auto">
          <input
            className="bg-stone-100 focus:outline-black transition-all duration-300 ease-in-out focus:outline-1 rounded-lg px-4 py-2 manrope-regular text-sm w-full pr-10"
            placeholder="Search for a project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {loading && (
            <AiOutlineLoading3Quarters className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-orange-500" />
          )}
        </div>

        <button
          className="flex items-center gap-2 bg-orange-100 hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer text-orange-600 px-4 py-2 rounded-lg manrope-medium text-sm"
          onClick={() => setFilterOpen(true)}
        >
          <FiFilter /> Filter
        </button>
      </div>

      {/* Active Filters (chips) */}
      {(selectedTech.length > 0 || selectedTypes.length > 0) && (
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {selectedTech.map((tech) => (
            <button
              onClick={() => toggleTech(tech)}
              key={tech}
              className="flex hover:cursor-pointer items-center gap-1 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs"
            >
              {tech}
              <X className="w-3 h-3" />
            </button>
          ))}
          <button
            onClick={clearAllFilters}
            className="text-xs hover:bg-red-100 hover:cursor-pointer text-red-500 ml-2 px-3 py-1 rounded-md transition-all ease-in-out duration-300"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Modal Filter */}
      <AnimatePresence>
        {filterOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 h-screen top-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="fixed inset-0 left-0 h-screen top-0 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="bg-white -mt-32 rounded-2xl p-6 max-w-lg w-full shadow-xl">
                <h2 className="text-lg manrope-medium mb-4">Filter Projects</h2>

                {/* Tech Filters */}
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {allLanguages.map((tech) => (
                      <button
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm border transition ${
                          selectedTech.includes(tech)
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-stone-600 border-stone-300"
                        }`}
                        onClick={() => toggleTech(tech)}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Type Filters */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Project Types</p>
                  <div className="flex flex-wrap gap-2">
                    {allTypes.map((type) => (
                      <button
                        key={type}
                        className={`px-3 py-1 rounded-full text-sm border transition ${
                          selectedTypes.includes(type)
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-stone-600 border-stone-300"
                        }`}
                        onClick={() => toggleType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-between">
                  <button
                    onClick={clearAllFilters}
                    className="px-4 py-2 bg-stone-200 text-stone-700 rounded-lg text-sm hover:bg-stone-300 transition"
                  >
                    Clear All
                  </button>
                  <button
                    className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-stone-800 transition"
                    onClick={() => setFilterOpen(false)}
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-3 gap-x-6 mb-10 mt-2 gap-y-14"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.button
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => router.push(project.link)}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden group hover:cursor-pointer items-start text-left flex flex-col"
            >
              <div className="relative w-full rounded-2xl overflow-hidden h-80 lg:h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all ease-in-out duration-500"
                />
              </div>

              <div className="flex flex-col flex-1 mt-6">
                <h3 className="text-xl lg:text-[1.8vw] manrope-medium text-black">
                  {project.title}
                </h3>
                <p className="text-orange-600 manrope-light text-xs lg:text-sm flex-1">
                  {project.type}
                </p>
                <p className="text-stone-400 manrope-regular text-sm lg:text-base mt-2 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={`${tech}-${index}`}
                      className="text-xs bg-stone-100 px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="transition-opacity duration-300 ease-in-out inline-flex mt-4 items-center text-xs lg:text-sm text-black manrope-regular">
                  Read case study
                  <span className="transform transition-transform duration-500 ease-out delay-300 group-hover:translate-x-2 ml-1">
                    →
                  </span>
                </div>
              </div>
            </motion.button>
          ))}

          {/* Empty State */}
          {!loading && filteredProjects.length === 0 && (
            <motion.p
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full manrope-regular mt-10 text-center text-black text-sm"
            >
              No projects found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
