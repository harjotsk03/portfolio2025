export default function TechStack({
  FrontEndStack = [],
  BackEndStack = [],
  OtherStack = [],
}) {
  const sections = [
    { title: "Frontend", items: FrontEndStack },
    { title: "Backend", items: BackEndStack },
    { title: "Other Tools", items: OtherStack },
  ];

  return (
    <div className="w-full bg-stone-100 flex flex-col px-6 lg:px-72 mx-auto py-20">
      <p className="text-5xl lg:text-3xl manrope-regular text-black leading-tight mb-6">
        Tech Stack
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-4">
            <h3 className="text-lg manrope-regular text-stone-700">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {section.items.length > 0 ? (
                section.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm manrope-regular text-stone-600"
                  >
                    • {item}
                  </li>
                ))
              ) : (
                <li className="text-xs text-stone-400 manrope-regular italic">
                  No tools listed
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
