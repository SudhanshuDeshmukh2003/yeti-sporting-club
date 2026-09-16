import { squad } from "@/data/club";

export function Squad() {
  return (
    <section id="squad" className="relative bg-sky">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-glacier uppercase">
              First team
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none font-bold tracking-tight text-snow uppercase md:text-6xl">
              The Squad
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ice/70">
            Placeholder lineup — swap in real names, photos, and positions when
            you have them.
          </p>
        </div>

        <ul className="mt-14 divide-y divide-ice/10 border-y border-ice/10">
          {squad.map((player) => (
            <li
              key={player.number}
              className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-4 transition-colors hover:bg-ice/[0.03] md:grid-cols-[5rem_1fr_auto] md:gap-8 md:py-5"
            >
              <span className="font-display text-3xl font-semibold text-glacier/80 md:text-4xl">
                {String(player.number).padStart(2, "0")}
              </span>
              <span className="text-base text-snow md:text-lg">{player.name}</span>
              <span className="text-xs tracking-[0.25em] text-ice/50 uppercase">
                {player.position}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
