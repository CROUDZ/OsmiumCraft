"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { m } from "framer-motion";
import { Copy, Check, Gamepad2, Users, Zap } from "lucide-react";

import Background from "@/assets/background.webp";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });

export default function Home() {
  const [copiedIP, setCopiedIP] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);
  const ip = "Osmiumcraft1.aternos.me";
  const port = "63875";

  const copyToClipboard = async (
    text: string,
    setCopied: (value: boolean) => void,
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy text: ", err);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  const features = [
    { icon: Users, label: "Factions", color: "text-blue-400", delay: 0.2 },
    { icon: Gamepad2, label: "24/7", color: "text-green-400", delay: 0.3 },
    { icon: Zap, label: "Événements", color: "text-yellow-400", delay: 0.4 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Background}
            alt="OsmiumCraft background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/95" />

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto text-center text-white">
            {/* Hero Section */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6">
                <span className="bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
                  OsmiumCraft
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Serveur PvP Faction Minecraft
                </span>
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed">
                Rejoins-nous pour des batailles épiques, construis ta faction et
                domine le monde ! Alliances, trahisons et conquêtes t'attendent.
              </p>
            </m.div>

            {/* Features Grid */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center gap-6 md:gap-8 mb-12 flex-wrap"
            >
              {features.map((feature) => (
                <m.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + feature.delay }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 md:p-6
                  hover:bg-white/10 transition-all duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center text-center"
                >
                  <feature.icon
                    size={28}
                    className={`mx-auto mb-3 ${feature.color}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`font-semibold text-sm md:text-base ${feature.color}`}
                  >
                    {feature.label}
                  </div>
                </m.div>
              ))}
            </m.div>

            {/* Server Connection Info */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
            >
              {/* IP Address */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <label className="block text-xs uppercase font-medium text-purple-300 mb-3">
                  Adresse IP du serveur
                </label>
                <code
                  className="bg-gray-900/50 border border-purple-400/20 text-white font-mono text-sm md:text-base px-4 py-3 rounded-lg flex items-center justify-center select-text"
                  style={{ userSelect: "text" }}
                >
                  <span className="flex-1 text-center select-text">{ip}</span>
                  <button
                    onClick={() => copyToClipboard(ip, setCopiedIP)}
                    className="ml-3 p-1 rounded-lg hover:bg-white/20 transition-colors duration-200 text-white flex items-center justify-center"
                    aria-label={copiedIP ? "IP copiée" : "Copier l'IP"}
                    type="button"
                    // empêcher la sélection du texte lors du clic sur le bouton
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {copiedIP ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </code>
              </div>

              {/* Port */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <label className="block text-xs uppercase font-medium text-blue-300 mb-3">
                  Port du serveur
                </label>
                <code
                  className="bg-gray-900/50 border border-blue-400/20 text-white font-mono text-sm md:text-base px-4 py-3 rounded-lg flex items-center justify-center select-text"
                  style={{ userSelect: "text" }}
                >
                  <span className="flex-1 text-center select-text">{port}</span>
                  <button
                    onClick={() => copyToClipboard(port, setCopiedPort)}
                    className="ml-3 p-1 rounded-lg hover:bg-white/20 transition-colors duration-200 text-white flex items-center justify-center"
                    aria-label={copiedPort ? "Port copié" : "Copier le port"}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {copiedPort ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </code>
              </div>
            </m.div>

            {/* Call to Action */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12"
            >
              <p className="text-sm text-gray-300">
                Copie l'IP et le port, puis connecte-toi depuis Minecraft !
              </p>
            </m.div>
          </div>
        </div>
      </main>
    </div>
  );
}
