import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCTA } from "@/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Reference Raja-tlaki d.o.o. — Lek Mengeš, Celovški dvori, Hotel Union, Bazen Kolezija, Papirnica Količevo in drugi projekti po Sloveniji.",
};

const kategorije = [
  {
    naslov: "Veliki poslovni in industrijski objekti",
    projekti: [
      {
        ime: "Lek Mengeš",
        leto: "2025",
        opis: "Poslovni objekt — 3-nadstropna in 4-nadstropna stavba, skupaj 12.000 m². Strojni estrihi.",
      },
      {
        ime: "Papirnica Količevo",
        leto: "—",
        opis: "Fasada s cementnim strojnim ometom na 5 stavbah.",
      },
    ],
  },
  {
    naslov: "Bazeni in javni objekti",
    projekti: [
      {
        ime: "Hotel Union, Ljubljana",
        leto: "—",
        opis: "Estrih v bazenu v 8. nadstropju in naklonski estrih okrog bazena.",
      },
      {
        ime: "Bazen Kolezija, Ljubljana",
        leto: "—",
        opis: "Vgradnja in glajenje betona pri prenovi bazenov.",
      },
      {
        ime: "Dom upokojencev Prebold",
        leto: "2009",
        opis: "Strojni estrihi.",
      },
    ],
  },
  {
    naslov: "Stanovanjske gradnje",
    projekti: [
      {
        ime: "Celovški dvori, Ljubljana",
        leto: "2007",
        opis: "Strojni estrihi — eden naših prvih večjih objektov.",
      },
      {
        ime: "Stanovanjska stavba Zupančičeva jama, Ljubljana",
        leto: "—",
        opis: "Strojni estrihi v 6-nadstropni stanovanjski stavbi.",
      },
    ],
  },
];

const partnerji = [
  {
    ime: "Kograd Igem",
    opis: "Stalni poslovni partner iz Koroške — industrijski in poslovni objekti.",
  },
  {
    ime: "Pergola montažne hiše",
    opis: "Stalni partner za izvedbo strojnih estrihov in ometov v montažnih hišah.",
  },
];

export default function Reference() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Naše delo
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-[1.05]">
              Reference
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              Od velikih industrijskih objektov do enodružinskih hiš. Tukaj je
              izbor projektov, ki smo jih izvedli v zadnjih dveh desetletjih.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-14">
            {kategorije.map((k) => (
              <div key={k.naslov}>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                  {k.naslov}
                </h2>
                <ul className="mt-6 divide-y divide-[var(--color-border)] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden">
                  {k.projekti.map((p) => (
                    <li key={p.ime} className="px-5 sm:px-6 py-5">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                        <h3 className="text-lg font-bold text-[var(--color-text)]">
                          {p.ime}
                        </h3>
                        {p.leto !== "—" && (
                          <span className="text-sm font-semibold text-[var(--color-accent)] tabular-nums">
                            {p.leto}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-base text-[var(--color-text-muted)] leading-relaxed">
                        {p.opis}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Stalni poslovni partnerji
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              Ponavljajoča sodelovanja, kjer smo se izkazali kot zanesljiv
              izvajalec večletnih projektov.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {partnerji.map((p) => (
                <div
                  key={p.ime}
                  className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6"
                >
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">
                    {p.ime}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {p.opis}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-[var(--color-text-muted)]">
              Sodelujemo tudi z manjšimi gradbenimi podjetji po vsej Sloveniji.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Pogrešate projekt na seznamu?
            </h2>
            <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
              Naredili smo veliko več, kot je tu zapisano — če iščete referenco
              na konkreten objekt ali tip dela, vam ga z veseljem opišemo po
              telefonu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+38651349833"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold px-6 py-3 transition-colors"
              >
                051 349 833
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold px-6 py-3 transition-colors"
              >
                Pošljite vprašanje
              </Link>
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
