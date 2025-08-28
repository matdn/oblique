import Footer from "@/app/components/Footer";
import { artists2023 } from "@/app/data/2023Artists";
import Image from "next/image";
import { notFound } from "next/navigation";


interface ArtistPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return artists2023.map((artist) => ({
        slug: artist.slug,
    }));
}

export default function ArtistPage({ params }: ArtistPageProps) {
    const artist = artists2023.find((a) => a.slug === params.slug);

    if (!artist) return notFound();

    return (
        <main className="min-h-screen bg-[#F5F5FF] text-[#1D1AEF] pt-16 pb-2 px-4">
            <div className="max-w-5xl mx-auto space-y-8">
                <a href="/previous-edition" className="inline-block mt-8 text-sm underline">
                    ← Retour à l&apos;édition 2024
                </a>

                {artist.image && (
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            src={artist.image}
                            alt={artist.name}
                            width={800}
                            height={500}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                )}

                <h1 className="text-4xl font-bold uppercase">{artist.name}</h1>
                <p className="text-base whitespace-pre-line mb-20">{artist.full}</p>
            </div>
            <Footer />
        </main>
    );
}