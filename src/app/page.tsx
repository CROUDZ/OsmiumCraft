"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  ssr: false,
});
const ReviewsSection = dynamic(
  () => import("@/components/sections/ReviewsSection"),
  { ssr: false },
);
const ModoSection = dynamic(() => import("@/components/sections/ModoSection"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative min-h-screen w-full overflow-hidden">
        <HeroSection />
        <div className="flex justify-center flex-col items-center after:max-w-5xl mx-auto mt-8 px-4 py-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Notre serveur
          </h2>
          <p className="text-center text-lg text-gray-700 mt-8 mx-auto max-w-5xl px-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            culpa suscipit, totam unde molestias exercitationem laboriosam
            quidem. Doloremque sed minima officiis. Asperiores adipisci maxime
            ipsum aperiam eius cum sit illum. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Enim vel, possimus excepturi
            reiciendis provident laudantium id praesentium quibusdam. Similique
            corrupti ipsum cumque error libero dolore fugit tempora, fuga sint
            nesciunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ex, esse! Repudiandae beatae accusantium ducimus quidem ipsum
            assumenda eaque molestiae reiciendis! Temporibus dolorem est
            veritatis nisi deserunt ea, nemo excepturi. Nisi. Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Rerum consectetur
            repudiandae, tenetur aspernatur amet maxime ut voluptas debitis
            doloribus sint neque consequuntur cumque assumenda! Dolor cupiditate
            amet eos sequi delectus?
          </p>
        </div>
        <ReviewsSection />
        <ModoSection />
      </main>
      <Footer />
    </div>
  );
}
