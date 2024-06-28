import type { BlogHeader } from "@/types/components/BlogHeader";

export default function HeaderBlock({ block }: { block: BlogHeader }) {
  return (
    <>
      <h2>{block.header}</h2>
      <p>{block.description}</p>
    </>
  );
}
