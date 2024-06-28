import type { TextBlock } from "./BlogText";
import BlogText from "./BlogText";

type BlogBlock = TextBlock;

export default function BlogContent({ content }: { content: BlogBlock[] }) {
  return <div>{content.map((block) => selectBlockByType(block))}</div>;
}

function selectBlockByType(block: BlogBlock) {
  switch (block.__component) {
    case "blog.blog-text":
      return <BlogText block={block as TextBlock} />;
    default:
      throw new Error("Received invalid block type");
  }
}
