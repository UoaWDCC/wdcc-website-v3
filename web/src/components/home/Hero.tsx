import ResponsiveImage from "../ResponsiveImage";
import SkybluePillButton from "../ui/SkybluePillButton";
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
    <div className="flex flex-col items-center gap-4 lg:gap-8">
      <SkybluePillButton>The University of Auckland</SkybluePillButton>
      <h1 className="text-center leading-[1.7625rem] md:leading-[5.8rem] text-2xl  md:text-6xl">
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
