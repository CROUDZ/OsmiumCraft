import React from "react";
import Image from "next/image";

import DiscordSvg from "@/assets/svg/discord.svg";
import YoutubeSvg from "@/assets/svg/youtube.svg";
import TiktokSvg from "@/assets/svg/tiktok.svg";
import Osmium from "@/assets/osmium.webp";

const socialLinks = [
  {
    href: "https://discord.com/invite/3fjUuFQn6Y",
    label: "Discord",
    icon: DiscordSvg,
    color: "hover:text-[#5865F2] focus:text-[#5865F2]",
  },
  {
    href: "https://www.youtube.com/channel/UCJW1E4BOVur5jeHEu1uLTqQ",
    label: "YouTube",
    icon: YoutubeSvg,
    color: "hover:text-[#FF0000] focus:text-[#FF0000]",
  },
  {
    href: "https://tiktok.com/@osmium.craft",
    label: "TikTok",
    icon: TiktokSvg,
    color: "hover:text-[#000000] focus:text-[#000000]",
  },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full border-t border-gray-200 bg-gray-50 py-8 px-4 text-center"
      aria-label="Pied de page OsmiumCraft"
    >
      <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <Image
          src={Osmium}
          alt="Logo OsmiumCraft"
          width={100}
          height={100}
          className="shadow-md object-cover mb-2"
          loading="lazy"
        />
        <nav
          aria-label="Réseaux sociaux"
          className="flex gap-6 justify-center items-center"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`inline-flex items-center text-gray-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 ${link.color}`}
              tabIndex={0}
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={20}
                height={20}
                className="object-contain"
              />
            </a>
          ))}
        </nav>
        <p className="text-gray-500 text-sm mt-2 select-none">
          &copy; {new Date().getFullYear()} OsmiumCraft. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
