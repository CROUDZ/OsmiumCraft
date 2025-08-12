import Image from "next/image";
import OsmiumLogo from "@/assets/osmium_logo.webp";

export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
      <div className="text-center">
        {/* Logo animé */}
        <div className="mb-8 relative">
          <div className="animate-pulse">
            <Image
              src={OsmiumLogo}
              alt="Osmium Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>

          {/* Cercle de chargement autour du logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-primary-light border-t-primary rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Titre */}
        <h1 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
          OsmiumCraft
        </h1>

        {/* Message de chargement */}
        <p className="text-textSecondary mb-8">
          Préparation de votre aventure...
        </p>

        {/* Barre de progression animée */}
        <div className="w-64 mx-auto bg-gray-200 rounded-full h-2 mb-6">
          <div className="bg-gradient-to-r from-primary-light to-primary h-2 rounded-full animate-pulse"></div>
        </div>

        {/* Points de chargement animés */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce-delay-1"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce-delay-2"></div>
        </div>

        {/* Message d'encouragement */}
        <p className="text-sm text-textSecondary mt-8">
          Chargement des blocs et des textures...
        </p>
      </div>
    </div>
  );
}
