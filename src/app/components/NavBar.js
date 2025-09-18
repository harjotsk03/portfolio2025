"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="fixed top-0 flex flex-row justify-between px-6 md:px-16 border-b border-stone-200 items-center left-0 w-full h-20 bg-white z-50">
      <Link href="/" className="manrope-light hover:cursor-pointer group">
        <Image
          src={Logo}
          alt="Logo"
          className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
          width={28}
          height={28}
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row gap-10">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => {
              window.scrollTo({
                top: 0,
                duration: 800,
                behavior: "smooth",
              });
              router.push(item.href);
            }}
            className="hover:scale-105 text-sm hover:cursor-pointer hover:text-orange-500 duration-300 border-b border-transparent hover:border-orange-500 ease-in-out transition-all manrope-regular"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <HiMenuAlt3 size={28} className="text-black" />
        </button>
      </div>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <div></div>
                <button onClick={() => setIsOpen(false)}>
                  <HiX size={28} className="text-black" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-left hover:text-orange-500 transition-colors manrope-regular"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
