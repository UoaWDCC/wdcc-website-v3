import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const STRAPI_URL = import.meta.env.STRAPI_URL;

interface EventProps {
  events: any
}

export default function Events({ events }: EventProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    console.log(activeStep);
  }, [activeStep]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setActiveStep(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setActiveStep(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <div className="max-w-[1080px] max-h-[700px] pt-16">
        <h2 className="text-center mb-8">Events</h2>
        <Carousel

          opts={{
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="flex flex-col">
            {events.map((event: any, i: number) => (
              <CarouselItem key={i} className="items-center gap-12 ">
                <div className="relative border-2 border-primary rounded-3xl border-opacity-30 shadow-lg">
                  <img
                    src={STRAPI_URL + event.eventImage.data[0].attributes.url}
                    alt={event.eventImage.data[0].attributes.url}
                    className="object-contain rounded-3xl"
                  />
                  <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 z-20">
                    <h3>{event.eventName}</h3>
                    <p>{event.eventDate}</p>
                    <p>{event.eventDescription}</p>
                  </div>
                  <div className="absolute top-0 left-0 h-full w-full bg-[#077df2] bg-opacity-40 rounded-3xl "/>
                </div>

              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-white border-none hidden md:flex">
            <button
              onClick={() => {
                activeStep > 0 ? setActiveStep((prev) => prev - 1) : {};
              }}
            />
          </CarouselPrevious>
          <CarouselNext className="bg-primary text-white border-none hidden md:flex">
            <button
              onClick={() => {
                activeStep < events.length
                  ? setActiveStep((prev) => prev + 1)
                  : {};
              }}
            />
          </CarouselNext>
        </Carousel>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        {events.map((step: any, i: number) => (
          <div
            className={`w-16 h-2 rounded ${
              activeStep === events.indexOf(step) + 1? "bg-primary" : "bg-zinc-300"
            }`}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}