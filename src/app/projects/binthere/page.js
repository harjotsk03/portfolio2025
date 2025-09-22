import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import binthere from "../../assets/bintheredumpedthat.png";
import ImpactResults from "@/app/components/casestudies/ImpactResults";
import Challenges from "@/app/components/casestudies/Challenges";
import MyRole from "@/app/components/casestudies/MyRole";
import TechStack from "@/app/components/casestudies/TechStack";

export default function BinThere() {
  return (
    <div className="w-full fade-in-down bg-white h-full">
      <Hero
        title={"Bin There, Dumped That"}
        description={
          "Product to help improve waste sorting, and streamline waste bin manegment in schools, airports, malls, etc."
        }
        role={"Software Engineer"}
        type={"Hackathon"}
        duration={"24 hours"}
        img={binthere}
        GithubLink="https://github.com/caleb05w/BinThereDumpedThat"
        DevpostLink="https://devpost.com/software/bin-there-dumped-that"
      />
      <TechStack
        FrontEndStack={["React", "TailwindCSS"]}
        BackEndStack={["Node.js", "Express", "MongoDB", "AWS (S3, IAM Roles)"]}
        OtherStack={[
          "Python",
          "OpenCV",
          "OpenAI",
          "Arduino",
          "C++",
          "Flask",
          "Figma",
        ]}
      />
      <MyRole
        roles={[
          "Developed responsive front-end interface for easy usability, and ensuring that I followed the design from our teams designer.",
          "Designed and developed back-end REST API endpoints to communicate with our front-end and with our microcontroller via Flask.",
          "Implimented AWS to store images captured from our camera source to ensure a full log of garbage thrown away using our product.",
          "Pitched our project to judges for various tracks such as sustainability, best startup idea, and DEI product design.",
          "Worked with our electrical engineering teammate who was mainly focused on the hardware/firmware of our projects, I provided help with how to integrate and communicate with OpenAI endpoints with the microcontroller.",
        ]}
      />
      <Challenges
        items={[
          {
            challenge:
              "Our *backend struggled to reliably capture and display updates* from the microcontroller. The multi-threaded program caused conflicts, and the dashboard service frequently failed to connect with the Flask endpoint, leading to *missing or delayed sensor data* in both the UI and the database.",
            solution:
              "Dedicated a *single thread to handle communication with the Flask endpoint*, ensuring that sensor data from the microcontroller was consistently captured. With *retry logic* and health checks in place, *the backend could reliably update the database* and dashboard UI *in real time*.",
          },
          {
            challenge:
              "We talked with a mentor who said we *should have some form of authentication* to protect sensitive data. Without proper session handling and role-based permissions, users couldn’t reliably log in or access the right parts of the dashboard.",
            solution:
              "*I designed and implemented* the authentication system from scratch (not sure why, I wanted a challenge I guess). This included building a secure signup/login flow with *password hashing*, *session/token management*, and *role-based access control*. I also integrated form validation and error handling to prevent common vulnerabilities, enabling a smooth and secure login experience for all users.",
          },
          {
            challenge:
              "We *needed the system to accurately classify waste items* (organics, recycling, or regular garbage), but initial responses from the base OpenAI model were *inconsistent and often misclassified items*. This limited the reliability of our dashboard and user experience.",
            solution:
              "We *fine-tuned an OpenAI model* on a labeled dataset of waste items, covering common edge cases and ambiguous examples. By training the model on domain-specific data, we *significantly increased classification consistency*, enabling the system to reliably distinguish between organics, recycling, and regular garbage.",
          },
        ]}
      />
      <ImpactResults
        items={[
          {
            title: "Won 3 Awards",
            description:
              "After the 24 hours of effort, hardwork, and teamwork; we were able to take home *3 winning awards*. Best Project Overall, Best DEI Project, and *Entrepreneurial Award*.",
          },
          {
            title: "Interview Opportunities",
            description:
              "From this win I was able to *secure 2 internship interviews*, in the end I was not selected however simply getting my first 2 interviews was a win for me!",
          },
          {
            title: "Learning and Drive",
            description:
              "Building for 24 straight is not easy, it taught me so much about myself, how I work when I am tired and with a team. But also, it showed me *how far passion can take you*, I would never have kept pushing if I didnt have the *genuine love I have for building and innovation*.",
          },
        ]}
      />
      <Footer />
    </div>
  );
}
