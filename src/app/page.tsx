// app/page.tsx ou pages/index.tsx
import Image from "next/image";
import Footer from "./components/Footer";

const visionaries = [
  {
    name: "Victor Le Calvez",
    role: "Co Président",
    image: "/images/victor.png",
  },
  {
    name: "Eve Thine",
    role: "Co Présidente",
    image: "/images/eve.png",
  },
  {
    name: "Camille Jeorger",
    role: "Co Présidente",
    image: "/images/camille.png",
  },
  {
    name: "Pénélope de la Peschardière",
    role: "Co Présidente",
    image: "/images/penelope.png",
  },
  {
    name: "Lousie Brockmeier",
    role: "Co Présidente",
    image: "/images/basile.png",
  },
  {
    name: "Lousie Brockmeier",
    role: "Co Présidente",
    image: "/images/louise.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-[#1D1AEF] font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mx-auto p-4 md:p-8">
        {/* Partie gauche (scrollable) */}
        <section className="flex flex-col overflow-y-auto pb-12 space-y-8 w-[70dvw] uppercase">
          {/* Hero Section */}
          <div>
            <div className="bg-[#DAD6F0] rounded-lg p-6 h-[70dvh] flex flex-col justify-center items-center text-center">
              <p className="uppercase text-sm tracking-widest text-[#1D1AEF]">
                [arts pictural / danse / musique]
              </p>
              <h1 className="text-8xl font-bold leading-tight">REFUGES</h1>
              <h2 className="text-2xl font-semibold">
                L’ÉDITION 2025 D’OBLIQUE FESTIVAL<br />ARRIVE VITE
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 h-[15dvh]">
              <div className="bg-[#1D1AEF] text-white rounded-lg p-4 text-ml">
                <p className="uppercase mb-2 font-semibold tracking-wide opacity-50">Quand ?</p>
                <p>12 SEPT 2025<br />11h00 - 21h30</p>
              </div>
              <div className="bg-[#1D1AEF] text-white rounded-lg p-4 text-ml">
                <p className="uppercase mb-2 font-semibold tracking-wide opacity-50">Où ça ?</p>
                <p>Paris, France<br />Académie du Climat</p>
              </div>
              <div className="bg-[#1D1AEF] text-white rounded-lg p-4 text-ml">
                <p className="uppercase mb-2 font-semibold tracking-wide opacity-50">Pour qui ?</p>
                <p>Tout publique</p>
              </div>
            </div>
          </div>

          {/* Visionaries Section */}
          <section className="space-y-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center rounded-lg bg-[#DAD6F0] p-4 h-48 ">
              <div>
                <p className="uppercase text-xs tracking-wide text-[#2400FF]">[Speakers]</p>
                <h2 className="text-4xl font-bold text-[#2400FF] font-michroma mt-2">
                  MEET THE VISIONARIES
                </h2>
              </div>
              <p className="max-w-md text-sm text-right text-[#2400FF] mt-4 md:mt-0">
                Explore our lineup of keynote speakers and industry leaders who will inspire and enlighten at the conference.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visionaries.map((person, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={600}
                    height={800}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#2400FF] opacity-30 mix-blend-multiply pointer-events-none" />

                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#2200ff7a] to-transparent p-4 text-white flex flex-col justify-end">
                    <p className="text-sm font-semibold uppercase">{person.name}</p>
                    <p className="text-xs uppercase opacity-70">{person.role}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </section>
          {/* Section PARTENAIRES ET ÉVÉNEMENTS */}
          <section className=" min-h-[60dvh] space-y-6">

            {/* PARTNERS */}
            <div className="bg-[#E8E4FB] rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#1D1AEF]">[PARTNERS]</p>
                  <h3 className="text-lg font-semibold text-[#1D1AEF]">PARTNERS IN INNOVATION</h3>
                </div>
                <p className="text-right text-xs text-[#1D1AEF] max-w-xs">
                  Meet the organizations fueling our event. Our sponsors are leaders in tech, helping us create an extraordinary experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-[#1D1AEF] text-white rounded-xl h-24 flex items-center justify-center">LOGO</div>
                <div className="bg-[#1D1AEF] text-white rounded-xl h-24 flex items-center justify-center">LOGO</div>
                <div className="bg-[#1D1AEF] text-white rounded-xl h-24 flex items-center justify-center">LOGO</div>
              </div>
            </div>

            {/* RESSOURCES */}
            <div className="bg-[#1D1AEF] text-white rounded-xl p-6 space-y-2">
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-xs uppercase tracking-widest text-[#C5B9F6]">[RESOURCES]</p>
                <h3 className="text-xl font-bold uppercase leading-tight">Événements passés<br />et artistes</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#DAD6F0] text-[#1D1AEF] rounded-xl p-6 flex flex-col items-center justify-center">
                  <h4 className="text-lg font-bold">Oblique 2023</h4>
                  <button className="mt-2 text-xs border border-[#1D1AEF] px-3 py-1 rounded-full hover:bg-[#1D1AEF] hover:text-white transition">
                    Voir plus
                  </button>
                </div>
                <div className="bg-[#DAD6F0] text-[#1D1AEF] rounded-xl p-6 flex flex-col items-center justify-center">
                  <h4 className="text-lg font-bold">Oblique 2024</h4>
                  <button className="mt-2 text-xs border border-[#1D1AEF] px-3 py-1 rounded-full hover:bg-[#1D1AEF] hover:text-white transition">
                    Voir plus
                  </button>
                </div>
              </div>
            </div>

            {/* IMAGE ARTISTE */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/preFooter.png"
                alt="Performance Oblique"
                className="w-full object-cover h-[800px] brightness-75"
              />
            </div>

          </section>

        </section>

        {/* Partie droite (sticky) */}
        <aside className="sticky top-8 self-start h-[100dvh]">
          <div className="bg-[#1D1AEF] rounded-xl overflow-hidden relative group h-[60dvh]">
            <img
              src="/images/about.png"
              alt="Découvrez Oblique"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute bottom-4 left-4 text-white z-10">
              <p className="uppercase text-sm mb-2">Découvrez<br />Oblique</p>
              <button className="text-sm px-4 py-1 border border-white rounded-full hover:bg-white hover:text-[#1D1AEF] transition">
                À propos
              </button>
            </div>
          </div>
          <div className="bg-[#1D1AEF] h-[35dvh] rounded-xl">
            <img src="" alt="" />
            <p className="uppercase text-sm mb-2">Découvrez<br />Oblique</p>
            <button className="text-sm px-4 py-1 border border-white rounded-full hover:bg-white hover:text-[#1D1AEF] transition">
              À propos
            </button>
          </div>
        </aside>
      </div>

      <div className="p-8 w-full">
        <section className="w-[full] px-4 md:px-16 py-24 bg-[#E8E4FB] rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto">
            {/* Colonne gauche */}
            <div className="text-[#1D1AEF] space-y-4 max-w-md">
              <p className="text-xs uppercase tracking-widest">[CONTACT US]</p>
              <h2 className="text-5xl font-bold">NOUS<br />CONTACTER</h2>
              <div className="flex flex-wrap gap-2 mt-6">
                <a href="mailto:hello@oblique.com" className="border border-[#1D1AEF] px-4 py-2 rounded-full hover:bg-[#1D1AEF] hover:text-white transition text-sm">
                  HELLO@OBLIQUE.COM
                </a>
                <a href="#" className="border border-[#1D1AEF] px-4 py-2 rounded-full hover:bg-[#1D1AEF] hover:text-white transition text-sm">
                  LINKEDIN
                </a>
                <a href="#" className="border border-[#1D1AEF] px-4 py-2 rounded-full hover:bg-[#1D1AEF] hover:text-white transition text-sm">
                  INSTAGRAM
                </a>
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <form className="bg-[#2400FF] text-white p-8 rounded-xl w-full max-w-2xl space-y-4">
              <h3 className="text-2xl font-semibold uppercase">Vous avez une question ?<br />Restons en contact !</h3>
              <div className="space-y-2">
                <label className="text-xs uppercase">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase">Message</label>
                <textarea
                  placeholder="Comment peut-on vous aider ?"
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