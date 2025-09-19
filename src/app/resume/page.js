import Footer from "../components/Footer";
import Education from "../components/resume/Education";
import Hero from "../components/resume/Hero";
import WorkExperience from "../components/resume/WorkExperience";

export default function Resume() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero />
      <WorkExperience />
      <Education />
      <Footer />
    </div>
  );
}

