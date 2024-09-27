"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { SURAH } from "@/data/resume";
import { getAyat } from "@/data/surah";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function SurahPage({ params }: { params: { id: string } }) {
    const surah = SURAH.find((surah) => surah.nomor === params.id);

    const [ayatData, setAyatData] = useState<[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAyat = async () => {
            setIsLoading(true);
            try {
                const data = await getAyat(params.id);
                if (!data) {
                    notFound();
                }
                setAyatData(data);
            } catch (error) {
                console.error("Failed to fetch ayat:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAyat();
    }, [params.id]);

    if (!surah) {
        notFound();
    }

    if (isLoading) {
        return <div className="flex items-center justify-center min-h-[100dvh]">Loading...</div>;
    }

    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10">
            <section id="hero">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="gap-2 flex justify-between">
                        <div className="flex-col flex flex-1 space-y-1.5">
                            <BlurFadeText
                                delay={BLUR_FADE_DELAY}
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                yOffset={8}
                                text={surah?.nama ?? '-'}
                            />
                            <BlurFadeText
                                className="max-w-[600px] text-sm"
                                delay={BLUR_FADE_DELAY}
                                text={surah?.keterangan ?? '-'}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="ayat">
                <div className="flex min-h-0 flex-col gap-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                        <h2 className="text-xl font-bold">Ayat</h2>
                    </BlurFade>
                    <div className="flex flex-col gap-12 divide-y divide-dashed">
                        {
                            (ayatData?.length ?? 0) > 0 ? (
                                ayatData?.map((ayat: any, index: number) => (
                                    <BlurFade key={index} delay={BLUR_FADE_DELAY * (index + 6)} className="pt-8">
                                        <p className="text-3xl text-right">{ayat.nomor == '1' && params.id != '1' ? ayat.ar.replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '') : ayat.ar}</p>
                                        <p className="text-sm mt-4" dangerouslySetInnerHTML={{ __html: ayat.tr }}></p>
                                        <p className="text-sm text-muted-foreground mt-2">{ayat.id}</p>
                                    </BlurFade>
                                ))
                            ) : (
                                <p>Tidak ada data ayat yang tersedia.</p>
                            )
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}
