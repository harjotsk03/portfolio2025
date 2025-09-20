import Footer from "../components/Footer";
import Hero from "../components/about/Hero";
import Personal from "../components/about/Personal";

export default function Resume() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero />
      <Personal />
      <Footer />
    </div>
  );
}

