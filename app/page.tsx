import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { About, Contact, Education, Experience, Projects, Skills } from "@/components/Sections";
import { links, site } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
  address: { "@type": "PostalAddress", addressLocality: "L'Alcúdia", addressCountry: "ES" },
  sameAs: [links.linkedin, links.github],
};

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-[60] rounded-md bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-ink text-white/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-8 font-mono text-xs sm:flex-row sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Hecho con Next.js, TypeScript y Tailwind</p>
        </div>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
