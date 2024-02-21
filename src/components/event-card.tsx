import { TEvent } from "@/lib/types";
import Image from "next/image";

type TProps = {
  event: TEvent;
};

export default function EventCard({ event }: TProps) {
  return (
    <section className="flex flex-col flex-1 h-[380px] min-w-[320px] max-w-[500px] bg-white/[3%] rounded-xl overflow-hidden relative">
      <Image src={event.imageUrl} alt={event.name} width={500} height={280} className="h-[60%] object-fit" />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
      <div className="absolute bg-red-800 left-3 top-3 h-[45px] w-[45px] bg-black/30 text-center rounded-md">
        <p className="text-xl font-bold -mb-[5px]">
          {new Date(event.date).toLocaleString("en-US", {
            day: "2-digit",
          })}
        </p>
        <p className="text-xs uppercase text-accent">
          {new Date(event.date).toLocaleString("en-US", {
            month: "short",
          })}
        </p>
      </div>
    </section>
  );
}
