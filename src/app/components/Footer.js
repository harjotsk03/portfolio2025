import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import SocialMedia from "./home/SocialMedia";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black px-8 lg:px-40 py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-0">
        {/* Left section - Name and tagline */}
        <div className="flex flex-col">
          <h3 className="manrope-medium text-white text-2xl lg:text-2xl">
            Harjot Singh
          </h3>
          <p className="manrope-regular text-stone-500 text-sm mt-3 max-w-md">
            Full Stack Software Engineer building impactful solutions and
            automations.
          </p>
        </div>

        {/* Right section - Links and contact */}
        <div className="flex flex-col gap-8">
          <SocialMedia />

          {/* Quick links */}
          <div className="flex flex-col gap-3">
            <a
              href="/about"
              className="group text-stone-400 hover:text-white transition-colors duration-300 text-sm manrope-regular flex items-center gap-1"
            >
              About
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a
              href="/resume"
              className="group text-stone-400 hover:text-white transition-colors duration-300 text-sm manrope-regular flex items-center gap-1"
            >
              Resume
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
            <a
              href="/contact"
              className="group text-stone-400 hover:text-white transition-colors duration-300 text-sm manrope-regular flex items-center gap-1"
            >
              Contact
              <ArrowUpRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section - Copyright */}
      <div className="mt-16 pt-8 border-t border-stone-800">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <p className="text-stone-500 text-xs manrope-regular">
            © {currentYear} Harjot Singh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="text-stone-500 hover:text-stone-400 transition-colors duration-300 text-xs manrope-regular"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-stone-500 hover:text-stone-400 transition-colors duration-300 text-xs manrope-regular"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
