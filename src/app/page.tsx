"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const ReviewsSection = dynamic(() => import("@/components/sections/ReviewsSection"), { ssr: false });
const ModoSection = dynamic(() => import("@/components/sections/ModoSection"), { ssr: false });

export default function Home() {

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative min-h-screen w-full overflow-hidden">
        <HeroSection />
        <ReviewsSection />
        <ModoSection />
      </main>
    </div>
  );
}