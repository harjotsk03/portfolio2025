import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import studyspotrscreenshot from "../../assets/StudySpotrMockup.png";
import TechStack from "@/app/components/casestudies/TechStack";
import MyRole from "@/app/components/casestudies/MyRole";
import Challenges from "@/app/components/casestudies/Challenges";
import ImpactResults from "@/app/components/casestudies/ImpactResults";

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
        LiveSiteLink="https://studyspotr.com/"
      />
      <TechStack
        FrontEndStack={["React", "Next.js", "TailwindCSS", "ShadCN", "MapBox"]}
        BackEndStack={[
          "Java",
          "Springboot",
          "Postregres",
          "AWS",
          "SendGrid",
          "OAuth",
          "Supabase",
        ]}
        OtherStack={["Figma"]}
      />
      <MyRole
        roles={[
          "Designed and implemented authentication with Firebase",
          "Built responsive UI with React and Tailwind",
          "Integrated backend API for user data",
          "Wrote unit tests to ensure reliability",
        ]}
      />
      <Challenges
        items={[
          {
            challenge:
              "Integrating a third-party API with inconsistent documentation.",
            solution:
              "Built a custom wrapper with error handling and caching to stabilize responses.",
          },
          {
            challenge: "Users dropped off during onboarding.",
            solution:
              "Redesigned the flow into 3 smaller steps, improving completion by 40%.",
          },
          {
            challenge: "Deployment pipeline was slow and error-prone.",
            solution:
              "Set up automated CI/CD with GitHub Actions and environment checks.",
          },
        ]}
      />
      <ImpactResults
        items={[
          {
            title: "User Engagement",
            description:
              "Increased daily active users by 35% through onboarding improvements.",
          },
          {
            title: "Performance",
            description:
              "Optimized API calls and reduced page load time by 50%.",
          },
          {
            title: "Deployment",
            description:
              "Successfully deployed to Vercel with automated CI/CD pipelines.",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
