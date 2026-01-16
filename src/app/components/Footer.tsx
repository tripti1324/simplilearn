"use client";

import Image from "next/image";
import RsvpForm from "./RsvpForm";
import { footer,footerMob,logo } from "../../../assets/image"; 

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">

      {/* DESKTOP BACKGROUND */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src={footer}
          alt="Footer background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* MOBILE BACKGROUND */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src={footerMob}
          alt="Footer background mobile"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">

        {/* CTA TEXT */}
        <p className="text-white font-semibold text-sm sm:text-base mb-4">
          Space is limited.
        </p>

        {/* RSVP FORM */}
        <RsvpForm />

        {/* FOOTER BOTTOM */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

          {/* LOGO */}
          <Image
            src={logo}
            alt="Simplilearn"
            width={140}
            height={40}
            className="object-contain"
          />

          {/* COPYRIGHT */}
          <p className="text-white text-xs">
            © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
