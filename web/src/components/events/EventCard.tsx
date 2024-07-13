type Event = {
  title: string;
  date: Date;
  description: string;
  imageUrl: string;
  eventUrl: string;
};

export default function EventCard({ event }: { event: Event }) {
  const { title, date, description, imageUrl, eventUrl } = event;

  return (
    <div>
      <p>{title}</p>
      <p>{date.toISOString()}</p>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      <a href={eventUrl}>More info</a>
    </div>
  );
}
