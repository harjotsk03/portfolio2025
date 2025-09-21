import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import openaiintegrationzohocrm from "../../assets/EmberOpsAIMockup.png";

export default function OpenAIIntegrationZohoCRM() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"OpenAI Integration with CRM"}
        description={
          "Integrated OpenAI into Zoho CRM to allow sales and teams to use AI for email drafting, creating and updating of notes, tasks, meetings, calls, and more with Lead/Deal data for accurate and related actions."
        }
        role={"Software Engineer"}
        type={"Internship"}
        duration={"June 2025 - Present"}
        img={openaiintegrationzohocrm}
      />
      <Footer />
    </div>
  );
}
