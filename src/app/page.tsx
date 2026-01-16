import ExploreSection from "./components/ExploreSection";
import FeaturedSpeaker from "./components/FeaturedSpeaker";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import InsightSection from "./components/InsightSection";
import EventAgenda from "./components/EventAgenda";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <InfoSection />
      <ExploreSection />
      <FeaturedSpeaker />
      <InsightSection />
      <EventAgenda />
      <Footer />
    </main>
  );
}
