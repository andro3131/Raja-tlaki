import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-[var(--color-bg-alt)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Image
            src="https://raja-tlaki.b-cdn.net/raja-logo.png"
            alt="Raja-tlaki d.o.o."
            width={140}
            height={42}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
            Strojni estrihi, ometi in industrijski tlaki s kvarcom. Iz Kamnika
            delamo po vsej Sloveniji.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Storitve
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/strojni-estrihi"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                Strojni estrihi
              </Link>
            </li>
            <li>
              <Link
                href="/strojni-ometi"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                Strojni ometi
              </Link>
            </li>
            <li>
              <Link
                href="/industrijski-tlaki"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                Industrijski tlaki s kvarcom
              </Link>
            </li>
            <li>
              <Link
                href="/toplotna-izolacija"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                Toplotna izolacija
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="tel:+38651349833"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                051 349 833
              </a>
            </li>
            <li>
              <a
                href="mailto:rajatlaki@gmail.com"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)]"
              >
                rajatlaki@gmail.com
              </a>
            </li>
            <li className="text-[var(--color-text-muted)]">
              Pot na Dobravo 88
              <br />
              1241 Kamnik
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-[var(--color-text-muted)] flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>
            RAJA-TLAKI, strojni tlaki, ometi in druga zaključna gradbena dela,
            d.o.o. · Matična: 3815544000 · Davčna: SI71007881
          </p>
          <p>© {new Date().getFullYear()} Raja-tlaki d.o.o.</p>
        </div>
      </div>
    </footer>
  );
}
