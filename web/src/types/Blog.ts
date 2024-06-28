import { Media } from './Media';

export interface Blog {
  id: number;
  attributes: {
    title: string;
    slug?: string;
    bannerImage: { data: Media };
    author: string;
    content?: any;
  }
}
