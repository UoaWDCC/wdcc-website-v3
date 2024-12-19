import type { BlogHeader } from "@/types/components/BlogHeader";

export default function HeaderBlock({ block }: { block: BlogHeader }) {
  return (
    <>
      <h3>{block.header}</h3>
      <p>{block.description}</p>
    </>
  );
}
