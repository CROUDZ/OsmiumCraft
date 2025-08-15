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
			className="w-full border-t border-gray-700/40 bg-white py-8 px-4 text-center text-gray-600 "
			aria-label="Pied de page OsmiumCraft"
		>
			<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 max-w-4xl mx-auto w-full px-4">
				<div className="flex flex-col items-center md:items-start">
					<Image
						src={Osmium}
						alt="Logo OsmiumCraft"
						width={100}
						height={100}
						className="shadow-md object-cover mb-2"
						loading="lazy"
					/>
					<p className="text-gray-600 text-sm mt-2 select-none md:mt-1">
						&copy; {new Date().getFullYear()} OsmiumCraft. Tous droits réservés.
					</p>
				</div>

        <div className="flex flex-col items-center text-center w-full md:w-auto">
					<span className="text-sm text-gray-600  font-medium">
						Site réalisé gratuitement et avec ❤️ par{" "}
						<a
							href="https://giovweb.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline text-yellow-400"
						>
							GiovWeb
						</a>
					</span>
				</div>

				<nav
					aria-label="Réseaux sociaux"
					className="flex gap-4 md:gap-6 justify-center items-center"
				>
					{socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.label}
							className={`inline-flex items-center text-gray-600  transform transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 ${link.color}`}
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
			</div>
		</footer>
	);
};

export default Footer;
