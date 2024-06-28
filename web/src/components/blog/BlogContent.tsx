import HeaderBlock, { type HeaderBlockType } from "./HeaderBlock";
import type { TextBlockType } from "./TextBlock";
import TextBlock from "./TextBlock";

type BlogBlock = { __component: string };

export default function BlogContent({ content }: { content: BlogBlock[] }) {
  console.log(content);
  return <div>{content.map((block) => selectBlockByType(block))}</div>;
}

function selectBlockByType(block: BlogBlock) {
  switch (block.__component) {
    case "blog.blog-text":
      return <TextBlock block={block as TextBlockType} />;
    case "blog.blog-header":
      return <HeaderBlock block={block as HeaderBlockType} />;
    default:
      throw new Error("Received invalid block type");
  }
}
