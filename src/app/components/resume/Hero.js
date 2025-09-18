export default function Hero() {
    return (
      <div className="bg-stone-50 overflow-hidden z-20 w-full h-max flex flex-col px-8 lg:px-28 mt-20 py-24">
        <h1 className="text-4xl text-black manrope-medium">Resume</h1>
        <p className="text-stone-700 text-sm lg:text-base lg:w-10/12 mt-2 lg:mt-3 manrope-regular">
          As I approach graduation from university with a BSc. in Computer Science and Interactive Technology, I want to use
          my skills to build apps that make an impact and provide a seemless user-experience. I seek a role that
          challenges me and lets me contribute to exciting projects, nurturing
          my growth in software development.
        </p>
        <button className="bg-white border hover:border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer border-stone-200 mt-8 text-sm w-max manrope-regular px-4 py-2 rounded-lg">Download Resumse as PDF</button>
      </div>
    );
}
