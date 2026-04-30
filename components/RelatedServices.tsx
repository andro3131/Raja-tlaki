import Link from "next/link";

const allServices = [
  {
    href: "/strojni-estrihi",
    title: "Strojni estrihi",
    description: "Cementni estrih za talno gretje, naklone in mansarde.",
  },
  {
    href: "/strojni-ometi",
    title: "Strojni ometi",
    description: "Baumit Ratio 26 — gladek omet za bivalne in vlažne prostore.",
  },
  {
    href: "/industrijski-tlaki",
    title: "Industrijski tlaki s kvarcom",
    description: "Glajen beton za hale, delavnice in poslovne prostore.",
  },
  {
    href: "/toplotna-izolacija",
    title: "Toplotna izolacija + stirobeton",
    description: "Priprava podloge pred estrihom — vse iz ene roke.",
  },
];

export function RelatedServices({ exclude }: { exclude: string }) {
  const services = allServices.filter((s) => s.href !== exclude);
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
          Oglejte si tudi
        </h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-[var(--color-primary)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
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
