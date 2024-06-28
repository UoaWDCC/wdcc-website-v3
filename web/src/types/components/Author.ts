import { Media } from '../Media';

export interface Author {
  id: number;
  name: string;
  avatar?: { data: Media };
}
