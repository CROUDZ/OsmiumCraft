import React from "react";
import Image from "next/image";
import OsmiumLogo from "@/assets/osmium_logo.webp";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  message?: string;
  showLogo?: boolean;
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  message = "Chargement...",
  showLogo = true,
  className = "",
}: LoadingSpinnerProps) {
  // Tailles configurables
  const sizeConfig = {
    sm: {
      container: "h-24",
      logo: { width: 32, height: 32 },
      spinner: "w-10 h-10 border-2",
      text: "text-sm",
    },
    md: {
      container: "h-48",
      logo: { width: 48, height: 48 },
      spinner: "w-16 h-16 border-3",
      text: "text-base",
    },
    lg: {
      container: "h-64",
      logo: { width: 64, height: 64 },
      spinner: "w-20 h-20 border-4",
      text: "text-lg",
    },
  };

  const config = sizeConfig[size];

  return (
    <div
      className={`flex flex-col items-center justify-center ${config.container} ${className}`}
    >
      {showLogo ? (
        <div className="relative mb-4">
          {/* Logo */}
          <div className="animate-pulse">
            <Image
              src={OsmiumLogo}
              alt="Osmium Logo"
              width={config.logo.width}
              height={config.logo.height}
              className="mx-auto"
            />
          </div>

          {/* Spinner autour du logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`${config.spinner} border-primary-light border-t-primary rounded-full animate-spin`}
            ></div>
          </div>
        </div>
      ) : (
        /* Spinner simple sans logo */
        <div
          className={`${config.spinner} border-primary-light border-t-primary rounded-full animate-spin mb-4`}
        ></div>
      )}

      {/* Message de chargement */}
      {message && (
        <p className={`text-textSecondary ${config.text} text-center`}>
          {message}
        </p>
      )}

      {/* Points animés */}
      <div className="flex justify-center space-x-1 mt-2">
        <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
        <div className="w-1 h-1 bg-primary rounded-full animate-bounce-delay-1"></div>
        <div className="w-1 h-1 bg-primary rounded-full animate-bounce-delay-2"></div>
      </div>
    </div>
  );
}

// Composant spécifique pour les sections
export function SectionLoader({
  message = "Chargement de la section...",
}: {
  message?: string;
}) {
  return (
    <div className="w-full bg-surface rounded-lg shadow-sm border border-border">
      <LoadingSpinner
        size="md"
        message={message}
        showLogo={false}
        className="py-12"
      />
    </div>
  );
}

// Composant pour les cartes/éléments plus petits
export function CardLoader({
  message = "Chargement...",
}: {
  message?: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-border p-6">
      <LoadingSpinner
        size="sm"
        message={message}
        showLogo={false}
        className="py-4"
      />
    </div>
  );
}

// Composant pour la page entière (alternative à loading.tsx)
export function PageLoader({
  message = "Chargement de la page...",
}: {
  message?: string;
}) {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <LoadingSpinner size="lg" message={message} showLogo={true} />
    </div>
  );
}
