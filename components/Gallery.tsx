"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const IMAGES: string[] = [
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_18-37-58-296.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_18-45-14-849.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_18-47-42-813.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_18-50-33-201.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_18-56-33-637.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_18-56-33-710.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-02-14-991.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-05-10-723.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-06-52-906.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-09-08-675.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-12-07-551.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-19-40-212.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-24-30-176.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-24-30-246.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-24-30-280.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-19_19-24-30-561.jpg",
  "https://raja-tlaki.b-cdn.net/viber_image_2026-04-20_07-55-54-586.jpg",
];

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i !== null && i > 0 ? i - 1 : i));
      } else if (e.key === "ArrowRight") {
        setOpenIndex((i) =>
          i !== null && i < IMAGES.length - 1 ? i + 1 : i,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [openIndex]);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {IMAGES.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-alt)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
            aria-label={`Odpri sliko ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Raja-tlaki — slika ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, 50vw"
              loading={i < 6 ? undefined : "lazy"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galerija slik"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Zapri"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {openIndex > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(openIndex - 1);
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Prejšnja slika"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          )}

          {openIndex < IMAGES.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(openIndex + 1);
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Naslednja slika"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          )}

          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={IMAGES[openIndex]}
              alt={`Raja-tlaki — slika ${openIndex + 1}`}
              fill
              sizes="100vw"
              quality={90}
              priority
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm tabular-nums">
            {openIndex + 1} / {IMAGES.length}
          </p>
        </div>
      )}
    </>
  );
}
