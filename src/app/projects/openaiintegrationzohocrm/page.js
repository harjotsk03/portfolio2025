import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import openaiintegrationzohocrm from "../../assets/EmberOpsAIMockup.png";
import TechStack from "@/app/components/casestudies/TechStack";
import MyRole from "@/app/components/casestudies/MyRole";
import Challenges from "@/app/components/casestudies/Challenges";
import ImpactResults from "@/app/components/casestudies/ImpactResults";

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
      <TechStack
        FrontEndStack={["HTML", "TailwindCSS", "CSS", "JavaScript"]}
        BackEndStack={["Java", "JavaScript", "Deluge"]}
        OtherStack={["OpenAI", "Zoho CRM"]}
      />
      <MyRole
        roles={[
          "Designed and implemented a front-end widget in Zoho CRM, enabling seamless communication with back-end functions and the server.",

          "Architected the system to align with client requirements, ensuring scalability and full coverage of business needs.",

          "Developed and deployed back-end functions in Zoho CRM integrated with a Node.js server on Zoho Catalyst, enabling secure and reliable communication with OpenAI API endpoints.",

          "Built custom AI agent style workflows leveraging OpenAI API's, automating CRM processes such as personalized email drafting and CRUD operations on Notes, Tasks, Meetings, related to Deals/Leads.",
        ]}
      />
      <Challenges
        items={[
          {
            challenge:
              "*Managing multi-step conversations with OpenAI* in Zoho CRM was tricky. Initially, every new user prompt triggered a separate response, causing *context loss and inconsistent follow-ups* for Deals, Leads, and Contacts.",
            solution:
              "Implemented a *threaded system that linked CRM records with AI “thread IDs”* and previous response IDs. This preserved context across multiple prompts, allowing AI to provide coherent, *context-aware suggestions* for email drafts, Notes, Tasks, and Meetings.",
          },
          {
            challenge:
              "Initial AI outputs sometimes generated instructions that didn’t match Zoho CRM field names or enums, leading to *failed updates or errors in Notes, Tasks, and Deals*.",
            solution:
              "Built a *strict field-matching and enum validation layer* in the backend that parses AI responses before executing CRM actions. This ensured all updates were safe, accurate, and aligned with CRM schema.",
          },
          {
            challenge:
              "I designed and built *multiple AI assistants* (Assistant 1 for messaging, Assistant 2 for actions) which are to work together and communicate with one another, however it initially *caused overlapping operations* or conflicting updates.",
            solution:
              "Designed a *dual-assistant workflow with clearly defined responsibilities*: one for content generation and one for executing CRM actions, *coordinated via thread IDs* and previous response tracking to prevent conflicts.",
          },
        ]}
      />
      <ImpactResults
        items={[
          {
            title: "Improved Lead Follow-up and Engagement",
            description:
              "By optimizing AI-generated outreach messages, we significantly reduced response latency and ensured that leads were contacted promptly. This *improved follow-up consistency across the sales team, allowing reps to focus on high-value activities* instead of manually drafting emails, ultimately driving higher engagement and conversion rates.",
          },
          {
            title: "Reducing Manual Work and Hours",
            description:
              "This automation *saved hours* per week per employee (*~6 hrs/week/employee*) by handling repetitive tasks such as email drafting and note updates, *enhancing overall productivity and efficiency* within sales and project management teams.",
          },
          {
            title: "Boosted Adoption of AI Tools by Staff",
            description:
              "By delivering consistent, actionable AI outputs aligned with existing workflows, we *increased staff confidence in using AI features*.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
