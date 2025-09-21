import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import gardensimulator from "../../assets/gardensimulator.png";

export default function GardenSimulator() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Garden Simulator Game"}
        description={
          "Simulator game built with Java intended to learn OOP, various software design patterns, algorithms, and Java specific programming."
        }
        role={"Developer"}
        type={"Course Work"}
        duration={"May 2024 - August 2024"}
        img={gardensimulator}
      />
      <Footer />
    </div>
  );
}
