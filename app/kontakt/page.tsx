import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Pokličite 051 349 833 ali pišite na rajatlaki@gmail.com. Pot na Dobravo 88, 1241 Kamnik. Delamo po vsej Sloveniji.",
};

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Kontakt
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-[1.05]">
              Stopite v stik
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              Pokličite, napišite e-pošto ali nam pošljite kratko povpraševanje
              prek obrazca. Odgovorimo še isti dan, ponudba je brezplačna in
              brez obveznosti.
            </p>
          </div>
        </section>

        <ContactSection variant="compact" />

        <section className="pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
              <iframe
                title="Lokacija — Pot na Dobravo 88, Kamnik"
                src="https://www.google.com/maps?q=Pot+na+Dobravo+88,+1241+Kamnik&output=embed"
                width="100%"
                height="380"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] text-center">
              Kamnik je naša baza, vendar delamo po{" "}
              <strong className="text-[var(--color-text)]">vsej Sloveniji</strong>{" "}
              — od Kopra do Maribora.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
