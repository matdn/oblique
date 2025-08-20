import Footer from "@/app/components/Footer";
import { program2025 } from "../data/2025Program";

export default function Edition2025() {
    return (
        <main className="min-h-screen bg-[#F5F5FF] text-[#1D1AEF] pt-16 pb-2 px-4">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Intro */}
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

                {/* Programme */}
                <section className="space-y-6 py-24">
                    <h2 className="text-3xl font-bold uppercase">Programme</h2>

                    {program2025.map((day, i) => (
                        <div key={i} className="space-y-2">
                            <h3 className="text-xl font-semibold">{day.day}</h3>
                            <ul className="space-y-2">
                                {day.events.map((event, j) => (
                                    <li key={j} className="bg-white rounded-lg p-4 shadow">
                                        <p className="font-bold">
                                            {event.artist} — {event.title}
                                        </p>
                                        {event.time && event.location && (
                                            <p className="text-sm opacity-70">
                                                {event.time} · {event.location}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>
            </div>
            <Footer />
        </main>
    );
}
