"use client";

import Image from "next/image";
import { chess } from "../../../assets/image"; 
import RsvpForm from "./RsvpForm";

export default function InsightSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          py-16
        "
      >
        {/* Main layout */}
        <div
          className="
            flex flex-col-reverse
            lg:flex-row
            gap-12
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-xl">
            <h2
  className="
    text-orange-400 font-semibold
    text-base sm:text-lg md:text-xl lg:text-2xl
    leading-snug
  "
>

              Go behind the curtain with real
              <br />
              examples and high-scale insights
            </h2>

            <p
  className="
    text-gray-700
    text-xs sm:text-sm md:text-base
    leading-relaxed sm:leading-loose
  "
>

              You’ll walk away with:
            </p>

            {/* Bullet list */}
            <ul className="mt-4 space-y-4">
              {[
                "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
                "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
                "Signals for where capability gaps may already be forming in your organization.",
                "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
                "Actionable insights you can take straight into your next exec meeting.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="w-[2px] bg-orange-400 rounded-sm mt-1" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            {/* RSVP */}
            <div className="mt-10">
              <RsvpForm />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-shrink-0">
        <div
  className="
    relative
    w-[293px] h-[299px]
    sm:w-[320px] sm:h-[350px]
    lg:w-[470px] lg:h-[511px]
  "
>


              <Image
                src={chess}
                alt="Strategic Insights"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
