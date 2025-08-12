"use client";

import React from "react";
import { m } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

interface Tag {
  label: string;
  color: string; // ex: "bg-primary text-white" ou "bg-green-500 text-white"
}

interface Member {
  id: number;
  mcName: string;
  mcAvatar: string;
  discordName: string;
  discordId: string;
  tags: Tag[];
}

interface Category {
  title: string;
  members: Member[];
}

// Exemple de données
const categories: Category[] = [
  {
    title: "Administrateurs",
    members: [
      {
        id: 1,
        mcName: "Rajefaro",
        mcAvatar: "https://mc-heads.net/avatar/Mister_Fix/100",
        discordName: "rajefaro",
        discordId: "673542419655950336",
        tags: [
          { label: "Youtuber", color: "bg-red-500 text-white" },
          { label: "Développeur", color: "bg-blue-500 text-white" },
          { label: "Fondateur", color: "bg-gray-900 text-white" },
        ],
      },
    ],
  },
  {
    title: "Modérateurs",
    members: [
      {
        id: 1,
        mcName: "Darkmins_",
        mcAvatar: "https://mc-heads.net/avatar/CAEC64/100",
        discordName: "darkmins_95439",
        discordId: "1187013452439494767",
        tags: [
          { label: "Modérateur Chef", color: "bg-green-500 text-white" },
          { label: "Développeur", color: "bg-blue-500 text-white" },
          { label: "Builder", color: "bg-orange-500 text-white" },
        ],
      },
      {
        id: 2,
        mcName: "dark__gargamoule",
        mcAvatar: "https://mc-heads.net/avatar/EinfxchLisa/100",
        discordName: "dark_night_xd",
        discordId: "799663780824350751",
        tags: [{ label: "Admin Suprême", color: "bg-purple-500 text-white" }],
      },
      {
        id: 3,
        mcName: "@#(BouBou)#@",
        mcAvatar: "https://mc-heads.net/avatar/EinfxchLukas/100",
        discordName: "boleaucrane",
        discordId: "1098665433604816937",
        tags: [
          { label: "Modérateur Gradé", color: "bg-red-400 text-white" },
          { label: "Chef Builder", color: "bg-orange-600 text-white" },
          { label: "Développeur", color: "bg-blue-500 text-white" },
        ],
      },
      {
        id: 4,
        mcName: "Croudz_MC",
        mcAvatar: "https://mc-heads.net/avatar/Croudz_MC/100",
        discordName: "croudz_",
        discordId: "585889513935601666",
        tags: [{ label: "Développeur Web", color: "bg-pink-600 text-white" }],
      },
      {
        id: 5,
        mcName: "Lisandru le sexy 🥵🥵",
        mcAvatar: "https://mc-heads.net/avatar/RubbaBoy/100",
        discordName: "lisandru2a5",
        discordId: "1197279905705099377",
        tags: [],
      },
      {
        id: 6,
        mcName: "LebgNino101212",
        mcAvatar: "https://mc-heads.net/avatar/my_dream/100",
        discordName: "nino101212",
        discordId: "1063556447037833316",
        tags: [],
      },
      {
        id: 7,
        mcName: "Yay4_L3_M0ut0n",
        mcAvatar: "https://mc-heads.net/avatar/Tithox_/100",
        discordName: "msieur_yanis__70207",
        discordId: "1138213846478237746",
        tags: [],
      },
      {
        id: 8,
        mcName: "COCO COLE",
        mcAvatar: "https://mc-heads.net/avatar/SpiritOfMoon/100",
        discordName: "enzo03803",
        discordId: "1140717140941492344",
        tags: [],
      },
      {
        id: 9,
        mcName: "LiptonDestroyer",
        mcAvatar: "https://mc-heads.net/avatar/DasMaexle/100",
        discordName: "liptondestroyer",
        discordId: "1342912344669290549",
        tags: [],
      },
    ],
  },
];

import { useState } from "react";

const Moderators: React.FC = () => {
  const [search, setSearch] = useState("");

  // Filtrer les membres selon la recherche (pseudo MC ou Discord)
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      members: category.members.filter((member) => {
        const query = search.toLowerCase();
        return (
          member.mcName.toLowerCase().includes(query) ||
          member.discordName.toLowerCase().includes(query)
        );
      }),
    }))
    .filter((cat) => cat.members.length > 0 || search === "");

  return (
    <section className="py-20 bg-surface" id="moderators">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre principal */}
        <m.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">
            Équipe de Modération
          </h2>
          <p className="text-textSecondary mt-2">
            Découvrez les personnes qui assurent la bonne gestion de notre
            serveur.
          </p>
        </m.div>

        {/* Barre de recherche */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Rechercher un pseudo Minecraft ou Discord..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-textPrimary shadow-sm"
          />
        </div>

        {/* Catégories */}
        {filteredCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            {/* Titre catégorie */}
            <m.h3
              className="text-2xl font-semibold text-textPrimary mb-6 border-b border-border pb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              {category.title}
            </m.h3>

            {/* Membres */}
            <div className="grid gap-8 md:grid-cols-3">
              {category.members.map((member, index) => (
                <m.div
                  key={member.id}
                  className="bg-background border border-border rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {/* Avatar Minecraft */}
                  <Image
                    src={member.mcAvatar}
                    alt={member.mcName}
                    className="w-20 h-20 rounded-lg border-2 border-primary mb-4"
                    width={80}
                    height={80}
                  />

                  {/* Nom Minecraft */}
                  <h4 className="text-lg font-bold text-textPrimary">
                    {member.mcName}
                  </h4>

                  {/* Pseudo Discord avec lien */}
                  <a
                    href={`https://discord.com/users/${member.discordId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary mt-1 hover:underline"
                  >
                    <MessageCircle size={16} />
                    {member.discordName}
                  </a>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {member.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Moderators;
