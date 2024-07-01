import type { BlogImage } from "@/types/components/BlogImage";

const { STRAPI_URL } = import.meta.env;

export default function ImageBlock({ block }: { block: BlogImage }) {
  const { url, alternativeText } = block.image.data.attributes;

  return (
    <img
      className={`m-auto w-[${block.scale}%]`}
      src={STRAPI_URL + url}
      alt={alternativeText}
    />
  );
}
