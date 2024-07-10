export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  demoLink: string;
  viewDemoLink: string;
  members: { role?: string; name: string }[];
  teamImg?: {
    src: string;
    alt: string;
  } | null;
}
