"use client";

import Image from "next/image";
import { Rob, krishna, sudipto } from "../../../assets/image";

const speakers = [
  {
    name: "Rob Lauber",
    image: Rob,
    bio: `Rob Lauber is a global workforce and capability-building leader with over
25 years of experience helping organizations prepare leaders and frontline
teams for change. Most recently, he served as SVP and Chief Learning
Officer at McDonald’s, leading learning and development across 37,000+
restaurants worldwide. His perspective is especially relevant as
organizations rethink leadership and capability models in the age of AI.`,
  },
  {
    name: "Krishna Kumar",
    image: krishna,
    bio: `Krishna Kumar is the Founder and CEO of Simplilearn, working closely with
enterprises navigating workforce transformation driven by AI and digital
change. At the center of the learning and skills ecosystem, he brings a
unique perspective on how roles, leadership expectations, and capabilities
are evolving across industries.`,
  },
  {
    name: "Sudipto Mitra",
    image: sudipto,
    bio: `Sudipto Mitra is a senior transformation and growth leader with over 20
years of experience helping enterprises navigate large-scale change across
technology, operations, and talent. As Chief Revenue Officer at Simplilearn,
he works with executive teams to address workforce capability gaps as AI
reshapes roles and operating models.`,
  },
];

export default function FeaturedSpeaker() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1F4DFF] to-[#1437B8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">

        {/* Section Title */}
        <h2 className="text-yellow-400 font-semibold text-xl sm:text-2xl mb-12">
          Featured Speakers
        </h2>

        {/* Speakers */}
        <div className="space-y-14">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="
                flex flex-col
                lg:flex-row
                gap-6 lg:gap-10
                items-start
              "
            >
              {/* Image */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={180}
                  height={180}
                  className="rounded-xl object-cover"
                />
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <h3 className="text-cyan-300 font-semibold text-lg sm:text-xl mb-2">
                  {speaker.name}
                </h3>

                <p className="text-white text-sm sm:text-base leading-relaxed max-w-3xl">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="mt-16 bg-[#2A7FFF] rounded-xl p-6 sm:p-8">
          <h4 className="text-cyan-300 font-semibold text-base sm:text-lg mb-2">
            Additional Expert Perspectives
          </h4>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
