import { Button } from "../ui/button";

type Event = {
  title: string;
  date: Date;
  description: string;
  imageUrl: string;
  eventUrl: string;
};

export default function EventCard({
  event,
  className = "",
}: {
  event: Event;
  className?: string;
}) {
  const { title, date, description, imageUrl, eventUrl } = event;

  return (
    <div
      className={`shadow-surround rounded-md max-w-80 text-center ${className}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-[2/1] object-cover rounded-t-md shadow-bottom"
      />
      <div className="p-6 pb-8">
        <h4>{title}</h4>
        <div className="subtitle">{date.toLocaleString()}</div>
        <p className="text-xs leading-4">{description}</p>
        <Button asChild className="mt-6">
          <a href={eventUrl} className="whitespace-pre">
            Find out more ➢
          </a>
        </Button>
      </div>
    </div>
  );
}
