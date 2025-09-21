import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import pharmabotics from "../../assets/pharmabotics.png";

export default function Pharmabotics() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Pharmabotics"}
        description={
          "Full stack software and firmware project, built for improved and easy of medicine dispension in care homes, hospitals, and other place of need."
        }
        role={"Engineer"}
        type={"Course Work"}
        duration={"May 2024 - August 2024"}
        img={pharmabotics}
        DevpostLink="https://www.sfu.ca/siat/showcase/summer-2024-project-showcase/iat-267-pharmabotics.html"
        GithubLink="https://github.com/harjotsk03/pharmabotics"
      />
      <Footer />
    </div>
  );
}
