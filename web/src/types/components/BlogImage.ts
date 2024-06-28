import { Media } from '../Media';

export interface BlogImage {
  id: number;
  image: { data: Media };
  scale: number;
}
