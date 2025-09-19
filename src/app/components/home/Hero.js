import Image from "next/image";
import PhotoCarousel from "../../components/home/PhotoCarousel";
import SocialMedia from "../../components/home/SocialMedia";
import HeroOne from "../../assets/MePic.jpeg";

export default function Hero() {
    return (
      <div className="bg-stone-50 overflow-hidden z-20 w-full h-max flex flex-col px-8 lg:px-28 py-28 lg:py-40">
        <Image
          src={HeroOne}
          alt={``}
          className="hidden lg:flex mb-4 transform scale-x-[-1] rounded-full grayscale"
          width={70}
          height={70}
        />
        <h1 className="text-black text-3xl lg:text-6xl manrope-regular leading-snug lg:leading-tight">
          I’m Harjot Singh, a software engineer designing{" "}
          <span className="text-orange-500">intuitive and scalable</span>{" "}
          digital products in Vancouver, BC.
        </h1>
        <p className="text-stone-500 text-base lg:text-lg manrope-light lg:w-10/12 mt-14">
          Designing scalable, user-friendly software. Through co-op and startup
          experience, I’ve built apps that balance functionality, usability, and
          clean design to maximize impact.
        </p>
        <SocialMedia />
        <PhotoCarousel />
      </div>
    );
}
