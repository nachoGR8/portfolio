import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { hero, links, site } from "@/lib/data";
import Reveal from "./Reveal";

function Portrait() {
  if (links.photo) {
    return (
      <Image
        src={links.photo}
        alt={`Retrato de ${site.name}`}
        width={640}
        height={800}
        priority
        sizes="(min-width: 1024px) 380px, 70vw"
        className="aspect-[4/5] w-full rounded-3xl object-cover"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`Espacio para el retrato de ${site.name}`}
      className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white to-accent-soft"
    >
      <div className="absolute inset-0 grid-bg opacity-60" />
      <span className="relative font-mono text-7xl font-medium tracking-tighter text-ink/90 sm:text-8xl">
        IP<span className="text-accent">_</span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="glow pointer-events-none absolute -right-24 top-10 size-[34rem] rounded-full"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/80 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
              <span className="pulse-dot size-2 rounded-full bg-green-500" />
              {hero.status}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-mono text-sm text-accent">{site.name} · {hero.eyebrow}</p>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experiencia"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-accent"
              >
                Conoce mi trayectoria
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-sm font-medium transition hover:border-ink"
              >
                Contactar conmigo
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <Portrait />
            <div
              aria-hidden
              className="absolute -bottom-6 -left-4 w-[88%] rounded-2xl border border-line bg-ink p-4 font-mono text-[11px] leading-relaxed text-white/80 shadow-xl sm:-left-10 sm:text-xs"
            >
              <p className="text-white/40">~/ignacio</p>
              <p>
                <span className="text-accent">$</span> cat stack.txt
              </p>
              <p>python · fastapi · docker</p>
              <p>gitlab-ci · n8n · llama.cpp</p>
              <p>
                <span className="text-accent">$</span> next {"->"} machine-learning
                <span className="caret ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-white/80" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
