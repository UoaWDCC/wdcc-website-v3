export type TextBlockType = { __component: string; text: String };

export default function TextBlock({ block }: { block: TextBlockType }) {
  if (block.__component !== "blog.blog-text") {
    throw new Error("Received incorrect block type in BlogText component");
  }

  return <p>{block.text}</p>;
}
