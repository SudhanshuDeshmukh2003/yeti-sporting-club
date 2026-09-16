import { fixtures } from "@/data/club";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Fixtures() {
  const upcoming = fixtures.filter((f) => !f.result);
  const results = fixtures.filter((f) => f.result);

  return (
    <section id="fixtures" className="relative border-t border-ice/10 bg-pitch/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(110,180,200,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="text-sm tracking-[0.3em] text-glacier uppercase">
          Matchday
        </p>
        <h2 className="mt-3 font-display text-5xl leading-none font-bold tracking-tight text-snow uppercase md:text-6xl">
          Fixtures & Results
        </h2>

        <div className="mt-14 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xs tracking-[0.25em] text-saffron uppercase">
              Upcoming
            </h3>
            <ul className="space-y-0">
              {upcoming.map((match) => (
                <li
                  key={`${match.date}-${match.opponent}`}
                  className="border-t border-ice/15 py-6 first:border-t-0 first:pt-0"
                >
                  <p className="text-xs tracking-wide text-ice/55">
                    {formatDate(match.date)} · {match.competition}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-snow uppercase md:text-4xl">
                    vs {match.opponent}
                  </p>
                  <p className="mt-2 text-sm text-ice/70">{match.venue}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs tracking-[0.25em] text-ice/55 uppercase">
              Recent results
            </h3>
            <ul>
              {results.map((match) => (
                <li
                  key={`${match.date}-${match.opponent}`}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-t border-ice/15 py-6 first:border-t-0 first:pt-0"
                >
                  <div>
                    <p className="text-xs tracking-wide text-ice/55">
                      {formatDate(match.date)}
                    </p>
                    <p className="mt-1 text-lg text-snow">vs {match.opponent}</p>
                    <p className="mt-1 text-sm text-ice/60">{match.venue}</p>
                  </div>
                  <span className="font-display text-4xl font-semibold text-glacier">
                    {match.result}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
