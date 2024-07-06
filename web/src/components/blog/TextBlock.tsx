import type { BlogText } from "@/types/components/BlogText";

export default function TextBlock({ block }: { block: BlogText }) {
  return <p>{block.text}</p>;
}
