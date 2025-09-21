export default function MyRole({ roles = [] }) {
  return (
    <div className="w-full bg-black flex flex-col px-6 lg:px-72 mx-auto py-20">
      <p className="text-5xl lg:text-3xl manrope-regular text-white leading-tight mb-6">
        My Role & Contributions
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {roles.map((role, i) => (
          <li
            key={i}
            className="text-base manrope-regular text-stone-300/80 pl-4 relative"
          >
            <span className="absolute left-0">•</span>
            {role}
          </li>
        ))}
      </ul>
    </div>
  );
}
