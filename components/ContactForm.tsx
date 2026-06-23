"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const EMAILJS_SERVICE_ID = "service_hxwalcr";
const EMAILJS_TEMPLATE_ID = "template_wp5y1gj";
const EMAILJS_PUBLIC_KEY = "BaAka1O8XS8XA_5_V";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: skrito polje, ki ga izpolnijo samo boti. Če ima vrednost,
    // oddajo tiho zavržemo (prikažemo "uspeh", da bota ne opozorimo) in NE pošljemo maila.
    if (String(formData.get("website") || "").trim() !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    const params = {
      from_name: String(formData.get("ime") || "").trim() || "—",
      from_email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("telefon") || "").trim() || "—",
      location: String(formData.get("lokacija") || "").trim() || "—",
      service_type: String(formData.get("tip") || "").trim() || "—",
      area: String(formData.get("kvadratura") || "").trim() || "—",
      message: String(formData.get("sporocilo") || "").trim() || "—",
    };

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        params,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--color-surface)] rounded-2xl p-8 sm:p-10 border border-[var(--color-border)] text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--color-primary)]"
          >
            <path d="m5 12 5 5L20 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[var(--color-primary)]">
          Hvala, sporočilo je oddano.
        </h3>
        <p className="mt-3 text-base text-[var(--color-text-muted)] leading-relaxed max-w-md mx-auto">
          Oglasili se vam bomo še isti dan. Če gre za nujno povpraševanje,
          nas lahko tudi neposredno pokličete na{" "}
          <a
            href="tel:+38651349833"
            className="text-[var(--color-primary)] font-semibold"
          >
            051 349 833
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[var(--color-accent)] hover:underline"
        >
          Pošlji še eno povpraševanje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)] space-y-4"
    >
      {/* Honeypot proti spamu — vizualno skrito; ljudje ga ne izpolnijo, boti ga */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Spletna stran (pustite prazno)</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
        name="email"
        label="Email"
        required
        type="email"
        autoComplete="email"
        placeholder="ime@primer.si"
      />

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
        disabled={status === "sending"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 transition-colors"
      >
        {status === "sending" ? "Pošiljam…" : "Pošlji povpraševanje"}
        {status !== "sending" && (
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
        )}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Pošiljanje ni uspelo. Poskusite ponovno ali nas pokličite na{" "}
          <a
            className="font-semibold underline"
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
