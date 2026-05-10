import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/floravision/Navbar";
import { Hero } from "@/components/floravision/Hero";
import { TrendyPlants } from "@/components/floravision/TrendyPlants";
import { TopSelling } from "@/components/floravision/TopSelling";
import { Reviews } from "@/components/floravision/Reviews";
import { BestO2 } from "@/components/floravision/BestO2";
import { Footer } from "@/components/floravision/Footer";
import homeBack from "@/assets/home_back.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "FloraVision — Earth's Exhale | Premium Indoor Plants" },
      { name: "description", content: "Discover FloraVision's curated collection of premium indoor plants. From lush greens to vibrant blooms — bring nature home." },
      { property: "og:title", content: "FloraVision — Earth's Exhale" },
      { property: "og:description", content: "Premium indoor plants delivered to your door." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07170d]">
      <img
        src={homeBack}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-1/2 top-[-15rem] z-0 h-[143rem] w-[100rem] max-w-none -translate-x-1/2 object-cover "
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[112rem] " />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TrendyPlants />
        <TopSelling />
        <Reviews />
        <BestO2 />
        <Footer />
      </div>
    </main>
  );
}
