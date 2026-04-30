import { ContactForm } from "./ContactForm";

export function ContactSection({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  return (
    <section
      id="kontakt"
      className={
        variant === "compact"
          ? "py-16 sm:py-20"
          : "py-20 sm:py-28 bg-[var(--color-bg-alt)]"
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Kontakt
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--color-primary)]">
              Imate projekt? Pošljite kratko povpraševanje.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Pokličite ali napišite — odgovorimo še isti dan. Ponudba je
              brezplačna in brez obveznosti.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                }
                label="Telefon"
                value="051 349 833"
                href="tel:+38651349833"
              />
              <ContactRow
                icon={
                  <>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </>
                }
                label="E-pošta"
                value="rajatlaki@gmail.com"
                href="mailto:rajatlaki@gmail.com"
              />
              <ContactRow
                icon={
                  <>
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                }
                label="Naslov"
                value={
                  <>
                    Pot na Dobravo 88, 1241 Kamnik
                    <br />
                    <span className="text-sm text-[var(--color-text-muted)]">
                      Delamo po vsej Sloveniji.
                    </span>
                  </>
                }
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const valueEl = href ? (
    <a
      href={href}
      className="text-base font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)]"
    >
      {value}
    </a>
  ) : (
    <span className="text-base font-semibold text-[var(--color-text)]">
      {value}
    </span>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-medium">
          {label}
        </p>
        {valueEl}
      </div>
    </div>
  );
}
