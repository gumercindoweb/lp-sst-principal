import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  Coffee,
  Users,
  CreditCard,
  Banknote,
  Instagram,
  Facebook,
  Youtube,
  Menu as MenuIcon,
  X,
  AlertCircle,
} from "lucide-react";

import logo from "@/assets/logo.webp";
import hero from "@/assets/hero-main.jpg";
import showMain from "@/assets/gla-fla.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import logoTortoni from "@/assets/logo-tortoni.png";

const TICKETS = "https://tickets.sensacionesdetango.com/";
const WHATSAPP =
  "https://wa.me/5491150108040?text=%5BLP-EN%5D%20Hello%21%20I%20want%20to%20book%20the%20tango%20show%20at%20Caf%C3%A9%20Tortoni";
const PT_URL = "https://lp-pt-tango-sensations-buenos-aires.vercel.app/";

const FAQS = [
  {
    q: "Is there a tango show at Café Tortoni?",
    a: "Yes. Sensaciones de Tango presents a live tango theatrical experience at the historic Café Tortoni in Buenos Aires — dancers, drums and voice just meters from your table.",
  },
  {
    q: "How do I book the tango show?",
    a: "Via WhatsApp or the online ticket system on this page. We serve international visitors in English and confirm your booking within minutes.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes. Sessions have limited seats and often sell out in peak season. We recommend booking before your trip to secure your table.",
  },
  {
    q: "Is the show suitable for international visitors?",
    a: "Absolutely. Service is available in English, Spanish and Portuguese. It's one of the most sought-after experiences by first-time visitors to Buenos Aires.",
  },
  {
    q: "Does the show include dinner?",
    a: "The ticket does not include drinks or food. You can order from the Tortoni menu before the show begins. Payment is made on-site.",
  },
  {
    q: "Where is Café Tortoni?",
    a: "Av. de Mayo 825, in the historic center of Buenos Aires — a short walk from the Obelisco, Plaza de Mayo and the Congress building.",
  },
];

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      {
        title:
          "Tango Show at Café Tortoni Buenos Aires — Sensaciones de Tango",
      },
      {
        name: "description",
        content:
          "Experience live tango at the historic Café Tortoni in Buenos Aires. Dancers, drums and voice inches from your table. Book your show now.",
      },
      { name: "language", content: "en" },
      {
        property: "og:title",
        content:
          "Tango Show at Café Tortoni Buenos Aires — Sensaciones de Tango",
      },
      {
        property: "og:description",
        content:
          "Experience live tango at the historic Café Tortoni in Buenos Aires. Dancers, drums and voice inches from your table.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "canonical", href: "https://sensacionesdetango.com/en" },
      { rel: "alternate", hreflang: "x-default", href: "https://sensacionesdetango.com/es" },
      { rel: "alternate", hreflang: "es", href: "https://sensacionesdetango.com/es" },
      { rel: "alternate", hreflang: "en", href: "https://sensacionesdetango.com/en" },
      { rel: "alternate", hreflang: "pt-BR", href: "https://sensacionesdetango.com/pt" },
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
          eventAttendanceMode:
            "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Café Tortoni",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. de Mayo 825",
              addressLocality: "Buenos Aires",
              addressCountry: "AR",
            },
          },
          organizer: {
            "@type": "Organization",
            name: "Sensaciones de Tango",
          },
          performer: {
            "@type": "PerformingGroup",
            name: "Sensaciones de Tango",
          },
        }),
      },
    ],
  }),
  component: LandingEN,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.881.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.881-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.521.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-noir/60 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-5 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Sensaciones de Tango" className="h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[0.28em] text-white/70">
          <a href="#show" className="hover:text-ambar transition-colors">Show</a>
          <a href="#schedule" className="hover:text-ambar transition-colors">Schedule</a>
          <a href="#reviews" className="hover:text-ambar transition-colors">Reviews</a>
          <a href="#info" className="hover:text-ambar transition-colors">Info</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em]">
            <a href="/es" className="text-white/40 hover:text-ambar transition-colors">ES</a>
            <span className="text-white/20">|</span>
            <span className="text-white font-semibold">EN</span>
            <span className="text-white/20">|</span>
            <a href="/pt" className="text-white/40 hover:text-ambar transition-colors">PT</a>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm">
            Book now
          </a>
          <button onClick={() => setMenuOpen(v => !v)} aria-label="Menu" className="md:hidden text-white/80">
            {menuOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 px-5 py-6 flex flex-col gap-5">
          <nav className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.28em] text-white/70">
            <a href="#show" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Show</a>
            <a href="#schedule" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Schedule</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Reviews</a>
            <a href="#info" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Info</a>
          </nav>
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em]">
            <a href="/es" className="text-white/40 hover:text-ambar transition-colors">ES</a>
            <span className="text-white/20">|</span>
            <span className="text-white font-semibold">EN</span>
            <span className="text-white/20">|</span>
            <a href="/pt" className="text-white/40 hover:text-ambar transition-colors">PT</a>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !px-5 !text-sm self-start">
            Book now
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Tango dancers performing at Café Tortoni"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "var(--scrim-top)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--scrim-bottom)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--grad-passion)" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        <p className="eyebrow mb-6">
          Café Tortoni · Buenos Aires · Since 1858
        </p>
        <h1 className="display text-4xl sm:text-6xl md:text-8xl text-white">
          Experience tango
          <br />
          <span className="text-pasion">where it was born</span>
        </h1>
        <p className="script text-5xl sm:text-6xl md:text-7xl mt-4">the story</p>
        <p className="mt-8 max-w-xl mx-auto text-white/82 text-lg leading-relaxed">
          Told with body and soul, in the most iconic corner of Buenos Aires.
          Dancers, drums and voice, right by your table.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href={TICKETS} target="_blank" rel="noreferrer" className="btn-primary">
              Buy your ticket now
              <ArrowRight size={16} />
            </a>
            <p className="text-white/50 text-xs tracking-wider">Just 3 minutes · Instant confirmation · No queues</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" />
              Book via WhatsApp
            </a>
            <p className="text-white/50 text-xs tracking-wider">Support in your language · We reply within the hour</p>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-2 text-white/58 text-xs uppercase tracking-[0.3em]">
          <Star size={14} className="text-oro fill-oro" />
          300+ five-star reviews on TripAdvisor
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      quote:
        "Unforgettable. Tortoni at night is something else — the show moved my whole family.",
      name: "Mariana S.",
      country: "São Paulo, BR",
    },
    {
      quote:
        "Brought international friends and they were blown away. The closeness to the dancers makes all the difference.",
      name: "Diego R.",
      country: "Buenos Aires, AR",
    },
    {
      quote:
        "The best night of our trip. Book ahead — when we arrived, it was already full.",
      name: "Camila P.",
      country: "Rio de Janeiro, BR",
    },
  ];
  return (
    <section id="reviews" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--grad-spotlight)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Why travelers recommend it</p>
          <h2 className="display text-3xl md:text-5xl">
            Over 300 visitors rated the show with
            <span className="script text-ambar text-5xl md:text-6xl">
              {" "}
              5 stars{" "}
            </span>
            for its authenticity
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-lg p-8 bg-surface border border-white/5 hover:border-pasion/40 transition-colors"
              style={{ boxShadow: "var(--shadow-elev-2)" }}
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-oro fill-oro" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-white/95 italic">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-white/58 uppercase tracking-[0.2em]">
                {r.name} · <span className="text-ambar">{r.country}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.tripadvisor.com.ar/Attraction_Review-g312741-d26865098-Reviews-Sensaciones_de_Tango-Buenos_Aires_Capital_Federal_District.html"
            target="_blank"
            rel="noreferrer"
            className="text-ambar uppercase text-xs tracking-[0.3em] border-b border-ambar/40 pb-1 hover:border-ambar transition-colors"
          >
            More reviews on TripAdvisor →
          </a>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const days = [
    {
      title: "Mon – Thu",
      times: ["6:00 PM", "8:00 PM"],
      tag: "Available",
    },
    {
      title: "Fri, Sat & Holidays",
      times: ["6:00 PM", "7:00 PM", "8:00 PM"],
      tag: "Last seats",
    },
    {
      title: "Sundays",
      times: ["No show"],
      tag: "Closed",
      muted: true,
    },
  ];
  return (
    <section id="schedule" className="section-pad bg-surface relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Online tickets · Direct purchase</p>
          <h2 className="display text-3xl md:text-5xl">
            Choose the day and time that fits your trip
          </h2>
          <p className="mt-6 text-white/82">
            Book your ticket simply, securely, with instant confirmation.
            <span className="italic text-white/58">
              {" "}
              Limited capacity per show — we recommend booking in advance.
            </span>
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {days.map((d) => (
            <div
              key={d.title}
              className={`rounded-lg p-8 border ${d.muted ? "bg-noir/40 border-white/5" : "bg-raised border-bordo/40"}`}
              style={{ boxShadow: d.muted ? "none" : "var(--shadow-elev-2)" }}
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em]">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    d.tag === "Available"
                      ? "bg-whatsapp"
                      : d.tag === "Last seats"
                        ? "bg-ambar"
                        : "bg-white/30"
                  }`}
                />
                <span className={d.muted ? "text-white/40" : "text-ambar"}>
                  {d.tag}
                </span>
              </div>
              <h3 className="mt-4 display text-2xl md:text-3xl">{d.title}</h3>
              <ul className="mt-6 space-y-2">
                {d.times.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 text-white/82"
                  >
                    <Clock size={15} className="text-ambar/70" />
                    <span className="text-lg">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto rounded-lg bg-noir/60 p-8 border border-white/5">
          <div className="flex gap-4">
            <Clock className="text-ambar shrink-0 mt-1" size={20} />
            <div>
              <p className="eyebrow !text-[10px] !tracking-[0.28em]">
                Doors open
              </p>
              <p className="mt-1 text-white/82">45 minutes before each show.</p>
              <p className="text-xs text-white/58 mt-2">
                6pm → 5:15pm · 7pm → 6:15pm · 8pm → 7:15pm
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="text-ambar shrink-0 mt-1" size={20} />
            <div>
              <p className="eyebrow !text-[10px] !tracking-[0.28em]">
                Limited capacity
              </p>
              <p className="mt-1 text-white/82">
                Intimate venue — 80 seats per show.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto rounded-lg bg-noir/40 border border-white/5 p-6">
          <p className="eyebrow !text-[10px] !tracking-[0.28em] mb-3">Two spaces at Café Tortoni</p>
          <p className="text-white/75 text-sm leading-relaxed">
            The 18:00 and 20:00 shows take place in the{" "}
            <span className="text-ambar">historic wine cellar</span> in the basement—accessible
            by stairs only. The 19:00 show (Fridays, Saturdays and holidays) is held in the{" "}
            <span className="text-ambar">main hall</span>, at street level, and is the only one
            suitable for guests with reduced mobility.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Choose date and book online
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Any questions? We're here
          </a>
        </div>
      </div>
    </section>
  );
}

function Show() {
  return (
    <section id="show" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-lg opacity-50 blur-2xl"
            style={{ background: "var(--grad-passion)" }}
          />
          <img
            src={showMain}
            alt="Tango dancers at Café Tortoni"
            className="relative rounded-lg w-full h-[520px] object-cover"
            style={{ boxShadow: "var(--shadow-elev-3)" }}
          />
        </div>

        <div>
          <p className="eyebrow mb-4">A preview of the show</p>
          <h2 className="display text-4xl md:text-6xl leading-[1.05]">
            Lights, dance
            <br />
            and emotion at the
            <br />
            <span className="text-pasion">heart of Tortoni</span>
          </h2>
          <p className="script text-4xl mt-2">one intimate hour</p>
          <p className="mt-6 text-white/82 leading-relaxed text-lg max-w-md">
            An intimate evening at Café Tortoni: dancers, drums and voice,
            inches from your table. This is not a mass-market show — this is
            tango where it was born.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Service in Portuguese, English and Spanish.",
              "60-minute show.",
              "Priority access, no queuing (with full payment).",
            ].map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ambar shrink-0" />
                <span className="text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={TICKETS}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Buy tickets
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Prefer we sort it out together?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoShow() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-10">
          <p className="eyebrow mb-4">The show in action</p>
          <h2 className="display text-3xl md:text-5xl">
            See what{" "}
            <span className="text-pasion">a night at Tortoni</span> looks like
          </h2>
        </div>
        <div
          className="relative aspect-video rounded-lg overflow-hidden"
          style={{ boxShadow: "var(--shadow-elev-3)" }}
        >
          <iframe
            src="https://www.youtube.com/embed/IdSkcKQpzwU"
            title="Sensaciones de Tango — Tango Show at Café Tortoni"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function Consumos() {
  const items = [
    {
      title: "Order before the show",
      body: "Orders are taken only before the show begins. Once the lights go down and the performance starts, no orders are taken so as not to interrupt the experience.",
    },
    {
      title: "No orders via WhatsApp",
      body: "Service is in-person only. We don't take orders via WhatsApp — arrive early if you'd like to enjoy something from the menu before the show begins.",
    },
    {
      title: "Full Tortoni menu",
      body: "You'll find exactly the same menu and service as in the main Tortoni hall — coffees, drinks, classic cocktails and sweet options.",
    },
    {
      title: "Ticket does not include drinks",
      body: "Your ticket covers the show only. If you'd like to order anything, you do so directly with the Tortoni team before the show begins.",
    },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Your experience, at your pace</p>
          <h2 className="display text-3xl md:text-5xl">
            Drinks & snacks{" "}
            <span className="text-pasion">during the show</span>
          </h2>
          <p className="mt-6 text-white/82">
            During the show we offer the same café service as in the main
            Tortoni hall.
            <span className="text-white">
              {" "}
              We just ask that you respect the timing
            </span>{" "}
            so the performance can be fully enjoyed.
          </p>
          <a
            href="https://www.cafetortoni.com.ar/index.php/cafe-hoy/gastronomia"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-ambar uppercase text-xs tracking-[0.3em] border-b border-ambar/40 pb-1 hover:border-ambar"
          >
            <Coffee size={14} /> View Tortoni menu
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-lg p-7 bg-raised border border-white/5 hover:border-ambar/30 transition-colors"
            >
              <h3 className="font-display text-2xl text-white">{it.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed text-[15px]">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--grad-spotlight)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow mb-4">
          A clear, direct guide in your language · ES · EN · PT
        </p>
        <h2 className="display text-3xl md:text-5xl">
          Everything you need to know
          <br />
          <span className="text-pasion">about the show</span>
        </h2>
        <p className="mt-6 text-white/82 text-lg max-w-2xl mx-auto">
          So you can enjoy the best tango experience in Buenos Aires with no
          confusion or surprises. An intimate theatrical performance.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1z62fjCg1dontMpRN2vXCR84fi6Vf8wee/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Download free guide
          </a>
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Buy tickets now
          </a>
        </div>
      </div>
    </section>
  );
}

function Info() {
  return (
    <section id="info" className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-8">
        <div
          className="rounded-lg p-10 bg-raised border border-bordo/30"
          style={{ boxShadow: "var(--shadow-elev-2)" }}
        >
          <p className="eyebrow mb-4">What's included in</p>
          <h3 className="display text-3xl md:text-4xl">Your ticket</h3>
          <ul className="mt-8 space-y-5">
            {[
              {
                icon: <Users size={18} />,
                t: "Service in Portuguese, English and Spanish.",
              },
              { icon: <Clock size={18} />, t: "60-minute show." },
              {
                icon: <ArrowRight size={18} />,
                t: "Priority access, no queuing (with full payment).",
              },
            ].map((x, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-ambar mt-1">{x.icon}</span>
                <span className="text-white/90">{x.t}</span>
              </li>
            ))}
          </ul>
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10"
          >
            Buy tickets now
          </a>
        </div>

        <div
          className="rounded-lg p-10 bg-raised border border-white/5"
          style={{ boxShadow: "var(--shadow-elev-2)" }}
        >
          <p className="eyebrow mb-4">Keep in mind these</p>
          <h3 className="display text-3xl md:text-4xl">Important details</h3>
          <ul className="mt-8 space-y-5">
            {[
              {
                icon: <MapPin size={18} />,
                t: "Av. de Mayo 825, Buenos Aires.",
              },
              {
                icon: <Clock size={18} />,
                t: "Doors open 45 min before the show.",
              },
              {
                icon: <Users size={18} />,
                t: "Limited capacity — 80 seats per show.",
              },
              {
                icon: <Users size={18} />,
                t: "The 19:00 show in the main hall is the only one accessible for guests with reduced mobility (street-level access).",
              },
              {
                icon: <AlertCircle size={18} />,
                t: "Tickets are non-refundable and cannot be modified once the purchase is confirmed.",
              },
            ].map((x, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-ambar mt-1">{x.icon}</span>
                <span className="text-white/90">{x.t}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://maps.app.goo.gl/8X1vysiPN1yWvmdf9"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-10"
          >
            <MapPin size={16} /> How to get there
          </a>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className="rounded-lg p-10 border border-pasion/30 bg-gradient-to-b from-bordo-deep/40 to-transparent"
          style={{ boxShadow: "var(--glow-red)" }}
        >
          <p className="eyebrow mb-3">Limited capacity per show</p>
          <h3 className="display text-2xl md:text-3xl">
            Book before you arrive in Buenos Aires
          </h3>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" /> Book via WhatsApp
            </a>
            <a
              href={TICKETS}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Buy tickets now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Payments() {
  const methods = [
    {
      icon: <Banknote size={20} />,
      title: "Cash in your currency",
      body: "We accept Argentine pesos, US dollars, euros and Brazilian reais. Ideal if you want to pay instantly with no fuss.",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Debit & credit cards",
      body: "Pay directly at the Tortoni with any enabled card. Practical and secure for international visitors.",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Bank transfer (ARS only)",
      body: "Available in Argentine pesos only. Recommended for local residents or those with an Argentine bank account.",
    },
    {
      icon: <Banknote size={20} />,
      title: "PIX (cash at Tortoni only)",
      body: "For visitors from Brazil: PIX is available in person at the Tortoni café only.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">How can you pay?</p>
          <h2 className="display text-3xl md:text-5xl">
            Easy <span className="script text-ambar text-5xl">&</span> secure
            payment
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methods.map((m) => (
            <div
              key={m.title}
              className="rounded-lg p-6 bg-surface border border-white/5 hover:border-ambar/30 transition-colors h-full"
            >
              <div className="h-10 w-10 rounded-md bg-bordo-deep/60 flex items-center justify-center text-ambar">
                {m.icon}
              </div>
              <h3 className="mt-5 font-display text-xl text-white">
                {m.title}
              </h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                {m.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" /> Book via WhatsApp
          </a>
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            View shows and buy online
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    { src: gallery1, pos: "object-center" },
    { src: gallery2, pos: "object-top" },
    { src: gallery3, pos: "object-top" },
    { src: gallery4, pos: "object-center" },
    { src: gallery5, pos: "object-center" },
    { src: gallery6, pos: "object-center" },
    { src: gallery7, pos: "object-top" },
    { src: gallery8, pos: "object-center" },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Some of our</p>
          <h2 className="display text-3xl md:text-5xl">
            Artists <span className="text-pasion">on stage</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-[2px] group ${i === 0 ? "md:row-span-2 md:col-span-1" : ""}`}
              style={{ boxShadow: "var(--shadow-elev-2)" }}
            >
              <img
                src={p.src}
                alt={`Artist ${i + 1}`}
                className={`w-full ${i === 0 ? "h-[400px] md:h-[640px]" : "h-[260px] md:h-[310px]"} object-cover ${p.pos} transition-transform duration-700 group-hover:scale-105`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/70 via-transparent to-transparent" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-noir border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <img
            src={logo}
            alt="Sensaciones de Tango"
            className="h-28 w-auto"
          />
          <p className="mt-6 text-white/58 text-sm leading-relaxed max-w-xs">
            Experience tango where it was born. An intimate show at the heart
            of Café Tortoni.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-[10px]">Visit us</p>
          <a
            href="https://maps.app.goo.gl/8X1vysiPN1yWvmdf9"
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-start gap-3 text-white/82 hover:text-ambar"
          >
            <MapPin size={18} className="text-ambar shrink-0 mt-1" />
            Av. de Mayo 825, Buenos Aires, Argentina
          </a>
          <p className="mt-4 flex items-start gap-3 text-white/82">
            <Calendar size={18} className="text-ambar shrink-0 mt-1" />
            Mon to Sat · Closed Sundays
          </p>
        </div>

        <div>
          <p className="eyebrow !text-[10px]">Follow us</p>
          <div className="mt-3 flex gap-3">
            {[
              {
                Icon: Instagram,
                href: "https://www.instagram.com/sensacionesdetango",
              },
              {
                Icon: Facebook,
                href: "https://www.facebook.com/profile.php?id=100083610210538",
              },
              {
                Icon: Youtube,
                href: "http://www.youtube.com/@sensacionesdetango3099",
              },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-md border border-white/10 flex items-center justify-center text-white/70 hover:text-ambar hover:border-ambar/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-whatsapp text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Need help? Write to us
          </a>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/40 uppercase tracking-[0.2em]">
          <p>© 2025 Sensaciones de Tango</p>
          <p>Café Tortoni · Buenos Aires</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Book via WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-whatsapp hidden md:flex items-center justify-center text-noir hover:scale-110 transition-transform"
      style={{ boxShadow: "var(--glow-green)" }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function TortoniAuthority() {
  return (
    <div className="py-8 border-y border-white/6 bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
        <img
          src={logoTortoni}
          alt="Café Tortoni — Buenos Aires"
          className="h-12 w-auto rounded-md opacity-90"
        />
        <div className="text-center sm:text-left">
          <p className="eyebrow !text-[10px] mb-1">Performed exclusively at</p>
          <p className="text-white/50 text-sm">Buenos Aires · Founded in 1858 · Argentina's most iconic café</p>
        </div>
      </div>
    </div>
  );
}

function LandingEN() {
  return (
    <main className="bg-noir text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <TortoniAuthority />
      <Reviews />
      <Schedule />
      <Show />
      <VideoShow />
      <Consumos />
      <Guide />
      <Info />
      <Payments />
      <Gallery />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
