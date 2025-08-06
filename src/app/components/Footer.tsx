"use client";

export default function Footer() {
    return (
        <footer className="bg-[#1D1AEF] text-white py-12 px-6 md:px-16 rounded-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div className="space-y-3">
                    <h3 className="uppercase text-sm tracking-widest opacity-70">OBLIQUE FESTIVAL</h3>
                    <p className="text-sm leading-relaxed opacity-90">
                        Un festival interdisciplinaire mêlant arts visuels, musique et performances. Une invitation à explorer de nouveaux imaginaires.
                    </p>
                </div>

                {/* Navigation */}
                <div className="space-y-3">
                    <h3 className="uppercase text-sm tracking-widest opacity-70">Navigation</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Accueil</a></li>
                        <li><a href="#" className="hover:underline">À propos</a></li>
                        <li><a href="#" className="hover:underline">Événements</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Réseaux sociaux */}
                <div className="space-y-3">
                    <h3 className="uppercase text-sm tracking-widest opacity-70">Suivez-nous</h3>
                    <div className="flex gap-2 flex-wrap">
                        <a href="#" className="border border-white px-4 py-2 rounded-full text-xs hover:bg-white hover:text-[#1D1AEF] transition">
                            INSTAGRAM
                        </a>
                        <a href="#" className="border border-white px-4 py-2 rounded-full text-xs hover:bg-white hover:text-[#1D1AEF] transition">
                            LINKEDIN
                        </a>
                        <a href="mailto:hello@oblique.com" className="border border-white px-4 py-2 rounded-full text-xs hover:bg-white hover:text-[#1D1AEF] transition">
                            EMAIL
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs mt-12 opacity-50 uppercase">
                © {new Date().getFullYear()} Oblique Festival. Tous droits réservés.
            </div>
        </footer>
    );
}
