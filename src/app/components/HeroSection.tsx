"use client";

import Image from "next/image";
import { bgImg,mobilebg,logo } from "../../../assets/image"; 

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={bgImg}
          alt="Desktop Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile Background */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src={mobilebg}
          alt="Mobile Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 min-h-screen flex flex-col justify-center">
        
        {/* Logo */}
        <div className="mb-6">
          <Image src={logo} alt="Logo" width={160} height={40} />
        </div>

     {/* Invite Only Row */}
<div className="flex items-center gap-3 mb-4">
  
  {/* Invite Only Pill */}
  <span
    className="
      flex items-center justify-center
      rounded-xl bg-cyan-400
      text-black font-semibold
      w-[110px] h-[35px] text-xs
      md:w-[174px] md:h-[56px] md:text-sm
    "
  >
    Invite-Only
  </span>

  {/* Inline Text */}
  <span className="text-cyan-300 text-sm md:text-base font-medium">
    An Executive Roundtable · Lunch
  </span>

</div>


        {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400">
              The Skills That Matter Next:
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl font-medium text-yellow-400">
              Preparing Your Workforce & Leaders for the AI Era
            </p>


        {/* Meta info */}
        <div className="mt-6 space-y-2 text-white text-sm sm:text-base">
          <p>📅 February 20, 2026</p>
          <p>📍 Chamberlain’s Steak & Fish House, Dallas</p>
        </div>
      </div>
    </section>
  );
}
