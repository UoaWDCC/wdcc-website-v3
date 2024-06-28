import type { BlogHeader } from "@/types/components/BlogHeader";
import type { BlogImage } from "@/types/components/BlogImage";
import type { BlogText } from "@/types/components/BlogText";
import HeaderBlock from "./HeaderBlock";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";

export type BlogBlock = { __component: string };

export default function BlogContent({ content }: { content: BlogBlock[] }) {
  // console.log(content);
  return <div>{content.map((block) => selectBlockByType(block))}</div>;
}

function selectBlockByType(block: BlogBlock) {
  switch (block.__component) {
    case "blog.blog-text":
      return <TextBlock block={block as unknown as BlogText} />;
    case "blog.blog-header":
      return <HeaderBlock block={block as unknown as BlogHeader} />;
    case "blog.blog-image":
      return <ImageBlock block={block as unknown as BlogImage} />;
    default:
      throw new Error("Received invalid block type");
  }
}
