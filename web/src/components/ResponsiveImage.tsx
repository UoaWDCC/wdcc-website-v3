interface ResponsiveImageProps {
  imageUrl: string;
  imageAlt: string;
}

const ResponsiveImage = ({ imageUrl, imageAlt }: ResponsiveImageProps) => {
  return (
    <img
      className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl rounded-lg"
      src={imageUrl}
      alt={imageAlt}
    />
  );
};

export default ResponsiveImage;
