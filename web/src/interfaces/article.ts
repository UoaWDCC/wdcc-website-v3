export default interface Article {
  id: number;
  attributes: {
    title: string;
    image: any;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    authors: {
      name: string;
      avatar: any;
    }[];
  };
}
