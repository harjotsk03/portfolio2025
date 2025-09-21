import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import woggledashboard from "../../assets/woggledashboard.png";

export default function CustomClientPortalWoggle() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Custom Client Portal"}
        description={
          "Full stack web portal built for a client to provide to their clients for client manegment and onboarding form control."
        }
        role={"Software Engineer"}
        type={"Internship"}
        duration={"May 2025 - Present"}
        img={woggledashboard}
      />
      <Footer />
    </div>
  );
}
