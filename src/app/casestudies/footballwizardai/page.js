import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import foodballwizard from "../../assets/footballwizard.png";

export default function FootballWizardAI() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Football Wizard AI"}
        description={
          "Full stack chat bot app allowing people to get data and analytics from the Premier League."
        }
        role={"Software Engineer"}
        type={"Course Work"}
        duration={"September 2024 -  Decemeber 2024"}
        img={foodballwizard}
      />
      <Footer />
    </div>
  );
}
