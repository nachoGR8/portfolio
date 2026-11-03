import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  children,
  dark = false,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={dark ? "bg-ink text-paper" : ""}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className={`font-mono text-xs ${dark ? "text-white/50" : "text-muted"}`}>
            <span className="text-accent">{index}</span> / {id.replace("-", " ")}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {title}
          </h2>
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
