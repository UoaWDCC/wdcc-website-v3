export type HeaderBlockType = {
  __component: string;
  header: String;
  description: String;
};

export default function HeaderBlock({ block }: { block: HeaderBlockType }) {
  return (
    <>
      <h2>{block.header}</h2>
      <p>{block.description}</p>
    </>
  );
}
