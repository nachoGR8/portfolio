import {
  ArrowUpRight,
  Cpu,
  Database,
  GraduationCap,
  Mail,
  Network,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";
import { about, aboutFacts, education, experience, links, projects, skills } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export function About() {
  return (
    <Section id="sobre-mi" index="01" title="Sobre mí">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-ink/80">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className={i === 0 ? "text-xl text-ink sm:text-2xl sm:leading-snug" : ""}>{p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-card">
            {aboutFacts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 px-5 py-4">
                <dt className="font-mono text-xs text-muted">{f.label}</dt>
                <dd className="text-right text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experiencia" index="02" title="Experiencia" dark>
      <ol className="relative space-y-10 border-l border-white/15 pl-8 sm:pl-12">
        {experience.map((e, i) => (
          <li key={e.company} className="relative">
            <span
              aria-hidden
              className="absolute -left-[2.45rem] top-2 size-3 rounded-full border-2 border-ink bg-accent ring-4 ring-ink sm:-left-[3.45rem]"
            />
            <Reveal delay={i * 100}>
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-2xl font-semibold tracking-tight">{e.company}</h3>
                  <p className="font-mono text-xs text-white/50">
                    {e.kind} · {e.location}
                    {e.period ? ` · ${e.period}` : ""}
                  </p>
                </div>
                <p className="mt-1 text-accent [text-shadow:0_0_24px_rgb(61_90_254/0.6)]">{e.role}</p>
                <ul className="mt-5 space-y-3 text-white/75">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-white/40" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const skillIcons = [Terminal, Cpu, Database, Workflow, Wrench, Network];

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills & especialidades">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => {
          const Icon = skillIcons[i % skillIcons.length];
          return (
            <Reveal key={g.title} delay={(i % 2) * 90}>
              <div className="h-full rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_12px_30px_-18px_rgb(0_0_0/0.35)]">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-accent-soft text-accent">
                    <Icon className="size-[18px]" aria-hidden />
                  </span>
                  <h3 className="font-medium tracking-tight">{g.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-xs text-ink/80"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="proyectos" index="04" title="Proyectos seleccionados">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <article className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-[0_12px_30px_-18px_rgb(0_0_0/0.35)]">
              <p className="font-mono text-xs text-muted">{p.context}</p>
              <h3 className="mt-3 flex items-start justify-between gap-3 text-xl font-semibold leading-snug tracking-tight">
                {p.name}
                {p.href && (
                  <a href={p.href} aria-label={`Abrir ${p.name}`} className="text-muted hover:text-accent">
                    <ArrowUpRight className="size-5" />
                  </a>
                )}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/70">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-md bg-accent-soft px-2 py-1 font-mono text-[11px] text-accent">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={120}>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted">
          <GithubIcon className="size-4" />
          Más código y experimentos en
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-accent"
          >
            GitHub
          </a>
        </p>
      </Reveal>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="formacion" index="05" title="Formación">
      <div className="grid gap-5 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 90}>
            <div className="flex h-full gap-5 rounded-2xl border border-line bg-card p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-paper">
                <GraduationCap className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-xs text-accent">
                  {e.status} · {e.period}
                </p>
                <h3 className="mt-1 font-medium leading-snug tracking-tight">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const btn =
    "group inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium transition";
  return (
    <Section id="contacto" index="06" title="Hablemos" dark>
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-balance text-xl leading-relaxed text-white/75 sm:text-2xl">
            Si buscas a alguien con base en Python y DevOps que está dando el salto a la IA, o
            quieres colaborar en algo, me encantará escucharte.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} bg-accent text-white hover:bg-white hover:text-ink`}
            >
              <LinkedinIcon className="size-4" />
              Escríbeme por LinkedIn
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {links.email && (
              <a
                href={`mailto:${links.email}`}
                className={`${btn} border border-white/20 hover:border-white`}
              >
                <Mail className="size-4" />
                {links.email}
              </a>
            )}
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border border-white/20 hover:border-white`}
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
