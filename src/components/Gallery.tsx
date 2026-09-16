import Image from "next/image";
import { gallery } from "@/data/club";

export function Gallery() {
  return (
    <section id="gallery" className="relative border-t border-ice/10 bg-sky">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="text-sm tracking-[0.3em] text-glacier uppercase">
          From the pitch
        </p>
        <h2 className="mt-3 font-display text-5xl leading-none font-bold tracking-tight text-snow uppercase md:text-6xl">
          Gallery
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-ice/70 md:text-base">
          Matchdays, training nights, and moments from competitions across Leh
          and Ladakh.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden bg-ridge ${
                index === 0 ? "sm:col-span-2 sm:row-span-2 min-h-[22rem] md:min-h-[28rem]" : "min-h-[16rem]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, 33vw"
                }
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky/90 to-transparent px-4 pb-4 pt-12 text-sm tracking-wide text-snow">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
