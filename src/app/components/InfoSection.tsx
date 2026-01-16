import RsvpForm from "./RsvpForm";

export default function InfoSection() {
  return (
    <section className="bg-white w-full">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          py-12 sm:py-16
        "
      >
        {/* RSVP FORM */}
        <RsvpForm />

        {/* Text Content */}
        <div className="mt-10 max-w-4xl">
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            AI is accelerating change across every operational layer. Roles are shifting.
            Leadership models are collapsing and reforming. Frontline and mid-level managers
            will soon lead teams of people and intelligent agents.
          </p>

          <p className="mt-6 text-gray-800 text-sm sm:text-base">
            But even the most advanced enterprises are asking the same question:
          </p>

          <h2 className="mt-8 text-black font-bold text-xl sm:text-3xl leading-snug">
            Which capabilities will matter most,
            <br />
            and how do we build them at scale?
          </h2>

          <p className="mt-6 text-gray-700 text-sm sm:text-base">
            This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce
            leaders for a candid, senior-level discussion on what’s coming next.
          </p>
        </div>
      </div>
    </section>
  );
}
