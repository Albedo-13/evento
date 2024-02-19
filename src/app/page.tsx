import Link from "next/link";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">Find events around you</h1>
      <p className="mb-12 mt-7 text-2xl opacity-75 lg:text-3xl">
        Browse more than <span className="font-bold italic underline text-accent">10,000 events</span> around you
      </p>

      <form action="" className="w-full sm:w-[580px]">
        <input
          placeholder="Search events in any city..."
          type="text"
          spellCheck={false}
          className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none transition 
          focus:ring-accent/50 focus:ring-2"
        />
      </form>

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular: </p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin" className={"hover:text-white/75 transition"}>Austin</Link>
          <Link href="/events/seattle" className={"hover:text-white/75 transition"}>Seattle</Link>
        </div>
      </section>
    </main>
  );
}
