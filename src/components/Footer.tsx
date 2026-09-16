import { club } from "@/data/club";

export function Footer() {
  return (
    <footer className="border-t border-ice/10 bg-iron">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-bold tracking-wide text-snow uppercase">
            {club.name}
          </p>
          <p className="mt-1 text-sm text-ice/55">{club.location}</p>
        </div>
        <a
          href={club.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ice/70 transition-colors hover:text-snow"
        >
          {club.handle}
        </a>
      </div>
    </footer>
  );
}
