import { TEvent } from "@/lib/types";
import EventCard from "./event-card";

type TProps = { events: TEvent[] };

export default function EventsList({ events }: TProps) {
  return (
    <section className="flex flex-wrap justify-center gap-10 mt-16 max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
