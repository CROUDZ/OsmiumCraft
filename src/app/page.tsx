"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), {
  ssr: false,
});

/*const ReviewsSection = dynamic(
  () => import("@/components/sections/ReviewsSection"),
  { ssr: false },
);*/

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
            Bienvenue sur Osmiumcraft !
          </h2>
          <p className="text-center text-lg text-gray-700 mt-8 mx-auto max-w-5xl px-4">
            Un serveur Minecraft moddé PvP faction créé par des passionnés pour les joueurs consoles. Lancé en juillet 2024, Osmiumcraft a su rassembler une communauté soudée où fun et fair-play règnent. Après une première saison riche en aventures, la saison 2 arrive avec des constructions époustouflantes et du gameplay encore plus intense.
            <br/>
            Ici, pas de course à l’argent, juste du plaisir entre joueurs. Prêt à rejoindre l’aventure ?
          </p>
        </div>
        {/*<ReviewsSection />*/}
        <ModoSection />
      </main>
      <Footer />
    </div>
  );
}
