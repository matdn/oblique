import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#F5F5FF] text-[#1D1AEF] font-sans">
            <div className="px-4 py-16 max-w-7xl mx-auto space-y-16">
                <h1 className="text-6xl font-bold uppercase text-center">
                    L&apos;Essence<br />du Festival
                </h1>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Bloc texte 01 */}
                    <div className="bg-[#E8E4FB] p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-widest">01 — ARTS VIVANTS</p>
                            <h2 className="text-3xl font-bold mb-4">Une rencontre physique et poétique</h2>
                            <p className="text-ml leading-relaxed">
                                Oblique Festival fait le choix des arts vivants en construisant une programmation variée autour de la musique, du théâtre, de la danse ou de la spoken poetry.
                                Les grands thèmes de l’époque, comme le dérèglement climatique ou la transformation numérique, résonnent dans nos corps.
                                Les arts vivants, par leur immédiateté, permettent une relation intense entre public et artistes, et ouvrent la voie à de nouveaux imaginaires.
                            </p>
                        </div>
                    </div>

                    {/* Image 01 */}
                    <div className="rounded-xl overflow-hidden">
                        <Image
                            src="/images/about1.png"
                            alt="Performance artistique"
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 02 */}
                    <div className="rounded-xl overflow-hidden">
                        <Image
                            src="/images/about2.png"
                            alt="Public du festival"
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bloc texte 02 */}
                    <div className="bg-[#DAD6F0] p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-widest">02 — SCÈNE ÉMERGENTE</p>
                            <h2 className="text-3xl font-bold mb-4">Un tremplin pour les nouvelles voix</h2>
                            <p className="text-ml leading-relaxed">
                                En laissant la parole à de jeunes artistes, Oblique explore d&apos;autres voies de narration.
                                C’est un festival pensé comme un partenaire dans leur trajectoire artistique, un lieu d’expérimentation et de liberté.
                                Oblique soutient des voix novatrices, en lien direct avec les enjeux de notre époque.
                            </p>
                        </div>
                    </div>

                    {/* Bloc texte 03 */}
                    <div className="bg-[#E8E4FB] p-6 rounded-xl flex flex-col justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-widest">03 — ARTS & SCIENCES</p>
                            <h2 className="text-3xl font-bold mb-4">Un dialogue entre disciplines</h2>
                            <p className="text-ml leading-relaxed">
                                Oblique crée des ponts entre artistes et scientifiques pour réinventer nos manières de penser.
                                Tables rondes, conférences et ateliers réunissent créateurs et penseurs autour de thématiques communes.
                                Ce dialogue réciproque nourrit les imaginaires collectifs et décloisonne les savoirs.
                            </p>
                        </div>
                    </div>

                    {/* Image 03 */}
                    <div className="rounded-xl overflow-hidden">
                        <Image
                            src="/images/about3.png"
                            alt="Conférence Arts & Sciences"
                            width={1200}
                            height={800}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* CTA ou bonus */}
                <div className="bg-[#1D1AEF] text-white p-8 rounded-xl text-center space-y-4">
                    <h2 className="text-4xl font-bold uppercase">Envie de découvrir Oblique ?</h2>
                    <p className="text-ml max-w-xl mx-auto">
                        Explore notre univers en assistant à la prochaine édition ou en visionnant les éditions précédentes.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 rounded-full bg-white text-[#1D1AEF] font-bold uppercase hover:bg-[#C5B9F6] transition"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
