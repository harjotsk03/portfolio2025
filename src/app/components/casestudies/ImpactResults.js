export default function ImpactResults({ items = [] }) {
  return (
    <div className="w-full bg-stone-50 flex flex-col px-6 lg:px-72 mx-auto py-20">
      <p className="text-5xl lg:text-3xl manrope-regular text-black leading-tight mb-12">
        Impact & Results
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-xl p-6 transition-shadow duration-300"
            >
              <h3 className="text-lg manrope-medium text-black mb-2">
                {item.title}
              </h3>
              <p className="text-base text-stone-700 manrope-regular">
                {item.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-xs text-stone-400 manrope-regular italic">
            No results listed
          </p>
        )}
      </div>
    </div>
  );
}
