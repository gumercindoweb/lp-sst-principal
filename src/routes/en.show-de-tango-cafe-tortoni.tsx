import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-show.jpg";
import tortoniImg from "@/assets/tortoni-interior.jpg";
import bandoneonImg from "@/assets/show-singer.jpg";
import coupleImg from "@/assets/tango-couple.jpg";
import logoImg from "@/assets/logo.webp";

const WHATSAPP_URL = "https://wa.me/5491150108040?text=%5BLP-EN-SST%5D%20Hello!%20I%20want%20to%20book%20the%20tango%20show%20at%20Caf%C3%A9%20Tortoni.";
const TICKETS_URL = "https://tickets.sensacionesdetango.com/";
const ROUTE_PATH = "/en/show-de-tango-cafe-tortoni";
const CANONICAL_URL = "https://sensacionesdetango.com/en/show-de-tango-cafe-tortoni";

const FAQS = [
  {
    q: "Is there a tango show at Café Tortoni?",
    a: "Yes. Sensaciones de Tango presents a live tango theatrical experience at the historic Café Tortoni in Buenos Aires — dancers, bandoneón and singer just meters from your table.",
  },
  {
    q: "How do I book the tango show at Café Tortoni?",
    a: "Via WhatsApp or the form on this page. We serve international visitors in English and confirm your table within minutes.",
  },
  {
    q: "How much does a tango show in Buenos Aires cost?",
    a: "Prices vary by session and table location. Check availability and current prices via WhatsApp — we reply the same day.",
  },
  {
    q: "Is Café Tortoni near the Obelisco?",
    a: "Yes. Café Tortoni is at Avenida de Mayo 829, in the historic heart of Buenos Aires, a short walk from the Obelisco, Plaza de Mayo and Avenida Corrientes.",
  },
  {
    q: "Is the show suitable for international visitors?",
    a: "Absolutely. It's one of the most sought-after experiences by first-time visitors to Buenos Aires: history, Argentine culture and authentic tango all in one evening.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes. Sessions have limited seats and often sell out in peak season. We recommend booking before your trip to secure your table.",
  },
  {
    q: "Does the show include dinner?",
    a: "The show does not include dinner. You can order from the café before the performance. Payment is made in cash on-site.",
  },
  {
    q: "Are tickets refundable?",
    a: "No. Tickets purchased through this platform are non-refundable and cannot be modified after purchase. Please confirm your availability for the selected date and time before completing your purchase.",
  },
];

export const Route = createFileRoute("/en/show-de-tango-cafe-tortoni")({
  head: () => ({
    meta: [
      { title: "Tango Show at Café Tortoni Buenos Aires — Sensaciones de Tango" },
      {
        name: "description",
        content:
          "Experience live tango at the historic Café Tortoni in Buenos Aires. See schedules, book your show and live an authentic Buenos Aires night with Sensaciones de Tango.",
      },
      { name: "language", content: "en" },
      { property: "og:title", content: "Tango Show at Café Tortoni Buenos Aires — Sensaciones de Tango" },
      {
        property: "og:description",
        content:
          "Sensaciones de Tango: tango theatrical experience at the historic Café Tortoni. Book in English and live tango where it was born.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: CANONICAL_URL },
      { rel: "alternate", hrefLang: "pt-BR", href: "https://sensacionesdetango.com/pt/show-de-tango-cafe-tortoni" },
      { rel: "alternate", hrefLang: "en", href: "https://sensacionesdetango.com/en/show-de-tango-cafe-tortoni" },
      { rel: "alternate", hrefLang: "es", href: "https://sensacionesdetango.com/es/show-de-tango-cafe-tortoni" },
      { rel: "alternate", hrefLang: "x-default", href: "https://sensacionesdetango.com/en/show-de-tango-cafe-tortoni" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Tango Show at Café Tortoni — Sensaciones de Tango",
          description:
            "Live tango theatrical experience at the historic Café Tortoni in Buenos Aires.",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Café Tortoni",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. de Mayo 829",
              addressLocality: "Buenos Aires",
              addressCountry: "AR",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "Sensaciones de Tango",
          },
          performer: { "@type": "PerformingGroup", name: "Sensaciones de Tango" },
        }),
      },
    ],
  }),
  component: TangoLandingEN,
});

/* ---------- Components ---------- */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-noir/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <img src={logoImg} alt="Sensaciones de Tango" className="h-16 w-auto" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-9 text-[0.78rem] uppercase tracking-[0.22em] font-semibold text-secondary-w">
          <a href="#show" className="hover:text-ambar transition-colors">Show</a>
          <a href="#schedules" className="hover:text-ambar transition-colors">Schedules</a>
          <a href="#reviews" className="hover:text-ambar transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-ambar transition-colors">FAQ</a>
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
            <a href="/pt/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">PT</a>
            <span className="text-white/20">·</span>
            <span className="text-ambar px-1">EN</span>
            <span className="text-white/20">·</span>
            <a href="/es/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">ES</a>
          </div>
          <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary !py-2.5 !px-4 text-sm">
            Buy ticket
          </a>
        </div>

        {/* Mobile: switcher + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
            <a href="/pt/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">PT</a>
            <span className="text-white/20">·</span>
            <span className="text-ambar px-1">EN</span>
            <span className="text-white/20">·</span>
            <a href="/es/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">ES</a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-secondary-w hover:text-ambar transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-noir/95 backdrop-blur-md border-t border-white/5 px-5 py-6">
          <nav className="flex flex-col gap-5 text-[0.82rem] uppercase tracking-[0.22em] font-semibold text-secondary-w">
            <a href="#show" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Show</a>
            <a href="#schedules" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Schedules</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Reviews</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">FAQ</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Tango couple dancing at Café Tortoni"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1100}
      />
      <div className="absolute inset-0 bg-scrim-bottom" />
      <div className="absolute inset-0 bg-spotlight opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge badge-available">Available this week</span>
            <span className="eyebrow !text-text-tertiary">Buenos Aires · 1858</span>
          </div>

          <h1 className="display-caps text-[2.4rem] sm:text-[3.2rem] lg:text-[4.4rem] leading-[0.98] text-primary-w mb-3">
            Tango Show
            <br />
            <span className="text-ambar">at Café Tortoni</span>
            <br />
            <span className="font-script normal-case tracking-normal text-[0.55em] text-secondary-w">
              in Buenos Aires
            </span>
          </h1>

          <p className="font-display italic text-xl sm:text-2xl text-secondary-w max-w-2xl mt-6 leading-snug">
            An intimate tango night at Argentina's most historic café —
            dancers, bandoneón and live vocals, just meters from your table.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-9">
            <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
              Buy ticket
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-[0.78rem] uppercase tracking-[0.22em] font-semibold text-tertiary-w">
            <li>· Av. de Mayo 829</li>
            <li>· 1h show</li>
            <li>· Service in EN/ES</li>
            <li>· Limited seats</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function QuickAnswers() {
  const items = [
    { q: "Is there a tango show at Café Tortoni?", a: "Yes — Sensaciones de Tango performs at Café Tortoni." },
    { q: "Where is it?", a: "In the historic center of Buenos Aires, near the Obelisco." },
    { q: "Is booking required?", a: "Yes, seats are limited — we recommend booking ahead." },
    { q: "Good for international visitors?", a: "Ideal for a first evening in Buenos Aires." },
  ];
  return (
    <section className="relative py-16 lg:py-24 bg-noir border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Quick answers</p>
        <h2 className="display-caps text-2xl sm:text-3xl text-primary-w mb-10 max-w-2xl">
          What you need to know in 30 seconds
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div key={it.q} className="card-tango">
              <p className="font-display text-lg text-ambar mb-2 leading-tight">{it.q}</p>
              <p className="text-secondary-w text-[0.95rem]">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { value: "4.9", unit: "/5", label: "TripAdvisor" },
    { value: "#3", unit: "", label: "in Buenos Aires" },
    { value: "93.6%", unit: "", label: "Excellent" },
    { value: "2026", unit: "", label: "Travellers' Choice" },
  ];
  return (
    <section className="py-10 bg-ink border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-12">
              <div className="text-center">
                <p className="font-display text-4xl text-ambar leading-none">
                  {s.value}
                  {s.unit && <span className="text-2xl text-ambar-soft">{s.unit}</span>}
                </p>
                <p className="eyebrow mt-1.5 !text-tertiary-w">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTortoni() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-passion-glow opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-amber-rim opacity-20 blur-2xl" />
          <img
            src={tortoniImg}
            alt="Historic interior of Café Tortoni in Buenos Aires"
            className="relative rounded-md w-full h-auto shadow-elev-3"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
        <div>
          <p className="eyebrow mb-4">Café Tortoni · since 1858</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Why watch a tango show at Café Tortoni?
          </h2>
          <div className="space-y-5 text-secondary-w text-[1.02rem] leading-relaxed">
            <p>
              Café Tortoni is Argentina's oldest and most iconic café —
              a landmark on every Buenos Aires itinerary. Its marble
              columns, Art Nouveau stained glass and bronze fixtures have
              witnessed Borges, Gardel and Alfonsina Storni.
            </p>
            <p>
              Watching tango here is more than attending a performance: it's
              stepping into the history of the genre, in the very place where
              it established itself as the city's musical soul.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-secondary-w">
            {[
              "Historic café in the heart of Buenos Aires",
              "Authentic Argentine cultural experience",
              "Tango theatrical experience in an iconic venue",
              "Ideal for international visitors on their first trip",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ambar shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TheShow() {
  const elements = [
    { t: "Dance", d: "Live tango couples performing in traditional Argentine style." },
    { t: "Music", d: "Bandoneón, piano and violin interpreting the genre's classics." },
    { t: "Voice", d: "Buenos Aires singers performing Gardel, Piazzolla and contemporary tango." },
    { t: "Setting", d: "The historic Café Tortoni hall as an intimate stage." },
  ];
  return (
    <section id="show" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">The experience</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Sensaciones de Tango: tango theatrical experience at Café Tortoni
          </h2>
          <p className="text-secondary-w text-lg max-w-2xl">
            An evening designed for visitors who want more than a photo on the
            facade: live music, dance on wooden floors, voice and bandoneón
            centimeters from the audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden">
            <img
              src={bandoneonImg}
              alt="Bandoneón player performing live at the tango show"
              className="w-full h-full object-cover min-h-[420px]"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-noir/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="badge badge-available">Live</span>
              <p className="font-display text-2xl mt-3 text-primary-w">
                Voice, dance and bandoneón
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {elements.map((e) => (
              <div key={e.t} className="card-tango">
                <p className="display-caps text-ambar text-sm mb-2">{e.t}</p>
                <p className="text-secondary-w">{e.d}</p>
              </div>
            ))}
            <div className="card-tango sm:col-span-2 border-bordo">
              <p className="display-caps text-sm text-ambar mb-2">Shared tables</p>
              <p className="text-secondary-w">
                Assigned by order of payment. For a private table, you pay
                for all 4 seats. Everything confirmed in writing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedules" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Sessions</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-12 max-w-3xl">
          Schedules, duration and location
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard
            label="Sessions"
            value="Mon – Sat"
            sub="6pm and 8pm · Fri–Sat also at 7pm"
          />
          <InfoCard label="Duration" value="1 hour" sub="No intermission" />
          <InfoCard
            label="Address"
            value="Av. de Mayo 829"
            sub="Buenos Aires · Argentina"
          />
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          <div className="card-tango">
            <p className="eyebrow mb-4">How to get there</p>
            <ul className="space-y-3 text-secondary-w">
              <li>· 4 blocks from the <strong className="text-primary-w">Obelisco</strong></li>
              <li>· 3 blocks from <strong className="text-primary-w">Plaza de Mayo</strong></li>
              <li>· Subway Line A — <strong className="text-primary-w">Piedras</strong> station</li>
              <li>· Taxis and Uber to the door · safe area at night</li>
            </ul>
            <a
              href="https://maps.google.com/?q=Caf%C3%A9+Tortoni+Av.+de+Mayo+829+Buenos+Aires"
              target="_blank"
              rel="noopener"
              className="btn btn-tertiary mt-4"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="card-tango bg-raised">
            <p className="eyebrow mb-4">Reserve your evening</p>
            <p className="font-display text-2xl text-primary-w mb-3">
              Secure your table in advance
            </p>
            <p className="text-secondary-w mb-6">
              Service in English via WhatsApp. We confirm availability
              for your chosen date within minutes.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
                Buy ticket
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon className="w-5 h-5" /> Book now
              </a>
              <span className="badge badge-few">Few seats · Sat</span>
            </div>
          </div>
        </div>

        <div className="mt-5 card-tango">
          <p className="eyebrow mb-3">Two spaces at Café Tortoni</p>
          <p className="text-secondary-w leading-relaxed">
            The <strong className="text-primary-w">6 pm and 8 pm</strong> performances take place in the <strong className="text-primary-w">historic wine cellar in the basement</strong> — an intimate period space, accessed by stairs. The <strong className="text-primary-w">7 pm</strong> performance (Fridays and Saturdays) takes place in the <strong className="text-primary-w">main hall</strong> at street level — the only space <span className="text-ambar">♿ suitable for guests with reduced mobility</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="card-tango">
      <p className="eyebrow mb-4">{label}</p>
      <p className="font-display text-3xl text-primary-w mb-2">{value}</p>
      <p className="text-tertiary-w text-sm">{sub}</p>
    </div>
  );
}

function ForInternational() {
  const rows = [
    { q: "Can I book from abroad?", a: "Yes — via WhatsApp or the form on this page, before you even travel." },
    { q: "Is service available in English?", a: "Yes. Our team serves international visitors in English throughout the booking process." },
    { q: "Is it near tourist areas?", a: "Yes. Café Tortoni is on Avenida de Mayo, the historic axis linking Plaza de Mayo to the Congress building." },
    { q: "Worth booking before the trip?", a: "Yes. During peak season sessions sell out — we recommend booking at least 7 days in advance." },
    { q: "Good experience for a first visit?", a: "One of the best: Café Tortoni, live tango and Argentine culture all in one evening." },
  ];
  return (
    <section className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
        <div className="mb-4">
          <p className="eyebrow !text-ambar">For those traveling to Buenos Aires</p>
        </div>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-10">
          Information for those traveling to Buenos Aires
        </h2>
        <div className="divide-y divide-white/5 border-y border-white/5">
          {rows.map((r) => (
            <div key={r.q} className="py-6 grid md:grid-cols-[1fr_2fr] gap-4">
              <p className="font-display text-lg text-ambar">{r.q}</p>
              <p className="text-secondary-w">{r.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DayAndNight() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-passion-glow opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">The complete experience</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Café Tortoni by day, <span className="text-ambar">tango at night</span>
          </h2>
          <p className="text-secondary-w text-lg mb-8 max-w-xl">
            Many visitors discover Tortoni in the morning — the coffee, the
            architecture. At night, the same room transforms into a stage —
            and the experience is complete.
          </p>

          <div className="space-y-4">
            <Moment
              label="Day"
              title="Visit the historic café"
              text="Explore the hall, sit at the same tables where writers and tango musicians once sat. Coffee, churros and architecture."
            />
            <Moment
              label="Night"
              title="Live tango theatrical experience"
              text="The same space, now dimly lit, with bandoneón and dance just meters away. Book in advance."
              highlight
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-passion-glow opacity-60 blur-3xl" />
          <img
            src={coupleImg}
            alt="Tango couple performing at night at Café Tortoni"
            className="relative rounded-md w-full h-auto shadow-elev-3"
            loading="lazy"
            width={1200}
            height={1400}
          />
        </div>
      </div>
    </section>
  );
}

function Moment({ label, title, text, highlight }: { label: string; title: string; text: string; highlight?: boolean }) {
  return (
    <div className={`card-tango ${highlight ? "border-ambar !bg-raised" : ""}`}>
      <div className="flex items-baseline gap-3 mb-2">
        <span className={`eyebrow ${highlight ? "!text-ambar" : "!text-tertiary-w"}`}>{label}</span>
        <span className="font-display text-xl text-primary-w">{title}</span>
      </div>
      <p className="text-secondary-w text-[0.98rem]">{text}</p>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Mariana S.",
      from: "São Paulo, BR",
      text: "Unforgettable. Tortoni at night is something else — the show moved my whole family. We booked via WhatsApp in minutes.",
    },
    {
      name: "Diego R.",
      from: "Buenos Aires, AR",
      text: "Brought international friends and they were blown away. The quality of the show and the closeness to the dancers make all the difference.",
    },
    {
      name: "Camila P.",
      from: "Rio de Janeiro, BR",
      text: "The best night of our trip. Book ahead — when we arrived, it was full.",
    },
  ];
  return (
    <section id="reviews" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Those who lived it</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-12 max-w-3xl">
          What visitors say
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="card-tango flex flex-col">
              <div className="text-ambar text-2xl mb-3" aria-hidden>★★★★★</div>
              <blockquote className="font-display italic text-lg text-primary-w leading-snug flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-white/5">
                <p className="text-primary-w font-semibold">{r.name}</p>
                <p className="text-tertiary-w text-sm">{r.from}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Frequently asked questions</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-10">
          Everything people ask about the show
        </h2>
        <div className="border-t border-white/5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/5">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl text-primary-w group-hover:text-ambar transition-colors">
                    {f.q}
                  </span>
                  <span className={`text-ambar text-2xl leading-none mt-1 transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-secondary-w leading-relaxed pr-12">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/85 to-noir" />
      <div className="absolute inset-0 bg-passion-glow opacity-60" />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-10 text-center">
        <div className="ornate mb-6">
          <span className="font-script text-2xl">the night awaits</span>
        </div>
        <h2 className="display-caps text-3xl sm:text-5xl lg:text-6xl leading-[1] text-primary-w mb-6">
          Book your tango show at Café Tortoni
        </h2>
        <p className="font-display italic text-xl text-secondary-w mb-10">
          Secure your place for an unforgettable tango night in Buenos Aires
          with Sensaciones de Tango.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
            Buy ticket
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
            <WhatsAppIcon className="w-5 h-5" />
            Book via WhatsApp
          </a>
        </div>
        <p className="mt-6 text-tertiary-w text-sm uppercase tracking-[0.22em]">
          Service for international visitors
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 grid sm:grid-cols-3 gap-8">
        <div>
          <img
            src={logoImg}
            alt="Sensaciones de Tango"
            className="h-24 w-auto"
          />
          <p className="text-tertiary-w text-sm mt-3 max-w-xs">
            Tango theatrical experience at the historic Café Tortoni,
            Buenos Aires.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Venue</p>
          <p className="text-secondary-w">Café Tortoni</p>
          <p className="text-tertiary-w text-sm">Av. de Mayo 829 — Buenos Aires, Argentina</p>
        </div>
        <div>
          <p className="eyebrow mb-3">Reservations</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-wa hover:underline">
            WhatsApp · service in EN/ES
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 mt-10 pt-6 border-t border-white/5 text-tertiary-w text-xs flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} Sensaciones de Tango</span>
        <span>Buenos Aires · 2026</span>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.2-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
  );
}

/* ---------- Page ---------- */

function TangoLandingEN() {
  return (
    <div className="bg-noir text-primary-w">
      <Nav />
      <main>
        <Hero />
        <QuickAnswers />
        <SocialProof />
        <WhyTortoni />
        <TheShow />
        <Schedule />
        <ForInternational />
        <DayAndNight />
        <Reviews />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
