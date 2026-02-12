"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShellIcon, SparkleIcon } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass" : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <ShellIcon size={28} className="text-hot-pink group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display text-2xl glitter-text tracking-wide">
              Jenny Rinn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/">Domů</NavLink>
            <NavLink href="/#sluzby">Služby</NavLink>
            <NavLink href="/fotogalerie">Fotogalerie</NavLink>
            <Link href="/kontakt" className="pearl-btn !inline-flex items-center gap-1.5 ml-4 text-sm !py-2 !px-6">
              <SparkleIcon size={14} className="text-white" />
              Kontaktovat
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-hot-pink rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-hot-pink rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-hot-pink rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/95 backdrop-blur-lg px-4 py-6 space-y-4 border-t border-shell-pink/10">
          <MobileLink href="/" onClick={() => setIsOpen(false)}>Domů</MobileLink>
          <MobileLink href="/#sluzby" onClick={() => setIsOpen(false)}>Služby</MobileLink>
          <MobileLink href="/fotogalerie" onClick={() => setIsOpen(false)}>Fotogalerie</MobileLink>
          <div className="flex justify-center">
            <Link
              href="/kontakt"
              className="pearl-btn inline-block text-center text-sm py-3 px-10"
              onClick={() => setIsOpen(false)}
            >
              Kontaktovat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-4 py-2 text-plum/80 font-semibold text-sm tracking-wide hover:text-hot-pink transition-all duration-300 group"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-hot-pink to-ocean-blue rounded-full transition-all duration-300 group-hover:w-3/4" />
    </Link>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-center text-hot-pink font-semibold text-lg py-2 hover:text-barbie-pink transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
