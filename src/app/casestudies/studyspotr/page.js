import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import studyspotrscreenshot from "../../assets/StudySpotrMockup.png";

export default function StudySpotr() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Study Spotr"}
        description={
          "Full stack app to help students find study spots on, around, and off campus."
        }
        role={"Founder + Engineer"}
        type={"Startup"}
        duration={"August 2024 - Present"}
        img={studyspotrscreenshot}
      />
      <Footer />
    </div>
  );
}
