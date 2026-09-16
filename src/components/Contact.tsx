import { club } from "@/data/club";

export function Contact() {
  return (
    <section id="join" className="relative overflow-hidden bg-sky">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glacier/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="text-sm tracking-[0.3em] text-glacier uppercase">Join us</p>
        <h2 className="mt-4 max-w-2xl font-display text-5xl leading-[0.95] font-bold tracking-tight text-snow uppercase md:text-7xl">
          Train with Yeti in Leh
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed font-light text-ice/80 md:text-lg">
          Looking to play, coach, or support? Reach out on Instagram — trials,
          training days, and match updates go live there first.
        </p>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <a
            href={club.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center bg-saffron px-8 py-4 text-sm font-semibold tracking-wide text-sky transition-transform hover:scale-[1.02]"
          >
            Follow {club.handle}
          </a>
          <p className="text-sm text-ice/60">
            Based in {club.location} · Open to new players
          </p>
        </div>
      </div>
    </section>
  );
}
