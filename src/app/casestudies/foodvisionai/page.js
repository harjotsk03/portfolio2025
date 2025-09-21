import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import foodvisionai from "../../assets/foodvisionai.png";

export default function FoodVisionAI() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Food Vision AI"}
        description={
          "Full stack mobile app to help reduce food waste and help people create recipies with ingredients they already have laying around at home."
        }
        role={"Software Engineer"}
        type={"Course Work"}
        duration={"August 2024 - September 2024"}
        img={foodvisionai}
      />
      <Footer />
    </div>
  );
}
