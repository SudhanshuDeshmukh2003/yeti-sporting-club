import Image from "next/image";
import { club } from "@/data/club";

export function About() {
  return (
    <section id="about" className="relative border-t border-ice/10 bg-ridge">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-12 md:gap-16 md:px-8 md:py-32">
        <div className="md:col-span-5">
          <p className="text-sm tracking-[0.3em] text-glacier uppercase">
            About
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none font-bold tracking-tight text-snow uppercase md:text-6xl">
            High altitude.
            <br />
            Higher spirit.
          </h2>
          <div className="relative mt-10 aspect-[4/5] overflow-hidden md:mt-12">
            <Image
              src="/photos/night-match.png"
              alt="Yeti players training under floodlights in Leh"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:flex md:flex-col md:justify-center">
          <p className="text-lg leading-relaxed font-light text-ice/90 md:text-xl">
            {club.about}
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-ice/15 pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-xs tracking-[0.2em] text-ice/50 uppercase">
                Home
              </dt>
              <dd className="mt-2 font-display text-3xl text-snow">Leh</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-ice/50 uppercase">
                Region
              </dt>
              <dd className="mt-2 font-display text-3xl text-snow">Ladakh</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.2em] text-ice/50 uppercase">
                Focus
              </dt>
              <dd className="mt-2 font-display text-3xl text-snow">Football</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
