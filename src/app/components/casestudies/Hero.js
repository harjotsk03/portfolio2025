"use client";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLaptop,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Hero({
  title,
  description,
  role,
  type,
  duration,
  img,
  GithubLink = "",
  LiveSiteLink = "",
  DevpostLink = "",
}) {
  const router = useRouter();

  return (
    <div className="w-full bg-white flex flex-col px-6 lg:px-72 mx-auto py-20 2xl:py-28">
      <div className="flex flex-row justify-between items-end mb-12">
        <div className="w-full">
          <button
            onClick={() => router.back()}
            className="w-max text-xs py-3 hover:text-black group transition-all duration-300 ease-in-out hover:cursor-pointer flex flex-row items-center gap-2 text-stone-600 manrope-light"
          >
            <ArrowLeft
              className="group-hover:-translate-x-1 transition-all duration-300 ease-in-out"
              size={12}
            />
            Back
          </button>
          <div className="w-full">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center w-full justify-between mb-4">
              <h1 className="text-5xl lg:text-5xl manrope-medium text-gray-900 leading-tight">
                {title || "Redesign project: fitness tracker App Revamp"}
              </h1>
            </div>
            {(GithubLink || DevpostLink || LiveSiteLink) && (
              <div className="flex flex-row gap-5 mb-4">
                {GithubLink && (
                  <a
                    href={GithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="group hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-black rounded-full text-sm bg-white border-[0.75px] border-stone-200 w-max px-4 gap-2 h-9 flex items-center justify-center text-black">
                      GitHub{" "}
                      <FaGithub className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
                    </p>
                  </a>
                )}

                {DevpostLink && (
                  <a
                    href={DevpostLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="group hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-black rounded-full text-sm bg-white border-[0.75px] border-stone-200 w-max px-4 gap-2 h-9 flex items-center justify-center text-black">
                      DevPost{" "}
                      <FaCode className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
                    </p>
                  </a>
                )}

                {LiveSiteLink && (
                  <a
                    href={LiveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="group hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:border-black rounded-full text-sm bg-white border-[0.75px] border-stone-200 w-max px-4 gap-2 h-9 flex items-center justify-center text-black">
                      Live Site
                      <FaLaptop className="transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]" />
                    </p>
                  </a>
                )}
              </div>
            )}

            <p className="text-lg text-stone-500 manrope-light leading-relaxed">
              {description ||
                "Elevating the user experience of a renowned fitness tracker app through a strategic."}
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 w-full gap-8">
        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4  transition-shadow duration-300">
          <h3 className="text-sm manrope-medium text-stone-400  tracking-wide mb-2">
            Role
          </h3>
          <p className="text-lg manrope-regular text-gray-900">
            {role || "UX/UI Designer"}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4  transition-shadow duration-300">
          <h3 className="text-sm manrope-medium text-stone-400  tracking-wide mb-2">
            Project Type
          </h3>
          <p className="text-lg manrope-regular text-gray-900">
            {type || "Health & Fitness"}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 transition-shadow duration-300">
          <h3 className="text-sm manrope-medium text-stone-400  tracking-wide mb-2">
            Timeline/Duration
          </h3>
          <p className="text-lg manrope-regular text-gray-900">
            {duration || "3 months"}
          </p>
        </div>
      </div>

      <div className="w-full group rounded-xl mx-auto mt-12 h-80 lg:h-[60vh] overflow-hidden relative">
        <Image
          src={img}
          alt={title}
          className="group-hover:scale-105 transition-all duration-500 ease-in-out w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
