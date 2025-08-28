import Footer from "@/app/components/Footer";
import { program2025 } from "../data/2025Program";

export default function Edition2025() {
  return (
    <main className="min-h-screen bg-[#F5F5FF] text-[#1D1AEF] pt-16 pb-2 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        
        
        {/* --- Intro --- */}
        <section className="space-y-6 text-center">
          <h1 className="text-6xl font-bold uppercase">Édition 2025 — REFUGES</h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            À une époque marquée par l’exil, les bouleversements écologiques, les
            effondrements sociaux et les logiques d’exclusion, la question du refuge
            devient centrale. Le refuge ne peut plus être pensé comme un abri ou un
            espace de repli passager mais comme un lieu à construire, des pratiques à
            (ré)inventer, des fictions à vivre.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Ainsi, cette année, Oblique Festival explore le refuge comme espace pluriel,
            à la fois intime et politique, matériel, imaginaire et situé. Il ne s’agit plus
            seulement de bâtir, mais de penser autrement l’habiter : faire refuge dans un
            geste, une forêt, un corps en mouvement, une chambre d’adolescent.es ou une
            mémoire enfouie.
          </p>
          <a
            href="https://www.helloasso.com/associations/oblique-festival/evenements/refuges"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-[#1D1AEF] text-white rounded-full hover:bg-[#2400FF] transition"
          >
            🎟️ Réserver sur HelloAsso
          </a>
        </section>

        {/* --- Programme (jours bien délimités) --- */}
        <section className="space-y-8 py-24">
          <h2 className="text-3xl font-bold uppercase">Programme</h2>
{/* --- VERNISSAGE CARD --- */}
        <section aria-labelledby="vernissage" className="pt-2">
          <div className="bg-white rounded-2xl shadow-xl border border-[#C5B9F6]/40 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#1D1AEF]/70" id="vernissage">
                  Vernissage — vendredi 5 septembre
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase">
                  EXPO — Vers la Forêt / Depuis la Forêt
                </h2>
                <p className="mt-1 text-sm md:text-base text-[#1D1AEF]/80">
                  en continu tout le week-end
                </p>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-[#1D1AEF] text-white">
                19h — 22h
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <h3 className="text-sm uppercase tracking-widest font-semibold">Artistes exposants</h3>
              <p className="text-sm leading-relaxed">
                Varoujan Chichlian (peinture), Hélène Guilguet (photo), Emma Seigneur (collages),
                Madeline Tual (photo), Eloïse Frye de Lassalle (photo), Jenni (peinture)
              </p>

              <div className="mt-4 rounded-xl bg-[#F5F5FF] border border-[#C5B9F6]/40 p-4">
                <p className="text-sm">
                  <span className="font-semibold">Performance exceptionnelle</span> : Nino Rossini Defrançois (trombone) &amp; Edgar Walorsky (basson)
                </p>
                <p className="text-sm opacity-80">À 19h30 · Lieu : Friche</p>
              </div>
            </div>
          </div>
        </section>

          <div className="grid grid-cols-1 gap-6">
            {program2025.map((day, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-lg border border-[#C5B9F6]/40 p-6 space-y-4"
              >
                <header className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold uppercase">{day.day}</h3>
                  {/* badge optionnel: date courte */}
                  {day.date && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1D1AEF] text-white">
                      {day.date}
                    </span>
                  )}
                </header>

                <ul className="space-y-3">
                  {day.events.map((event, j) => (
                    <li key={j} className="rounded-lg p-4 bg-[#F5F5FF] border border-[#C5B9F6]/40">
                      <p className="font-bold text-ml">
                        {event.artist} — {event.title}
                      </p>
                      {(event.time || event.location) && (
                        <p className="text-sm opacity-70">
                          {event.time ? event.time : ""}{event.time && event.location ? " · " : ""}
                          {event.location ? event.location : ""}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}