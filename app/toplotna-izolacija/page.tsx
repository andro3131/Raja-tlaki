import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { RelatedServices } from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Toplotna izolacija + stirobeton",
  description:
    "Polaganje toplotne izolacije in stirobetona kot priprava podloge pred estrihom. Vse iz ene roke — brez čakanja na drugega izvajalca.",
};

const faqs = [
  {
    q: "Kakšne izolacije polagate?",
    a: "Standardno EPS 100 (ekspandiran polistiren) v debelinah po projektu in PVC folijo proti vlagi. Po potrebi tudi stirobeton kot lažja izravnalna plast.",
  },
  {
    q: "Ali izvedete tudi samo izolacijo, brez estriha?",
    a: "Da, lahko. Vendar je ekonomsko bolj smiselno kombinirati — pridemo z eno ekipo in ne zaračunamo posebej za prevoz in pripravo objekta.",
  },
  {
    q: "Kje delamo?",
    a: "Delamo po vsej Sloveniji.",
  },
];

export default function ToplotnaIzolacija() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Storitev"
          title="Toplotna izolacija + stirobeton"
          subtitle="Polaganje toplotne izolacije in stirobetona kot priprava podloge pred estrihom. Vse iz ene roke — brez čakanja na drugega izvajalca."
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Polaganje izolacije
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Pred vsakim novim estrihom je treba pripraviti podlago —
              toplotno izolacijo (EPS), PVC folijo proti vlagi ali XPS za
              zunanje terase in balkone ter opcijsko kameno volno za boljšo
              zvočno izolacijo.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Pogosta vprašanja
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4 hover:bg-[var(--color-bg)]/50">
                    <span className="text-base font-semibold text-[var(--color-primary)]">
                      {f.q}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 mt-0.5 text-[var(--color-accent)] transition-transform group-open:rotate-45"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-[var(--color-text-muted)] leading-relaxed">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                Po dogovoru
              </p>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-[var(--color-primary)]">
                Hidroizolacija
              </h2>
              <p className="mt-3 text-base text-[var(--color-text-muted)] leading-relaxed">
                Občasno izvedemo tudi hidroizolacijo — predvsem v povezavi z
                estrihi in pripravo podlage. Če imate vprašanje glede konkretne
                izvedbe, nas pokličite.
              </p>
            </div>
          </div>
        </section>

        <ServiceCTA />
        <RelatedServices exclude="/toplotna-izolacija" />
      </main>
      <Footer />
    </>
  );
}
