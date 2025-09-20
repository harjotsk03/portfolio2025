import Hero from "@/app/components/casestudies/Hero";
import Footer from "../../components/Footer";
import binthere from "../../assets/bintheredumpedthat.png";

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
      />
      <Footer />
    </div>
  );
}
