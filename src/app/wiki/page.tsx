"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Sparkles,
  Box,
  Check,
  Copy,
  Home,
  DollarSign,
  MapPin,
  Leaf,
  Gem,
  Wrench,
  Shield,
  Hammer,
  Lightbulb,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";


const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

import xp_bush_craft from "@/assets/xp_bush/craft.webp";
import xp_bush_plantation from "@/assets/xp_bush/plantation.webp";
import xp_bush_mature from "@/assets/xp_bush/mature.webp";
import xp_bush_harvest from "@/assets/xp_bush/harvest.webp";

import jasper_mine from "@/assets/jasper/mine.webp";
import jasper_tools from "@/assets/jasper/tools.webp";
import jasper_armor from "@/assets/jasper/armor.webp";

interface Command {
  command: string;
  description: string;
}

interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
}

export default function WikiPage() {
  const [activeCategory, setActiveCategory] = useState("commands");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(text);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
    }
  };

  const CommandBlock = ({ command, description }: Command) => (
    <m.div
      className="bg-surface border border-border rounded-lg p-4 hover:shadow-md transition-all duration-200"
      whileHover={{ scale: 1.01 }} // réduit l'effet
      whileTap={{ scale: 0.99 }}   // réduit l'effet
      transition={{ duration: 0.1 }} // animation plus rapide
    >
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => copyToClipboard(command)}
          className="flex items-center gap-2 bg-gray-900 text-white px-3 py-2 rounded font-mono text-sm hover:bg-gray-800 transition-colors"
        >
          <code>{command}</code>
          {copiedCommand === command ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <p className="text-textSecondary text-sm">{description}</p>
    </m.div>
  );

  const commands = [
    {
      command: "!help",
      description: "Affiche toutes les commandes disponibles du serveur Osmium",
    },
    {
      command: "!sethome <nom>",
      description: "Crée un point de téléportation personnel (max 5)",
    },
    { command: "!home <nom>", description: "Se téléporte à un de vos homes" },
    { command: "!delhome <nom>", description: "Supprime un de vos homes" },
    { command: "!listhome", description: "Affiche la liste de vos homes" },
    { command: "!money", description: "Affiche votre argent" },
    {
      command: "!money <pseudo>",
      description: "Affiche l'argent d'un autre joueur",
    },
    {
      command: "!pay <pseudo> <montant>",
      description: "Transfère de l'argent à un joueur",
    },
    {
      command: "!topmoney",
      description: "Classement des joueurs les plus riches",
    },
    { command: "!auctionhouse", description: "Ouvre l'hôtel des ventes" },
    {
      command: "!withdraw <montant>",
      description: "Convertit l'argent en billets physiques",
    },
    {
      command: "!tpa <pseudo>",
      description: "Demande à se téléporter vers un joueur",
    },
    {
      command: "!tpahere <pseudo>",
      description: "Demande à un joueur de venir vers vous",
    },
    {
      command: "!tpaccept",
      description: "Accepte une demande de téléportation",
    },
    {
      command: "!back",
      description: "Retourne au lieu de mort (coût: 1000 monnaies)",
    },
    { command: "!warp spawn", description: "Se téléporte au spawn" },
    {
      command: "!listwarp",
      description: "Liste tous les points de téléportation publics",
    },
  ];

  const categories: Category[] = [
    {
      id: "commands",
      title: "Commandes Serveur",
      icon: Terminal,
      content: (
        <div className="space-y-6">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              Utilisation des commandes
            </h3>
            <div className="space-y-4 text-textSecondary">
              <p>
                Dans le serveur, vous avez accès au chat textuel où vous devez
                saisir les commandes. Pour faciliter leur utilisation, nous
                mettons à disposition une <strong>Boussole magique</strong>.
              </p>
              <p>
                Rendez-vous chez le <strong>Géographe au Spawn</strong> pour
                obtenir votre boussole gratuite. Utilisez-la simplement en
                faisant un clic droit pour accéder à l'interface des commandes.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              Commandes principales
            </h3>
            <div className="grid gap-4">
              <CommandBlock
                command="!help"
                description="La commande essentielle - affiche toutes les commandes disponibles"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              <Home className="inline w-5 h-5 mr-2" /> Gestion des homes
            </h3>
            <p className="text-textSecondary mb-4">
              Créez jusqu'à 5 points de téléportation personnels :
            </p>
            <div className="grid gap-4">
              {commands.slice(1, 5).map((cmd, index) => (
                <CommandBlock
                  key={index}
                  command={cmd.command}
                  description={cmd.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              <DollarSign className="inline w-5 h-5 mr-2" /> Système monétaire
            </h3>
            <div className="grid gap-4">
              {commands.slice(5, 11).map((cmd, index) => (
                <CommandBlock
                  key={index}
                  command={cmd.command}
                  description={cmd.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-textPrimary mb-4">
              <MapPin className="inline w-5 h-5 mr-2" /> Téléportation
            </h3>
            <div className="grid gap-4">
              {commands.slice(11).map((cmd, index) => (
                <CommandBlock
                  key={index}
                  command={cmd.command}
                  description={cmd.description}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "xpbush",
      title: "XP Bush",
      icon: Sparkles,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">
              <Leaf className="inline w-6 h-6 mr-2" /> XP Bush - Guide complet
            </h3>
            <p className="text-textSecondary">
              Les XP Bush sont des plantes magiques qui génèrent de
              l'expérience. Suivez ce guide pour les cultiver efficacement.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <m.div
              className="bg-surface border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h4 className="text-xl font-semibold text-textPrimary">
                  Le craft
                </h4>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <div className="w-full h-50 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={xp_bush_craft}
                    alt="Recette de craft"
                    className="w-full h-50 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-3 text-textSecondary">
                <p>
                  <strong>Ingrédients requis :</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>5 baies sucrées (biomes sapin)</li>
                  <li>4 fioles d'expérience (non craftables)</li>
                </ul>
                <p className="text-sm bg-blue-50 border border-blue-200 rounded p-3">
                  <Lightbulb className="inline w-4 h-4 mr-2" /> <strong>Astuce :</strong> Ces ingrédients sont parfois
                  disponibles au market via les admins ou autres joueurs.
                </p>
              </div>
            </m.div>

            <m.div
              className="bg-surface border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h4 className="text-xl font-semibold text-textPrimary">
                  Plantation
                </h4>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="w-full h-50 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={xp_bush_plantation}
                    alt="Plantation"
                    className="w-full h-50 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-3 text-textSecondary">
                <p>
                  Plantez vos graines sur des <strong>blocs d'herbe</strong> et
                  :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Attendez la croissance naturelle</li>
                  <li>Ou accélérez avec de la poudre d'os</li>
                </ul>
              </div>
            </m.div>

            <m.div
              className="bg-surface border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h4 className="text-xl font-semibold text-textPrimary">
                  Croissance terminée
                </h4>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="w-full h-50 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={xp_bush_mature}
                    alt="XP Bush mature"
                    className="w-full h-50 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-3 text-textSecondary">
                <p>Quand l'XP Bush est mature :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>Clic droit</strong> sur PC
                  </li>
                  <li>
                    <strong>L2</strong> sur PlayStation
                  </li>
                  <li>
                    <strong>LT</strong> sur Xbox
                  </li>
                </ul>
              </div>
            </m.div>

            <m.div
              className="bg-surface border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h4 className="text-xl font-semibold text-textPrimary">
                  Récolte
                </h4>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <div className="w-full h-50 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={xp_bush_harvest}
                    alt="Récolte d'XP"
                    className="w-full h-50 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-3 text-textSecondary">
                <p>
                  Après interaction, récupérez les fioles d'expérience pour :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Augmenter vos niveaux</li>
                  <li>Vendre au shop</li>
                  <li>Agrandir votre ferme</li>
                </ul>
              </div>
            </m.div>
          </div>
        </div>
      ),
    },
    {
      id: "jasper",
      title: "Minerai Jasper",
      icon: Box,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-textPrimary mb-4">
              <Gem className="inline w-6 h-6 mr-2" /> Minerai de Jasper
            </h3>
            <p className="text-textSecondary">
              Le minerai le plus précieux du serveur, surpassant même la
              nétherite en qualité et en rareté.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            <m.div
              className="bg-surface border border-border rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  ⛏
                </div>
                <h4 className="text-xl font-semibold text-textPrimary">
                  Le Minerai de Jasper
                </h4>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                  <Image
                    src={jasper_mine}
                    alt="Minerai de Jasper in-game"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold text-textPrimary">
                    <MapPin className="inline w-4 h-4 mr-2" /> Localisation
                  </h5>
                  <ul className="space-y-2 text-textSecondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Uniquement dans la deepslate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Couches 0 à -40
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Extrêmement rare
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="font-semibold text-textPrimary">
                    <Hammer className="inline w-4 h-4 mr-2" /> Extraction
                  </h5>
                  <ul className="space-y-2 text-textSecondary">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Pioche en fer minimum
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Temps de minage élevé
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Rendement limité
                    </li>
                  </ul>
                </div>
              </div>
            </m.div>

            <div className="grid md:grid-cols-2 gap-8">
              <m.div
                className="bg-surface border border-border rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-textPrimary">
                    Les Outils
                  </h4>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <div className="w-full h-50 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={jasper_tools}
                      alt="Outils en Jasper"
                      className="w-full h-50 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-textSecondary">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="font-semibold text-green-800 mb-2">
                      <Sparkles className="inline w-4 h-4 mr-2" /> Avantages
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Surpassent la nétherite</li>
                      <li>• Durabilité exceptionnelle</li>
                      <li>• Vitesse de minage supérieure</li>
                      <li>• Craft identique aux outils classiques</li>
                    </ul>
                  </div>
                </div>
              </m.div>

              <m.div
                className="bg-surface border border-border rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-textPrimary">
                    L'Armure
                  </h4>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="w-full h-50 overflow-hidden rounded-lg mb-4">
                    <Image
                      src={jasper_armor}
                      alt="Armure en Jasper"
                      className="w-full h-50 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-textSecondary">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="font-semibold text-green-800 mb-2">
                      <Shield className="inline w-4 h-4 mr-2" /> Protection
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Protection supérieure à la nétherite</li>
                      <li>• Résistance aux dégâts maximale</li>
                      <li>• Craft traditionnel</li>
                      <li>• Luxe inestimable sur le serveur</li>
                    </ul>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className=" text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <m.div
            initial={{ opacity: 0, y: -10 }} // réduit le déplacement
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }} // animation plus rapide
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Wiki OsmiumCraft</h1>
            <p className="text-xl text-textPrimary max-w-2xl mx-auto">
              Découvrez tout ce qu'il faut savoir sur le serveur : commandes,
              features uniques, et astuces de pro !
            </p>
          </m.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Navigation */}
        <m.div
          initial={{ opacity: 0, y: 10 }} // réduit le déplacement
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.15 }} // animation plus rapide
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-surface text-textSecondary hover:bg-border hover:text-textPrimary"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.title}
                </button>
              );
            })}
          </div>
        </m.div>

        {/* Content */}
        <m.div
          key={activeCategory}
          initial={{ opacity: 0, x: 10 }} // réduit le déplacement
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.18 }} // animation plus rapide
          className="bg-white rounded-xl shadow-lg border border-border overflow-hidden"
        >
          <div className="p-6 sm:p-8">
            {categories.find((cat) => cat.id === activeCategory)?.content}
          </div>
        </m.div>

        {/* Copy Notification */}
        <AnimatePresence>
          {copiedCommand && (
            <m.div
              initial={{ opacity: 0, y: 20 }} // réduit le déplacement
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.15 }} // animation plus rapide
              className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              Commande copiée !
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}