"use client";

const items = [
  {
    title: "Skills Decay",
    desc: "every 2–3 years\nfaster for technical skills",
    icon: "🕒",
  },
  {
    title: "Manager Role Shift",
    desc: "orchestrating\npeople + AI agents",
    icon: "🧩",
  },
  {
    title: "Leaders + AI Co-Pilots",
    desc: "requires sensemaking\nand systems thinking",
    icon: "📊",
  },
  {
    title: "Frontline Capability",
    desc: "now depends\non digital fluency",
    icon: "🛡️",
  },
  {
    title: "Core Human Capabilities",
    desc: "analytical reasoning\nand scenario planning",
    icon: "🧠",
  },
  {
    title: "Winning Organizations",
    desc: "predict skills\nahead of demand",
    icon: "🚀",
  },
];

export default function ExploreSection() {
  return (
    <section className="bg-[#EDF3FF] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">

        {/* Heading */}
        <h2 className="text-[#F5A623] font-semibold text-xl sm:text-2xl">
          What We’ll Explore
        </h2>

        <p className="mt-2 text-gray-700 text-sm sm:text-base">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-xl
                shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                p-6
                flex flex-col
                gap-4
                aspect-[390/203]
              "
            >
              {/* Icon */}
              <div className="text-blue-600 text-xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
