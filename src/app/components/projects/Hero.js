import Image from "next/image";
import PhotoCarousel from "../../components/home/PhotoCarousel";
import SocialMedia from "../../components/home/SocialMedia";
import HeroOne from "../../assets/MePic.jpeg";

export default function Hero() {
    return (
      <div className="bg-stone-50 overflow-hidden z-20 w-full h-max flex flex-col px-8 lg:px-28 mt-20 py-24">
        <h1 className="text-4xl text-black manrope-medium">Projects & Work</h1>
        <p className="text-stone-400 text-sm lg:text-base lg:w-10/12 mt-2 lg:mt-3 manrope-regular">
        Some of my selected projects and work I have done during university, internships, startups, and hackathons.
        </p>
      </div>
    );
}
