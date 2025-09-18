import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-5 mt-5 lg:mt-8">
      <a
        href="https://www.linkedin.com/in/harjotsingh7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="group hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-black rounded-full text-sm bg-white border-[0.75px] border-stone-200 w-9 h-9 flex items-center justify-center text-black">
          <FaLinkedinIn className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
        </p>
      </a>

      <a
        href="https://github.com/harjotsk03"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="group hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-black rounded-full text-sm bg-white border-[0.75px] border-stone-200 w-9 h-9 flex items-center justify-center text-black">
          <FaGithub className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
        </p>
      </a>

      <a
        href="https://www.instagram.com/7harjotsk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="group hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-black rounded-full bg-white border-[0.75px] border-stone-200 w-9 h-9 flex items-center justify-center text-black">
          <FaInstagram className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
        </p>
      </a>
    </div>
  );
}
