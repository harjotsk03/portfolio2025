import Footer from "../components/Footer";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Hero from "../components/projects/Hero";

export default function Projects() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}

