import FeaturesSection from "@/components/FeaturesSection";
import Hero from "@/components/Hero";
import PopularSection from "@/components/PopularSection";
import PosterSection from "@/components/PosterSection";
import SubscribeSection from "@/components/SubscribeSection";

export default async function Home() {
    return (
    <div>
      <Hero />
      <PopularSection />
      <FeaturesSection />
      <PosterSection />
      <SubscribeSection />
    </div>
  );
}
