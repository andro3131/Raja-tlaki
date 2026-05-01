"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-25-23-075.jpg",
    alt: "Ekipa Raja-tlaki d.o.o. — Uroš Ržišnik z delavci",
  },
  {
    src: "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-24-30-176.jpg",
    alt: "Strojno mešanje in nanos estriha",
  },
  {
    src: "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-24-30-057.jpg",
    alt: "Polaganje strojnega tlaka",
  },
];

const ROTATION_MS = 5000;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((v) => (v + 1) % slides.length),
      ROTATION_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative isolate overflow-hidden text-white h-[88vh] min-h-[600px] max-h-[860px]">
      <div className="absolute inset-0 -z-10">
        {slides.map((s, idx) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            priority={idx === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              idx === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/85" />
        <div className="absolute inset-0 bg-[var(--color-primary-dark)]/15 mix-blend-multiply" />
      </div>

      <div className="relative h-full mx-auto max-w-6xl px-4 sm:px-6 flex flex-col justify-end pb-14 sm:pb-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] max-w-4xl drop-shadow-lg">
          RAJA-TLAKI d.o.o. -{" "}
          <span className="text-[var(--color-accent)]">
            Strojni tlaki in ometi
          </span>
          .
        </h1>

        <p className="mt-5 text-xl sm:text-2xl text-white/90 leading-snug max-w-2xl drop-shadow font-medium">
          Izkušena ekipa, ki tlake polaga skupaj že 16 let.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold px-6 py-3.5 transition-colors shadow-lg shadow-black/20"
          >
            Brezplačna ponudba
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
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-[var(--color-primary)] font-semibold px-6 py-3.5 transition-colors"
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

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
          <Stat label="20+ let izkušenj" />
          <Stat label="Zagotovljena kvaliteta" />
          <Stat label="Storitev po celotni Sloveniji" />
          <Stat label="Lasten mobilen silos + črpalka" />
        </div>
      </div>

      <div className="absolute bottom-5 right-4 sm:right-6 flex gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setActive(idx)}
            aria-label={`Slika ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === active
                ? "w-8 bg-[var(--color-accent)]"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-medium">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[var(--color-accent)]"
      >
        <path d="m9 12 2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      {label}
    </span>
  );
}
