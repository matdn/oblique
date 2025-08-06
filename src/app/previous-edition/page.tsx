"use client";

import Link from "next/link";
import EditionGallery from "../components/EditionGallery";
import Footer from "../components/Footer";

export default function PreviousEdition() {
    const program = [
        {
            time: "11:00",
            type: "PERFORMANCE",
            duration: "40 MIN",
            title: "OUTRENOIR — Chorégraphie @lauregeorge.outrenoir",
            artists: [
                { name: "Alice Thomas" },
                { name: "Elsa Gamracy" },
                { name: "Inès Tressens" },
                { name: "Margaux Balmier" },
                { name: "Tom Uilbaud" },
                { name: "Triknott" },
                { name: "Laure de Dietrich", slug: "laure-de-dietrich" }
            ],
            description: "Retour en images sur la prestation époustouflante des danseurs de la compagnie Outrenoir, qui ont subjugué le public avec une chorégraphie puissante et sensible.",
            category: "DANSE"
        },
        {
            time: "13:00",
            type: "LECTURE POÉTIQUE",
            duration: "30 MIN",
            title: "Camille Ruiz — Lecture inédite",
            artists: [{ name: "Camille Ruiz", slug: "camille-ruiz" }],
            description: "Une compilation inédite de poèmes, entre maisons d’enfance, fantômes et nature. Une voix sensible et engagée.",
            category: "POÉSIE"
        },
        {
            time: "15:00",
            type: "PERFORMANCE",
            duration: "60 MIN",
            title: "Ocean Inc.",
            artists: [
                { name: "Dorsène", slug: "ocean-inc" },
                { name: "Étienne DW", slug: "ocean-inc" }
            ],
            description: "Performance poétique immersive autour du Marineland d’Antibes : orques, image, son et poésie se rencontrent.",
            category: "ÉCOPOÉSIE"
        },
        {
            time: "16:30",
            type: "INSTALLATION / PEINTURE",
            duration: "All Day",
            title: "Œuvres de Jenni",
            artists: [{ name: "Jenni", slug: "jenni" }],
            description: "Peintures à l’huile et aquarelles, à la frontière entre ressenti atmosphérique et abstraction picturale.",
            category: "ART VISUEL"
        },
        {
            time: "18:00",
            type: "PERFORMANCE COLLECTIVE",
            duration: "70 MIN",
            title: "ONM x Kodama x Laure de Dietrich",
            artists: [
                { name: "Etienne Jarrier" },
                { name: "Laure de Dietrich", slug: "laure-de-dietrich" },
                { name: "Kodama" }
            ],
            description: "Une création mêlant vents, tambours japonais taiko et danse improvisée, pour une rencontre inédite entre traditions et expérimentation.",
            category: "MUSIQUE / DANSE"
        },
        {
            time: "19:30",
            type: "PERFORMANCE JEUNESSE",
            duration: "45 MIN",
            title: "LCOY x Oblique",
            artists: [{ name: "LCOY x Oblique", slug: "lcoy-oblique" }],
            description: "Performance entre théâtre, lecture et écriture pour faire entendre la voix des jeunesses engagées.",
            category: "ART POLITIQUE"
        }
    ];

    return (
        <main className="bg-[#F5F5FF] text-[#1D1AEF] font-sans p-2">
            {/* Header */}
            <div className="relative w-full py-20 flex items-center justify-center">
                <h1 className="text-[#2400FF] text-5xl md:text-7xl font-bold uppercase text-center drop-shadow-lg">
                    ÉDITION 2024<br />Qu’est-ce que l’on garde ?
                </h1>
            </div>

            {/* Description */}
            <section className="max-w-4xl mx-auto px-4 py-16 space-y-6">
                <p className="text-lg leading-relaxed">
                    C’est autour d’un questionnement central, <strong>« qu’est-ce que l’on garde ? »</strong>, que la deuxième édition du Festival Oblique explore, par l’intime,
                    le rapport que chacun entretient vis à vis du dérèglement climatique.
                </p>
                <p className="text-lg leading-relaxed">
                    Fidèle à sa volonté de soutenir la scène artistique émergente, Oblique s’associe avec des artistes prometteurs autour d’une programmation variée,
                    alliant <strong>musique</strong>, <strong>théâtre</strong>, <strong>danse</strong> et <strong>poésie orale</strong>.
                </p>
            </section>

            {/* Galerie */}
            <EditionGallery />

            {/* Programme */}
            <section className="max-w-6xl mx-auto px-4 pb-24 space-y-8">
                {program.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="flex flex-wrap items-center gap-2 text-xs uppercase mb-2">
                            <span className="bg-[#1D1AEF] text-white px-2 py-1 rounded-full font-medium">{item.type}</span>
                            <span className="text-[#1D1AEF]">⏱ {item.duration}</span>
                            <span className="text-[#1D1AEF]">{item.category}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>

                        <p className="text-sm mb-2 uppercase tracking-wide font-semibold opacity-70 flex flex-wrap gap-x-2">
                            {item.artists.map((artist, idx) =>
                                artist.slug ? (
                                    <Link
                                        key={idx}
                                        href={`/previous-edition/2024/${artist.slug}`}
                                        className="underline hover:text-[#2400FF] transition"
                                    >
                                        {artist.name}
                                    </Link>
                                ) : (
                                    <span key={idx}>{artist.name}</span>
                                )
                            )}
                        </p>

                        <p className="text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </section>
            <div className="bg-[#1D1AEF] text-white p-8 rounded-xl text-center space-y-4">
                <h2 className="text-4xl font-bold uppercase">Envie de découvrir Oblique ?</h2>
                <p className="text-sm max-w-xl mx-auto">
                    Explore notre univers en assistant à la prochaine édition ou en visionnant les éditions précédentes.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-3 rounded-full bg-white text-[#1D1AEF] font-bold uppercase hover:bg-[#C5B9F6] transition"
                >
                    Retour à l&apos;accueil
                </Link>
            </div>
            <Footer />
        </main>
    );
}
