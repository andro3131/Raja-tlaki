import Link from "next/link";

export function ServiceHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-[1.05]">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-6 py-3 transition-colors"
          >
            Pošljite povpraševanje
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
          <a
            href="tel:+38651349833"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold px-6 py-3 transition-colors"
          >
            051 349 833
          </a>
        </div>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          Odgovorimo še isti dan. Ponudba je brezplačna.
        </p>
      </div>
    </section>
  );
}
