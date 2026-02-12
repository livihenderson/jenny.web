import Link from "next/link";
import GlitterEffect from "./components/GlitterEffect";
import BubbleEffect from "./components/BubbleEffect";
import {
  ShellIcon,
  StarfishIcon,
  PearlIcon,
  WaveIcon,
  SparkleIcon,
  MermaidTailIcon,
  CameraIcon,
  CakeIcon,
  BuildingIcon,
  HeartHandshakeIcon,
  SwimIcon,
  HeartIcon,
  PhoneIcon,
} from "./components/Icons";

export default function Home() {
  return (
    <>
      {/* ============================
          HERO SECTION - Light & Dreamy
          ============================ */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        <GlitterEffect count={40} />
        <BubbleEffect count={25} />

        {/* Floating decorative icons */}
        <div className="absolute top-28 left-8 sm:left-16 text-shell-pink/20 float-animation">
          <ShellIcon size={50} />
        </div>
        <div className="absolute top-40 right-8 sm:right-20 text-ocean-blue/20 float-animation" style={{ animationDelay: "1s" }}>
          <StarfishIcon size={45} />
        </div>
        <div className="absolute bottom-40 left-12 sm:left-32 text-lavender/25 float-animation" style={{ animationDelay: "2s" }}>
          <PearlIcon size={35} />
        </div>
        <div className="absolute top-1/3 right-8 sm:right-12 text-hot-pink/10 float-animation" style={{ animationDelay: "0.5s" }}>
          <SparkleIcon size={40} />
        </div>
        <div className="absolute bottom-48 right-16 sm:right-40 text-coral/15 float-animation" style={{ animationDelay: "1.5s" }}>
          <HeartIcon size={35} />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-24 pb-40">
          {/* Top decorative icons */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mb-8">
            <div className="text-shell-pink float-animation" style={{ animationDelay: "0s" }}><ShellIcon size={28} /></div>
            <div className="text-gold float-animation" style={{ animationDelay: "0.4s" }}><SparkleIcon size={22} /></div>
            <div className="text-ocean-blue float-animation" style={{ animationDelay: "0.8s" }}><StarfishIcon size={28} /></div>
            <div className="text-gold float-animation" style={{ animationDelay: "1.2s" }}><SparkleIcon size={22} /></div>
            <div className="text-shell-pink float-animation" style={{ animationDelay: "1.6s" }}><ShellIcon size={28} /></div>
          </div>

          {/* Main Title - Glittery Pink! */}
          <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl mb-6 glitter-text leading-tight">
            Jenny Rinn
          </h1>

          {/* Pearl Divider */}
          <div className="pearl-divider mb-6">
            <div className="line" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="pearl" />
            <div className="line" />
          </div>

          {/* Subtitle */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <MermaidTailIcon size={24} className="text-hot-pink" />
            <p className="text-xl sm:text-2xl font-bold text-hot-pink tracking-wide">
              Mořská Panna & Influencer
            </p>
            <MermaidTailIcon size={24} className="text-hot-pink" />
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-plum/50 mb-10 max-w-2xl mx-auto leading-relaxed font-light italic">
            &ldquo;Vydejte se do magického světa, kde se sny stávají skutečností...&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/#sluzby" className="pearl-btn text-lg px-10 py-4 flex items-center gap-2">
              <SparkleIcon size={18} className="text-white" />
              Objevte můj svět
            </Link>
            <Link href="/kontakt" className="pearl-btn-outline text-lg px-10 py-4">
              Kontaktujte mě
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="mt-16">
            <div className="animate-bounce text-hot-pink/30">
              <WaveIcon size={32} />
            </div>
          </div>
        </div>

        {/* Animated light blue waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-28 z-10">
          <svg className="wave-layer wave-layer-1" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path
              d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,120 L0,120 Z"
              fill="rgba(137,207,240,0.15)"
            />
          </svg>
          <svg className="wave-layer wave-layer-2" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path
              d="M0,70 C180,40 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1440,90 1620,70 C1800,50 1980,90 2160,70 C2340,50 2520,90 2700,70 L2880,70 L2880,120 L0,120 Z"
              fill="rgba(137,207,240,0.25)"
            />
          </svg>
          <svg className="wave-layer wave-layer-3" viewBox="0 0 2880 120" preserveAspectRatio="none" style={{ height: "100%" }}>
            <path
              d="M0,80 C320,55 640,100 960,80 C1280,60 1440,95 1760,80 C2080,70 2400,100 2880,80 L2880,120 L0,120 Z"
              fill="#FFF0F3"
            />
          </svg>
        </div>
      </section>

      {/* ============================
          ABOUT SECTION
          ============================ */}
      <section className="bg-blush py-24 relative overflow-hidden">
        <GlitterEffect count={15} />

        {/* Floating decorations */}
        <div className="absolute top-10 left-10 text-shell-pink/10 float-animation"><ShellIcon size={50} /></div>
        <div className="absolute bottom-20 right-10 text-ocean-blue/8 float-animation" style={{ animationDelay: "2s" }}><StarfishIcon size={55} /></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="icon-circle mx-auto mb-4">
              <MermaidTailIcon size={28} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl gradient-text section-title">
              O mně
            </h2>
            <div className="pearl-divider mt-6">
              <div className="line" />
              <div className="pearl" />
              <div className="pearl" />
              <div className="pearl" />
              <div className="line" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-shell-pink/10 via-ocean-blue/5 to-lavender/10 blur-2xl" />
                <div className="oyster-frame w-72 h-80 sm:w-80 sm:h-96 relative pearl-glow">
                  <img
                    src="https://placehold.co/400x500/FFEEF2/FF69B4?text=Jenny+Rinn"
                    alt="Jenny Rinn - Mořská Panna"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pearl-shimmer" />
                </div>
                {/* Floating pearls around frame */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-white to-shell-pink shadow-lg pearl-glow" />
                <div className="absolute -bottom-2 -left-4 w-5 h-5 rounded-full bg-gradient-to-br from-white to-ocean-blue shadow-lg pearl-glow" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 -right-6 w-4 h-4 rounded-full bg-gradient-to-br from-white to-lavender shadow-lg pearl-glow" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-plum/70">
                Ahoj! Jsem <span className="font-bold text-hot-pink">Jenny</span> – mořská panna, která propojuje svět lidí s tajemstvím oceánu.
                Odmalička jsem snila o tom, že budu plavat jako opravdová mořská panna, a dnes je to moje realita – a práce!
              </p>
              <p className="text-lg leading-relaxed text-plum/70">
                Každý den přináším kouzlo podmořského světa na povrch, ať už na speciálních akcích,
                při focení, nebo na sociálních sítích, kde sdílím svůj magický svět s tisíci fanoušky.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-shell-pink/15 shadow-sm">
                <p className="text-plum/60 italic text-center leading-relaxed">
                  &ldquo;Věřím, že v každém z nás je kousek magie. Moje mise je inspirovat,
                  překvapovat a vytvářet nezapomenutelné zážitky plné třpytu, vln a pohádkového kouzla.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <SparkleIcon size={14} className="text-hot-pink" />
                  <p className="text-hot-pink font-semibold">Jenny Rinn</p>
                  <SparkleIcon size={14} className="text-hot-pink" />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <StatBadge icon={<CameraIcon size={16} />} label="100K+ fanoušků" />
                <StatBadge icon={<SparkleIcon size={16} />} label="100+ akcí" />
                <StatBadge icon={<WaveIcon size={16} />} label="5+ let zkušeností" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="bg-blush overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full" style={{ height: "60px" }}>
          <path d="M0,30 C360,70 720,0 1080,30 C1260,50 1380,15 1440,30 L1440,80 L0,80 Z" fill="#EDF6FD" />
        </svg>
      </div>

      {/* ============================
          SERVICES SECTION
          ============================ */}
      <section id="sluzby" className="bg-sky py-24 relative overflow-hidden">
        <GlitterEffect count={12} />
        <BubbleEffect count={6} />

        <div className="absolute top-20 right-10 text-ocean-blue/8 float-animation"><WaveIcon size={60} /></div>
        <div className="absolute bottom-10 left-10 text-shell-pink/8 float-animation" style={{ animationDelay: "1.5s" }}><ShellIcon size={50} /></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="icon-circle mx-auto mb-4">
              <SparkleIcon size={28} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl gradient-text-blue section-title">
              Nabízené služby
            </h2>
            <p className="text-plum/50 mt-8 max-w-2xl mx-auto text-lg">
              Každá služba je jako perla – unikátní, třpytivá a vytvořená speciálně pro vás
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<MermaidTailIcon size={32} />}
              title="Mořská panna na akce"
              description="Přivedu pohádku na vaši akci! Ať už jde o narozeniny, festival nebo firemní event, jako živá mořská panna vytvořím nezapomenutelnou atmosféru plnou kouzla."
            />
            <ServiceCard
              icon={<CameraIcon size={32} />}
              title="Focení s mořskou pannou"
              description="Profesionální focení v mém mořském kostýmu – v bazénu, u moře nebo ve studiu. Vytvořte si magické snímky, které vám vyrazí dech."
            />
            <ServiceCard
              icon={<CakeIcon size={32} />}
              title="Dětské narozeniny"
              description="Splním sen každé malé princezny! Mořská panna přijde přímo na oslavu narozenin s hrami, příběhy a magií."
            />
            <ServiceCard
              icon={<BuildingIcon size={32} />}
              title="Firemní & speciální akce"
              description="Udělejte dojem na hosty s unikátním vystoupením mořské panny. Perfektní pro galavečery, otevírání obchodů a tematické večírky."
            />
            <ServiceCard
              icon={<HeartHandshakeIcon size={32} />}
              title="Influencer spolupráce"
              description="Spojme síly! Nabízím spolupráce pro značky, které chtějí oslovit široké publikum kreativním a magickým způsobem."
            />
            <ServiceCard
              icon={<SwimIcon size={32} />}
              title="Plavání s mořskou pannou"
              description="Zažijte, jaké to je plavat jako skutečná mořská panna! Organizuji zážitkové plavání pro děti i dospělé."
            />
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="bg-sky overflow-hidden leading-none" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full" style={{ height: "50px" }}>
          <path d="M0,30 C360,70 720,0 1080,30 C1260,50 1380,15 1440,30 L1440,80 L0,80 Z" fill="#F5EEFB" />
        </svg>
      </div>

      {/* ============================
          WHY JENNY
          ============================ */}
      <section className="bg-lavender py-24 relative overflow-hidden">
        <GlitterEffect count={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="icon-circle mx-auto mb-4">
              <HeartIcon size={28} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl gradient-text section-title">
              Proč Jenny?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyCard
              icon={<SparkleIcon size={28} />}
              title="Profesionální přístup"
              description="Letité zkušenosti jako profesionální mořská panna s propracovanými kostýmy a vystoupeními."
            />
            <WhyCard
              icon={<WaveIcon size={28} />}
              title="Skutečné plavání"
              description="Žádný trik – skutečné plavání pod vodou v profesionálním mořském kostýmu."
            />
            <WhyCard
              icon={<HeartIcon size={28} />}
              title="Stovky klientů"
              description="Stovky nezapomenutelných zážitků a spokojených klientů po celé republice."
            />
            <WhyCard
              icon={<PhoneIcon size={28} />}
              title="Aktivní influencer"
              description="Tisíce fanoušků na sociálních sítích – spolupráce s Jenny přinese vaší značce viditelnost."
            />
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="bg-lavender overflow-hidden leading-none" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full" style={{ height: "50px" }}>
          <path d="M0,25 C200,60 400,0 600,35 C800,65 1000,10 1200,35 C1320,50 1400,20 1440,25 L1440,80 L0,80 Z" fill="#FFF5F7" />
        </svg>
      </div>

      {/* ============================
          GALLERY PREVIEW
          ============================ */}
      <section className="bg-soft-pink py-24 relative overflow-hidden">
        <BubbleEffect count={8} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="icon-circle mx-auto mb-4">
              <CameraIcon size={28} />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl gradient-text section-title">
              Magické okamžiky
            </h2>
            <p className="text-plum/50 mt-8 max-w-2xl mx-auto text-lg">
              Nahlédněte do mého kouzelného světa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="gallery-item aspect-square">
              <img src="https://placehold.co/600x600/FFEEF2/FF69B4?text=Mermaid+Life" alt="Mořská panna" />
            </div>
            <div className="gallery-item aspect-[3/4] row-span-2">
              <img src="https://placehold.co/450x600/D4ECFB/4A90D9?text=Underwater+Magic" alt="Pod vodou" />
            </div>
            <div className="gallery-item aspect-square">
              <img src="https://placehold.co/600x600/F0E6FF/9B59B6?text=Sparkle+%E2%9C%A8" alt="Kouzelný okamžik" />
            </div>
            <div className="gallery-item aspect-square">
              <img src="https://placehold.co/600x600/B8E4F9/4A90D9?text=Ocean+Dreams" alt="Na pláži" />
            </div>
            <div className="gallery-item aspect-square">
              <img src="https://placehold.co/600x600/FFE4EC/FF69B4?text=Pink+Dreams" alt="Party" />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/fotogalerie" className="pearl-btn text-lg px-10 py-4 inline-flex items-center gap-2">
              <CameraIcon size={18} className="text-white" />
              Zobrazit celou galerii
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Transition */}
      <div className="bg-soft-pink overflow-hidden leading-none" style={{ transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full" style={{ height: "50px" }}>
          <path d="M0,30 C240,60 480,10 720,35 C960,60 1200,10 1440,30 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      {/* ============================
          CTA SECTION - Pink Gradient
          ============================ */}
      <section className="bg-barbie-gradient py-24 relative overflow-hidden">
        <GlitterEffect count={30} />
        <BubbleEffect count={10} />

        {/* Floating decorations */}
        <div className="absolute top-10 left-10 text-white/10 float-animation"><ShellIcon size={50} /></div>
        <div className="absolute top-10 right-10 text-white/10 float-animation" style={{ animationDelay: "1s" }}><StarfishIcon size={45} /></div>
        <div className="absolute bottom-10 left-1/4 text-white/8 float-animation" style={{ animationDelay: "2s" }}><PearlIcon size={35} /></div>
        <div className="absolute bottom-10 right-1/4 text-white/8 float-animation" style={{ animationDelay: "0.5s" }}><SparkleIcon size={35} /></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <div className="text-white/80 mb-6" style={{ animation: "bob 3s ease-in-out infinite" }}>
            <MermaidTailIcon size={48} />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6" style={{ textShadow: "0 2px 20px rgba(255,255,255,0.2)" }}>
            Připraveni na kouzelný zážitek?
          </h2>
          <p className="text-white/75 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Napište mi a společně vytvoříme něco magického! Ať už plánujete akci, focení, nebo chcete spolupracovat – jsem tu pro vás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-hot-pink font-bold rounded-full px-12 py-4 text-lg
                hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <SparkleIcon size={18} />
              Kontaktujte mě
            </Link>
            <Link
              href="/fotogalerie"
              className="inline-block border-2 border-white/50 text-white font-bold rounded-full px-10 py-4 text-lg
                hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Prohlédnout galerii
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* Helper Components */

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="service-card group">
      <div className="icon-circle mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-hot-pink/10 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-plum mb-3">{title}</h3>
      <p className="text-plum/55 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function WhyCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center group">
      <div className="icon-circle-lg mx-auto mb-5">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-plum mb-2">{title}</h3>
      <p className="text-plum/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-shell-pink/15 shadow-sm">
      <span className="text-hot-pink">{icon}</span>
      <span className="text-sm font-semibold text-plum/60">{label}</span>
    </div>
  );
}
