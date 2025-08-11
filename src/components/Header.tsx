"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Osmium_logo from "@/assets/osmium_logo.webp";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/wiki", label: "Wiki" },
  ];

  // Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Fermer le menu si on passe en viewport md et +
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-white/90 text-textPrimary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                aria-label="Retour à l'accueil"
                className="flex items-center gap-3"
              >
                <Image
                  src={Osmium_logo}
                  alt="OsmiumCraft Logo"
                  width={44}
                  height={44}
                  priority
                  className="rounded-lg transition-transform duration-300 motion-reduce:transition-none hover:scale-[1.03]"
                />
                <span className="text-xl font-bold hidden md:block">
                  OsmiumCraft
                </span>
              </Link>
            </div>

            {/* Navigation (Desktop) */}
            <nav className="hidden md:flex md:items-center md:gap-2">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "group relative inline-block rounded-md px-4 py-2 text-base font-medium transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                      isActive
                        ? "text-primary"
                        : "text-textPrimary hover:text-primary",
                      // soulignement animé
                      "after:pointer-events-none after:absolute after:left-0 after:right-0 after:-bottom-0.5",
                      "after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300",
                      isActive
                        ? "after:scale-x-100"
                        : "group-hover:after:scale-x-100",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Hamburger (Mobile) */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-textPrimary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition-colors"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Ouvrir/fermer le menu"
              aria-expanded={isMenuOpen}
              aria-controls="primary-nav-mobile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-300 motion-reduce:transition-none ${isMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>

        {/* Navigation (Mobile) */}
        <div
          id="primary-nav-mobile"
          className={[
            "md:hidden absolute left-0 right-0 top-full z-50 origin-top bg-surface shadow-lg",
            "transition-all duration-300 ease-out motion-reduce:transition-none",
            "overflow-hidden",
            isMenuOpen
              ? "opacity-100 scale-y-100"
              : "pointer-events-none opacity-0 scale-y-0",
          ].join(" ")}
        >
          <nav className="flex flex-col py-2">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "block px-6 py-3 text-lg font-medium transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                    isActive
                      ? "text-primary"
                      : "text-textPrimary hover:text-primary",
                  ].join(" ")}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Overlay (Mobile) */}
      {isMenuOpen && (
        <button
          aria-label="Fermer le menu"
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] md:hidden"
        />
      )}
    </>
  );
};

export default Header;
