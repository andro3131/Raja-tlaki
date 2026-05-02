import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { RelatedServices } from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Strojni ometi — Baumit Ratio 26",
  description:
    "Notranji omet z Baumit Ratio 26 — enoslojni mavčno-apneno-cementni omet. Primeren tudi za kopalnice in kuhinje. Strojno nanesen, gladek, brez razpok.",
};

const koraki = [
  {
    title: "Pokličete ali napišete",
    body: "Po telefonu se zmeniva za ogled na objektu, ali nam pošljete tloris po e-pošti.",
  },
  {
    title: "Pisna ponudba",
    body: "Konkretna ponudba s količinami in rokom. Brez obveznosti.",
  },
  {
    title: "Priprava objekta",
    body: "Pripravite dovod 380 V, tekočo vodo in dostop za silos. Stene morajo biti suhe in obrise.",
  },
  {
    title: "Strojni nanos",
    body: "Z Baumitovim silosom na objektu mešamo in nanašamo omet. Površino takoj poravnamo.",
  },
  {
    title: "Po izvedbi",
    body: "Stene pustimo, da se omet ravnomerno suši. Točen rok do barvanja vam povemo na objektu.",
  },
];

const priprava = [
  "Dovod 380 V (trifazni priklop, 16 A) za mešalno enoto.",
  "Tekoča voda — vrtna pipa ali interni priklop.",
  "Dostop za silos in tovornjak.",
  "Suhe stene, brez prahu in obrise.",
  "Zaščitene vse instalacije in odprtine, ki ne smejo dobiti ometa.",
];

const reference = [
  "Papirnica Količevo — fasada s cementnim strojnim ometom (5 stavb)",
  "Stanovanjska stavba Zupančičeva jama, Ljubljana",
  "Številne enodružinske hiše po Sloveniji v partnerstvu s Pergola montažnimi hišami",
];

const faqs = [
  {
    q: "Kaj je Baumit Ratio 26 in zakaj ga uporabljate?",
    a: "Baumit Ratio 26 (oznaka tudi MPI 26) je enoslojni mavčno-apneno-cementni notranji omet z zrnavostjo 1 mm. Primeren je za bivalne prostore, kjer rabite gladko podlago za barvanje, in tudi za prostore s povišano vlažnostjo — kopalnice, kuhinje, kleti. Strojni nanos je hitrejši in enakomernejši od ročnega.",
  },
  {
    q: "Ali je primeren za kopalnice in kuhinje?",
    a: "Da. Baumit Ratio 26 je formuliran tako, da prenese povišano vlažnost gospodinjskih kopalnic, kuhinj in kleti. Za stalno mokre cone v kopalnici (območje tuša) priporočamo dodatno hidroizolacijo pod ploščicami.",
  },
  {
    q: "Koliko traja sušenje pred barvanjem?",
    a: "Standardno priporočilo je približno 1 cm debeline = 1 teden sušenja, ob normalnih pogojih (~20 °C, redno zračenje). Točen rok povemo na objektu glede na debelino in pogoje.",
  },
  {
    q: "Ali delate tudi zunanje ometov in fasade?",
    a: "Da — referenca papirnica Količevo je fasada s cementnim strojnim ometom na 5 stavbah. Pokličite za konkretno ponudbo.",
  },
  {
    q: "Kakšna je cena?",
    a: "Cena je odvisna od kvadrature, debeline, dostopnosti objekta in priprave podlage. Za realno številko potrebujemo tloris ali kratek ogled — ponudba je brezplačna.",
  },
];

export default function StrojniOmeti() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Storitev"
          title="Strojni ometi"
          subtitle="Notranji omet z Baumit Ratio 26 — gladek, enakomerno nanesen, primeren tudi za vlažne prostore. Iz Kamnika delamo po vsej Sloveniji."
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Kaj je strojni omet?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Strojni omet je notranji omet, ki ga z mešalno enoto in silosom
                nanesemo strojno, ne ročno z žlico. Mešanica je{" "}
                <strong className="text-[var(--color-text)]">
                  enakomerna in z natančno količino vode
                </strong>
                , zato je manj možnosti za razpoke, neravnine ali šibke odseke.
              </p>
              <p>
                Uporabljamo material{" "}
                <strong className="text-[var(--color-text)]">
                  Baumit Ratio 26
                </strong>{" "}
                (znan tudi kot MPI 26) — enoslojni mavčno-apneno-cementni omet
                z zrnavostjo 1 mm. Primeren je tudi za prostore s povišano
                vlažnostjo, kot so gospodinjske kopalnice, kuhinje in kleti.
              </p>
              <p>
                Po nanosu površino takoj poravnamo — stene niso potrebne
                kitanja, pripravljene so za barvanje.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Material — Baumit Ratio 26 / MPI 26
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Spec label="Tip" value="Enoslojni notranji omet" />
              <Spec label="Sestava" value="Mavčno-apneno-cementna" />
              <Spec label="Zrnavost" value="1 mm" />
              <Spec
                label="Primernost"
                value="Bivalni prostori, kopalnice, kuhinje, kleti"
              />
              <Spec label="Nanos" value="Strojni — silos + mešalna enota" />
              <Spec label="Površina" value="Gladka, pripravljena za barvo" />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Načini zaključka
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Pri strojnem ometu lahko izberete dva tipa zaključka, glede na to,
              kako gladke stene želite in kakšen je proračun.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  Klasično zaribane stene
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Stene zaribamo s standardnim postopkom. Po sušenju površinska
                  zrnca pobrusimo z žirafo (brusilnik na palici) in stene
                  direktno prepleskate.
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                  Hitreje, ekonomično
                </p>
              </div>

              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  Gladke stene z metuljčkom
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Omet poravnamo s posebnim dleterjem — t. i. metuljčkom. Stene
                  so bolj gladke, izvedba pa porabi manj časa in izravnalne
                  mase za morebitno kitanje.
                </p>
                <p className="mt-3 text-xs uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                  Visok standard videza
                </p>
              </div>
            </div>

            <p className="mt-6 text-base text-[var(--color-text-muted)]">
              Za visok končni standard priporočamo gladke stene z metuljčkom.
              Za standardne bivalne prostore je klasična izvedba povsem
              zadostna.
            </p>
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
              Kaj morate pripraviti
            </h2>
            <ul className="mt-8 space-y-3">
              {priprava.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] px-4 py-3"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5 text-[var(--color-accent)]"
                  >
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  <span className="text-base text-[var(--color-text)]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Kje smo že delali ometov
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

        <ServiceCTA />
        <RelatedServices exclude="/strojni-ometi" />
      </main>
      <Footer />
    </>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-4">
      <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-medium">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold text-[var(--color-primary)]">
        {value}
      </p>
    </div>
  );
}
