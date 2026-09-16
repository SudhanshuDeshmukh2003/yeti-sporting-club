import Image from "next/image";
import { club } from "@/data/club";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80"
          alt="High Himalayan ridges above Leh, Ladakh"
          fill
          priority
          className="hero-drift object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky via-sky/70 to-sky/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky/85 via-sky/30 to-transparent" />
        <div className="aurora absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-glacier/15 blur-3xl" />
        <div className="aurora absolute right-0 bottom-1/3 h-48 w-72 rounded-full bg-saffron/10 blur-3xl [animation-delay:2s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="rise rise-delay-1 mb-4 text-sm tracking-[0.35em] text-ice/80 uppercase">
          {club.location}
        </p>

        <h1 className="rise font-display text-[clamp(3.5rem,14vw,9.5rem)] leading-[0.85] font-extrabold tracking-tight text-snow uppercase">
          Yeti
          <span className="block text-ice">Sporting Club</span>
        </h1>

        <div className="brand-underline mt-4 h-px w-40 bg-saffron md:w-56" />

        <p className="rise rise-delay-2 mt-6 max-w-md text-base font-light leading-relaxed text-ice/90 md:text-lg">
          {club.tagline}
        </p>

        <div className="rise rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#join"
            className="inline-flex items-center bg-snow px-7 py-3.5 text-sm font-medium tracking-wide text-sky transition-transform hover:scale-[1.02]"
          >
            Join the club
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center border border-ice/40 px-7 py-3.5 text-sm tracking-wide text-snow transition-colors hover:border-ice hover:bg-ice/5"
          >
            See the gallery
          </a>
        </div>
      </div>
    </section>
  );
}
