"use client";
import Image from "next/image";
import HeroOne from "../../assets/HeroOne.webp";
import HeroTwo from "../../assets/HeroTwo.webp";
import HeroThree from "../../assets/HeroThree.webp";
import HeroFour from "../../assets/HeroFour.webp";
import HeroFive from "../../assets/HeroFive.webp";
import HeroSix from "../../assets/HeroSix.webp";
import HeroSeven from "../../assets/HeroSeven.webp";
import { useEffect, useRef } from "react";

const images = [
  HeroOne,
  HeroTwo,
  HeroThree,
  HeroFour,
  HeroSix,
  HeroSeven,
];

export default function PhotoCarousel() {
  const scrollRef = useRef(null);
  const speedRef = useRef(1);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const imageWidth = 324;
    const totalWidth = images.length * imageWidth;

    const scroll = () => {
      scrollPosition += speedRef.current;

      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="overflow-hidden w-full h-60 relative mt-8 lg:mt-14"
      onMouseEnter={() => (speedRef.current = 0.5)}
      onMouseLeave={() => (speedRef.current = 1)}
    >
      <div ref={scrollRef} className="flex rounded-2xl overflow-x-hidden">
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="relative w-80 h-52 mx-1 flex-shrink-0">
            <Image
              src={src || "/placeholder.svg"}
              alt={`carousel-${(i % images.length) + 1}`}
              fill
              className="object-cover rounded-2xl grayscale"
              priority={i < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
