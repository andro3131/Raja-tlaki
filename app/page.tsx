import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";

const services = [
  {
    href: "/strojni-estrihi",
    title: "Strojni estrihi",
    description:
      "Cementni strojni estrihi za novogradnje in prenove — primerni za talno gretje, naklone okoli hiše ali mansarde.",
  },
  {
    href: "/strojni-ometi",
    title: "Strojni ometi",
    description:
      "Notranji ometi z Baumit Ratio 26. Primerni tudi za kopalnice in kuhinje. Strojni nanos zagotavlja gladko površino brez razpok.",
  },
  {
    href: "/industrijski-tlaki",
    title: "Industrijski tlaki s kvarcom",
    description:
      "Glajen beton s kvarčnim posipom za hale in delavnice. Trpežna površina, ki prenese težke obremenitve in viličarje.",
  },
  {
    href: "/toplotna-izolacija",
    title: "Toplotna izolacija + stirobeton",
    description:
      "Celovita priprava podlage pred estrihom — polaganje toplotne izolacije, stirobetona in folij.",
  },
];

const trust = [
  {
    title: "20 let izkušenj",
    body: "Od 2010 kot d.o.o., pred tem v stroki že leta.",
  },
  {
    title: "Ekipa skupaj 16 let",
    body: "Iste roke od prvega do zadnjega projekta.",
  },
  {
    title: "Cela Slovenija",
    body: "Kamnik kot baza, delamo od Kopra do Maribora.",
  },
  {
    title: "Stojimo za delom",
    body: "Beton drži desetletja — če bi se kaj pojavilo, se oglasimo.",
  },
];

const references = [
  "Lek Mengeš (2025) — poslovni objekt, 12.000 m²",
  "Celovški dvori, Ljubljana (2007) — strojni estrihi",
  "Hotel Union, Ljubljana — bazen v 8. nadstropju + okolica",
  "Bazen Kolezija, Ljubljana — vgradnja in glajenje betona",
  "Papirnica Količevo — fasada s cementnim strojnim ometom (5 stavb)",
  "Stanovanjska stavba Zupančičeva jama, Ljubljana — 6 nadstropij",
  "Dom upokojencev Prebold (2009) — strojni estrihi",
];

const process = [
  {
    title: "Pokličete",
    body: "Po telefonu se zmeniva za ogled — na vašem objektu ali iz tlorisa.",
  },
  {
    title: "Brezplačna ponudba",
    body: "Pisno, s količinami in rokom. Brez obveznosti.",
  },
  {
    title: "Priprava objekta",
    body: "Pripravite: dovod 380 V, tekoča voda, dostop za stroj in črpalko. Mi prinesemo vse ostalo — pesek, cement in opremo.",
  },
  {
    title: "Izvedba",
    body: "Strojni nanos, ekipa 4–6 ljudi. Povprečna hiša ~1 dan za estrih.",
  },
  {
    title: "Po izvedbi",
    body: "Beton drži desetletja. Če bi se kaj pojavilo, se oglasimo.",
  },
];

const faqs = [
  {
    q: "Kaj je strojni estrih in zakaj ne navadni?",
    a: "Strojni estrih zalijemo s pomočjo stroja za mešanje in betonske črpalke. Pesek in cement pripeljemo na objekt, ju zmešamo v stroju z natančno količino vode in črpalko transportiramo do prostora. Mešanica je bolj enotna in gostejša, zato dobite gladek, kompakten tlak — pripravljen na ploščice ali parket brez dodatnega izravnalnega sloja. Strojno polaganje je hitrejše: povprečno hišo zalijemo v enem dnevu.",
  },
  {
    q: "Koliko časa traja izvedba povprečne hiše?",
    a: "Strojni estrih za povprečno enodružinsko hišo zalijemo v približno enem dnevu. Na večjih objektih nekaj dni, odvisno od kvadrature in dostopnosti.",
  },
  {
    q: "Kaj moram pripraviti pred prihodom ekipe?",
    a: "Trifazni priklop 380 V (16 A), dostop do tekoče vode, dostop za tovornjak in stroj za mešanje, ter pripravljeno podlago (toplotna izolacija EPS, PVC folija; pri talnem gretju direktno na stiroporu uporabimo alu folijo med stiroporom in cevmi, po potrebi tudi čepasto folijo). Če izolacijo polagate sami, preverimo skupaj — lahko pa vse izvedemo mi.",
  },
  {
    q: "V kakšnih debelinah delate strojne estrihe?",
    a: "Na talno gretje + EPS 100 + alu folija standardno 6–7 cm. Na čepasto folijo (talno gretje) ~5 cm. Naklonski estrih okoli hiše in estrih v mansardi izvajamo po projektu.",
  },
  {
    q: "Ali pridete tudi izven Kamnika?",
    a: "Da — delamo po vsej Sloveniji. Iz Kamnika do Kopra, Maribora ali Lendave ni težave. Velikost ekipe in mobilna oprema sta narejena za to.",
  },
  {
    q: "Kdaj lahko po izvedbi hodim po tlaku ali polagam ploščice?",
    a: "Previdno hodim že po 24–48 urah. Ploščice in parket se polagajo po standardnih krivuljah sušenja — pri debelini 6–7 cm računamo nekje 6–8 tednov, odvisno od prostora in temperature. Točen rok povemo po izvedbi.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesPreview />
        <TrustBlock />
        <ReferenceHighlight />
        <Process />
        <About />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function ServicesPreview() {
  return (
    <section id="storitve" className="py-20 sm:py-24 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Storitve
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Kaj delamo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Zagotavljamo celoten proces - od priprave podlage do gladko
            zglajenega tlaka. Z lastno opremo in ekipo 6 mojstrov zagotavljamo
            hitrost in kakovost.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed flex-1">
                {s.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
                Več
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBlock() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Zakaj Raja-tlaki
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Štirje razlogi za sodelovanje z nami
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t, i) => (
            <div
              key={t.title}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-bold text-[var(--color-primary)]">
                {t.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferenceHighlight() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Reference
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              Kjer smo že delali
            </h2>
            <p className="mt-4 text-base text-white/80 leading-relaxed">
              Manjše hišne novogradnje in večji poslovni objekti. Stalna
              partnerja Kograd Igem in Pergola montažne hiše iz Koroške.
            </p>
            <Link
              href="/reference"
              className="mt-6 inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
            >
              Vse reference
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <ul className="divide-y divide-white/15">
              {references.map((r) => (
                <li key={r} className="py-3.5 flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                  <span className="text-base sm:text-lg leading-snug">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/15">
              <p className="text-sm uppercase tracking-wider text-white/60 font-medium">
                Stalni poslovni partnerji
              </p>
              <p className="mt-2 text-base">
                Kograd Igem · Pergola montažne hiše · Manjša gradbena podjetja
                po vsej Sloveniji
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Postopek
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Od klica do gotovega tlaka
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Brez presenečenj. Vsako fazo poznamo na pamet, ker se ponavlja že
            20 let.
          </p>
        </div>

        <ol className="mt-12 grid md:grid-cols-5 gap-5">
          {process.map((step, i) => (
            <li
              key={step.title}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-5 relative"
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
  );
}

function About() {
  return (
    <section id="o-nas" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-border)]">
            <Image
              src="https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-25-23-075.jpg"
              alt="Uroš Ržišnik z ekipo Raja-tlaki"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              O nas
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
              Šest ljudi, ki se znajdejo na vsakem gradbišču
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Uroš Ržišnik je leta 2010 registriral Raja-tlake kot d.o.o. — pred
                tem je v stroki delal že leta. Danes ekipa šteje 6 ljudi,
                sodelavci so z njim po 16 let in več.
              </p>
              <p>
                Delamo strojne estrihe, Baumit ometov in industrijske tlake po
                celi Sloveniji — za zasebne investitorje in gradbenike, kot sta{" "}
                <strong className="text-[var(--color-text)]">Kograd Igem</strong>{" "}
                in{" "}
                <strong className="text-[var(--color-text)]">
                  Pergola montažne hiše
                </strong>
                .
              </p>
              <p>
                Cene se vedno dogovorimo individualno, ker ni dveh enakih
                objektov. Beton, ki ga zalijemo, drži desetletja — in če bi se
                vseeno kaj pojavilo, se oglasimo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20 sm:py-24 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Pogosta vprašanja
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Kar najpogosteje vprašajo
          </h2>
        </div>

        <div className="mt-12 space-y-3">
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
  );
}
