"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Check, Gamepad2, Users, Zap } from "lucide-react";

import Background from "@/assets/background.webp";
import YoutubeSvg from "@/assets/svg/youtube.svg";
import DiscordSvg from "@/assets/svg/discord.svg";
import TiktokSvg from "@/assets/svg/tiktok.svg";

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

  const socialLinks = [
    {
      href: "https://discord.com/invite/3fjUuFQn6Y",
      label: "Discord",
      icon: DiscordSvg,
    },
    {
      href: "https://www.youtube.com/channel/UCJW1E4BOVur5jeHEu1uLTqQ",
      label: "YouTube",
      icon: YoutubeSvg,
    },
    {
      href: "http://www.google.com/url?q=http%3A%2F%2Ftiktok.com%2F%40osmium.craft&sa=D&sntz=1&usg=AOvVaw1N035i5HzjkIcXp_764YoU",
      label: "TikTok",
      icon: TiktokSvg,
    },
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
        <div className="relative z-10 flex py-6 items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
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
              <div
                className={`relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 ${copiedIP ? "" : "hover:bg-white/10"} transition-all duration-300 cursor-pointer select-text`}
                onClick={() => copyToClipboard(ip, setCopiedIP)}
                aria-label="Copier l'adresse IP du serveur"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    copyToClipboard(ip, setCopiedIP);
                  }
                }}
              >
                <label className="block text-xs uppercase font-medium text-purple-300 mb-3 select-none">
                  Adresse IP du serveur
                </label>
                <code className="bg-gray-900/50 border border-purple-400/20 text-white font-mono text-sm md:text-base px-4 py-3 rounded-lg text-center block">
                  {ip}
                </code>

                {/* Overlay Copié */}
                <AnimatePresence>
                  {copiedIP && (
                    <m.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-lg rounded-xl flex items-center justify-center pointer-events-none select-none"
                    >
                      <div className="flex items-center gap-2 text-white">
                        <Check size={20} className="text-white" />
                        <span className="font-semibold text-lg">
                          IP Copiée !
                        </span>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Port */}
              <div
                className={`relative bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 ${copiedPort ? "" : "hover:bg-white/10"} transition-all duration-300 cursor-pointer select-text`}
                onClick={() => copyToClipboard(port, setCopiedPort)}
                aria-label="Copier le port du serveur"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    copyToClipboard(port, setCopiedPort);
                  }
                }}
              >
                <label className="block text-xs uppercase font-medium text-blue-300 mb-3 select-none">
                  Port du serveur
                </label>
                <code className="bg-gray-900/50 border border-blue-400/20 text-white font-mono text-sm md:text-base px-4 py-3 rounded-lg text-center block">
                  {port}
                </code>

                {/* Overlay Copié */}
                <AnimatePresence>
                  {copiedPort && (
                    <m.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute inset-0 bg-black/60 backdrop-blur-lg rounded-xl flex items-center justify-center pointer-events-none select-none"
                    >
                      <div className="flex items-center gap-2 text-white">
                        <Check size={20} className="text-white" />
                        <span className="font-semibold text-lg">
                          Port Copié !
                        </span>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
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

            {/* Social Links - Simple Circles */}
            <div className="mt-8 flex justify-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}