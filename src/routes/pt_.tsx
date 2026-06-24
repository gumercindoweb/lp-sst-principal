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
  "https://wa.me/5491150108040?text=%5BLP-PT%5D%20Ol%C3%A1%21%20Quero%20reservar%20o%20show%20de%20tango%20no%20Caf%C3%A9%20Tortoni";

const FAQS = [
  {
    q: "Tem show de tango no Café Tortoni?",
    a: "Sim. Sensaciones de Tango realiza um espetáculo de tango ao vivo no histórico Café Tortoni, em Buenos Aires — bailarinos, tambores e voz a poucos metros da sua mesa.",
  },
  {
    q: "Como reservar o show?",
    a: "Pelo WhatsApp ou pelo sistema de ingressos online desta página. Atendemos turistas brasileiros em português e confirmamos sua reserva em minutos.",
  },
  {
    q: "Preciso reservar com antecedência?",
    a: "Sim. As sessões têm lugares limitados e costumam esgotar em alta temporada. Recomendamos reservar antes da viagem para garantir sua mesa.",
  },
  {
    q: "O show é recomendado para turistas brasileiros?",
    a: "Totalmente. O atendimento é em português, inglês e espanhol. É uma das experiências mais procuradas por brasileiros em Buenos Aires.",
  },
  {
    q: "O show inclui jantar?",
    a: "O ingresso não inclui consumação. Você pode pedir algo do cardápio do Tortoni antes de a apresentação começar. O pagamento é feito no local.",
  },
  {
    q: "Onde fica o Café Tortoni?",
    a: "Av. de Mayo 825, no centro histórico de Buenos Aires — a poucos minutos a pé do Obelisco, Plaza de Mayo e Avenida Corrientes.",
  },
];

export const Route = createFileRoute("/pt_")({
  head: () => ({
    meta: [
      {
        title:
          "Show de Tango no Café Tortoni, Buenos Aires — Sensaciones de Tango",
      },
      {
        name: "description",
        content:
          "Viva uma noite de tango no histórico Café Tortoni em Buenos Aires. Bailarinos, tambores e voz a centímetros da sua mesa. Reserve agora.",
      },
      { name: "language", content: "pt-BR" },
      {
        property: "og:title",
        content:
          "Show de Tango no Café Tortoni, Buenos Aires — Sensaciones de Tango",
      },
      {
        property: "og:description",
        content:
          "Viva uma noite de tango no histórico Café Tortoni em Buenos Aires. Bailarinos, tambores e voz a centímetros da sua mesa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "canonical", href: "https://sensacionesdetango.com/pt" },
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
          name: "Show de Tango no Café Tortoni — Sensaciones de Tango",
          description:
            "Espetáculo de tango ao vivo no histórico Café Tortoni, em Buenos Aires.",
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
  component: LandingPT,
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
          <a href="#horarios" className="hover:text-ambar transition-colors">Horários</a>
          <a href="#avaliacoes" className="hover:text-ambar transition-colors">Avaliações</a>
          <a href="#info" className="hover:text-ambar transition-colors">Info</a>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em]">
            <a href="/es" className="text-white/40 hover:text-ambar transition-colors">ES</a>
            <span className="text-white/20">|</span>
            <a href="/en" className="text-white/40 hover:text-ambar transition-colors">EN</a>
            <span className="text-white/20">|</span>
            <span className="text-white font-semibold">PT</span>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-sm">
            Reservar
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
            <a href="#horarios" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Horários</a>
            <a href="#avaliacoes" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Avaliações</a>
            <a href="#info" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Info</a>
          </nav>
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.28em]">
            <a href="/es" className="text-white/40 hover:text-ambar transition-colors">ES</a>
            <span className="text-white/20">|</span>
            <a href="/en" className="text-white/40 hover:text-ambar transition-colors">EN</a>
            <span className="text-white/20">|</span>
            <span className="text-white font-semibold">PT</span>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary !py-2.5 !px-5 !text-sm self-start">
            Reservar
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
          alt="Casal dançando tango no Café Tortoni"
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
          Café Tortoni · Buenos Aires · Desde 1858
        </p>
        <h1 className="display text-4xl sm:text-6xl md:text-8xl text-white">
          Viva o tango
          <br />
          <span className="text-pasion">onde ele nasceu</span>
        </h1>
        <p className="script text-5xl sm:text-6xl md:text-7xl mt-4">a história</p>
        <p className="mt-8 max-w-xl mx-auto text-white/82 text-lg leading-relaxed">
          Contada com corpo e alma, no canto mais emblemático de Buenos Aires.
          Bailarinos, tambores e voz, perto da sua mesa.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <a href={TICKETS} target="_blank" rel="noreferrer" className="btn-primary">
              Comprar ingresso agora
              <ArrowRight size={16} />
            </a>
            <p className="text-white/50 text-xs tracking-wider">Só 3 minutos · Confirmação imediata · Sem filas</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" />
              Reservar pelo WhatsApp
            </a>
            <p className="text-white/50 text-xs tracking-wider">Atendimento no seu idioma · Respondemos em menos de 1 hora</p>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-2 text-white/58 text-xs uppercase tracking-[0.3em]">
          <Star size={14} className="text-oro fill-oro" />
          300+ avaliações 5 estrelas no TripAdvisor
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      quote:
        "Inesquecível. O Tortoni à noite é outra coisa — o show emocionou toda a minha família.",
      name: "Mariana S.",
      country: "São Paulo, BR",
    },
    {
      quote:
        "Levei amigos internacionais e ficaram impressionados. A proximidade com os bailarinos faz toda a diferença.",
      name: "Diego R.",
      country: "Buenos Aires, AR",
    },
    {
      quote:
        "A melhor noite da nossa viagem. Reserve com antecedência — quando chegamos, já estava lotado.",
      name: "Camila P.",
      country: "Rio de Janeiro, BR",
    },
  ];
  return (
    <section id="avaliacoes" className="section-pad relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--grad-spotlight)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Por que os viajantes recomendam</p>
          <h2 className="display text-3xl md:text-5xl">
            Mais de 300 visitantes avaliaram o show com
            <span className="script text-ambar text-5xl md:text-6xl">
              {" "}
              5 estrelas{" "}
            </span>
            pela autenticidade
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
            Mais avaliações no TripAdvisor →
          </a>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  const days = [
    {
      title: "Seg – Qui",
      times: ["18h", "20h"],
      tag: "Disponível",
    },
    {
      title: "Sex, Sáb e Feriados",
      times: ["18h", "19h", "20h"],
      tag: "Últimos lugares",
    },
    {
      title: "Domingos",
      times: ["Sem espetáculo"],
      tag: "Fechado",
      muted: true,
    },
  ];
  return (
    <section id="horarios" className="section-pad bg-surface relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Ingressos online · Compra direta</p>
          <h2 className="display text-3xl md:text-5xl">
            Escolha o dia e horário que melhor se encaixe na sua viagem
          </h2>
          <p className="mt-6 text-white/82">
            Reserve seu ingresso de forma simples, segura e com confirmação
            imediata.
            <span className="italic text-white/58">
              {" "}
              Capacidade limitada por sessão — recomendamos reservar com
              antecedência.
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
                    d.tag === "Disponível"
                      ? "bg-whatsapp"
                      : d.tag === "Últimos lugares"
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
                Entrada à sala
              </p>
              <p className="mt-1 text-white/82">
                45 minutos antes de cada sessão.
              </p>
              <p className="text-xs text-white/58 mt-2">
                18h → 17h15 · 19h → 18h15 · 20h → 19h15
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Users className="text-ambar shrink-0 mt-1" size={20} />
            <div>
              <p className="eyebrow !text-[10px] !tracking-[0.28em]">
                Capacidade limitada
              </p>
              <p className="mt-1 text-white/82">
                Sala íntima — 80 pessoas por sessão.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto rounded-lg bg-noir/40 border border-white/5 p-6">
          <p className="eyebrow !text-[10px] !tracking-[0.28em] mb-3">Dois espaços do Café Tortoni</p>
          <p className="text-white/75 text-sm leading-relaxed">
            Os espetáculos das 18:00 e 20:00 hs. acontecem na{" "}
            <span className="text-ambar">adega histórica do subsolo</span>—com acesso apenas
            por escadas. O espetáculo das 19:00 hs. (sextas, sábados e feriados) acontece no{" "}
            <span className="text-ambar">salão principal</span> ao nível da rua, e é o único
            indicado para pessoas com mobilidade reduzida.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Escolher data e comprar online
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Tem dúvidas? A gente te ajuda
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
            alt="Bailarinos de tango no Café Tortoni"
            className="relative rounded-lg w-full h-[520px] object-cover"
            style={{ boxShadow: "var(--shadow-elev-3)" }}
          />
        </div>

        <div>
          <p className="eyebrow mb-4">Uma prévia do show</p>
          <h2 className="display text-4xl md:text-6xl leading-[1.05]">
            Luzes, dança
            <br />e emoção no
            <br />
            <span className="text-pasion">coração do Tortoni</span>
          </h2>
          <p className="script text-4xl mt-2">uma hora íntima</p>
          <p className="mt-6 text-white/82 leading-relaxed text-lg max-w-md">
            Uma noite íntima no Café Tortoni: bailarinos, tambores e voz, a
            centímetros da sua mesa. Não é um show de consumo em massa — é o
            tango onde ele nasceu.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Atendimento em português, inglês e espanhol.",
              "Show de 60 minutos.",
              "Acesso prioritário sem fila (com pagamento completo).",
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
              Comprar ingressos
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Prefere a gente resolver juntos?
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
          <p className="eyebrow mb-4">O show em ação</p>
          <h2 className="display text-3xl md:text-5xl">
            Veja como é{" "}
            <span className="text-pasion">uma noite no Tortoni</span>
          </h2>
        </div>
        <div
          className="relative aspect-video rounded-lg overflow-hidden"
          style={{ boxShadow: "var(--shadow-elev-3)" }}
        >
          <iframe
            src="https://www.youtube.com/embed/IdSkcKQpzwU"
            title="Sensaciones de Tango — Show de Tango no Café Tortoni"
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
      title: "Pedidos antes do show",
      body: "Os pedidos são realizados apenas antes de a apresentação começar. Assim que as luzes se apagam e o espetáculo começa, não se aceitam pedidos para não interromper a experiência.",
    },
    {
      title: "Sem pedidos pelo WhatsApp",
      body: "O serviço é presencial. Não tomamos pedidos pelo WhatsApp — chegue com antecedência se quiser aproveitar algo do cardápio antes do início.",
    },
    {
      title: "O mesmo cardápio do salão principal",
      body: "Você encontrará exatamente o mesmo menu e o mesmo atendimento que no salão principal do Tortoni — cafés, bebidas, drinques clássicos e opções doces.",
    },
    {
      title: "O ingresso não inclui consumação",
      body: "O valor do seu ingresso corresponde apenas ao show. Se quiser pedir algo, faça diretamente com a equipe do Tortoni antes de a apresentação começar.",
    },
  ];
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Sua experiência, no seu ritmo</p>
          <h2 className="display text-3xl md:text-5xl">
            Consumos durante{" "}
            <span className="text-pasion">o show</span>
          </h2>
          <p className="mt-6 text-white/82">
            Durante o show oferecemos o mesmo serviço de cafeteria do salão
            principal do Café Tortoni.
            <span className="text-white">
              {" "}
              Só pedimos que respeite os horários
            </span>{" "}
            para que a apresentação possa ser vivida com toda a sua intensidade.
          </p>
          <a
            href="https://www.cafetortoni.com.ar/index.php/cafe-hoy/gastronomia"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-ambar uppercase text-xs tracking-[0.3em] border-b border-ambar/40 pb-1 hover:border-ambar"
          >
            <Coffee size={14} /> Ver cardápio do Tortoni
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
          Um guia claro, direto e no seu idioma · ES · EN · PT
        </p>
        <h2 className="display text-3xl md:text-5xl">
          Tudo o que você precisa saber
          <br />
          <span className="text-pasion">sobre o show</span>
        </h2>
        <p className="mt-6 text-white/82 text-lg max-w-2xl mx-auto">
          Para que você viva a melhor experiência de tango em Buenos Aires, sem
          confusões nem surpresas. Um espetáculo íntimo e inesquecível.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://drive.google.com/file/d/1z62fjCg1dontMpRN2vXCR84fi6Vf8wee/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Baixar guia gratuito
          </a>
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Comprar ingressos agora
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
          <p className="eyebrow mb-4">Isso é o que</p>
          <h3 className="display text-3xl md:text-4xl">Inclui o seu ingresso</h3>
          <ul className="mt-8 space-y-5">
            {[
              {
                icon: <Users size={18} />,
                t: "Atendimento em português, inglês e espanhol.",
              },
              { icon: <Clock size={18} />, t: "Show de 60 minutos." },
              {
                icon: <ArrowRight size={18} />,
                t: "Acesso prioritário sem fila (com pagamento completo).",
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
            Comprar ingressos agora
          </a>
        </div>

        <div
          className="rounded-lg p-10 bg-raised border border-white/5"
          style={{ boxShadow: "var(--shadow-elev-2)" }}
        >
          <p className="eyebrow mb-4">Tenha em mente estes</p>
          <h3 className="display text-3xl md:text-4xl">Dados importantes</h3>
          <ul className="mt-8 space-y-5">
            {[
              {
                icon: <MapPin size={18} />,
                t: "Av. de Mayo 825, Buenos Aires.",
              },
              {
                icon: <Clock size={18} />,
                t: "Entrada à sala 45 min antes do show.",
              },
              {
                icon: <Users size={18} />,
                t: "Capacidade limitada — 80 pessoas por sessão.",
              },
              {
                icon: <Users size={18} />,
                t: "O espetáculo das 19:00 hs. no salão principal é o único indicado para pessoas com mobilidade reduzida (acesso ao nível da rua).",
              },
              {
                icon: <AlertCircle size={18} />,
                t: "Os ingressos não são reembolsáveis e não admitem alterações após a confirmação da compra.",
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
            <MapPin size={16} /> Como chegar
          </a>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className="rounded-lg p-10 border border-pasion/30 bg-gradient-to-b from-bordo-deep/40 to-transparent"
          style={{ boxShadow: "var(--glow-red)" }}
        >
          <p className="eyebrow mb-3">Capacidade limitada por sessão</p>
          <h3 className="display text-2xl md:text-3xl">
            Reserve antes de chegar em Buenos Aires
          </h3>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-5 w-5" /> Reservar pelo WhatsApp
            </a>
            <a
              href={TICKETS}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Comprar ingressos agora
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
      title: "Dinheiro na sua moeda",
      body: "Aceitamos pesos argentinos, dólares, reais e euros. Ideal para pagar sem burocracia e na hora.",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Cartões de débito e crédito",
      body: "Pague diretamente no Tortoni com qualquer cartão habilitado. Prático e seguro para turistas.",
    },
    {
      icon: <CreditCard size={20} />,
      title: "Transferência (só ARS)",
      body: "Disponível apenas em pesos argentinos. Recomendado para residentes locais ou quem tem conta argentina.",
    },
    {
      icon: <Banknote size={20} />,
      title: "PIX (presencial no Tortoni)",
      body: "Para visitantes do Brasil: PIX disponível apenas presencialmente na cafeteria do Tortoni.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Como você pode pagar?</p>
          <h2 className="display text-3xl md:text-5xl">
            Pagamento fácil{" "}
            <span className="script text-ambar text-5xl">e</span> seguro
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
            <WhatsAppIcon className="h-5 w-5" /> Reservar pelo WhatsApp
          </a>
          <a
            href={TICKETS}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Ver espetáculos e comprar online
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
          <p className="eyebrow mb-4">Alguns dos</p>
          <h2 className="display text-3xl md:text-5xl">
            Artistas <span className="text-pasion">em cena</span>
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
                alt={`Artista ${i + 1}`}
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
            Viva o tango onde ele nasceu. Um espetáculo íntimo no coração do
            Café Tortoni.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-[10px]">Nos visite</p>
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
            Seg a Sáb · Fechado domingos
          </p>
        </div>

        <div>
          <p className="eyebrow !text-[10px]">Nos siga</p>
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
            Precisa de ajuda? Nos escreva
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
      aria-label="Reservar pelo WhatsApp"
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
          <p className="eyebrow !text-[10px] mb-1">Realizado exclusivamente no</p>
          <p className="text-white/50 text-sm">Buenos Aires · Fundado em 1858 · O café mais icônico da Argentina</p>
        </div>
      </div>
    </div>
  );
}

function LandingPT() {
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
