"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ime = String(formData.get("ime") || "");
    const telefon = String(formData.get("telefon") || "");
    const lokacija = String(formData.get("lokacija") || "");
    const tip = String(formData.get("tip") || "");
    const kvadratura = String(formData.get("kvadratura") || "");
    const sporocilo = String(formData.get("sporocilo") || "");

    const subject = `Povpraševanje — ${tip || "Raja-tlaki"}`;
    const body = [
      `Ime: ${ime}`,
      `Telefon: ${telefon}`,
      `Lokacija: ${lokacija}`,
      `Tip dela: ${tip}`,
      `Kvadratura: ${kvadratura}`,
      ``,
      `Sporočilo:`,
      sporocilo,
    ].join("\n");

    const mailto = `mailto:rajatlaki@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] space-y-4"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          name="ime"
          label="Ime in priimek"
          required
          autoComplete="name"
        />
        <Field
          name="telefon"
          label="Telefon"
          required
          type="tel"
          autoComplete="tel"
        />
      </div>

      <Field
        name="lokacija"
        label="Lokacija objekta (kraj)"
        required
        autoComplete="address-level2"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="tip"
            className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
          >
            Tip dela
          </label>
          <select
            id="tip"
            name="tip"
            required
            defaultValue=""
            className="w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]"
          >
            <option value="" disabled>
              Izberite…
            </option>
            <option>Strojni estrih</option>
            <option>Strojni omet</option>
            <option>Industrijski tlak s kvarcom</option>
            <option>Toplotna izolacija + stirobeton</option>
            <option>Drugo / še ne vem</option>
          </select>
        </div>
        <Field
          name="kvadratura"
          label="Kvadratura (m²)"
          type="text"
          inputMode="numeric"
          placeholder="npr. 120"
        />
      </div>

      <div>
        <label
          htmlFor="sporocilo"
          className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
        >
          Sporočilo (opcijsko)
        </label>
        <textarea
          id="sporocilo"
          name="sporocilo"
          rows={4}
          className="w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]"
          placeholder="Kratek opis projekta, predviden rok ipd."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-6 py-3 transition-colors"
      >
        Pošlji povpraševanje
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
      </button>

      {submitted && (
        <p className="text-sm text-[var(--color-text-muted)]">
          Odpre se vaš e-poštni odjemalec s pripravljenim sporočilom — kliknite{" "}
          <em>Pošlji</em>, da nam ga dejansko pošljete. Lahko pa nas tudi
          neposredno pokličete na{" "}
          <a
            className="text-[var(--color-primary)] font-semibold"
            href="tel:+38651349833"
          >
            051 349 833
          </a>
          .
        </p>
      )}

      <p className="text-xs text-[var(--color-text-muted)]">
        Odgovorimo še isti dan. Ponudba je brezplačna in brez obveznosti.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  required,
  type = "text",
  autoComplete,
  inputMode,
  placeholder,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--color-text)] mb-1.5"
      >
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)]"
      />
    </div>
  );
}
