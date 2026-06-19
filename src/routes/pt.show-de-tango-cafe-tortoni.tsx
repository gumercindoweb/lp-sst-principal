import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-seo.jpg";
import tortoniImg from "@/assets/tortoni-interior.jpg";
import bandoneonImg from "@/assets/show-singer.jpg";
import coupleImg from "@/assets/tango-couple.jpg";
import logoImg from "@/assets/logo.webp";
import logoTortoni from "@/assets/logo-tortoni.png";

const WHATSAPP_URL = "https://wa.me/5491150108040?text=%5BLP-PT-SST%5D%20Ol%C3%A1!%20Quero%20reservar%20o%20show%20de%20tango%20no%20Caf%C3%A9%20Tortoni.";
const TICKETS_URL = "https://tickets.sensacionesdetango.com/";
const ROUTE_PATH = "/pt/show-de-tango-cafe-tortoni";
const CANONICAL_URL = "https://sensacionesdetango.com/pt/show-de-tango-cafe-tortoni";

const FAQS = [
  {
    q: "Tem show de tango no Café Tortoni?",
    a: "Sim. Sensaciones de Tango realiza um espetáculo de tango ao vivo no histórico Café Tortoni, em Buenos Aires — bailarinos, bandoneón e cantor a poucos metros da sua mesa.",
  },
  {
    q: "Como reservar o show de tango no Café Tortoni?",
    a: "A reserva é feita pelo WhatsApp ou pelo formulário desta página. Atendemos turistas brasileiros em português e confirmamos sua mesa em poucos minutos.",
  },
  {
    q: "Quanto custa um show de tango em Buenos Aires?",
    a: "Os valores variam conforme a função e a localização da mesa. Consulte disponibilidade e preços atualizados pelo WhatsApp — respondemos no mesmo dia.",
  },
  {
    q: "O Café Tortoni fica perto do Obelisco?",
    a: "Sim. O Café Tortoni está na Avenida de Mayo 829, no coração histórico de Buenos Aires, a poucos minutos a pé do Obelisco, Plaza de Mayo e Avenida Corrientes.",
  },
  {
    q: "O show é recomendado para brasileiros?",
    a: "Totalmente. É uma das experiências mais procuradas por turistas brasileiros que visitam Buenos Aires pela primeira vez: une história, cultura portenha e tango autêntico em um só lugar.",
  },
  {
    q: "Preciso reservar com antecedência?",
    a: "Sim. As funções têm lugares limitados e costumam esgotar em alta temporada. Recomendamos reservar antes da viagem para garantir sua mesa.",
  },
  {
    q: "O show inclui jantar?",
    a: "O show não inclui jantar. É possível consumir no café antes do espetáculo. O pagamento é feito em dinheiro no local.",
  },
  {
    q: "Os ingressos são reembolsáveis?",
    a: "Não. Os ingressos adquiridos por esta plataforma não são reembolsáveis nem admitem alterações após a compra. Confirme sua disponibilidade para a data e o horário escolhidos antes de finalizar.",
  },
];

export const Route = createFileRoute("/pt/show-de-tango-cafe-tortoni")({
  head: () => ({
    meta: [
      { title: "Show de Tango no Café Tortoni em Buenos Aires — Sensaciones de Tango" },
      {
        name: "description",
        content:
          "Viva uma noite de tango no histórico Café Tortoni, em Buenos Aires. Veja horários, localização, experiência e reserve seu show com Sensaciones de Tango.",
      },
      { name: "language", content: "pt-BR" },
      { property: "og:title", content: "Show de Tango no Café Tortoni em Buenos Aires" },
      {
        property: "og:description",
        content:
          "Sensaciones de Tango: experiência teatral com tango ao vivo no Café Tortoni. Reserve em português e viva o tango onde ele nasceu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
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
          name: "Show de Tango no Café Tortoni — Sensaciones de Tango",
          description:
            "Espetáculo de tango ao vivo no histórico Café Tortoni, em Buenos Aires.",
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
  component: TangoLandingPT,
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
          <a href="#horarios" className="hover:text-ambar transition-colors">Horários</a>
          <a href="#reseñas" className="hover:text-ambar transition-colors">Reseñas</a>
          <a href="#faq" className="hover:text-ambar transition-colors">FAQ</a>
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
            <span className="text-ambar px-1">PT</span>
            <span className="text-white/20">·</span>
            <a href="/en/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">EN</a>
            <span className="text-white/20">·</span>
            <a href="/es/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">ES</a>
          </div>
          <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary !py-2.5 !px-4 text-sm">
            Comprar ingresso
          </a>
        </div>

        {/* Mobile: switcher + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.22em] font-semibold">
            <span className="text-ambar px-1">PT</span>
            <span className="text-white/20">·</span>
            <a href="/en/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">EN</a>
            <span className="text-white/20">·</span>
            <a href="/es/show-de-tango-cafe-tortoni" className="text-tertiary-w hover:text-ambar transition-colors px-1">ES</a>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-secondary-w hover:text-ambar transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
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
            <a href="#horarios" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Horários</a>
            <a href="#reseñas" onClick={() => setMenuOpen(false)} className="hover:text-ambar transition-colors">Reseñas</a>
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
        alt="Casal dançando tango no Café Tortoni"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1100}
      />
      <div className="absolute inset-0 bg-scrim-bottom" />
      <div className="absolute inset-0 bg-spotlight opacity-70" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 pb-20 lg:pb-28 pt-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="badge badge-available">Disponível esta semana</span>
            <span className="eyebrow !text-text-tertiary">Buenos Aires · 1858</span>
          </div>

          <h1 className="display-caps text-[2.4rem] sm:text-[3.2rem] lg:text-[4.4rem] leading-[0.98] text-primary-w mb-3">
            Show de Tango
            <br />
            <span className="text-ambar">no Café Tortoni</span>
            <br />
            <span className="font-script normal-case tracking-normal text-[0.55em] text-secondary-w">
              em Buenos Aires
            </span>
          </h1>

          <p className="font-display italic text-xl sm:text-2xl text-secondary-w max-w-2xl mt-6 leading-snug">
            Viva uma noite íntima de tango no café mais histórico da Argentina —
            bailarinos, bandoneón e voz, a poucos metros da sua mesa.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-9">
            <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
              Comprar ingresso
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon className="w-5 h-5" />
              Reservar pelo WhatsApp
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-2 mt-10 text-[0.78rem] uppercase tracking-[0.22em] font-semibold text-tertiary-w">
            <li>· Av. de Mayo 829</li>
            <li>· 1h de espetáculo</li>
            <li>· Atendimento em PT/ES</li>
            <li>· Lugares limitados</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function QuickAnswers() {
  const items = [
    { q: "Tem show de tango no Café Tortoni?", a: "Sim — Sensaciones de Tango se apresenta no Café Tortoni." },
    { q: "Onde fica?", a: "No centro histórico de Buenos Aires, perto do Obelisco." },
    { q: "Precisa reservar?", a: "Sim, lugares limitados — recomendamos reservar antes." },
    { q: "É bom para brasileiros?", a: "Ideal para a primeira viagem a Buenos Aires." },
  ];
  return (
    <section className="relative py-16 lg:py-24 bg-noir border-y border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Respostas rápidas</p>
        <h2 className="display-caps text-2xl sm:text-3xl text-primary-w mb-10 max-w-2xl">
          O que você precisa saber em 30 segundos
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
    { value: "#3", unit: "", label: "em Buenos Aires" },
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
        <div className="relative">
          <div className="absolute -inset-4 bg-amber-rim opacity-20 blur-2xl" />
          <img
            src={tortoniImg}
            alt="Interior histórico do Café Tortoni em Buenos Aires"
            className="relative rounded-md w-full h-auto shadow-elev-3"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
        <div>
          <p className="eyebrow mb-4">Café Tortoni · desde 1858</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Por que assistir a um show de tango no Café Tortoni?
          </h2>
          <div className="space-y-5 text-secondary-w text-[1.02rem] leading-relaxed">
            <p>
              O Café Tortoni é o café mais antigo e emblemático da Argentina —
              parada obrigatória de qualquer roteiro por Buenos Aires. Suas
              colunas de mármore, vitrais Art Nouveau e luminárias de bronze
              guardam a memória de Borges, Gardel e Alfonsina Storni.
            </p>
            <p>
              Ver tango neste salão não é apenas assistir a um espetáculo: é
              entrar na história do gênero, no lugar onde ele se firmou como a
              alma musical da cidade.
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-secondary-w">
            {[
              "Café histórico no coração de Buenos Aires",
              "Experiência cultural argentina autêntica",
              "Show de tango em um espaço ícone do circuito turístico",
              "Ideal para turistas brasileiros em sua primeira visita",
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
    { t: "Dança", d: "Casais de tango ao vivo em estilo tradicional argentino." },
    { t: "Música", d: "O espetáculo funde tango com um vibrante quadro de folclore argentino. Percussão, tambores e cajón peruano acompanham a força do malambo e das boleadoras, transmitindo toda a tradição em cena." },
    { t: "Voz", d: "Cantores portenhos interpretando Gardel, Piazzolla e contemporâneos." },
    { t: "Cenário", d: "O salão histórico do Café Tortoni como palco íntimo." },
  ];
  return (
    <section id="show" className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="max-w-3xl mb-14">
          <p className="eyebrow mb-4">A experiência</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Sensaciones de Tango: a experiência teatral com tango no Café Tortoni
          </h2>
          <p className="text-secondary-w text-lg max-w-2xl">
            Uma noite pensada para quem viaja a Buenos Aires e quer mais do que
            uma foto na fachada: música ao vivo, dança no chão de madeira, voz
            e bandoneón a centímetros do público.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden">
            <img
              src={bandoneonImg}
              alt="Bandoneonista tocando ao vivo em show de tango"
              className="w-full h-full object-cover min-h-[420px]"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-noir/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="badge badge-available">Ao vivo</span>
              <p className="font-display text-2xl mt-3 text-primary-w">
                Voz, dança e bandoneón
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
              <p className="display-caps text-sm text-ambar mb-2">Mesas compartilhadas</p>
              <p className="text-secondary-w">
                Atribuição por ordem de pagamento. Para mesa individual, você
                paga as 4 localizações. Tudo confirmado por escrito.
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
        <p className="eyebrow mb-3">Funções</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-12 max-w-3xl">
          Horários, duração e localização do show
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard
            label="Funções"
            value="Seg – Sáb"
            sub="18h e 20h · sex–sáb também às 19h"
          />
          <InfoCard label="Duração" value="1 hora" sub="Sem intervalo" />
          <InfoCard
            label="Endereço"
            value="Av. de Mayo 829"
            sub="Buenos Aires · Argentina"
          />
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-5">
          <div className="card-tango">
            <p className="eyebrow mb-4">Como chegar</p>
            <ul className="space-y-3 text-secondary-w">
              <li>· A 4 quadras do <strong className="text-primary-w">Obelisco</strong></li>
              <li>· A 3 quadras da <strong className="text-primary-w">Plaza de Mayo</strong></li>
              <li>· Metrô Linha A — estação <strong className="text-primary-w">Piedras</strong></li>
              <li>· Táxis e Uber até a porta · zona segura à noite</li>
            </ul>
            <a
              href="https://maps.google.com/?q=Caf%C3%A9+Tortoni+Av.+de+Mayo+829+Buenos+Aires"
              target="_blank"
              rel="noopener"
              className="btn btn-tertiary mt-4"
            >
              Abrir no Google Maps →
            </a>
          </div>
          <div className="card-tango bg-raised">
            <p className="eyebrow mb-4">Reserve sua noite</p>
            <p className="font-display text-2xl text-primary-w mb-3">
              Garanta sua mesa com antecedência
            </p>
            <p className="text-secondary-w mb-6">
              Atendimento em português pelo WhatsApp. Confirmamos em poucos
              minutos a disponibilidade da data escolhida.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
                Comprar ingresso
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
                <WhatsAppIcon className="w-5 h-5" /> Reservar agora
              </a>
              <span className="badge badge-few">Últimos lugares · sáb</span>
            </div>
          </div>
        </div>

        <div className="mt-5 card-tango">
          <p className="eyebrow mb-3">Dois espaços do Café Tortoni</p>
          <p className="text-secondary-w leading-relaxed">
            As funções das <strong className="text-primary-w">18 h. e 20 h.</strong> são realizadas na <strong className="text-primary-w">adega histórica do subsolo</strong> — espaço íntimo de época, acesso por escada. A função das <strong className="text-primary-w">19 h.</strong> (sextas e sábados) é realizada no <strong className="text-primary-w">salão principal</strong> ao nível da rua — o único espaço <span className="text-ambar">♿ apto para pessoas com mobilidade reduzida</span>.
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

function ForBrazilians() {
  const rows = [
    { q: "Posso reservar do Brasil?", a: "Sim — pelo WhatsApp ou pelo formulário, antes mesmo de viajar." },
    { q: "Atendem em português?", a: "Sim. Nossa equipe atende turistas brasileiros em português durante toda a reserva." },
    { q: "É perto de zonas turísticas?", a: "Sim. Está na Avenida de Mayo, eixo histórico ligando Plaza de Mayo ao Congresso." },
    { q: "Vale reservar antes da viagem?", a: "Sim. Em alta temporada as funções esgotam — reserve com pelo menos 7 dias de antecedência." },
    { q: "É boa experiência para primeira visita?", a: "É uma das melhores: une Café Tortoni, tango ao vivo e cultura portenha em uma noite." },
  ];
  return (
    <section className="relative py-24 lg:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-5 lg:px-10">
        <div className="mb-4">
          <p className="eyebrow !text-ambar">Para quem viaja a Buenos Aires</p>
        </div>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-10">
          Informações para quem viaja a Buenos Aires
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
          <p className="eyebrow mb-4">Experiência completa</p>
          <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-6">
            Café Tortoni de dia, <span className="text-ambar">tango à noite</span>
          </h2>
          <p className="text-secondary-w text-lg mb-8 max-w-xl">
            Muitos turistas conhecem o Tortoni de manhã, pelo café e pela
            arquitetura. À noite, o mesmo salão se transforma em palco — e a
            experiência se completa.
          </p>

          <div className="space-y-4">
            <Moment
              label="Dia"
              title="Visita ao café histórico"
              text="Conheça o salão, sente nas mesmas mesas em que escritores e tangueiros sentaram. Café, churros e arquitetura."
            />
            <Moment
              label="Noite"
              title="Show de tango ao vivo"
              text="O mesmo espaço, agora com luz baixa, bandoneón e dança a poucos metros. Reserve com antecedência."
              highlight
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-passion-glow opacity-60 blur-3xl" />
          <img
            src={coupleImg}
            alt="Casal de tango se apresentando à noite no Café Tortoni"
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
      text: "Inesquecível. O ambiente do Tortoni à noite é de outro mundo, e o show emocionou minha família inteira. Reservamos pelo WhatsApp em português, super fácil.",
    },
    {
      name: "Diego R.",
      from: "Buenos Aires, AR",
      text: "Llevé a unos amigos brasileños y quedaron fascinados. El nivel del show y la cercanía con los bailarines hacen la diferencia.",
    },
    {
      name: "Camila P.",
      from: "Rio de Janeiro, BR",
      text: "A melhor noite da nossa viagem. Recomendo reservar antes — quando chegamos, estava lotado.",
    },
  ];
  return (
    <section id="reseñas" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <p className="eyebrow mb-3">Quem já viveu</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-12 max-w-3xl">
          O que dizem os visitantes
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="card-tango flex flex-col">
              <div className="text-ambar text-2xl mb-3" aria-hidden>★★★★★</div>
              <blockquote className="font-display italic text-lg text-primary-w leading-snug flex-1">
                “{r.text}”
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
        <p className="eyebrow mb-3">Perguntas frequentes</p>
        <h2 className="display-caps text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-primary-w mb-10">
          Tudo o que perguntam sobre o show
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
          <span className="font-script text-2xl">a noite te espera</span>
        </div>
        <h2 className="display-caps text-3xl sm:text-5xl lg:text-6xl leading-[1] text-primary-w mb-6">
          Reserve seu show de tango no Café Tortoni
        </h2>
        <p className="font-display italic text-xl text-secondary-w mb-10">
          Garanta seu lugar para viver uma noite de tango em Buenos Aires com
          Sensaciones de Tango.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={TICKETS_URL} target="_blank" rel="noopener" className="btn btn-primary">
            Comprar ingresso
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn btn-wa">
            <WhatsAppIcon className="w-5 h-5" />
            Reservar pelo WhatsApp
          </a>
        </div>
        <p className="mt-6 text-tertiary-w text-sm uppercase tracking-[0.22em]">
          Atendimento para turistas brasileiros
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
            Experiência teatral com tango ao vivo no histórico Café Tortoni,
            em Buenos Aires.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-3">Local</p>
          <p className="text-secondary-w">Café Tortoni</p>
          <p className="text-tertiary-w text-sm">Av. de Mayo 829 — Buenos Aires, Argentina</p>
        </div>
        <div>
          <p className="eyebrow mb-3">Reservas</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-wa hover:underline">
            WhatsApp · atendimento em PT
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 lg:px-10 mt-10 pt-6 border-t border-white/5 text-tertiary-w text-xs flex flex-wrap justify-between gap-3">
        <span>© {new Date().getFullYear()} Sensaciones de Tango</span>
        <span>Buenos Aires · Mayo 2026</span>
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
          <p className="eyebrow !text-[10px] mb-1">Realizado exclusivamente no</p>
          <p className="text-white/50 text-sm">Buenos Aires · Fundado em 1858 · O café mais icônico da Argentina</p>
        </div>
      </div>
    </div>
  );
}

function TangoLandingPT() {
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
        <ForBrazilians />
        <DayAndNight />
        <Reviews />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
