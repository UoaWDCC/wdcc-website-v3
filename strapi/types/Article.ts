import { Author } from './components/Author';
import { Media } from './Media';

export interface Article {
  id: number;
  attributes: {
    content?: string;
    title?: string;
    description?: string;
    slug?: string;
    image?: { data: Media };
    authors: Author[];
    locale: string;
    localizations?: { data: Article[] }
  }
}
