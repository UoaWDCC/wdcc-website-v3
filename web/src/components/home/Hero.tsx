import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-8">
      <Button
        style={{ backgroundColor: "#c3f4ff" }}
        className="drop-shadow-lg px-8 rounded-full text-black"
      >
        The University of Auckland
      </Button>
      <h1 className="text-center text-2xl md:text-6xl">
        Web Development & Consulting Club
      </h1>
      <p className="max-w-md overflow-hidden flex items-center justify-center text-center">
        We promote the learning and practice of software development through
        workshops and real-world projects, to equip and inspire
        tomorrow&#x2019;s talent.
      </p>
      <a href="https://forms.gle/edoja1aniUduqbkQ6">
        <Button>Join for 2024</Button>
      </a>
      <img
        className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-lg"
        src="/images/hero-img-compressed.JPG"
        alt="Two WDCC members focused on their laptops. The person in the foreground is typing on a code editor, suggesting a coding class or workshop."
      />
    </div>
  );
};

export default Hero;
