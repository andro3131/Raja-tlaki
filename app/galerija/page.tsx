import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCTA } from "@/components/ServiceCTA";
import { Gallery } from "@/components/Gallery";
import { GALLERY_IMAGES } from "@/lib/galleryImages";

export const metadata: Metadata = {
  title: "Galerija — slike s terena",
  description:
    "Slike z gradbišč in iz delavnice Raja-tlaki d.o.o. — stroji, izvedba strojnih estrihov, ekipa pri delu.",
};

export default function Galerija() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-[var(--color-bg-alt)] to-[var(--color-bg)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Galerija
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] leading-[1.05]">
              Slike s terena
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-2xl">
              {GALLERY_IMAGES.length} slik z gradbišč in iz delavnice — stroji,
              izvedba strojnih estrihov, ekipa pri delu. Kliknite na sliko za
              pogled v polni velikosti.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Gallery images={GALLERY_IMAGES} />
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
