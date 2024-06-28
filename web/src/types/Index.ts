import { Link } from './components/Link';
import { Media } from './Media';

export interface Index {
  id: number;
  attributes: {
    gallery?: { data: Media[] };
    intro?: string;
    subintro?: string;
    links: Link[];
    about?: string;
    blocks?: any;
    locale: string;
    localizations?: { data: Index[] }
  }
}
