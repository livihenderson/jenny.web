import type { Metadata } from "next";
import GlitterEffect from "../components/GlitterEffect";
import BubbleEffect from "../components/BubbleEffect";
import { CameraIcon, ShellIcon, StarfishIcon, SparkleIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Fotogalerie | Jenny Rinn - Mořská Panna & Influencer",
  description: "Prohlédněte si magické fotky Jenny Rinn – profesionální mořské panny a influencerky.",
};

const galleryItems = [
  { color: "FFEEF2", text: "FF69B4", label: "Mermaid+Life" },
  { color: "D4ECFB", text: "4A90D9", label: "Underwater" },
  { color: "F0E6FF", text: "9B59B6", label: "Purple+Magic" },
  { color: "B8E4F9", text: "4A90D9", label: "Ocean+Dreams" },
  { color: "FFE4EC", text: "FF69B4", label: "Pink+Vibes" },
  { color: "E8D5F5", text: "8E44AD", label: "Lavender+Sea" },
  { color: "FFF0F3", text: "FF69B4", label: "Shell+Queen" },
  { color: "D4ECFB", text: "2980B9", label: "Deep+Blue" },
  { color: "FCE4EC", text: "E91E63", label: "Coral+Reef" },
  { color: "E0F2FE", text: "0288D1", label: "Crystal+Clear" },
  { color: "FFE4EC", text: "FF69B4", label: "Mermaid+Tail" },
  { color: "F3E5F5", text: "7B1FA2", label: "Fantasy" },
  { color: "E8F5E9", text: "2E7D32", label: "Lagoon" },
  { color: "FFEEF2", text: "FF69B4", label: "Sparkle" },
  { color: "E3F2FD", text: "1565C0", label: "Wave+Rider" },
  { color: "FFF3E0", text: "E65100", label: "Sunset+Swim" },
  { color: "FCE4EC", text: "C2185B", label: "Rose+Pearl" },
  { color: "E0F7FA", text: "00838F", label: "Tropical" },
  { color: "F1F8E9", text: "558B2F", label: "Sea+Garden" },
  { color: "FFEEF2", text: "FF69B4", label: "Bubble+Bath" },
  { color: "E8EAF6", text: "283593", label: "Starlight" },
  { color: "FFE4EC", text: "FF69B4", label: "Pearl+Glow" },
  { color: "D4ECFB", text: "4A90D9", label: "Tidal+Wave" },
  { color: "F0E6FF", text: "9B59B6", label: "Fairy+Tale" },
  { color: "FFF9C4", text: "F9A825", label: "Golden+Hour" },
  { color: "B8E4F9", text: "4A90D9", label: "Aquamarine" },
  { color: "FFE4EC", text: "FF69B4", label: "Blush" },
  { color: "DCEDC8", text: "33691E", label: "Seaweed" },
  { color: "F8BBD0", text: "AD1457", label: "Flamingo" },
  { color: "D4ECFB", text: "4A90D9", label: "Ocean+Floor" },
  { color: "E1F5FE", text: "0277BD", label: "Sapphire" },
  { color: "FFEEF2", text: "FF69B4", label: "Dreamy" },
  { color: "F0E6FF", text: "9B59B6", label: "Mystic" },
  { color: "FFE0B2", text: "E65100", label: "Coral+Sand" },
  { color: "B8E4F9", text: "4A90D9", label: "Sea+Breeze" },
];

export default function Fotogalerie() {
  return (
    <>
      {/* Hero Banner - Light */}
      <section className="hero-bg pt-32 pb-20 relative min-h-[40vh] flex items-center">
        <GlitterEffect count={25} />
        <BubbleEffect count={8} />

        {/* Floating decorations */}
        <div className="absolute top-28 left-8 text-shell-pink/15 float-animation"><ShellIcon size={40} /></div>
        <div className="absolute top-32 right-12 text-ocean-blue/15 float-animation" style={{ animationDelay: "1s" }}><StarfishIcon size={35} /></div>

        <div className="relative z-20 text-center w-full px-4">
          <div className="icon-circle mx-auto mb-4">
            <CameraIcon size={28} />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl glitter-text mb-4">
            Fotogalerie
          </h1>
          <p className="text-plum/50 text-lg max-w-xl mx-auto">
            Nahlédněte do mého kouzelného podmořského světa plného třpytu, vln a magie
          </p>
          <div className="pearl-divider mt-6">
            <div className="line" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="line" />
          </div>
        </div>

        {/* Light blue waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
          <svg className="wave-layer wave-layer-3" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path d="M0,80 C320,55 640,100 960,80 C1280,60 1440,95 1760,80 C2080,70 2400,100 2880,80 L2880,120 L0,120 Z" fill="#FFF0F3" />
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-blush py-16 relative overflow-hidden">
        <GlitterEffect count={10} />

        {/* Floating decorations */}
        <div className="absolute top-20 left-6 text-shell-pink/8 float-animation"><ShellIcon size={45} /></div>
        <div className="absolute top-1/3 right-6 text-ocean-blue/6 float-animation" style={{ animationDelay: "1s" }}><StarfishIcon size={40} /></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryItems.map((item, i) => {
              const isTall = i % 5 === 0;
              const isShort = i % 7 === 0;
              const height = isTall ? "h-80" : isShort ? "h-48" : "h-64";

              return (
                <div key={i} className={`gallery-item ${height} break-inside-avoid`}>
                  <img
                    src={`https://placehold.co/600x800/${item.color}/${item.text}?text=${item.label}`}
                    alt={item.label.replace(/\+/g, " ")}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="pearl-divider">
              <div className="line" />
              <div className="pearl" />
              <div className="pearl" />
              <div className="pearl" />
              <div className="pearl" />
              <div className="pearl" />
              <div className="line" />
            </div>
            <p className="text-plum/40 mt-4 italic">
              Chcete profesionální fotky s mořskou pannou? Kontaktujte mě!
            </p>
            <a href="/kontakt" className="pearl-btn mt-6 inline-flex items-center gap-2">
              <CameraIcon size={16} className="text-white" />
              Objednat focení
            </a>
          </div>
        </div>
      </section>

      {/* Footer wave */}
      <div className="bg-blush overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full" style={{ height: "60px" }}>
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,80 L0,80 Z" fill="#FFF0F3" />
        </svg>
      </div>
    </>
  );
}
