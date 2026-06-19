import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-seo.jpg";
import heroMobileImg from "@/assets/gla-fla.jpg";
import tortoniImg from "@/assets/tortoni-interior.jpg";
import salonCafeImg from "@/assets/salon-cafe.jpg";
import bandoneonImg from "@/assets/show-singer.jpg";
import coupleImg from "@/assets/tango-couple.jpg";
import logoImg from "@/assets/logo.webp";
import logoTortoni from "@/assets/logo-tortoni.png";

const WHATSAPP_URL = "https://wa.me/5491150108040?text=%5BLP-ES-SST%5D%20Hola!%20Quiero%20reservar%20el%20show%20de%20tango%20en%20el%20Caf%C3%A9%20Tortoni.";
const TICKETS_URL = "https://tickets.sensacionesdetango.com/";
const ROUTE_PATH = "/es/show-de-tango-cafe-tortoni";
const CANONICAL_URL = "https://sensacionesdetango.com/es/show-de-tango-cafe-tortoni";

const FAQS = [
  {
    q: "¿Hay show de tango en el Café Tortoni?",
    a: "Sí. Sensaciones de Tango presenta una experiencia teatral con tango en vivo en el histórico Café Tortoni de Buenos Aires — bailarines, bandoneón y cantor a pocos metros de tu mesa.",
  },
  {
    q: "¿Cómo reservar el show de tango en el Café Tortoni?",
    a: "La reserva se hace por WhatsApp o por el formulario de esta página. Atendemos turistas hispanohablantes en español y confirmamos tu mesa en pocos minutos.",
  },
  {
    q: "¿Cuánto cuesta un show de tango en Buenos Aires?",
    a: "Los precios varían según la función y la ubicación de la mesa. Consulta disponibilidad y precios actualizados por WhatsApp — respondemos el mismo día.",
  },
  {
    q: "¿El Café Tortoni está cerca del Obelisco?",
    a: "Sí. El Café Tortoni está en la Avenida de Mayo 829, en el corazón histórico de Buenos Aires, a pocos minutos a pie del Obelisco, Plaza de Mayo y la Avenida Corrientes.",
  },
  {
    q: "¿El show es recomendable para turistas hispanohablantes?",
    a: "Absolutamente. Es una de las experiencias más buscadas por quienes visitan Buenos Aires por primera vez: historia, cultura porteña y tango auténtico en un solo lugar.",
  },
  {
    q: "¿Hay que reservar con antelación?",
    a: "Sí. Las funciones tienen lugares limitados y suelen agotarse en temporada alta. Recomendamos reservar antes del viaje para asegurar tu mesa.",
  },
  {
    q: "¿El show incluye cena?",
    a: "El show no incluye cena. Es posible consumir en el café antes de la función. El pago se realiza en efectivo en el lugar.",
  },
  {
    q: "¿Las entradas son reembolsables?",
    a: "No. Las entradas adquiridas a través de esta plataforma no son reembolsables ni admiten modificaciones una vez completada la compra. Confirmá tu disponibilidad para la fecha y el horario elegido antes de finalizar.",
  },
];

export const Route = createFileRoute("/es/show-de-tango-cafe-tortoni")({
  head: () => ({
    meta: [
      { title: "Show de Tango en el Café Tortoni Buenos Aires — Sensaciones de Tango" },
      {
        name: "description",
        content:
          "Vive una noche de tango en el histórico Café Tortoni de Buenos Aires. Consulta horarios, reserva tu show y vive una noche auténtica porteña con Sensaciones de Tango.",
      },
      { name: "language", content: "es" },
      { property: "og:title", content: "Show de Tango en el Café Tortoni Buenos Aires — Sensaciones de Tango" },
      {
        property: "og:description",
        content:
          "Sensaciones de Tango: experiencia teatral con tango en vivo en el Café Tortoni. Reserva en español y vive el tango donde nació.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
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
          name: "Show de Tango en el Café Tortoni — Sensaciones de Tango",
          description:
            "Experiencia teatral con tango en vivo en el histórico Café Tortoni de Buenos Aires.",
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
  component: TangoLandingES,
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
          <a href="#horarios" className="hover:text-ambar transition-colors">Horarios</a>
          <a href="#resenas" className="hover:text-ambar transition-colors">Reseñas</a>
          <a href="#faq" className="hover:text-ambar transition-colors">FAQ</a>
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
            <a href="/pt/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">PT</a>
            <span className="text-white/20">·</span>
            <a href="/en/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">EN</a>
            <span className="text-white/20">·</span>
            <span className="text-ambar px-1">ES</span>
          </div>
          <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary !py-2.5 !px-4 text-sm">
            Comprar ticket
          </a>
        </div>

        {/* Mobile: switcher + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
            <a href="/pt/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">PT</a>
            <span className="text-white/20">·</span>
            <a href="/en/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">EN</a>
            <span className="text-white/20">·</span>
            <span className="text-ambar px-1">ES</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-secondary-w hover:text-ambar transition-colors"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
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
            <a href="#horarios" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Horarios</a>
            <a href="#resenas" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Reseñas</a>
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
      <picture>
        <source media="(max-width: 767px)" srcSet={heroMobileImg} />
        <img
          src={heroImg}
          alt="Pareja bailando tango en el Café Tortoni"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1100}
        />
      </picture>
      <div className="absolute inset-0 bg-scrim-bottom" />
      <div className="absolute inset-0 bg-spotlight opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge badge-available">Disponible esta semana</span>
            <span className="eyebrow !text-text-tertiary">Buenos Aires · 1858</span>
          </div>

          <h1 className="display-caps text-[2.4rem] sm:text-[3.2rem] lg:text-[4.4rem] leading-[0.98] text-primary-w mb-3">
            Show de Tango
            <br />
            <span className="text-ambar">en el Café Tortoni</span>
            <br />
            <span className="font-script normal-case tracking-normal text-[0.55em] text-secondary-w">
              en Buenos Aires
            </span>
          </h1>

          <p className="font-display italic text-xl sm:text-2xl text-secondary-w max-w-2xl mt-6 leading-snug">
            Una noche íntima de tango en el café más histórico de Argentina —
            bailarines, bandoneón y voz en vivo, a pocos metros de tu mesa.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-9">
            <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
              Comprar ticket
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon className="w-5 h-5" />
              Reservar por WhatsApp
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-[0.78rem] uppercase tracking-[0.22em] font-semibold text-tertiary-w">
            <li>· Av. de Mayo 829</li>
            <li>· 1h de función</li>
            <li>· Atención en ES/EN</li>
            <li>· Lugares limitados</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function QuickAnswers() {
  const items = [
    { q: "¿Hay show de tango en el Café Tortoni?", a: "Sí — Sensaciones de Tango se presenta en el Café Tortoni." },
    { q: "¿Dónde está?", a: "En el centro histórico de Buenos Aires, cerca del Obelisco." },
    { q: "¿Hay que reservar?", a: "Sí, lugares limitados — recomendamos reservar con antelación." },
    { q: "¿Bueno para turistas hispanohablantes?", a: "Ideal para una primera noche en Buenos Aires." },
  ];
  return (
    <section className="relative py-16 lg:py-24 bg-noir border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Respuestas rápidas</p>
        <h2 className="display-caps text-2xl sm:text-3xl text-primary-w mb-10 max-w-2xl">
          Lo que necesitas saber en 30 segundos
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
    { value: "#3", unit: "", label: "en Buenos Aires" },
    { value: "93.6%", unit: "", label: "Excelente" },
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
        <div className="relative space-y-3">
          <div className="absolute -inset-4 bg-amber-rim opacity-20 blur-2xl" />
          <img
            src={tortoniImg}
            alt="Interior histórico del Café Tortoni en Buenos Aires"
            className="relative rounded-md w-full h-64 object-cover shadow-elev-3"
            loading="lazy"
          />
          <img
            src={salonCafeImg}
            alt="Salón del Café Tortoni Buenos Aires"
            className="relative rounded-md w-full h-48 object-cover shadow-elev-3"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow mb-4">Café Tortoni · desde 1858</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            ¿Por qué ver un show de tango en el Café Tortoni?
          </h2>
          <div className="space-y-5 text-secondary-w text-[1.02rem] leading-relaxed">
            <p>
              El Café Tortoni es el café más antiguo e icónico de Argentina —
              parada obligada en cualquier visita a Buenos Aires. Sus columnas
              de mármol, vitrales Art Nouveau y lámparas de bronce guardan la
              memoria de Borges, Gardel y Alfonsina Storni.
            </p>
            <p>
              Ver tango en este salón no es solo asistir a una función: es
              entrar en la historia del género, en el lugar donde se consolidó
              como el alma musical de la ciudad.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-secondary-w">
            {[
              "Café histórico en el corazón de Buenos Aires",
              "Experiencia cultural argentina auténtica",
              "Experiencia teatral con tango en un espacio icónico",
              "Ideal para turistas en su primera visita",
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
    { t: "Danza", d: "Parejas de tango en vivo en estilo tradicional argentino." },
    { t: "Música", d: "El espectáculo fusiona tango con un vibrante cuadro folclórico argentino. Percusión, bombos y cajón peruano acompañan la fuerza del malambo y las boleadoras, transmitiendo toda la tradición en escena." },
    { t: "Voz", d: "Cantores porteños interpretando a Gardel, Piazzolla y contemporáneos." },
    { t: "Escenario", d: "El salón histórico del Café Tortoni como escenario íntimo." },
  ];
  return (
    <section id="show" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">La experiencia</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Sensaciones de Tango: experiencia teatral con tango en el Café Tortoni
          </h2>
          <p className="text-secondary-w text-lg max-w-2xl">
            Una noche pensada para quienes viajan a Buenos Aires y quieren más
            que una foto en la fachada: música en vivo, danza en el piso de
            madera, voz y bandoneón a centímetros del público.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden">
            <img
              src={bandoneonImg}
              alt="Bandoneonista tocando en vivo en el show de tango"
              className="w-full h-full object-cover min-h-[420px]"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-noir/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="badge badge-available">En vivo</span>
              <p className="font-display text-2xl mt-3 text-primary-w">
                Voz, danza y bandoneón
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
              <p className="display-caps text-sm text-ambar mb-2">Mesas compartidas</p>
              <p className="text-secondary-w">
                Asignación por orden de pago. Para mesa privada, se abonan
                los 4 lugares. Todo confirmado por escrito.
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
    <section id="horarios" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Funciones</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-12 max-w-3xl">
          Horarios, duración y ubicación del show
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard
            label="Funciones"
            value="Lun – Sáb"
            sub="18h y 20h · vier–sáb también a las 19h"
          />
          <InfoCard label="Duración" value="1 hora" sub="Sin intermedio" />
          <InfoCard
            label="Dirección"
            value="Av. de Mayo 829"
            sub="Buenos Aires · Argentina"
          />
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          <div className="card-tango">
            <p className="eyebrow mb-4">Cómo llegar</p>
            <ul className="space-y-3 text-secondary-w">
              <li>· A 4 cuadras del <strong className="text-primary-w">Obelisco</strong></li>
              <li>· A 3 cuadras de <strong className="text-primary-w">Plaza de Mayo</strong></li>
              <li>· Subte Línea A — estación <strong className="text-primary-w">Piedras</strong></li>
              <li>· Taxis y Uber hasta la puerta · zona segura de noche</li>
            </ul>
            <a
              href="https://maps.google.com/?q=Caf%C3%A9+Tortoni+Av.+de+Mayo+829+Buenos+Aires"
              target="_blank"
              rel="noopener"
              className="btn btn-tertiary mt-4"
            >
              Abrir en Google Maps →
            </a>
          </div>
          <div className="card-tango bg-raised">
            <p className="eyebrow mb-4">Reserva tu noche</p>
            <p className="font-display text-2xl text-primary-w mb-3">
              Asegura tu mesa con antelación
            </p>
            <p className="text-secondary-w mb-6">
              Atención en español por WhatsApp. Confirmamos disponibilidad
              para la fecha elegida en pocos minutos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
                Comprar ticket
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon className="w-5 h-5" /> Reservar ahora
              </a>
              <span className="badge badge-few">Últimos lugares · sáb</span>
            </div>
          </div>
        </div>

        <div className="mt-5 card-tango">
          <p className="eyebrow mb-3">Dos espacios del Café Tortoni</p>
          <p className="text-secondary-w leading-relaxed">
            Las funciones de las <strong className="text-primary-w">18 h. y 20 h.</strong> se realizan en la <strong className="text-primary-w">bodega histórica del subsuelo</strong> — espacio íntimo de época, acceso por escalera. La función de las <strong className="text-primary-w">19 h.</strong> (viernes, sábados y feriados) se realiza en el <strong className="text-primary-w">salón principal</strong> a nivel de calle — el único espacio <span className="text-ambar">♿ apto para personas con movilidad reducida</span>.
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

function ForHispanic() {
  const rows = [
    { q: "¿Puedo reservar desde el exterior?", a: "Sí — por WhatsApp o el formulario de esta página, incluso antes de viajar." },
    { q: "¿Atienden en español?", a: "Sí. Nuestro equipo atiende a turistas hispanohablantes en español durante todo el proceso de reserva." },
    { q: "¿Está cerca de zonas turísticas?", a: "Sí. El Café Tortoni está en la Avenida de Mayo, el eje histórico que une Plaza de Mayo con el Congreso." },
    { q: "¿Vale la pena reservar antes del viaje?", a: "Sí. En temporada alta las funciones se agotan — recomendamos reservar con al menos 7 días de antelación." },
    { q: "¿Es buena experiencia para la primera visita?", a: "Una de las mejores: Café Tortoni, tango en vivo y cultura porteña en una sola noche." },
  ];
  return (
    <section className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
        <div className="mb-4">
          <p className="eyebrow !text-ambar">Para quienes viajan a Buenos Aires</p>
        </div>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-10">
          Información para quienes viajan a Buenos Aires
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
          <p className="eyebrow mb-4">La experiencia completa</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Café Tortoni de día, <span className="text-ambar">tango de noche</span>
          </h2>
          <p className="text-secondary-w text-lg mb-8 max-w-xl">
            Muchos turistas conocen el Tortoni de mañana, por el café y la
            arquitectura. De noche, el mismo salón se transforma en escenario —
            y la experiencia se completa.
          </p>

          <div className="space-y-4">
            <Moment
              label="Día"
              title="Visita el café histórico"
              text="Conoce el salón, siéntate en las mismas mesas donde escritores y tangueros se sentaron. Café, churros y arquitectura."
            />
            <Moment
              label="Noche"
              title="Experiencia teatral con tango en vivo"
              text="El mismo espacio, ahora con luz baja, bandoneón y danza a pocos metros. Reserva con antelación."
              highlight
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-passion-glow opacity-60 blur-3xl" />
          <img
            src={coupleImg}
            alt="Pareja de tango actuando de noche en el Café Tortoni"
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
      text: "Increíble. El Tortoni de noche es otra dimensión — el show emocionó a toda mi familia. Reservamos por WhatsApp en minutos.",
    },
    {
      name: "Diego R.",
      from: "Buenos Aires, AR",
      text: "Llevé a unos amigos hispanohablantes y quedaron fascinados. El nivel del show y la cercanía con los bailarines hacen la diferencia.",
    },
    {
      name: "Camila P.",
      from: "Rio de Janeiro, BR",
      text: "La mejor noche de nuestro viaje. Recomiendo reservar antes — cuando llegamos, estaba lleno.",
    },
  ];
  return (
    <section id="resenas" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Quienes lo vivieron</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-12 max-w-3xl">
          Qué dicen los visitantes
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
        <p className="eyebrow mb-3">Preguntas frecuentes</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-10">
          Todo lo que preguntan sobre el show
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
          <span className="font-script text-2xl">la noche te espera</span>
        </div>
        <h2 className="display-caps text-3xl sm:text-5xl lg:text-6xl leading-[1] text-primary-w mb-6">
          Reserva tu show de tango en el Café Tortoni
        </h2>
        <p className="font-display italic text-xl text-secondary-w mb-10">
          Asegura tu lugar para vivir una noche de tango en Buenos Aires
          con Sensaciones de Tango.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
            Comprar ticket
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
            <WhatsAppIcon className="w-5 h-5" />
            Reservar por WhatsApp
          </a>
        </div>
        <p className="mt-6 text-tertiary-w text-sm uppercase tracking-[0.22em]">
          Atención para turistas hispanohablantes
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
          <img src={logoImg} alt="Sensaciones de Tango" className="h-24 w-auto" />
          <p className="text-tertiary-w text-sm mt-3 max-w-xs">
            Experiencia teatral con tango en vivo en el histórico Café Tortoni,
            Buenos Aires.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Lugar</p>
          <p className="text-secondary-w">Café Tortoni</p>
          <p className="text-tertiary-w text-sm">Av. de Mayo 829 — Buenos Aires, Argentina</p>
        </div>
        <div>
          <p className="eyebrow mb-3">Reservas</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-wa hover:underline">
            WhatsApp · atención en ES/EN
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
          <p className="eyebrow !text-[10px] mb-1">Presentado exclusivamente en</p>
          <p className="text-white/50 text-sm">Buenos Aires · Fundado en 1858 · El café más icónico de Argentina</p>
        </div>
      </div>
    </div>
  );
}

function TangoLandingES() {
  return (
    <div className="bg-noir text-primary-w">
      <Nav />
      <main>
        <Hero />
        <TortoniAuthority />
        <QuickAnswers />
        <SocialProof />
        <WhyTortoni />
        <TheShow />
        <Schedule />
        <ForHispanic />
        <DayAndNight />
        <Reviews />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
