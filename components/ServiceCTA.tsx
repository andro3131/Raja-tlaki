import Link from "next/link";

export function ServiceCTA() {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Pripravljeni za ponudbo?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl mx-auto">
          Pokličite ali pošljite kratko sporočilo. Odgovorimo še isti dan,
          ponudba je brezplačna in brez obveznosti.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-6 py-3 transition-colors"
          >
            Pošljite povpraševanje
          </Link>
          <a
            href="tel:+38651349833"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-[var(--color-primary)] hover:bg-white/90 font-semibold px-6 py-3 transition-colors"
          >
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            051 349 833
          </a>
        </div>
      </div>
    </section>
  );
}
