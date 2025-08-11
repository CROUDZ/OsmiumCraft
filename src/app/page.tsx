"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { m } from "framer-motion";
import { Copy, Check } from "lucide-react";

import Background from "@/assets/background.webp";

const Header = dynamic(() => import("@/components/Header"));

export default function Home() {
  const [copiedIP, setCopiedIP] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);
  const ip = "Osmiumcraft1.aternos.me";
  const port = "63875";

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(ip);
      setCopiedIP(true);
      setTimeout(() => setCopiedIP(false), 1500);
    } catch {
      // ignore
    }
  };

  const copyPort = async () => {
    try {
      await navigator.clipboard.writeText(port);
      setCopiedPort(true);
      setTimeout(() => setCopiedPort(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div>
      <Header />
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={Background}
          alt="OsmiumCraft background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.75))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            textAlign: "center",
            padding: "32px 24px",
          }}
        >
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: 1000, width: "100%", margin: "0 auto" }}
          >
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                margin: 0,
                fontWeight: 900,
                letterSpacing: 1,
                fontSize: "clamp(32px, 7vw, 64px)",
                background: "linear-gradient(135deg, #fff, #a78bfa)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              OsmiumCraft
            </m.h1>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                margin: "16px 0 32px",
                fontSize: "clamp(16px, 3.5vw, 22px)",
                lineHeight: 1.6,
              }}
            >
              <p style={{ margin: "0 0 8px", fontWeight: 600, color: "#fbbf24" }}>
                Serveur PvP Faction Minecraft
              </p>
              <p style={{ margin: 0, opacity: 0.9 }}>
                Rejoins-nous pour des batailles épiques, construis ta faction
                et domine le monde ! Alliances, trahisons et conquêtes t'attendent.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 16,
                maxWidth: 700,
                margin: "0 auto",
              }}
            >
              {/* IP Address */}
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "16px",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>
                  Adresse IP
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <code
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#fff",
                      background: "none",
                      flex: 1,
                      textAlign: "left",
                    }}
                  >
                    {ip}
                  </code>
                  <button
                    onClick={copyIP}
                    style={{
                      background: copiedIP ? "#16a34a" : "rgba(255,255,255,0.2)",
                      border: "none",
                      borderRadius: 8,
                      padding: 8,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    {copiedIP ? (
                      <Check size={18} color="#fff" />
                    ) : (
                      <Copy size={18} color="#fff" />
                    )}
                  </button>
                </div>
              </div>

              {/* Port */}
              <div
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "16px",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: 14, opacity: 0.8, marginBottom: 8 }}>
                  Port
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <code
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#fff",
                      background: "none",
                      flex: 1,
                      textAlign: "left",
                    }}
                  >
                    {port}
                  </code>
                  <button
                    onClick={copyPort}
                    style={{
                      background: copiedPort ? "#16a34a" : "rgba(255,255,255,0.2)",
                      border: "none",
                      borderRadius: 8,
                      padding: 8,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    {copiedPort ? (
                      <Check size={18} color="#fff" />
                    ) : (
                      <Copy size={18} color="#fff" />
                    )}
                  </button>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </section>
    </div>
  );
}
