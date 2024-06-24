import { Button } from "../ui/button";

interface HeroProps {
  intro: string;
  subIntro: string;
  imageUrl: string;
  imageAlt: string;
  linkHref: string;
  linkText: string;
}

const Hero = (heroData: HeroProps) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-8">
      <Button
        style={{ backgroundColor: "#c3f4ff" }}
        className="drop-shadow-lg px-8 rounded-full text-black"
      >
        The University of Auckland
      </Button>
      <h1 className="text-center text-2xl md:text-6xl">{heroData?.intro}</h1>
      <p className="max-w-md overflow-hidden flex items-center justify-center text-center">
        {heroData.subIntro}
      </p>
      <a href={heroData.linkHref}>
        <Button>{heroData.linkText}</Button>
      </a>
      <img
        className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-lg"
        src={heroData.imageUrl}
        alt={heroData.imageAlt}
      />
    </div>
  );
};

export default Hero;
