"use client";

import { useState, useEffect, useCallback } from "react";
import GlitterEffect from "../components/GlitterEffect";
import BubbleEffect from "../components/BubbleEffect";
import { CameraIcon, ShellIcon, StarfishIcon, SparkleIcon } from "../components/Icons";

const galleryItems = [
  { label: "Video", src: "/filmik.MOV", type: "video" as const },
  { label: "Mermaid Life", src: "/ze_shora_vlasy.png" },
  { label: "Underwater", src: "/tank_pod_vodou.png" },
  { label: "Purple Magic", src: "/party.png" },
  { label: "Ocean Dreams", src: "/cervena_ploutev_profile.png" },
  { label: "Pink Vibes", src: "/ploutev_ujezera_mobil.png" },
  { label: "Lavender Sea", src: "/fouakni_bublin.png" },
  { label: "Shell Queen", src: "/jenny_padestol.JPG" },
  { label: "Deep Blue", src: "/pro_underwater_knife.png" },
  { label: "Coral Reef", src: "/fialova_plotev_bok.png" },
  { label: "Crystal Clear", src: "/rybnik.png" },
  { label: "Mermaid Tail", src: "/cute_modra.png" },
  { label: "Fantasy", src: "/profi_pod_vodou.png" },
  { label: "Lagoon", src: "/side_profile_cervena.png" },
  { label: "Sparkle", src: "/babca_foti.png" },
  { label: "Wave Rider", src: "/cervena_ploutev_rybnik.png" },
  { label: "Sunset Swim", src: "/v_rybnice.png" },
  { label: "Rose Pearl", src: "/jenny_underwater.JPG" },
  { label: "Tropical", src: "/beutiful_ariel.png" },
  { label: "Na náměstí", src: "/na_namesti.png" },
  { label: "Sea Garden", src: "/cervena_ploutev_drzi se.png" },
  { label: "Bubble Bath", src: "/ariel_bok.png" },
];

export default function GalleryContent() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const goNext = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, close, goNext, goPrev]);

  return (
    <>
      {/* Hero Banner - Light */}
      <section className="hero-bg pt-32 pb-20 relative min-h-[40vh] flex items-center">
        <GlitterEffect count={25} />
        <BubbleEffect count={8} />

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

        <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
          <svg className="wave-layer wave-layer-3" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path d="M0,80 C320,55 640,100 960,80 C1280,60 1440,95 1760,80 C2080,70 2400,100 2880,80 L2880,120 L0,120 Z" fill="#FFF0F3" />
          </svg>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-blush py-16 relative overflow-hidden">
        <GlitterEffect count={10} />

        <div className="absolute top-20 left-6 text-shell-pink/8 float-animation"><ShellIcon size={45} /></div>
        <div className="absolute top-1/3 right-6 text-ocean-blue/6 float-animation" style={{ animationDelay: "1s" }}><StarfishIcon size={40} /></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="gallery-item h-64 cursor-pointer relative"
                onClick={() => setLightbox(i)}
              >
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-shell-pink/80 flex items-center justify-center shadow-lg">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
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
            <a href="/kontakt" className="pearl-btn !inline-flex items-center gap-1.5 mt-6 !py-2.5 !px-8">
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

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={close}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image / Video */}
          <div
            className="max-w-[90vw] max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[lightbox].type === "video" ? (
              <video
                key={lightbox}
                src={galleryItems[lightbox].src}
                controls
                autoPlay
                playsInline
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            ) : (
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].label}
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              />
            )}
            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white/80 text-sm px-4 py-1.5 rounded-full">
              {lightbox + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
