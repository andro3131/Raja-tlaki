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

const koraki = [
  {
    title: "Pokličete ali napišete",
    body: "Pošljete tloris ali se zmenimo za ogled na objektu.",
  },
  {
    title: "Pisna ponudba",
    body: "Skupna ponudba za izolacijo in estrih, če ju izvedemo skupaj. Brez obveznosti.",
  },
  {
    title: "Polaganje izolacije",
    body: "Polaganje toplotne izolacije, PVC folije (oz. alu folije pri talnem gretju), čepaste folije ali stirobetona — odvisno od zahtev.",
  },
  {
    title: "Estrih",
    body: "Strojni estrih lahko vlivamo še isti dan ali dan po polaganju izolacije.",
  },
];

const prednosti = [
  {
    title: "Vse iz ene roke",
    body: "En izvajalec, en termin, ena ponudba. Brez koordinacije več podizvajalcev.",
  },
  {
    title: "Hitrejša izvedba",
    body: "Ker izolacijo polagamo isti dan kot estrih, ni čakanja na drugega izvajalca.",
  },
  {
    title: "Odgovornost na enem mestu",
    body: "Če bi se kaj pojavilo, se oglasimo. Ni 'ne ve se, kdo je naredil napako'.",
  },
];

const faqs = [
  {
    q: "Kakšne izolacije polagate?",
    a: "Standardno EPS 100 (ekspandiran polistiren) v debelinah po projektu, PVC folijo proti vlagi in čepasto folijo za vodenje cevi talnega gretja. Pri talnem gretju, ki leži direktno na stiroporu, namesto PVC folije uporabimo alu folijo med stiroporom in cevmi. Po potrebi tudi stirobeton kot lažja izravnalna plast.",
  },
  {
    q: "Ali izvedete tudi samo izolacijo, brez estriha?",
    a: "Da, lahko. Vendar je ekonomsko bolj smiselno kombinirati — pridemo z eno ekipo in ne zaračunamo posebej za prevoz in pripravo objekta.",
  },
  {
    q: "Kakšna je razlika med EPS 100 in čepasto folijo?",
    a: "EPS 100 je debelejša toplotna izolacija (ploščica iz polistirena), ki gre kot prvi sloj proti hladni podlagi. Čepasta folija je tanjša podlaga s kanali, ki vodijo cevi talnega gretja. Pri talnem gretju direktno na stiroporu vmes položimo še alu folijo, ki odbija toploto navzgor.",
  },
  {
    q: "Ali pridete tudi izven Kamnika?",
    a: "Da — delamo po vsej Sloveniji.",
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
              Zakaj izolacijo in estrih iz ene roke
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Pred vsakim novim estrihom je treba pripraviti podlago —
                toplotno izolacijo (EPS), PVC folijo proti vlagi in čepasto
                folijo, če gre na talno gretje. Pri talnem gretju direktno na
                stiroporu uporabimo alu folijo med stiroporom in cevmi.
                Pogosto izolacijo polaga drug izvajalec kot estrih, kar pomeni
                dva termina, dve ponudbi in deljeno odgovornost, če nekaj ne
                deluje.
              </p>
              <p>
                Pri nas dobite vse iz ene roke: izolacijo položimo isti dan ali
                dan pred izvedbo strojnega estriha. En izvajalec, en termin,
                ena odgovornost.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Prednosti izvedbe iz ene roke
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {prednosti.map((p) => (
                <div
                  key={p.title}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6"
                >
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Kako poteka izvedba
            </h2>
            <ol className="mt-10 grid md:grid-cols-4 gap-5">
              {koraki.map((step, i) => (
                <li
                  key={step.title}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-5"
                >
                  <div className="text-3xl font-bold text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-base font-bold text-[var(--color-primary)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
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
