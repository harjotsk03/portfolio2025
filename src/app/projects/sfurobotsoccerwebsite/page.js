import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import pharmabotics from "../../assets/pharmabotics.png";

export default function SFURobotSoccerWebsite() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"SFU Robot Soccer Website"}
        description={
          "Led a team of 4 developers and designers to revamp SFU RS website and maintain it for the last 2 years ensuring new/old job posting are up to date."
        }
        role={"Lead Software Engineer"}
        type={"University Club"}
        duration={"February 2024 - Present"}
        img={pharmabotics}
        GithubLink="https://github.com/SFURobotSoccer/sfurobotsoccerwebsitedashboard"
        LiveSiteLink="https://www.sfurobotsoccer.com/"
      />
      <Footer />
    </div>
  );
}
