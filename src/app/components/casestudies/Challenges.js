function highlightText(text) {
  // Split text into parts: normal text and words wrapped in * *
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      const clean = part.slice(1, -1); // remove the asterisks
      return (
        <span key={i} className="text-orange-500">
          {clean}
        </span>
      );
    }
    return part;
  });
}

export default function Challenges({ items = [] }) {
  return (
    <div className="w-full bg-white flex flex-col px-6 lg:px-72 mx-auto py-20">
      <p className="text-5xl lg:text-3xl manrope-regular text-black leading-tight mb-10">
        Challenges & Solutions
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.length > 0 ? (
          items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-stone-200 rounded-xl p-6"
            >
              <h3 className="text-sm uppercase tracking-wide text-stone-400 manrope-medium mb-2">
                Challenge {i + 1}
              </h3>
              <p className="text-base text-stone-700 manrope-regular mb-4">
                {highlightText(item.challenge)}
              </p>
              <h4 className="text-sm uppercase tracking-wide text-stone-400 manrope-medium mb-2">
                Solution
              </h4>
              <p className="text-base text-stone-700 manrope-regular">
                {highlightText(item.solution)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-xs text-stone-400 manrope-regular italic">
            No challenges listed
          </p>
        )}
      </div>
    </div>
  );
}
