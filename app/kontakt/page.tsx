"use client";

import { useState } from "react";
import GlitterEffect from "../components/GlitterEffect";
import BubbleEffect from "../components/BubbleEffect";
import ReCAPTCHA from "react-google-recaptcha";
import {
  SparkleIcon,
  ShellIcon,
  StarfishIcon,
  MermaidTailIcon,
  MailIcon,
  LocationIcon,
  GlobeIcon,
  PhoneIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
  YoutubeIcon,
  CameraIcon,
} from "../components/Icons";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!recaptchaToken) {
      alert("Prosím potvrďte, že nejste robot.");
      return;
    }
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company: "",
          recaptchaToken,
        }),
      });
  
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
  
      if (!res.ok) {
        alert(data.error || "Nepodařilo se odeslat zprávu.");
        return;
      }
  
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
  
      setRecaptchaToken(null);
    } catch {
      alert("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.");
    }
  };
    
    if (!recaptchaToken) {
      alert("Prosím potvrďte, že nejste robot.");
      return;
    }
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          company: "", // honeypot (optional)
          recaptchaToken,
        }),
  
        const data: any = await res.json().catch(() => ({}));
  
      if (!res.ok) {
        alert(data.error || "Nepodařilo se odeslat zprávu.");
        return;
      }
  
      setSubmitted(true);
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      alert("Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.");
    }
  };

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
            <MailIcon size={28} />
          </div>
          <h1 className="font-display text-5xl sm:text-6xl glitter-text mb-4">
            Kontaktujte mě
          </h1>
          <p className="text-plum/50 text-lg max-w-xl mx-auto">
            Napište mi a vytvoříme společně kouzelný zážitek!
          </p>
          <div className="pearl-divider mt-6">
            <div className="line" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="line" />
          </div>
        </div>

        {/* Waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
          <svg className="wave-layer wave-layer-3" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path d="M0,80 C320,55 640,100 960,80 C1280,60 1440,95 1760,80 C2080,70 2400,100 2880,80 L2880,120 L0,120 Z" fill="#FFF0F3" />
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-blush py-20 relative overflow-hidden">
        <GlitterEffect count={12} />
        <BubbleEffect count={5} />

        {/* Decorations */}
        <div className="absolute top-10 left-10 text-shell-pink/8 float-animation"><ShellIcon size={50} /></div>
        <div className="absolute bottom-20 right-10 text-ocean-blue/6 float-animation" style={{ animationDelay: "1.5s" }}><StarfishIcon size={50} /></div>
        <div className="absolute top-1/3 right-20 text-lavender/15 float-animation" style={{ animationDelay: "1s" }}><SparkleIcon size={35} /></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl gradient-text mb-4">
                  Pojďme spolupracovat!
                </h2>
                <p className="text-plum/60 leading-relaxed">
                  Máte nápad na akci, focení nebo spolupráci? Ráda se s vámi spojím!
                  Vyplňte formulář nebo mě kontaktujte přímo.
                </p>
              </div>

              <div className="space-y-4">
                <ContactInfoCard icon={<MailIcon size={20} />} title="Email" value="jennyrinn1@icloud.com" />
                <ContactInfoCard icon={<LocationIcon size={20} />} title="Lokace" value="Česká republika" />
                <ContactInfoCard icon={<PhoneIcon size={20} />} title="Telefon" value="+420 728 641 814" />
              </div>

              <div>
                <h3 className="font-bold text-plum/70 mb-4">Sledujte mě na sítích</h3>
                <div className="flex gap-3">
                  <SocialBtn icon={<InstagramIcon size={18} />} label="Instagram" href="https://www.instagram.com/jenny_rinn?igsh=bW11MmVhNW9qOWJj" />
                  <SocialBtn icon={<TikTokIcon size={18} />} label="TikTok" href="https://www.tiktok.com/@jenny_rinn?_r=1&_t=ZN-93rpe2xKr82" />
                  <SocialBtn icon={<FacebookIcon size={18} />} label="Facebook" href="https://www.facebook.com/share/1CruEFdxU3/?mibextid=wwXIfr" />
                  <SocialBtn icon={<YoutubeIcon size={18} />} label="YouTube" href="https://youtube.com/@jennyrinn?si=bIA5WokuF1MkEsz8" />
                </div>
              </div>

            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-shell-pink/15 shadow-lg pearl-glow">
                  <div className="text-hot-pink mb-6" style={{ animation: "bob 2s ease-in-out infinite" }}>
                    <MermaidTailIcon size={56} />
                  </div>
                  <h3 className="font-display text-3xl gradient-text mb-4">
                    Děkuji za zprávu!
                  </h3>
                  <p className="text-plum/60 leading-relaxed mb-6">
                    Vaše zpráva dorazila do mého podmořského království!
                    Ozvu se vám co nejdříve.
                  </p>
                  <div className="pearl-divider">
                    <div className="line" />
                    <div className="pearl" />
                    <div className="pearl" />
                    <div className="pearl" />
                    <div className="line" />
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="pearl-btn-outline mt-6"
                  >
                    Poslat další zprávu
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 border border-shell-pink/15 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <SparkleIcon size={18} className="text-hot-pink" />
                    <h3 className="font-display text-2xl gradient-text">Napište mi</h3>
                    <SparkleIcon size={18} className="text-hot-pink" />
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-plum/60 mb-2">Vaše jméno *</label>
                      <input
                        type="text"
                        required
                        className="contact-input"
                        placeholder="Jak se jmenujete?"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-plum/60 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="contact-input"
                        placeholder="vas@email.cz"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-plum/60 mb-2">Telefon</label>
                      <input
                        type="tel"
                        className="contact-input"
                        placeholder="+420 123 456 789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-plum/60 mb-2">Typ služby *</label>
                      <select
                        required
                        className="contact-input cursor-pointer"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="">Vyberte službu...</option>
                        <option value="akce">Mořská panna na akce</option>
                        <option value="foceni">Focení s mořskou pannou</option>
                        <option value="narozeniny">Dětské narozeniny</option>
                        <option value="firemni">Firemní & speciální akce</option>
                        <option value="spoluprace">Influencer spolupráce</option>
                        <option value="plavani">Plavání s mořskou pannou</option>
                        <option value="jine">Jiné</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-plum/60 mb-2">Vaše zpráva *</label>
                      <textarea
                        required
                        rows={5}
                        className="contact-input resize-none"
                        placeholder="Popište svoji představu..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="pearl-btn w-full text-center text-lg py-4 mt-2">
                      Odeslat zprávu
                    </button>
                  </div>

                  <p className="text-center text-plum/30 text-xs mt-6 flex items-center justify-center gap-1">
                    Odpovím vám co nejdříve – obvykle do 24 hodin
                    <SparkleIcon size={10} className="text-hot-pink" />
                  </p>
                </form>
              )}
            </div>
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

function ContactInfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300 border border-shell-pink/10 shadow-sm">
      <div className="icon-circle w-12 h-12 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-plum/40 uppercase tracking-wider">{title}</p>
        <p className="text-plum/70 font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SocialBtn({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full flex items-center justify-center
        bg-white border-2 border-shell-pink/15 text-hot-pink
        hover:bg-hot-pink hover:text-white hover:border-hot-pink
        transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-hot-pink/15"
    >
      {icon}
    </a>
  );
}
