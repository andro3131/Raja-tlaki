import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceCTA } from "@/components/ServiceCTA";
import { RelatedServices } from "@/components/RelatedServices";

export const metadata: Metadata = {
  title: "Strojni estrihi po vsej Sloveniji",
  description:
    "Cementni strojni estrih za talno gretje, naklone in mansarde. Iz Kamnika delamo po vsej Sloveniji, z lastnim strojem za mešanje in betonsko črpalko.",
};

const debelina = [
  {
    tip: "Na talno gretje + EPS 100 + alu folija",
    debelina: "6–7 cm",
    opis: "Najbolj pogost izbor pri novogradnjah s talnim gretjem.",
  },
  {
    tip: "Na čepasto folijo (talno gretje)",
    debelina: "~5 cm",
    opis: "Tanjša izvedba, kjer je višinski profil omejen.",
  },
  {
    tip: "Naklonski estrih okoli hiše",
    debelina: "po projektu",
    opis: "Za odvodnjavanje, terase in hišne dovoze.",
  },
  {
    tip: "Estrih v mansardi",
    debelina: "po projektu",
    opis: "Lažje izvedbe na lesenih ali laganih konstrukcijah.",
  },
];

const koraki = [
  {
    title: "Pokličete ali napišete",
    body: "Po telefonu se zmeniva za ogled na objektu, ali nam pošljete tloris po e-pošti.",
  },
  {
    title: "Pisna ponudba",
    body: "V nekaj dneh dobite konkretno ponudbo s količinami, debelino in rokom izvedbe. Brez obveznosti.",
  },
  {
    title: "Termin",
    body: "Dogovorimo se za datum. V tem času pripravite objekt.",
  },
  {
    title: "Dan izvedbe",
    body: "Pripeljemo material (pesek in cement), stroj za mešanje, betonsko črpalko in ekipo. Strojno zmešamo, zalijemo in zgladimo. Povprečna hiša traja 1 dan.",
  },
  {
    title: "Sušenje",
    body: "Estrih se suši po standardnih krivuljah. Točen rok za polaganje ploščic ali parketa vam povemo po izvedbi.",
  },
];

const priprava = [
  "Dovod 380 V (trifazni priklop, 16 A) — za črpalko in mešalno enoto.",
  "Tekoča voda — vrtna pipa ali interni priklop.",
  "Dostop za tovornjak in stroj za mešanje — potrebujemo prostor za parkiranje in postavitev opreme.",
  "Pripravljena podlaga — toplotna izolacija (EPS), PVC folija in po potrebi čepasta folija pri talnem gretju.",
];

const reference = [
  "Lek Mengeš (2025) — poslovni objekt, 12.000 m²",
  "Celovški dvori, Ljubljana (2007) — eden naših prvih večjih projektov",
  "Dom upokojencev Prebold (2009)",
  "Hotel Union, Ljubljana — bazen v 8. nadstropju in okolica",
  "Stanovanjska stavba Zupančičeva jama, Ljubljana — 6-nadstropna gradnja",
];

const faqs = [
  {
    q: "Koliko časa sušenja pred polaganjem ploščic?",
    a: "Pri standardni debelini 6–7 cm računamo nekje 1 cm = približno 1 teden. Tlak za ploščice je torej pripravljen v 6 do 8 tednih, odvisno od prostora in temperature. Točen rok povemo po izvedbi.",
  },
  {
    q: "Ali estrih razpoka?",
    a: "Pri pravilno izvedenem strojnem estrihu z dilatacijami na pravih mestih razpok ne pričakujemo. Dilatacije postavimo v skladu s projektom in debelino plošče.",
  },
  {
    q: "Kdaj lahko hodim po estrihu?",
    a: "Previdno že po 24–48 urah. Polna obremenitev (gradbeno orodje, material) po približno enem tednu.",
  },
  {
    q: "Ali pridete tudi izven Kamnika?",
    a: "Da — delamo po vsej Sloveniji. Iz Kamnika do Kopra, Maribora ali Lendave ni težave. Velikost ekipe in mobilna oprema sta narejena za to.",
  },
  {
    q: "Kakšna je cena?",
    a: "Cena je odvisna od kvadrature, debeline, dostopnosti objekta in priprave podlage. Za realno številko potrebujemo tloris ali kratek ogled — ponudba je brezplačna.",
  },
  {
    q: "Kaj če se po izvedbi vseeno kaj pojavi?",
    a: "Beton, ki ga zalijemo, drži desetletja. Če bi vseeno nastala kakšna težava, se oglasimo in pogledamo skupaj.",
  },
];

export default function StrojniEstrihi() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Storitev"
          title="Strojni estrihi"
          subtitle="Cementni strojni estrih za novogradnje in prenove. Iz Kamnika delamo po vsej Sloveniji, z lastnim strojem za mešanje in betonsko črpalko."
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Kaj je strojni estrih?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Strojni estrih je estrih, ki ga zalijemo s pomočjo{" "}
                <strong className="text-[var(--color-text)]">
                  stroja za mešanje in betonske črpalke
                </strong>
                , ne pa ročno z mešanjem v betonjerki.
              </p>
              <p>
                Material — pesek in cement — pripeljemo na objekt. V stroju ga
                zmešamo z natančno količino vode in z betonsko črpalko
                transportiramo do prostora, kjer estrih zalijemo in zgladimo.
              </p>
              <p>
                Razlika od ročnega je velika. Strojno mešana cementna mešanica
                je bolj enotna, gostejša in bolj raven. Po izvedbi dobite
                gladek, kompakten tlak, na katerega lahko v predvidenih rokih
                položite ploščice, parket ali vinil — brez dodatnega
                samo-razlivnega izravnalnega sloja.
              </p>
              <p>
                Strojno polaganje je hitrejše:{" "}
                <strong className="text-[var(--color-text)]">
                  povprečno hišo zalijemo v enem dnevu
                </strong>
                , ne v treh.
              </p>
              <p className="text-sm">
                <em>
                  Možna je tudi izvedba preko silosa, vendar je dražja in jo
                  redko uporabljamo — naša standardna izvedba je s strojem za
                  mešanje na objektu.
                </em>
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Katero debelino izberete
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <table className="w-full text-left">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-sm font-semibold">
                      Tip
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-sm font-semibold">
                      Debelina
                    </th>
                    <th className="hidden md:table-cell px-4 sm:px-6 py-3 text-sm font-semibold">
                      Opis
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {debelina.map((d) => (
                    <tr key={d.tip}>
                      <td className="px-4 sm:px-6 py-4 text-sm font-medium text-[var(--color-text)]">
                        {d.tip}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-sm font-bold text-[var(--color-primary)]">
                        {d.debelina}
                      </td>
                      <td className="hidden md:table-cell px-4 sm:px-6 py-4 text-sm text-[var(--color-text-muted)]">
                        {d.opis}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-base text-[var(--color-text-muted)]">
              Če niste prepričani, kaj potrebujete — pokličite. Iz tlorisa ali
              na kratkem ogledu hitro povemo.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Vezani estrih in drseči (plavajoči) estrih
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Dve osnovni izvedbi strojnega estriha. Pravi izbor je odvisen od
              podlage, obremenitev in tega, ali greste na talno gretje.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  Vezani estrih
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Nanesen direktno na betonsko podlago, brez ločilnega sloja.
                  Tanjše izvedbe (običajno 3–5 cm), hitrejši in cenejši — primeren
                  za prostore z manjšimi obremenitvami in stabilno podlago.
                </p>
              </div>
              <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)]">
                  Drseči (plavajoči) estrih
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  Ločen od podlage z izolacijo ali ločilno folijo. Standardna
                  izvedba pri talnem gretju in tam, kjer rabimo zvočno ali
                  toplotno izolacijo. Debelejši (5–7 cm), bolj odporen na
                  obremenitve.
                </p>
              </div>
            </div>

            <p className="mt-6 text-base text-[var(--color-text-muted)]">
              Izvajamo oba tipa, skladno s projektom in zahtevami investitorja.
            </p>
          </div>
        </section>

        <section
          id="talno-gretje"
          className="py-16 sm:py-20 bg-[var(--color-bg-alt)] scroll-mt-20"
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Specializacija
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Strojni estrih za talno gretje
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Talno gretje postavi posebne zahteve: estrih mora ravnomerno
              prevajati toploto, ne sme razpokati ob širjenju cevi in mora
              pokriti cevi z zadostno plastjo nad njimi.
            </p>

            <div className="mt-8 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6">
              <h3 className="text-lg font-bold text-[var(--color-primary)]">
                Standardna sestava nad talnim gretjem
              </h3>
              <ol className="mt-4 space-y-3 text-base text-[var(--color-text)]">
                <SestavaStep
                  no={1}
                  text="EPS 100 toplotna izolacija (debelina po projektu)"
                />
                <SestavaStep
                  no={2}
                  text="Alu folija med stiroporom in cevmi (odbija toploto navzgor)"
                />
                <SestavaStep no={3} text="Cevi talnega gretja" />
                <SestavaStep
                  no={4}
                  text="Strojno zaliti cementni estrih, debeline 6–7 cm"
                />
              </ol>
              <p className="mt-5 text-sm text-[var(--color-text-muted)] leading-relaxed">
                <strong className="text-[var(--color-text)]">
                  Alternativa — čepasta folija:
                </strong>{" "}
                kadar je višinski profil omejen (pogosto pri prenovah), uporabimo
                čepasto folijo s kanali za cevi. Estrih nad njo je tanjši,
                približno 5 cm.
              </p>
            </div>

            <h3 className="mt-10 text-xl font-bold text-[var(--color-primary)]">
              Zakaj strojni estrih za talno gretje
            </h3>
            <ul className="mt-4 space-y-3">
              <BenefitRow text="Strojno mešana mešanica je bolj enotna in bolj enakomerno prevaja toploto." />
              <BenefitRow text="Manj zračnih žepkov, ki bi zmanjševali učinek talnega gretja." />
              <BenefitRow text="Hitrejša izvedba — krajše prekinitve gradnje." />
            </ul>

            <p className="mt-8 text-base text-[var(--color-text-muted)] leading-relaxed">
              Po izvedbi je treba upoštevati standardno krivuljo prvega
              ogrevanja, da estrih dehidrira in se postavi v končno obliko,
              preden položite ploščice ali parket.
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
            <p className="mt-4 text-base text-[var(--color-text-muted)] leading-relaxed">
              Da na dan izvedbe vse teče gladko, na objektu rabimo:
            </p>
            <ul className="mt-6 space-y-3">
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
            <p className="mt-6 text-sm text-[var(--color-text-muted)]">
              Če izolacijo in folijo polagate sami, preverimo skupaj. Lahko pa
              to izvedemo mi — pridemo z vsem materialom in opremo iz ene roke.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
              Kje smo že delali strojne estrihe
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
            <p className="mt-6 text-base text-[var(--color-text-muted)]">
              Stalni partnerji:{" "}
              <strong className="text-[var(--color-text)]">Kograd Igem</strong>{" "}
              in{" "}
              <strong className="text-[var(--color-text)]">
                Pergola montažne hiše
              </strong>{" "}
              iz Koroške.
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

        <ServiceCTA />
        <RelatedServices exclude="/strojni-estrihi" />
      </main>
      <Footer />
    </>
  );
}

function SestavaStep({ no, text }: { no: number; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">
        {no}
      </span>
      <span className="pt-0.5">{text}</span>
    </li>
  );
}

function BenefitRow({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] px-4 py-3">
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
      <span className="text-base text-[var(--color-text)]">{text}</span>
    </li>
  );
}
