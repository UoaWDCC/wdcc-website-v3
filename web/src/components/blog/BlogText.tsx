export type TextBlock = { __component: string; text: String };

export default function BlogText({ block }: { block: TextBlock }) {
  if (block.__component !== "blog.blog-text") {
    throw new Error("Received incorrect block type in BlogText component");
  }

  return <p>{block.text}</p>;
}
