"use client";

import Image from "next/image";
import Link from "next/link";
import OsmiumLogo from "@/assets/osmium_logo.webp";
import { Home, BookOpen, ArrowLeft, Lightbulb } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <Image
            src={OsmiumLogo}
            alt="Osmium Logo"
            width={80}
            height={80}
            className="mx-auto sm:w-[100px] sm:h-[100px]"
          />
        </div>

        {/* Code d'erreur 404 */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-primary-light mb-2">
            404
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary-light to-primary mx-auto mb-3 sm:mb-4"></div>
        </div>

        {/* Titre d'erreur */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-dark mb-3 sm:mb-4">
          Chunk non trouvé !
        </h2>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-textPrimary mb-4 sm:mb-6">
          Cette page n'existe pas dans notre monde
        </h3>

        {/* Description avec thème Minecraft */}
        <p className="text-sm sm:text-base text-textSecondary mb-6 sm:mb-8 leading-relaxed">
          Il semblerait que cette page se soit perdue dans le Nether ! Peut-être
          qu'elle a été détruite par un Creeper, ou qu'elle n'a jamais été
          craftée. Retournons en terrain connu !
        </p>

        {/* Bloc décoratif style Minecraft */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="grid grid-cols-3 gap-1 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-gray-400 to-gray-600 border border-gray-500"
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%),
                    linear-gradient(-45deg, transparent 25%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 50%, transparent 50%, transparent 75%, rgba(0,0,0,0.1) 75%)
                  `,
                  backgroundSize: "3px 3px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="space-y-3 sm:space-y-4">
          <Link
            href="/"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            Retour au spawn (Accueil)
          </Link>

          <Link
            href="/wiki"
            className="w-full bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            Consulter le Wiki
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-textPrimary font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Page précédente
          </button>
        </div>

        {/* Message d'encouragement avec emoji */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-primary-light bg-opacity-20 rounded-lg border border-primary-light">
          <p className="text-xs sm:text-sm text-textSecondary flex items-center gap-2">
            <Lightbulb className="w-3 h-3 sm:w-4 sm:h-4" />
            <strong>Astuce :</strong> Utilisez la navigation ou rejoignez notre
            Discord pour ne plus jamais vous perdre !
          </p>
        </div>

        {/* Easter egg pour les joueurs */}
        <p className="text-[10px] sm:text-xs text-gray-400 mt-4 sm:mt-6 font-mono">
          /tp @player ~ ~-404~ ~
        </p>
      </div>
    </div>
  );
}
