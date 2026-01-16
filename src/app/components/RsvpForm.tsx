"use client";

import { submitRSVP } from "@/app/actions/rsvp";
import { useState } from "react";

export default function RsvpForm() {
  const [success, setSuccess] = useState(false);

  async function action(formData: FormData) {
    await submitRSVP(formData);
    setSuccess(true);
  }

  return (
   <form
  action={action}
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center w-full"
>

     {/* Email Input */}
<div className="relative w-full sm:max-w-[606px]">
  <input
    type="email"
    name="email"
    required
    placeholder="Enter your work email to confirm your attendance"
    className="
      w-full h-[45px] sm:h-[81px]
      bg-gray-100 border border-gray-400
      rounded-md
      px-12 text-sm sm:text-base
      focus:outline-none focus:ring-2 focus:ring-gray-400
    "
  />
  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
    ✉️
  </span>
</div>


     {/* RSVP Button */}
<div className="flex justify-center sm:justify-start">
  <button
    type="submit"
    className="
      w-[139px] h-[45px]
      sm:w-[251px] sm:h-[81px]
      bg-orange-400 hover:bg-orange-500
      text-white font-semibold
      rounded-md
      text-sm sm:text-lg
      flex items-center justify-center
    "
  >
    RSVP Now
  </button>
</div>


      {success && (
        <p className="text-green-600 text-sm mt-2">
          Thanks! Your RSVP has been recorded.
        </p>
      )}
    </form>
  );
}
