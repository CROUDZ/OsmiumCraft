"use client";

import Image from "next/image";
import OsmiumLogo from "@/assets/osmium_logo.webp";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={OsmiumLogo}
            alt="Osmium Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Titre d'erreur */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          Oups !
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-6">
          Une erreur inattendue s'est produite
        </h2>

        {/* Description */}
        <p className="text-textSecondary mb-8 leading-relaxed">
          Ne vous inquiétez pas, notre équipe de modérateurs va s'occuper de ça
          ! En attendant, vous pouvez essayer de recharger la page.
        </p>

        {/* Message d'erreur technique (en développement) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-600 font-mono">{error.message}</p>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Réessayer
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-white hover:bg-gray-50 text-primary border-2 border-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Retour à l'accueil
          </button>
        </div>

        {/* Message d'encouragement */}
        <p className="text-sm text-textSecondary mt-8">
          Besoin d'aide ?{" "}
          <a className=" hover:underline text-textPrimary"
          href="https://discord.com/invite/3fjUuFQn6Y" target="_blank" rel="noopener noreferrer">
            Rejoignez notre Discord !
          </a>
        </p>
      </div>
    </div>
  );
}
