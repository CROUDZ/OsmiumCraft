import type { Metadata } from "next";
import "@/styles/globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "OsmiumCraft - Serveur Minecraft Communautaire",
  description: "Rejoignez OsmiumCraft, un serveur Minecraft convivial, actif et sécurisé. Découvrez notre équipe de modération et profitez d'une expérience unique !",
  openGraph: {
    title: "OsmiumCraft - Serveur Minecraft Communautaire",
    description: "Serveur Minecraft convivial, actif et sécurisé. Découvrez notre équipe de modération et profitez d'une expérience unique !",
    url: "https://osmiumcraft.com",
    siteName: "OsmiumCraft",
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL("https://osmiumcraft.com"),
  robots: "index, follow",
  themeColor: "#1e293b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#1e293b" />
        {/* Favicon */}
        <link rel="icon" href="/osmium_logo.webp" />
        {/* Open Graph fallback for crawlers */}
        <meta property="og:title" content="OsmiumCraft - Serveur Minecraft Communautaire" />
        <meta property="og:description" content="Serveur Minecraft convivial, actif et sécurisé. Découvrez notre équipe de modération et profitez d'une expérience unique !" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OsmiumCraft" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:url" content="https://osmiumcraft.com" />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
