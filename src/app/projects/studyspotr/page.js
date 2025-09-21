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
          "AWS (S3, EC2, RDS, IAM Roles)",
          "SendGrid",
          "OAuth",
          "Supabase",
        ]}
        OtherStack={["Figma"]}
      />
      <MyRole
        roles={[
          "Designed front end UI to ensure seemless user-experience and intuitive use for students.",
          "Developed a responsive, mobile first front end with server-side rendering and caching with Next.js for fast page load times and strong SEO.",
          "Conducted integration testing to ensure seamless functionality and ran A/B tests on multiple front-end designs, increasing student engagement by identifying the version they interacted with most effectively and easily.",
          "Designed the backend system architecture and built robust API endpoints to support key features such as adding/editing spots, creating reviews, managing points, and handling authentication.",
          "Engineered the system for scalability, ensuring support for increasing traffic, data growth, and new feature expansion without performance degradation.",
          "Deployed and managed the application infrastructure on AWS, leveraging services such as EC2, RDS, and S3 to ensure reliability, scalability, and cost efficiency.",
        ]}
      />
      <Challenges
        items={[
          {
            challenge:
              "*AWS S3 bucket implimentation issue*: we were making a call to our bucket for each study spot image every time a user loaded the spots, this was causing *insane usage and spiked our bill by triple*.",
            solution:
              "We redesigned our object that stores the study spot data, we adjusted the S3 bucket so instead of calling to get the image URL each time, we created a *secure hashed URL* that was stored in our DB and made calls to our bucket directly almost zero.",
          },
          {
            challenge:
              "API endpoint security: when I first began building Study Spotr I did not know anything about API security. One of my friends who is into cyber security decided to test the site for fun and *managed to make 550 API calls in 15 seconds*. Again, spiking our usage when we were using Supabase for their free tier at the time.",
            solution:
              "Moved the database to *AWS RDS to ensure scalability* and reliability. Additionally, *implemented rate limiting* to allow up to 5 API calls per 30 seconds, striking a balance between providing a smooth user experience and preventing abuse.",
          },
          {
            challenge: "*Getting users*, simple issue, but very real.",
            solution:
              "*Got out of my comfort zone*, cold approached people on campus, asked professors to make announcements in class, went to events during the first week of university and tried to engage first year students and anyone I could talk to and tried to *get them to register there and then*!",
          },
        ]}
      />
      <ImpactResults
        items={[
          {
            title: "100+ Users",
            description:
              "Thus far we have managed to get over 100 students on Study Spotr. Our next goal is 500 users and possible reach out to our *first cafe* to try and get a *parternship*.",
          },
          {
            title: "Performance",
            description:
              "Optimized API calls through caching and *rate limiting* and reduced page load time by 29% by server-side rendering and *front-end caching*.",
          },
          {
            title: "Deployment",
            description:
              "Successfully *deployed* front-end to Vercel with *automated CI/CD pipelines*. And deployed backend on an *EC2 instance* using RDS for our Postregres DB.",
          },
        ]}
      />

      <Footer />
    </div>
  );
}
