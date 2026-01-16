"use client";

const agendaItems = [
  {
    title: "Welcome & Opening",
    speaker: "Sudipto Mitra, CRO Simplilearn",
    description:
      "Why capability-building is now a board-level issue and what’s changing in the workforce landscape.",
  },
  {
    title: "Keynote: What Enterprise Leaders Are Seeing on the Ground",
    speaker: "Rob Lauber, Former CLO McDonald’s",
    description:
      "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
  },
  {
    title: "Lunch & Executive Conversation",
    speaker: "Industry Experts Invited",
    description:
      "What large enterprise talent ecosystems are learning about capability-building at scale.",
  },
];

export default function EventAgenda() {
  return (
    <section className="w-full bg-[#00F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">

        {/* Section Heading */}
        <h2 className="text-blue-700 font-semibold text-xl sm:text-2xl mb-10">
          Event Agenda
        </h2>

        {/* Agenda Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-lg
                border border-gray-200
                p-6
                flex flex-col
                gap-4
                shadow-sm
              "
            >
              {/* Title */}
              <h3 className="text-blue-600 font-semibold text-base sm:text-lg leading-snug">
                {item.title}
              </h3>

              {/* Speaker */}
              <p className="text-black font-medium-bold text-sm sm:text-base">
                {item.speaker}
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
