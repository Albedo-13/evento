import H1 from "@/components/h1";

type TProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: TProps) {
  const city = params.city;

  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
  const events = await response.json();
  console.log(events);

  return (
    <main className="flex flex-col items-center px-5 py-24 min-h-[110vh]">
      <H1>{city === "all" ? "All Events" : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}</H1>
      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
