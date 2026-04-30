import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { RelatedServices } from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Industrijski tlaki s kvarcom — za hale in poslovne prostore",
  description:
    "Glajen beton s kvarcom za proizvodne hale, delavnice in poslovne prostore. Trpežna površina, ki prenese težo viličarjev in obrat strojev.",
};

const uporaba = [
  {
    title: "Proizvodne hale",
    body: "Površina prenese težo viličarjev in stalni obrat strojev brez prahu in obraba.",
  },
  {
    title: "Logistični centri",
    body: "Ravna, kompaktna podlaga za police, transport in dnevni promet vozil.",
  },
  {
    title: "Delavnice in servisi",
    body: "Odpornost na olja, mehanske udarce in pogosto čiščenje.",
  },
  {
    title: "Poslovni prostori",
    body: "Estetska, gladka in trpežna površina, ki ne potrebuje dodatnih oblog.",
  },
  {
    title: "Garaže in parkirišča",
    body: "Naklonski estrih za odvodnjavanje, odporen na soljenje in zmrzal.",
  },
  {
    title: "Kmetijska poslopja",
    body: "Lahko čistljiva in trpežna podlaga za hleve, skladišča, gospodarska poslopja.",
  },
];

const koraki = [
  {
    title: "Ogled in projekt",
    body: "Pregledamo objekt, preverimo dostope, pripravo in zahteve obremenitve.",
  },
  {
    title: "Tehnična ponudba",
    body: "Predlagamo debelino plošče, sestavo betonske mešanice in razpored dilatacij.",
  },
  {
    title: "Vlivanje",
    body: "Beton dovedemo s črpalko ali mikserjem in razlijemo po pripravljeni armaturi.",
  },
  {
    title: "Glajenje s kvarcom",
    body: "V svežo betonsko maso vsipamo kvarcni utrjevalec in večkratno strojno gladimo do gladke, sijajne površine.",
  },
  {
    title: "Sušenje + zaščita",
    body: "Po izvedbi nego betona za enakomerno sušenje. Površino lahko po želji impregniramo.",
  },
];

const reference = [
  "Lek Mengeš (2025) — poslovni objekt, 3 in 4 nadstropja, skupaj 12.000 m²",
  "Bazen Kolezija, Ljubljana — vgradnja in glajenje betona pri prenovi",
  "Hotel Union, Ljubljana — bazen v 8. nadstropju in naklonski beton okolico",
  "Stalno sodelovanje s Kograd Igem (Koroška) — industrijski objekti",
];

const faqs = [
  {
    q: "Kaj pomeni 'glajenje s kvarcom'?",
    a: "V svežo betonsko maso vsipamo posebno mešanico s kvarčnim peskom in cementom (utrjevalec površine). Z večkratnim strojnim glajenjem ta mešanica utrdi zgornji sloj betona — dobimo trpežno, gosto, gladko in sijajno površino brez prahu, ki prenese težo viličarjev in stalni obrat strojev. To je ena izvedba 'iz enega kosa', brez dodatnih oblog.",
  },
  {
    q: "Kakšne obremenitve prenese?",
    a: "Industrijski tlak s kvarcom je dimenzioniran za logistično in proizvodno rabo — viličarji, težka skladiščna oprema, stroji s stalnim obratom. Konkretne nosilnosti določimo po projektu glede na debelino plošče in armaturo.",
  },
  {
    q: "Ali je primeren za zunanje površine?",
    a: "Standardna izvedba je za notranje hale. Za zunanje površine (parkirišča, dovozi) prilagodimo recepturo in dodamo zaščito proti zmrzali in soljenju.",
  },
  {
    q: "V kakšnih kvadraturah delate?",
    a: "Izvedli smo posamezne objekte preko 12.000 m² (Lek Mengeš). Tako manjše delavnice (cca 100 m²) kot velike industrijske hale — mobilna oprema in 6-člana ekipa to obvladata.",
  },
  {
    q: "Sodelujete z investitorji in gradbenimi izvajalci?",
    a: "Da. Naša stalna partnerja sta Kograd Igem in Pergola montažne hiše, sodelujemo pa tudi z manjšimi gradbenimi podjetji po vsej Sloveniji.",
  },
  {
    q: "Kakšna je cena?",
    a: "Cena je odvisna od kvadrature, debeline plošče, armature, dostopnosti objekta in zahtev po obremenitvi. Za realno številko potrebujemo projekt ali ogled — ponudba je brezplačna.",
  },
];

export default function IndustrijskiTlaki() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Storitev"
          title="Industrijski tlaki s kvarcom"
          subtitle="Glajen beton s kvarcom za proizvodne hale, delavnice in poslovne prostore. Trpežna površina, ki prenese težo viličarjev in stalni obrat strojev."
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Kaj je industrijski tlak s kvarcom?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Industrijski tlak s kvarcom je betonska plošča, kateri zgornji
                sloj{" "}
                <strong className="text-[var(--color-text)]">
                  utrdimo s kvarčnim peskom
                </strong>{" "}
                in z večkratnim strojnim glajenjem dobimo gosto, gladko, sijajno
                površino.
              </p>
              <p>
                Razlika od navadnega estriha: tlak je dimenzioniran za{" "}
                <strong className="text-[var(--color-text)]">
                  logistično in proizvodno rabo
                </strong>{" "}
                — prenese viličarje, težko skladiščno opremo in stroje s stalnim
                obratom. Brez prahu, brez dodatnih oblog.
              </p>
              <p>
                Izvajamo ga tako za novogradnje hal in poslovnih objektov kot za
                prenove starih industrijskih površin.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Za kakšne objekte je primeren
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {uporaba.map((u) => (
                <div
                  key={u.title}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6"
                >
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {u.body}
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
            <ol className="mt-10 grid md:grid-cols-5 gap-5">
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
              Kje smo že delali industrijske tlake
            </h2>
            <ul className="mt-8 divide-y divide-[var(--color-border)]">
              {reference.map((r) => (
                <li key={r} className="py-3 flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span className="text-base text-[var(--color-text)]">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 sm:py-20">
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

        <ServiceCTA />
        <RelatedServices exclude="/industrijski-tlaki" />
      </main>
      <Footer />
    </>
  );
}
