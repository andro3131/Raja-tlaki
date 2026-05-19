import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { FaqPageSchema } from "@/components/StructuredData";

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
    body: "Od 2010 delujemo kot podjetje (d.o.o.), pred tem pa smo v isti stroki delovali že leta.",
  },
  {
    title: "Ekipa skupaj 16 let",
    body: "Jedro naše ekipe je skupaj že več kot 16 let.",
  },
  {
    title: "Cela Slovenija",
    body: "Delamo po vsej Sloveniji, bili smo pa tudi že na Hrvaškem.",
  },
  {
    title: "Stojimo za svojim delom",
    body: "Kvaliteta izvedbe naših projektov govori sama zase. Držimo se dogovorov in izvedemo storitev v željenih rokih. Če pa bi se težave vseeno pojavile, jih bomo z veliko skrbnostjo tudi odpravili.",
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
    title: "Poizvedba",
    body: "Pokličite nas ali nam napišite sporočilo. Dogovorili se bomo za ogled na vašem objektu.",
  },
  {
    title: "Brezplačna ponudba",
    body: "Po ogledu prejmete ponudbo, ki je brezplačna in brez obveznosti.",
  },
  {
    title: "Priprava objekta",
    body: "Za pripravo objekta je treba zagotoviti elektriko, tekočo vodo, dostop za stroj in črpalko. Mi prinesemo vse ostalo — material in opremo.",
  },
  {
    title: "Izvedba",
    body: "Po pripravi objekta začnemo z izvedbo. Držimo se dogovorjenih rokov.",
  },
  {
    title: "Po izvedbi",
    body: "Po izvedbi dobite vse potrebne informacije o negi in sušenju estriha ali ometa. Če bi slučajno nastopile kakšne težave, jih bomo obravnavali z vso skrbnostjo.",
  },
];

const faqs = [
  {
    q: "Lokacija izvedbe?",
    a: "Delamo po vsej Sloveniji.",
  },
  {
    q: "Kakšna je cena?",
    a: "Cena je odvisna od kvadrature, debeline, dostopnosti objekta in priprave podlage. Za realno številko potrebujemo tloris ali kratek ogled — ponudba je brezplačna.",
  },
  {
    q: "Koliko časa sušenja je potrebno pred polaganjem talnih oblog?",
    a: "Vinil ali parket: pri standardni debelini 6–7 cm računamo nekje 1 cm = približno 1 teden. Tlak je torej pripravljen v 6 do 8 tednih, odvisno od prostora in temperature. Ploščice: le-te se lahko polagajo že po 1–2 tednih.",
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
    q: "Kaj je Baumit Ratio 26 in zakaj se ga uporablja?",
    a: "Baumit Ratio 26 (oznaka tudi MPI 26) je enoslojni mavčno-apneno-cementni notranji omet z zrnavostjo 1 mm. Primeren je za bivalne prostore, kjer rabite gladko podlago za barvanje, in tudi za prostore s povišano vlažnostjo — kopalnice, kuhinje, kleti. Strojni nanos je hitrejši in enakomernejši od ročnega.",
  },
  {
    q: "Ali je primeren za kopalnice in kuhinje?",
    a: "Da. Baumit Ratio 26 je formuliran tako, da prenese povišano vlažnost gospodinjskih kopalnic, kuhinj in kleti. Za stalno mokre cone v kopalnici (območje tuša) priporočamo dodatno hidroizolacijo pod ploščicami.",
  },
  {
    q: "Ali delate tudi zunanje omete in fasade?",
    a: "Da — referenca papirnica Količevo je fasada s cementnim strojnim ometom. Pokličite nas za konkretno ponudbo.",
  },
  {
    q: "Kaj pomeni 'glajenje s kvarcom'?",
    a: "V svežo betonsko maso vsipamo posebno mešanico s kvarčnim peskom in cementom (utrjevalec površine). Z večkratnim strojnim glajenjem ta mešanica utrdi zgornji sloj betona — dobimo trpežno, gosto, gladko in sijajno površino brez prahu, ki prenese težo viličarjev in stalno obtežitev strojev. To je ena izvedba 'iz enega kosa', brez dodatnih oblog.",
  },
  {
    q: "Kakšne obremenitve prenese industrijski tlak?",
    a: "Industrijski tlak s kvarcom je dimenzioniran za logistično in proizvodno rabo — viličarji, težka skladiščna oprema, stroji s stalnim obratom. Konkretne nosilnosti določimo po projektu glede na debelino plošče in armaturo.",
  },
  {
    q: "V kakšnem obsegu je možna izvedba industrijskega tlaka?",
    a: "Izvedli smo že posamezne objekte preko 12.000 m² (Lek Mengeš). Seveda je možna izvedba tako manjših delavnic (cca 100 m²) kot tudi velikih industrijskih hal.",
  },
  {
    q: "Kakšne izolacije polagate?",
    a: "Standardno EPS 100 (ekspandiran polistiren) v debelinah po projektu in PVC folijo proti vlagi. Po potrebi tudi stirobeton kot lažja izravnalna plast.",
  },
  {
    q: "Kaj če se po izvedbi vseeno kaj pojavi?",
    a: "Beton, ki ga zalijemo, drži desetletja. Če bi pa vseeno nastala kakšna težava, jo bomo seveda z vso skrbnostjo obravnavali.",
  },
];

export default function Home() {
  return (
    <>
      <FaqPageSchema faqs={faqs} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesPreview />
        <TrustBlock />
        <ReferenceHighlight />
        <GallerySection />
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
            Izvajamo storitve polaganja strojnega estriha, strojnih ometov,
            industrijskih tlakov s kvarcom ter toplotne izolacije s
            stirobetonom. Zagotovimo celoten proces dela - od priprave podlage
            do gladko zglajenega tlaka ali ometa. Z lastno črpalko, silosom in
            ekipo šestih mojstrov zagotavljamo hitrost in kakovost.
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

function GallerySection() {
  return (
    <section id="slike" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            Galerija
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
            Slike s terena
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Iz našega vsakdanjega dela — stroji, izvedba estrihov in ekipa pri
            delu. Kliknite na sliko za pogled v polni velikosti.
          </p>
        </div>
        <Gallery />
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
            Od enega klica do gotovega tlaka
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Naša izvedba poteka hitro in kvalitetno, kar nam zagotavljajo naše
            dolgoletne izkušnje.
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
          <div className="lg:col-span-2 relative aspect-[3/2] rounded-2xl overflow-hidden border border-[var(--color-border)]">
            <Image
              src="https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-25-23-075.jpg"
              alt="Uroš Ržišnik z ekipo Raja-tlaki"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              O nas
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
              Ekipa šestih ljudi, ki se znajdejo na vsakem gradbišču
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              <p>
                Uroš Ržišnik je leta 2010 registriral podjetje Raja-tlaki
                d.o.o., pred tem pa je v stroki delal že kar nekaj let. Danes
                njegova ekipa šteje 6 ljudi, jedro ekipe pa je skupaj že več kot
                16 let.
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
                Cene se vedno dogovorimo individualno glede na vrsto in obseg
                dela. Naše reference govorijo same zase. Morebitne težave pa
                obravnavamo hitro in z vso skrbnostjo.
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
