import { TEvent } from "@/lib/types";

type TProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: TProps) {
  const slug = params.slug;
  const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
  const event: TEvent = await response.json();
  console.log(event);

  return <main>EventPage - {event.name}</main>;
}
