import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Link from "next/link";
import { ResumeCard } from "@/components/resume-card";
import { SURAH } from "@/data/resume";
import { Heart } from "lucide-react";
// import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
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
                text={`Al - Qur'an`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="Discover guidance and wisdom in the Quran with easy access and clear translations to deepen your understanding and connection."
              />
              <BlurFade
                delay={BLUR_FADE_DELAY}
              >
                <p className="text-xs flex items-center gap-1">created with <Heart color="red" size={12} /> by{" "}
                  <Link
                    href="https://tegar-kingofthejungle.vercel.app/"
                    className="text-blue-500 hover:underline"
                  >
                    tegar
                  </Link>{" "}</p>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section> */}
      <section id="surah">
        <div className="flex min-h-0 flex-col divide-y divide-dashed">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold mb-4 text-center">SURAH</h2>
          </BlurFade>
          {SURAH.map((surah, id) => (
            <BlurFade
              key={surah.nomor}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={surah.nomor}
                altText={surah.nama}
                title={surah.nama}
                subtitle={surah.arti}
                href={surah.nomor}
                period={`${surah.ayat} ayat`}
                asma={surah.asma}
              />
            </BlurFade>
          ))}
        </div>
      </section>
    </main>
  );
}