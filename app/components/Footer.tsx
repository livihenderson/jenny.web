import Link from "next/link";
import {
  ShellIcon,
  StarfishIcon,
  WaveIcon,
  SparkleIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  YoutubeIcon,
  MailIcon,
  LocationIcon,
  GlobeIcon,
  PhoneIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="footer-bg relative overflow-hidden">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full" style={{ height: "60px" }}>
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,80 L0,80 Z" fill="#FFF0F3" />
        </svg>
      </div>

      {/* Floating decorations */}
      <div className="absolute top-16 left-8 opacity-10 text-hot-pink float-animation">
        <ShellIcon size={40} />
      </div>
      <div className="absolute top-12 right-12 opacity-10 text-ocean-blue float-animation" style={{ animationDelay: "1s" }}>
        <StarfishIcon size={35} />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-8 text-lavender float-animation" style={{ animationDelay: "2s" }}>
        <SparkleIcon size={28} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShellIcon size={28} className="text-hot-pink" />
              <span className="font-display text-3xl glitter-text">Jenny Rinn</span>
            </div>
            <p className="text-plum/50 text-sm leading-relaxed">
              Mořská panna & Influencer
              <br />
              Propojuji svět lidí s tajemstvím oceánu
            </p>
            <div className="flex gap-3 mt-6">
              <SocialButton icon={<InstagramIcon size={18} />} label="Instagram" href="https://www.instagram.com/jenny_rinn?igsh=bW11MmVhNW9qOWJj" />
              <SocialButton icon={<TikTokIcon size={18} />} label="TikTok" href="https://www.tiktok.com/@jenny_rinn?_r=1&_t=ZN-93rpe2xKr82" />
              <SocialButton icon={<FacebookIcon size={18} />} label="Facebook" href="https://www.facebook.com/share/1CruEFdxU3/?mibextid=wwXIfr" />
              <SocialButton icon={<YoutubeIcon size={18} />} label="YouTube" href="https://youtube.com/@jennyrinn?si=bIA5WokuF1MkEsz8" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-plum font-bold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
              <WaveIcon size={16} className="text-ocean-blue" />
              Navigace
            </h4>
            <ul className="space-y-3">
              <FooterLink href="/">Domů</FooterLink>
              <FooterLink href="/#sluzby">Služby</FooterLink>
              <FooterLink href="/fotogalerie">Fotogalerie</FooterLink>
              <FooterLink href="/kontakt">Kontaktovat</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-plum font-bold mb-4 text-sm uppercase tracking-widest flex items-center gap-2">
              <SparkleIcon size={16} className="text-hot-pink" />
              Kontakt
            </h4>
            <ul className="space-y-3 text-plum/60 text-sm">
              <li className="flex items-center gap-3">
                <MailIcon size={16} className="text-hot-pink" />
                <span>jennyrinn1@icloud.com</span>
              </li>
              <li className="flex items-center gap-3">
                <LocationIcon size={16} className="text-hot-pink" />
                <span>Česká republika</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={16} className="text-hot-pink" />
                <span>+420 728 641 814</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pearl divider */}
        <div className="pearl-divider my-10 opacity-50">
          <div className="line" />
          <div className="pearl" />
          <div className="pearl" />
          <div className="pearl" />
          <div className="pearl" />
          <div className="pearl" />
          <div className="line" />
        </div>

        {/* Copyright */}
        <div className="text-center text-plum/35 text-xs">
          <p>&copy; {new Date().getFullYear()} Jenny Rinn. Všechna práva vyhrazena.</p>
          <p className="mt-1 flex items-center justify-center gap-1">
            Vytvořeno s láskou a trochou mořské magie
            <SparkleIcon size={12} className="text-hot-pink" />
          </p>
          <p className="mt-1 italic">DESIGNED AND CREATED BY OLIVIA</p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center
        bg-white border-2 border-shell-pink/20 text-hot-pink
        hover:bg-hot-pink hover:text-white hover:border-hot-pink
        transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-hot-pink/20"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-plum/55 text-sm hover:text-hot-pink transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
}
