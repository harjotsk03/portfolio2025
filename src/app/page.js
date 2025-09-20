import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/Footer";
import FeaturedProjects from "./components/home/FeaturedProjects";
import Hero from "./components/home/Hero";
import WorkExperience from "./components/home/WorkExperience";

export default function Home() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero />
      <FeaturedProjects />
      <WorkExperience />
      <Footer />
    </div>
  );
}
