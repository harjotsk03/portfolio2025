"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero({ title, description, role, type, duration , img}) {
  const router = useRouter();
    return (
      <div className="flex flex-col px-6 lg:max-w-4xl mx-auto py-24 lg:py-40">
        <button
          onClick={() => router.push("/projects")}
          className="w-max text-xs py-3 hover:text-black group transition-all duration-300 ease-in-out hover:cursor-pointer flex flex-row items-center gap-2 text-stone-600 manrope-light"
        >
          <ArrowLeft
            className="group-hover:-translate-x-1 transition-all duration-300 ease-in-out"
            size={12}
          />{" "}
          Back to projects
        </button>
        <div className="mb-12">
          <h1 className="text-5xl lg:text-5xl manrope-medium text-gray-900 leading-tight mb-6">
            {title || "Redesign project: fitness tracker App Revamp"}
          </h1>
          <p className="text-lg text-stone-500 manrope-light leading-relaxed">
            {description ||
              "Elevating the user experience of a renowned fitness tracker app through a strategic."}
          </p>
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
