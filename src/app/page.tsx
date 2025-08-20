"use client";

import Image from "next/image";
import Footer from "./components/Footer";
import Link from "next/link";

const visionaries = [
  {
    name: "Victor Le Calvez",
    role: "Co-Président",
    image: "/images/victor.png",
  },
  {
    name: "Eve Thine",
    role: "Co-Présidente",
    image: "/images/eve.png",
  },
  {
    name: "Camille Jeorger",
    role: "Co-Présidente",
    image: "/images/camille.png",
  },
  {
    name: "Pénélope de la Peschardière",
    role: "Co-Présidente",
    image: "/images/penelope.png",
  },
  {
    name: "Louise Brockmeier",
    role: "Co-Présidente",
    image: "/images/louise.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mx-auto md:p-2">
        {/* Partie gauche (scrollable) */}
        <section className="flex flex-col overflow-y-auto pb-4 space-y-2 w-[70dvw] uppercase">
          {/* Section Hero */}
          <div>
            {/* HERO avec OBLIQUE */}
            <div className="bg-[#1D1AEF] rounded-lg p-6 h-[70dvh] flex flex-col justify-center items-center text-center">
              <p className="uppercase text-sm tracking-widest text-white">
                [arts visuels / danse / musique]
              </p>
              <h1 className="text-8xl font-bold leading-tight">OBLIQUE</h1>
              {/* Description courte */}
              <p className="max-w-xl text-lg text-white mt-4">
                Festival pluridisciplinaire dédié aux arts visuels, à la danse et à la musique,
                porté par une équipe engagée pour la création émergente et les enjeux climatiques.
              </p>

            </div>

            {/* SECTION REFUGES LIEN */}
            <div className="mt-2 bg-[#DAD6F0] rounded-lg p-6 h-[40dvh] flex flex-col justify-center items-center text-center">
              <Link href="/edition-2025">
                <h2 className="text-6xl font-bold text-[#1D1AEF] hover:text-[#C5B9F6] transition">
                  REFUGES
                </h2>
                <h2 className="text-2xl font-semibold text-[#1D1AEF] py-4">
                  L’ÉDITION 2025 DU FESTIVAL OBLIQUE<br />ARRIVE BIENTÔT
                </h2>
              </Link>
              <p className="text-sm text-[#1D1AEF] mt-2">
                Découvrez l’univers de l’édition REFUGES
              </p>
            </div>

            {/* Infos Quand / Où / Pour qui */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 h-[15dvh]">
              <div className="bg-[#1D1AEF] text-white rounded-lg p-4 text-ml">
                <p className="uppercase mb-2 font-semibold tracking-wide opacity-50">Quand ?</p>
                <p>12 SEPT 2025<br />11h00 - 21h30</p>
              </div>
              <div className="bg-[#1D1AEF] text-white rounded-lg p-4 text-ml">
                <p className="uppercase mb-2 font-semibold tracking-wide opacity-50">Où ?</p>
                <p>Paris, France<br />Académie du Climat</p>
              </div>
              <div className="bg-[#1D1AEF] text-white rounded-lg p-4 text-ml">
                <p className="uppercase mb-2 font-semibold tracking-wide opacity-50">Pour qui ?</p>
                <p>Tout public</p>
              </div>
            </div>
          </div>


          {/* Section Équipe */}
          <section className="space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center rounded-lg bg-[#DAD6F0] p-4 h-48 ">
              <div>
                <p className="uppercase text-xs tracking-wide text-[#2400FF]">[équipe]</p>
                <h2 className="text-4xl font-bold text-[#2400FF] font-michroma mt-2">
                  RENCONTREZ L'ÉQUIPE OBLIQUE
                </h2>
              </div>
              <p className="max-w-md text-sm text-right text-[#2400FF] mt-2 md:mt-0">
                Découvrez les personnes passionnées derrière le festival. Une équipe pluridisciplinaire engagée pour la création émergente et les enjeux climatiques.
              </p>
            </div>
          </section>

          {/* Partenaires et événements */}
          <section className="space-y-2">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/preFooter.png"
                alt="Performance Oblique"
                className="w-full object-cover h-[800px] brightness-75"
              />
            </div>

            {/* Partenaires */}
            <div className="bg-[#E8E4FB] rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1D1AEF]">[PARTENAIRES]</p>
                  <h3 className="text-lg font-semibold text-[#1D1AEF]">ENGAGÉS À NOS CÔTÉS</h3>
                </div>
                <p className="text-right text-xs text-[#1D1AEF] max-w-xs">
                  Nos partenaires soutiennent la programmation artistique et nous accompagnent dans la création d’un festival engagé et inclusif.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#1D1AEF] text-white rounded-xl h-24 flex items-center justify-center">LOGO</div>
                <div className="bg-[#1D1AEF] text-white rounded-xl h-24 flex items-center justify-center">LOGO</div>
                <div className="bg-[#1D1AEF] text-white rounded-xl h-24 flex items-center justify-center">LOGO</div>
              </div>
            </div>

            {/* Ressources */}
            <div className="bg-[#1D1AEF] text-white rounded-xl p-6 space-y-4">
              <div className="flex flex-col justify-center items-center text-center gap-4">
                <p className="text-xs uppercase tracking-widest text-[#C5B9F6]">[ARCHIVES]</p>
                <h3 className="text-xl font-bold uppercase leading-tight">ÉDITIONS PRÉCÉDENTES<br />ET ARTISTES</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {/* <div className="bg-[#DAD6F0] text-[#1D1AEF] rounded-xl p-6 flex flex-col items-center justify-center">
                  <h4 className="text-lg font-bold">Oblique 2023</h4>
                  <button className="mt-2 text-xs border border-[#1D1AEF] px-3 py-1 rounded-full hover:bg-[#1D1AEF] hover:text-white transition">
                    Voir plus
                  </button>
                </div> */}
                <div className="bg-[#DAD6F0] text-[#1D1AEF] h-auto rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-2">
                  <h4 className="text-lg font-bold">Oblique 2024</h4>
                  <p className="text-sm ">
                    Une édition autour de la question : <strong>« Qu’est-ce que l’on garde ? »</strong><br />
                    Performances, danse, poésie, art visuel et engagement climatique au cœur de l’Académie du Climat.
                  </p>
                  <Link href="/previous-edition">
                    <button className="mt-2 text-xs border border-[#1D1AEF] px-3 py-1 rounded-full hover:bg-[#1D1AEF] hover:text-white transition">
                      Voir plus
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </section>
        </section>

        {/* Partie droite sticky */}
        <aside className="sticky flex flex-col top-2 self-start h-[100dvh] pb-4 gap-2">
          <div className="bg-[#1D1AEF] rounded-xl overflow-hidden relative group h-1/2">
            <img
              src="/images/about.png"
              alt="Découvrez Oblique"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-4 left-4 text-white z-10">
              <p className="uppercase text-sm mb-2">En savoir plus<br />sur Oblique</p>
              <Link href="/About">
                <button className="text-sm px-4 py-1 border border-white rounded-full hover:bg-white hover:text-[#1D1AEF] transition">
                  À propos
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-[#1D1AEF] h-1/2 p-4 rounded-xl flex flex-col items-start justify-start gap-4">
            <img src="/images/benevoles.png" className="h-3/5 w-full grayscale" alt="Bénévoles" />
            <div>
              <p className="uppercase text-4xl mb-2 text-white">Envie de nous rejoindre ?</p>
              <p className="text-sm mb-2 text-white">
                Participez à l'aventure Oblique ! Rejoignez l’équipe de bénévoles et contribuez à un événement culturel engagé et collectif.
              </p>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScRXG6gcvCU3WEO--ny6uaj5ow39xedH0c45mP3767Gq1WDjg/viewform">
                <button className="text-sm px-4 py-1 border border-white text-white rounded-full hover:bg-white hover:text-[#1D1AEF] transition">
                  Devenir bénévole
                </button>
              </Link>
            </div>

          </div>
        </aside>
      </div>

      {/* Footer avec contact */}
      <div className="p-2 w-full">
        <section className="w-full px-4 md:px-16 py-24 bg-[#E8E4FB] rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
            {/* Colonne gauche */}
            <div className="text-[#1D1AEF] space-y-2 max-w-md">
              <p className="text-xs uppercase tracking-widest">[NOUS ÉCRIRE]</p>
              <h2 className="text-5xl font-bold">RESTONS<br />EN CONTACT</h2>
              <div className="flex flex-wrap gap-2 mt-6">
                <a href="mailto:hello@oblique.com" className="border border-[#1D1AEF] px-4 py-2 rounded-full hover:bg-[#1D1AEF] hover:text-white transition text-sm">
                  HELLO@OBLIQUE.COM
                </a>
                <a href="https://www.linkedin.com/company/oblique-festival/" className="border border-[#1D1AEF] px-4 py-2 rounded-full hover:bg-[#1D1AEF] hover:text-white transition text-sm">
                  LINKEDIN
                </a>
                <a href="https://www.instagram.com/oblique_festival/" className="border border-[#1D1AEF] px-4 py-2 rounded-full hover:bg-[#1D1AEF] hover:text-white transition text-sm">
                  INSTAGRAM
                </a>
              </div>
            </div>

            {/* Colonne droite : formulaire */}
            <form className="bg-[#2400FF] text-white p-8 rounded-xl w-full max-w-2xl space-y-2">
              <h3 className="text-2xl font-semibold uppercase">Une question ?<br />Contactez-nous</h3>
              <div className="space-y-2">
                <label className="text-xs uppercase">Nom</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase">Email</label>
                <input
                  type="email"
                  placeholder="jean.dupont@email.com"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase">Message</label>
                <textarea
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded h-32 resize-none focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-white text-[#2400FF] rounded-full uppercase text-sm font-bold hover:bg-[#C5B9F6] transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
