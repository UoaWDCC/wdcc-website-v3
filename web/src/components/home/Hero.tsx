import ResponsiveImage from "../ResponsiveImage";
import { Button } from "../ui/button";
interface HeroProps {
  intro: string;
  subIntro: string;
  imageUrl: string;
  imageAlt: string;
  linkHref: string;
  linkText: string;
}

const Hero = ({
  intro,
  subIntro,
  imageUrl,
  imageAlt,
  linkHref,
  linkText,
}: HeroProps) => {
  return (
    <div className="flex flex-col items-center gap-6 lg:gap-8">
      <Button variant="skyblue" className="rounded-full px-8 cursor-default">
        The University of Auckland
      </Button>
      <h1 className="text-center leading-[2.7625rem] md:leading-[4.2rem] lg:leading-[5.8rem] text-4xl md:text-5xl lg:text-6xl">
        {intro}
      </h1>
      <p className="max-w-md overflow-hidden flex items-center justify-center text-center">
        {subIntro}
      </p>
      <Button asChild>
        <a href={linkHref}>{linkText}</a>
      </Button>
      <ResponsiveImage imageUrl={imageUrl} imageAlt={imageAlt} />
    </div>
  );
};

export default Hero;
