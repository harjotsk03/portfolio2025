import Image from "next/image";
import HeroTwo from "../../assets/HeroTwo.webp";

export default function Personal() {
  return (
    <section className="bg-white w-full flex flex-col px-8 lg:px-40 py-10 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-14 items-start">
        <div className="lg:w-1/2">
          <Image
            alt="Photo of Harjot Singh."
            src={HeroTwo}
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-6 justify-start lg:w-1/2">
          <p className="manrope-regular text-black text-3xl leading-snug">
            More than just building apps, I focus on creating systems that
            actually work - clean, intuitive, and built to last.
          </p>
          <p className="manrope-regular text-stone-600 text-xl leading-normal">
            My philosophy? Good design makes life easier. Whether it’s
            streamlining a workflow, simplifying a UI, or connecting tools in
            smarter ways. I enjoy turning complexity into something clear and
            useful. Outside of work, you’ll usually find me exploring new ideas,
            playing sports, or spending time with my friends and family.
          </p>
        </div>
      </div>
    </section>
  );
}
